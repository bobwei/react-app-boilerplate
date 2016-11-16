/* eslint-disable global-require, import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig, {
  SRC_PATH, DIST_PATH, PUBLIC_PATH,
} from './webpack.config.base.babel';

const config = {
  ...baseConfig,

  entry: [
    'babel-polyfill',
    `${SRC_PATH}/index`,
  ],

  output: {
    path: path.join(DIST_PATH, 'assets'),
    filename: 'app.js',
    publicPath: PUBLIC_PATH,
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
  ],

  cache: false,
  debug: false,
  devtool: 'sourcemap',
};

export default config;
