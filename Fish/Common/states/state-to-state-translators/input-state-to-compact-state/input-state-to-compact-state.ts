import { CBoard, CPosn, CState } from "../../compact-state/compact-state-data-definition";
import { InputBoard, InputPosition, InputState } from "../../input-state/input-state-data-definition";
import { getRowFromInputPosition, getColFromInputPosition, makeInputPosition } from "../../input-state/input-state-interface";
import { getRowFromCPosn, getColFromCPosn } from "../../compact-state/compact-state-interface";
import { makeCPosn } from "../../compact-state/compact-state-interface";
import _ from "lodash";

/**
 * Convert an input board to a compact board. The 0s in the board is mapped 
 * to "holes" because 0s represent blank tiles on compact board.
 */
export function inputBoardToCompactBoard(inputBoard: InputBoard): CBoard {
  let boardWithUnused: CBoard = inputBoardWithUnused(padInputBoard(inputBoard));
  let cBoard: CBoard = [];
  for (let i = 0; i < boardWithUnused.length; i = i + 2) {
    cBoard.push(interleave(boardWithUnused[i], boardWithUnused[i + 1]))
  }
  return _.map(cBoard, row => _.map(row, elem => elem === 0 ? "hole" : elem));
}


/**
 * If the input board is odd, add a row of "unusable" elements 
 * whose length is equal to the longest row in the input board.
 */
function inputBoardWithUnused(inputBoard: InputBoard): CBoard {
  if (inputBoard.length % 2 === 0) {
    return inputBoard;
  } else {
    inputBoard.push(longestRowAsUnusable(inputBoard))
    return inputBoard
  }
}

/**
 * Make a row of "unusable" elements that has the length equal to the 
 * longest row in input board.
 */
export function longestRowAsUnusable(inputBoard: InputBoard) {
  return new Array(getLongestRowLength(inputBoard)).fill("unusable");
}


/**
 * Get the longest row of the input board.
 */
export function getLongestRowLength(inputBoard: InputBoard): number {
  let max_length = 0;
  for (let i = 0; i < inputBoard.length; i++) {
    if (max_length < inputBoard[i].length) {
      max_length = inputBoard[i].length;
    }
  }
  return max_length;
}


/**
 * Pad the input board with holes (a hole in an input board is a 0).
 */
export function padInputBoard(board: InputBoard): InputBoard {
  const longestRowLen: number = getLongestRowLength(board);
  let newBoard: InputBoard = []
  for (let i = 0; i < board.length; i++) {
    if (board[i].length < longestRowLen) {
      let holesToAdd = new Array(longestRowLen - board[i].length).fill(0);
      newBoard.push([...board[i], ...holesToAdd])
    } else {
      newBoard.push(board[i])
    }
  }
  return newBoard;
}

/**
 * Interleaves l1 and l2
 * ASSUMPTION: l1.length === l2.length
 */
export function interleave<T>(l1: T[], l2: T[]): T[] {
  let interLeaved: T[] = [];
  for (let i = 0; i < l1.length; i++) {
    interLeaved.push(l1[i]);
    interLeaved.push(l2[i]);
  }
  return interLeaved;
}



/**
 * Convert an input posn to compact posn.
 */
export function inputPosnToCompactPosn(inputPosition: InputPosition): CPosn {
  let row = getRowFromInputPosition(inputPosition);
  let col = getColFromInputPosition(inputPosition);
  return row % 2 == 0
    ? makeCPosn(row / 2, col + col)
    : makeCPosn((row - 1) / 2, col + col + 1)
}


/**
 * Convert a compact posn to input posn.
 */
export function compactPosnToInputPosn(cPosn: CPosn): InputPosition {
  let row = getRowFromCPosn(cPosn);
  let col = getColFromCPosn(cPosn);
  return col % 2 == 0
    ? makeInputPosition((row * 2), col / 2)
    : makeInputPosition((row * 2) + 1, (col - 1) / 2)
}


export function inputStateToCState(inputState: InputState): CState {
  // TODO: 
  return ["playing",
    [],
    []
  ]
}
