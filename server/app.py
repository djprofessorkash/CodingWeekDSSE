""" IMPORTATIONS AND INITIALIZATIONS. """
# Importing Flask Dependencies
from flask import Flask, request
# Importing Natural Language Toolkit for Text Processing
import nltk; nltk.download("punkt")
from nltk.stem import SnowballStemmer
# Accessing Custom Service Scripts
import services

""" SERVER CONFIGURATION AND SETUP. """
app = Flask(__name__)

@app.get("/")
def home():
    return "Hello there!"

@app.post("/api/classify")
def classify_text():
    # Extract Text Content from Client-Submitted Form Data
    text_content = request.get_json()["message"]
    # Dummy Text for Testing Classifier Pipeline
    TEXT_DUMMY_HAM = "Hey there! It's Kash. Can you send me that modeling file, please? I need it to integrate the backend and frontend code with the stabilized binary classifier. Should make for an interesting showcase for Coding Week. Thanks!"
    TEXT_DUMMY_SPAM = "Congrats!! You're the winner of the brand new Stanley Tool Set yor have been chosen, It will take you only a minute to participate and you can then claim your prize! Hurry up ! the number of prizes to be won is limited!"

    # Calculate Binary Classification Metric Using Trained Classifier Pipeline
    output_classification = services.classify_text(text_content)
    print(output_classification)

    # Return Classification Metric to Client
    return output_classification

if __name__ == "__main__":
    app.run(debug=True)