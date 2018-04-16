'use strict'; // eslint-disable-line
/* eslint-disable */
/* eslint-disable no-var */

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const config = merge(require('./env/common/config'), require('./env/dev/config'));
console.log(config);

module.exports = merge(require('./webpack.config.common'), {
    devServer: {
        contentBase: 'dist',
        historyApiFallback: true,
        hot: true,
        inline: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    entry: config.entry,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    output: {},
    plugins: [
        new HtmlWebPackPlugin({
            template: "./source/index.html",
            filename: "./index.html"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
/* eslint-enable no-var */