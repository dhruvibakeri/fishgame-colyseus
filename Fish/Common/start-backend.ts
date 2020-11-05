const http = require('http');
const express = require('express');
const cors = require('cors');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

import { Server } from "colyseus";
import { FishRoom } from "./server/backend";



const port = Number(2567);
const app = express();

const webpackConfig = require('./webpack.config.js');
const webpackCompiler = webpack(webpackConfig);

app.use(cors());
app.use(express.json());

const gameServer = new Server({ server: http.createServer(app), express: app, pingInterval: 0 });
gameServer.define("fish", FishRoom).enableRealtimeListing();
app.use('/', express.static(__dirname));


app.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
}));


gameServer.onShutdown(() => { });

gameServer.listen(port);

