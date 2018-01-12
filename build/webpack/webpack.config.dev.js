var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var path = require('path');
var relativePath = '../../';
var nodeModulesPath = path.resolve(__dirname, relativePath, 'node_modules');
var buildPath = path.resolve(__dirname, relativePath, 'public/dist/hot');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?name=app',
            path.resolve(__dirname, relativePath, 'public/src', 'main.jsx')
        ]
    },
    output: {
        path: buildPath,
        filename: '[name].js',
        publicPath: '/public'
        // library: 'apparena',
        // libraryTarget: 'umd'
    },
    devServer: {
        hot: true,
        contentBase: buildPath,
        publicPath: '/public'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, relativePath, 'public/src'),
            path.join(nodeModulesPath),
        ],
        extensions: ['.js', '.jsx'],
        alias: {
            "apparena-patterns-react$": path.resolve(__dirname, relativePath, 'source/patterns/index.js'),
            "apparena-patterns-react": path.resolve(__dirname, relativePath, 'source/')
        }
    },
    resolveLoader: {
        modules: [nodeModulesPath, path.join(nodeModulesPath)],
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                options: {
                    configFile: path.join(__dirname, 'eslint.js'),
                    useEslintrc: false
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css!less'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]&camelCase&sourceMap',
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: [nodeModulesPath],
                use: [
                    {
                        loader: 'babel-loader',
                        options: require('./babel.dev')
                    }
                ],
            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(mp4|webm)$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'shared/vendors.js'),
        // Note: only CSS is currently hot reloaded
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'})
    ]
};