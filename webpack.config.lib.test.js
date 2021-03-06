const HtmlWebpackPlugin = require("html-webpack-plugin"); // 通过 npm 安装
const webpack = require("webpack"); // 用于访问内置插件
const path = require("path");

module.exports = {
  entry: {
    testLib: "./test-lib/test.js",
  },
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist-lib"),
    library: 'testLib',
    libraryTarget: 'umd',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
