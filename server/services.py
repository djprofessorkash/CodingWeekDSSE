# Importing Pandas for Data Manipulation/Processing
from pandas import Series
# Importing Dill (Pickle) for Advanced Model Serialization
import dill as pickle

def classify_text(text_prompt: str):
    # Accessing Notebook-Trained Classifier
    path_to_pipeline = "saved_models/full_pipeline.pkl"
    with open(path_to_pipeline, "rb") as frb_pipeline:
        modeling_pipeline = pickle.load(frb_pipeline)
    # Get Binary Classification from Modeling Pipeline
    return modeling_pipeline.predict(Series(text_prompt))[0]
