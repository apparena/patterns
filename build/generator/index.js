import glob from 'glob';
import each from 'async/each';
import fse from 'fs-extra';
import child_process from 'child_process';
import handlebars from 'handlebars';
import path from 'path';
import _ from 'lodash';

const reactDocs = require('react-docgen');


_.mixin({pascalCase: _.flow(_.camelCase, _.upperFirst)});

console.log('Cleaning directories...');
fse.removeSync('build/generator/frontend/src/components');
fse.removeSync('build/generator/frontend/src/staticPages');

/**
 * Get the path + the base name of a component. The base name is the entire name without the extension. This helps
 * categorizing all files belonging to a component since multiple files can belong to a component. In this case
 * only the extension differs.
 * @param fileName
 * @returns {string}
 */
function getBaseName(fileName) {
    const parts = fileName.split('/');
    const basename = parts.slice(-1)[0].split('.')[0];
    parts.splice(parts.length - 1);
    return `${parts.join('/')}/${basename}`;
}

/**
 * Generates the documentation for all components supplied to it. This function only needs an array of base names
 * generated from getBaseName() to generate the necessary documentation. It also compiles a handlebars template and
 * writes it to the dist/ directory.
 * @param directory
 */
function generateComponentDocumentation(directory) {
    let mdFileName = '';
    let exampleFileName = '';
    let componentClassName = '';
    let propsFileName = '';

    glob.sync(`${directory}/**/?(docs)/**`).forEach((file) => {
        if (file.endsWith('.md')) {
            mdFileName = `${_.camelCase(path.basename(file, path.extname(file)))}${path.extname(file)}`;
            fse.copySync(file, `build/generator/frontend/src/components/${directory}/docs/${mdFileName}`);
        } else if (file.match(/.spec.?(js|jsx)/)) {
            // TODO: Figure out testing

        } else if (file.match(/.example.?(js|jsx)/)) {
            exampleFileName = `${_.camelCase(path.basename(file, path.extname(file)))}${path.extname(file)}`;
            fse.copySync(file, `build/generator/frontend/src/components/${directory}/docs/${exampleFileName}`);
        }
    });

    glob.sync(`${directory}/*.?(js|jsx)`).forEach((component) => {
        const componentContent = fse.readFileSync(component, 'utf8');
        const componentMatch = componentContent.match(/export default (class)?\s?([a-zA-Z0-9]+)/);
        if (componentMatch) {
            componentClassName = componentMatch[2];
        }

        try {
            const infos = reactDocs.parse(componentContent);
            const infosString = JSON.stringify(infos);
            if (fse.existsSync(`build/generator/frontend/src/components/${directory}/docs/`)) {
                propsFileName = 'info.json';
                fse.writeFileSync(`build/generator/frontend/src/components/${directory}/docs/info.json`, infosString);
            }
        }
        catch (err) {
            // Example error won't be caught here... crashing our app
            // hence the need for domains
        }
    });


    const componentTemplateSource = fse.readFileSync('build/generator/templates/component.hbs', 'utf8');
    const componentTemplate = handlebars.compile(componentTemplateSource);
    const data = {
        mdFileName,
        exampleFileName,
        propsFileName,
        componentClassName
    };
    const renderedTemplate = componentTemplate(data);
    fse.outputFileSync(`build/generator/frontend/src/components/${directory}/index.jsx`, renderedTemplate, 'utf8');
}

function createComponentsList(categories) {
    const list = Object.keys(categories).map((category) => {
        return {
            name: category,
            visible: categories[category].visible,
            componentList: categories[category].components
        };
    });
    const liststring = JSON.stringify(list);

    fse.writeFileSync('build/generator/frontend/src/components/list.json', liststring);
}


/**
 * Iterate through the component sources
 */
