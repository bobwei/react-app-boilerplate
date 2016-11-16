# React Webpack Template

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
├── server
│   ├── index.js
│   ├── middlewares
│   │   ├── assets.js
│   │   └── render.jsx
│   ├── server.js
│   └── views
│       └── index.ejs
├── src
│   ├── containers
│   │   ├── IndexPage.jsx
│   │   └── Root.jsx
│   ├── favicon.ico
│   ├── index.html
│   ├── index.jsx
│   ├── reducers
│   │   └── index.js
│   ├── routes
│   │   └── index.jsx
│   ├── stores
│   │   └── configureStore.js
│   └── styles
│       └── App.scss
├── webpack.config.js
└── yarn.lock
```

## Development Flow

First time
```
yarn
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
