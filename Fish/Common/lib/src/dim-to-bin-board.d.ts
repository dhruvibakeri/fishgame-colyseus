/**
 * Converts the given board dimensions to a
 * 2-dimensional array of binary values representing
 * a usable space (1) or unusable space (0)
 */
/**
 * A BinaryBoard represents the skeleton of a board.
 * 1 represents a usable space.
 * 0 represents an unusable space.
 *
 * Intuition: Converting a Hex grid to a matrix leaves
 * some unusable spaces (0s).
 */
export declare type BinaryBoard = (1 | 0)[][];
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
export declare function dimToBinBoard(inputRows: number, inputCols: number): BinaryBoard;
export declare function array2DFill<T>(rows: number, cols: number, elem: T): T[][];
