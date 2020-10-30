"use strict";
// - - - - - - - - - - Neighbors and Paths - - - - - - - - - -
//
// Board BoardPosn -> BoardPosn[]
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNeighborSouthEast = exports.getNeighborSouthWest = exports.getNeighborNorthEast = exports.getNeighborNorthWest = exports.getNeighborSouth = exports.getNeighborNorth = exports.isNeighborUnreachable = exports.getPathInDirection = exports.getPaths = exports.getReachable = void 0;
const cstate_1 = require("./cstate");
const util_1 = require("./util");
// gets board positions of all valid moves
function getReachable(board, boardPosn) {
    let paths = getPaths(board, boardPosn);
    return [
        ...paths.north,
        ...paths.south,
        ...paths.northWest,
        ...paths.northEast,
        ...paths.southWest,
        ...paths.southEast
    ];
}
exports.getReachable = getReachable;
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
    };
}
exports.getPaths = getPaths;
// BoardPosn [BoardPosn -> BoardPosn] -> BoardPosn[]
// longest path in a direction that getNeighborInDirection
// generates the neighbors for.
function getPathInDirection(board, posn, getNeighborInDirection) {
    let res = [];
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
exports.getPathInDirection = getPathInDirection;
// Board BoardPosn -> Boolean
// Checks if a neighbouring tile is not a valid move
function isNeighborUnreachable(board, posn) {
    const r = board[posn[0]];
    const hasRow = posn[0] < board.length && posn[0] > -1;
    const hasCol = posn[1] < board[0].length && posn[1] > -1;
    return !hasRow || !hasCol ||
        cstate_1.PRED_isCSpaceACUnusable(r[posn[1]]) ||
        cstate_1.PRED_isCSpaceACHole(r[posn[1]]) ||
        cstate_1.PRED_isCSpaceACPenguin((r[posn[1]])) ||
        r[posn[1]] === undefined;
}
exports.isNeighborUnreachable = isNeighborUnreachable;
// Number Number -> BoardPosn
// get the neighbor in the North direction
function getNeighborNorth(posn) {
    return [posn[0] - 1, posn[1]];
}
exports.getNeighborNorth = getNeighborNorth;
// Number Number -> BoardPosn
// get the neighbor in the South direction
function getNeighborSouth(posn) {
    return [posn[0] + 1, posn[1]];
}
exports.getNeighborSouth = getNeighborSouth;
// Number Number -> BoardPosn
// get the neighbor in the NorthWest direction
function getNeighborNorthWest(posn) {
    return util_1.isEven(posn[1])
        ? [posn[0] - 1, posn[1] - 1]
        : [posn[0], posn[1] - 1];
}
exports.getNeighborNorthWest = getNeighborNorthWest;
// Number Number -> BoardPosn
// get the neighbor in the NorthEast direction
function getNeighborNorthEast(posn) {
    return util_1.isEven(posn[1])
        ? [posn[0] - 1, posn[1] + 1]
        : [posn[0], posn[1] + 1];
}
exports.getNeighborNorthEast = getNeighborNorthEast;
// Number Number -> BoardPosn
// get the neighbor in the SouthWest direction
function getNeighborSouthWest(posn) {
    return util_1.isEven(posn[1])
        ? [posn[0], posn[1] - 1]
        : [posn[0] + 1, posn[1] - 1];
}
exports.getNeighborSouthWest = getNeighborSouthWest;
// Number Number -> BoardPosn
// get the neighbor in the SouthEast direction
function getNeighborSouthEast(posn) {
    return util_1.isEven(posn[1])
        ? [posn[0], posn[1] + 1]
        : [posn[0] + 1, posn[1] + 1];
}
exports.getNeighborSouthEast = getNeighborSouthEast;
