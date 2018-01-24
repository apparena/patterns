const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.hot');
const app = require('express')();
const path = require('path');

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get("/assets/*", (req, res) => {
    const opt = {
        root: path.resolve(__dirname, '../..', 'public/assets')
    };

    res.sendFile(req.params['0'], opt);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../..', 'public/index_hot.html'));
});

app.listen(3001, 'localhost', (err, result) => {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3001/');
});
