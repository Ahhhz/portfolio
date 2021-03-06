const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: __dirname, filename: './dist/bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};
