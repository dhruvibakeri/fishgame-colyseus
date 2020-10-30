/**
 * Given a board position, and a cBoard, produces all 
 * the reachable points if a penguin is on the position.
 */


import { PRED_isCSpaceACHole, PRED_isCSpaceACPenguin, PRED_isCSpaceACUnusable } from './cstate';
import { isEven } from './util';
import { BoardPosn } from './board-to-hex-tiles';
import { CBoard } from "./cstate"

// - - - - - - - - - - Neighbors and Paths - - - - - - - - - -

export function getReachable(board: CBoard, boardPosn: BoardPosn) {
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
type Direction
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
type Paths = {
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
function getPaths(board: CBoard, boardPosn: BoardPosn) {
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
function getPathInDirection(board, posn, getNeighborInDirection) {
  let res = []
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


/**
 * Checks if a neighbouring tile is not a valid move
 */
function isNeighborUnreachable(board: CBoard, posn: BoardPosn): boolean {
  return !(posn.row < board.length && posn.row > -1)
    || !(posn.col < board[0].length && posn.col > -1)
    || PRED_isCSpaceACUnusable(board[posn.row][posn.col])
    || PRED_isCSpaceACHole(board[posn.row][posn.col])
    || PRED_isCSpaceACPenguin(board[posn.row][posn.col])
    || board[posn.row][posn.col] === undefined;
}


function getNeighborNorth(boardPosn) {
  return { row: boardPosn.row - 1, col: boardPosn.col }
}
function getNeighborSouth(boardPosn) {
  return { row: boardPosn.row + 1, col: boardPosn.col }
}
function getNeighborNorthWest(boardPosn) {
  return isEven(boardPosn.col)
    ? { row: boardPosn.row - 1, col: boardPosn.col - 1 }
    : { row: boardPosn.row, col: boardPosn.col - 1 }
}
function getNeighborNorthEast(boardPosn) {
  return isEven(boardPosn.col)
    ? { row: boardPosn.row - 1, col: boardPosn.col + 1 }
    : { row: boardPosn.row, col: boardPosn.col + 1 }
}
function getNeighborSouthWest(boardPosn) {
  return isEven(boardPosn.col)
    ? { row: boardPosn.row, col: boardPosn.col - 1 }
    : { row: boardPosn.row + 1, col: boardPosn.col - 1 }
}

function getNeighborSouthEast(boardPosn) {
  return isEven(boardPosn.col)
    ? { row: boardPosn.row, col: boardPosn.col + 1 }
    : { row: boardPosn.row + 1, col: boardPosn.col + 1 };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - Translations - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


/**
 * Represents a [Column, Row] pair
 */
type ColRowPair = [number, number]

/**
 * Represents a [Row, Col] pair
 */
type RowColPair = [number, number]



function rowColObjToColRow(boardPosn): ColRowPair {
  return [boardPosn.col, boardPosn.row];
}
function colRowToRowColObj(p: ColRowPair) {
  return { row: p[1], col: p[0] };
}

export function north(posn: ColRowPair): ColRowPair {
  return rowColObjToColRow(getNeighborNorth(colRowToRowColObj(posn)));
}
export function south(posn: ColRowPair): ColRowPair {
  return rowColObjToColRow(getNeighborSouth(colRowToRowColObj(posn)));
}
export function northeast(posn: ColRowPair): ColRowPair {
  return rowColObjToColRow(getNeighborNorthEast(colRowToRowColObj(posn)));
}
export function northwest(posn: ColRowPair): ColRowPair {
  return rowColObjToColRow(getNeighborNorthWest(colRowToRowColObj(posn)));
}
export function southwest(posn: ColRowPair): ColRowPair {
  return rowColObjToColRow(getNeighborSouthWest(colRowToRowColObj(posn)));
}
export function southeast(posn: ColRowPair): ColRowPair {
  return rowColObjToColRow(getNeighborSouthEast(colRowToRowColObj(posn)));
}
