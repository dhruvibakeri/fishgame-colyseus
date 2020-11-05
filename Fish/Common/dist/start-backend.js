"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const express = require('express');
const cors = require('cors');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const colyseus_1 = require("colyseus");
const backend_1 = require("./server/backend");
const port = Number(2567);
const app = express();
const webpackConfig = require('./webpack.config.js');
const webpackCompiler = webpack(webpackConfig);
app.use(cors());
app.use(express.json());
const gameServer = new colyseus_1.Server({ server: http.createServer(app), express: app, pingInterval: 0 });
gameServer.define("fish", backend_1.FishRoom).enableRealtimeListing();
app.use('/', express.static(__dirname));
app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
}));
gameServer.onShutdown(() => { });
gameServer.listen(port);
//# sourceMappingURL=start-backend.js.map