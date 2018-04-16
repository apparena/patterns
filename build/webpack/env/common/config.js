/* eslint-disable */
/* eslint-disable no-var */
const path = require('path');
const rootPath = process.cwd();

module.exports = {
    assetsFilenames: '[name]',
    //babelFile: './env/common/babel',
    browsers: [
        'last 2 versions',
        'android 4',
        'opera 12'
    ],
    cacheBusting: '[name]_[hash:8]',
    entry: {
        'main': [
            './source/frontend/main.jsx'
        ],
        'patterns': [
            './source/patterns/index.js'
        ],
        'vendor': [
            'react',
            'react-dom'
        ]
    },
    //jsonpFunction: 'wp_webpackJsonp',
    //languages: ['de', 'en'],
    manifest: {},
    paths: {
        root: rootPath,
        assets: rootPath,
        dist: path.resolve(rootPath, 'dist')
    },
    proxyUrl: 'http://localhost:8080/',
    publicPath: `/${path.basename(path.resolve(rootPath, 'dist', 'frontend'))}/`
};

