/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */

const path = require('path');

const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
const getDefaultModules = () => {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader',
      },
    ],
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
    ],
  };
};

module.exports = {
  srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules,
};
