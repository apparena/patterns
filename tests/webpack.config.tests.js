const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const baseDir = path.resolve(__dirname, '../');

module.exports = {
    entry: [path.resolve(baseDir, 'tests/tests.js')],
    target: 'node',
    devtool: '#source-map',
    mode: 'development',
    output: {
        path: path.resolve(baseDir, 'dist/generator'),
        filename: 'test.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6'],
        modules: [
            'node_modules',
            path.resolve(baseDir, 'source/frontend')
        ],
        enforceExtension: false,
        alias: {
            'apparena-patterns-react$': path.resolve(baseDir, 'source/patterns/index.js'),
            'apparena-patterns-react': path.resolve(baseDir, 'source/'),
            Frontend: path.resolve(baseDir, 'source/frontend/'),
            Utils: path.resolve('source/patterns/react-utils/'),
        }
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: `styles/[name].css`
        }),
    ]
};