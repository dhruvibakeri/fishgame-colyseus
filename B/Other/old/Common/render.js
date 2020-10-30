


// ------------------------------------------------ Graphical Constants -----------------------------------------------

const MOUSE_OVER_COLOR = 'rgb(255, 165, 0, 0.3)'
const MOUSE_PATH_COLOR = 'rgb(255, 165, 0, 0.6)'
const ICE_TILE_COLOR = 'rgb(255, 165, 0, 1)'
const ICE_TILE_BORDER = 'rgba(255, 255, 255, 1.00)'
const CANVAS_SELECTION_COLOR = 'rgba(190, 211, 229, 0.40)'
const CANVAS_BACKGROUND_COLOR = 'rgb(190, 190, 190)'
const DEFAULT_SIZE = 75

// HTML <canvas> element
// We'll just use this once to set the size:
const INNER_CANVAS = document.getElementById('canvas')
// FABRIC canvas object (from Fabric.js library)
// We'll be using this to draw everything:
let canvas = new fabric.Canvas('canvas');

// - - - - - - - - - - Configurations for canvas objects - - - - - - - - - -


/**
 * 
 * @param {{row: PositiveInteger, col: PositiveInteger}} posn The position (row, col) of the 
 * tile within Board that this hexagon is a rendering of. 
 * @returns A configuration object for fabric.Polygon that specifies
 * rendering properties like border, stroke, hover properties etc. 
 */
function genHexConfig(boardP, fill, event) {
    return {
        boardPosn: boardP,
        fill: fill,
        hasControls: false,
        evented: event,
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
 * @param {Number} x The top left point's x coordinate.
 * @param {Number} y The top left point's y coordinate.
 * @returns A configuration object that makes the image unselectable, unmovable,
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
    }
}

/**
 * Sets the selection color and background color of the fabric canvas.
 * EFFECT: changes the fabric.canvas properties. 
 * @returns void
 */
function setCanvasConfig() {
    canvas.selectionColor = CANVAS_SELECTION_COLOR;
    canvas.backgroundColor = CANVAS_BACKGROUND_COLOR;
}

//-------------------- Rendering the game state ------------------------------------------------------------------

// rendering
//renderState(makeGameState("playing", dimensionToBoard(4, 3), false, []))

// GameState -> void
// rendering the state graphically

function renderState(gs) {
    setCanvasConfig();
    const dimensions = RectToHex(totalColsInBoard(boardFromGameState(gs)), totalRowsInBoard(boardFromGameState(gs)), boardFromGameState(gs))
    const [dRows, dCols] = [dimensions.row, dimensions.col]
    const [canvasWidth, canvasHeight] = [...backgDimensions(dRows, dCols, DEFAULT_SIZE)]
    setCanvasDimension(canvasWidth, canvasHeight);
    allHexes(boardFromGameState(gs));

}

// converts rect dimensions to hex dimensions
function RectToHex(col, row, board) {
    return { col: col / 2, row: isUnusableSpace(board[board.length - 1][1]) ? (row * 2) - 1 : row * 2 };
}

// - - - - - - - - - - Rendering the Board - - - - - - - - - - 

// rendering>>>
//render(DEFAULT_SIZE, 4, 3);


/**
 * Renders the board by setting the canvas configurations, the background dimensions and by 
 * generating the Board itself. 
 * @param {Natural} size The width of the hexagon is 3 * size and the height of the hexagon is 2 * size.
 * @param {Natural > 1} rows The number of rows of the hexagonal grid i.e. the Board. 
 * @param {Natural > 0} cols The number of columns of the hexagonal grid i.e. the Board. 
 */
function render(size, rows, cols) {
    setCanvasConfig();
    const [canvasWidth, canvasHeight] = [...backgDimensions(rows, cols, size)]
    setCanvasDimension(canvasWidth, canvasHeight);
    allHexes(dimensionToBoard(rows, cols));
}

/**
 * Clears out the existing canvas and renders a new one with the given size, rows, and cols. 
 * @param {Natural} size The width of the hexagon is 3 * size and the height of the hexagon is 2 * size.
 * @param {Natural > 1} rows The number of rows of the hexagonal grid i.e. the Board. 
 * @param {Natural > 0} cols The number of columns of the hexagonal grid i.e. the Board. 
 * @returns void because it just clears and renders the canvas. 
 */
function rerender(size, rows, cols) {
    canvas.clear();
    render(size, rows, cols)
}

// - - - - - - - - - - Setting Canvas Dimensions - - - - - - - - - - 

/**
 * EFFECT: Sets the width and the height of the HTML and Fabric Canvases. 
 * @param {PositiveNumber} width The width of the canvas to set.
 * @param {PositiveNumber} height The height of the canvas to set.
 */
function setCanvasDimension(width, height) {
    INNER_CANVAS.width = width;
    INNER_CANVAS.height = height;
    canvas.setDimensions({ width: width, height: height })
}

/**
 * Converts a row by column dimension of a board to a height by width 
 * dimension of the canvas.
 * @param {Natural > 1} boardRows 
 * @param {Natural > 0} boardCols 
 * @param {PositiveInteger} hexSize 
 * @returns {CanvasDimension} The height and width of the canvas in pixels.
 */
function backgDimensions(boardRows, boardCols, hexSize) {
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


// ----------------------------------------------- EVENT LISTENERS ------------------------------------------------

// Event Listeners

// highlights tile when mouse hovers over it
canvas.on('mouse:over', function (e) {
    if (e.target !== null) {
        e.target.set('fill', MOUSE_OVER_COLOR);
        canvas.renderAll();
    }
});

// changes tile back to original color once mouse
// is out of bounds
canvas.on('mouse:out', function (e) {
    if (e.target !== null) {
        e.target.set('fill', ICE_TILE_COLOR);
        canvas.renderAll();
    }
});


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
