import { CBoard, CPosn } from "./compact-state-data-definition";
import { BoardPosn } from "../../utils/other-data-definitions"
import { isEven } from "../../utils/utility-functions"
import { PRED_isCSpaceACHole, PRED_isCSpaceACPenguin, PRED_isCSpaceACUnusable } from "./compact-state-predicates"



/**
 * `Direction` is all possible directions a player may move:
 * "north" | "south" | "northWest" | "northEast" | "southWest" | "southEast"
 */
export type Direction
  = "north"
  | "south"
  | "northWest"
  | "northEast"
  | "southWest"
  | "southEast"
  ;

/**
 * Paths specifies longest paths in all `Direction`s as an object 
 * with `Direction`s as the keys and `BoardPosn`s as the values. 
 */
export type Paths = {
  "north": BoardPosn[],
  "south": BoardPosn[],
  "northWest": BoardPosn[],
  "northEast": BoardPosn[],
  "southWest": BoardPosn[],
  "southEast": BoardPosn[]
}





export function getReachable(board: CBoard, boardPosn: BoardPosn) {
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

/**
 * gets a `Path` object from `boardPosn` in `baord`.
 */
export function getPaths(board: CBoard, boardPosn: BoardPosn) {
  return {
    "north": getPathInDirection(board, boardPosn, getNeighborNorth),
    "south": getPathInDirection(board, boardPosn, getNeighborSouth),
    "northWest": getPathInDirection(board, boardPosn, getNeighborNorthWest),
    "northEast": getPathInDirection(board, boardPosn, getNeighborNorthEast),
    "southWest": getPathInDirection(board, boardPosn, getNeighborSouthWest),
    "southEast": getPathInDirection(board, boardPosn, getNeighborSouthEast)
  }
}

/**
 * longest path in a direction that getNeighborInDirection
 * generates the neighbors for.
 */
export function getPathInDirection(
  board: CBoard,
  posn: BoardPosn,
  getNeighborInDirection: (p: BoardPosn) => BoardPosn
) {
  let res: BoardPosn[] = []
  let next: BoardPosn = getNeighborInDirection(posn);
  // TERMINATION ARGUMENT: 
  // getNeighborInDirection: BoardPosn -> BoardPosn
  // will eventually hit the edge of the board or
  // water or another player (which are unreachable).
  while (!isNeighborUnreachable(board, next)) {
    res.push(next);
    next = getNeighborInDirection(next);
  }
  return res;
}

// FOR TESTING
// gets board positions of reachable neighbours
export function getReachableNeighbours(board : CBoard, boardPosn : BoardPosn) {
  let paths = getPathsNeighbours(board, boardPosn);
  return [
      ...paths.north,
      ...paths.northEast,
      ...paths.southEast,
      ...paths.south,
      ...paths.southWest,
      ...paths.northWest
  ];
}

// Board BoardPosn -> Paths
// gets a `Path` object from `booardPosn` in `baord`.
function getPathsNeighbours(board : CBoard, boardCoord : BoardPosn)  {
  return {
      "north": getPathInDirection1(board, boardCoord, getNeighborNorth),
      "south": getPathInDirection1(board, boardCoord, getNeighborSouth),
      "northWest": getPathInDirection1(board, boardCoord, getNeighborNorthWest),
      "northEast": getPathInDirection1(board, boardCoord, getNeighborNorthEast),
      "southWest": getPathInDirection1(board, boardCoord, getNeighborSouthWest),
      "southEast": getPathInDirection1(board, boardCoord, getNeighborSouthEast)
  };
}

// BoardPosn [BoardPosn -> BoardPosn] -> BoardPosn[]
// longest path in a direction that getNeighborInDirection
// generates the neighbors for.
export function getPathInDirection1(
  board: CBoard,
  posn: BoardPosn,
  getNeighborInDirection: (p: BoardPosn) => BoardPosn
) : BoardPosn[] {
  let res : BoardPosn[] = [];
  let next : BoardPosn = getNeighborInDirection(posn);
  // TERMINATION ARGUMENT: 
  // getNeighborInDirection: Number Number -> BoardPosn
  // will eventually hit the edge of the board or
  // water or another player (which are unreachable).
  if (!isNeighborUnreachable(board, next)) {
      res.push(next);
  }
  return res;
}
// FOR TESTING



/**
 * Checks if a neighbouring tile is not a valid move
 */
export function isNeighborUnreachable(board: CBoard, posn: BoardPosn): boolean {
  return !(posn.row < board.length && posn.row > -1)
    || !(posn.col < board[0].length && posn.col > -1)
    || PRED_isCSpaceACUnusable(board[posn.row][posn.col])
    || PRED_isCSpaceACHole(board[posn.row][posn.col])
    || PRED_isCSpaceACPenguin(board[posn.row][posn.col])
    || board[posn.row][posn.col] === undefined;
}

export function getNeighborNorth(boardPosn: BoardPosn): BoardPosn {
  return { row: boardPosn.row - 1, col: boardPosn.col }
}
export function getNeighborSouth(boardPosn: BoardPosn): BoardPosn {
  return { row: boardPosn.row + 1, col: boardPosn.col }
}
export function getNeighborNorthWest(boardPosn: BoardPosn): BoardPosn {
  return isEven(boardPosn.col)
    ? { row: boardPosn.row - 1, col: boardPosn.col - 1 }
    : { row: boardPosn.row, col: boardPosn.col - 1 }
}
export function getNeighborNorthEast(boardPosn: BoardPosn): BoardPosn {
  return isEven(boardPosn.col)
    ? { row: boardPosn.row - 1, col: boardPosn.col + 1 }
    : { row: boardPosn.row, col: boardPosn.col + 1 }
}
export function getNeighborSouthWest(boardPosn: BoardPosn): BoardPosn {
  return isEven(boardPosn.col)
    ? { row: boardPosn.row, col: boardPosn.col - 1 }
    : { row: boardPosn.row + 1, col: boardPosn.col - 1 }
}
export function getNeighborSouthEast(boardPosn: BoardPosn): BoardPosn {
  return isEven(boardPosn.col)
    ? { row: boardPosn.row, col: boardPosn.col + 1 }
    : { row: boardPosn.row + 1, col: boardPosn.col + 1 };
}

