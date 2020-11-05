
import { BoardPosn } from "../../utils/other-data-definitions"
import { isEven } from "../../utils/utility-functions"
import { Board } from "./game-state-data-definition";
import { PRED_isFishSpace } from "./game-state-predicates";

export function getReachable(board: Board, boardPosn: BoardPosn) {
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

/**
 * gets a `Path` object from `boardPosn` in `baord`.
 */
export function getPaths(board: Board, boardPosn: BoardPosn) {
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
  board: Board,
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

/**
 * Checks if a neighbouring tile is not a valid move
 */
export function isNeighborUnreachable(board: Board, posn: BoardPosn): boolean {
  return !(posn.row < board.length && posn.row > -1)
    || !(posn.col < board[0].length && posn.col > -1)
    || !PRED_isFishSpace(board[posn.row][posn.col])
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