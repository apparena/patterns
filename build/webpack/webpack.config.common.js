/**
 * Webpack configuration available to all environments
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const config = require('./env/common/config');
const autoprefixer = require('autoprefixer');

const MiniCssExtractPluginLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: path.resolve(config.paths.dist, 'css'),
  },
};

const CSSModuleLoader = {
  loader: 'typings-for-css-modules-loader',
  options: {
    namedExport: true,
    camelCase: true,
    modules: true,
    localIdentName: '[local]--[hash:base64:5]',
    sourceMap: true,
    importLoaders: 2,
  },
};

const CSSLoader = {
  loader: 'typings-for-css-modules-loader',
  options: {
    namedExport: false,
    camelCase: true,
    modules: false,
    sourceMap: true,
    importLoaders: 2,
  },
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      }),
    ],
  },
};

module.exports = {
  context: config.paths.assets,
  mode: config.mode,
  module: {
    rules: [
      {
        test: /\.([tj])s(x)?$/,
        resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
        exclude: [/node_modules/, '/source/generator-apparena-pattern/generators/app/templates'],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          MiniCssExtractPluginLoader,
          CSSLoader,
          postCSSLoader,
          'sass-loader',
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPluginLoader,
          CSSModuleLoader,
          postCSSLoader,
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'vendor/[name].[ext]',
          },
        }],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  output: {
    path: config.paths.dist,
    publicPath: config.publicPath,
    filename: `${config.paths.scripts}/${config.assetsFilenames}.js`,
    chunkFilename: `${config.paths.scripts}/chunks/${config.assetsFilenames}[chunkhash].js`,
  },
  resolve: {
    alias: {
      'apparena-patterns-react$': path.resolve(config.paths.root, 'source/patterns/index.js'),
      'apparena-patterns-react': path.resolve(config.paths.root, 'source/'),
      Frontend: path.resolve(config.paths.root, 'source/frontend/'),
      Utils: path.resolve(config.paths.root, 'source/patterns/react-utils/'),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './source/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: `${config.paths.styles}/${config.assetsFilenames}.css`,
    }),
    new webpack.IgnorePlugin(/^props$/),
    new Visualizer(),
  ],
};
