const MOUSE_OVER_COLOR = 'rgb(255, 165, 0, 0.3)' // 'rgba(220, 231, 245, 0.65)'
const MOUSE_PATH_COLOR = 'rgb(255, 165, 0, 0.6)'
const ICE_TILE_COLOR = 'rgb(255, 165, 0, 1)' // 'rgba(220, 231, 245, 0.95)'
const ICE_TILE_BORDER = 'rgba(255, 255, 255, 1.00)'
const CANVAS_SELECTION_COLOR = 'rgba(190, 211, 229, 0.40)'
const CANVAS_BACKGROUND_COLOR = 'rgb(190, 190, 190)' // 'rgba(30, 137, 201, 0.50)'

const INNER_CANVAS = document.getElementById('canvas')

// A Board is Tile[][]
// interpretation. The game board.

// A Tile is one of:
// - 0
// - PositiveInteger
// - PenguinColor
// interpretation. positive integer is the number of fishes,
// penguin color represents a penguin. 0 is a lack of tile/hole, 
// -1 is a hole. 

// PosInt is 1 | 1 + PosInt
// interpretation. A positive integer. 


// - - - 
// 1. creating a board that has holes in specific places and is set up with a minimum number of 1-fish tiles;
///  Q. Should we randomly add `x` amount of fishes to the board? Should `x` be in [1 - 5]?
// 2. creating a board that has the same number of fish on every tile and has no holes;
//   Q. solved by dimensionToBoard
// 3. determining the positions reachable via straight lines from a given position;
//   Q. TODO: we have the code, need to add TESTS. 
// 4. removing a tile from a board; and
// done
// 5. rendering a tile graphically.
//  DONE (initially in GUI now implemented in Fabric)
// 6. If your programming language supports pictures as values—like say BSL and ISL in F I—-your method or
//    function may return such a picture. Otherwise it consumes a window and adds it to a window.
//   A note for testing.
//    Test the "canvas object" before and after adding a "hex" object.
// - - - 


let BOARD;



// -> void
function setCanvasConfig() {
    canvas.selectionColor = CANVAS_SELECTION_COLOR;
    canvas.backgroundColor = CANVAS_BACKGROUND_COLOR;
}

let canvas = new fabric.Canvas('canvas');
setCanvasConfig();

function rerender(size, rows, cols) {
    dimensionToBoard(row, cols)
    canvas.clear();
    setCanvasConfig();
    render(size, rows, cols)
}

function render(size, rows, cols) {
    let backgDim = backgDimensions(rows, cols, size);
    setCanvasDimension(backgDim[0], backgDim[1]);
    allHexes(size, rows, cols);
}

render(75, 4, 3)

// set the width and height of the the canvas element to 
// `width` and `height`. Assumption: the canvas element 
// should have its id set to "canvas"
function setCanvasHTMLElemDimensions(width, height) {
    setHTMLElemDimensions(INNER_CANVAS, width, height)
}

// HTMLElement, Number, Number -> void
// Side Efect: Sets the size of the html element c to w and h
function setHTMLElemDimensions(htmlElem, width, height) {
    htmlElem.width = width;
    htmlElem.height = height;
}

// switch the full screen on/off. a "nice to have" feature
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Number Number -> Void
// // sets the html element `width` and `height` attributes
// // sets the fabric canvas dimensions.
function setCanvasDimension(w, h) {
    setCanvasHTMLElemDimensions(w, h);
    canvas.setDimensions({ width: w, height: h })
}


// Number, Number, Number -> [Number, Number]
// height and width of the background
// row:
// each column (2 tiles) has the width 5. but every
// subsequent column shares `size` worth of width on
// either side. So the subtraction accounts for that.
// col:
// the tiles that are on the right are not relevant
// but each tile has height 2 * size. The last tile
// (on the right) adds half its height i.e. size amount
// of height
function backgDimensions(rows, cols, size) {
    return [((5 * size) * cols) - ((cols - 1) * size), (rows + 1) * size]
}

// Number, Number, Number -> [{x: Number, y: Number}[], [Number, Number]]
function makeHex(size, xOffset, yOffset, boardP) {
    const corners = [
        { x: 0 + xOffset, y: size + yOffset },
        { x: size + xOffset, y: 0 + yOffset },
        { x: 2 * size + xOffset, y: 0 + yOffset },
        { x: 3 * size + xOffset, y: size + yOffset },
        { x: 2 * size + xOffset, y: 2 * size + yOffset },
        { x: size + xOffset, y: 2 * size + yOffset }
    ]
    return [corners, boardP]
}

// PosInt PosInt -> Board
// generates a board with 1 fish on each tile.
// ASSUMPTION: row > 1
function dimensionToBoard(boardHeight, boardWidth) {
    let actualRows = boardHeight % 2 === 0 ? boardHeight / 2 : (boardHeight + 1) / 2;
    let actualCols = boardWidth * 2
    let board = new Array(actualRows);
    for (let row = 0; row < actualRows; ++row) {
        let thisRow = new Array(actualCols);
        for (let col = 0; col < actualCols; ++col) {
            // 
            if (
                boardHeight % 2 === 1 && // Only the boards with odd height have holes in the last row
                row === actualRows - 1 && // Tells if the row is the last one
                col % 2 === 1 // The holes only occur on the odd-th column on the last row
            ) {
                thisRow[col] = 0;
            } else {
                thisRow[col] = 1;
            }
        }
        board[row] = thisRow
    }
    return board;
}


