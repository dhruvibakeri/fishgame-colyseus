"use strict";
exports.__esModule = true;
exports.getFirstPlayer = exports.makeInputPosition = exports.getColFromInputPosition = exports.getRowFromInputPosition = void 0;
/**
 * get the board-row from a Position
 */
function getRowFromInputPosition(position) {
    return position[0];
}
exports.getRowFromInputPosition = getRowFromInputPosition;
/**
 * get the board-col from a Position
 */
function getColFromInputPosition(position) {
    return position[1];
}
exports.getColFromInputPosition = getColFromInputPosition;
function makeInputPosition(row, col) {
    return [row, col];
}
exports.makeInputPosition = makeInputPosition;
/**
 * Gets the first player assuming there are greater than 0 players in input state.
 */
function getFirstPlayer(inputState) {
    return inputState.players[0];
}
exports.getFirstPlayer = getFirstPlayer;
