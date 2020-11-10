import { fabric } from "fabric";
import { CState } from "../states/compact-state/compact-state-data-definition"
import { BoardPosn } from "../utils/other-data-definitions";
import { renderBoard } from "./render-state";
import { GET__CBoardFromCState } from "../states/compact-state/compact-state-selectors";
import { schemaToCompact } from "../states/state-to-state-translators/schema-state-to-compact-state";
import ImportedData from "../frontend/importData";
import * as Colyseus from "colyseus.js";

// ------------------------------------------------ Graphical Constants -----------------------------------------------

export const MOUSE_OVER_COLOR = 'rgb(255, 165, 0, 0.3)'
export const MOUSE_PATH_COLOR = 'rgb(255, 165, 0, 0.6)'
export const ICE_TILE_COLOR = 'rgb(255, 165, 0, 1)'
export const ICE_TILE_BORDER = 'rgba(255, 255, 255, 1.00)'
export const CANVAS_SELECTION_COLOR = 'rgba(190, 211, 229, 0.40)'
export const CANVAS_BACKGROUND_COLOR = 'rgb(190, 190, 190)'

export const DEFAULT_SIZE = 55
export const DEFAULT_BOARD_ROWS = 6;
export const DEFAULT_BOARD_COLS = 5;



// - - - - - - - - - - Configurations for canvas objects - - - - - - - - - -


/**
 * A configuration object for fabric.Polygon that specifies
 * rendering properties like border, stroke, hover properties etc. 
 */
export function genHexConfig(boardP: BoardPosn, fill: string, isEvented: boolean) {
  return {
    boardPosn: boardP,
    fill: fill,
    hasControls: false,
    evented: isEvented,
    lockMovementY: true,
    lockMovementX: true,
    selectable: false,
    hasBorders: false,
    stroke: ICE_TILE_BORDER,
    strokeWidth: 1,
    hoverCursor: 'pointer',
    perPixelTargetFind: true
  }
}

/**
 * The configuration object for the fabric.Image.
 * A configuration object that makes the image unselectable, unmovable,
 * changes the cursor to pointer, and provides the coordinates for its position. 
 */
export function genImageConfig(imageX: number, imageY: number) {
  return {
    left: imageX,
    top: imageY,
    lockMovementY: true,
    lockMovementX: true,
    selectable: false,
    hoverCursor: 'pointer',
  }
}

/**
 * Sets the selection color and background color of the fabric canvas.
 * EFFECT: changes the fabric.canvas properties. 
 * @returns void
 */
function setCanvasConfig(fabricCanvas) {
  fabricCanvas.selectionColor = CANVAS_SELECTION_COLOR;
  fabricCanvas.backgroundColor = CANVAS_BACKGROUND_COLOR;
}


// - - - - - - - - - - Rendering the Board - - - - - - - - - - 


/**
 * Renders the board by setting the canvas configurations, the background dimensions and by 
 * generating the Board itself. 
 * @param {Natural} size The width of the hexagon is 3 * size and the height of the hexagon is 2 * size.
 * @param {Natural > 1} rows The number of rows of the hexagonal grid i.e. the Board. 
 * @param {Natural > 0} cols The number of columns of the hexagonal grid i.e. the Board. 
 */
export function render(
  size: number,
  rows: number,
  cols: number,
  state: CState,
  htmlCanvas,
  fabricCanvas,
) {
  setCanvasConfig(fabricCanvas);
  const [canvasWidth, canvasHeight] = [...backgDimFromBoardDim(rows, cols, size)]
  setCanvasDimension(canvasWidth, canvasHeight, htmlCanvas, fabricCanvas);
  renderBoard(size, GET__CBoardFromCState(state), fabricCanvas);
}



// - - - - - - - - - - Setting Canvas Dimensions - - - - - - - - - - 

/**
 * EFFECT: Sets the width and the height of the HTML and Fabric Canvases. 
 * @param {PositiveNumber} width The width of the canvas to set.
 * @param {PositiveNumber} height The height of the canvas to set.
 */
function setCanvasDimension(width: number, height: number, htmlCanvas, fabricCanvas): void {
  htmlCanvas.width = width;
  htmlCanvas.height = height;
  fabricCanvas.setDimensions({ width: width, height: height })
}

/**
* Converts a row by column dimension of a board to a height by width 
* dimension of the canvas.
* @param {Natural > 1} boardRows 
* @param {Natural > 0} boardCols 
* @param {PositiveInteger} hexSize 
* @returns {CanvasDimension} The height and width of the canvas in pixels.
*/
function backgDimFromBoardDim(boardRows: number, boardCols: number, hexSize: number): [number, number] {
  return [
    // board width
    // -----------
    // Each column (2 tiles) has the width `5 * size`. but 
    // every subsequent column shares `size` worth of width on
    // either side. So the subtraction accounts for doublecounting.
    ((5 * hexSize) * boardCols) - ((boardCols - 1) * hexSize),
    // board height
    // ------------
    // The tiles that are on the right are not relevant for height
    // but each tile has height `2 * size`. BUT the last tile (on
    // the right) adds half its height i.e. `size` amount of height.
    (boardRows + 1) * hexSize
  ]
}





// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// -> void
// Switch the full screen on/off. A "nice to have" feature :)
// EFFECT: changes state to fullscreen or back
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

