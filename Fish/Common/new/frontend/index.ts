import _ from 'lodash';
import './style.css';

import Icon, { logData } from './importData'
import { currentTime } from './importData.js';


function main() {
  document.body.appendChild(createDiv(false));
}

main();

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
  myIcon.src = Icon;
  divElement.appendChild(myIcon);
  return divElement;
}