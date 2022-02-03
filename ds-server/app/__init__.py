from flask import Flask

app = Flask(__name__)

from app import routes

# this file is calling our application routes