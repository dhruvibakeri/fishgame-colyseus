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

// Data Definition
// ---------------
// 
// GameState = { 
//   gameStage: GameStage, 
//   board: Board | false,
//   nextMove: UUID | false,
//   players: Players
// }
// 
// Players = [UUID, PlayerInfo][]
// PlayerInfo = { color: PenguinColor, score: ℕ }
// GameStage = "joining" | "placing" | "playing" | "done"
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
// Interpretation
// --------------
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
// --------------------------------------- Predicates -------------------------------------------------------------
//
// Any -> Boolean
// is `a` a GameState
function isGameState(a) {


  return isObj(a) &&
         Object.keys(a).length === 4 &&
         a.hasOwnProperty("gameStage") &&
         a.hasOwnProperty("board") &&
         a.hasOwnProperty("nextMove") &&
         a.hasOwnProperty("players") &&
         isGameStage(a.gameStage) &&
         isGameBoard(a.board) &&
         isNextMove(a.nextMove) &&
         isPlayers(a.players)

         

}

// Any -> Boolean
// is `a` a board
function isGameBoard(a) {
  return isBoard(a) ||  isFalse(a);
}

// Any -> Boolean
// is `a` a nextMove
function isNextMove(a) {
  return isUUID(a) ||  isFalse(a);
}

// Any -> Boolean
// is `a` a Players?
function isPlayers(a) {
  if(Array.isArray(a)) {
    let allValid = true
    for(let i = 0; i < a.length; i++) {
      let elem = a[i];
      if(Array.isArray(elem) && elem.length === 2) {
        if(!isUUID(elem[0]) || !isPlayerInfo(elem[1])) {
          allValid = false;
        }
      } else {
        return false;
      }
    }
    return allValid;
  } else {
    return false;
  }
}

function isUUID(a) {
  return isNum(a) && isNumInt(a);
}
// 
// Any -> Boolean
// is `a` a PlayerInfo?
function isPlayerInfo(a) {
  return isObj(a) &&
         Object.keys(a).length === 2 &&
         a.hasOwnProperty("color") &&
         a.hasOwnProperty("score") &&
         isPenguinColor(a.color) &&
         isNum(a.score) &&
         isNumInt(a.score) &&
         a.score >= 0
}
// Any -> Boolean
// is `a` a GameStage? 
function isGameStage(a) {
  return typeof isStr(a) && (a === "joining" || a === "placing" || a === "playing" || a === "done");
}
// Any -> Boolean
// is `a` a Board?
function isBoard(a) {
  if(Array.isArray(a)) {
    let allSpaces = true
    for(let rowIdx = 0; rowIdx < a.length; rowIdx++) {
      let currentRow = a[rowIdx];
      // TODO: the inner row should also be an array
      // TODO: make sure there is at least one row
      // TODO: make sure there are even cols
      // TODO: make sure all cols are of the same lenght
      for(let colIdx = 0; colIdx < currentRow.length; colIdx++) {
        let currentSpace = currentRow[colIdx];
        if(!isUsableSpace(currentSpace) && !isUnusableSpace(currentSpace)) {
          allSpaces = false;
        }
      }
    }
    return allSpaces;
  } else {
    return false;
  }
}
// Any -> Boolean
// is `a` an UsableSpace?
function isUsableSpace(a) {
  return isObj(a) &&
         Object.keys(a).length === 2 &&
         a.hasOwnProperty("kind") &&
         a.hasOwnProperty("occupiedBy") &&
         isStr(a.kind) &&
         a.kind === "usableSpace" &&
         (isFalse(a.occupiedBy) || isTile(a.occupiedBy));
}
// Any -> Boolean
// is `a` a n UnusableSpace?
function isUnusableSpace(a) {
  return  isObj(a) &&
          Object.keys(a).length === 1 &&
          a.hasOwnProperty("kind") &&
          isStr(a.kind) &&
          a.kind === "unusableSpace";
}
// Any -> Boolean
// is `a` a GameTile?
function isTile(a) {
  return isObj(a) &&
         Object.keys(a).length === 2 &&
         a.hasOwnProperty("tileInfo") &&
         a.hasOwnProperty("occupiedBy") &&
         isTileInfo(a.tileInfo) &&
         (isFalse(a.occupiedBy) || isFishes(a.occupiedBy) || isPenguin(a.occupiedBy))
}
// Any -> Boolean
// is `a` a TileInfo?
function isTileInfo(a) {
  return isObj(a) &&
         Object.keys(a).length === 2 &&
         a.hasOwnProperty("size") &&
         a.hasOwnProperty("maxElements") &&
         isNum(a.size) &&
         isNumInt(a.size) &&
         a.size >= 0 &&
         isNum(a.maxElements) &&
         isNumInt(a.maxElements) &&
         a.maxElements >= 0
}
// Any -> Boolean
// is `a` a Fishes?
function isFishes(a) {
  return isObj(a) &&
         Object.keys(a).length === 2 &&
         a.hasOwnProperty("kind") &&
         a.hasOwnProperty("totalFishes") &&
         isStr(a.kind) &&
         a.kind === "fishes" &&
         isNum(a.totalFishes) &&
         isNumInt(a.totalFishes) &&
         a.totalFishes > 0;
}
// Any -> Boolean
// is `a` a Penguin?
function isPenguin(a) {
  return isObj(a) &&
    (Object.keys(a).length === 2) &&
    a.hasOwnProperty("kind") &&
    a.hasOwnProperty("color") &&
    isStr(a.kind) &&
    a.kind === "penguin" &&
    isPenguinColor(a.color);
}
// Any -> Boolean
// is `a` a PenguinColor?
function isPenguinColor(a) {
  return typeof isStr(a) && (a === "red" || a === "brown" || a === "black" || a === "white");
}
//
// --------------------------------------- Predicate Helpers -------------------------------------------------------------
// 
// Number -> Boolean
// is the number `n` an integer?
function isNumInt(n) {
  return n % 1 === 0
}
// Any -> Boolean
// Does `a` have the type string?
function isStr(a) {
  return typeof a === "string";
}
// Any -> Boolean
// is `a` false?
function isFalse(a) {
  return typeof a === "boolean" && a === false;
}
// Any -> Boolean
// does `a` have the type number?
function isNum(a) {
  return typeof a === "number";
}
// Any -> Boolean
// does `a` have the type object (and is not null)?
function isObj(a) {
  return typeof a === "object" && a !== null;
}

