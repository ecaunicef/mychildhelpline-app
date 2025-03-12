import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.multiclass import OneVsRestClassifier
from sklearn.preprocessing import MultiLabelBinarizer
import joblib
import spacy
import os
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
)
from tqdm import tqdm

# Load English and multilingual models
nlp = spacy.load("en_core_web_sm")

CSV_FILE_PATH = "../csv/emotion_data.csv"


def preprocess_text(text):
    """
    Preprocess the text by lemmatizing and removing punctuation.
    """
    doc = nlp(text)
    return " ".join(
        [
            token.lemma_
            for token in doc
            if token.text.lower() == "not" or not token.is_punct
        ]
    )


def load_data():
    """
    Load and preprocess data from CSV, including multilingual patterns.
    """
    try:
        df = pd.read_csv(CSV_FILE_PATH)

        required_columns = [
            "tag",
            "patterns",
            "patterns_french",
            "patterns_spanish",
            "patterns_dutch",
        ]
        if not all(col in df.columns for col in required_columns):
            raise ValueError(
                f"CSV file must contain {required_columns} columns."
            )

        data = []
        for _, row in df.iterrows():
            for lang_col in [
                "patterns",
                "patterns_french",
                "patterns_spanish",
                "patterns_dutch",
            ]:
                if pd.notnull(row[lang_col]):
                    processed_text = preprocess_text(row[lang_col])
                    data.append((processed_text, row["tag"]))

        return pd.DataFrame(data, columns=["text", "intent"])
    except FileNotFoundError:
        print(f"Error: {CSV_FILE_PATH} file not found.")
        raise
    except Exception as e:
        print(str(e))
        raise


def train_model():
    """
    Train a multilingual intent classification model.
    """
    df = load_data()
    X = df["text"]
    y = df["intent"].apply(lambda x: [x])

    mlb = MultiLabelBinarizer()
    y_mlb = mlb.fit_transform(y)

    X_train, X_test, y_train, y_test = train_test_split(
        X, y_mlb, test_size=0.2, random_state=42
    )

    vectorizer = TfidfVectorizer(ngram_range=(1, 2), stop_words=None)
    X_train_tfidf = vectorizer.fit_transform(X_train)
    X_test_tfidf = vectorizer.transform(X_test)

    model = OneVsRestClassifier(SVC(kernel="linear", probability=True))
    # model.fit(X_train_tfidf, y_train)

    print("Training the model...")
    with tqdm(total=len(X_train)) as progress_bar:
        model.fit(X_train_tfidf, y_train)
        progress_bar.update(len(X_train))

    joblib.dump(model, os.path.join("models/new_model/new_model.pkl"))
    joblib.dump(
        vectorizer,
        os.path.join("models/new_model/new_vectorizer.pkl"),
    )
    joblib.dump(mlb, os.path.join("models/new_model/new_mlb.pkl"))

    y_pred = model.predict(X_test_tfidf)
    # Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred, average="micro")
    recall = recall_score(y_test, y_pred, average="micro")
    f1 = f1_score(y_test, y_pred, average="micro")

    # Print evaluation metrics
    print("Model Evaluation Metrics:")
    print(f"Accuracy: {accuracy:.4f}")
    print(f"Precision: {precision:.4f}")
    print(f"Recall: {recall:.4f}")
    print(f"F1 Score: {f1:.4f}")


if __name__ == "__main__":
    train_model()
