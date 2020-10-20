const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const PORT: number = 3000;

const webpackConfig = require('../webpack.config.js');
const webpackCompiler = webpack(webpackConfig);

function runWebpackMiddleware() {
  // Tell express to use the webpack-dev-middleware and use the
  // webpack.config.js configuration file as a base.
  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
  }));
}

function main() {
  let args = process.argv;
  if (args.length === 3 && args[2] === "--watch=backend+frontend") {
    runWebpackMiddleware();
  }
  // Serve the files on `PORT`
  app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!\n`);
  });
}

main();


