"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaToCompact = void 0;
function schemaToCompact(schema) {
    // creates 2D array from the flattened array
    function make2DArrFrom1DArr(oneD, rowLen) {
        let res = [];
        while (oneD.length > 0) {
            res.push(oneD.splice(0, rowLen));
        }
        return res;
    }
    // creates CBoard from 2D string array
    function boardFrom2DArr(arr2D) {
        return arr2D.map(row => row.map(strToCSpace));
    }
    // returns a CState
    return [
        schema.gamestage,
        boardFrom2DArr(make2DArrFrom1DArr(schema.board, schema.rowlen)),
        schema.players.map(player => [player.penguincolor, player.score])
    ];
}
exports.schemaToCompact = schemaToCompact;
// converts given string to a CSpace
function strToCSpace(col) {
    if (col === "0") {
        return 0;
    }
    else if (col === "1") {
        return 1;
    }
    else if (col === "2") {
        return 2;
    }
    else if (col === "3") {
        return 3;
    }
    else if (col === "4") {
        return 4;
    }
    else if (col === "5") {
        return 5;
    }
    else {
        return col;
    }
}
