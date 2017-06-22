const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public/js');

const config = {
  entry: {
    index: APP_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].build.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  devtool: 'inline-source-map'
};

module.exports = config;