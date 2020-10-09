// --------------------------------------- Data Definition ------------------------------------------------------------
// 
// GameState = { board: Board, next_move: PlayerColor | false, players: PlayerScores }
// 
// Board is Tile[]
// 
// PlayerScores = [PlayerColor, ℕ][]
// 
// Tile = { kind: "blank_space", tile_info: TileInfo }
//      | { kind: "hole", tile_info: TileInfo }
//      | { kind: "fishes", tile_info: TileInfo, fishes: ℤ+ }
//      | { kind: "player", tile_info: TileInfo, player: PlayerColor }
// 
// TileInfo = { size: ℕ, max_fishes: ℕ and >= 5 }
// 
// PlayerColor = "red" | "brown" | "black" | "white"
//
// --------------------------------------- Interpretation -------------------------------------------------------------
//
// - GameState represents the state of the game, it has the board, whose move it is next and the scores of all players.
//
// - Board is the board representation it is a 2 dimensional array of tiles.
//
// - PlayerScores is an association list of player color and their score which is a Natural number
//
// - Tile is either a blank space (because transforming a hex grid onto a 2d array leaves some blank spaces) or a tile
//        with a certain number of fishes on it or a tile with a player on it or (when the player eats the fish) a hole
//        Note that a tile also keeps track of the its size and number of fishes it can accomodate.
//
// - TileInfo is is the size of the tile and the maximum number of fishes the tile can accomodate.
//
// - PlayerColor is the color of a player and is one of 4 specified colors. 
//
// ------------------------------------------- Templates --------------------------------------------------------------

const PLAYER_COLOR_RED = "red"
const PLAYER_COLOR_BROWN = "brown"
const PLAYER_COLOR_BLACK = "black"
const PLAYER_COLOR_WHITE = "white"

const TILE_KIND_BLANK_SPACE = "blank_space"
const TILE_KIND_HOLE = "hole"
const TILE_KIND_FISHES = "fishes"
const TILE_KIND_PLAYER = "player"




// GameState -> void
function gamestate_template(gamestate) {
    // ...
    board_template(gamestate.board)
    // ...
    if(is_playercolor) {
        // ...
        playercolor_template(gamestate.next_move)
        // ...
    } else {
        // ...
        gamestate.next_move
        // ...
    }
    // ...
    playerscores_template(gamestate.players)
    // ...
}

// Any -> Boolean
// is `anything` a PlayerColor?
function is_playercolor(anything) {
    return (typeof anything === "string")
    &&  (anything === PLAYER_COLOR_RED
         || anything === PLAYER_COLOR_BROWN 
         || anything === PLAYER_COLOR_BLACK 
         || anything === PLAYER_COLOR_WHITE);
}

// Board -> void
function board_template(board) {
    for(let row = 0; row < board.length; ++row) {
        for(let col = 0; k < board[row].length; ++col) {
            const tile = board[row][col]
            // ...
            tile_template(tile);
            // ...
        }
    }
}

// PlayerScores -> void
function playerscores_template(playerscores) {
    for(let i = 0; i < playerscores.length; i++) {
        // ...
        playercolor_template(playerscores[i].playercolor)
        // ...
        playerscores.score
        // ...
    }
}

// Tile -> void
function tile_template(tile) {
    switch (tile.kind) {
        case TILE_KIND_BLANK_SPACE:
            // ...
            tile.kind
            // ...
            tileinfo_template(tile.tile_info)
            // ...
            break;
        case TILE_KIND_HOLE:
            // ...
            tile.kind
            // ...
            tileinfo_template(tile.tile_info)
            // ...
            break;
        case TILE_KIND_FISHES:
            // ...
            tile.kind
            // ...
            tileinfo_template(tile.tile_info)
            // ...
            tile.fishes
            // ...
            break;
        case TILE_KIND_PLAYER:
            // ...
            tile.kind
            // ...
            tileinfo_template(tile.tile_info)
            // ...
            tile.player
            // ...
            break;
        default:
            throw Error("Not a valid tile kind")
    }
}

// TileInfo -> Void
function tileinfo_template(tileinfo) {
    // ...
    tileinfo.size 
    // ...
    tileinfo.max_fishes
    // ...
}

// PlayerColor -> Void
function playercolor_template(playercolor) {
    switch (playercolor) {
        case PLAYER_COLOR_RED:
            // ...
            playercolor
            // ...
            break;
        case PLAYER_COLOR_BROWN:
            // ...
            playercolor
            // ...
            break;
        case PLAYER_COLOR_BLACK:
            // ...
            playercolor
            // ...
            break;
        case PLAYER_COLOR_WHITE:
            // ...
            playercolor
            // ...
            break;
        default:
            throw Error("Not a valid player color")
    }
}

