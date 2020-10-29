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
import { CBoard, CPenguin, CScore, CScores, CState, GET__CBoardFromCState, GET__CPenguinFromCScore, GET__CScoreNumFromCScore, GET__CScoresFromCState, PRED_isCSpaceACPenguin } from "./cstate";



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


function minimax(
  position: CState,
  depth: number,
  maximizingPlayer: CPenguin
): number {
  if (depth === 0 || isGameOver(position)) {
    return staticEvaluation(maximizingPlayer, position);
  }
  if (maximizingPlayer) {
    let maxEval = Number.NEGATIVE_INFINITY;
    let children = [];
    let nextPlayer = children[2][0];
    children.forEach(child => {
      let ev: number = minimax(child, depth - 1, nextPlayer);
      maxEval = Math.max(maxEval, ev);
    });
    return maxEval;
  } else {
    let minEval = Number.POSITIVE_INFINITY;

    let children = [];
    let nextPlayer = children[2][0];
    children.forEach(child => {
      let ev: number = minimax(child, depth - 1, nextPlayer);
      minEval = Math.min(minEval, ev);
    });
    return minEval;
  }
}

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
}

// The game is over when no penguin has any valid moves left. 
// i.e. The reachable states for ALL penguins is an empty list.
function isGameOver(cState: CState): boolean {
  let cBoard: CBoard = GET__CBoardFromCState(cState)
  let pPosns: BoardPosn[] = penguinPosns(cBoard);
  for (let i = 0; i < pPosns.length; i++) {
    let posn = pPosns[i];
    if (getReachable(cBoard, posn).length > 0) {
      return false;
    }
  }
  return true;
}

function penguinPosns(cBoard: CBoard): BoardPosn[] {
  let pPosns: BoardPosn[] = []
  for (let i = 0; i < cBoard.length; i++) {
    for (let j = 0; j < cBoard[i].length; j++) {
      let e = cBoard[i][j];
      if (PRED_isCSpaceACPenguin(e)) {
        pPosns.push({ row: i, col: j });
      }
    }
  }
  return pPosns;
}




