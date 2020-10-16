const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
// loaders are loaders that gets webpack to handle different types of files
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.[contenHash].js", // this is called cache busting we are using contenHash as we want a new image on evey build
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // turns js in hs
          "css-loader", // turns css to js
          "sass-loader", // turns scss to css
        ], // this array has an order, i.e. they execute in reverse
        test: /\.css$/,
        use: [
          "style-loader", // turns js in hs
          "css-loader", // turns css to js
        ], // this array has an order, i.e. they execute in reverse
      },
    ],
  },
});

// plugins allow us create HTML page when we are constantly change the files when we require any change
