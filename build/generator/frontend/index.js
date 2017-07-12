const express = require('express');
const app = express();

app.get("/", (req, res) => {
    const opt = {
        root: `${__dirname}/src/` // eslint-disable-line no-undef
    };

    res.sendFile("index.html", opt);
});

app.get("/:component", (req, res) => {
    const opt = {
        root: `${__dirname}/src/` // eslint-disable-line no-undef
    };

    res.sendFile("index.html", opt);
});

app.get("/dist/:dir/:file", (req, res) => {
    const opt = {
        root: `${__dirname}/dist/${req.params.dir}/` // eslint-disable-line no-undef
    };

    res.sendFile(req.params.file, opt);
});

app.get("/assets/:assetFile", (req, res) => {
    const opt = {
        root: `${__dirname}/assets/` // eslint-disable-line no-undef
    };

    res.sendFile(req.params.assetFile, opt);
});

console.log("Server listening on localhost:3000");
app.listen(3000);