import _ from "lodash";
import ImportedData, { currentTime, logData } from "./importData";

export function createDiv(): void {
  const d: HTMLDivElement = document.createElement('div')
  const divElement: HTMLDivElement = document.body.appendChild(d);;
  addIcon(addButton(addString(divElement)))
  logData(true)
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
