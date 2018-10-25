const merge = require('webpack-merge');
const util = require('util');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = merge(require('./env/common/config'), require('./env/prod/config'));

const webpackConfig = merge(require('./webpack.config.common'), {
  entry: config.entry,
  module: {},
  output: {},
  optimization: {},
  plugins: [
    new CleanWebpackPlugin(config.paths.dist, { root: config.paths.root }),
  ],
});

console.log(util.inspect(webpackConfig, { depth: 3 }));

module.exports = webpackConfig;
