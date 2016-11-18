/* eslint-disable global-require, import/no-extraneous-dependencies */
import express from 'express';

const { NODE_ENV } = process.env;

export default () => {
  const app = express();

  if (NODE_ENV !== 'production') {
    /*
      mount assets for dev
    */
    const config = require('../../webpack/webpack.config.dev.babel').default;
    const webpack = require('webpack');
    const compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, config.devServer));
    app.use(require('webpack-hot-middleware')(compiler));
  } else {
    /*
      mount assets for production
    */
    app.use('/assets', express.static(`${__dirname}/../../build/client/assets`));
  }

  return app;
};
