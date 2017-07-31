# React App Boilerplate

This is a project template with batteries included to speed up project initiation.

- [Features](#features)
- [Getting Started](#getting-started)
- [Production Build](#production-build)
- [Testing](#testing)
- [Auth State](https://github.com/bobwei/redux-modular-auth)
- [State Management](https://github.com/bobwei/redux-modular-models)
- [Js App Modules](https://github.com/bobwei/js-app-modules)


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


## Getting Started

- Config ENV
- Install Dependencies
- Start
- Start Faster


### Config ENV

create env from example
```
mkdir .envs
cp .example.env .envs/.dev.env
```

link to env
```
ln -s .envs/.dev.env .env
```

### Install Node Dependencies

```
yarn
```

### Start

```
yarn start
```

### Start Faster

build dll
```
yarn build:dll
```

start faster
```
yarn start:fast
```


## Production Build

```
yarn build
```

```
yarn server
```


## Testing

### Test Changed Only

```
yarn test
```

### Test all

```
yarn test:all
```
