FROM node:7.0.0

RUN npm install -g yarn

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json .
ADD yarn.lock .
RUN yarn

ADD . .
RUN npm run build

CMD [ "npm", "run", "server" ]
