"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.compactBoardToResultBoard = exports.compactPlayersToInputPlayers = exports.compactPlayerToInputPlayer = exports.compactPlayerToInputPlayerChange = void 0;
var input_state_to_compact_state_1 = require("../input-state-to-compact-state/input-state-to-compact-state");
function compactPlayerToInputPlayerChange(player, toMove, prevPosns) {
    var first = prevPosns[0], rest = prevPosns.slice(1);
    return { color: player[0], score: player[1], places: __spreadArrays([input_state_to_compact_state_1.compactPosnToInputPosn(toMove)], rest) };
}
exports.compactPlayerToInputPlayerChange = compactPlayerToInputPlayerChange;
function compactPlayerToInputPlayer(player, prevPosns) {
    return { color: player[0], score: player[1], places: prevPosns };
}
exports.compactPlayerToInputPlayer = compactPlayerToInputPlayer;
function compactPlayersToInputPlayers(players, toMove, prevPlayers) {
    var inputPlayers = [];
    var noOfPlayers = prevPlayers.length;
    var first = prevPlayers[0], rest = prevPlayers.slice(1);
    var updatedPrevPlayers = __spreadArrays(rest, [first]);
    for (var i = 0; i < players.length - 1; i++) {
        inputPlayers = __spreadArrays(inputPlayers, [compactPlayerToInputPlayer(players[i], updatedPrevPlayers[i].places)]);
    }
    inputPlayers = __spreadArrays(inputPlayers, [compactPlayerToInputPlayerChange(players[noOfPlayers - 1], toMove, updatedPrevPlayers[noOfPlayers - 1].places)]);
    return inputPlayers;
}
exports.compactPlayersToInputPlayers = compactPlayersToInputPlayers;
// InputBoard -> IntermediateBoard
// Translate the our board to desired board. 
function compactBoardToResultBoard(ourBoard) {
    var totalRows = ourBoard.length;
    if (ourBoard[totalRows - 1][1] === "unusable") {
        return oddOurBoardToResultBoard(ourBoard);
    }
    else {
        return evenOurBoardToResultBoard(ourBoard);
    }
}
exports.compactBoardToResultBoard = compactBoardToResultBoard;
function evenOurBoardToResultBoard(board) {
    var totalRows = board.length;
    var totalCols = board[0].length;
    var finalBoard = [];
    for (var i = 0; i < totalRows; i++) {
        var evenRow = [];
        var oddRow = [];
        for (var j = 0; j < totalCols; j++) {
            if (j % 2 == 0) {
                evenRow.push(makeInputSpace(board[i][j]));
            }
            else {
                oddRow.push(makeInputSpace(board[i][j]));
            }
        }
        finalBoard.push(evenRow);
        finalBoard.push(oddRow);
    }
    return finalBoard;
}
function oddOurBoardToResultBoard(board) {
    var totalRows = board.length;
    var totalCols = board[0].length;
    var finalBoard = [];
    for (var i = 0; i < totalRows; i++) {
        var evenRow = [];
        var oddRow = [];
        for (var j = 0; j < totalCols; j++) {
            if (j % 2 == 0) {
                evenRow.push(makeInputSpace(board[i][j]));
            }
            else if (i < totalRows - 1) {
                oddRow.push(makeInputSpace(board[i][j]));
            }
        }
        finalBoard.push(evenRow);
        if (i < totalRows - 1) {
            finalBoard.push(oddRow);
        }
    }
    return finalBoard;
}
function makeInputSpace(space) {
    if (space != "unusable") {
        if (space === "hole") {
            return 0;
        }
        else {
            if (typeof (space) === "number") {
                return space;
            }
            else {
                return space[1];
            }
        }
    }
}
