module.exports = {
    exclude: /\/node_modules\//,
    plugins: [
        require('precss'),
        require('autoprefixer')
    ]
};