const Generator = require('yeoman-generator');
const pascalcase = require('uppercamelcase');
const esprima = require('esprima');
const escodegen = require('escodegen');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'list',
        name: 'type',
        choices: [
          'Atom',
          'Molecule',
          'Organism',
        ],
        default: 'Atom',
        message: 'What type of pattern would you like to create?',
        store: true,
      },
      {
        type: 'input',
        name: 'patternName',
        message: 'Please specify the pattern name',
      },
    ])
      .then((answers) => {
        this.patternType = answers.type;
        this.patternName = answers.patternName;
        this.pascalCasePatternName = pascalcase(answers.patternName);

        switch (answers.type) {
          case 'Atom':
            this.patternPath = '00-atoms';
            break;
          case 'Molecule':
            this.patternPath = '01-molecules';
            break;
          case 'Organism':
            this.patternPath = '02-organisms';
            break;
          default:
            this.patternPath = '';
            break;
        }
      });
  }

  writing() {
    const newPatternRoot = `${this.destinationPath()}/source/patterns/${this.patternPath}/${this.patternName}`;

    /** Component index.js file */
    this.fs.copyTpl(
      this.templatePath('index.js'),
      `${newPatternRoot}/index.js`,
      { patternName: this.pascalCasePatternName },
    );

    /** Component scss file */
    this.fs.copyTpl(
      this.templatePath('component.scss'),
      `${newPatternRoot}/component.scss`,
    );

    /** Component example.js file */
    this.fs.copyTpl(
      this.templatePath('example.js'),
      `${newPatternRoot}/docs/${this.patternName}.js`,
      { patternName: this.pascalCasePatternName },
    );

    /** Component markdown file */
    this.fs.copyTpl(
      this.templatePath('documentation.md'),
      `${newPatternRoot}/docs/${this.patternName}.md`,
    );

    /** Add the component to the patterns/index.js file */
    const patternDefinitionFile = this.fs.read(`${this.destinationPath()}/source/patterns/index.js`);
    const AST = esprima.parseModule(patternDefinitionFile);
    const newAST = Object.assign({}, AST);
    newAST.body = [];

    AST.body.forEach((node) => {
      if (node.type === 'ImportDeclaration') {
        newAST.body.push(node);
      } else if (node.type === 'ExportNamedDeclaration') {
        newAST.body.push({
          type: 'ImportDeclaration',
          source: {
            type: 'Literal',
            raw: `./${this.patternPath}/${this.patternName}`,
            value: `./${this.patternPath}/${this.patternName}`,
          },
          specifiers: [{
            type: 'ImportDefaultSpecifier',
            local: {
              type: 'Identifier',
              name: this.pascalCasePatternName,
            },
          }],
        });

        node.specifiers.push({
          type: 'ExportSpecifier',
          local: {
            type: 'Identifier',
            name: this.pascalCasePatternName,
          },
          exported: {
            type: 'Identifier',
            name: this.pascalCasePatternName,
          },
        });

        newAST.body.push(node);
      }
    });

    const newPatternDefinitionFile = escodegen.generate(newAST);
    this.fs.write(`${this.destinationPath()}/source/patterns/index.js`, newPatternDefinitionFile);
  }
};
