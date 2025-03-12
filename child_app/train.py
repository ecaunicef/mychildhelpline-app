import pandas as pd
import numpy as np
import re
import string
import joblib
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report
import os

df = pd.read_csv("../csv/emo_data.csv")

df["text"] = (
    df["patterns"]
    + " "
    + df["patterns_french"]
    + " "
    + df["patterns_spanish"]
    + " "
    + df["patterns_dutch"]
)


def clean_text(text):
    text = text.lower()
    text = re.sub(r"\d+", "", text)
    text = text.translate(str.maketrans("", "", string.punctuation))
    text = text.strip()
    return text


df["text_cleaned"] = df["text"].apply(clean_text)

X_train, X_test, y_train, y_test = train_test_split(
    df["text_cleaned"], df["tag"], test_size=0.2, random_state=42
)

tfidf_vectorizer = TfidfVectorizer(max_features=5000)
X_train_tfidf = tfidf_vectorizer.fit_transform(X_train)
X_test_tfidf = tfidf_vectorizer.transform(X_test)

logreg = LogisticRegression()
logreg.fit(X_train_tfidf, y_train)

nb = MultinomialNB()
nb.fit(X_train_tfidf, y_train)

y_pred_logreg = logreg.predict(X_test_tfidf)
y_pred_nb = nb.predict(X_test_tfidf)

print("Logistic Regression Accuracy:", accuracy_score(y_test, y_pred_logreg))
print("Naive Bayes Accuracy:", accuracy_score(y_test, y_pred_nb))

print(
    "\nLogistic Regression Classification Report:\n",
    classification_report(y_test, y_pred_logreg),
)
print(
    "\nNaive Bayes Classification Report:\n",
    classification_report(y_test, y_pred_nb),
)

joblib.dump(logreg, os.path.join("models/train/logistic_regression_model.pkl"))
# joblib.dump(nb, os.path.join("models/train/naive_bayes_model.pkl"))
joblib.dump(
    tfidf_vectorizer, os.path.join("models/train/tfidf_vectorizer.pkl")
)

print("Models and vectorizer saved successfully.")
