DEFAULT_SIZE = 55
const TILE_SIZE_TEMP = 55;
const MAX_ELEMENTS_TEMP = 5;

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
        getOurMovedState(checkJSONValidity(parseJSON(lines)))
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
      if(json.hasOwnProperty("players") && json.hasOwnProperty("board")) {
          let players = validatePlayers(json.players);
          let board = validateBoard(json.board);
          return {"players": players, "board":board};
      } else {
        throw Error("Keys should be \"players\" and \"board\"")
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
function validatePlayers(players) {
  if(Array.isArray(players)) {
    if(players.length > 4) {
        
      throw Error("The no of players should be less than 4")
    } else {
      return players;
    }
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

function duplicateBoard(board) {

  var newArray = board.map(function(b) {
    return b.slice();
});

  return newArray

}


// gets the final result
function getOurMovedState(state) {
  players = state.players
  firstPlayer = players[0]
  firstPlayerPosns = firstPlayer.places
  firstPenguinPos = firstPlayer.places[0]
  const boardForRef = duplicateBoard(state.board)
  

  ourState = inputGameStateToIntermediateGameState(state,boardForRef)

  

  playerId = playersFromGameState(ourState)[0][0]

  convertedPoint = convertInputPosnToOurPosn(firstPenguinPos[0], firstPenguinPos[1])

  reachablePoints = getReachable(boardFromGameState(ourState), convertInputPosnToOurPosn(firstPenguinPos[0], firstPenguinPos[1]))

  if (reachablePoints.length == 0) {
    return false
  }
  else {

    // all translations :
    // inputState -> ourState
    // then makeMove
    // then ourState -> desiredState
  ogPlayers = players
  
  og_firstPlayerPosns = firstPlayer.places

  new_score = state.board[ogPlayers[0].places[0][0]][ogPlayers[0].places[0][1]]

  movedState  = getMovedState(playerId, ourState, convertedPoint, reachablePoints[0])

  resultMovedPosn = convertOurPosnToResultPosn(reachablePoints[0].row, reachablePoints[0].col)

  resultFirstPenguinPosns = [[resultMovedPosn.row, resultMovedPosn.col], ...(og_firstPlayerPosns).slice(1)]  

  ogPlayers[0].places = resultFirstPenguinPosns
  ogPlayers[0].score = ogPlayers[0].score + new_score

  finalBoard = convertResultBoard(ourBoardToResultBoard(boardFromGameState(movedState)))

  return {"players" : ogPlayers, "board" : addNumbersToPenguin(state.board, finalBoard) }
  }


}


// HELPERS FOR getOurMovedState
function getMovedState(id, state, fromPoint, toPoint) {
  return makeMove(id, fromPoint, toPoint, state);
}

// converts input posn to our posn representation
function convertInputPosnToOurPosn(r,c) {
  if(r % 2 == 0) {
  return {row:r/2, col: c + c }
  }
  else {
    return {row: (r - 1)/2, col: c + c + 1}
  }
}

// converts our posn representation to output posn
function convertOurPosnToResultPosn(r,c) {
  if(r % 2 == 0) {
  return {row:(r * 2) + 1, col: (c - 1)/2 }
  }
  else {
    return {row: r * 2 , col: c/2}
  }
}



// converts input players to our player representation
function inputPlayersToOurPlayers(players) {
  let uuid = 1;
  let ourPlayers = []

  for(let i = 0; i < players.length; i++) {
      let ourPlayer = [uuid, {color: players[i].color, score: players[i].score}]
      ourPlayers.push(ourPlayer)
      uuid = uuid + 1
  }
  
  return ourPlayers;
}

// converts numbers representation to appropriate tile representation
function convertNumToTiles(num) {
  if (num == 0) {
    return {kind: "usableSpace", occupiedBy: false}
  }
  else if(num > 0 && num < 6){
  return  { kind: "usableSpace", occupiedBy: { tileInfo: { size: 55, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: num } }}
  }
  else {
    return num
  }
}

// converts tile representation to appropriate number representation
function convertTilesToNum(tile) {
  if(tile.occupiedBy == false) {
    return 0;
  }
  else if(tile.occupiedBy.occupiedBy.kind == "fishes"){
    return tile.occupiedBy.occupiedBy.totalFishes
  }
  else {
    return "penguin"
  }
}


// creates a valid tile from given player data
function convertPlayerToTiles(player) {

  return  { kind: "usableSpace", occupiedBy: { tileInfo: { size: 55, maxElements: 5 }, occupiedBy: { kind: "penguin", color: player.color } }}
  
}

// adds valid penguin tile to board
function addPlayerToBoard(board, players) {

  for(let i = 0; i < players.length; i++) {
    for(let j = 0; j < players[i].places.length; j++) {
      let p_posn = players[i].places[j]
      board[p_posn[0]][p_posn[1]] = convertPlayerToTiles(players[i])
    }
  }
  return board;
}

// converts input board data to our data representation
function convertEntireBoard(board, players) {

  board = addPlayerToBoard(board, players)



  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      board[i][j] = convertNumToTiles(board[i][j])
    }
  }


  return board
}

// converts our tile data represention in board to desired output representation
function convertResultBoard(board) {


  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      board[i][j] = convertTilesToNum(board[i][j])
    }
  }

  return board
}

