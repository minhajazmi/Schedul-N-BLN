FROM node:alpine

RUN npm install -g nodemon

WORKDIR /app

ADD package.json package-lock.json app.js ./

COPY . ./

RUN npm install

CMD [ "npm", "run", "dev" ]
