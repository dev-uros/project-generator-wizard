# develop stage
FROM node:20-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g nuxi
COPY /app .
