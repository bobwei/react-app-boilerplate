# React App Boilerplate

This is a project template with batteries included to speed up project initiation.

## Features

*   react-router
*   redux
*   bootstrap-sass
*   css-modules
*   eslint
*   babel
*   server side rendering
*   hot reload
*   docker
*   dotenv

## Project Structure

```
.
├── Dockerfile
├── Procfile
├── README.md
├── docker-compose.prod.yml
├── package.json
├── scripts
│   └── build.jsx
├── server
│   ├── index.js
│   ├── middlewares
│   │   ├── assets.js
│   │   └── render.jsx
│   └── server.js
├── src
│   ├── containers
│   │   ├── Home
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   └── Root.jsx
│   ├── favicon.ico
│   ├── html.jsx
│   ├── index.jsx
│   ├── reducers
│   │   └── index.js
│   ├── routes
│   │   ├── Home
│   │   │   └── index.js
│   │   └── index.jsx
│   ├── stores
│   │   └── index.js
│   └── styles
│       └── App.scss
├── webpack
│   ├── webpack.config.all.babel.js
│   ├── webpack.config.base.babel.js
│   ├── webpack.config.dev.babel.js
│   ├── webpack.config.prod.babel.js
│   └── webpack.config.server.babel.js
└── yarn.lock
```

## Development Flow

First time
```
yarn
mv .example.env .env
```

Development server
```
npm start
```

## Production Flow

Build static assets
```
npm run build
```

Run production server
```
npm run server
```

## Deploy to Github Pages

```
npm run deploy:gh-pages
```

## Deploy to Heroku

create heroku app
```
heroku apps:create myapp
heroku config:push
```

```
git push heroku master
```
