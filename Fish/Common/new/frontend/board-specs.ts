
import { addBoardHolesMinFish, makeHole } from "./boardOps";
import { DEFAULT_SIZE } from "./render";
import {
  Board,
  getSpaceFromBoard,
  isFishes,
  isPenguin,
  isTile,
  isUsableSpace,
  makeFishes,
  makeGameTile,
  makePenguin,
  makeTileInfo,
  makeUsableSpace,
  maxElementsFromTileInfo,
  PenguinColor,
  spaceIsOccupiedBy,
  Tile,
  tileInfoFromTile,
  tileIsOccupiedBy,
  UsableSpace,
} from "./state";

// configures board specifications
export function getBoardSpecs(board: Board): void {
  board = noOfFish(board, 1, 2, 5)
  board = noOfFish(board, 1, 1, 4)
  board = noOfFish(board, 0, 2, 2)
  board = noOfFish(board, 0, 1, 5)
  //board = noOfFish(board, 1, 3, 3)
  board = makeHole(board, 1, 3)
  board = placePenguin(board, 0, 0, 'black')
  board = placePenguin(board, 1, 0, 'red')
  board = placePenguin(board, 0, 3, 'brown')
  board = placePenguin(board, 1, 5, 'white')
  board = addBoardHolesMinFish(board, 3, [[1, 1], [1, 4]])
}

// Board Number Number, Number -> Board
// places n amount of fish on board[x][y]
function noOfFish(board: Board, row: number, col: number, n: number): Board {
  let space: UsableSpace = getSpaceFromBoard(board, row, col) as UsableSpace
  let onSpace: Tile = spaceIsOccupiedBy(space) as Tile
  if (isUsableSpace(space)
    && isTile(onSpace)
    && isFishes(tileIsOccupiedBy(onSpace))
    && n <= maxElementsFromTileInfo(tileInfoFromTile(onSpace))) {
    board[row][col] = makeUsableSpace(makeGameTile(makeTileInfo(DEFAULT_SIZE, 5), makeFishes(n)));
    return board;
  } else {
    return board;
  }

}

// Board Number Number, String -> Board
// places penguin of given color on board[x][y]
function placePenguin(board: Board, row: number, col: number, color: PenguinColor): Board {
  let space: UsableSpace = getSpaceFromBoard(board, row, col) as UsableSpace;
  let onSpace: Tile = spaceIsOccupiedBy(space) as Tile;
  if (isUsableSpace(space)
    && isTile(onSpace)
    && !isPenguin(tileIsOccupiedBy(onSpace))) {
    board[row][col] = makeUsableSpace(makeGameTile(makeTileInfo(DEFAULT_SIZE, 1), makePenguin(color)));
  } else {
    return board;
  }
}