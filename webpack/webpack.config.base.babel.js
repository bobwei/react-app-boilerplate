/* eslint-disable global-require, import/no-extraneous-dependencies */
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import dotenv from 'dotenv';

dotenv.config();
const {
  ENABLE_EXTRACT_TEXT_PLUGIN,
  CLIENT_HISTORY,
} = process.env;

export const WEBPACK_DEV_SERVER_PORT = 8000;
export const PUBLIC_PATH = (CLIENT_HISTORY === 'hash') ? 'assets/' : '/assets/';
export const SRC_PATH = path.join(__dirname, './../src/');
export const DIST_PATH = path.join(__dirname, './../dist/');
export const SERVER_DIST_PATH = path.join(__dirname, './../build/');

const config = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: path.join(__dirname, '/../', 'node_modules'),
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax',
      },
      (() => {
        if (ENABLE_EXTRACT_TEXT_PLUGIN === 'false') {
          return {
            test: /\.scss$/,
            exclude: /(App.scss)/,
            loader: 'style-loader!css-loader?modules&localIdentName=[local]__[hash:base64:5]!postcss-loader!sass-loader',
          };
        }
        return {
          test: /\.scss$/,
          exclude: /(App.scss)/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[local]__[hash:base64:5]!postcss-loader!sass-loader'),
        };
      })(),
      (() => {
        if (ENABLE_EXTRACT_TEXT_PLUGIN === 'false') {
          return {
            include: /(App.scss)/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded',
          };
        }
        return {
          include: /(App.scss)/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader?outputStyle=expanded'),
        };
      })(),
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192',
      },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    ],
  },

  postcss: () => [
    require('autoprefixer'),
  ],
};

export default config;
