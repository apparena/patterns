const path = require('path');

module.exports = {
  title: 'App-Arena React Pattern',
  pagePerSection: true,
  styleguideDir: 'dist/docs',
  sections: [
    {
      name: 'Atoms',
      description: 'App-Arena Atom Components',
      components: 'source/patterns/00-atoms/**/*.tsx',
    },
    {
      name: 'Molecules',
      description: 'App-Arena Molecule Components',
      components: 'source/patterns/01-molecules/**/*.tsx',
    },
    {
      name: 'Organisms',
      description: 'App-Arena Organisms Components',
      components: 'source/patterns/02-organisms/**/*.tsx',
    },
    {
      name: 'Templates',
      description: 'App-Arena Templates',
      components: 'source/patterns/03-templates/**/*.tsx',
    },
    {
      name: 'Pages',
      description: 'App-Arena Pages',
      components: 'source/patterns/04-pages/**/*.tsx',
    },
    {
      name: 'Utils',
      description: 'App-Arena Utility Components',
      components: 'source/patterns/react-utils/**/*.tsx',
    },
  ],
  webpackConfig: require('./build/webpack/webpack.config.dev'),
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  styleguideComponents: {
    // StyleGuideRenderer: path.join(__dirname, 'source/styleguide/StyleGuide'),
  },
  template: {
    head: {
      links: [
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto',
          rel: 'stylesheet',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: 'Roboto',
    },
    color: {
      base: '#000',
      sidebarBackground: '#F8F9FA',
    },
  },
};
