/* eslint-disable global-require, import/no-extraneous-dependencies */
import express from 'express';

export default () => {
  const app = express();
  const { NODE_ENV } = process.env;

  // mount assets for dev
  if (NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const config = require('../../webpack/webpack.config.babel');
    const proxy = require('proxy-middleware');
    const url = require('url');
    (new WebpackDevServer(webpack(config), { ...config.devServer }))
      .listen(config.port, 'localhost', (err) => {
        if (err) {
          console.log(err);
        }
      });
    app.use('/assets', proxy(url.parse(`http://localhost:${config.port}/assets`)));
  // mount assets for production
  } else {
    app.use('/assets', express.static(`${__dirname}/../../dist/assets`));
  }

  return app;
};
