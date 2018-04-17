const path = require('path');
const rootPath = process.cwd();

module.exports = {
    //assetsFilenames: '[name]',
    entry: {},
    paths: {
        root: rootPath,
        assets: rootPath,
        dist: path.resolve(rootPath, 'dist')
    },
    publicPath: `/${path.basename(path.resolve(rootPath, 'dist'))}/`
};