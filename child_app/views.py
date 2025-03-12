import string
from django.shortcuts import render
import joblib
import pandas as pd
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import spacy
from rest_framework.views import APIView
import numpy as np
from asgiref.sync import sync_to_async
import json
import re


class IntentClassifierAPI(APIView):
    def __init__(self):
        """Initialize the Intent Classifier API."""
        self.nlp_processor = spacy.load("en_core_web_sm")
        self.responses_data = pd.read_csv("csv/emotion_data.csv", encoding="utf-8")
        self.intent_response_map = self._build_intent_response_map()
        self.response_data = self.load_response_json_data()
        self.logreg_model = joblib.load(
            "child_app/models/train/logistic_regression_model.pkl"
        )
        self.tfidf_vectorizer = joblib.load(
            "child_app/models/train/tfidf_vectorizer.pkl"
        )
        self.classification_model = None
        self.feature_vectorizer = None
        self.label_binarizer = None
        self._load_model_artifacts()

    def _build_intent_response_map(self):
        """Create a mapping of intent tags to their respective responses."""
        return self.responses_data.set_index("tag")["response"].to_dict()

    # use for load the steps json file data ------------------------
    def load_steps_json_data(self, user_lang):
        """Load the steps data from a JSON file."""
        try:
            with open("steps.json", "r", encoding="utf-8") as file:
                steps_data = json.load(file)
                for item in steps_data[user_lang]:
                    if "steps" not in item or "response" not in item:
                        raise KeyError(f"Missing key in item: {item}")
                return {
                    item["tag"]: {
                        "steps": item.get("steps", ""),
                        "response": item.get("response", ""),
                    }
                    for item in steps_data[user_lang]
                }
        except FileNotFoundError as e:
            raise Exception("Steps JSON file not found: " + str(e))
        except json.JSONDecodeError as e:
            raise Exception("Error parsing JSON file: " + str(e))

    # use for load the response json file data --------------------
    def load_response_json_data(self):
        try:
            with open("response.json", "r", encoding="utf-8") as file:
                response_data = json.load(file)

            return response_data

        except FileNotFoundError:
            print("Error: response.json file not found.")
            return {}
        except json.JSONDecodeError:
            print("Error: Failed to decode response_data.json.")
            return {}

    # loading the trained model
    def _load_model_artifacts(self):
        """Load the trained classification model, vectorizer, and label binarizer."""
        try:
            self.classification_model = joblib.load(
                "child_app/models/new_model/new_model.pkl"
            )
            self.feature_vectorizer = joblib.load(
                "child_app/models/new_model/new_vectorizer.pkl"
            )
            self.label_binarizer = joblib.load("child_app/models/new_model/new_mlb.pkl")

        except FileNotFoundError as e:
            raise Exception("Required model files are missing: " + str(e))

    def _process_user_query(self, query):
        """Preprocess the user's query by lemmatizing and removing stop words."""
        if query in ["hi", "Hi", "hi,", "HI", "hI"]:
            return "Hello"
        res = " ".join(
            [token.lemma_ for token in self.nlp_processor(query) if not token.is_stop]
        )
        return res

    def _predict_intents(self, query, threshold=0.25):
        """Predict intents for the processed query using the classification model."""
        query_features = self.feature_vectorizer.transform([query])
        prediction_probabilities = self.classification_model.predict_proba(
            query_features
        )[0]
        top_indices = np.argsort(prediction_probabilities)[-3:][::-1]
        top_probabilities = prediction_probabilities[top_indices]

        max_probability = max(prediction_probabilities)
        if max_probability < threshold:
            return None

        predicted_indices = np.where(prediction_probabilities == max_probability)[0]
        return self.label_binarizer.classes_[predicted_indices]

    def _generate_response(self, intent_label):
        """Fetch the response for a given intent label."""
        return self.intent_response_map.get(intent_label)

    def clean_text(self, text):
        text = text.lower()
        text = re.sub(r"\d+", "", text)
        text = text.translate(str.maketrans("", "", string.punctuation))
        text = text.strip()
        return text

    def emotion_intent(self, text):
        text_cleaned = self.clean_text(text)
        text_tfidf = self.tfidf_vectorizer.transform([text_cleaned])
        predicted_probs = self.logreg_model.predict_proba(text_tfidf)[0]

        # Get the predicted class
        predicted_category_logreg = self.logreg_model.classes_[predicted_probs.argmax()]

        response = [predicted_category_logreg]

        return response

    def classify_intent_and_respond(self, query, user_lang):
        """Main logic to classify user intent and generate a response."""
        if not query:
            return {"error": "No query provided"}

        response_data = self.load_response_json_data()

        response_name = response_data["en"]
        if user_lang is None:
            return {"error": "No language Selected"}

        self.steps_data = self.load_steps_json_data(user_lang)

        if user_lang in ["en", "es", "fr", "nl"]:
            intent_response_map_new = response_data[user_lang]

        processed_query = self._process_user_query(query)
        predicted_intents = self._predict_intents(query, threshold=0.25)
        if predicted_intents in [
            "Happy",
            "Excited",
            "Loved",
            "Sad",
            "Angry",
            "Depressed",
            "Stressed",
            "Guilty",
            "Lonely",
            "Resilient",
            "Hurt",
        ]:
            predicted_intents = self.emotion_intent(processed_query)

        response_map = {
            "en": "Sorry, I don't understand.",
            "nl": "Sorry, ik begrijp het niet.",
            "es": "Lo siento, no lo entiendo.",
            "fr": "Désolé, je ne comprends pas.",
        }

        if not predicted_intents:
            return {
                "response": response_map.get(user_lang, response_map["en"]),
                "steps": [],
                "options": [],
            }

        predicted_intent = predicted_intents[0]
        response_options = intent_response_map_new.get(predicted_intent, [])
        response_name_data = response_name.get(predicted_intent, [])
        steps = self.steps_data.get(predicted_intent, [])

        if not response_options:
            return {"error": f"No response found for intent: {predicted_intent}"}

        formatted_options = [
            {"name": option, "route": name.replace(" ", "")}
            for name, option in zip(response_name_data, response_options)
        ]

        return {
            "response": steps.get("response", ""),
            "steps": steps.get("steps", ""),
            "options": formatted_options,
        }


intent_classifier_api = IntentClassifierAPI()


async def async_chatbot_view(request):
    """Asynchronous view to handle user queries."""
    user_query = request.POST.get("query") or request.GET.get("message")
    user_lang = request.GET.get("lang")
    if not user_query:
        return JsonResponse({"error": "No query provided"}, status=400)

    if not user_lang:
        user_lang = "en"

    # Validate language parameter
    allowed_languages = {"en", "fr", "nl", "es"}
    if user_lang not in allowed_languages:
        user_lang = "en"

    response = await sync_to_async(intent_classifier_api.classify_intent_and_respond)(
        user_query, user_lang
    )
    return JsonResponse(response, json_dumps_params={"ensure_ascii": False})
