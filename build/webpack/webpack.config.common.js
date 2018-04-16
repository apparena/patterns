'use strict'; // eslint-disable-line
/* eslint-disable */
/* eslint-disable no-var */
/**
 * Webpack configuration available to all environments
 */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./env/common/config');

module.exports = {
    context: config.paths.assets,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                resolve: { extensions: [".js", ".jsx"], },
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.scss$/,
                resolve: { extensions: [".scss", ".css"], },
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    'postcss-loader?sourceMap',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `vendor/[name].[ext]`
                    }
                }]
            }
        ]
    },
    optimization: {},
    output: {
        path: config.paths.dist,
        publicPath: config.publicPath,
        filename: `scripts/${config.assetsFilenames}.js`,
        chunkFilename: `scripts/chunks/${config.assetsFilenames}[chunkhash].js`
    },
    resolve: {
        alias: {
            "apparena-patterns-react$": path.resolve('source/patterns/index.js'),
            "apparena-patterns-react": path.resolve('source/')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `styles/${config.assetsFilenames}.css`
        }),
        new webpack.IgnorePlugin(/^props$/),
        //new CleanWebpackPlugin(config.paths.dist, {root: config.paths.root})
    ]
};

/* eslint-enable no-var */