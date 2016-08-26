var webpack = require('webpack');
var path = require('path');
var relativePath = '../../';
var nodeModulesPath = path.resolve(__dirname, relativePath, 'node_modules');
var buildPath = path.resolve(__dirname, relativePath, 'dist');

module.exports = {
    devtool: 'source-map',
    entry: {
        component: path.resolve(__dirname, relativePath + 'source/js', 'testComponent.js'),
    },
    output: {
        path: buildPath,
        pathinfo: true,
        filename: '[name].js',
    },
    resolve: {
        modulesDirectories: ['shared', 'inline', 'node_modules'],
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
                loader: 'eslint',
            }
        ],
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: [nodeModulesPath],
                query: require('./babel.dev')
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
                loader: 'file',
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
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'shared/vendors.js'),
        // Note: only CSS is currently hot reloaded
        // new webpack.HotModuleReplacementPlugin()
    ],
    // to keep webpack able to check for file-changes on VMs (Vagrant)
    watchOptions: {
        poll: true
    }
};