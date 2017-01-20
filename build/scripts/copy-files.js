/* eslint-disable no-console */
import path from "path";
import fse from "fs-extra";
import Minimist from "minimist";

const argv = Minimist(process.argv.slice(2));

const files = [
    './source/css',
    './source/iconsets',
    'README.md',
    'CHANGELOG.md',
    'LICENSE',
];

Promise.all(
    files.map((file) => copyFile(file))
)
    .then(() => createPackageFile());

function copyFile(file) {
    const buildPath = resolveBuildPath(file);
    return new Promise((resolve) => {
        fse.copy(
            file,
            buildPath,
            (err) => {
                if (err) throw err;
                resolve();
            }
        );
    })
        .then(() => console.log(`Copied ${file} to ${buildPath}`));
}

function resolveBuildPath(file) {
    return path.resolve(__dirname, '../apparena-patterns-react/', path.basename(file));
}

function createPackageFile() {
    return new Promise((resolve) => {
        fse.readFile(path.resolve(__dirname, '../../package.json'), 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            resolve(data);
        });
    })
        .then((data) => JSON.parse(data))
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

            var {version}  = packageData;
            if (argv._.length) {
                version = argv._[0];
            }

            const minimalPackage = {
                name: "apparena-patterns-react",
                author,
                version,
                description,
                main: './_patterns/index.js',
                keywords,
                repository,
                license,
                bugs,
                homepage,
                peerDependencies,
                dependencies,
            };

            return new Promise((resolve) => {
                const buildPath = path.resolve(__dirname, '../apparena-patterns-react/package.json');
                const data = JSON.stringify(minimalPackage, null, 2);
                fse.writeFile(buildPath, data, (err) => {
                    if (err) throw (err);
                    console.log(`Created package.json in ${buildPath}`);
                    resolve();
                });
            });
        });
}