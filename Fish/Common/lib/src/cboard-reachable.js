"use strict";
/**
 * Given a board position, and a cBoard, produces all
 * the reachable points if a penguin is on the position.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.southeast = exports.southwest = exports.northwest = exports.northeast = exports.south = exports.north = exports.getReachable = void 0;
const cstate_1 = require("./cstate");
const util_1 = require("./util");
// - - - - - - - - - - Neighbors and Paths - - - - - - - - - -
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
/**
 * gets a `Path` object from `boardPosn` in `baord`.
 */
function getPaths(board, boardPosn) {
    return {
        "north": getPathInDirection(board, boardPosn, getNeighborNorth),
        "south": getPathInDirection(board, boardPosn, getNeighborSouth),
        "northWest": getPathInDirection(board, boardPosn, getNeighborNorthWest),
        "northEast": getPathInDirection(board, boardPosn, getNeighborNorthEast),
        "southWest": getPathInDirection(board, boardPosn, getNeighborSouthWest),
        "southEast": getPathInDirection(board, boardPosn, getNeighborSouthEast)
    };
}
/**
 * longest path in a direction that getNeighborInDirection
 * generates the neighbors for.
 */
function getPathInDirection(board, posn, getNeighborInDirection) {
    let res = [];
    let next = getNeighborInDirection(posn);
    // TERMINATION ARGUMENT: 
    // getNeighborInDirection: BoardPosn -> BoardPosn
    // will eventually hit the edge of the board or
    // water or another player (which are unreachable).
    while (!isNeighborUnreachable(board, next)) {
        res.push(next);
        next = getNeighborInDirection(next);
    }
    return res;
}
/**
 * Checks if a neighbouring tile is not a valid move
 */
function isNeighborUnreachable(board, posn) {
    return !(posn.row < board.length && posn.row > -1)
        || !(posn.col < board[0].length && posn.col > -1)
        || cstate_1.PRED_isCSpaceACUnusable(board[posn.row][posn.col])
        || cstate_1.PRED_isCSpaceACHole(board[posn.row][posn.col])
        || cstate_1.PRED_isCSpaceACPenguin(board[posn.row][posn.col])
        || board[posn.row][posn.col] === undefined;
}
function getNeighborNorth(boardPosn) {
    return { row: boardPosn.row - 1, col: boardPosn.col };
}
function getNeighborSouth(boardPosn) {
    return { row: boardPosn.row + 1, col: boardPosn.col };
}
function getNeighborNorthWest(boardPosn) {
    return util_1.isEven(boardPosn.col)
        ? { row: boardPosn.row - 1, col: boardPosn.col - 1 }
        : { row: boardPosn.row, col: boardPosn.col - 1 };
}
function getNeighborNorthEast(boardPosn) {
    return util_1.isEven(boardPosn.col)
        ? { row: boardPosn.row - 1, col: boardPosn.col + 1 }
        : { row: boardPosn.row, col: boardPosn.col + 1 };
}
function getNeighborSouthWest(boardPosn) {
    return util_1.isEven(boardPosn.col)
        ? { row: boardPosn.row, col: boardPosn.col - 1 }
        : { row: boardPosn.row + 1, col: boardPosn.col - 1 };
}
function getNeighborSouthEast(boardPosn) {
    return util_1.isEven(boardPosn.col)
        ? { row: boardPosn.row, col: boardPosn.col + 1 }
        : { row: boardPosn.row + 1, col: boardPosn.col + 1 };
}
function rowColObjToColRow(boardPosn) {
    return [boardPosn.col, boardPosn.row];
}
function colRowToRowColObj(p) {
    return { row: p[1], col: p[0] };
}
function north(posn) {
    return rowColObjToColRow(getNeighborNorth(colRowToRowColObj(posn)));
}
exports.north = north;
function south(posn) {
    return rowColObjToColRow(getNeighborSouth(colRowToRowColObj(posn)));
}
exports.south = south;
function northeast(posn) {
    return rowColObjToColRow(getNeighborNorthEast(colRowToRowColObj(posn)));
}
exports.northeast = northeast;
function northwest(posn) {
    return rowColObjToColRow(getNeighborNorthWest(colRowToRowColObj(posn)));
}
exports.northwest = northwest;
function southwest(posn) {
    return rowColObjToColRow(getNeighborSouthWest(colRowToRowColObj(posn)));
}
exports.southwest = southwest;
function southeast(posn) {
    return rowColObjToColRow(getNeighborSouthEast(colRowToRowColObj(posn)));
}
exports.southeast = southeast;
