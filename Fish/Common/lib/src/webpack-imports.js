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
exports.createDiv = void 0;
const lodash_1 = __importDefault(require("lodash"));
const importData_1 = __importStar(require("./importData"));
function createDiv() {
    const d = document.createElement('div');
    const divElement = document.body.appendChild(d);
    ;
    addIcon(addButton(addString(divElement)));
    importData_1.logData(true);
}
exports.createDiv = createDiv;
function addString(divElement) {
    // Lodash `import`ed 
    divElement.innerHTML = lodash_1.default.join(['Hello,', 'world!'], ' ');
    // Add styling
    divElement.classList.add('hello');
    return divElement;
}
function addButton(divElement) {
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = importData_1.currentTime;
    divElement.appendChild(btn);
    return divElement;
}
function addIcon(divElement) {
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = importData_1.default.icon;
    divElement.appendChild(myIcon);
    return divElement;
}
