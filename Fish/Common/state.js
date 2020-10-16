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
function makeFishes(totalFishes) {
  const res = {kind:"fishes",totalFishes:totalFishes};
  if(isFishes(res)) {
    return res;
  } else { 
    console.error("can't make Fishes");
  }
}
// ℕ ℕ -> TileInfo
// Makes a TileInfo from the its size an max elements it can have.
function makeTileInfo(size, maxElements) {
  const res = { size: size, maxElements: maxElements };
  if(isTileInfo(res)) {
    return res;
  } else { 
    console.error("can't make TileInfo");
  }
}
// TileInfo (Fishes | Penguin | false) -> Tile
// Makes a Tile either has Fishes or Penguin or nothing (false).
function makeGameTile(tileInfo, occupiedBy) {
  const res = {tileInfo: tileInfo, occupiedBy: occupiedBy};
  if(isTile(res)) {
    return res;
  } else { 
    console.error("can't make GameTile");
  }
}
// Tile | false -> UsableSpace
// Make a UsableSpace with either a Tile on it or nothing (false).
function makeUsableSpace(occupiedBy) {
  const res = { kind: "usableSpace", occupiedBy: occupiedBy};
  if(isUsableSpace(res)) {
    return res;
  } else { 
    console.error("can't make UsableSpace");
  }
}
// -> UnusableSpace
// Make an UnusableSpace.
function makeUnusableSpace() {
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
