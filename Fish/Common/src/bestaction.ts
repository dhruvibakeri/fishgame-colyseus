/**
 * This file implements point #2 of the Programming Task in the assignment:
 * [5 — The Strategy](https://www.ccs.neu.edu/home/matthias/4500-f20/5.html)
 *
 * ------------------------ ASSIGNMENT TEXT --------------------------------------
 *
 * - a choice of action for the player whose turn it is
 *
 * It picks the action that realizes the best gain after looking ahead N > 0 turns
 * for this player in the game tree for the current state.
 *
 * The best gain ater N turns is the highest score a player can make after playing
 * the specified number of turns - assuming that all opponents pick one of the the
 * moves that minimizes the player's gain.
 *
 * *Tie Breaker* If  several diferent actions can realize the same gain, the
 * strategy moves the penguin that has the lowest row number for the place from
 * which the penguin is moved and, within this row, the lowest column number. In
 * case this still leaves the algorithm with more than one choice, the process is
 * repeated for the target field to which the penguins will move. Why is this
 * process guaranteed to stop with a single action?
 *
 * -------------------------------------------------------------------------------
 */

import { BoardPosn } from "./board-to-hex-tiles";
import { getReachable } from "./cboard-reachable";
import { CBoard, CPenguin, CScore, CScores, CState, GET_currentPlayer, GET__CBoardFromCState, GET__CPenguinFromCScore, GET__CScoreNumFromCScore, GET__CScoresFromCState, GET__nextMove, PRED_isCSpaceACPenguin, PRED_isCState } from "./cstate";
import { createGameTree, GameTree, getStateFromTree, getValidSubStatesForGameBoard } from "./game-tree";


// - - - - - - - - - PSEUDOCODE: MINIMAX - - - - - - 
// function minimax(position, depth, alpha, beta, maximizingPlayer)
//   if depth == 0 or game over in position
//     return static evaluation of position
// 
//   if maximizingPlayer
//     maxEval = -infinity
//     for each child of position
//       eval = minimax(child, depth - 1, alpha, beta, false)
//       maxEval = max(maxEval, eval)
//       alpha = max(alpha, eval)
//       if beta <= alpha:
//         break
//     return maxEval
// 
//   else 
//     minEval = +infinity
//     for each child of position
//       p = is it maximizingPlayer's turn next?
//       eval = minimax(child, depth - 1, alpha, beta, p)
//       minEval = min(minEval, eval)
//       alpha = max(alpha, eval)
//       if beta <= alpha:
//         break
//     return minEval
// Implements a modified version of minimax for >=2 players.

// ----------------------------------------------------------------------------------

// returns the best action for P to be made to receive max score in N turns,
// considering players who are not P make moves to minimize P's score
export function getBestAction(
  position: GameTree,
  depth: number,
): [BoardPosn, BoardPosn] {
  let currentPlayer: CPenguin = GET_currentPlayer(getStateFromTree(position))
  return miniMaxResToBestAction(minimax(position, depth, currentPlayer, currentPlayer, []));
}

function minimax(
  position: GameTree,
  depth: number,
  maximizingPlayer: CPenguin,
  mainPlayer: CPenguin,
  maximizingActions: Move[]
): [number, Move[]] {
  let action: [BoardPosn, BoardPosn];
  if (depth === 0 || PRED_isCState(position)) {
    return [
      staticEvaluation(maximizingPlayer, getStateFromTree(position)),
      maximizingActions
    ];
  }
  let substates = getValidSubStatesForGameBoard(getStateFromTree(position))
  if (mainPlayer === maximizingPlayer) {
    let maxEval = Number.NEGATIVE_INFINITY;
    substates.forEach(childPosition => {
      let staticEval: number = miniMaxResToStaticEvaluation(minimax(
        childPosition,
        depth - 1,
        maximizingPlayer,
        GET__nextMove(getStateFromTree(childPosition)),
        maximizingActions
      ));
      if (staticEval > maxEval) {
        action = (getFromTo(getStateFromTree(position), getStateFromTree(childPosition), maximizingPlayer))
      }
      maxEval = Math.max(maxEval, staticEval);
    });
    return [maxEval, [...maximizingActions, action]];
  } else {
    let minEval = Number.POSITIVE_INFINITY;
    substates.forEach(childPosition => {
      let staticEval: number = miniMaxResToStaticEvaluation(
        minimax(
          childPosition,
          depth,
          maximizingPlayer,
          GET__nextMove(getStateFromTree(childPosition)),
          maximizingActions
        ));
      minEval = Math.min(minEval, staticEval);
    });
    return [minEval, maximizingActions];
  }
}

// --------

// For a given state, returns the static evaluation of
// a position for the player p. i.e. score of the player p. 
function staticEvaluation(p: CPenguin, cState: CState): number {
  let scores: CScores = GET__CScoresFromCState(cState);

  for (let i = 0; i < scores.length; i++) {
    let currentScore: CScore = scores[i];
    if (GET__CPenguinFromCScore(currentScore) === p) {
      return GET__CScoreNumFromCScore(currentScore);
    }
  }
  throw console.error("penguin not in cState!");
}


// all positions of pengiun on cBoard.
function givenPenguinPosns(cBoard: CBoard, penguin: CPenguin): BoardPosn[] {
  let pPosns: BoardPosn[] = []
  for (let i = 0; i < cBoard.length; i++) {
    for (let j = 0; j < cBoard[i].length; j++) {
      let e = cBoard[i][j];
      if (PRED_isCSpaceACPenguin(e) && e == penguin) {
        pPosns.push({ row: i, col: j });
      }
    }
  }
  return pPosns;
}

// Move made from `prevState` to `nextState`.
export function getFromTo(
  prevState: CState,
  nextState: CState,
  p: CPenguin): [BoardPosn, BoardPosn] {
  const prevBoard: CBoard = GET__CBoardFromCState(prevState)
  const nextBoard: CBoard = GET__CBoardFromCState(nextState)

  const prevPenguinPosns: BoardPosn[] = givenPenguinPosns(prevBoard, p)
  const nextPenguinPosns: BoardPosn[] = givenPenguinPosns(nextBoard, p)

  for (let i = 0; i < prevPenguinPosns.length; i++) {
    if (boardPosEq(prevPenguinPosns[i], nextPenguinPosns[i])) {
      prevPenguinPosns.splice(i, 1);
      nextPenguinPosns.splice(i, 1);
    } else {
      for (let j = 0; j < nextPenguinPosns.length; j++) {
        if (isValidMove(prevPenguinPosns[i], nextPenguinPosns[j], prevBoard)) {
          return [prevPenguinPosns[i], nextPenguinPosns[j]]
        }
      }
    }
  }
}

// checks if given move is a valid move
function isValidMove(from: BoardPosn, to: BoardPosn, board: CBoard): boolean {
  let reachablePoints = getReachable(board, from);
  return isInReachable(reachablePoints, to);
}

// checks if given item is in given list
function isInReachable(list: BoardPosn[], item: BoardPosn): boolean {
  for (let i = 0; i < list.length; i++) {
    if (boardPosEq(item, list[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Represents a move on CBoard representation.
 */
type Move = [BoardPosn, BoardPosn]

function boardPosEq(boardPosn1: BoardPosn, boardPosn2: BoardPosn) {
  return boardPosn1.row === boardPosn2.row && boardPosn1.col === boardPosn2.col
}

function miniMaxResToBestAction(minimaxRes) {
  return minimaxRes[1][0];
}

function miniMaxResToStaticEvaluation(minimaxRes) {
  return minimaxRes[0];
}