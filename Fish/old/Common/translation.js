// Translation layer for converting the board
// representation (in Board-Posn) to our board
// representation. 
//
// . . . . . . . . . . . . . . . . . . . . . . 
//
// Board is our version of the board (as defined in the game state)
//
// InputBoard is the version of board coordinates used as input to the tests
//
// IntermediateBoard is a version of board that matches our coordinate system
//   but its elements are either numbers representing the number of fishes on
//   a tile (0 for hole), or "unusableSpace" for space on the board that's 
//   unusable.
// 
// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//
// Solution Sketch
// ---------------
//
// Step 1:
// 
// Translate InputBoard to IntermediateBoard
//    This makes sure that the elements are not changed (except "unusableSpace")
//    but the coordinate system is made to be the same as Board.
// 
// Step 2:
// 
// Translate IntermediateBoard to Board
//    Map all the numeric values to actual BoardSpaces and Tiles, and Penguins. 
//
// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//
// InputBoard and Board Examples
// 
const inputBoardExample1 = [
  [1,2,3],
  [4,0,5]
]
const inputBoardExample2 = [
  [1, 2, 3],
  [4, 0, 5],
  [1, 1, 0]
];
const boardExample1 = [
  [1, 4, 2, 0, 3, 5]
];
const boardExample2 = [
  [1, 4, 2, 0, 3, 5], 
  [1, "unusableSpace", 1, "unusableSpace", 0, "unusableSpace"]
]
//
//
// - - - - - - - From InputBoard to Board - - - - - - 
//
// Examples
// --------
// 
// from
// 
// [[1,2,3]
//  [4,0,5]]
//
// to
// 
// [[1, 4, 2, 3, 5]]
//
// 
// from 
//
// [[1, 2, 3]
//  [4, 0, 5]
//  [1, 1, 0]]
// 
// to 
// 
// [[1, 4, 2, 0, 3, 5]
//  [1, x, 1, x, 0, x]]
// 
// where x is "unusableSpace"
//
// Sketch
// ------
//
// When the total number of rows are even:
//     interleave the odd rows with the row immediately above them
//     such that the odd row's elements are on odd positions (0-indexed)
// When the total number of rows are odd:
//   Add a hole on all even positions on the last row. Do the similar 
//   shifting (as above) on the resultant even-board.
//
// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

// InputBoard -> IntermediateBoard
// Translate the input board to intermediate board. 
function inputBoardToIntermediateBoard(inputBoard) {
  const totalRows = inputBoard.length;
  if(isEven(totalRows)) {
    return evenInputBoardToIntermediateBoard(inputBoard);
  } else {
    return oddInputBoardToIntermediateBoard(inputBoard);
  }
}

// InputBoard -> IntermediateBoard
// convert an InputBoard with even rows to a IntermediateBoard
function evenInputBoardToIntermediateBoard(inputBoard) {
  let resBoard = [];
  for(let i = 0; i < inputBoard.length / 2; i = i + 2) {
    let thisRow = inputBoard[i];
    let nextRow = inputBoard[i + 1];
    let interleavedRow = interleaveRows(thisRow, nextRow);
    resBoard.push(interleavedRow);
  } 
  return resBoard;
}

// InputBoard -> IntermediateBoard
// convert an InputBoard with odd rows to a IntermediateBoard
function oddInputBoardToIntermediateBoard(inputBoard) {
  let resBoard = [];
  for(let i = 0; i < (inputBoard.length - 1) / 2; i = i + 2) {
    let thisRow = inputBoard[i];
    let nextRow = inputBoard[i + 1];
    let interleavedRow = interleaveRows(thisRow, nextRow);
    resBoard.push(interleavedRow);
  } 
  let lastRow = inputBoard[inputBoard.length - 1]
  resBoard.push(interleaveRows(lastRow, new Array(lastRow.length).fill("unusableSpace")))
  return resBoard;
}

// [Array-of X] [Array-of X] -> [Array-of X]
// Interleaves l1 and l2
// ASSUMPTION: l1.length === l2.length

// Examples for interleave:
// [], [] -> []
// [1, 2], [3, 4] -> [1, 3, 2, 4]
// [1, 2, 3], [4, 0, 5] -> [1, 4, 2, 0, 3, 5]
function interleaveRows(l1, l2) {
  console.assert(l1.length === l2.length);
  let interLeaved = [];
  for(let i = 0; i < l1.length; i++) {
    interLeaved.push(l1[i]);
    interLeaved.push(l2[i]);
  }
  return interLeaved;
}
// 
// Mapping IntermediateBoard to Board
//

// IntermediateBoard -> Board 
// converts an intermediate board to a board 
function intermediateBoardToBoard(intermediateBoard) {
  let mappedBoard = [];
  for(let rowIdx = 0; rowIdx < intermediateBoard.length; rowIdx++) {
    let mappedRow = [];
    let currentRow = intermediateBoard[rowIdx];
    for(let colIdx = 0; colIdx < currentRow.length; colIdx++) {
      let currentElement = currentRow[colIdx];
      mappedRow.push(mapIntermediateElement(currentElement));
    }
    mappedBoard.push(mappedRow);
  }
  return mappedBoard
}

const TILE_SIZE_TEMP = 45;
const MAX_ELEMENTS_TEMP = 5;

// Natural | "unusableSpace" -> UsableSpace | UnusableSpace 
// maps an element of an IntermediateBoard to an element of Board
function mapIntermediateElement(boardElement) {
  if(boardElement === "unusableSpace") {
    return makeUnusableSpace();
  } else {
    const tileInfo = makeTileInfo(TILE_SIZE_TEMP, MAX_ELEMENTS_TEMP)
    if(boardElement === 0) {
      const tile = makeGameTile(tileInfo, false);
      return makeUsableSpace(tile)
    } else {
      const tile = makeGameTile(tileInfo, makeFishes(boardElement));
      return makeUsableSpace(tile);
    } 
  }
}

// Board-Posn Data Definition from 
//   https://www.ccs.neu.edu/home/matthias/4500-f20/3.html
// 
// Board-Posn is
// { "position" : Position,
//   "board" : Board}
//
// Board is a JSON array of JSON arrays where each element is
// either 0 or a number between 1 and 5.
// The size of the board may not exceed a total of 25 tiles.
// INTERPRETATION A 0 denotes a hole in the board configuration. All other
// numbers specify the number of fish displayed on the tile.
//
// Position is a JSON array that contains two natural numbers:
// [board-row,board-column].
// INTERPRETATION The position uses the computer graphics coordinate system
// meaning the Y axis points downwards. The position refers to a tile with at least one fish on it.
//

const exampleBoardPosn1 = {
  position: [0, 0],
  board: [[1,2,3],[4,0,5]]
}

const exampleBoardPosn2 = {
  position: [0, 0],
  board: [[1,2,3],[4,0,5],[1,1,0]]
}

function inputBoardToBoard(inputBoard) {
  let intermediateBoard = inputBoardToIntermediateBoard(inputBoard);
  return intermediateBoardToBoard(intermediateBoard);
}

// Board-Posn -> Natural
// Get the total number of reachable positions from boardPosn
function getTotalReachableFromBoardPosn(boardPosn) {
  let board = inputBoardToBoard(boardPosn.board)
  const posn = { row: boardPosn.position[0], col: boardPosn.position[1]};
  return getReachable(board, posn).length;
}