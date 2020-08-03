FROM node:12-alpine

WORKDIR /app
#copy the package.json
COPY app/package*.json app/yarn.lock ./
#install the serve package(using in deploy)
RUN yarn global add serve