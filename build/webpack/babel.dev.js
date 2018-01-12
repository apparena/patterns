module.exports = {
    cacheDirectory: true,
    presets: [
        'babel-preset-es2015',
        'babel-preset-es2016',
        'babel-preset-react',
        'babel-preset-stage-0'
    ].map(require.resolve),
    plugins: [
        'babel-plugin-syntax-trailing-function-commas',
        'babel-plugin-transform-class-properties',
        'babel-plugin-transform-object-rest-spread',
        'babel-plugin-transform-decorators-legacy',
        'react-hot-loader/babel'
    ].map(require.resolve)
};
