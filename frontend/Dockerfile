FROM node:alpine

WORKDIR /app

ADD package.json package-lock.json ./

COPY . ./

RUN npm install 

CMD [ "npm", "start" ]