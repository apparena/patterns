const path = require('path');

/// / webpack.config.js css-modules loader example
process.noDeprecation = true;
module.exports = {
    // output: {
    //     YOU NEED TO SET libraryTarget: 'commonjs2'
    //     libraryTarget: 'commonjs2'
    // },
    resolve: {
        extensions: ['.js', '.jsx', '.es6'],
        modules: [
            'node_modules',
            path.resolve(__dirname, '../generator/frontend/src'),
            path.resolve(__dirname, '../generator/frontend/node_modules'),
        ],
        enforceExtension: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/(node_modules|bower_components)(?![/|\\](bootstrap|foundation-sites))/],
                use: [{
                    loader: 'babel-loader',
                    options: require('./babel.dev')
                }]
            },
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
                        name: `vendor/[name].[ext]`
                    }
                }]
            }
        ]
    }
};