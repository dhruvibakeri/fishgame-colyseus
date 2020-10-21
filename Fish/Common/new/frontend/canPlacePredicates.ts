import {
  Board,
  UsableSpace,
  getSpaceFromBoard,
  Tile,
  spaceIsOccupiedBy,
  isUsableSpace,
  isPenguin,
  tileIsOccupiedBy,
  isTile,
  isFishes,
  maxElementsFromTileInfo,
  tileInfoFromTile
} from "./state";

// Board Number Number -> boolean
// checks if a hole can be made in given positon
// What should the answer be for the following cases:
// unusable space              => false
// usable space
//    false on a usable space  => false
//    Tile on a usable space
//       false on tile         => false
//       Fishes on tile        => true
//       Penguin on tile       => false
function canMakeHole(board: Board, row: number, col: number): boolean {
  let space: UsableSpace = getSpaceFromBoard(board, row, col) as UsableSpace
  let onSpace: Tile = spaceIsOccupiedBy(space) as Tile
  return isUsableSpace(space) && !isPenguin(tileIsOccupiedBy(onSpace))
}

// Board Number Number, Number -> boolean
// checks if given no. of fish can be placed at given posn
// unusable space              => false
// usable space
//    false on a usable space  => false
//    Tile on a usable space
//       false on tile         => false
//       Fishes on tile        => true
//       Penguin on tile       => false
function canPlaceFish(board: Board, row: number, col: number, n: number): boolean {
  let space: UsableSpace = getSpaceFromBoard(board, row, col) as UsableSpace
  let onSpace: Tile = spaceIsOccupiedBy(space) as Tile;
  return isUsableSpace(space)
    && isTile(onSpace)
    && isFishes(tileIsOccupiedBy(onSpace))
    && n <= maxElementsFromTileInfo(tileInfoFromTile(onSpace))
}

// Board Number Number -> boolean
// can a penguin be placed at given posn
// unusable space              => false
// usable space
//    false on a usable space  => false
//    Tile on a usable space
//       false on tile         => false
//       Fishes on tile        => true
//       Penguin on tile       => false
function canPlacePenguin(board: Board, row: number, col: number): boolean {
  let space: UsableSpace = getSpaceFromBoard(board, row, col) as UsableSpace
  let onSpace = spaceIsOccupiedBy(space);
  return (isUsableSpace(space) && isTile(onSpace) && !isPenguin(tileIsOccupiedBy(onSpace)))
}
