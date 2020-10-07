const MOUSE_OVER_COLOR = 'rgb(255, 165, 0, 0.3)' // 'rgba(220, 231, 245, 0.65)'
const MOUSE_PATH_COLOR = 'rgb(255, 165, 0, 0.6)'
const ICE_TILE_COLOR = 'rgb(255, 165, 0, 1)' // 'rgba(220, 231, 245, 0.95)'
const ICE_TILE_BORDER = 'rgba(255, 255, 255, 1.00)'
const CANVAS_SELECTION_COLOR = 'rgba(190, 211, 229, 0.40)'
const CANVAS_BACKGROUND_COLOR = 'rgb(190, 190, 190)' // 'rgba(30, 137, 201, 0.50)'

// html canvas element
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
// 5. rendering the tiles graphically.
//  DONE (initially in GUI now implemented in Fabric)
// 6. If your programming language supports pictures as values—like say BSL and ISL in F I—-your method or
//    function may return such a picture. Otherwise it consumes a window and adds it to a window.
//   A note for testing.
//    Test the "canvas object" before and after adding a "hex" object.
// - - - 


//hexagonal tiles board
let BOARD;

//----------------------- SETTING UP CANVAS AND BACKGROUND -------------------------------------------------------

// creating a fabric canvas with id 'canvas'
let canvas = new fabric.Canvas('canvas');

// -> void
//sets the canvas object color configuration
function setCanvasConfig() {
    canvas.selectionColor = CANVAS_SELECTION_COLOR;
    canvas.backgroundColor = CANVAS_BACKGROUND_COLOR;
}

setCanvasConfig();

// ----------------------------------- RENDERING THE BOARD -----------------------------------------------------

render(55, 4, 3)

// renders the hexagonal board
function render(size, rows, cols) {
    let backgDim = backgDimensions(rows, cols, size);
    setCanvasDimension(backgDim[0], backgDim[1]);
    allHexes(size, rows, cols);
}

/*function rerender(size, rows, cols) {
    dimensionToBoard(row, cols)
    canvas.clear();
    setCanvasConfig();
    render(size, rows, cols)
}*/

// ------------------------------------ SETTING UP CANVAS AND BACKGROUND DIMENSIONS ----------------------------------------------

// Number Number -> Void
// // sets the html element `width` and `height` attributes
// // sets the fabric canvas dimensions.
function setCanvasDimension(w, h) {
    setCanvasHTMLElemDimensions(w, h);
    canvas.setDimensions({ width: w, height: h })
}

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
    console.log("size: " + size);
    console.log("rows: " + rows);
    console.log("cols: " + cols);
    console.log([((5 * size) * cols) - ((cols - 1) * size), (rows + 1) * size])

    return [((5 * size) * cols) - ((cols - 1) * size), (rows + 1) * size]
}






// ------------------------- CREATING THE HEXAGON TILES, GENERATING THE BOARD -----------------------------------------------------------



// Number Number Number -> void
function allHexes(size, rows, cols) {
    let board = dimensionToBoard(rows, cols)
    BOARD = board;
    
   let hexes = boardPosns(size, board)

   /* board = noOfFish(board, 1,2,0)
    board = noOfFish(board, 1, 1, 4)
    board = noOfFish(board, 0,2,5)
    board = noOfFish(board, 0,1,5)
    board = makeHole(board, 1,3)
    board[0][0] = 'black'
    board[1][0] = 'red'
    board[0][3] = 'brown'
    board[1][5] = 'white'*/

   board = makeBoardHoles(board, 5, [[0,1], [4,1]])

    console.log("hexes: " + hexes)

    hexes.forEach(hex => {

        boardPosnVal = board[hex[1][1]][hex[1][0]];
        console.log("hex-x: " + hex[1][1], "hex-y: " + hex[1][0])

        console.log("hexval: " + JSON.stringify(boardPosnVal))

       
    
      if(boardPosnVal != -1) {

        canvas.add(new fabric.Polygon(hex[0], genHexConfig(hex[1])));
        

        if(Number.isInteger(boardPosnVal)) {

            let fishPos = 0;
        
            for(let i = 0; i < boardPosnVal; i++) {
            
             addFish(hex[0][0].x + size,hex[0][0].y - fishPos, boardPosnVal);

            fishPos += 10;
             }
        }

         else {

             addPenguin(hex[0][0].x + size ,hex[0][0].y - size, boardPosnVal)

            }
      }
    
        
    });

}


function makeHole(board, x, y) {
    board[x][y] = -1;
    return board;
}



function noOfFish(board, x, y, n) {
    board[x][y] = n;
    return board;
}



function addFish(x,y, fishCount) {

    if (fishCount > 0) {
    var imgElement = document.getElementById('my-image');
         var imgInstance = new fabric.Image(imgElement, {
            left: x,
             top: y
             
        }); 

        smallImg = imgInstance.scale(0.2);

        canvas.add(smallImg); 
    }
}