// --------------------------------------- Constructors -------------------------------------------------------------

/**
 * Is the number's parity odd?
 * @param {Natural} n The number whose parity is to be determined.
 * @returns Whether the number is odd?
 */
function isOdd(n) {
  return n % 2 === 1;
}

// gameStage board nextMove players -> gameState
// make a gameState
function makeGameState(gameStage, board, nextMove, players) {
  const res = {gameStage : gameStage, board : board, nextMove : nextMove, players : players};

  if(isGameState(res)) {
    return res;
  } else {
    console.error("can't make gameState");
  }

}

// String -> gameStage
// makes a gameStage
function makeGameStage(gameStage) {
  const res = gameStage;

  if(isGameStage(res)) {
    return res;
  }
 else {
  console.error("can't make gameStage");
 }
}

function duplicateBoard(board) {

  var newArray = board.map(function(b) {
    return b.slice();
});

  return newArray

}



// objSpecs = ["fish" | "hole" | "penguin", [posn][]][]

function makeBoardWithSpecs(board, addFish, addPenguin, addHole, objSpecs) {

  let newBoard = duplicateBoard(board)


  objSpecs.forEach(o => { 
    if(o[0] === "fish") {
        o[1].forEach(f => { 
          addFish(newBoard, f[0][0], f[0][1], f[1])
        });
      }

      else if(o[0] === "penguin") {

        o[1].forEach(p => { 
          addPenguin(newBoard, p[0][0], p[0][1], p[1])
        });
      }

      else if(o[0] === "hole") {
        o[1].forEach(h => { 
          addHole(newBoard, h[0], h[1])
        });
    }
  });


  const res = newBoard;

  if(isBoard(res)) {
    return newBoard;
  }

  else {
    console.error("can't make board");
  }
}




// UUID | False -> nextMove
// makes a nextMove
function makeNextMove(playerUUID) {
  const res = playerUUID;

  if (isNextMove(res)) {
    return res;
  }
  else {
    console.error("can't make nextMove");
  }
}


