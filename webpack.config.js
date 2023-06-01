const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 3000,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: './src/template/home.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: './src/template/blog.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/template/login.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