function addPenguin(x,y, color) {

    var imgElement = document.getElementById(color);
         var imgInstanceP = new fabric.Image(imgElement, {
            left: x,
             top: y
             
        }); 

        smallImgP = imgInstanceP.scale(0.2);

        canvas.add(smallImgP); 

}


//ASSUMPTIONS: 
// -> Total positions - hposns is >= fishes
// -> fishes is a natural number
function makeBoardHoles(board, fishes, hposns) {
    
    // add holes
    hposns.forEach(hposn => {
        console.log("hpson: " + hposn)
        board[hpson[0]][hpson[1]] = -1;
    })

    // add fishes
    _.take(shuffle([...board].filter(p => p !== 0 && p !== -1)), fishes).forEach(p => {
        board[p[0]][p[1]] = 1;
    })

    return board;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
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
    console.log("boardP: " + boardP)
    return [corners, boardP]
    
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


// ----------------------------------------------- EVENT LISTENERS ------------------------------------------------





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


// ----------------------------------------- BOARD FUNCTIONALITY ---------------------------------------------------

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
        ...paths.north,
        ...paths.south,
        ...paths.northWest,
        ...paths.northEast,
        ...paths.southWest,
        ...paths.southEast
    ]
}


// `Direction` is all possible directions a player may move:
//  "north" | "south" | "northWest" | "northEast" | "southWest" | "southEast"
// 
// Paths specifies longest paths in all `Direction`s as an object 
// with `Direction`s as the keys and `BoardPosn`s as the values. 

// Board BoardPosn -> Paths
// gets a `Path` object from `booardPosn` in `baord`.
function getPaths(board, boardPosn) {
    return {
        "north": getPathInDirection(board, boardPosn, getNeighborNorth),
        "south": getPathInDirection(board, boardPosn, getNeighborSouth),
        "northWest": getPathInDirection(board, boardPosn, getNeighborNorthWest),
        "northEast": getPathInDirection(board, boardPosn, getNeighborNorthEast),
        "southWest": getPathInDirection(board, boardPosn, getNeighborSouthWest),
        "southEast": getPathInDirection(board, boardPosn, getNeighborSouthEast)
    }
}


// BoardPosn [BoardPosn -> BoardPosn] -> BoardPosn[]
// longest path in a direction that getNeighborInDirection
// generates the neighbors for.
function getPathInDirection(board, boardPosn, getNeighborInDirection) {
    let res = []
    let next = getNeighborInDirection(boardPosn);

    // TERMINATION ARGUMENT: 
    // getNeighborInDirection: BoardPosn -> BoardPosn 
    // will eventiall hit the edge of the board or
    // water (which are unreachable).
    while (!isNeighborUnreachable(board, next)) {
        res.push(next);
        next = getNeighborInDirection(next);
    }

    return res;
}



// Board BoardPosn -> Boolean
// TODO: purpose statement
// TODO: remove MAGIC numbers
function isNeighborUnreachable(board, boardPosn) {
    let [c, r] = [getColBoardPosn(boardPosn), getRowBoardPosn(boardPosn)]
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

// BoardPosn -> BoardPosn
// get the neighbor in the North direction
function getNeighborNorth(boardPosn) {
    let [column, row] = [getColBoardPosn(boardPosn), getRowBoardPosn(boardPosn)]
    return isEven(column) ? [column, row - 1] : [column, row - 1]
}
// BoardPosn -> BoardPosn
// get the neighbor in the South direction
function getNeighborSouth(boardPosn) {
    let [column, row] = [getColBoardPosn(boardPosn), getRowBoardPosn(boardPosn)]
    return isEven(column) ? [column, row + 1] : [column, row + 1]
}
// BoardPosn -> BoardPosn
// get the neighbor in the NorthWest direction
function getNeighborNorthWest(boardPosn) {
    let [column, row] = [getColBoardPosn(boardPosn), getRowBoardPosn(boardPosn)]
    return isEven(column) ? [column - 1, row - 1] : [column - 1, row]
}
// BoardPosn -> BoardPosn
// get the neighbor in the NorthEast direction
function getNeighborNorthEast(boardPosn) {
    let [column, row] = [getColBoardPosn(boardPosn), getRowBoardPosn(boardPosn)]
    return isEven(column) ? [column + 1, row + 1] : [column + 1, row]
}
// BoardPosn -> BoardPosn
// get the neighbor in the SouthWest direction
function getNeighborSouthWest(boardPosn) {
    let [column, row] = [getColBoardPosn(boardPosn), getRowBoardPosn(boardPosn)]
    return isEven(column) ? [column - 1, row] : [column - 1, row + 1]
}
// BoardPosn -> BoardPosn
// get the neighbor in the SouthEast direction
function getNeighborSouthEast(boardPosn) {
    let [column, row] = [getColBoardPosn(boardPosn), getRowBoardPosn(boardPosn)]
    return isEven(column) ? [column + 1, row] : [column + 1, row + 1]
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