// [UUID, PlayerInfo][] -> Players
// make a `Players`
function makePlayers(players) {
  const res = players;

  if(isPlayers(res)) {
    return res;
  
  }
  else {
    console.error("can't make Players");
  }
}

// Players = [UUID, PlayerInfo][]
// PlayerInfo = { color: PenguinColor, score: ℕ }

// Integer -> UUID
// makes a `UUID`
function makeUUID(UUID) {
  const res = UUID;

  if(isUUID(res)) {
    return res;
  }
  else {
    console.error("can't make UUID");
  }
}

// String Integer -> PlayerInfo
// makes a `PlayerInfo `
function makePlayerInfo(color, score) {
  const res = {color : makePenguinColor(color), score : score};

  if(isPlayerInfo(res)) {
    return res;
  }
  else {
    console.error("can't make PlayerInfo");
  }

}





// String -> PenguinColor
// Make a PenguinColor.
function makePenguinColor(color) {
  const res = color;
  if(isPenguinColor(res)) {
    return res;
  } else { 
    console.error("can't make PenguinColor");
  }
}
//
// --- 
// 
// PenguinColor -> Penguin
// Makes a Penguin from a PenguinColor.
function makePenguin(penguinColor) {
  const res = {kind:"penguin", color: penguinColor};
  if(isPenguin(res)) {
    return res;
  } else { 
    console.error("can't make Penguin");
  }
}
// ℤ+ -> Fishes
// Makes a Fishes from the total number of fishes.
function makeFishes(totalFishes){
  const res = {kind:"fishes",totalFishes:totalFishes};
  if(isFishes(res)) {
    return res;
  } else { 
    console.error("can't make Fishes");
  }
}
// ℕ ℕ -> TileInfo
// Makes a TileInfo from the its size an max elements it can have.
function makeTileInfo (size, maxElements) {
  const res = { size: size, maxElements: maxElements };
  if(isTileInfo(res)) {
    return res;
  } else { 
    console.error("can't make TileInfo");
  }
}
// TileInfo (Fishes | Penguin | false) -> Tile
// Makes a Tile either has Fishes or Penguin or nothing (false).
function makeGameTile (tileInfo, occupiedBy) {
  const res = {tileInfo: tileInfo, occupiedBy: occupiedBy};
  if(isTile(res)) {
    return res;
  } else { 
    console.error("can't make GameTile");
  }
}
// Tile | false -> UsableSpace
// Make a UsableSpace with either a Tile on it or nothing (false).
function makeUsableSpace (occupiedBy) {
  const res = { kind: "usableSpace", occupiedBy: occupiedBy};
  if(isUsableSpace(res)) {
    return res;
  } else { 
    console.error("can't make UsableSpace");
  }
}
// -> UnusableSpace
// Make an UnusableSpace.
function makeUnusableSpace () {
  const res = { kind: "unusableSpace" };
  if(isUnusableSpace(res)) {
    return res;
  } else { 
    console.error("can't make UnusableSpace");
  }
}

// --------------------------------------- Selectors -----------------------------------------------------------------
// 
// Board -> Number
// Total rows in a Board.
function totalRowsInBoard(board) {
  return board.length;
}
// Board -> Number
// Total columns in the first row of a Board. 
function totalColsInBoard(board) {
  return board[0].length;
}
// Board Number Number -> UsableSpace | UnusableSpace
// Get the space on (row, col) on the board. 
function getSpaceFromBoard(board, row, col) {
  return board[row][col];
}

function spaceIsOccupiedBy(space) {
  return space.occupiedBy;
}

// Tile -> TileInfo
// Get the tile info from a Tile.
function tileInfoFromTile(tile) {
  return tile.tileInfo;
}
// Tile -> Fishes | Penguin | false
// Get what the Tile is occupied by.
function tileIsOccupiedBy(tile) {
  return tile.occupiedBy;
}
// TileInfo -> ℕ
// Get the size in the tileInfo
function sizeFromTileInfo(tileInfo) {
  return tileInfo.size
}
// Tile -> ℕ
// Get the max elements in the tileInfo
function maxElementsFromTileInfo(tileInfo) {
  return tileInfo.maxElements;
}
// Fishes -> ℤ+
// Get the total fishes from Fishes
function totalFishesFromFishes(fishes) {
  return fishes.totalFishes;
}
// Penguin -> PenguinColor
// Get the color of a Penguin.
function penguinColorFromPenguin(penguin) {
  return penguin.color
}

