// Data Definition
// ---------------
// 
// Board = (UsableSpace | UnusableSpace)[][]
// 
// UsableSpace = { kind: "usableSpace", occupied_by: Tile | false}
// UnusableSpace = { kind: "unusableSpace" }
// 
// Tile = { tile_info: TileInfo, occupied_by: Fishes | Penguin | false}
// 
// TileInfo = { size: ℕ, max_elements: ℕ }
// 
// Fishes =  { kind: "fishes", totalFishes: ℤ+ }
// Penguin = { kind: "penguin", color: PenguinColor }
// 
// PenguinColor = "red" | "brown" | "black" | "white"
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
// Predicates
// ----------
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
// Any -> Boolean
function isPenguinColor(a) { // testing done
  return typeof isStr(a) && (a === "red" || a === "brown" || a === "black" || a === "white");
}
// Any -> Boolean
// is `a` a Penguin?
function isPenguin(a) { // testing done
  return isObj(a) &&
    (Object.keys(a).length === 2) &&
    a.hasOwnProperty("kind") &&
    a.hasOwnProperty("color") &&
    isStr(a.kind) &&
    a.kind === "penguin" &&
    isPenguinColor(a.color);
}
// Any -> Boolean
// is `a` a Fishes?
function isFishes(a) { // testing done
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
// is `a` a TileInfo?
function isTileInfo(a) { // testing done
  return isObj(a) &&
         Object.keys(a).length === 2 &&
         a.hasOwnProperty("size") &&
         a.hasOwnProperty("max_elements") &&
         isNum(a.size) &&
         isNumInt(a.size) &&
         a.size >= 0 &&
         isNum(a.max_elements) &&
         isNumInt(a.max_elements) &&
         a.max_elements >= 0
}
// Any -> Boolean
// is `a` a GameTile?
function isTile(a) {
  return isObj(a) &&
         Object.keys(a).length === 2 &&
         a.hasOwnProperty("tile_info") &&
         a.hasOwnProperty("occupied_by") &&
         isTileInfo(a.tile_info) &&
         (isFalse(a.occupied_by) || isFishes(a.occupied_by) || isPenguin(a.occupied_by))
}
// Any -> Boolean
// is `a` an UsableSpace?
function isUsableSpace(a) {
  return isObj(a) &&
         Object.keys(a).length === 2 &&
         a.hasOwnProperty("kind") &&
         a.hasOwnProperty("occupied_by") &&
         isStr(a.kind) &&
         a.kind === "usableSpace" &&
         (isFalse(a.occupied_by) || isTile(a.occupied_by));
}
// Any -> Boolean
// is `a` a n UnusableSpace?
function isUnusableSpace(a) { // testing done
  return  isObj(a) &&
          Object.keys(a).length === 1 &&
          a.hasOwnProperty("kind") &&
          isStr(a.kind) &&
          a.kind === "unusableSpace";
}
// 
// Constructors
// ------------
//
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
// PenguinColor -> Penguin
// Makes a Penguin from a PenguinColor.
function makePenguin(penguinColor) {
  const res = {kind:"penguin", color: penguin_color};
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
function makeTileInfo(size, max_elements) {
  const res = { size: size, max_elements: max_elements };
  if(isTileInfo(res)) {
    return res;
  } else { 
    console.error("can't make TileInfo");
  }
}
// TileInfo (Fishes | Penguin | false) -> Tile
// Makes a Tile either has Fishes or Penguin or nothing (false).
function makeGameTile(tile_info, occupied_by) {
  const res = {tile_info: tile_info, occupied_by: occupied_by};
  if(isTile(res)) {
    return res;
  } else { 
    console.error("can't make GameTile");
  }
}
// Tile | false -> UsableSpace
// Make a UsableSpace with either a Tile on it or nothing (false).
function makeUsableSpace(occupied_by) {
  const res = { kind: "usableSpace", occupied_by: occupied_by};
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
//
// Selectors
// ---------
// 
// Board -> Number
// 
function totalRowsInBoard(board) {
  return board.length;
}
// Board -> Number
// 
function totalColsInBoard(board) {
  return board[0].length;
}
// Board Number Number -> UsableSpace | UnusableSpace
// Get the space on (row, col) on the board. 
function getSpaceFromBoard(board, row, col) {
  return board[row][col];
}
// Tile -> TileInfo
// Get the tile info from a Tile.
function tileInfoFromTile(tile) {
  return tile.tile_info;
}
// Tile -> Fishes | Penguin | false
// Get what the Tile is occupied by.
function tileIsOccupiedBy(tile) {
  return tile.occupied_by;
}
// TileInfo -> ℕ
// Get the size in the tileInfo
function sizeFromTileInfo(tileInfo) {
  return tileInfo.size
}
// Tile -> ℕ
// Get the max elements in the tileInfo
function maxElementsFromTileInfo(tileInfo) {
  return tileInfo.max_elements
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
// 
// Templates
// ---------
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
  const occupied_by = usableSpace.occupied_by
  if(isFalse(occupied_by)) {
    // ...
  } else if(isTile(occupied_by)) {
    tileTemplate(occupied_by);
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
  const tile_info = tile.tile_info;
  const occupied_by = tile.occupied_by;

  // ...
  tileTemplate(tile_info);
  // ...
  if(isFalse(occupied_by)) {

  } else if(isFishes(occupied_by)) {
    // ...
    fishesTemplate(occupied_by)
    // ...
  } else if(isPenguin(occupied_by)) {
    // ...
    penguinTemplate(occupied_by)
    // ...
  }
}
// TileInfo -> ...
// Template for a TileInfo.
function tileInfoTemplate(tileInfo) {
  console.assert(isTileInfo(tileInfo));
  const size = tileInfo.size;
  const max_elements = tileInfo.max_elements;
  // ...
  size
  // ...
  max_elements
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
