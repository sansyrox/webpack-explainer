const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

// loaders are loaders that gets webpack to handle different types of files
module.exports = {
  entry: "./src/index",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};

// plugins allow us create HTML page when we are constantly change the files when we require any change
