import "./styles/style.css";
import ImportedData from "./importData";
import { fabric } from "fabric";
import { render } from "../graphics/render-frontend";
import { CState } from "../states/compact-state/compact-state-data-definition";
import { renderChatBox, renderPenguinRoster } from "../graphics/render-state";

const BANNER_WIDTH = 680;
const BANNER_HEIGHT = 210;

function addBannerAndCanvas() {
  // <p class="banner">
  //   <img src="assets/banner.jpg"
  //        width="600px">
  // </p>

  const divInit: HTMLDivElement = document.createElement("div");
  divInit.id = "divInit";

  divInit.classList.add("same-line-elements");

  let canvasRoster: HTMLParagraphElement = document.createElement("p");
  canvasRoster.id = "canvasRoster";
  canvasRoster.align = "center";
  const canvasRosterElem: HTMLCanvasElement = document.createElement("canvas");
  canvasRosterElem.id = "mycanvasRoster";
  canvasRoster.appendChild(canvasRosterElem);
  divInit.appendChild(canvasRoster);

  const bannerPara: HTMLParagraphElement = document.createElement("p");
  bannerPara.id = "bannerPara";
  const banner: HTMLImageElement = new Image(BANNER_WIDTH, BANNER_HEIGHT);
  banner.src = ImportedData.banner;
  bannerPara.appendChild(banner);
  bannerPara.classList.add("banner");
  divInit.appendChild(bannerPara);

  let canvasChat: HTMLParagraphElement = document.createElement("p");
  canvasChat.id = "canvasChat";
  const canvasChatElem: HTMLCanvasElement = document.createElement("canvas");
  canvasChatElem.id = "mycanvasChat";
  canvasChat.appendChild(canvasChatElem);
  divInit.appendChild(canvasChat);

  document.body.appendChild(divInit);

  // <p align="center">
  //  <canvas id="canvas">
  //  </canvas>
  // </p>
  let canvasPara: HTMLParagraphElement = document.createElement("p");
  canvasPara.id = "canvasPara";
  canvasPara.classList.add("canvasPara");
  canvasPara.align = "center";
  const canvasElem: HTMLCanvasElement = document.createElement("canvas");
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
export function rerender(
  size: number,
  row: number,
  col: number,
  state: CState,
  messages?: string[]
) {
  window.document.getElementById("divInit")!.remove();
  window.document.getElementById("canvasPara")!.remove();
  // window.document.getElementById("canvasRoster")!.remove();
  addBannerAndCanvas();
  let htmlCanvas = <HTMLCanvasElement>document.getElementById("mycanvas");
  let fabricCanvas = new fabric.Canvas("mycanvas");
  let htmlRosterCanvas = <HTMLCanvasElement>(
    document.getElementById("mycanvasRoster")
  );
  let fabricRosterCanvas = new fabric.Canvas("mycanvasRoster");
  let htmlChatCanvas = <HTMLCanvasElement>(
    document.getElementById("mycanvasChat")
  );
  let fabricChatCanvas = new fabric.Canvas("mycanvasChat");
  renderPenguinRoster(state[2], htmlRosterCanvas, fabricRosterCanvas);
  renderChatBox(messages, htmlChatCanvas, fabricChatCanvas);
  render(size, row, col, state, htmlCanvas, fabricCanvas);
}
