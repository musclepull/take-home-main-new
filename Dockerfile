FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN npm cache clean --force
RUN npm cache verify
RUN npm install -g npm@8.3.1
RUN npm i esbuild esbuild-register -D
RUN npm install mongodb-memory-server-global -g
ENV MONGOMS_SYSTEM_BINARY=~/.cache/mongodb-binaries
RUN yarn install

COPY . .

#RUN yarn build

EXPOSE 4000
CMD ["yarn", "start"] 