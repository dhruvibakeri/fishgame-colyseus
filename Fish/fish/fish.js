function add3(z) {
    return z + 3;
}




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
const BLANK_TILE = 0;
const HOLE = -1;

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

function rerender(size, rows, cols) {
    dimensionToBoard(rows, cols)
    canvas.clear();
    setCanvasConfig();
    render(size, rows, cols)
}

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
// each column (2 tiles) has the width 5 'size'. but every
// subsequent column shares `size` worth of width on
// either side. So the subtraction accounts for that.

// col:
// the tiles that are on the right are not relevant
// but each tile has height 2 * size. The last tile
// (on the right) adds half its height i.e. size amount
// of height

//ASSUMPTION: 
// - rows is > 0
// - size is > -1

function backgDimensions(rows, cols, size) {

    return [((5 * size) * cols) - ((cols - 1) * size), (rows + 1) * size]
}


// ------------------------- CREATING THE HEXAGON TILES, GENERATING THE BOARD -----------------------------------------------------------



// Number Number Number -> void
// places all hexes on the canvas 
// according to their specs
function allHexes(size, rows, cols) {
    let board = dimensionToBoard(rows, cols)
    BOARD = board;

    //  gets the board specifications
    //  ex: min no. if 1-fish tiles
    //  creates a hole where specified
    //  places player on tile
    let hexes = getBoardSpecs(size, board)

    // goes through each hex is hexes and
    // adds relevent graphics for that hex tile
    hexes.forEach(hex => {
        // gets value of hex tile at that positon
        boardPosnVal = board[hex[1][1]][hex[1][0]];

        // coordinates for the image to be added
        imagePosnX = hex[0][0].x;
        imagePosnY = hex[0][0].y;

        // checks whether cur hex is a hole 
        if (isNotHole(boardPosnVal)) {
            // adds hex to canvas
            canvas.add(new fabric.Polygon(hex[0], genHexConfig(hex[1])));

            // checks whether given tile is not occupied by a penguin
            if (isNotPenguin(boardPosnVal)) {
                let fishPos = 0;
                // adds fish on the cur hex
                for (let i = 0; i < boardPosnVal; i++) {
                    addIcon(imagePosnX + size, imagePosnY - fishPos, 'fish-image');
                    fishPos += 10;
                }
            } else {
                // if not fish or hole,  add player penguin
                addIcon(imagePosnX + size, imagePosnY - size, boardPosnVal)
            }
        }
    });
}

// checks if given value does not represent a penguin
// ASSUMPTION: penguin values are always one of:
// - 'red' , 'brown', 'black', 'white'
function isNotPenguin(x) {
    return Number.isInteger(x);
}

// checks if given value does not represents a hole
function isNotHole(x) {
    return x != HOLE;
}


// configures board specifications
function getBoardSpecs(size, board) {

    let hexes = boardPosns(size, board)

    board = noOfFish(board, 1, 2, 5)
    board = noOfFish(board, 1, 1, 4)
    board = noOfFish(board, 0, 2, 5)
    board = noOfFish(board, 0, 1, 5)
    board = makeHole(board, 1, 3)
    board = placePenguin(board, 0, 0, 'black')
    board = placePenguin(board, 1, 0, 'red')
    board = placePenguin(board, 0, 3, 'brown')
    board = placePenguin(board, 1, 5, 'white')
    board = addBoardHolesMinFish(board, 3, [
        [1, 1],
        [1, 4]
    ])

    return hexes;

}


// creates a hole in the board (no tile)
function makeHole(board, row, col) {
    if (board[row][col] != BLANK_TILE) {
        board[row][col] = HOLE;
    }
    return board;
}

// places n amount of fish on board[x][y]
function noOfFish(board, row, col, n) {

    val = board[row][col]

    if (isChangeableState(val) || val == 1) {
        board[row][col] = n;
    }
    return board;
}

// places penguin of given color on board[x][y]
function placePenguin(board, row, col, color) {

    val = board[row][col]

    if ((val != BLANK_TILE) && (val != HOLE)) {

        board[row][col] = color;
    }
    return board;
}


// retreives fish/penguin image from index.html
// according to the id specified then
// adds it onto the canvas at the given 
// coordinates
function addIcon(imageX, imageY, image_id) {

    var imgElement = document.getElementById(image_id);
    var imgInstanceP = new fabric.Image(imgElement, {
        left: imageX,
        top: imageY
    });

    smallImgP = imgInstanceP.scale(0.2);
    canvas.add(smallImgP);

}