// gameState -> gameStage
// get the stage of the game state
function gameStageFromGameState(gameState) {
  return gameState.gameStage;
}

// gameState -> board
// get the board of the game state
function boardFromGameState(gameState) {
  return gameState.board;
}

// gameState -> nextMove
// get the nextMove of the game state
function nextMoveFromGameState(gameState) {
  return gameState.nextMove;
}

// gameState -> players
// get the players of the gameState
function playersFromGameState(gameState) {
  return gameState.players;
}

// playerInfo -> PenguinColor
// gets the assigned color of the player
function penguinColorFromPlayer(playerInfo) {
  return playerInfo.color;
}

// playerInfo -> score
// gets the score of the player
function scoreFromPlayer(playerInfo) {
  return playerInfo.score;
}
// 
//----------------------------------------------------Templates---------------------------------------------------------
//
// Board -> ...
// Template for a Board.
function boardTemplate(board) {
  for(let row = 0; row < board.length; row++) {
    let currentRow = board[row];
    for(let col = 0; col = currentRow.length; col++) {
      let currentSpace = (board[row])[col];
      if(isUnusableSpace(currentSpace)) {
        // ...
        usableSpaceTemplate(currentSpace)
        // ...
      } else if(isUsableSpace(currentSpace)) { 
        // ...
        unusableSpaceTemplate(currentSpace);
        // ...
      } else {
        console.error(`(${row}, ${col}) element - ${currentSpace} - is neither a UsableSpace nor an UnusableSpace`);
      }
    }
  }
}
// UsableSpace -> ...
// Template for a UsableSpace.
function usableSpaceTemplate(usableSpace) {
  console.assert(isUsableSpace(usableSpace));
  const occupiedBy = usableSpace.occupiedBy
  if(isFalse(occupiedBy)) {
    // ...
  } else if(isTile(occupiedBy)) {
    tileTemplate(occupiedBy);
  }
}
// UnusableSpace -> ...
// Template for a UnusableSpace.
function unusableSpaceTemplate(unusableSpace) {
  console.assert(isUnusableSpace(unusableSpace))
  // ...
}
// Tile -> ...
// Template for a Tile.
function tileTemplate(tile) {
  console.assert(isTile(tile));
  const tileInfo = tile.tileInfo;
  const occupiedBy = tile.occupiedBy;

  // ...
  tileTemplate(tileInfo);
  // ...
  if(isFalse(occupiedBy)) {

  } else if(isFishes(occupiedBy)) {
    // ...
    fishesTemplate(occupiedBy)
    // ...
  } else if(isPenguin(occupiedBy)) {
    // ...
    penguinTemplate(occupiedBy)
    // ...
  }
}
// TileInfo -> ...
// Template for a TileInfo.
function tileInfoTemplate(tileInfo) {
  console.assert(isTileInfo(tileInfo));
  const size = tileInfo.size;
  const maxElements = tileInfo.maxElements;
  // ...
  size
  // ...
  maxElements
  // ...
}
// Fishes -> ...
// Template for a Fishes.
function fishesTemplate(fishes) {
  console.assert(isFishes(fishes));
  const totalFishes = fishes;
  // ...
  totalFishes
  // ...
}
// Penguin -> ...
// Template for a Penguin.
function penguinTemplate(penguin) {
  console.assert(isPenguin(penguin));
  const penguinColor = penguin.penguinColor
  // ...
  penguinColorTemplate(penguinColor);
  // ...
}
// PenguinColor -> ...
// Template for a PenguinColor.
function penguinColorTemplate(penguinColor) {
  console.assert(isPenguinColor(penguinColor));
  if(penguinColor === "red") {
    // ...
    penguinColor
    // ...
  } else if(penguinColor === "brown") {
    // ...
    penguinColor
    // ...
  } else if(penguinColor === "black") {
    // ...
    penguinColor
    // ...
  } else if(penguinColor === "white") {
    // ...
    penguinColor
    // ...
  }
}


