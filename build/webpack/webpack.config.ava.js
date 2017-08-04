const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractComponentCSS = new ExtractTextPlugin({
    filename: `styles/[name].css`,
    allChunks: true
});

/// / webpack.config.js css-modules loader example
module.exports = {
    output: {
        // YOU NEED TO SET libraryTarget: 'commonjs2'
        libraryTarget: 'commonjs2'
    },
    plugins: [
        extractComponentCSS // eslint-disable-line
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.es6'],
        modules: [
            'node_modules'
        ],
        enforceExtension: false
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
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
            },
            {
                test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `vendor/[name].[ext]`,
                    }
                }],
            },
            /*{
                test: /\.scss$/,
                use: extractComponentCSS.extract({
                    fallback: 'style-loader',
                    publicPath: '../',
                    use: [
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
            }*/
        ]
    }
};