// replaces penguin tile with the score it would get once it moves
function addNumbersToPenguin(previousBoard, resultBoard) {
  for(let i = 0; i < resultBoard.length; i++) {
    for(let j = 0; j < resultBoard[0].length; j++) {
      if(resultBoard[i][j] == "penguin") {
        resultBoard[i][j] = previousBoard[i][j]
      }
    }
  }
  return resultBoard
}


// converts input gameState to our gameState representation
function inputGameStateToIntermediateGameState(state, board) {
  let players = state.players
  let ourBoard = inputBoardToIntermediateBoard(convertEntireBoard(board, players))
  let ourGameState = {  gameStage: "playing",  board: ourBoard ,nextMove: 1 , players: inputPlayersToOurPlayers(players) }

  return ourGameState

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
// Translate the our board to desired board. 
function ourBoardToResultBoard(ourBoard) {
  const totalRows = ourBoard.length;

  if(ourBoard[totalRows - 1][1].kind == 'unusableSpace') {
    return oddOurBoardToResultBoard(ourBoard);
  } else {
    return evenOurBoardToResultBoard(ourBoard);
  }
}

function evenOurBoardToResultBoard(board) {

  const totalRows = board.length
  const totalCols = board[0].length

  let finalBoard = []

  for(let i = 0; i < totalRows; i++) {
    let evenRow = []
    let oddRow = []
    for (let j = 0; j < totalCols; j++) {
      if(j % 2 == 0) {
        evenRow.push(board[i][j])
      }
      else {
        oddRow.push(board[i][j])
      }
    }
    finalBoard.push(evenRow)
    finalBoard.push(oddRow)
  }

  return finalBoard
}

function oddOurBoardToResultBoard(board) {

  const totalRows = board.length
  const totalCols = board[0].length

  let finalBoard = []

  for(let i = 0; i < totalRows; i++) {
    let evenRow = []
    let oddRow = []
    for (let j = 0; j < totalCols; j++) {
      if(j % 2 == 0) {
        evenRow.push(board[i][j])
      }
      else if(i < totalRows - 1){
        oddRow.push(board[i][j])
      }
    }
    finalBoard.push(evenRow)
    if(i < totalRows - 1){
    finalBoard.push(oddRow)
    }
  }

  return finalBoard
}



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
  for(let i = 0; i < inputBoard.length / 2; i++) {
    
    let j = i
    if(j != 0) {
      j = j * 2
    }
    let thisRow = inputBoard[j];
    let nextRow = inputBoard[j + 1];
    let interleavedRow = interleaveRows(thisRow, nextRow);
    resBoard.push(interleavedRow);
  } 
  return resBoard;
}

