"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputStateToCState = exports.compactPosnToInputPosn = exports.inputPosnToCompactPosn = exports.interleave = exports.padInputBoard = exports.getLongestRowLength = exports.longestRowAsUnusable = exports.inputBoardToCBoardNoPlayers = void 0;
const input_state_interface_1 = require("../../input-state/input-state-interface");
const compact_state_interface_1 = require("../../compact-state/compact-state-interface");
const compact_state_interface_2 = require("../../compact-state/compact-state-interface");
const lodash_1 = __importDefault(require("lodash"));
/**
 * Convert an input board to a compact board. The 0s in the board is mapped
 * to "holes" because 0s represent blank tiles on compact board.
 */
function inputBoardToCBoardNoPlayers(inputBoard) {
    let boardWithUnused = inputBoardWithUnused(padInputBoard(inputBoard));
    let cBoard = [];
    for (let i = 0; i < boardWithUnused.length; i = i + 2) {
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
    let max_length = 0;
    for (let i = 0; i < inputBoard.length; i++) {
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
    const longestRowLen = getLongestRowLength(board);
    let newBoard = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i].length < longestRowLen) {
            let holesToAdd = new Array(longestRowLen - board[i].length).fill(0);
            newBoard.push([...board[i], ...holesToAdd]);
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
    let interLeaved = [];
    for (let i = 0; i < l1.length; i++) {
        interLeaved.push(l1[i]);
        interLeaved.push(l2[i]);
    }
    return interLeaved;
}
exports.interleave = interleave;
/**
 * Convert an input posn to compact posn.
 */
function inputPosnToCompactPosn(inputPosition) {
    let row = input_state_interface_1.getRowFromInputPosition(inputPosition);
    let col = input_state_interface_1.getColFromInputPosition(inputPosition);
    return row % 2 == 0
        ? compact_state_interface_2.makeCPosn(row / 2, col + col)
        : compact_state_interface_2.makeCPosn((row - 1) / 2, col + col + 1);
}
exports.inputPosnToCompactPosn = inputPosnToCompactPosn;
/**
 * Convert a compact posn to input posn.
 */
function compactPosnToInputPosn(cPosn) {
    let row = compact_state_interface_1.getRowFromCPosn(cPosn);
    let col = compact_state_interface_1.getColFromCPosn(cPosn);
    return col % 2 == 0
        ? input_state_interface_1.makeInputPosition((row * 2), col / 2)
        : input_state_interface_1.makeInputPosition((row * 2) + 1, (col - 1) / 2);
}
exports.compactPosnToInputPosn = compactPosnToInputPosn;
function inputStateToCState(inputState) {
    let cBoardNoPlayers = zeroesToHoles(inputBoardToCBoardNoPlayers(inputState.board));
    let inputPlayers = inputState.players;
    let scores = [];
    for (let i = 0; i < inputPlayers.length; i++) {
        const { color, score, places } = inputPlayers[i];
        for (let j = 0; j < places.length; j++) {
            let [row, col] = inputPosnToCompactPosn(places[j]);
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
    return lodash_1.default.map(cBoard, row => lodash_1.default.map(row, elem => elem === 0 ? "hole" : elem));
}
//# sourceMappingURL=input-state-to-compact-state.js.map