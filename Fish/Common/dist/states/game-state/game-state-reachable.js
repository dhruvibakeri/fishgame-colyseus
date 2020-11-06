"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNeighborSouthEast = exports.getNeighborSouthWest = exports.getNeighborNorthEast = exports.getNeighborNorthWest = exports.getNeighborSouth = exports.getNeighborNorth = exports.isNeighborUnreachable = exports.getPathInDirection = exports.getPaths = exports.getReachable = void 0;
const utility_functions_1 = require("../../utils/utility-functions");
const game_state_predicates_1 = require("./game-state-predicates");
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
exports.getPaths = getPaths;
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
exports.getPathInDirection = getPathInDirection;
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
//# sourceMappingURL=game-state-reachable.js.map