FROM python:3.8

RUN pip3 install pipenv
# RUN pip3 install uwsgi
WORKDIR /app
COPY Pipfile Pipfile.lock ./
RUN pipenv install --system --deploy --ignore-pipfile
COPY . .
RUN export FLASK_APP=personalityTest.py
RUN export FLASK_ENV=development

CMD ["flask", "run", "-h", "0.0.0.0"]


# WORKDIR /project

# ADD . /project

# RUN pip install pipenv

# RUN pipenv install

# RUN pipenv shell

# RUN export FLASK_APP=personalityTest.py
# RUN export FLASK_ENV=development

# RUN flask run

#  CMD ["python","app.py"]