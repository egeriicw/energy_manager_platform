FROM node:14.1-alpine

WORKDIR /opt/web
COPY package.json package-lock.json yarn.lock ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN yarn run build