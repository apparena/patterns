const glob = require('glob');
const each = require('async/each');
const fse = require('fs-extra');
const handlebars = require('handlebars');
const path = require('path');
const _ = require('lodash');
const reactDocs = require('react-docgen');
const util = require('util');

_.mixin({ pascalCase: _.flow(_.camelCase, _.upperFirst) });

console.log('Cleaning directories...');
fse.removeSync('source/frontend/components');

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

  console.log(`Generating pattern for ${directory}`);

  // Get example file
  glob.sync(`${directory}/**/?(docs)/**`)
    .forEach((file) => {
      if (file.endsWith('.md')) {
        mdFileName = `${path.basename(file, path.extname(file))}${path.extname(file)}`;
      } else if (file.match(/.spec.?(js|jsx|ts|tsc)/)) {
        // TODO: Figure out testing

      } else if (file.match(/.example.?(js|jsx|ts|tsx)/)) {
        exampleFileName = `${path.basename(file, path.extname(file))}${path.extname(file)}`;
      }
    });

  // Get component files
  glob.sync(`${directory}/*.?(js|jsx|ts|tsx)/`)
    .forEach((component) => {
      const componentContent = fse.readFileSync(component, 'utf8');
      const componentMatch = componentContent.match(/export default (class)?\s?([a-zA-Z0-9]+)/);
      if (componentMatch) {
        componentClassName = componentMatch[2];
      }

      try {
        const infos = reactDocs.parse(componentContent);
        const infosString = JSON.stringify(infos);

        propsFileName = 'info.json';
        fse.outputFileSync(`source/frontend/components/${directory}/info.json`, infosString);
      } catch (err) {
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
    componentClassName,
    patternDir: directory.replace('source/patterns/', ''),
  };

  // Render component index file
  const renderedTemplate = componentTemplate(data);
  fse.outputFileSync(`source/frontend/components/${directory}/index.jsx`, renderedTemplate, 'utf8');
}

function createComponentsList(categories) {
  const list = Object.keys(categories)
    .map((category) => {
      // Add some special settings for atomic categories
      let name = category;
      switch (category) {
        case '00-atoms':
          name = 'Atoms';
          break;
        case '01-molecules':
          name = 'Molecules';
          break;
        case '02-organisms':
          name = 'Organisms';
          break;
        case '03-templates':
          name = 'Templates';
          break;
        case '04-pages':
          name = 'Pages';
          break;
      }

      return {
        name,
        visible: categories[category].visible,
        componentList: categories[category].components,
      };
    });
  const liststring = JSON.stringify(list);

  // console.log(`Create component list for ${list.length} categories:\n`, util.inspect(list));
  fse.writeFileSync('source/frontend/components/list.json', liststring);
}

/**
 * Iterate through the component sources
 */
glob('source/patterns/*/**/!(__tests__|docs)/*.?(js|jsx|ts|tsx)', (err, files) => {
  const componentDirectories = [];

  console.log('Preparing...');
  files.forEach((file) => {
    const dir = path.dirname(file);
    if (!componentDirectories.includes(dir)) {
      componentDirectories.push(dir);
    }
  });

  console.log(`Generating ${componentDirectories.length} patterns:\n`, util.inspect(componentDirectories));

  /**
   * Initialize and generate categories from component sources and prepare them for the
   * handlebars template
   */
  console.log('Initializing categories...');
  const categories = {};


  const indexFiles = [];
  glob.sync('source/patterns/!(corporate-identity)/')
    .map(cf => cf.split('/')
      .slice(-2)[0])
    .forEach((cf) => {
      categories[cf] = {
        visible: true,
        components: [],
      };
    });

  console.log(`Generating ${categories.length} categories:\n`, util.inspect(categories));

  /**
   * Generate documentation for each component
   */
  console.log('Generating documentation...');
  const exportedComponents = fse.readFileSync('source/patterns/index.js', 'utf8');

  each(componentDirectories, (directory, callback) => {
    if (!fse.existsSync(`${directory}/docs`)) {
      callback();
      return;
    }

    const component = directory.split('/')
      .slice(2)
      .join('/');

    if (!exportedComponents.includes(`/${component}`)) {
      callback();
      return;
    }


    const components = glob.sync(`${directory}/*.?(js|jsx|ts|tsx)`)
      .map(component => path.basename(component));
    const componentFiles = [];

    /**
     * Collect all components that reside within the directories that contain them
     */
    components.forEach((component) => {
      glob.sync(`${directory}/${component.split('.js')[0]}.*`)
        .map(f => getBaseName(f))
        .filter((value, index, self) => self.indexOf(value) === index)
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
        const files = glob.sync(`${cf}.?(js|jsx|ts|tsx)`);
        files.forEach((file) => {
          let className = path.basename(file, path.extname(file));
          if (className === 'index') {
            className = path.dirname(file)
              .split(path.sep)
              .pop();
          }
          className = _.pascalCase(className);
          category.components.push(className);
          indexFiles.push({
            name: className,
            directory: path.posix.join(directory, 'index'),
          });
        });
      }
    });
    callback();
  });

  Object.keys(categories)
    .forEach((key) => {
      if (categories[key].components.length === 0) {
        delete categories[key];
      }
    });


  console.log('Finishing up...');

  createComponentsList(categories);

  const indexTemplateSource = fse.readFileSync('build/generator/templates/components_index.hbs', 'utf8');
  const indexTemplate = handlebars.compile(indexTemplateSource);
  const indexTemplateData = {
    components: indexFiles,
  };
  const renderedIndexTemplate = indexTemplate(indexTemplateData);
  fse.outputFileSync('source/frontend/components/index.jsx', renderedIndexTemplate, 'utf8');
});
