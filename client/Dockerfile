FROM node:12.15

WORKDIR /usr/src/client

RUN yarn add @angular/cli

RUN yarn install

EXPOSE 4200

CMD [ "yarn", "build" ]
