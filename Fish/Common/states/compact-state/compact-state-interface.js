"use strict";
exports.__esModule = true;
exports.compactPosnToBoardPosn = exports.makeCPosn = exports.getColFromCPosn = exports.getRowFromCPosn = void 0;
var input_state_interface_1 = require("../input-state/input-state-interface");
/**
 * Get row from CPosn.
 */
function getRowFromCPosn(cPosn) {
    return cPosn[0];
}
exports.getRowFromCPosn = getRowFromCPosn;
/**
 * Get col from CPosn.
 */
function getColFromCPosn(cPosn) {
    return cPosn[1];
}
exports.getColFromCPosn = getColFromCPosn;
function makeCPosn(row, col) {
    return [row, col];
}
exports.makeCPosn = makeCPosn;
function compactPosnToBoardPosn(cPosn) {
    return {
        row: input_state_interface_1.getRowFromInputPosition(cPosn),
        col: input_state_interface_1.getColFromInputPosition(cPosn)
    };
}
exports.compactPosnToBoardPosn = compactPosnToBoardPosn;
