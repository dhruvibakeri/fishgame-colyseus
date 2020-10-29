// - - - - - - - - - - Neighbors and Paths - - - - - - - - - -
//
// Board BoardPosn -> BoardPosn[]

import { CBoard, CPosn, PRED_isCSpaceACHole, PRED_isCSpaceACPenguin, PRED_isCSpaceACUnusable } from "./cstate";
import { isEven } from "./util";

// gets board positions of all valid moves
export function getReachable (board : CBoard, boardPosn : CPosn) : CPosn[]{
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
export function getPaths(board : CBoard, boardCoord : CPosn) {
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
export function getPathInDirection(board : CBoard, posn : CPosn, getNeighborInDirection : (posn) => CPosn) : CPosn[] {
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
export function isNeighborUnreachable(board : CBoard, posn : CPosn) {
    const r = board[posn[0]]
    const hasRow = posn[0] < board.length && posn[0] > -1
    const hasCol = posn[1]  < board[0].length && posn[1]  > -1
    return !hasRow || !hasCol ||
        PRED_isCSpaceACUnusable(r[posn[1]])  ||
        PRED_isCSpaceACHole(r[posn[1]]) ||
        PRED_isCSpaceACPenguin((r[posn[1]])) ||
        r[posn[1]] === undefined;

}
// Number Number -> BoardPosn
// get the neighbor in the North direction
export function getNeighborNorth(posn : CPosn) {
    return [ posn[0] - 1,  posn[1] ] as CPosn
}
// Number Number -> BoardPosn
// get the neighbor in the South direction
export function getNeighborSouth(posn : CPosn) {
    return [posn[0] + 1,  posn[1]] as CPosn
}
// Number Number -> BoardPosn
// get the neighbor in the NorthWest direction
export function getNeighborNorthWest(posn : CPosn) {
    return isEven(posn[1]) 
    ?  [posn[0] - 1,  posn[1] - 1] as CPosn
    : [ posn[0],  posn[1] - 1 ] as CPosn
}
// Number Number -> BoardPosn
// get the neighbor in the NorthEast direction
export function getNeighborNorthEast(posn : CPosn) {
    return isEven(posn[1]) 
    ? [posn[0] - 1,  posn[1] + 1] as CPosn
    : [posn[0],  posn[1] + 1] as CPosn
}
// Number Number -> BoardPosn
// get the neighbor in the SouthWest direction
export function getNeighborSouthWest(posn : CPosn) {
    return isEven(posn[1]) 
    ? [posn[0],  posn[1] - 1] as CPosn
    : [posn[0] + 1,  posn[1] - 1] as CPosn
}
// Number Number -> BoardPosn
// get the neighbor in the SouthEast direction
export function getNeighborSouthEast(posn : CPosn) {
    return isEven(posn[1])
    ? [posn[0],  posn[1] + 1] as CPosn
    : [posn[0] + 1,  posn[1] + 1] as CPosn
}

