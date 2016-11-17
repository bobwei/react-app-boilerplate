/* eslint-disable global-require, import/no-extraneous-dependencies */
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig, {
  SRC_PATH, SERVER_DIST_PATH,
} from './webpack.config.base.babel';

const config = {
  ...baseConfig,

  entry: {
    routes: `${SRC_PATH}/routes`,
    stores: `${SRC_PATH}/stores`,
  },

  output: {
    path: SERVER_DIST_PATH,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },

  target: 'node',

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(false),
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('_[name].css', {
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
  debug: false,
};

export default config;
