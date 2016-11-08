/* eslint-disable global-require, import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('dotenv').config();

const WEBPACK_DEV_SERVER_PORT = 8000;
const PUBLIC_PATH = '/assets/';
const SRC_PATH = path.join(__dirname, './src/');
const DIST_PATH = path.join(__dirname, './dist/');

const { NODE_ENV } = process.env;

module.exports = {
  entry: [
    `webpack-dev-server/client?http://127.0.0.1:${WEBPACK_DEV_SERVER_PORT}`,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    `${SRC_PATH}/index`,
  ],
  cache: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
      },
    }),
    new ExtractTextPlugin('[name].css'),
  ],
  port: WEBPACK_DEV_SERVER_PORT,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(DIST_PATH, 'assets'),
    filename: 'app.js',
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: path.join(__dirname, 'node_modules'),
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
        if (process.env.inlineCSSInJS) {
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
        if (process.env.inlineCSSInJS) {
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
      {
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel-loader',
        include: SRC_PATH,
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: SRC_PATH,
        exclude: /node_modules/,
      },
    ],
  },
  postcss: () => [require('autoprefixer')],
};

if (NODE_ENV !== 'production') {
  module.exports = Object.assign({}, module.exports, {
    devServer: {
      contentBase: `${SRC_PATH}/`,
      historyApiFallback: true,
      hot: true,
      port: WEBPACK_DEV_SERVER_PORT,
      publicPath: PUBLIC_PATH,
      noInfo: false,
      quiet: false,
      lazy: false,
      stats: {
        cached: false,
        chunks: false,
      },
    },
  });
} else if (NODE_ENV === 'production') {
  module.exports = Object.assign({}, module.exports, {
    entry: [
      'babel-polyfill',
      `${SRC_PATH}/index`,
    ],
    cache: false,
    devtool: 'sourcemap',
    debug: false,
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
  });
  delete module.exports.devServer;
}