// ------------------------------------------------ Graphical Constants -----------------------------------------------

const MOUSE_OVER_COLOR = 'rgb(255, 165, 0, 0.3)'
const MOUSE_PATH_COLOR = 'rgb(255, 165, 0, 0.6)'
const ICE_TILE_COLOR = 'rgb(255, 165, 0, 1)'
const ICE_TILE_BORDER = 'rgba(255, 255, 255, 1.00)'
const CANVAS_SELECTION_COLOR = 'rgba(190, 211, 229, 0.40)'
const CANVAS_BACKGROUND_COLOR = 'rgb(190, 190, 190)'
const DEFAULT_SIZE = 55

// HTML <canvas> element
// We'll just use this once to set the size:
const INNER_CANVAS = document.getElementById('canvas')
// FABRIC canvas object (from Fabric.js library)
// We'll be using this to draw everything:
let canvas = new fabric.Canvas('canvas');

// --------------------------------------------------------------------------------------------------------------------

// Some internal Data Definitions:
// 
// Posn is [a, b] where `a` and `b` are Numbers
//      but we use "Aliases" for Posns:
// BoardPosn - [col, row] - represents a coordinate of a board
// CanvasPosn - [x, y] - represents a coordinate on canvas
// BoardDimension - [width, height] - represents board dimensions
// CanvasDimension - [width, height] - represents canvas dimensions

// rendering>>>
render(DEFAULT_SIZE, 4, 3);

// - - - - - - - - - - Configurations for canvas objects - - - - - - - - - -


/**
 * 
 * @param {{row: PositiveInteger, col: PositiveInteger}} posn The position (row, col) of the 
 * tile within Board that this hexagon is a rendering of. 
 * @returns A configuration object for fabric.Polygon that specifies
 * rendering properties like border, stroke, hover properties etc. 
 */
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

// - - - - - - - - - - Rendering the Board - - - - - - - - - - 


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
    allHexes(size, rows, cols);
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

// - - - - - - - - - - - - - - - - - - - - Generating Board from board dimensions - - - - - - - - - - - - - - - - - - -

// +-----+                                  boardPosns
// |     +-------------------+              +----------+
// |size |                   +------------->+          |
// |     |                                  | HexPosns |---------->
// +-----+                              +-->+          |
//                                      |   +----------+
// +-----+                              |
// |     |            dimensionToBoard  | 
// | row +----------+       +---------+ | 
// |     |          +------>+         +-+
// +-----+                  |  Board  |
//                  +------>+         |
// +-----+          |       +---------+
// |     |          |
// | col |          |
// |     +----------+
// +-----+



/**
 * Even rows:
 * 
 *  1   1   1          1  1  1  1  1  1  
 *    1   1   1    =>  1  1  1  1  1  1 
 *  1   1   1   
 *    1   1   1  
 * 
 * Odd rows:
 * 
 *   1   1   1          1  1  1  1  1  1  
 *     1   1   1    =>  1  0  1  0  1  0 
 *   1   1   1   
 * 
 * Turns the specification of a hexagonal grid into a 2d-array representation.
 * 
 * @param {Natural} size The size of a single tile
 * @param {PositiveInteger > 1} hexCol The rows in the board.
 * @param {PositiveInteger > 0} hexRow The columns of the board.
 */
function dimensionToBoard(boardHeight, boardWidth, size) {
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
                isOdd(boardHeight) && // Only the boards with odd height have holes in the last row
                row === actualRows - 1 && // Tells if the row is the last one
                isOdd(col) // The holes only occur on the odd-th column on the last row
            ) {
                thisRow[col] = {"kind" : "blank_space", "tile_info" : {"size" : size, "max_fishes": 0 }};
            } else {
                thisRow[col] = {"kind" : "fishes", "tile_info" : {"size" : size, "max_fishes": 5 }, "fishes" : 1};
            }
        }
        board[row] = thisRow
    }
    return board;
}


/**
 * Is the number's parity odd?
 * @param {Natural} n The number whose parity is to be determined.
 * @returns Whether the number is odd?
 */
function isOdd(n) {
    return n % 2 === 1;
}

/**
 * Is the number's parity even?
 * @param {Natural} n The number whose parity is to be determined.
 * @returns Whether the number is even.
 */
function isEven(n) {
    return n % 2 === 0;
}

/**
 * Converts row and columns for the hexagonal grid to row and columns
 * for our 2-dimensional array representation.
 * @param {PositiveInteger > 1} col The cols in the board
 * @param {PositiveInteger > 0} row The rows in the board
 */
