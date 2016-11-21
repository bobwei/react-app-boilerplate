/* eslint-disable global-require, import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig, {
  SRC_PATH, DIST_PATH, PUBLIC_PATH,
} from './webpack.config.base.babel';

const {
  CLIENT_HISTORY,
  AUTH_API_BASE_URL, PARSE_SERVER_APPLICATION_ID, PARSE_SERVER_JAVASCRIPT_KEY,
} = process.env;

const config = {
  ...baseConfig,

  entry: [
    'babel-polyfill',
    path.join(SRC_PATH, 'index'),
  ],

  output: {
    path: path.join(DIST_PATH, 'assets'),
    filename: 'app.js',
    publicPath: PUBLIC_PATH,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.CLIENT_HISTORY': JSON.stringify(CLIENT_HISTORY),
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.AUTH_API_BASE_URL': JSON.stringify(AUTH_API_BASE_URL),
      'process.env.PARSE_SERVER_APPLICATION_ID': JSON.stringify(PARSE_SERVER_APPLICATION_ID),
      'process.env.PARSE_SERVER_JAVASCRIPT_KEY': JSON.stringify(PARSE_SERVER_JAVASCRIPT_KEY),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: () => [
          require('autoprefixer'),
        ],
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],

  module: {
    ...baseConfig.module,
    loaders: [
      ...baseConfig.module.loaders,
      {
        test: /\.(js|jsx)$/,
        loaders: [
          'babel-loader',
          'eslint-loader',
        ],
        include: SRC_PATH,
        exclude: /node_modules/,
      },
    ],
  },

  cache: false,
};

export default config;
