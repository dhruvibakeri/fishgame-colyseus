/**
 * Converts the given board dimensions to a
 * 2-dimensional array of binary values representing
 * a usable space (1) or unusable space (0)
 */

import { isOdd } from "./util";

/**
 * A BinaryBoard represents the skeleton of a board. 
 * 1 represents a usable space.
 * 0 represents an unusable space.
 * 
 * Intuition: Converting a Hex grid to a matrix leaves
 * some unusable spaces (0s).
 */
export type BinaryBoard = (1 | 0)[][]

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
export function dimToBinBoard(inputRows: number, inputCols: number): BinaryBoard {
  const [matrixRows, matrixCols] = [binBoardRows(inputRows), binBoardCols(inputCols)]
  const unusableBoard = array2DFill(matrixRows, matrixCols, 0);
  return unusableBoard.map((row, rowIdx) =>
    row.map((_col, colIdx) => isUnusable(inputRows, rowIdx, colIdx, matrixRows) ? 0 : 1))
}


/**
 *  Only the boards with odd height have holes in the last row
 * The holes only occur on the odd-th column on the last row
 */
function isUnusable(inputRow: number, row: number, col: number, actualRows: number): boolean {
  return isOdd(inputRow) && row === actualRows - 1 && isOdd(col)
}

/**
 * translates the no. of rows for bin board from given
 * no. of rows of dim board
 */
function binBoardRows(boardHeight: number): number {
  return boardHeight % 2 === 0 ? boardHeight / 2 : (boardHeight + 1) / 2
}

/**
 * translates the no. of cols for bin board from given
 * no. of cols of dim board
 */
function binBoardCols(boardWidth: number): number {
  return boardWidth * 2
}

// fills array with given element
export function array2DFill<T>(rows: number, cols: number, elem: T): T[][] {
  return Array(rows).fill(elem).map(() => Array(cols).fill(elem));
}
