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
      filename: 'admin/login.html',
      template: './src/template/admin/login.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'admin/posts.html',
      template: './src/template/admin/posts.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'admin/dashboard.html',
      template: './src/template/admin/dashboard.html',
    }),

    new HtmlWebpackPlugin({
      filename: 'admin/home.html',
      template: './src/template/admin/home.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
