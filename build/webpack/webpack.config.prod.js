var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var path = require('path');
var relativePath = '../../';
var nodeModulesPath = path.resolve(__dirname, relativePath, 'node_modules');
var buildPath = path.resolve(__dirname, relativePath, 'build/apparena-patterns-react/dist');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        path.resolve(__dirname, relativePath + 'source/_patterns', 'index.js')
    ],
    output: {
        path: buildPath,
        publicPath: '/',
        pathinfo: true,
        filename: '[name].min.js',
        library: 'apparena',
        libraryTarget: 'umd'
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
                query: require('./babel.prod'),
                exclude: [nodeModulesPath],
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
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        })
    ]
};