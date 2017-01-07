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
*   modularize

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
│   │   └── Root
│   │       └── index.jsx
│   ├── favicon.ico
│   ├── html.jsx
│   ├── index.jsx
│   ├── modules
│   │   ├── api
│   │   │   └── index.js
│   │   ├── auth
│   │   │   ├── actions
│   │   │   │   └── index.js
│   │   │   ├── api
│   │   │   │   └── index.js
│   │   │   ├── components
│   │   │   │   ├── LoginForm
│   │   │   │   │   └── index.jsx
│   │   │   │   ├── Page
│   │   │   │   │   ├── index.jsx
│   │   │   │   │   └── index.scss
│   │   │   │   └── SignupForm
│   │   │   │       └── index.jsx
│   │   │   ├── containers
│   │   │   │   ├── Login
│   │   │   │   │   └── index.jsx
│   │   │   │   └── Signup
│   │   │   │       └── index.jsx
│   │   │   ├── decorators
│   │   │   │   └── index.js
│   │   │   ├── predicates
│   │   │   │   └── index.js
│   │   │   ├── reducers
│   │   │   │   └── index.js
│   │   │   ├── routes
│   │   │   │   └── index.js
│   │   │   ├── selectors
│   │   │   │   └── index.js
│   │   │   └── validations
│   │   │       └── index.js
│   │   ├── forms
│   │   │   └── validations
│   │   │       ├── index.js
│   │   │       └── index.spec.js
│   │   ├── pages
│   │   │   ├── admin
│   │   │   │   ├── components
│   │   │   │   │   ├── Layout
│   │   │   │   │   │   ├── index.jsx
│   │   │   │   │   │   └── index.scss
│   │   │   │   │   └── NavigationBar
│   │   │   │   │       └── index.jsx
│   │   │   │   ├── containers
│   │   │   │   │   └── Portal
│   │   │   │   │       ├── index.jsx
│   │   │   │   │       └── model.js
│   │   │   │   ├── helpers
│   │   │   │   │   └── index.js
│   │   │   │   ├── reducers
│   │   │   │   │   └── index.js
│   │   │   │   ├── routes
│   │   │   │   │   └── index.js
│   │   │   │   └── selectors
│   │   │   │       └── index.jsx
│   │   │   └── home
│   │   │       ├── components
│   │   │       │   ├── Layout
│   │   │       │   │   ├── index.jsx
│   │   │       │   │   └── index.scss
│   │   │       │   └── NavigationBar
│   │   │       │       └── index.jsx
│   │   │       ├── containers
│   │   │       │   └── Home
│   │   │       │       └── index.jsx
│   │   │       └── routes
│   │   │           └── index.js
│   │   ├── parse-server
│   │   │   ├── actions
│   │   │   │   └── index.js
│   │   │   ├── api
│   │   │   │   └── index.js
│   │   │   ├── reducers
│   │   │   │   └── index.js
│   │   │   └── utils
│   │   │       └── index.js
│   │   └── ui
│   │       └── components
│   │           ├── Button
│   │           │   ├── index.jsx
│   │           │   └── index.scss
│   │           ├── DataForm
│   │           │   ├── __snapshots__
│   │           │   │   └── index.spec.jsx.snap
│   │           │   ├── index.jsx
│   │           │   ├── index.scss
│   │           │   └── index.spec.jsx
│   │           ├── DataTable
│   │           │   ├── __snapshots__
│   │           │   │   └── index.spec.jsx.snap
│   │           │   ├── index.jsx
│   │           │   ├── index.scss
│   │           │   ├── index.spec.jsx
│   │           │   └── spec.json
│   │           ├── FieldGroup
│   │           │   ├── index.jsx
│   │           │   └── index.scss
│   │           ├── Filters
│   │           │   └── index.jsx
│   │           ├── Modal
│   │           │   ├── index.jsx
│   │           │   └── index.scss
│   │           └── SubmitButton
│   │               └── index.jsx
│   ├── reducers
│   │   └── index.js
│   ├── routes
│   │   └── index.jsx
│   ├── stores
│   │   └── index.js
│   ├── styles
│   │   ├── App.scss
│   │   ├── Form.scss
│   │   ├── Panel.scss
│   │   └── Table.scss
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
