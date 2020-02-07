FROM node:12.15

ENV SERVER=/usr/src/app
RUN mkdir -p $SERVER
WORKDIR $SERVER

COPY package.json /usr/src/app

RUN yarn add @nestjs/cli

RUN yarn install

COPY . /usr/src/app

CMD [ "yarn", "start" ]