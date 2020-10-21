import { Canvas, Polygon, Image } from 'fabric'
import { Board, boardFromGameState, BoardPosn, GameState, getSpaceFromBoard, isFalse, isFishes, isPenguin, isTile, isUnusableSpace, isUsableSpace, penguinColorFromPenguin, spaceIsOccupiedBy, tileIsOccupiedBy, totalColsInBoard, totalFishesFromFishes, totalRowsInBoard, UsableSpace } from './state'
import { dimensionToBoard } from './board'
import { getBoardSpecs } from './board-specs'

// ------------------------------------------------ Graphical Constants -----------------------------------------------

export const MOUSE_OVER_COLOR = 'rgb(255, 165, 0, 0.3)'
export const MOUSE_PATH_COLOR = 'rgb(255, 165, 0, 0.6)'
export const ICE_TILE_COLOR = 'rgb(255, 165, 0, 1)'
export const ICE_TILE_BORDER = 'rgba(255, 255, 255, 1.00)'
export const CANVAS_SELECTION_COLOR = 'rgba(190, 211, 229, 0.40)'
export const CANVAS_BACKGROUND_COLOR = 'rgb(190, 190, 190)'
export const DEFAULT_SIZE = 75


// HTML <canvas> element
// We'll just use this once to set the size:
const INNER_CANVAS = document.getElementById('canvas')
// FABRIC canvas object (from Fabric.js library)
// We'll be using this to draw everything:
let canvas = new Canvas('canvas');

// - - - - - - - - - - Configurations for canvas objects - - - - - - - - - -


/**
 * 
 * @param {{row: PositiveInteger, col: PositiveInteger}} posn The position (row, col) of the 
 * tile within Board that this hexagon is a rendering of. 
 * @returns A configuration object for fabric.Polygon that specifies
 * rendering properties like border, stroke, hover properties etc. 
 */
export function genHexConfig(boardP, fill, event) {
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

function renderState(gs: GameState): void {
  setCanvasConfig();
  let boardFromGs = boardFromGameState(gs) as Board
  const dimensions = RectToHex(totalColsInBoard(boardFromGs), totalRowsInBoard(boardFromGs), boardFromGameState(gs))
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
  INNER_CANVAS["width"] = width;
  INNER_CANVAS["height"] = height;
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


// Number Number Number -> void
// places all hexes on the canvas 
// according to their specs
function allHexes(board) {

  const size = DEFAULT_SIZE

  // gets all hex configurations
  let hexes = boardPosns(size, board)

  //  gets the board specifications
  //  ex: min no. if 1-fish tiles
  //  creates a hole where specified
  //  places player on tile
  getBoardSpecs(board)

  //console.log("hexes:",hexes)
  //console.log("board:" , board[0][1])

  // goes through each hex in hexes and
  // adds relevent graphics for that hex tile
  hexes.forEach((hex: any) => {
    // gets value of hex tile at that positon
    let boardPosnVal = getSpaceFromBoard(board, [hex[0].row] as any, [hex[0].col] as any);

    // coordinates for the image to be added
    let imagePosnX = hex[1][0].x;
    let imagePosnY = hex[1][0].y;
    let onSpace = spaceIsOccupiedBy(boardPosnVal as UsableSpace)

    // checks whether cur hex is a hole 
    if (isUsableSpace(boardPosnVal)) {
      if (isTile(onSpace)) {
        let fishPosUp = 0;
        let fishPosDown = (size / 5);
        // adds hex to canvas
        canvas.add(new Polygon(hex[1], genHexConfig(hex[1], ICE_TILE_COLOR, true)));


        const tileOnSpace = tileIsOccupiedBy(onSpace)
        // checks whether given tile is not occupied by a penguin
        if (isFishes(onSpace)) {
          let fishPos = 0;
          // adds fish on the cur hex
          for (let i = 0; i < totalFishesFromFishes(onSpace); i++) {
            (i % 2 == 0) ?
              addIcon(imagePosnX + size, imagePosnY + fishPosUp, 'fish-image', size) :
              addIcon(imagePosnX + size, imagePosnY - fishPosDown, 'fish-image', size)

            fishPosUp += (size / 5);
            fishPosDown += (size / 5);
          }
        } else if (isPenguin(onSpace)) {
          // if not fish or hole,  add player penguin
          addIcon(imagePosnX + size, imagePosnY - size, penguinColorFromPenguin(onSpace), size)
        }
      }

      else if (isFalse(onSpace)) {
        canvas.add(new Polygon(hex[1], genHexConfig(hex[1] as any, false, false)));
      }
    }
  });
}

// Number Number -> [{x: Number, y: Number}[], [Number, Number]][]
// retreives all hex tile formations for the board
// each formation consists of the tile's co-ordinates
// on the fabric canvas and its board position.
function boardPosns(size: number, board: Board): BoardPosn[] {
  let hexes = []

  for (let row = 0; row < totalRowsInBoard(board); ++row) {
    let fst = row * 2
    let snd = fst + 1;
    for (let col = 0; col < totalColsInBoard(board); ++col) {
      // col comes first since col represents the 
      // x-coordinate on the fabric canvas
      let xOffset = (size * 2) * col
      if (col % 2 === 0) {
        let yOffset = size * fst
        hexes.push(makeHex(size, xOffset, yOffset, row, col))
      } else {
        if (board[row][col].kind === "usableSpace") {
          let yOffset = size * snd
          hexes.push(makeHex(size, xOffset, yOffset, row, col))
        }
      }
    }
  }
  return hexes;
}

type Hex = [
  { col: number, row: number },
  { x: number, y: number }[]
]

/**
* 6 posns corresponding to the vertices of the given board posn
* with at the (xOffset, yOffset) position at top left corner. 
* @param {Natural} size 
* @param {Natural} xOffset 
* @param {Natural} yOffset 
* @param {Natural} row
* @param {Natural} col
* @returns The pair of 2 things: 
* LHS: The 2d-array Board position.
* RHS: The corresponding Hex's corners in terms of canvas px position.
*/
function makeHex(size: number,
  xOffset: number,
  yOffset: number,
  row: number,
  col: number): Hex {
  return [
    { col: col, row: row }, [
      { x: 0 + xOffset, y: size + yOffset },
      { x: size + xOffset, y: 0 + yOffset },
      { x: 2 * size + xOffset, y: 0 + yOffset },
      { x: 3 * size + xOffset, y: size + yOffset },
      { x: 2 * size + xOffset, y: 2 * size + yOffset },
      { x: size + xOffset, y: 2 * size + yOffset }
    ]]
}

// retreives fish/penguin image from index.html
// according to the id specified then
// adds it onto the canvas at the given 
// coordinates
function addIcon(imageX, imageY, image_id, size) {
  let imgElement = document.getElementById(image_id);
  let imgInstanceP = new Image(imgElement, genImageConfig(imageX, imageY));
  let smallImgP = imgInstanceP.scale(size / 275);
  canvas.add(smallImgP);

}