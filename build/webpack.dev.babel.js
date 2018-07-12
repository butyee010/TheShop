const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.babel');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/client/index.js'
  ],
  devServer: {
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
