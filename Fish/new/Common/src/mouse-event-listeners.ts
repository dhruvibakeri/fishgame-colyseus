import { ICE_TILE_COLOR, MOUSE_OVER_COLOR } from "./graphics";

function eventListeners(fabricCanvas) {
  // highlights tile when mouse hovers over it
  fabricCanvas.on('mouse:over', function (e) {
    if (e !== null && e.target !== null && e !== undefined && e.target !== undefined) {
      e.target.set('fill', MOUSE_OVER_COLOR);
      fabricCanvas.renderAll();
    }
  });

  // changes tile back to original color once mouse
  // is out of bounds
  fabricCanvas.on('mouse:out', function (e) {
    if (e !== null && e.target !== null && e !== undefined && e.target !== undefined) {
      e.target.set('fill', ICE_TILE_COLOR);
      fabricCanvas.renderAll();
    }
  });
}
