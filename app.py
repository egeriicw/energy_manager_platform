from flask import Flask
from celery import Celery

app = Flask(__name__)

@app.route("/")
def home():
    values = {
        "name": "test",
        "test": "tst"
    }
 
    return values