const webpack = require('webpack');
const util = require('util');
const merge = require('webpack-merge');
const config = merge(require('./env/common/config'), require('./env/dev/config'));
const webpackConfig = merge(require('./webpack.config.common'), {
  devtool: 'source-map',
  devServer: {
    contentBase: config.paths.dist,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  entry: config.entry,
  module: {},
  output: {},
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

console.log(util.inspect(webpackConfig, { depth: 3 }));

module.exports = webpackConfig;