function hexToRect(col, row) {
    return { col: col * 2, row: row % 2 === 0 ? row / 2 : (row + 1) / 2 };
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
                if (board[row][col].kind === "fishes") {
                    let yOffset = size * snd
                    hexes.push(makeHex(size, xOffset, yOffset, boardP))
                }
            }
        }
    }
    return hexes;
}


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
function makeHex(size, xOffset, yOffset, row, col) {
    const corners = [
        { x: 0 + xOffset, y: size + yOffset },
        { x: size + xOffset, y: 0 + yOffset },
        { x: 2 * size + xOffset, y: 0 + yOffset },
        { x: 3 * size + xOffset, y: size + yOffset },
        { x: 2 * size + xOffset, y: 2 * size + yOffset },
        { x: size + xOffset, y: 2 * size + yOffset }
    ]

    return [corners, boardP]

    // PROPOSED CHANGE:
    // return [
    //     {col: col, row, row}, [
    //     { x: 0 + xOffset, y: size + yOffset },
    //     { x: size + xOffset, y: 0 + yOffset },
    //     { x: 2 * size + xOffset, y: 0 + yOffset },
    //     { x: 3 * size + xOffset, y: size + yOffset },
    //     { x: 2 * size + xOffset, y: 2 * size + yOffset },
    //     { x: size + xOffset, y: 2 * size + yOffset }
    // ]]

}


// ------------------------- CREATING THE HEXAGON TILES, GENERATING THE BOARD -----------------------------------------------------------



// Number Number Number -> void
// places all hexes on the canvas 
// according to their specs
function allHexes(size, rows, cols) {
    let board = dimensionToBoard(rows, cols, size)

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
        if (isNotHole(boardPosnVal.kind)) {
            let fishPosUp = 0;
            let fishPosDown = - (size / 5);
            // adds hex to canvas
            canvas.add(new fabric.Polygon(hex[0], genHexConfig(hex[1])));
            console.log(boardPosnVal)

            // checks whether given tile is not occupied by a penguin
            if (isNotPenguin(boardPosnVal.kind)) {
                let fishPos = 0;
                // adds fish on the cur hex
                for (let i = 0; i < boardPosnVal.fishes; i++) {
                    (i % 2 == 0) ?
                     addIcon(imagePosnX + size, imagePosnY - fishPosUp, 'fish-image', size) :
                     addIcon(imagePosnX + size, imagePosnY - fishPosDown, 'fish-image', size)
                    
                     fishPosUp += (size / 5);
                     fishPosDown -= (size / 5);
                }
            } else {
                // if not fish or hole,  add player penguin
                addIcon(imagePosnX + size, imagePosnY - size, boardPosnVal.player, size)
            }
        }
    });
}

// checks if given value does not represent a penguin
// ASSUMPTION: penguin values are always one of:
// - 'red' , 'brown', 'black', 'white'
function isNotPenguin(x) {
    return x != "player";
}

// checks if given value does not represents a hole
function isNotHole(x) {
    return x != "hole";
}


// configures board specifications
function getBoardSpecs(size, board) {

    let hexes = boardPosns(size, board)

    board = noOfFish(board, 1, 2, 5)
    board = noOfFish(board, 1, 1, 4)
    board = noOfFish(board, 0, 2, 2)
    board = noOfFish(board, 0, 1, 5)
   //board = noOfFish(board, 1, 3, 3)
    board = makeHole(board, 1, 3)
    board = placePenguin(board, 0, 0, 'black')
    board = placePenguin(board, 1, 0, 'red')
    board = placePenguin(board, 0, 3, 'brown')
    board = placePenguin(board, 1, 5, 'white')
    board = addBoardHolesMinFish(board, 3, [ [1, 1], [1, 4] ])
    console.log(board)

    return hexes;
}

// Board Number Number -> Board
// creates a hole in the board (no tile)
function makeHole(board, row, col) {
    if (board[row][col].kind != "blank_space") {
        board[row][col] = { kind: "hole", tile_info: { size: DEFAULT_SIZE, max_fishes: 0} };
    }
    return board;
}

// Board Number Number, Number -> Board
// places n amount of fish on board[x][y]
function noOfFish(board, row, col, n) {
    let val = board[row][col]

    if (val.kind == "fishes" &&  n <= val.tile_info.max_fishes) {
        board[row][col].fishes = n;
    }
    return board;
}

// Board Number Number, String -> Board
// places penguin of given color on board[x][y]
function placePenguin(board, row, col, color) {
    let val = board[row][col]

    if ((val.kind != "blank_space") && (val.kind != "hole")) {

        board[row][col] = { kind: "player", tile_info: { size: DEFAULT_SIZE, max_fishes: 0}, player: color };
    }
    return board;
}


