FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 5002

CMD [ "npm", "start"]