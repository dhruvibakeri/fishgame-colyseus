"use strict";
/**
 * Converts a binary board (0 | 1)[][] to a set of "hexgon corners"
 * and their corresponding board coordinates.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardToHexTiles = void 0;
const util_1 = require("./util");
/**
 * Converts a generic board of the given size into
 * a list of hex tiles for each usable space.
 */
function boardToHexTiles(size, board, isUsable) {
    let hexes = [];
    for (let rowIdx = 0; rowIdx < board.length; rowIdx = rowIdx + 1) {
        let fst = rowIdx * 2;
        let snd = fst + 1;
        for (let colIdx = 0; colIdx < board[rowIdx].length; colIdx = colIdx + 1) {
            let xOffset = (size * 2) * colIdx;
            if (util_1.isEven(colIdx)) {
                let yOffset = size * fst;
                hexes.push(makeHexTile(size, xOffset, yOffset, rowIdx, colIdx));
            }
            else {
                if (isUsable(board[rowIdx][colIdx])) {
                    let yOffset = size * snd;
                    hexes.push(makeHexTile(size, xOffset, yOffset, rowIdx, colIdx));
                }
            }
        }
    }
    return hexes;
}
exports.boardToHexTiles = boardToHexTiles;
/**
 * creates a HexTile using the given specs
 */
function makeHexTile(size, xOffset, yOffset, row, col) {
    return {
        posn: { row: row, col: col },
        corners: offsetHex(originHex(size), xOffset, yOffset)
    };
}
/**
 * Makes corners for a Hex of the given size.
 * NOTE: Hex as specified in the SPEC. Not a regular hex!
 */
function originHex(size) {
    return [
        { x: 0, y: size },
        { x: size, y: 0 },
        { x: 2 * size, y: 0 },
        { x: 3 * size, y: size },
        { x: 2 * size, y: 2 * size },
        { x: size, y: 2 * size }
    ];
}
/**
 * offsets the hex corners accordingly so that the corners represent
 * the accurate position on the board
 */
function offsetHex(hexCorners, xOffset, yOffset) {
    return hexCorners.map((hexCorner) => {
        return { x: hexCorner.x + xOffset, y: hexCorner.y + yOffset };
    });
}
