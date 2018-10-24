const path = require('path');
const fse = require('fs-extra');
const Minimist = require('minimist');
const config = require('../webpack/env/common/config');

const argv = Minimist(process.argv.slice(2));

/**
 * Copy files to the distribution folder
 * @param file
 * @param subfolder
 * @return {Promise<void>}
 */
function copyFile(file, subfolder) {
  const buildPath = path.resolve(config.paths.dist, subfolder, path.basename(file));
  return new Promise((resolve) => {
    fse.copy(
      file,
      buildPath,
      (err) => {
        if (err) throw err;
        resolve();
      },
    );
  })
    .then(() => console.log(`Copied ${file} to ${buildPath}`));
}

/**
 * Generates the package.json file
 * @return {Promise<T>}
 */
function createPackageFile(subfolder) {
  return new Promise((resolve) => {
    const packageJson = path.resolve(config.paths.root, 'package.json');
    fse.readFile(packageJson, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      resolve(data);
    });
  })
    .then(data => JSON.parse(data))
    .then((packageData) => {
      const {
        author,
        description,
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
      } = packageData;

      let { version } = packageData;
      if (argv._.length) {
        version = argv._[0];
      }

      const minimalPackage = {
        name: 'apparena-patterns-react',
        author,
        version,
        description,
        main: './patterns/index.js',
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
      };

      return new Promise((resolve) => {
        const buildPath = path.resolve(config.paths.dist, subfolder, 'package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(buildPath, data, (err) => {
          if (err) throw (err);
          console.log(`Created package.json in ${buildPath}`);
          resolve();
        });
      });
    });
}


// Prepare NPM package
let files = [
  'docs/',
  './source/assets',
  './source/css',
  './source/favicon.ico',
  'README.md',
  'LICENSE.md',
];
Promise.all(files.map(file => copyFile(file, 'apparena-patterns-react'))).then(() => createPackageFile('apparena-patterns-react'));

// Prepare frontend
files = [
  './source/frontend',
];
Promise.all(files.map(file => copyFile(file, '')));
