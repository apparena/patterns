'use strict'; // eslint-disable-line
/* eslint-disable */
/* eslint-disable no-var */
/**
 * Webpack configuration available to all environments
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./env/common/config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractComponentCSS = new ExtractTextPlugin({
    filename: `${config.paths.styles}/[name].css`,
    allChunks: true,
});

module.exports = {
    context: config.paths.assets,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                resolve: {extensions: ['.js', '.jsx']},
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
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
                                localIdentName: '[hash:base64:5]',
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
           /* {
                test: /\.(scss|css)$/,
                //resolve: { extensions: [".scss", ".css"], },
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[hash:base64:5]',
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
            },*/
            {
                test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `vendor/[name].[ext]`
                    }
                }]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    optimization: {
       /* splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }*/
    },
    output: {
        path: config.paths.dist,
        publicPath: config.publicPath,
        filename: `${config.paths.scripts}/${config.assetsFilenames}.js`,
        chunkFilename: `${config.paths.scripts}/chunks/${config.assetsFilenames}[chunkhash].js`
    },
    resolve: {
        alias: {
            'apparena-patterns-react$': path.resolve(config.paths.root, 'source/patterns/index.js'),
            'apparena-patterns-react': path.resolve(config.paths.root, 'source/'),
            Frontend: path.resolve(config.paths.root, 'source/frontend/'),
            Utils: path.resolve(config.paths.root, 'source/patterns/react-utils/')
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './source/index.html',
            filename: './index.html'
        }),
        extractComponentCSS,
        /*new MiniCssExtractPlugin({
            filename: `${config.paths.styles}/${config.assetsFilenames}.css`
        }),
        */
        new webpack.IgnorePlugin(/^props$/)
    ]
};

/* eslint-enable no-var */