FROM node:6.2.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .
RUN npm run dist

EXPOSE 5012

CMD [ "npm", "run", "server" ]