// InputBoard -> IntermediateBoard
// convert an InputBoard with odd rows to a IntermediateBoard
function oddInputBoardToIntermediateBoard(inputBoard) {
  let resBoard = [];
  for(let i = 0; i < (inputBoard.length - 1) / 2; i++) {
    let j = i
    if(j != 0) {
      j = j * 2
    }
    let thisRow = inputBoard[j];
    let nextRow = inputBoard[j + 1];
    let interleavedRow = interleaveRows(thisRow, nextRow);
    resBoard.push(interleavedRow);
  } 
  let lastRow = inputBoard[inputBoard.length - 1]
  resBoard.push(interleaveRows(lastRow, new Array(lastRow.length).fill({kind: 'unusableSpace'})))
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

//------------------------------------------- GAME-STATE-FUNCTIONS ----------------------------------------------------

//fromPosn toPosn GameState -> Boolean
// determine whether any player can move an avatar

function canMove(fromPosn, toPosn, gs) {

  let reachablePoints = getReachable(boardFromGameState(gs), fromPosn)
  const reachableStrings = reachablePoints.map(JSON.stringify)
  return reachableStrings.includes(JSON.stringify(toPosn))
}


// - - - - - - - - - - Neighbors and Paths - - - - - - - - - -
//
// Board BoardPosn -> BoardPosn[]
// gets board positions of all valid moves
function getReachable (board, boardPosn) {
  
  let paths = getPaths(board, boardPosn)
  return [ 
      ...paths.north,
      ...paths.northEast,
      ...paths.southEast,
      ...paths.south,
      ...paths.southWest,
      ...paths.northWest,
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
  if (!isNeighborUnreachable(board, next)) {
      res.push(next);
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

// ----------------------------- state functions ----------------------------------------------------------------


// [GameState][]
// Contains all the gameStates 
let all_game_states = []


//  Posn GameState -> GameState
// make a hole on a valid tile 

function makeAHole(posn, gs) {



    const res = makeGameState(gameStageFromGameState(gs),
        makeBoardWithSpecs(boardFromGameState(gs), noOfFish, placePenguin, makeHole, [
            ["hole", [
                [posn[0],posn[1]]
            ]]]),
        nextMoveFromGameState(gs), playersFromGameState(gs))

  


    return res;

}




// UUID Players -> PenguinColor
// gets the penguin color attached to the given UUID
function getPenguinColorFromUUID(UUID, players) {


    let player = getPenguinFromID(UUID, players)

    return penguinColorFromPlayer(player[1])
}



// UUID Players -> [UUID, PlayerInfo]
// gets the player data attached to the given UUID
function getPenguinFromID(UUID, players) {

    let player = []

    for (let i = 0; i < players.length; i++) {
        if (players[i][0] == UUID) {
            player = players[i]
        }
    }

    return player;


}

// UUID fromPosn toPosn GameState -> GameState
// move an existing avatar from one spot to another on behalf of the player;

function makeMove(UUID, fromPosn, toPosn, gs) {


    if (canMove(fromPosn, toPosn, gs)) {
        const res = makeGameState("playing", makeBoardWithSpecs(boardFromGameState(gs), noOfFish, placePenguin, makeHole, [
            ["penguin", [
                [[toPosn.row, toPosn.col], getPenguinColorFromUUID(UUID, playersFromGameState(gs))]
            ]],
            ["hole", [
                [fromPosn.row, fromPosn.col]
            ]]
        ]),
            getNextPlayer(UUID, gs),

            playersFromGameState(gs))


        return res;
    }

}


// UUID fromPosn toPosn GameState -> Boolean
// determine whether any player can move an avatar

function canMove(fromPosn, toPosn, gs) {

    let reachablePoints = getReachable(boardFromGameState(gs), fromPosn)
    const reachableStrings = reachablePoints.map(JSON.stringify)
    return reachableStrings.includes(JSON.stringify(toPosn))
}

// UUID GameState -> NextMove
// gets the NextMove of the gameState
function getNextPlayer(currentPlayer, gs) {
    if (isGameOn(gs)) {

        return getNextUUID(currentPlayer, gs)

    }
    else {
        return false;
    }
}

function getPlayerPosn(UUID, gs) {

    return getPenguinPositions(UUID, gs)

}

// UUID GameState -> UUID
// gets the id of the player whose turn is next
// ASSUMPTION: game is not over
function getNextUUID(currentPlayer, gs) {

    players = playersFromGameState(gs)


    for (let i = 0; i < players.length; i++) {

        if (players[i][0] == currentPlayer) {

            if (i < players.length - 1) {

                if (penguinHasMoves(players[i + 1][0], gs)) {
                    return players[i + 1][0];
                }
                else {
                    return getNextUUID(players[i + 1][0], gs)
                }
            }
        
            else {

                if (penguinHasMoves(players[0][0], gs)) {
                    return players[0][0];
                    
                }
                else {
                    return getNextUUID(players[0][0], gs)
                }
                
            }
        }
    }
}

// UUID GameState -> Boolean
// checks if given user has moves left
function penguinHasMoves(UUID, gs) {

    const penguinPosns = getPenguinPositions(UUID, gs)

    allReachablePoints = []

    penguinPosns.forEach(p => {
        allReachablePoints.push(getReachable(boardFromGameState(gs), p))
    })


    return allReachablePoints[0].length > 0

}

// UUID GameState -> [{ row: x, col: y }][]
// gets the current positions of a given player's penguins
function getPenguinPositions(UUID, gs) {

    let posns = []

    const color = getPenguinColorFromUUID(UUID, playersFromGameState(gs))

    for (let i = 0; i < boardFromGameState(gs).length; i++) {
        for (let j = 0; j < boardFromGameState(gs)[0].length; j++) {
            if (isUsableSpace(boardFromGameState(gs)[i][j]) && isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(boardFromGameState(gs)[i][j])))) {
                if (penguinColorFromPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(boardFromGameState(gs)[i][j]))) === color) {
                    posns.push({ row: i, col: j })
                }
            }
        }
    }

    return posns;
}

