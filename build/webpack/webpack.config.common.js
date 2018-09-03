/**
 * Webpack configuration available to all environments
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const config = require('./env/common/config');

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
          loader: 'awesome-typescript-loader',
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        oneOf: [
          {
            // Global imports without css modules
            test: /\.global\.(scss|css)$/,
            use: [
              config.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'resolve-url-loader',
              'sass-loader',
            ],
          },
          {
            // Default imports using local styles
            test: /\.(scss|css)$/,
            use: [
              config.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 2,
                  localIdentName: config.mode === 'production' ? '[hash:base64:5]' : '[local]--[hash:base64:5]',
                  camelCase: true,
                  sourceMap: true,
                },
              },
              'resolve-url-loader?sourceMap',
              'sass-loader?sourceMap',
            ],
          },
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
