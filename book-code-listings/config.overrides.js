var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function override(config, env) {
  config.devServer.push({ historyApiFallback: true });
  config.output.push({ publicPath: "/" });
  return config;
};