// GameState -> Boolean
// checks if given gameState has valid moves left
function isGameOn(gs) {

    const penguinPosns = getAllPenguinPositions(gs)

    allReachablePoints = []

    penguinPosns.forEach(p => {
        allReachablePoints.push(getReachable(boardFromGameState(gs), p))
    })

    return allReachablePoints.length > 1 || allReachablePoints[0].length > 1

}

// GameState -> [{ row: x, col: y }][]
// gets positions for all the players' penguins'
function getAllPenguinPositions(gs) {

    let posns = []

    for (let i = 0; i < boardFromGameState(gs).length; i++) {
        for (let j = 0; j < boardFromGameState(gs)[0].length; j++) {
            if (isUsableSpace(boardFromGameState(gs)[i][j]) && isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(boardFromGameState(gs)[i][j])))) {

                posns.push({ row: i, col: j })

            }
        }
    }

    return posns;
}




// GameState -> PenguinColor
// returns a PenguinColor that has not yet been assigned to any player
function getUnusedColor(gameState) {

    let availableColors = ["red", "black", "brown", "white"]

    for (let i = 0; i < playersFromGameState(gameState).length; i++) {
        let ci = availableColors.indexOf(playersFromGameState(gameState)[i][1].color)
        availableColors.splice(ci, 1)
    }

    const res = availableColors[Math.floor(Math.random(availableColors.length))]


    return makePenguinColor(res);
}

// ----------------------------------- board specs -----------------------------------------------------------------

// configures board specifications
function getBoardSpecs(board) {
 

  /*board = noOfFish(board, 1, 2, 5)
  board = noOfFish(board, 1, 1, 4)
  board = noOfFish(board, 0, 2, 2)
  board = noOfFish(board, 0, 1, 5)
  //board = noOfFish(board, 1, 3, 3)
  board = makeHole(board, 1, 3)
  board = placePenguin(board, 0, 0, 'black')
  board = placePenguin(board, 1, 0, 'red')
  board = placePenguin(board, 0, 3, 'brown')
  board = placePenguin(board, 1, 5, 'white')
  board = addBoardHolesMinFish(board, 3, [[1, 1], [1, 4]])*/
}

// Board Number Number -> Board
// creates a hole in the board (no tile)
function makeHole(board, row, col) {
  if (isUsableSpace(getSpaceFromBoard(board, row, col))) {

      board[row][col] = makeUsableSpace(false);
  }
  return board;
}

// Board Number Number -> boolean
// checks if a hole can be made in given positon
function canMakeHole(board, row, col) {
  return (isUsableSpace(getSpaceFromBoard(board, row, col))) && !isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(getSpaceFromBoard(board, row, col)))) 
}

// Board Number Number, Number -> Board
// places n amount of fish on board[x][y]
function noOfFish(board, row, col, n) {


  let val = getSpaceFromBoard(board, row, col)

  if (isUsableSpace(val) && isTile(spaceIsOccupiedBy(val)) && isFishes(tileIsOccupiedBy(spaceIsOccupiedBy(val)))
      && n <= maxElementsFromTileInfo(tileInfoFromTile(spaceIsOccupiedBy(val)))) {

      board[row][col] = makeUsableSpace(makeGameTile(makeTileInfo(DEFAULT_SIZE, 5), makeFishes(n)));
  }
  return board;
}

