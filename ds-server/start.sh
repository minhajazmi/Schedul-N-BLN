#!/bin/bash

pipenv shell
export FLASK_APP=personalityTest.py
export FLASK_ENV=development
flask run