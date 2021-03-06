
/**
 * Converts a binary board (0 | 1)[][] to a set of "hexgon corners"
 * and their corresponding board coordinates.
 */

import { CanvasPosn, HexCorners, HexTile } from "../utils/other-data-definitions";

/**
 * Converts a generic board of the given size into
 * a list of hex tiles for each usable space.
 */
export function boardToHexTiles<T>(size: number, board: T[][], isUsable: (cell: T) => boolean): HexTile[] {
  let hexes: HexTile[] = []
  for (let rowIdx = 0; rowIdx < board.length; rowIdx = rowIdx + 1) {
    let fst = rowIdx * 2
    let snd = fst + 1;
    for (let colIdx = 0; colIdx < board[rowIdx].length; colIdx = colIdx + 1) {
      let xOffset = (size * 2) * colIdx
      if (colIdx % 2 === 0) {
        let yOffset = size * fst
        hexes.push(makeHexTile(size, xOffset, yOffset, rowIdx, colIdx))
      } else {
        if (isUsable(board[rowIdx][colIdx])) {
          let yOffset = size * snd
          hexes.push(makeHexTile(size, xOffset, yOffset, rowIdx, colIdx))
        }
      }
    }
  }
  return hexes;
}


/**
 * creates a HexTile using the given specs
 */
function makeHexTile(size: number, xOffset: number, yOffset: number, row: number, col: number): HexTile {
  return {
    posn: { row: row, col: col },
    corners: offsetHex(originHex(size), xOffset, yOffset)
  }
}

/**
 * Makes corners for a Hex of the given size.
 * NOTE: Hex as specified in the SPEC. Not a regular hex!
 */
function originHex(size: number): HexCorners {
  return [
    { x: 0, y: size },
    { x: size, y: 0 },
    { x: 2 * size, y: 0 },
    { x: 3 * size, y: size },
    { x: 2 * size, y: 2 * size },
    { x: size, y: 2 * size }
  ]
}


/**
 * offsets the hex corners accordingly so that the corners represent
 * the accurate position on the board
 */
function offsetHex(hexCorners: HexCorners, xOffset: number, yOffset: number): HexCorners {
  return hexCorners.map((hexCorner: CanvasPosn) => {
    return { x: hexCorner.x + xOffset, y: hexCorner.y + yOffset }
  }) as HexCorners;
}