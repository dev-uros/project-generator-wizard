# Development stage
FROM node:22-alpine as develop-stage
WORKDIR /app

COPY /app/package*.json ./

RUN npm install

COPY /app .
