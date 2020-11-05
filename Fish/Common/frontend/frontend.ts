import './styles/style.css';
import ImportedData from './importData'
import { fabric } from "fabric";
import { DEFAULT_BOARD_COLS, DEFAULT_BOARD_ROWS, DEFAULT_SIZE } from "../graphics/render-frontend"
import { render } from "../graphics/render-frontend"
import * as Colyseus from "colyseus.js";
import { CState } from '../states/compact-state/compact-state-data-definition';
import { schemaToCompact } from '../states/state-to-state-translators/schema-state-to-compact-state';


const BANNER_WIDTH = 600;
const BANNER_HEIGHT = 185;

function addBannerAndCanvas() {

  // <p class="banner">
  //   <img src="assets/banner.jpg"
  //        width="600px">
  // </p>
  const bannerPara: HTMLParagraphElement = document.createElement("p");
  bannerPara.id = "bannerPara"
  const banner: HTMLImageElement = new Image(BANNER_WIDTH, BANNER_HEIGHT);
  banner.src = ImportedData.banner;
  bannerPara.appendChild(banner);
  bannerPara.classList.add("banner");
  document.body.appendChild(bannerPara);

  // <p align="center">
  //  <canvas id="canvas">
  //  </canvas>
  // </p>
  let canvasPara: HTMLParagraphElement = document.createElement("p");
  canvasPara.id = "canvasPara"
  canvasPara.classList.add("canvasPara")
  canvasPara.align = "center";
  const canvasElem: HTMLCanvasElement = document.createElement("canvas");
  canvasElem.id = "mycanvas";
  canvasPara.appendChild(canvasElem);
  document.body.appendChild(canvasPara)
}


function main() {
  addBannerAndCanvas();
}

main();

/**
* Clears out the existing canvas and renders a new one with the
* given size, rows, and cols. Useful for testing.
*/
export function rerender(size: number, row: number, col: number, state: CState) {
  window.document.getElementById("bannerPara")!.remove()
  window.document.getElementById("canvasPara")!.remove()
  addBannerAndCanvas();
  let htmlCanvas = <HTMLCanvasElement>document.getElementById('mycanvas')
  let fabricCanvas = new fabric.Canvas('mycanvas');
  render(size, row, col, state, htmlCanvas, fabricCanvas)
}







// WILL REFACTOR this into PLAYER in the future.



// Connecting to the server(from Lib docs)
var host = window.document.location.host.replace(/:.*/, '');
var client = new Colyseus.Client(location.protocol.replace("http", "ws")
  + "//" + host + (location.port ? ':' + location.port : ''));

client.joinOrCreate("fish").then((room: Colyseus.Room) => {
  room.onStateChange((newState) => {
    console.log("New state:");
    console.log(JSON.stringify(newState.toJSON()))
     rerender(DEFAULT_SIZE, DEFAULT_BOARD_ROWS, DEFAULT_BOARD_COLS, schemaToCompact(newState))
  });
});

