FROM node:16

RUN npm install webpack-dev-server -g
RUN npm install webpack-cli -g
RUN npm install html-webpack-plugin -g

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

EXPOSE 3000

CMD npm start