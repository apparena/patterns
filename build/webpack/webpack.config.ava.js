// webpack.config.js css-modules loader example
module.exports = {
    output: {
        // YOU NEED TO SET libraryTarget: 'commonjs2'
        libraryTarget: 'commonjs2',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            },
        ],
    },
};