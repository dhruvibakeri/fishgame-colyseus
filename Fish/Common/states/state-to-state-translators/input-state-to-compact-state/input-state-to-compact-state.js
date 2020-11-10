"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.inputStateToCState = exports.compactPosnToInputPosn = exports.inputPosnToCompactPosn = exports.interleave = exports.padInputBoard = exports.getLongestRowLength = exports.longestRowAsUnusable = exports.inputBoardToCBoardNoPlayers = void 0;
var input_state_interface_1 = require("../../input-state/input-state-interface");
var compact_state_interface_1 = require("../../compact-state/compact-state-interface");
var compact_state_interface_2 = require("../../compact-state/compact-state-interface");
/**
 * Convert an input board to a compact board. The 0s in the board is mapped
 * to "holes" because 0s represent blank tiles on compact board.
 */
function inputBoardToCBoardNoPlayers(inputBoard) {
    var boardWithUnused = inputBoardWithUnused(padInputBoard(inputBoard));
    var cBoard = [];
    for (var i = 0; i < boardWithUnused.length; i = i + 2) {
        cBoard.push(interleave(boardWithUnused[i], boardWithUnused[i + 1]));
    }
    return cBoard;
}
exports.inputBoardToCBoardNoPlayers = inputBoardToCBoardNoPlayers;
/**
 * If the input board is odd, add a row of "unusable" elements
 * whose length is equal to the longest row in the input board.
 */
function inputBoardWithUnused(inputBoard) {
    if (inputBoard.length % 2 === 0) {
        return inputBoard;
    }
    else {
        inputBoard.push(longestRowAsUnusable(inputBoard));
        return inputBoard;
    }
}
/**
 * Make a row of "unusable" elements that has the length equal to the
 * longest row in input board.
 */
function longestRowAsUnusable(inputBoard) {
    return new Array(getLongestRowLength(inputBoard)).fill("unusable");
}
exports.longestRowAsUnusable = longestRowAsUnusable;
/**
 * Get the longest row of the input board.
 */
function getLongestRowLength(inputBoard) {
    var max_length = 0;
    for (var i = 0; i < inputBoard.length; i++) {
        if (max_length < inputBoard[i].length) {
            max_length = inputBoard[i].length;
        }
    }
    return max_length;
}
exports.getLongestRowLength = getLongestRowLength;
/**
 * Pad the input board with holes (a hole in an input board is a 0).
 */
function padInputBoard(board) {
    var longestRowLen = getLongestRowLength(board);
    var newBoard = [];
    for (var i = 0; i < board.length; i++) {
        if (board[i].length < longestRowLen) {
            var holesToAdd = new Array(longestRowLen - board[i].length).fill(0);
            newBoard.push(__spreadArrays(board[i], holesToAdd));
        }
        else {
            newBoard.push(board[i]);
        }
    }
    return newBoard;
}
exports.padInputBoard = padInputBoard;
/**
 * Interleaves l1 and l2
 * ASSUMPTION: l1.length === l2.length
 */
function interleave(l1, l2) {
    var interLeaved = [];
    for (var i = 0; i < l1.length; i++) {
        interLeaved.push(makeCSpace(l1[i]));
        interLeaved.push(makeCSpace(l2[i]));
    }
    return interLeaved;
}
exports.interleave = interleave;
function makeCSpace(space) {
    if (space === 0) {
        return "hole";
    }
    else {
        return space;
    }
}
/**
 * Convert an input posn to compact posn.
 */
function inputPosnToCompactPosn(inputPosition) {
    var row = input_state_interface_1.getRowFromInputPosition(inputPosition);
    var col = input_state_interface_1.getColFromInputPosition(inputPosition);
    return row % 2 == 0
        ? compact_state_interface_2.makeCPosn(row / 2, col + col)
        : compact_state_interface_2.makeCPosn((row - 1) / 2, col + col + 1);
}
exports.inputPosnToCompactPosn = inputPosnToCompactPosn;
/**
 * Convert a compact posn to input posn.
 */
function compactPosnToInputPosn(cPosn) {
    var row = compact_state_interface_1.getRowFromCPosn(cPosn);
    var col = compact_state_interface_1.getColFromCPosn(cPosn);
    return col % 2 == 0
        ? input_state_interface_1.makeInputPosition((row * 2), col / 2)
        : input_state_interface_1.makeInputPosition((row * 2) + 1, (col - 1) / 2);
}
exports.compactPosnToInputPosn = compactPosnToInputPosn;
function inputStateToCState(inputState) {
    var cBoardNoPlayers = zeroesToHoles(inputBoardToCBoardNoPlayers(inputState.board));
    var inputPlayers = inputState.players;
    var scores = [];
    for (var i = 0; i < inputPlayers.length; i++) {
        var _a = inputPlayers[i], color = _a.color, score = _a.score, places = _a.places;
        for (var j = 0; j < places.length; j++) {
            var _b = inputPosnToCompactPosn(places[j]), row = _b[0], col = _b[1];
            cBoardNoPlayers[row][col] = [color, cBoardNoPlayers[row][col]];
        }
        scores.push([color, score]);
    }
    return ["playing",
        cBoardNoPlayers,
        scores
    ];
}
exports.inputStateToCState = inputStateToCState;
function zeroesToHoles(cBoard) {
    return cBoard.map(function (row) {
        return row.map(function (elem) {
            return elem === 0 ? "hole" : elem;
        });
    });
}
