/* eslint-disable global-require, import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import 'dotenv/config';

import { SRC_PATH, DIST_PATH } from './webpack.config.base.babel';

const config = {
  entry: {
    lib: [path.join(SRC_PATH, 'lib.js')],
  },
  output: {
    path: path.join(DIST_PATH, 'dll'),
    filename: 'dll.[name].js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(DIST_PATH, 'dll', '[name]-manifest.json'),
      name: '[name]',
    }),
    ...(() => {
      if (process.env.NODE_ENV === 'production') {
        return [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
          new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
          }),
          new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
              screw_ie8: true,
              keep_fnames: true,
            },
            compress: {
              screw_ie8: true,
            },
            comments: false,
          }),
        ];
      }
      return [];
    })(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [SRC_PATH, 'node_modules'],
  },
};

export default config;
