const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseDir = path.resolve(__dirname, '../../');

let extractComponentCSS = new ExtractTextPlugin({
    filename: `styles/[name].css`,
    allChunks: true
});

module.exports = {
    entry: [path.resolve(baseDir, 'build/generator/tests/tests.js')],
    target: 'node',
    devtool: '#source-map',
    output: {
        path: path.resolve(baseDir, 'build/generator/_build'),
        filename: 'test.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6'],
        modules: [
            'node_modules',
            path.resolve(baseDir, 'source/frontend'),
        ],
        enforceExtension: false,
        alias: {
            "apparena-patterns-react$": path.resolve(baseDir, 'source/patterns/index.js'),
            "apparena-patterns-react": path.resolve(baseDir, 'source/')
        }
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
                    use: [
                        {
                            use: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[local]_[hash:base64:5]',
                                camelCase: true,
                                sourceMap: true
                            }
                        },
                        {
                            use: 'resolve-url-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            use: 'sass-loader',
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
        extractComponentCSS,
    ]
};