// Number Number -> [{x: Number, y: Number}[], [Number, Number]][]
function boardPosns(size, board) {
    let hexes = []
    for (let row = 0; row < board.length; ++row) {
        let fst = row * 2
        let snd = fst + 1;
        for (let col = 0; col < board[row].length; ++col) {
            let boardP = [col, row];
            let xOffset = (size * 2) * col
            if (col % 2 === 0) {
                let yOffset = size * fst
                hexes.push(makeHex(size, xOffset, yOffset, boardP))
            } else {
                if (board[row][col] === 1) {
                    let yOffset = size * snd
                    hexes.push(makeHex(size, xOffset, yOffset, boardP))
                }
            }
        }
    }
    return hexes;
}



// Number Number Number -> void
function allHexes(size, rows, cols) {
    let board = dimensionToBoard(rows, cols)
    BOARD = board;
    let hexes = boardPosns(size, board)

    hexes.forEach(hex => {
        canvas.add(new fabric.Polygon(hex[0], genHexConfig(hex[1])));
    });
}

// [Number, Number] -> { ... }
function genHexConfig(boardP) {
    return {
        boardPosn: boardP,
        fill: ICE_TILE_COLOR,
        hasControls: false,
        evented: true,
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




// Event Listeners

canvas.on('mouse:over', function(e) {
    if (e.target !== null) {
        e.target.set('fill', MOUSE_OVER_COLOR);
        canvas.renderAll();
    }
});

canvas.on('mouse:out', function(e) {
    if (e.target !== null) {
        e.target.set('fill', ICE_TILE_COLOR);
        canvas.renderAll();
    }
});


// - - - - - - - - - - - - -

// Board BoardPosn[] -> Board
// add holes in board according to holes
function addHoles(board, holes) {
    for (let i = 0; i < holes.length; i++) {
        let [col, row] = [holes[i][0], holes[i][1]]
        board[row][col] = -1;
    }
    return board;
}

// Board BoardPosn -> BoardPosn[]
function getReachable(board, boardPosn) {
    let paths = getPaths(board, boardPosn)
    return [
        ...paths.n,
        ...paths.s,
        ...paths.nw,
        ...paths.ne,
        ...paths.sw,
        ...paths.se
    ]
}

// Board BoardPosn -> Paths
// TODO: define Paths as a data definition
function getPaths(board, boardPosn) {
    return {
        n: getPathInDirection(board, boardPosn, get_n),
        s: getPathInDirection(board, boardPosn, get_s),
        nw: getPathInDirection(board, boardPosn, get_nw),
        ne: getPathInDirection(board, boardPosn, get_ne),
        sw: getPathInDirection(board, boardPosn, get_sw),
        se: getPathInDirection(board, boardPosn, get_se)
    }
}


// BoardPosn [BoardPosn -> BoardPosn] -> BoardPosn[]
function getPathInDirection(board, boardPosn, getPosnInDirection) {
    let res = []
    let next = getPosnInDirection(boardPosn);
    // TODO: TERMINATION argument
    while (!unreachableTile(board, next)) {
        res.push(next);
        next = getPosnInDirection(next);
    }

    return res;
}


// Board BoardPosn -> Boolean
// TODO: purpose statement
// TODO: remove MAGIC numbers
function unreachableTile(board, boardPosn) {
    let [c, r] = [boardPosn[0], boardPosn[1]]
    const row = board[r]
    return row === undefined ||
        row[c] === -1 ||
        row[c] === 0 ||
        row[c] === undefined;
}



// remove a tile from the board
// ASSUMPTION: boardPosn in a valid tile
function removeTile(board, boardPosn) {
    board[boardPosn] = -1;
    return board;
}



function get_n(boardPosn) {
    let [c, r] = [boardPosn[0], boardPosn[1]]
    return c % 2 === 0 ? [c, r - 1] : [c, r - 1]
}

function get_s(boardPosn) {
    let [c, r] = [boardPosn[0], boardPosn[1]]
    return c % 2 === 0 ? [c, r + 1] : [c, r + 1]
}

function get_nw(boardPosn) {
    let [c, r] = [boardPosn[0], boardPosn[1]]
    return c % 2 === 0 ? [c - 1, r - 1] : [c - 1, r]
}

function get_ne(boardPosn) {
    let [c, r] = [boardPosn[0], boardPosn[1]]
    return c % 2 === 0 ? [c + 1, r + 1] : [c + 1, r]
}

function get_sw(boardPosn) {
    let [c, r] = [boardPosn[0], boardPosn[1]]
    return c % 2 === 0 ? [c - 1, r] : [c - 1, r + 1]
}

function get_se(boardPosn) {
    let [c, r] = [boardPosn[0], boardPosn[1]]
    return c % 2 === 0 ? [c + 1, r] : [c + 1, r + 1]
}

// Functions on board posn

// BoardPosn -> Number
// get the row of a board posn
function getRowBoardPosn(boardPosn) {
    return boardPosn[1];
}

// BoardPosn -> Number
// get the column of a board posn
function getColBoardPosn(boardPosn) {
    return boardPosn[0]
}

// Number Number -> Boolean
// make a board posn from column and row
function makeBoardPosn(col, row) {
    return [col, row];
}

// Utility functions

// Number -> Boolean
// is the number even?
function isEven(n) {
    return n % 2 === 0;
}

// Number -> Boolean
// is the number odd?
function isOdd(n) {
    return n % 2 === 1;
}

// Any, String -> void
// EFFECT: prints to stdout/browser console
// ASSUMPTION: config = "console" | "json" | "table"
// various printing options for debugging
function log(x, config) {
    if (config === "console") {
        console.log(x)
    } else if (config === "json") {
        console.log(JSON.stringify(x))
    } else if (config === "table") {
        console.table(x)
    } else {
        console.log("log spec is not correct.")
        log(x, "json");
    }

}