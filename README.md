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
│   ├── assets
│   │   └── index.js
│   ├── index.js
│   ├── render
│   │   └── index.jsx
│   └── server.js
├── src
│   ├── components
│   │   ├── Layout
│   │   │   └── index.jsx
│   │   └── Root
│   │       └── index.jsx
│   ├── favicon.ico
│   ├── html.jsx
│   ├── index.jsx
│   ├── modules
│   │   └── auth
│   │       ├── actions
│   │       │   └── index.js
│   │       ├── api
│   │       │   └── index.js
│   │       ├── components
│   │       │   └── LoginForm
│   │       │       ├── index.jsx
│   │       │       └── index.scss
│   │       ├── containers
│   │       │   └── Login
│   │       │       ├── index.jsx
│   │       │       └── index.scss
│   │       ├── decorators
│   │       │   └── index.js
│   │       ├── reducers
│   │       │   └── index.js
│   │       └── routes
│   │           └── index.js
│   ├── pages
│   │   ├── Home
│   │   │   ├── containers
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.scss
│   │   │   └── routes
│   │   │       └── index.js
│   │   └── admin
│   │       ├── Portal
│   │       │   ├── containers
│   │       │   │   └── index.jsx
│   │       │   └── routes
│   │       │       └── index.js
│   │       └── routes
│   │           └── index.js
│   ├── reducers
│   │   └── index.js
│   ├── routes
│   │   └── index.jsx
│   ├── stores
│   │   └── index.js
│   ├── styles
│   │   ├── App.scss
│   │   ├── Button.scss
│   │   └── Form.scss
│   └── utils
│       └── index.js
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
npm run build && npm run deploy:gh-pages
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
