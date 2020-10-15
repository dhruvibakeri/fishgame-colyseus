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

    const hasRow = posn.row < board.length && posn.row > -1
    const hasCol = posn.col  < board[0].length && posn.col  > -1


    return !hasRow ||
            !hasCol ||
        isUnusableSpace(r[posn.col])  ||
        isFalse(spaceIsOccupiedBy(r[posn.col])) ||
        isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(r[posn.col]))) ||
        r[posn.col] === undefined;

}


// Number Number -> BoardPosn
// get the neighbor in the North direction
function getNeighborNorth({ row, col}) {
    return { row: row - 1, col: col }
}
// Number Number -> BoardPosn
// get the neighbor in the South direction
function getNeighborSouth({ row, col}) {
    return { row: row + 1, col: col }
}
// Number Number -> BoardPosn
// get the neighbor in the NorthWest direction
function getNeighborNorthWest({ row, col}) {

    if(col % 2 == 0) {
        return { row: row - 1, col: col - 1 }
    }
    else {
        return { row: row, col: col - 1 }
    }
    
}
// Number Number -> BoardPosn
// get the neighbor in the NorthEast direction
function getNeighborNorthEast({ row, col}) {
    if(col % 2 == 0) {
        return { row: row - 1, col: col + 1 }
    }
    else {
        return { row: row, col: col + 1 }
    }
}
// Number Number -> BoardPosn
// get the neighbor in the SouthWest direction
function getNeighborSouthWest({ row, col }) {
    if(col % 2 == 0) {
        return { row: row , col: col - 1 }
    }
    else {
        return { row: row + 1, col: col - 1 }
    }
}
// Number Number -> BoardPosn
// get the neighbor in the SouthEast direction
function getNeighborSouthEast({ row, col}) {
    if(col % 2 == 0) {
        return { row: row, col: col + 1 }
    }
    else {
        return { row: row + 1, col: col + 1 }
    }
}


// remove a tile from the board
// ASSUMPTION: boardPosn in a valid tile
function removeTile(board, boardPosn) {
    board[boardPosn] = -1;
    return board;
}

