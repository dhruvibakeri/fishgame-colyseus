// Data Definition
// ---------------
// 
// GameState = { 
//   gameStage: GameStage, 
//   board: Board | false,
//   nextMove: UUID | false,
//   players: Player[]
// }
export type GameState = {
  gameStage: GameStage,
  board: Board | false,
  nextMove: UUID | false,
  players: Player[]
}
// TODO: Change UUID to color, and the 
// Solution:
// -- keep track of UUID -> Color in the backend.


// 
// UUID = string;
export type UUID = string;
// Players = [UUID, PlayerInfo][]
export type Player = [UUID, PlayerInfo][];
// PlayerInfo = { color: PenguinColor, score: ℕ }
export type PlayerInfo = { color: PenguinColor, score: number };
// GameStage = ("joining" | "placing" | "playing" | "done");
export type GameStage = ("joining" | "placing" | "playing" | "done");
// 
// Board = (UsableSpace | UnusableSpace)[][]
export type Board = (UsableSpace | UnusableSpace)[][]
// 
// UsableSpace = { kind: "usableSpace", occupiedBy: Tile | false}
export type UsableSpace = { kind: "usableSpace", occupiedBy: Tile | false };
// UnusableSpace = { kind: "unusableSpace" }
export type UnusableSpace = { kind: "unusableSpace" }
// 
// Tile = { tileInfo: TileInfo, occupiedBy: Fishes | Penguin | false}
export type Tile = { tileInfo: TileInfo, occupiedBy: Fishes | Penguin | false };
// 
// TileInfo = { size: ℕ, maxElements: ℕ }
export type TileInfo = { size: number, maxElements: number };
// 
// Fishes =  { kind: "fishes", totalFishes: ℤ+ }
export type Fishes = { kind: "fishes", totalFishes: number };
// Penguin = { kind: "penguin", color: PenguinColor }
export type Penguin = { kind: "penguin", color: PenguinColor };
// 
// PenguinColor = ("red" | "brown" | "black" | "white")
export type PenguinColor = ("red" | "brown" | "black" | "white");
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
export function isGameState(a: any): boolean {
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
export function isGameBoard(a: any): boolean {
  return isBoard(a) || isFalse(a);
}

// Any -> Boolean
// is `a` a nextMove
export function isNextMove(a: any): boolean {
  return isUUID(a) || isFalse(a);
}

// Any -> Boolean
// is `a` a Players?
export function isPlayers(a: any): boolean {
  if (Array.isArray(a)) {
    let allValid = true
    for (let i = 0; i < a.length; i++) {
      let elem = a[i];
      if (Array.isArray(elem) && elem.length === 2) {
        if (!isUUID(elem[0]) || !isPlayerInfo(elem[1])) {
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

export function isUUID(a: any): boolean {
  return isNum(a) && isNumInt(a);
}
// 
// Any -> Boolean
// is `a` a PlayerInfo?
export function isPlayerInfo(a: any): boolean {
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
export function isGameStage(a: any): boolean {
  return typeof isStr(a)
    && (a === "joining" || a === "placing" || a === "playing" || a === "done");
}
// Any -> Boolean
// is `a` a Board?
export function isBoard(a: any): boolean {
  if (Array.isArray(a)) {
    let allSpaces = true
    for (let rowIdx = 0; rowIdx < a.length; rowIdx++) {
      let currentRow = a[rowIdx];
      // The following run-time checks could be added but will lead to a performance hit:
      // the inner row should also be an array
      // make sure there is at least one row
      // make sure there are even cols
      // make sure all cols are of the same lenght
      for (let colIdx = 0; colIdx < currentRow.length; colIdx++) {
        let currentSpace = currentRow[colIdx];
        if (!isUsableSpace(currentSpace) && !isUnusableSpace(currentSpace)) {
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
export function isUsableSpace(a: any): boolean {
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
export function isUnusableSpace(a: any): a is UnusableSpace {
  return isObj(a) &&
    Object.keys(a).length === 1 &&
    a.hasOwnProperty("kind") &&
    isStr(a.kind) &&
    a.kind === "unusableSpace";
}
// Any -> Boolean
// is `a` a GameTile?
export function isTile(a: any): a is Tile {
  return isObj(a) &&
    Object.keys(a).length === 2 &&
    a.hasOwnProperty("tileInfo") &&
    a.hasOwnProperty("occupiedBy") &&
    isTileInfo(a.tileInfo) &&
    (isFalse(a.occupiedBy) || isFishes(a.occupiedBy) || isPenguin(a.occupiedBy))
}
// Any -> Boolean
// is `a` a TileInfo?
export function isTileInfo(a: any): a is TileInfo {
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
export function isFishes(a: any): a is Fishes {
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
export function isPenguin(a: any): a is Penguin {
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
export function isPenguinColor(a: any): a is PenguinColor {
  return typeof isStr(a) && (a === "red" || a === "brown" || a === "black" || a === "white");
}
//
// --------------------------------------- Predicate Helpers -------------------------------------------------------------
// 
// Number -> Boolean
// is the number `n` an integer?
export function isNumInt(n: number): n is number {
  return n % 1 === 0
}
// Any -> Boolean
// Does `a` have the type string?
export function isStr(a: any): a is string {
  return typeof a === "string";
}
// Any -> Boolean
// is `a` false?
export function isFalse(a: any): a is false {
  return typeof a === "boolean" && a === false;
}
// Any -> Boolean
// does `a` have the type number?
export function isNum(a: any): a is number {
  return typeof a === "number";
}
// Any -> Boolean
// does `a` have the type object (and is not null)?
export function isObj(a: any): a is Object {
  return typeof a === "object" && a !== null;
}

// --------------------------------------- Constructors -------------------------------------------------------------

// gameStage board nextMove players -> gameState
// make a gameState
export function makeGameState(
  gameStage: GameStage,
  maybeBoard: Board | false,
  nextMove: UUID | false,
  players: Player[]
): GameState {
  const res = {
    gameStage: gameStage,
    board: maybeBoard,
    nextMove: nextMove,
    players: players
  };
  if (isGameState(res)) {
    return res;
  } else {
    console.error("can't make gameState");
  }

}

// String -> gameStage
// makes a gameStage
export function makeGameStage(gameStage: GameStage): GameStage {
  const res = gameStage;
  if (isGameStage(res)) {
    return res;
  } else {
    throw Error("can't make GameStage")
  }
}

export function duplicateBoard(board: Board): Board {
  var newArray = board.map(b => b.slice());
  return newArray

}
// objSpecs = ["fish" | "hole" | "penguin", [posn][]][]

export function makeBoardWithSpecs(board, addFish, addPenguin, addHole, objSpecs) {

  let newBoard = duplicateBoard(board)


  objSpecs.forEach(o => {
    if (o[0] === "fish") {
      o[1].forEach(f => {
        addFish(newBoard, f[0][0], f[0][1], f[1])
      });
    }

    else if (o[0] === "penguin") {

      o[1].forEach(p => {
        addPenguin(newBoard, p[0][0], p[0][1], p[1])
      });
    }

    else if (o[0] === "hole") {
      o[1].forEach(h => {
        addHole(newBoard, h[0], h[1])
      });
    }
  });


  const res = newBoard;

  if (isBoard(res)) {
    return newBoard;
  }

  else {
    console.error("can't make board");
  }
}




// UUID | False -> nextMove
// makes a nextMove
export function makeNextMove(playerUUID: UUID | false): UUID | false {
  const res = playerUUID;
  if (isNextMove(res)) {
    return res;
  } else {
    throw Error("can't make nextMove");
  }
}


// Player[] -> Player[]
// make a `Players`
export function makePlayers(players: Player[]): Player[] {
  const res = players;
  if (isPlayers(res)) {
    return res;
  } else {
    throw Error("can't make Players");
  }
}

// Integer -> UUID
// makes a `UUID`
export function makeUUID(UUID: UUID): UUID {
  const res = UUID;
  if (isUUID(res)) {
    return res;
  } else {
    throw Error("can't make UUID")
  }
}

// String Integer -> PlayerInfo
// makes a `PlayerInfo `
export function makePlayerInfo(color, score) {
  const res = { color: makePenguinColor(color), score: score };
  if (isPlayerInfo(res)) {
    return res;
  } else {
    throw Error("can't make PlayerInfo");
  }

}

// String -> PenguinColor
// Make a PenguinColor.
export function makePenguinColor(color) {
  const res = color;
  if (isPenguinColor(res)) {
    return res;
  } else {
    throw Error("can't make PenguinColor");
  }
}
//
// --- 
// 
// PenguinColor -> Penguin
// Makes a Penguin from a PenguinColor.
export function makePenguin(penguinColor) {
  const res = { kind: "penguin", color: penguinColor };
  if (isPenguin(res)) {
    return res;
  } else {
    throw Error("can't make Penguin");
  }
}
// ℤ+ -> Fishes
// Makes a Fishes from the total number of fishes.
export function makeFishes(totalFishes) {
  const res = { kind: "fishes", totalFishes: totalFishes };
  if (isFishes(res)) {
    return res;
  } else {
    throw Error("can't make Fishes");
  }
}
// ℕ ℕ -> TileInfo
// Makes a TileInfo from the its size an max elements it can have.
export function makeTileInfo(size, maxElements) {
  const res = { size: size, maxElements: maxElements };
  if (isTileInfo(res)) {
    return res;
  } else {
    throw Error("can't make TileInfo");
  }
}
// TileInfo (Fishes | Penguin | false) -> Tile
// Makes a Tile either has Fishes or Penguin or nothing (false).
export function makeGameTile(tileInfo, occupiedBy) {
  const res = { tileInfo: tileInfo, occupiedBy: occupiedBy };
  if (isTile(res)) {
    return res;
  } else {
    throw Error("can't make GameTile");
  }
}
// Tile | false -> UsableSpace
// Make a UsableSpace with either a Tile on it or nothing (false).
export function makeUsableSpace(occupiedBy: Tile | false): UsableSpace {
  const res: UsableSpace = { kind: "usableSpace", occupiedBy: occupiedBy };
  if (isUsableSpace(res)) {
    return res;
  } else {
    throw Error("can't make UsableSpace");
  }
}
// -> UnusableSpace
// Make an UnusableSpace.
export function makeUnusableSpace(): UnusableSpace {
  const res: UnusableSpace = { kind: "unusableSpace" };
  if (isUnusableSpace(res)) {
    return res;
  } else {
    throw Error("can't make UnusableSpace");
  }
}

// --------------------------------------- Selectors -----------------------------------------------------------------
// 
// Board -> Number
// Total rows in a Board.
export function totalRowsInBoard(board: Board): number {
  return board.length;
}
// Board -> Number
// Total columns in the first row of a Board. 
export function totalColsInBoard(board: Board): number {
  return board[0].length;
}

export function getSpaceRowFromBoard(
  board: Board,
  rowNumber: number
): (UnusableSpace | UsableSpace)[] {
  return board[rowNumber];
}

export function getSpaceFromSpaceRow(
  spaceRow: (UsableSpace | UnusableSpace)[],
  spaceIdx: number
): (UnusableSpace | UsableSpace) {
  return spaceRow[spaceIdx];
}

// Board Number Number -> UsableSpace | UnusableSpace
// Get the space on (row, col) on the board. 
export function getSpaceFromBoard(
  board: Board,
  row: number,
  col: number): (UsableSpace | UnusableSpace) {
  return getSpaceFromSpaceRow(getSpaceRowFromBoard(board, row), col);
}


export function totalSpacesInRow(
  spaceRow: (UsableSpace | UnusableSpace)[]
): number {
  return spaceRow.length;
}


// gets the occupiedBy from a UsableSpace. 
export function spaceIsOccupiedBy(space: UsableSpace): false | Tile {
  return space.occupiedBy;
}

// Tile -> TileInfo
// Get the tile info from a Tile.
export function tileInfoFromTile(tile: Tile): TileInfo {
  return tile.tileInfo;
}
// Tile -> Fishes | Penguin | false
// Get what the Tile is occupied by.
export function tileIsOccupiedBy(tile: Tile): Fishes | Penguin | false {
  return tile.occupiedBy;
}
// TileInfo -> ℕ
// Get the size in the tileInfo
export function sizeFromTileInfo(tileInfo: TileInfo): number {
  return tileInfo.size
}
// TileInfo -> ℕ
// Get the max elements in the tileInfo
export function maxElementsFromTileInfo(tileInfo: TileInfo): number {
  return tileInfo.maxElements;
}
// Fishes -> ℤ+
// Get the total fishes from Fishes
export function totalFishesFromFishes(fishes: Fishes): number {
  return fishes.totalFishes;
}
// Penguin -> PenguinColor
// Get the color of a Penguin.
export function penguinColorFromPenguin(penguin: Penguin): PenguinColor {
  return penguin.color
}

// GameState -> GameStage
// get the stage of the game state
export function gameStageFromGameState(gameState: GameState): GameStage {
  return gameState.gameStage;
}

// GameState -> Board
// get the board of the game state
export function boardFromGameState(gameState: GameState): Board | false {
  return gameState.board;
}

// GameState -> nextMove
// get the nextMove of the game state
export function nextMoveFromGameState(gameState: GameState): UUID | false {
  return gameState.nextMove;
}

// GameState -> players
// get the players of the gameState
export function playersFromGameState(gameState: GameState): Player[] {
  return gameState.players;
}

// PlayerInfo -> PenguinColor
// gets the assigned color of the player
export function penguinColorFromPlayer(playerInfo: PlayerInfo): PenguinColor {
  return playerInfo.color;
}

// PlayerInfo -> number
// gets the score of the player
export function scoreFromPlayer(playerInfo: PlayerInfo): number {
  return playerInfo.score;
}
// 
//----------------------------------------------------Templates---------------------------------------------------------
//
// Board -> ...
// Template for a Board.
export function boardTemplate(board: Board): void {
  for (let row = 0; row < totalRowsInBoard(board); row = row + 1) {
    let currentRow: (UsableSpace | UnusableSpace)[] = board[row];
    for (let col = 0; col = totalSpacesInRow(currentRow); col = col + 1) {
      let currentSpace: (UsableSpace | UnusableSpace) = getSpaceFromSpaceRow(currentRow, col);
      if (isUnusableSpace(currentSpace)) {
        let unusableSpace: UnusableSpace = currentSpace;
        // ...
        unusableSpaceTemplate(unusableSpace)
        // ...
      } else if (isUsableSpace(currentSpace)) {
        let usableSpace: UsableSpace = currentSpace;
        // ...
        usableSpaceTemplate(usableSpace);
        // ...
      }
    }
  }
}
// UsableSpace -> ...
// Template for a UsableSpace.
export function usableSpaceTemplate(usableSpace: UsableSpace): void {
  console.assert(isUsableSpace(usableSpace));
  const occupiedBy = spaceIsOccupiedBy(usableSpace)
  if (isFalse(occupiedBy)) {
    let falseTile = occupiedBy;
    console.log(falseTile);
  } else if (isTile(occupiedBy)) {
    tileTemplate(occupiedBy);
  }
}
// UnusableSpace -> ...
// Template for a UnusableSpace.
export function unusableSpaceTemplate(unusableSpace) {
  console.assert(isUnusableSpace(unusableSpace))
  // ...
}
// Tile -> ...
// Template for a Tile.
export function tileTemplate(tile) {
  console.assert(isTile(tile));
  const tileInfo: TileInfo = tileInfoFromTile(tile);
  const occupiedBy: (false | Fishes | Penguin) = tileIsOccupiedBy(tile);

  // ...
  tileTemplate(tileInfo);
  // ...
  if (isFalse(occupiedBy)) {
    const falseOnTile: false = occupiedBy;
    console.log(falseOnTile)
  } else if (isFishes(occupiedBy)) {
    const fishesOnTile: Fishes = occupiedBy;
    // ...
    fishesTemplate(fishesOnTile)
    // ...
  } else if (isPenguin(occupiedBy)) {
    const penguinOnTile: Penguin = occupiedBy
    // ...
    penguinTemplate(penguinOnTile)
    // ...
  }
}
// TileInfo -> ...
// Template for a TileInfo.
export function tileInfoTemplate(tileInfo: TileInfo): void {
  console.assert(isTileInfo(tileInfo));
  const size: number = sizeFromTileInfo(tileInfo);
  const maxElements: number = maxElementsFromTileInfo(tileInfo);
  // ...
  console.log(size)
  // ...
  console.log(maxElements)
  // ...
}
// Fishes -> ...
// Template for a Fishes.
export function fishesTemplate(fishes: Fishes): void {
  console.assert(isFishes(fishes));
  const totalFishes: number = totalFishesFromFishes(fishes);
  // ...
  console.log(totalFishes)
  // ...
}
// Penguin -> ...
// Template for a Penguin.
export function penguinTemplate(penguin: Penguin): void {
  console.assert(isPenguin(penguin));
  const penguinColor: PenguinColor = penguinColorFromPenguin(penguin)
  // ...
  penguinColorTemplate(penguinColor);
  // ...
}
// PenguinColor -> ...
// Template for a PenguinColor.
export function penguinColorTemplate(penguinColor: PenguinColor): void {
  console.assert(isPenguinColor(penguinColor));
  if (penguinColor === "red") {
    // ...
    penguinColor
    // ...
  } else if (penguinColor === "brown") {
    // ...
    penguinColor
    // ...
  } else if (penguinColor === "black") {
    // ...
    penguinColor
    // ...
  } else if (penguinColor === "white") {
    // ...
    penguinColor
    // ...
  }
}


export type PathDirections = {
  north: BoardPosn[];
  south: BoardPosn[]
  northWest: BoardPosn[]
  northEast: BoardPosn[]
  southWest: BoardPosn[]
  southEast: BoardPosn[]
}

export type BoardPosn = {
  row: any;
  col: any;
};