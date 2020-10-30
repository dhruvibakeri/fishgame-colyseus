"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphics_1 = require("./graphics");
function eventListeners(fabricCanvas) {
    // highlights tile when mouse hovers over it
    fabricCanvas.on('mouse:over', function (e) {
        if (e !== null && e.target !== null && e !== undefined && e.target !== undefined) {
            e.target.set('fill', graphics_1.MOUSE_OVER_COLOR);
            fabricCanvas.renderAll();
        }
    });
    // changes tile back to original color once mouse
    // is out of bounds
    fabricCanvas.on('mouse:out', function (e) {
        if (e !== null && e.target !== null && e !== undefined && e.target !== undefined) {
            e.target.set('fill', graphics_1.ICE_TILE_COLOR);
            fabricCanvas.renderAll();
        }
    });
}
