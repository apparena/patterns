'use strict'; // eslint-disable-line
/* eslint-disable  */
/* eslint-disable no-var */

const webpack = require('webpack');
const merge = require('webpack-merge');
const config = merge(require('./env/common/config'), require('./env/dev/config'));
console.log(config);

module.exports = merge(require('./webpack.config.common'), {
    devtool: 'source-map',
    devServer: {
        contentBase: config.paths.dist,
        historyApiFallback: true,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    entry: config.entry,
    module: {},
    output: {},
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
/* eslint-enable no-var */
