FROM node:8.2.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json .
ADD yarn.lock .
RUN yarn

ADD . .
RUN yarn build

CMD [ "yarn", "server" ]
