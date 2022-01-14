FROM node:16

RUN yarn add webpack-dev-server

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 3000

CMD ["npm", "yarn", "start"]