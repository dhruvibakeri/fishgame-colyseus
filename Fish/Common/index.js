let readline = require("readline");

//  -> 
// Compiles all the lines from
// STDIN and sends to `xjson`
function main() {
  let lines = []
  let readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  readLine.on('line', l => lines.push(l));
  readLine.on('close', () => {
      console.log(
        getTotalReachableFromBoardPosn(checkJSONValidity(parseJSON(lines)))
      );
  });
}

// String[] -> Number
// put the lines together, parse, and compute the reachable states
function parseJSON(lines) {
  return JSON.parse(lines.join("\n"));
}

// Check validity of the json object.
function checkJSONValidity(json) {
  if(typeof json === "object" && json !== null) {
    if(Object.keys(json).length === 2) {
      if(json.hasOwnProperty("position") && json.hasOwnProperty("board")) {
          let position = validatePosition(json.position);
          let board = validateBoard(json.board);
          return {"position": position, "board":board};
      } else {
        throw Error("Keys should be \"position\" and \"board\"")
      }
    } else {
      throw Error("JSON should have exactly 2 fields")
    }
  } else {
    throw Error("The json should be an object and non-null")
  }
}

// Any -> [PosInt, PosInt] | Error
// throw appropriate error if posn is not a pair of positive integers, 
// If it is, return the posn. 
function validatePosition(position) {
  if(Array.isArray(position)) {
    if(position.length === 2) {
        let row = position[0];
        let col = position[1];
        if(validateCoordinate(row) && validateCoordinate(col)) {
          return position;
        } else {
          throw Error ("The row and col should be positive integers")
        }
    } else {
      throw Error("The position should be an array of length 2")
    }
  } else {
    throw Error("The position should be an array")
  }
}



// Any -> Boolean
// is the object `o` a positive integer?
function validateCoordinate(o) {
  return typeof o === "number" && o >= 0 && o % 1 === 0;
}

// Any -> Boolean
// is the object `o` a valid board?
function validateBoard(board) {
  if (Array.isArray(board)) {
    let totalRows = board.length;
    if (totalRows !== 0) {
      let firstRowLength = board[0].length;
      let resBoard = []
      for (let rowIdx = 0; rowIdx < totalRows; rowIdx++) {
        let resRow = [];
        let currentRowLength = board[rowIdx].length
        if (currentRowLength === firstRowLength) {
          for (let colIdx = 0; colIdx < currentRowLength; colIdx++) {
            let currentElem = board[rowIdx][colIdx];
            if (typeof currentElem === "number" && currentElem >= 0 && currentElem % 1 === 0) {
              resRow.push(currentElem);
            }
          }
        } else {
          throw Error("All rows should have the same length")
        }
        resBoard.push(resRow);
      }
      return resBoard;
    }
    throw Error("The board should not have 0 rows");
  } else {
    throw Error("The board should be an array")
  }
}