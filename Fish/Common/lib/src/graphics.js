"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.genImageConfig = exports.genHexConfig = exports.DEFAULT_BOARD_COLS = exports.DEFAULT_BOARD_ROWS = exports.DEFAULT_SIZE = exports.CANVAS_BACKGROUND_COLOR = exports.CANVAS_SELECTION_COLOR = exports.ICE_TILE_BORDER = exports.ICE_TILE_COLOR = exports.MOUSE_PATH_COLOR = exports.MOUSE_OVER_COLOR = void 0;
const cstate_1 = require("./cstate");
const render_board_1 = require("./render-board");
// ------------------------------------------------ Graphical Constants -----------------------------------------------
exports.MOUSE_OVER_COLOR = 'rgb(255, 165, 0, 0.3)';
exports.MOUSE_PATH_COLOR = 'rgb(255, 165, 0, 0.6)';
exports.ICE_TILE_COLOR = 'rgb(255, 165, 0, 1)';
exports.ICE_TILE_BORDER = 'rgba(255, 255, 255, 1.00)';
exports.CANVAS_SELECTION_COLOR = 'rgba(190, 211, 229, 0.40)';
exports.CANVAS_BACKGROUND_COLOR = 'rgb(190, 190, 190)';
exports.DEFAULT_SIZE = 45;
exports.DEFAULT_BOARD_ROWS = 5;
exports.DEFAULT_BOARD_COLS = 6;
// - - - - - - - - - - Configurations for canvas objects - - - - - - - - - -
/**
 * A configuration object for fabric.Polygon that specifies
 * rendering properties like border, stroke, hover properties etc.
 */
function genHexConfig(boardP, fill, isEvented) {
    return {
        boardPosn: boardP,
        fill: fill,
        hasControls: false,
        evented: isEvented,
        lockMovementY: true,
        lockMovementX: true,
        selectable: false,
        hasBorders: false,
        stroke: exports.ICE_TILE_BORDER,
        strokeWidth: 1,
        hoverCursor: 'pointer',
        perPixelTargetFind: true
    };
}
exports.genHexConfig = genHexConfig;
/**
 * The configuration object for the fabric.Image.
 * A configuration object that makes the image unselectable, unmovable,
 * changes the cursor to pointer, and provides the coordinates for its position.
 */
function genImageConfig(imageX, imageY) {
    return {
        left: imageX,
        top: imageY,
        lockMovementY: true,
        lockMovementX: true,
        selectable: false,
        hoverCursor: 'pointer',
    };
}
exports.genImageConfig = genImageConfig;
/**
 * Sets the selection color and background color of the fabric canvas.
 * EFFECT: changes the fabric.canvas properties.
 * @returns void
 */
function setCanvasConfig(fabricCanvas) {
    fabricCanvas.selectionColor = exports.CANVAS_SELECTION_COLOR;
    fabricCanvas.backgroundColor = exports.CANVAS_BACKGROUND_COLOR;
}
// - - - - - - - - - - Rendering the Board - - - - - - - - - - 
/**
 * Renders the board by setting the canvas configurations, the background dimensions and by
 * generating the Board itself.
 * @param {Natural} size The width of the hexagon is 3 * size and the height of the hexagon is 2 * size.
 * @param {Natural > 1} rows The number of rows of the hexagonal grid i.e. the Board.
 * @param {Natural > 0} cols The number of columns of the hexagonal grid i.e. the Board.
 */
function render(size, rows, cols, state, htmlCanvas, fabricCanvas) {
    setCanvasConfig(fabricCanvas);
    const [canvasWidth, canvasHeight] = [...backgDimFromBoardDim(rows, cols, size)];
    setCanvasDimension(canvasWidth, canvasHeight, htmlCanvas, fabricCanvas);
    render_board_1.renderBoard(size, cstate_1.GET__CBoardFromCState(state), fabricCanvas);
}
exports.render = render;
// - - - - - - - - - - Setting Canvas Dimensions - - - - - - - - - - 
/**
 * EFFECT: Sets the width and the height of the HTML and Fabric Canvases.
 * @param {PositiveNumber} width The width of the canvas to set.
 * @param {PositiveNumber} height The height of the canvas to set.
 */
function setCanvasDimension(width, height, htmlCanvas, fabricCanvas) {
    htmlCanvas.width = width;
    htmlCanvas.height = height;
    fabricCanvas.setDimensions({ width: width, height: height });
}
/**
* Converts a row by column dimension of a board to a height by width
* dimension of the canvas.
* @param {Natural > 1} boardRows
* @param {Natural > 0} boardCols
* @param {PositiveInteger} hexSize
* @returns {CanvasDimension} The height and width of the canvas in pixels.
*/
function backgDimFromBoardDim(boardRows, boardCols, hexSize) {
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
    ];
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// -> void
// Switch the full screen on/off. A "nice to have" feature :)
// EFFECT: changes state to fullscreen or back
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
