"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGameOver = void 0;
const cboard_reachable_1 = require("./cboard-reachable");
const cstate_1 = require("./cstate");
const game_tree_1 = require("./game-tree");
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
function minimax(position, depth, maximizingPlayer, mainPlayer) {
    if (depth === 0 || cstate_1.PRED_isCState(position)) {
        return staticEvaluation(maximizingPlayer, game_tree_1.getStateFromTree(position));
    }
    let substates = game_tree_1.getValidSubStates(game_tree_1.getStateFromTree(position));
    if (mainPlayer === maximizingPlayer) {
        let maxEval = Number.NEGATIVE_INFINITY;
        substates.forEach(childPosition => {
            let ev = minimax(childPosition, depth - 1, cstate_1.GET__nextMove(game_tree_1.getStateFromTree(childPosition)), mainPlayer);
            maxEval = Math.max(maxEval, ev);
        });
        return maxEval;
    }
    else {
        let minEval = Number.POSITIVE_INFINITY;
        substates.forEach(childPosition => {
            let ev = minimax(childPosition, depth - 1, cstate_1.GET__nextMove(game_tree_1.getStateFromTree(childPosition)), mainPlayer);
            minEval = Math.min(minEval, ev);
        });
        return minEval;
    }
}
// For a given state, returns the static evaluation of
// a position for the player p. i.e. score of the player p. 
function staticEvaluation(p, cState) {
    let scores = cstate_1.GET__CScoresFromCState(cState);
    for (let i = 0; i < scores.length; i++) {
        let currentScore = scores[i];
        if (cstate_1.GET__CPenguinFromCScore(currentScore) === p) {
            return cstate_1.GET__CScoreNumFromCScore(currentScore);
        }
    }
    throw console.error("penguin not in cState!");
}
// The game is over when no penguin has any valid moves left. 
// i.e. The reachable states for ALL penguins is an empty list.
function isGameOver(cState) {
    let cBoard = cstate_1.GET__CBoardFromCState(cState);
    let pPosns = penguinPosns(cBoard);
    for (let i = 0; i < pPosns.length; i++) {
        let posn = pPosns[i];
        if (cboard_reachable_1.getReachable(cBoard, posn).length > 0) {
            return false;
        }
    }
    return true;
}
exports.isGameOver = isGameOver;
function penguinPosns(cBoard) {
    let pPosns = [];
    for (let i = 0; i < cBoard.length; i++) {
        for (let j = 0; j < cBoard[i].length; j++) {
            let e = cBoard[i][j];
            if (cstate_1.PRED_isCSpaceACPenguin(e)) {
                pPosns.push({ row: i, col: j });
            }
        }
    }
    return pPosns;
}
