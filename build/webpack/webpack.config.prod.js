'use strict'; // eslint-disable-line
/* eslint-disable */
/* eslint-disable no-var */

const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyGlobsPlugin = require('./plugins/webpack.plugin.copyglobs');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = merge(require('./env/common/config'), require('./env/prod/config'));
console.log(config);

module.exports = merge(require('./webpack.config.common'), {
    entry: config.entry,
    mode: 'production',
    module: {},
    output: {},
    optimization: {},
    plugins: [
        /**
         * It would be nice to switch to copy-webpack-plugin, but unfortunately it doesn't provide
         * manifest.json support yet. @see https://github.com/webpack-contrib/copy-webpack-plugin/pull/198
         */
        /*new CopyGlobsPlugin({
            pattern: 'images/!**!/!*',
            output: `[path]${config.assetsFilenames}.[ext]`,
            manifest: config.manifest
        }),*/
        /*new WebpackAssetsManifest({
            output: 'assets.json',
            space: 2,
            writeToDisk: true,
            assets: config.manifest,
            replacer: require('./util/assetManifestsFormatter')
        })*/
        new CleanWebpackPlugin(config.paths.dist, {root: config.paths.root})
    ]
});

/* eslint-enable no-var */