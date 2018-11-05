module.exports = {
  title: 'App-Arena React Pattern',
  components: 'source/patterns/**/*.tsx',
  webpackConfig: require('./build/webpack/webpack.config.dev'),
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', []).parse.parse,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
};
