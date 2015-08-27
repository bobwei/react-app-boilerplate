/* eslint-disable global-require */
import express from 'express';

export default function () {
  const app = express();
  const env = process.env.env || 'dev';

  // mount assets for dev
  if (env === 'dev') {
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const config = require('../../webpack.config');
    const proxy = require('proxy-middleware');
    const url = require('url');
    (new WebpackDevServer(webpack(config), config.devServer))
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
}
