// Translation layer for converting the board
// representation (in Board-Posn) to our board
// representation. 

var assert = chai.assert

// Board is our version of the board (as defined in the game state)

// InputBoard is the version of board coordinates used as input to the tests

// IntermediateBoard is a version of board that matches our coordinate system
//   but its elements are either numbers representing the number of fishes on
//   a tile (0 for hole), or "unusableSpace" for space on the board that's 
//   unusable.

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


// InputBoard and Board Examples
// 
const inputBoardExample1 = [[1,2,3], [4,0,5]]
const inputBoardExample2 = [[1, 2, 3], [4, 0, 5], [1, 1, 0]];
const boardExample1 = [[1, 4, 2, 0, 3, 5]];
const boardExample2 = [[1, 4, 2, 0, 3, 5], [1, "unusableSpace", 1, "unusableSpace", 0, "unusableSpace"]]


// - - - Translation Layer from InputBoard to Board - - -


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


function inputBoardToBoard(inputBoard) {
  const totalRows = inputBoard.length;
  if(isEven(totalRows)) {
    return evenInputBoardToBoard(inputBoard);
  } else {
    return oddInputBoardToBoard(inputBoard);
  }
}


describe("inputBoardToBoard tests", () => {
  it("even # of rows", () => {
    assert.deepEqual(inputBoardToBoard(inputBoardExample1), boardExample1);
  })
  it("odd # of rows", () => {
    assert.deepEqual(inputBoardToBoard(inputBoardExample2),  boardExample2);
  })
})

// InputBoard -> Board
// convert an InputBoard with even rows to a Board

describe("tests for even board helper", () => {
  it("on [[1,2,3] [4,0,5]]", () => {
    assert.deepEqual(evenInputBoardToBoard(inputBoardExample1), boardExample1);
  })
})

function evenInputBoardToBoard(inputBoard) {
  let resBoard = [];
  for(let i = 0; i < inputBoard.length / 2; i = i + 2) {
    let thisRow = inputBoard[i];
    let nextRow = inputBoard[i + 1];
    let interleavedRow = interleaveRows(thisRow, nextRow);
    resBoard.push(interleavedRow);
  } 
  return resBoard;
}

// InputBoard -> Board
// convert an InputBoard with odd rows to a Board

describe("tests for odd board helper", () => {
  it("on [[1, 2, 3], [4, 0, 5], [1, 1, 0]]", () => {
    assert.deepEqual(oddInputBoardToBoard(inputBoardExample2),  boardExample2);
  })
})

function oddInputBoardToBoard(inputBoard) {
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

// Tests for interleave
describe("interleave tests", () => {
  it("on empty arrays", () => {
      assert.deepEqual(interleaveRows([], []), [])
  })
  it("on [1, 2], [3, 4]", () => {
      assert.deepEqual(interleaveRows([1, 2], [3, 4]), [1, 3, 2, 4])
  })
  it("on [1, 2, 3], [4, 0, 5]", () => {
      assert.deepEqual(interleaveRows([1, 2, 3], [4, 0, 5]), [1, 4, 2, 0, 3, 5])
  })
})


function interleaveRows(l1, l2) {
  console.assert(l1.length === l2.length);
  let interLeaved = [];
  for(let i = 0; i < l1.length; i++) {
    interLeaved.push(l1[i]);
    interLeaved.push(l2[i]);
  }
  return interLeaved;
}