glob('source/_patterns/*/**/!(__tests__|docs)/*.?(js|jsx)', (err, files) => {
    const componentDirectories = [];

    console.log('Preparing...');
    files.forEach((file) => {
        const dir = path.dirname(file);
        if (!componentDirectories.includes(dir)) {
            componentDirectories.push(dir);
        }
    });

    /**
     * Initialize and generate categories from component sources and prepare them for the
     * handlebars template
     */
    console.log('Initializing categories...');
    const categories = {}, indexFiles = [];
    glob.sync('source/_patterns/!(react-utils|corporate-identity)/')
        .map((cf) => {
            return cf.split('/').slice(-2)[0];
        })
        .forEach((cf) => {
            categories[cf] = {visible: true, components: []};
        });


    /**
     * Generate documentation for each component
     */
    console.log('Generating documentation...');
    each(componentDirectories, (directory, callback) => {
        if (!fse.existsSync(directory + '/docs')) {
            callback();
            return;
        }

        const component = directory.split('/').slice(-1);
        const exportedComponents = fse.readFileSync('source/_patterns/index.js', 'utf8');

        if (!exportedComponents.includes(`/${component}';`)) {
            callback();
            return;
        }


        const components = glob.sync(`${directory}/*.?(js|jsx)`).map((component) => {
            return path.basename(component);
        });

        const componentFiles = [];

        /**
         * Collect all components that reside within the directories that contain them
         */
        components.forEach((component) => {
            glob.sync(`${directory}/${component.split('.js')[0]}.*`)
                .map((f) => {
                    return getBaseName(f);
                })
                .filter((value, index, self) => {
                    return self.indexOf(value) === index;
                })
                .forEach((componentFile) => {
                    if (!componentFiles.includes(componentFile)) {
                        componentFiles.push(componentFile);
                    }
                });
        });

        generateComponentDocumentation(directory);

        /**
         * Fill in all components and assign them their categories so that they will be displayed properly
         * in the frontend navigation
         */
        componentFiles.forEach((cf) => {
            const category = categories[directory.split('/')[2]];
            if (category !== undefined) {
                const files = glob.sync(`${cf}.?(js|jsx)`);
                files.forEach((file) => {
                    let className = path.basename(file, path.extname(file));
                    if (className === 'index') {
                        className = path.dirname(file).split(path.sep).pop();
                    }
                    className = _.pascalCase(className);
                    category.components.push(className);
                    indexFiles.push({name: className, directory});
                });
            }
        });
        callback();
    });

    Object.keys(categories).forEach((key) => {
        if (categories[key].components.length === 0)
            delete categories[key];
    });


    console.log('Finishing up...');

    createComponentsList(categories);

    const indexTemplateSource = fse.readFileSync('build/generator/templates/components_index.hbs', 'utf8');
    const indexTemplate = handlebars.compile(indexTemplateSource);
    const indexTemplateData = {
        components: indexFiles
    };
    const renderedIndexTemplate = indexTemplate(indexTemplateData);
    fse.outputFileSync('build/generator/frontend/src/components/index.jsx', renderedIndexTemplate, 'utf8');

});

glob('build/generator/frontend/pages/*', (err, files) => {
    console.log('Creating static pages');

    const staticPageHTMLSource = fse.readFileSync('build/generator/templates/staticPageHTML.hbs', 'utf8');
    const staticPageHTMLTemplate = handlebars.compile(staticPageHTMLSource);
    const staticPageIndexSource = fse.readFileSync('build/generator/templates/staticPageIndex.hbs', 'utf8');
    const staticPageIndexTemplate = handlebars.compile(staticPageIndexSource);
    const index = {
        exports: [],
        imports: []
    };

    files.forEach((file) => {
        if (file.endsWith('.html')) {
            if (!fse.existsSync('html2xhtml')) {
                console.log("Fetching html2xhmtl");
                child_process.execSync('bash getH2X.sh', {stdio: [0, 1, 2]});
                console.log("Built html2xhtml");
            }

            const xhtml = child_process.execSync(`./html2xhtml ${file} -b 4 --generate-snippet`);
            const renderedTemplate = staticPageHTMLTemplate({html: xhtml});
            const newFileName = getBaseName(file).split('/').slice(-1);

            fse.outputFileSync(`build/generator/frontend/src/staticPages/${newFileName}.jsx`, renderedTemplate, 'utf8');
            index.exports.push({route: newFileName, component: newFileName, name: newFileName});
            index.imports.push({component: newFileName});
        } else if (file.endsWith('.jsx')) {
            const jsx = fse.readFileSync(file, 'utf8');
            const newFileName = getBaseName(file).split('/').slice(-1);

            fse.copySync(file, `build/generator/frontend/src/staticPages/${newFileName}.jsx`);
            index.exports.push({route: newFileName, component: newFileName, name: newFileName});
            index.imports.push({component: newFileName});
        }
    });

    const renderedIndex = staticPageIndexTemplate({imports: index.imports, exports: index.exports});
    fse.outputFileSync(`build/generator/frontend/src/staticPages/index.jsx`, renderedIndex, 'utf8');

    console.log("Finished creating static pages");
});

