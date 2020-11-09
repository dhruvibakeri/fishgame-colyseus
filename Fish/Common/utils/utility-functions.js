"use strict";
exports.__esModule = true;
exports.boardPosnToInputPosn = exports.boardPosnToCompactPosn = exports.str = exports.log = exports.isEven = exports.isOdd = void 0;
var input_state_to_compact_state_1 = require("../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state");
function isOdd(n) {
    return n % 2 === 1;
}
exports.isOdd = isOdd;
function isEven(n) {
    return n % 2 === 0;
}
exports.isEven = isEven;
function log(a) {
    console.log(str(a));
}
exports.log = log;
function str(a) {
    return JSON.stringify(a);
}
exports.str = str;
function boardPosnToCompactPosn(boardPosn) {
    return [boardPosn.row, boardPosn.col];
}
exports.boardPosnToCompactPosn = boardPosnToCompactPosn;
function boardPosnToInputPosn(boardPosn) {
    return input_state_to_compact_state_1.compactPosnToInputPosn(boardPosnToCompactPosn(boardPosn));
}
exports.boardPosnToInputPosn = boardPosnToInputPosn;
