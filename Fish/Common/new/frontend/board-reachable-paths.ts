import { Board, BoardPosn, isFalse, isPenguin, isUnusableSpace, spaceIsOccupiedBy, Tile, tileIsOccupiedBy, UsableSpace } from "./state";
import { isEven } from "./util";

// - - - - - - - - - - Neighbors and Paths - - - - - - - - - -
//
// Board BoardPosn -> BoardPosn[]

// gets board positions of all valid moves
function getReachable(board: Board, boardPosn: BoardPosn): BoardPosn[] {
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
function getPaths(board: Board, boardPosn: BoardPosn) {
  return {
    "north": getPathInDirection(board, boardPosn, getNeighborNorth),
    "south": getPathInDirection(board, boardPosn, getNeighborSouth),
    "northWest": getPathInDirection(board, boardPosn, getNeighborNorthWest),
    "northEast": getPathInDirection(board, boardPosn, getNeighborNorthEast),
    "southWest": getPathInDirection(board, boardPosn, getNeighborSouthWest),
    "southEast": getPathInDirection(board, boardPosn, getNeighborSouthEast)
  }
}

// BoardPosn [BoardPosn -> BoardPosn] -> BoardPosn[]
// longest path in a direction that getNeighborInDirection
// generates the neighbors for.
function getPathInDirection(
  board: Board,
  posn: BoardPosn,
  getNeighborInDirection: (BoardPosn) => BoardPosn
): BoardPosn[] {
  let res: BoardPosn[] = []
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
function isNeighborUnreachable(board: Board, posn: { row: number, col: number }): boolean {
  const r = board[posn.row]
  const hasRow = posn.row < board.length && posn.row > -1
  const hasCol = posn.col < board[0].length && posn.col > -1
  let onSpace = spaceIsOccupiedBy(r[posn.col] as UsableSpace) as Tile;
  return !hasRow || !hasCol ||
    isUnusableSpace(r[posn.col]) ||
    isFalse(onSpace) ||
    isPenguin(tileIsOccupiedBy(onSpace)) ||
    r[posn.col] === undefined;

}

// Number Number -> BoardPosn
// get the neighbor in the North direction
function getNeighborNorth({ row, col }: BoardPosn): BoardPosn {
  return { row: row - 1, col: col }
}

// Number Number -> BoardPosn
// get the neighbor in the South direction
function getNeighborSouth({ row, col }: BoardPosn): BoardPosn {
  return { row: row + 1, col: col }
}

// Number Number -> BoardPosn
// get the neighbor in the NorthWest direction
function getNeighborNorthWest({ row, col }: BoardPosn): BoardPosn {
  return isEven(col)
    ? { row: row - 1, col: col - 1 }
    : { row: row, col: col - 1 }
}

// Number Number -> BoardPosn
// get the neighbor in the NorthEast direction
function getNeighborNorthEast({ row, col }: BoardPosn): BoardPosn {
  return isEven(col)
    ? { row: row - 1, col: col + 1 }
    : { row: row, col: col + 1 }
}

// Number Number -> BoardPosn
// get the neighbor in the SouthWest direction
function getNeighborSouthWest({ row, col }: BoardPosn): BoardPosn {
  return isEven(col)
    ? { row: row, col: col - 1 }
    : { row: row + 1, col: col - 1 }
}

// Number Number -> BoardPosn
// get the neighbor in the SouthEast direction
function getNeighborSouthEast({ row, col }: BoardPosn): BoardPosn {
  return isEven(col)
    ? { row: row, col: col + 1 }
    : { row: row + 1, col: col + 1 };
}
