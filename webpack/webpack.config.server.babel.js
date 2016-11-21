/* eslint-disable global-require, import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig, {
  SRC_PATH, SERVER_DIST_PATH,
} from './webpack.config.base.babel';

const {
  AUTH_API_BASE_URL, PARSE_SERVER_APPLICATION_ID, PARSE_SERVER_JAVASCRIPT_KEY,
} = process.env;

const config = {
  ...baseConfig,

  entry: {
    routes: path.join(SRC_PATH, 'routes'),
    stores: path.join(SRC_PATH, 'stores'),
  },

  output: {
    path: SERVER_DIST_PATH,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },

  target: 'node',

  plugins: [
    new webpack.DefinePlugin({
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
      filename: '_[name].css',
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
