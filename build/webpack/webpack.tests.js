const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseDir = path.resolve(__dirname, '../generator/');

let extractComponentCSS = new ExtractTextPlugin({
    filename: `styles/[name].css`,
    allChunks: true
});

module.exports = {
    entry: [path.resolve(baseDir, 'tests/tests.js')],
    target: 'node',
    devtool: '#source-map',
    output: {
        path: path.resolve(baseDir, '_build'),
        filename: 'test.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6'],
        modules: [
            'node_modules',
            path.resolve(__dirname, '../../node_modules'),
            path.resolve(baseDir, 'frontend/src'),
            path.resolve(baseDir, 'frontend/node_modules'),
        ],
        enforceExtension: false
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader',
                    options: require('./babel.dev')
                }],
            },
            {
                test: /\.scss$/,
                loader: extractComponentCSS.extract({
                    fallback: 'style-loader',
                    publicPath: '../',
                    loader: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[local]_[hash:base64:5]',
                                camelCase: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
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
    plugins: [
        extractComponentCSS
    ]
};