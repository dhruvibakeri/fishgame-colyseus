"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getNeighborSouthEast = exports.getNeighborSouthWest = exports.getNeighborNorthEast = exports.getNeighborNorthWest = exports.getNeighborSouth = exports.getNeighborNorth = exports.isNeighborUnreachable = exports.getPathInDirection1 = exports.getReachableNeighbours = exports.getPathInDirection = exports.getPaths = exports.getReachable = void 0;
var utility_functions_1 = require("../../utils/utility-functions");
var game_state_predicates_1 = require("./game-state-predicates");
function getReachable(board, boardPosn) {
    var paths = getPaths(board, boardPosn);
    return __spreadArrays(paths.north, paths.south, paths.northWest, paths.northEast, paths.southWest, paths.southEast);
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
exports.getPaths = getPaths;
/**
 * longest path in a direction that getNeighborInDirection
 * generates the neighbors for.
 */
function getPathInDirection(board, posn, getNeighborInDirection) {
    var res = [];
    var next = getNeighborInDirection(posn);
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
exports.getPathInDirection = getPathInDirection;
// FOR TESTING
// gets board positions of reachable neighbours
function getReachableNeighbours(board, boardPosn) {
    var paths = getPathsNeighbours(board, boardPosn);
    return __spreadArrays(paths.north, paths.northEast, paths.southEast, paths.south, paths.southWest, paths.northWest);
}
exports.getReachableNeighbours = getReachableNeighbours;
// Board BoardPosn -> Paths
// gets a `Path` object from `booardPosn` in `baord`.
function getPathsNeighbours(board, boardCoord) {
    return {
        "north": getPathInDirection1(board, boardCoord, getNeighborNorth),
        "south": getPathInDirection1(board, boardCoord, getNeighborSouth),
        "northWest": getPathInDirection1(board, boardCoord, getNeighborNorthWest),
        "northEast": getPathInDirection1(board, boardCoord, getNeighborNorthEast),
        "southWest": getPathInDirection1(board, boardCoord, getNeighborSouthWest),
        "southEast": getPathInDirection1(board, boardCoord, getNeighborSouthEast)
    };
}
// BoardPosn [BoardPosn -> BoardPosn] -> BoardPosn[]
// longest path in a direction that getNeighborInDirection
// generates the neighbors for.
function getPathInDirection1(board, posn, getNeighborInDirection) {
    var res = [];
    var next = getNeighborInDirection(posn);
    // TERMINATION ARGUMENT: 
    // getNeighborInDirection: Number Number -> BoardPosn
    // will eventually hit the edge of the board or
    // water or another player (which are unreachable).
    if (!isNeighborUnreachable(board, next)) {
        res.push(next);
    }
    return res;
}
exports.getPathInDirection1 = getPathInDirection1;
// FOR TESTING
/**
 * Checks if a neighbouring tile is not a valid move
 */
function isNeighborUnreachable(board, posn) {
    return !(posn.row < board.length && posn.row > -1)
        || !(posn.col < board[0].length && posn.col > -1)
        || !game_state_predicates_1.PRED_isFishSpace(board[posn.row][posn.col])
        || board[posn.row][posn.col] === undefined;
}
exports.isNeighborUnreachable = isNeighborUnreachable;
function getNeighborNorth(boardPosn) {
    return { row: boardPosn.row - 1, col: boardPosn.col };
}
exports.getNeighborNorth = getNeighborNorth;
function getNeighborSouth(boardPosn) {
    return { row: boardPosn.row + 1, col: boardPosn.col };
}
exports.getNeighborSouth = getNeighborSouth;
function getNeighborNorthWest(boardPosn) {
    return utility_functions_1.isEven(boardPosn.col)
        ? { row: boardPosn.row - 1, col: boardPosn.col - 1 }
        : { row: boardPosn.row, col: boardPosn.col - 1 };
}
exports.getNeighborNorthWest = getNeighborNorthWest;
function getNeighborNorthEast(boardPosn) {
    return utility_functions_1.isEven(boardPosn.col)
        ? { row: boardPosn.row - 1, col: boardPosn.col + 1 }
        : { row: boardPosn.row, col: boardPosn.col + 1 };
}
exports.getNeighborNorthEast = getNeighborNorthEast;
function getNeighborSouthWest(boardPosn) {
    return utility_functions_1.isEven(boardPosn.col)
        ? { row: boardPosn.row, col: boardPosn.col - 1 }
        : { row: boardPosn.row + 1, col: boardPosn.col - 1 };
}
exports.getNeighborSouthWest = getNeighborSouthWest;
function getNeighborSouthEast(boardPosn) {
    return utility_functions_1.isEven(boardPosn.col)
        ? { row: boardPosn.row, col: boardPosn.col + 1 }
        : { row: boardPosn.row + 1, col: boardPosn.col + 1 };
}
exports.getNeighborSouthEast = getNeighborSouthEast;