// retreives fish/penguin image from index.html
// according to the id specified then
// adds it onto the canvas at the given 
// coordinates
function addIcon(imageX, imageY, image_id, size) {
    console.log(image_id)
    let imgElement = document.getElementById(image_id);
    let imgInstanceP = new fabric.Image(imgElement, genImageConfig(imageX, imageY));
    smallImgP = imgInstanceP.scale(size / 275);
    canvas.add(smallImgP);

}


//ASSUMPTIONS: 
// -> Total positions - hposns is >= fishes
// -> fishes is a natural number
// creates holes in board at given positions
// and adds specified min-number of 1-fish tiles
function addBoardHolesMinFish(board, fishes, hposns) {

    // changes value of tile to represent a hole
    for (let hposn = 0; hposn < hposns.length; hposn++) {
        let [bcol, brow] = [hposns[hposn][1], hposns[hposn][0]]
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

            board[srow][scol].fishes = 1;
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
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j].kind == "fishes") {
                if(board[i][j].fishes === 1) {
                fcount = fcount + 1;
            }
        }
        }
    }
    return fcount;
}

// Board -> BoardPosn[]
// retrieves board positions of all changeable tiles
function getChangablePoints(board) {
    let res = []
    for (let col = 0; col < board.length; col++) {
        for (let row = 0; row < board[col].length; row++) {
            
            if (isChangeableState(board[col][row])) {
                res.push([col, row])
            }
        }
    }
    return res;
}


// checks whether given value is a changeable tile
// a Changeable tile is one of:
// - PlayerColor
// - Positive integer > 1
// (we do not have to change 1)
function isChangeableState(p) {
    return p.kind == "fishes" && p.fishes > 1;
    
}

// Board BoardPosn[] -> Board
// add holes in board according to holes
function addHoles(board, holes) {
    for (let i = 0; i < holes.length; i++) {
        let [col, row] = [holes[i][0], holes[i][1]]
        board[row][col].kind = "hole";
    }
    return board;
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


// - - - - - - - - - - Neighbors and Paths - - - - - - - - - -



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
function getPaths(board, boardCoord) {
    return {
        "north": getPathInDirection(board, boardCoord, getNeighborNorth),
        "south": getPathInDirection(board, boardCoord, getNeighborSouth),
        "northWest": getPathInDirection(board, boardCoord, getNeighborNorthWest),
        "northEast": getPathInDirection(board, boardCoord, getNeighborNorthEast),
        "southWest": getPathInDirection(board, boardCoord, getNeighborSouthWest),
        "southEast": getPathInDirection(board, boardCoord, getNeighborSouthEast)
    }
}


// BoardPosn [BoardPosn -> BoardPosn] -> BoardPosn[]
// longest path in a direction that getNeighborInDirection
// generates the neighbors for.
function getPathInDirection(board, posn, getNeighborInDirection) {
    let res = []
    let next = getNeighborInDirection(posn);

    // TERMINATION ARGUMENT: 
    // getNeighborInDirection: Number Number -> BoardPosn
    // will eventually hit the edge of the board or
    // water or another player (which are unreachable).
    while (!isNeighborUnreachable(board, next)) {
        res.push(next);
        next = getNeighborInDirection(next);
    }

    return res;
}


// Board BoardPosn -> Boolean
// Checks if a neighbouring tile is not a valid move
function isNeighborUnreachable(board, posn) {
    const r = board[posn.row]
    return r === undefined ||
           r[posn.col] === -1 ||
           r[posn.col] === 0 ||
           typeof r[posn.col] === "string" ||
           r[posn.col] === undefined;
}


// Number Number -> BoardPosn
// get the neighbor in the North direction
function getNeighborNorth({col, row}) {
    return {col: col, row: row - 1}
}
// Number Number -> BoardPosn
// get the neighbor in the South direction
function getNeighborSouth({col, row}) {
    return {col: col, row: row + 1}
}
// Number Number -> BoardPosn
// get the neighbor in the NorthWest direction
function getNeighborNorthWest({col, row}) {
    return {col: col - 1, row: row - 1}
}
// Number Number -> BoardPosn
// get the neighbor in the NorthEast direction
function getNeighborNorthEast({col, row}) {
    return {col: col + 1, row: row -1}
}
// Number Number -> BoardPosn
// get the neighbor in the SouthWest direction
function getNeighborSouthWest({col, row}) {
    return {col: col - 1, row: row + 1}
}
// Number Number -> BoardPosn
// get the neighbor in the SouthEast direction
function getNeighborSouthEast({col, row}) {
    return {col: col + 1, row: row + 1}
}


// remove a tile from the board
// ASSUMPTION: boardPosn in a valid tile
function removeTile(board, boardPosn) {
    board[boardPosn] = -1;
    return board;
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
