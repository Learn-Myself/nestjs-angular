FROM node:12.15

WORKDIR /usr/src

RUN yarn add @nestjs/cli

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]