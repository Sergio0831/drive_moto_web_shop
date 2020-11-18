const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');
const {merge} = require('webpack-merge');



module.exports = merge(config, {
  mode: "development",
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    before: function(app, server) {
      server._watch('./src/**/*.html')
    },
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 3000,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './src/catalog.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 
          {loader: 'css-loader?url=false', options: {sourceMap: true}},
          {loader: 'resolve-url-loader', options: {sourceMap: true}},
          {loader: 'sass-loader?sourceMap', options: {sourceMap: true}}
        ]
      },
    ]
  },
  devtool: 'inline-source-map',
})