/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import dotenv from 'dotenv';

dotenv.config();

const { CLIENT_HISTORY } = process.env;

export const WEBPACK_DEV_SERVER_PORT = 8000;
export const PUBLIC_PATH = CLIENT_HISTORY === 'hash' ? 'assets/' : '/assets/';
export const SRC_PATH = path.join(__dirname, '/../src');
export const DIST_PATH = path.join(__dirname, '/../build/client');
export const SERVER_DIST_PATH = path.join(__dirname, '/../build/server');

const config = {
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [SRC_PATH, 'node_modules'],
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(scss|css)$/,
        exclude: /(App.scss)/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[path]__[name]__[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.join(__dirname, 'postcss.config.js'),
                },
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        include: /(App.scss)/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
};

export default config;
