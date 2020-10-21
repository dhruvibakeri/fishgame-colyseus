import { DEFAULT_SIZE } from "./render";
import {
  Board,
  totalRowsInBoard,
  UsableSpace,
  UnusableSpace,
  totalSpacesInRow,
  getSpaceFromSpaceRow,
  isUnusableSpace,
  isUsableSpace,
  spaceIsOccupiedBy,
  isFalse,
  isTile,
  Tile,
  Fishes,
  Penguin,
  tileIsOccupiedBy,
  isFishes,
  isPenguin,
  totalFishesFromFishes,
  getSpaceFromBoard,
  makeFishes,
  makeGameTile,
  makeTileInfo,
  makeUsableSpace,
  totalColsInBoard
} from "./state";

//ASSUMPTIONS: 
// -> Total positions - hposns is >= fishes
// -> fishes is a natural number
// creates holes in board at given positions
// and adds specified min-number of 1-fish tiles
export function addBoardHolesMinFish(
  board: Board,
  fishes: number,
  hposns: [number, number][]
): Board {

  // changes value of tile to represent a hole
  for (let hposn = 0; hposn < hposns.length; hposn++) {
    let [bcol, brow] = [hposns[hposn][1], hposns[hposn][0]]
    makeHole(board, brow, bcol)
  }

  // add 1-fish tiles only if board
  // does not meet min requirement

  if (!hasMinFish(board, fishes)) {

    // gets list of changeable points
    let changeablePoints = getChangablePoints(board)

    // shuffles array containing changeable points
    const shuffled = [...changeablePoints].sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled to meet requirements
    // of min 1-fish tiles
    let selected = shuffled.slice(0, fishes - countOneFishTiles(board));

    for (let i = 0; i < selected.length; i++) {

      let srow = selected[i][0]
      let scol = selected[i][1]

      board[srow][scol] = makeUsableSpace(makeGameTile(makeTileInfo(DEFAULT_SIZE, 5), makeFishes(1)));
    }
  }

  return board;
}

// Board Number Number -> Board
// creates a hole in the board (no tile)
export function makeHole(board: Board, row: number, col: number): Board {
  let space: (UsableSpace | UnusableSpace) = getSpaceFromBoard(board, row, col)
  if (isUsableSpace(space)) {
    board[row][col] = makeUsableSpace(false);
  } else {

  }
  return board;
}

// Board -> BoardPosn[]
// retrieves board positions of all changeable tiles
export function getChangablePoints(board: Board): [number, number][] {
  let posns: [number, number][] = []
  for (let row = 0; row < totalRowsInBoard(board); row++) {
    for (let col = 0; col < totalColsInBoard(board); col++) {
      let space: UsableSpace = getSpaceFromBoard(board, row, col) as UsableSpace
      if (isChangeableState(space)) {
        posns.push([row, col])
      }
    }
  }
  return posns;
}

// checks whether given value is a changeable tile
// a Changeable tile is one of:
// - PlayerColor
// - Positive integer > 1
// (we do not have to change 1)
export function isChangeableState(space: UsableSpace): boolean {
  let onSpace: Tile = spaceIsOccupiedBy(space) as Tile;
  let fishes: Fishes = tileIsOccupiedBy(onSpace) as Fishes;

  return isUsableSpace(space)
    && isTile(onSpace)
    && isFishes(tileIsOccupiedBy(onSpace))
    && totalFishesFromFishes(fishes) > 1;
}

// checks whether board has min no of 1-fish tiles
export function hasMinFish(board: Board, fishes: number): boolean {
  return countOneFishTiles(board) >= fishes;
}

export function countOneFishTiles(board: Board): number {
  let oneFishTiles = 0;
  for (let row = 0; row < totalRowsInBoard(board); row = row + 1) {
    let currentRow: (UsableSpace | UnusableSpace)[] = board[row];
    for (let col = 0; col = totalSpacesInRow(currentRow); col = col + 1) {
      let currentSpace: (UsableSpace | UnusableSpace) = getSpaceFromSpaceRow(currentRow, col);
      if (isUnusableSpace(currentSpace)) {
        let unusableSpace: UnusableSpace = currentSpace;
        oneFishTiles = oneFishTiles + countOneFishTilesOnUnUsableSpace(unusableSpace)
      } else if (isUsableSpace(currentSpace)) {
        let usableSpace: UsableSpace = currentSpace;
        oneFishTiles = oneFishTiles + countOneFishTilesOnUsableSpace(usableSpace);
      }
    }
  }
  return oneFishTiles;
}

export function countOneFishTilesOnUsableSpace(usableSpace: UsableSpace): number {
  console.assert(isUsableSpace(usableSpace));
  const occupiedBy = spaceIsOccupiedBy(usableSpace)
  if (isFalse(occupiedBy)) {
    return 0;
  } else if (isTile(occupiedBy)) {
    const tile = occupiedBy;
    return countOneFishTilesOnTile(tile);
  }
}

export function countOneFishTilesOnUnUsableSpace(unusableSpace: UnusableSpace): number {
  console.assert(isUnusableSpace(unusableSpace))
  return 0;
}

export function countOneFishTilesOnTile(tile: Tile): number {
  console.assert(isTile(tile));
  const occupiedBy: (false | Fishes | Penguin) = tileIsOccupiedBy(tile);
  if (isFalse(occupiedBy)) {
    return 0
  } else if (isFishes(occupiedBy)) {
    const fishesOnTile: Fishes = occupiedBy;
    return countOneFishOnFishes(fishesOnTile)
  } else if (isPenguin(occupiedBy)) {
    return 0;
  }
}

function countOneFishOnFishes(fishes: Fishes) {
  console.assert(isFishes(fishes))
  const totalFishes: number = totalFishesFromFishes(fishes);
  if (totalFishes === 1) {
    return 1;
  } else {
    return 0;
  }
}

