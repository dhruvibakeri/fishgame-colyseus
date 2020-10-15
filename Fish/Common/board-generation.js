// --------------------------------------- Data Definition ------------------------------------------------------------
// 
// Board = (UsableSpace | UnusableSpace)[][]
// 
// UsableSpace = { kind: "usableSpace", occupiedBy: Tile | false}
// UnusableSpace = { kind: "unusableSpace" }
// 
// Tile = { tileInfo: TileInfo, occupiedBy: Fishes | Penguin | false}
// 
// TileInfo = { size: ℕ, maxElements: ℕ }
// 
// Fishes =  { kind: "fishes", totalFishes: ℤ+ }
// Penguin = { kind: "penguin", color: PenguinColor }
// 
// PenguinColor = ("red" | "brown" | "black" | "white")
//
// --------------------------------------- Interpretation -------------------------------------------------------------
//
// - Board: Board is a two dimensional array composed of either usable 
//   space (that can be possibly occupied by a tile) or an unusable space
//   that can never be occupied.
//   Note: Mapping hex grids leaves out some unusable spaces on the board. 
// 
// - UsableSpace: is a space on the board that  can be either occupied by a
//   Tile or be empty at a given time. 
// 
// - UnusableSpace: is a space on the board that can never be occupied by 
//   a tile. 
//
// - Tile: has some information about itself (see TileInfo) and can be
//   optionally occupied by either Fishes or Penguin
// 
// - TileInfo: holds the size of the Tile and the maximum number of fishes
//   it can hold.
// 
// - Fishes: represents the fishes on the board, the totalFishes field shows
//   the total number of fishes.
// 
// - Penguin: represents the penguin on the board, they also have a color of 
//   their own (see PenguinCOlor)
// 
// - PenguinColor: are the possible colors that penugins can hold. 
//
//
//
//
//
// - - - - - - - - - - - - - - - - - - - - Generating Board from board dimensions - - - - - - - - - - - - - - - - - - -

// +-----+                                  boardPosns
// |     +-------------------+              +----------+
// |size |                   +------------->+          |
// |     |                                  | HexPosns |---------->
// +-----+                              +-->+          |
//                                      |   +----------+
// +-----+                              |
// |     |            dimensionToBoard  | 
// | row +----------+       +---------+ | 
// |     |          +------>+         +-+
// +-----+                  |  Board  |
//                  +------>+         |
// +-----+          |       +---------+
// |     |          |
// | col |          |
// |     +----------+
// +-----+



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
 * @param {Natural} size The size of a single tile
 * @param {PositiveInteger > 1} hexCol The rows in the board.
 * @param {PositiveInteger > 0} hexRow The columns of the board.
 */
function dimensionToBoard(boardHeight, boardWidth) {
    // gets actual row count
    let actualRows = boardHeight % 2 === 0 ? boardHeight / 2 : (boardHeight + 1) / 2;
    // gets actual col count
    let actualCols = boardWidth * 2
    let board = new Array(actualRows);

    for (let row = 0; row < actualRows; ++row) {
        let thisRow = new Array(actualCols);
        for (let col = 0; col < actualCols; ++col) {
            // 
            if (
                isOdd(boardHeight) && // Only the boards with odd height have holes in the last row
                row === actualRows - 1 && // Tells if the row is the last one
                isOdd(col) // The holes only occur on the odd-th column on the last row
            ) {
                thisRow[col] = makeUnusableSpace();
            } else {
                thisRow[col] = makeUsableSpace(makeGameTile(makeTileInfo(DEFAULT_SIZE, 5), makeFishes(1)));

            }
        }
        board[row] = thisRow
    }
    return board; 
}
 

/**
 * Is the number's parity odd?
 * @param {Natural} n The number whose parity is to be determined.
 * @returns Whether the number is odd?
 */
function isOdd(n) {
    return n % 2 === 1;
}

/**
 * Is the number's parity even?
 * @param {Natural} n The number whose parity is to be determined.
 * @returns Whether the number is even.
 */
function isEven(n) {
    return n % 2 === 0;
}

/**
 * Converts row and columns for the hexagonal grid to row and columns
 * for our 2-dimensional array representation.
 * @param {PositiveInteger > 1} col The cols in the board
 * @param {PositiveInteger > 0} row The rows in the board
 */
function hexToRect(col, row) {
    return { col: col * 2, row: row % 2 === 0 ? row / 2 : (row + 1) / 2 };
}