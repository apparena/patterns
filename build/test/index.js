require('app-module-path').addPath(`${__dirname}'./../../`);
import minimist from "minimist";
import Mocha from "mocha";
import glob from "glob";
import "./utils/dom";
import hook from "css-modules-require-hook";
import sass from "node-sass";
import path from "path";

hook({
    extensions: ['.scss'],
    preprocessCss: function (css, filepath) {
        console.log(filepath);
        var result = sass.renderSync({
            data: css,
            importer: importer,
            includePaths: [path.resolve(filepath, '..')]
        });

        return result.css;
    }
});

function importer(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }

    return {file: url};
}

const argv = minimist(process.argv.slice(2), {
    alias: {
        c: 'component',
        g: 'grep',
    },
});

const types = argv._;
const globPatterns = {
    unit: `source/_patterns/**/${argv.component ? argv.component : '*'}.spec.js`,
    integration: `test/integration/**/${argv.component ? argv.component : '*'}.spec.js`,
};

let pattern;

if (types.indexOf('unit') + types.indexOf('integration') === -2) {
    pattern = Object.keys(globPatterns).map((n) => globPatterns[n]);
} else {
    pattern = types.map((n) => globPatterns[n]);
}

const mocha = new Mocha({
    grep: argv.grep ? argv.grep : undefined,
});

glob(
    pattern.length > 1 ? `{${pattern.join(',')}}` : pattern[0],
    {},
    (err, files) => {
        files.forEach((file) => mocha.addFile(file));
        mocha.run((failures) => {
            process.on('exit', () => {
                process.exit(failures);
            });
        });
    }
);