// Board Number Number, Number -> boolean
// checks if given no. of fish can be placed at given posn
function canPlaceFish(board, row, col, n) {


  let val = getSpaceFromBoard(board, row, col)

  return (isUsableSpace(val) && isTile(spaceIsOccupiedBy(val)) && isFishes(tileIsOccupiedBy(spaceIsOccupiedBy(val)))
      && n <= maxElementsFromTileInfo(tileInfoFromTile(spaceIsOccupiedBy(val)))) 

    
}



// Board Number Number, String -> Board
// places penguin of given color on board[x][y]
function placePenguin(board, row, col, color) {

  let val = getSpaceFromBoard(board, row, col)

  if (isUsableSpace(val) && isTile(spaceIsOccupiedBy(val)) && !isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(val))) ) {

      board[row][col] = makeUsableSpace(makeGameTile(makeTileInfo(DEFAULT_SIZE, 1), makePenguin(color)));

  }
  return board;
}

// Board Number Number -> boolean
// can a penguin be placed at given posn
function canPlacePenguin(board, row, col) {

  let val = getSpaceFromBoard(board, row, col)

   return (isUsableSpace(val) && isTile(spaceIsOccupiedBy(val)) && !isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(val))) ) 

      
}



//ASSUMPTIONS: 
// -> Total positions - hposns is >= fishes
// -> fishes is a natural number
// creates holes in board at given positions
// and adds specified min-number of 1-fish tiles
function addBoardHolesMinFish(board, fishes, hposns) {

  // changes value of tile to represent a hole
  for (let hposn = 0; hposn < hposns.length; hposn++) {
      let [bcol, brow] = [hposns[hposn][1], hposns[hposn][0]]
      makeHole(board, brow, bcol)
  }

  // add 1-fish tiles only if board
  // does not meet min requirement

  if (!hasMinFish(board, fishes)) {

      // gets list of changeable points
      changeablePoints = getChangablePoints(board)

      // shuffles array containing changeable points
      const shuffled = [...changeablePoints].sort(() => 0.5 - Math.random());

      // Get sub-array of first n elements after shuffled to meet requirements
      // of min 1-fish tiles
      let selected = shuffled.slice(0, fishes - countOneFishTiles(board));

      for (let i = 0; i < selected.length; i++) {

          srow = selected[i][0]
          scol = selected[i][1]

          board[srow][scol] = makeUsableSpace(makeGameTile(makeTileInfo(DEFAULT_SIZE, 5), makeFishes(1)));
      }
  }

  return board;
}

// checks whether board has min no of 1-fish tiles
function hasMinFish(board, fishes) {
  return countOneFishTiles(board) >= fishes;
}

// counts the number of 1-fish tiles
function countOneFishTiles(board) {
  fcount = 0;
  for (let i = 0; i < totalRowsInBoard(board); i++) {
      for (let j = 0; j < totalColsInBoard(board); j++) {
          val = getSpaceFromBoard(board, i, j)
          if (isUsableSpace(val) && isTile(spaceIsOccupiedBy(val)) &&
              isFishes(tileIsOccupiedBy(spaceIsOccupiedBy(val)))) {

              if (totalFishesFromFishes(tileIsOccupiedBy(spaceIsOccupiedBy(val))) === 1) {

                  fcount = fcount + 1;
              }
          }
      }
  }
  return fcount;
}

// Board -> BoardPosn[]
// retrieves board positions of all changeable tiles
function getChangablePoints(board) {
  let res = []
  for (let row = 0; row < totalRowsInBoard(board); row++) {
      for (let col = 0; col < totalColsInBoard(board); col++) {

          if (isChangeableState(getSpaceFromBoard(board, row, col))) {
              res.push([row, col])
          }
      }
  }
  return res;
}

// checks whether given value is a changeable tile
// a Changeable tile is one of:
// - PlayerColor
// - Positive integer > 1
// (we do not have to change 1)
function isChangeableState(p) {
  return isUsableSpace(p) && isTile(spaceIsOccupiedBy(p)) && isFishes(tileIsOccupiedBy(spaceIsOccupiedBy(p)))
      && totalFishesFromFishes(tileIsOccupiedBy(spaceIsOccupiedBy(p))) > 1;

}









main();



