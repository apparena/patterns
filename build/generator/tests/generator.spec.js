import test from 'ava';
import glob from 'glob';
import path from 'path';
import fse from 'fs-extra';
import {expect} from 'chai';
import _ from 'lodash';
import handlebars from 'handlebars';

const reactDocs = require('react-docgen');

function getBaseName(fileName) {
    const parts = fileName.split("/");
    const basename = parts.slice(-1)[0].split(".")[0];
    parts.splice(parts.length - 1);
    return `${parts.join("/")}/${basename}`;
}

test('getBaseName works as expected', (t) => {
    expect(getBaseName("path/to/file.txt")).to.equal("path/to/file");
    expect(getBaseName("path/to/file.txt")).not.to.equal("path/to/file.txt");
    expect(getBaseName("another/path/to/a/big_file.jpeg")).to.equal("another/path/to/a/big_file");
});

test('category initialization works', (t) => {
    const categories = {};
    glob.sync("source/_patterns/!(react-utils|corporate-identity)/")
        .map((cf) => {return cf.split("/").slice(-2)[0]})
        .forEach((cf) => {categories[cf] = {visible: true, components: []}});

    /**
     * Look at source/_patterns to check which folders should be here
     */
    const comparator = {
        '00-atoms': { visible: true, components: [] },
        '01-molecules': { visible: true, components: [] },
        '02-organisms': { visible: true, components: [] },
        '03-templates': { visible: true, components: [] },
        '04-pages': { visible: true, components: [] }
    };

    expect(categories).to.deep.equal(comparator);
});

test('Generator ignores subdirectories without documentation', (t) => {
    const files = glob.sync('source/_patterns/*/**/!(__tests__|docs)/*.?(js|jsx)');

    const componentDirectories = [], excludedDirectories = [];

    files.forEach((file) => {
        const dir = path.dirname(file);
        if (!componentDirectories.includes(dir)) {
            componentDirectories.push(dir);
        }
    });

    componentDirectories.forEach((directory, i) => {
        if (!fse.existsSync(directory + '/docs')) {
            excludedDirectories.push(directory);
        }
    });

    const actualDirectories = componentDirectories.filter((dir) => !excludedDirectories.includes(dir));
    const docDirs = glob.sync('source/_patterns/**/docs');
    let matches = 0;

    docDirs.forEach((dir) => {
        const dirname = dir.split('/').slice(0, -1).join('/');
        expect(actualDirectories).to.include(dirname);

        if (actualDirectories.includes(dirname)) {
            ++matches;
        }
    });

    expect(matches).to.equal(actualDirectories.length);
});

test('Generator does not include non-exported components', (t) => {
    const files = glob.sync('source/_patterns/**/!(__tests__|docs)/*.?(js|jsx)');
    const componentDirectories = [];
    const actualComponentDirs = [];
    const exportedComponents = fse.readFileSync('source/_patterns/index.js', 'utf8');

    files.forEach((file) => {
        const dir = path.dirname(file);
        if (!componentDirectories.includes(dir)) {
            componentDirectories.push(dir);
        }
    });

    componentDirectories.forEach((directory) => {
        const component = directory.split('/').slice(-1);

        if (exportedComponents.includes(`/${component}';`)) {
            actualComponentDirs.push(directory);
        }
    });

    expect(actualComponentDirs).to.have.lengthOf.at.least(1);
    expect(actualComponentDirs).to.not.have.lengthOf.above(componentDirectories.length);
});

test('Generator generates proper documentation', (t) => {
    const files = glob.sync('source/_patterns/**/!(__tests__|docs)/*.?(js|jsx)');
    const componentDirectories = [];
    const exportedComponents = fse.readFileSync('source/_patterns/index.js', 'utf8');

    files.forEach((file) => {
        const dir = path.dirname(file);
        if (!componentDirectories.includes(dir)) {
            componentDirectories.push(dir);
        }
    });

    componentDirectories.forEach((directory) => {
        if (fse.existsSync(directory + '/docs')) {
            const component = directory.split('/').slice(-1);

            if (exportedComponents.includes(`/${component}';`)) {
                let mdFileName = '';
                let exampleFileName = '';
                let componentClassName = '';

                glob.sync(`${directory}/**/?(docs)/**`).forEach((file) => {
                    if (file.endsWith('.md')) {
                        mdFileName = `${_.camelCase(path.basename(file, path.extname(file)))}${path.extname(file)}`;
                    } else if (file.match(/.example.?(js|jsx)/)) {
                        exampleFileName = `${_.camelCase(path.basename(file, path.extname(file)))}${path.extname(file)}`;
                    }
                });

                glob.sync(`${directory}/*.?(js|jsx)`).forEach((component) => {
                    const componentContent = fse.readFileSync(component, 'utf8');
                    const componentMatch = componentContent.match(/export default (class)?\s?([a-zA-Z0-9]+)/);
                    if (componentMatch) {
                        componentClassName = componentMatch[2];
                    }

                    const infos = reactDocs.parse(componentContent);
                    const infosString = JSON.stringify(infos);
                });

                const componentTemplateSource = fse.readFileSync('build/generator/templates/component.hbs', 'utf8');
                const componentTemplate = handlebars.compile(componentTemplateSource);
                const data = {
                    mdFileName,
                    exampleFileName,
                    componentClassName
                };
                const renderedTemplate = componentTemplate(data);

                expect(mdFileName).to.not.be.empty;
                expect(exampleFileName).to.not.be.empty;
                expect(componentClassName).to.not.be.empty;
                expect(renderedTemplate).to.not.be.empty;
                expect(renderedTemplate).to.be.a('string');
                expect(renderedTemplate).to.have.string('export default class ' + componentClassName);
                expect(renderedTemplate).to.have.string(exampleFileName);
                expect(renderedTemplate).to.have.string(mdFileName);
                expect(renderedTemplate).to.have.string('render() {');
            }
        }
    });
});