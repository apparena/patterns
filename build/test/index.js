require('app-module-path').addPath(`${__dirname}'./../../`);
import Minimist from 'minimist';
import Mocha from 'mocha';
import Glob from 'glob';
import './utils/dom';

var hook = require('css-modules-require-hook');
var sass = require('node-sass');

var path = require('path');

hook({
  extensions: ['.scss'],
  preprocessCss: function (css, filepath) {
    console.log(filepath);
    var result =  sass.renderSync({
      data: css,
      importer: importer,
      includePaths: [ path.resolve(filepath, '..') ]
    });

    return result.css;
  }
});

function importer(url, prev, done) {
  if (url[0] === '~') {
    url = path.resolve('node_modules', url.substr(1));
  }

  return { file: url };
}

const argv = Minimist(process.argv.slice(2), {
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

Glob(
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
