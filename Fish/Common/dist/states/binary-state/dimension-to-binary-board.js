"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array2DFill = exports.dimToBinBoard = void 0;
const utility_functions_1 = require("../../utils/utility-functions");
/**
 * Even rows:
 *
 *  1   1   1          1  1  1  1  1  1
 *    1   1   1    =>  1  1  1  1  1  1
 *  1   1   1
 *    1   1   1
 *
 * Odd rows:
 *
 *   1   1   1          1  1  1  1  1  1
 *     1   1   1    =>  1  0  1  0  1  0
 *   1   1   1
 *
 * Turns the specification of a hexagonal grid into a 2d-array representation.
 *
 */
function dimToBinBoard(inputRows, inputCols) {
    const [matrixRows, matrixCols] = [binBoardRows(inputRows), binBoardCols(inputCols)];
    const unusableBoard = array2DFill(matrixRows, matrixCols, 0);
    return unusableBoard.map((row, rowIdx) => row.map((_col, colIdx) => isUnusable(inputRows, rowIdx, colIdx, matrixRows) ? 0 : 1));
}
exports.dimToBinBoard = dimToBinBoard;
/**
 *  Only the boards with odd height have holes in the last row
 * The holes only occur on the odd-th column on the last row
 */
function isUnusable(inputRow, row, col, actualRows) {
    return utility_functions_1.isOdd(inputRow) && row === actualRows - 1 && utility_functions_1.isOdd(col);
}
/**
 * translates the no. of rows for bin board from given
 * no. of rows of dim board
 */
function binBoardRows(boardHeight) {
    return boardHeight % 2 === 0 ? boardHeight / 2 : (boardHeight + 1) / 2;
}
/**
 * translates the no. of cols for bin board from given
 * no. of cols of dim board
 */
function binBoardCols(boardWidth) {
    return boardWidth * 2;
}
// fills array with given element
function array2DFill(rows, cols, elem) {
    return Array(rows).fill(elem).map(() => Array(cols).fill(elem));
}
exports.array2DFill = array2DFill;
//# sourceMappingURL=dimension-to-binary-board.js.map