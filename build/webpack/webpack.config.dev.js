var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var path = require('path');
var relativePath = '../../';
var nodeModulesPath = path.resolve(__dirname, relativePath, 'node_modules');
var buildPath = path.resolve(__dirname, relativePath, 'build/apparena-patterns-react/dist');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, relativePath + 'build/test/', 'component.js')
    ],
    output: {
        path: buildPath,
        publicPath: '/',
        pathinfo: true,
        filename: '[name].js'
        // library: 'apparena',
        // libraryTarget: 'umd'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx'],
        fallback: path.join(nodeModulesPath)
    },
    resolveLoader: {
        modulesDirectories: [
            nodeModulesPath
        ],
        fallback: path.join(nodeModulesPath)
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]&camelCase&sourceMap',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(js|jsx)$/,
                loader: combineLoaders([
                    {
                        loader: 'react-hot'
                    },
                    {
                        loader: 'babel',
                        query: require('./babel.dev')
                    }
                ]),
                exclude: [nodeModulesPath]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
                loader: 'file'
            },
            {
                test: /\.(mp4|webm)$/,
                loader: 'url?limit=10000'
            }
        ]
    },
    eslint: {
        configFile: path.join(__dirname, 'eslint.js'),
        useEslintrc: false
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'shared/vendors.js'),
        // Note: only CSS is currently hot reloaded
        new webpack.HotModuleReplacementPlugin()
    ]
};