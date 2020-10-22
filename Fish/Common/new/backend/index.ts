const http = require('http');
const express = require('express');
const cors = require('cors');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
import { Server } from "colyseus";
import { monitor } from "@colyseus/monitor";
import { FishRoom } from "./FishRoom";

const app = express();
const PORT: number = 3000;

app.use(cors());
app.use(express.json())

const webpackConfig = require('../webpack.config.js');
const webpackCompiler = webpack(webpackConfig);

export const WATCH_ALL_FLAG = `--watch=backend+frontend`;

function runWebpackMiddleware(): void {
  // Tell express to use the webpack-dev-middleware and use the
  // webpack.config.js configuration file as a base.
  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
  }));
}

const server = http.createServer(app);
const gameServer = new Server({
  server,
});


gameServer.define('fish', FishRoom);
app.use("/colyseus", monitor());
gameServer.listen(PORT);

function main(): void {
  let args = process.argv;
  if (args.length === 3 && args[2] === WATCH_ALL_FLAG) {
    runWebpackMiddleware();
  }
  // Serve the files on `PORT`
  app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!\n`);
  });
}

main();