function isEven(n) {
  return n % 2 === 0;
}


// - - - - - - - - - - Neighbors and Paths - - - - - - - - - -
//
// Board BoardPosn -> BoardPosn[]
// gets board positions of all valid moves
function getReachable (board, boardPosn) {
  let paths = getPaths(board, boardPosn)
  return [ 
      ...paths.north,
      ...paths.south,
      ...paths.northWest,
      ...paths.northEast,
      ...paths.southWest,
      ...paths.southEast
  ]
}

// `Direction` is all possible directions a player may move:
//  "north" | "south" | "northWest" | "northEast" | "southWest" | "southEast"
// 
// Paths specifies longest paths in all `Direction`s as an object 
// with `Direction`s as the keys and `BoardPosn`s as the values. 

// Board BoardPosn -> Paths
// gets a `Path` object from `booardPosn` in `baord`.
function getPaths(board, boardCoord) {
  return {
      "north": getPathInDirection(board, boardCoord, getNeighborNorth),
      "south": getPathInDirection(board, boardCoord, getNeighborSouth),
      "northWest": getPathInDirection(board, boardCoord, getNeighborNorthWest),
      "northEast": getPathInDirection(board, boardCoord, getNeighborNorthEast),
      "southWest": getPathInDirection(board, boardCoord, getNeighborSouthWest),
      "southEast": getPathInDirection(board, boardCoord, getNeighborSouthEast)
  }
}


// BoardPosn [BoardPosn -> BoardPosn] -> BoardPosn[]
// longest path in a direction that getNeighborInDirection
// generates the neighbors for.
function getPathInDirection(board, posn, getNeighborInDirection) {
  let res = []
  let next = getNeighborInDirection(posn);
  // TERMINATION ARGUMENT: 
  // getNeighborInDirection: Number Number -> BoardPosn
  // will eventually hit the edge of the board or
  // water or another player (which are unreachable).
  while (!isNeighborUnreachable(board, next)) {
      res.push(next);
      next = getNeighborInDirection(next);
  }
  return res;
}
// Board BoardPosn -> Boolean
// Checks if a neighbouring tile is not a valid move
function isNeighborUnreachable(board, posn) {
  const r = board[posn.row]
  const hasRow = posn.row < board.length && posn.row > -1
  const hasCol = posn.col  < board[0].length && posn.col  > -1
  return !hasRow || !hasCol ||
      isUnusableSpace(r[posn.col])  ||
      isFalse(spaceIsOccupiedBy(r[posn.col])) ||
      isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(r[posn.col]))) ||
      r[posn.col] === undefined;

}
// Number Number -> BoardPosn
// get the neighbor in the North direction
function getNeighborNorth({ row, col}) {
  return { row: row - 1, col: col }
}
// Number Number -> BoardPosn
// get the neighbor in the South direction
function getNeighborSouth({ row, col}) {
  return { row: row + 1, col: col }
}
// Number Number -> BoardPosn
// get the neighbor in the NorthWest direction
function getNeighborNorthWest({ row, col}) {
  return isEven(col) 
  ? { row: row - 1, col: col - 1 }
  : { row: row, col: col - 1 }
}
// Number Number -> BoardPosn
// get the neighbor in the NorthEast direction
function getNeighborNorthEast({ row, col}) {
  return isEven(col)
  ? { row: row - 1, col: col + 1 }
  : { row: row, col: col + 1 }
}
// Number Number -> BoardPosn
// get the neighbor in the SouthWest direction
function getNeighborSouthWest({ row, col }) {
  return isEven(col)
  ? { row: row , col: col - 1 }
  : { row: row + 1, col: col - 1 }
}
// Number Number -> BoardPosn
// get the neighbor in the SouthEast direction
function getNeighborSouthEast({ row, col}) {
  return isEven(col)
  ? { row: row, col: col + 1 }
  : { row: row + 1, col: col + 1 };
}
// remove a tile from the board
// ASSUMPTION: boardPosn in a valid tile
function removeTile(board, boardPosn) {
  board[boardPosn] = -1;
  return board;
}



main();



