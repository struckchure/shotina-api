FROM node:current-slim as base

WORKDIR /code/

COPY package.json package.json

RUN yarn

RUN apt-get update && apt-get install -y \
    curl

COPY . /code/

FROM base as dev

RUN npm install -g nodemon
