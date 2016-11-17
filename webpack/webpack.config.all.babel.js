/* eslint-disable global-require */
module.exports = [
  require('./webpack.config.server.babel').default,
  require('./webpack.config.prod.babel').default,
];
