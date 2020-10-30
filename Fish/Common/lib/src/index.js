"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rerender = void 0;
require("./style.css");
const importData_1 = __importDefault(require("./importData"));
const fabric_1 = require("fabric");
const graphics_1 = require("./graphics");
const graphics_2 = require("./graphics");
const Colyseus = __importStar(require("colyseus.js"));
const schema_to_cstate_1 = require("./schema-to-cstate");
const BANNER_WIDTH = 600;
const BANNER_HEIGHT = 185;
function addBannerAndCanvas() {
    // <p class="banner">
    //   <img src="assets/banner.jpg"
    //        width="600px">
    // </p>
    const bannerPara = document.createElement("p");
    bannerPara.id = "bannerPara";
    const banner = new Image(BANNER_WIDTH, BANNER_HEIGHT);
    banner.src = importData_1.default.banner;
    bannerPara.appendChild(banner);
    bannerPara.classList.add("banner");
    document.body.appendChild(bannerPara);
    // <p align="center">
    //  <canvas id="canvas">
    //  </canvas>
    // </p>
    let canvasPara = document.createElement("p");
    canvasPara.id = "canvasPara";
    canvasPara.classList.add("canvasPara");
    canvasPara.align = "center";
    const canvasElem = document.createElement("canvas");
    canvasElem.id = "mycanvas";
    canvasPara.appendChild(canvasElem);
    document.body.appendChild(canvasPara);
}
function main() {
    addBannerAndCanvas();
}
main();
/**
* Clears out the existing canvas and renders a new one with the
* given size, rows, and cols. Useful for testing.
*/
function rerender(size, row, col, state) {
    window.document.getElementById("bannerPara").remove();
    window.document.getElementById("canvasPara").remove();
    addBannerAndCanvas();
    let htmlCanvas = document.getElementById('mycanvas');
    let fabricCanvas = new fabric_1.fabric.Canvas('mycanvas');
    graphics_2.render(size, row, col, state, htmlCanvas, fabricCanvas);
}
exports.rerender = rerender;
// Connecting to the server (from Lib docs)
var host = window.document.location.host.replace(/:.*/, '');
var client = new Colyseus.Client(location.protocol.replace("http", "ws")
    + "//" + host + (location.port ? ':' + location.port : ''));
client.joinOrCreate("fish").then((room) => {
    room.onStateChange((newState) => {
        console.log("New state:");
        console.log(JSON.stringify(newState.toJSON()));
        rerender(graphics_1.DEFAULT_SIZE, graphics_1.DEFAULT_BOARD_ROWS, graphics_1.DEFAULT_BOARD_COLS, schema_to_cstate_1.schemaToCompact(newState));
    });
});
//  ---- 
