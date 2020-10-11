// Data Definition
// ---------------
// 
// Board<T> is (UsableSpace<T> | UnusableSpace)[]
// 
// UsableSpace<T> is a { kind: "usableSpace", occupied_by: T | false}
// UnusableSpace is a { kind: "unusableSpace" }
// 
// Tile<T> = { tile_info: TileInfo, occupied_by: T | false}
// 
// TileInfo = { size: ℕ, max_elements: ℕ }
// 
// FishBoard = Board<GameTile>
// 
// GameTile = Tile<Fishes | Penguin>
// 
// Fishes =  { kind: "fishes", totalFishes: ℤ+ }
// Penguin = { kind: "penguin", color: PenguinColor }
// 
// PenguinColor = "red" | "brown" | "black" | "white"
//
// ----------------------------------------------------------------------------

// - - - - - - - - - - Predicates - - - - - - - - - - 

// polyfill to get the entries of an object 
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#Polyfill
if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}
// Number -> Boolean
// is the number n an integer?
function isNumInt(n) {
  return n % 1 === 0
}
// Any -> Boolean
// Does a have the type string?
function isStr(a) {
  return typeof a === "string";
}
// Any -> Boolean
// does a have the type number?
function isNum(a) {
  return typeof a === "number";
}
// Any -> Boolean
// Does a have the type boolean?
function isBool(a) {
  return typeof a === "boolean"
}
// Any -> Boolean
// does a have the type object (and is not null)?
function isObj(a) {
  return typeof a === "object" && a !== null;
}
// Any -> Boolean
function isPenguinColor(a) { // testing done
  return typeof isStr(a) && (a === "red" || a === "brown" || a === "black" || a === "white");
}
// Any -> Boolean
// is `a`` a Penguin?
function isPenguin(a) { // testing done
  return isObj(a) &&
    (Object.entries(a).length === 2) &&
    a.hasOwnProperty("kind") &&
    a.hasOwnProperty("color") &&
    isStr(a.kind) &&
    a.kind === "penguin" &&
    isPenguinColor(a.color);
}
// Any -> Boolean
// is `a`` a Fishes?
function isFishes(a) { // testing done
return isObj(a) &&
       Object.entries(a).length === 2 &&
       a.hasOwnProperty("kind") &&
       a.hasOwnProperty("totalFishes") &&
       isStr(a.kind) &&
       a.kind === "fishes" &&
       isNum(a.totalFishes) &&
       isNumInt(a.totalFishes) &&
       a.totalFishes > 0;
}
// Any -> Boolean
// is `a`` a TileInfo?
function isTileInfo(a) { // testing done
  return isObj(a) &&
         Object.entries(a).length === 2 &&
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
// is `a`` a GameTile?
function isGameTile(a) {
  return isObj(a) &&
         Object.entries(a).length === 2 &&
         a.hasOwnProperty("tile_info") &&
         a.hasOwnProperty("occupied_by") &&
         isTileInfo(a.tile_info) &&
         (isBool(a.occupied_by) || isFishes(a.occupied_by) || isPenguin(a.occupied_by))
}
// Any -> Boolean
// is `a`` an UsableGameTile?
function isUsableGameTile(a) {
  return isObj(a) &&
         Object.entries(a).length === 2 &&
         a.hasOwnProperty("kind") &&
         a.hasOwnProperty("occupied_by") &&
         isStr(a.kind) &&
         a.kind === "usableSpace" &&
         (isBool(a.occupied_by) || isGameTile(a.occupied_by));
}
// Any -> Boolean
// is `a`` a n UnusableSpace?
function isUnusableSpace(a) { // testing done
  return  isObj(a) &&
          Object.entries(a).length === 1 &&
          a.hasOwnProperty("kind") &&
          isStr(a.kind) &&
          a.kind === "unusableSpace";
}

// - - - - - - - - - - Constructors - - - - - - - - - - 

function makePenguinColor(color) {
  const res = color;
  return isPenguinColor(res) ? res : throw Error("can't make PenguinColor");
}

function makePenguin(penguinColor) {
  const res = {kind:"penguin", color: penguin_color};
  return isPenguin(res) ? res : throw Error("can't make Penguin");
}

function makeFishes(totalFishes) {
  const res = {kind:"fishes",totalFishes:totalFishes};
  return isFishes(res) ? res : throw Error("can't make Fishes");
}

function makeTileInfo(size, max_elements) {
  const res = { size: size, max_elements: max_elements };
  return isTileInfo(res) ? res : throw Error("can't make TileInfo");
}

function makeGameTile(tile_info, occupied_by) {
  const res = {tile_info: tile_info, occupied_by: occupied_by};
  return isGameTile(res) ? res : throw Error("can't make GameTile");
}

function makeUsableSpace(occupied_by) {
  const res = { kind: "usableSpace", occupied_by: occupied_by};
  return isUsableSpace(res) ? res : throw Error("can't make UsableSpace");
}

function makeUnusableSpace() {
  const res = { kind: "unusableSpace" };
  return isUnusableSpace(res) ? res : throw Error("can't make UnusableSpace");
}


// - - - - - - - - - - Selectors - - - - - - - - - - 




