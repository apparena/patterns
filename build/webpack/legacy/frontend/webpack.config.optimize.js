'use strict'; // eslint-disable-line

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const webpack = require('webpack');
const config = require('./config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorOptions: {
                discardComments: {removeAll: true},
                autoprefixer: {browsers: config.browsers},
            },
            canPrint: true,
        }),
        new UglifyJsPlugin({
            test: /\.js$/,
            parallel: true,
            uglifyOptions: {
                ie8: false,
                compress: {
                    arrows: true,
                    booleans: true,
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                },
                output: {
                    comments: false,
                }
            }
        })
    ],
};