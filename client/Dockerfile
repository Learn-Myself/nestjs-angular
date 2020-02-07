FROM node:12.15

ENV CLIENT=/usr/client/src/app
RUN mkdir -p $CLIENT
WORKDIR $CLIENT

COPY package.json /usr/client/src/app

RUN yarn add @angular/cli

RUN yarn install

COPY . /usr/client/src/app

CMD [ "yarn", "build" ]
