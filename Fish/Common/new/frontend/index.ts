import _ from 'lodash';
import './style.css';

import ImportedData, { logData } from './importData'
import { currentTime } from './importData.js';
import { fabric } from "fabric";

const BANNER_WIDTH = 600;
const BANNER_HEIGHT = 185;

function main() {
  document.body.appendChild(createDiv(false));
  addBannerAndCanvas();
}

main();

function addBannerAndCanvas() {

  // <br>
  // <p class="banner">
  //   <img src="assets/banner.jpg"
  //        width="600px">
  // </p>
  // <br>
  const bannerPara: HTMLParagraphElement = document.createElement("p");
  const banner: HTMLImageElement = new Image(BANNER_WIDTH, BANNER_HEIGHT);
  banner.src = ImportedData.banner;
  bannerPara.appendChild(banner);
  bannerPara.classList.add("banner");
  document.body.appendChild(document.createElement("br"));
  document.body.appendChild(bannerPara);
  document.body.appendChild(document.createElement("br"));

  // <p align="center">
  //  <canvas id="canvas">
  //  </canvas>
  // </p>
  let canvasPara: HTMLParagraphElement = document.createElement("p");
  canvasPara.classList.add("canvasPara")
  canvasPara.align = "center";
  const canvasElem: HTMLCanvasElement = document.createElement("canvas");
  canvasElem.id = "canvas";
  canvasPara.appendChild(canvasElem);
  document.body.appendChild(canvasPara)
}

function createDiv(fancy): HTMLDivElement {
  if (fancy) {
    const divElement: HTMLDivElement = document.createElement('div');
    addIcon(addButton(addString(divElement)))
    logData(true)
    return divElement
  } else {
    return document.createElement('div');
  }
}

function addString(divElement: HTMLDivElement): HTMLDivElement {
  // Lodash `import`ed 
  divElement.innerHTML = _.join(['Hello,', 'world!'], ' ');
  // Add styling
  divElement.classList.add('hello');

  return divElement;
}

function addButton(divElement: HTMLDivElement): HTMLDivElement {
  const btn: HTMLButtonElement = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = currentTime;
  divElement.appendChild(btn);
  return divElement;
}

function addIcon(divElement: HTMLDivElement): HTMLDivElement {
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = ImportedData.icon;
  divElement.appendChild(myIcon);
  return divElement;
}