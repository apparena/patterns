module.exports = {
  cacheDirectory: true,
  presets: [
	['env', {modules: false}],
	'stage-0',
	'stage-1',
	'react',
  ],
  plugins: [
	'syntax-trailing-function-commas',
	'transform-class-properties',
	'transform-object-rest-spread',
	'transform-decorators-legacy'
  ]
};
