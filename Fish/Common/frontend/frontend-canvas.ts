import './styles/style.css';
import ImportedData from './importData'
import { fabric } from "fabric";
import { render } from "../graphics/render-frontend"
import { CState } from '../states/compact-state/compact-state-data-definition';



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
