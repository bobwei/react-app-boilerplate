/* eslint-disable global-require, import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');

// Add needed plugins here
const BowerWebpackPlugin = require('bower-webpack-plugin');

const config = Object.assign({}, baseConfig, {
  entry: [
    'babel-polyfill',
    path.join(__dirname, '../src/index'),
  ],
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: '"production"',
      },
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
  ],
  module: defaultSettings.getDefaultModules(),
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [path.join(__dirname, '/../src')]
  ),
});

module.exports = config;