//ASSUMPTIONS: 
// -> Total positions - hposns is >= fishes
// -> fishes is a natural number
// creates holes in board at given positions
// and adds specified min-number of 1-fish tiles
function addBoardHolesMinFish(board, fishes, hposns) {

    // changes value of tile to represent a hole
    for (let i = 0; i < hposns.length; i++) {

        brow = hposns[i][0]
        bcol = hposns[i][1]

        makeHole(board, brow, bcol)
    }

    // add 1-fish tiles only if board
    // does not meet min requirement
    if (!hasMinFish(board, fishes)) {

        // gets list of changeable points
        changeablePoints = getChangablePoints(board)

        // shuffles array containing changeable points
        const shuffled = [...changeablePoints].sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled to meet requirements
        // of min 1-fish tiles
        let selected = shuffled.slice(0, fishes - countOneFishTiles(board));

        for (let i = 0; i < selected.length; i++) {

            srow = selected[i][0]
            scol = selected[i][1]

            board[srow][scol] = 1;
        }
    }

    return board;
}

// checks whether board has min no of 1-fish tiles
function hasMinFish(board, fishes) {
    return countOneFishTiles(board) >= fishes;
}

// counts the number of 1-fish tiles
function countOneFishTiles(board) {
    fcount = 0;

    for (let i = 0; i < board.length; i++) {
        fcount += board[i].filter(p => p == 1).length;
    }

    return fcount;
}

// retrieves board positions of all changeable tiles
function getChangablePoints(array) {

    res = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (isChangeableState(array[i][j])) {
                res.push([i, j])
            }
        }
    }

    return res;

}


// checks whether given value represents
// a changeable tile
// a changeable tile is one of:
// - penguin color 
// - Positive integer > 1
// (we do not have to change 1)
function isChangeableState(p) {
    return (Number.isInteger(p) && p > 1);
}


// PosInt PosInt -> Board
// generates a board with 1 fish on each tile.
// ASSUMPTION: row > 1
// even rows:
/*
    1   1   1          1  1  1  1  1  1  
      1   1   1    =>  1  1  1  1  1  1 
    1   1   1   
      1   1   1  
*/
// odd rows:
/*
    1   1   1          1  1  1  1  1  1  
      1   1   1    =>  1  0  1  0  1  0 
    1   1   1      
*/

function dimensionToBoard(boardHeight, boardWidth) {
    // gets actual row count
    let actualRows = boardHeight % 2 === 0 ? boardHeight / 2 : (boardHeight + 1) / 2;
    // gets actual col count
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
                thisRow[col] = BLANK_TILE;
            } else {
                thisRow[col] = 1;
            }
        }
        board[row] = thisRow
    }
    return board;
}


// Number Number -> [{x: Number, y: Number}[], [Number, Number]][]
// retreives all hex tile formations for the board
// each formation consists of the tile's co-ordinates
// on the fabric canvas and its board position.
function boardPosns(size, board) {
    let hexes = []

    for (let row = 0; row < board.length; ++row) {
        let fst = row * 2
        let snd = fst + 1;
        for (let col = 0; col < board[row].length; ++col) {
            // col comes first since col represents the 
            // x-coordinate on the fabric canvas
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
// creates a hexagon of desired size
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


// [Number, Number] -> { ... }
// configures the hexagon
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

// highlights tile when mouse hovers over it
canvas.on('mouse:over', function(e) {
    if (e.target !== null) {
        e.target.set('fill', MOUSE_OVER_COLOR);
        canvas.renderAll();
    }
});

// changes tile back to original color once mouse
// is out of bounds
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
        board[row][col] = HOLE;
    }
    return board;
}

// Board BoardPosn -> BoardPosn[]
// gets board positions of all valid moves
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
// Checks if a neighbouring tile is not a valid move
function isNeighborUnreachable(board, boardPosn) {
    let [c, r] = [getColBoardPosn(boardPosn), getRowBoardPosn(boardPosn)]
    const row = board[r]
    return row === undefined ||
        row[c] === HOLE ||
        row[c] === BLANK_TILE ||
        row[c] === undefined;
    //!isNotPenguin(row[c]);
}


// remove a tile from the board
// ASSUMPTION: boardPosn in a valid tile
function removeTile(board, boardPosn) {
    board[boardPosn] = HOLE;
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
