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
import { createGameTree, GameTree, getStateFromTree, getValidSubStates, getValidSubStatesForGameBoard } from "./game-tree";
import { playinginitstate } from "./run";


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


let scores : number[] = []

// returns the best action for P to be made to receive max score in N turns,
// considering players who are not P make moves to minimize P's score
function getBestAction(position: GameTree, depth: number, maximizingPlayer: CPenguin, mainPlayer: CPenguin) : BoardPosn[] {
    let maximizingActions = []
    minimax(position,depth,maximizingPlayer,mainPlayer,maximizingActions)
    return maximizingActions[0];
  }



function minimax(position: GameTree, depth: number,maximizingPlayer: CPenguin, mainPlayer: CPenguin, maximizingActions : BoardPosn[][]): number {

  let action : BoardPosn[] = []

  if (depth === 0 || PRED_isCState(position)) {
    return staticEvaluation(maximizingPlayer, getStateFromTree(position));
  }

  let substates = getValidSubStatesForGameBoard(getStateFromTree(position))

  if (mainPlayer === maximizingPlayer) {
    let maxEval = Number.NEGATIVE_INFINITY;

    substates.forEach(childPosition => {
      let ev: number = minimax(
        childPosition,
        depth - 1,
        maximizingPlayer,
        GET__nextMove(getStateFromTree(childPosition)),
        maximizingActions
      );
      if(ev > maxEval) {
        action = (getFromTo(getStateFromTree(position), getStateFromTree(childPosition), maximizingPlayer) as BoardPosn[])
      }
      maxEval = Math.max(maxEval, ev);
    });

    maximizingActions.push(action)
    scores.push(maxEval)
    return maxEval;

    
  } else {
    let minEval = Number.POSITIVE_INFINITY;
    substates.forEach(childPosition => {

  
      let ev: number = minimax(
        childPosition,
        depth,
        maximizingPlayer,
        GET__nextMove(getStateFromTree(childPosition)),
        maximizingActions
      );
      minEval = Math.min(minEval, ev);
    });

    return minEval;
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

// The game is over when no penguin has any valid moves left. 
// i.e. The reachable states for ALL penguins is an empty list.
export function isGameOver(cState: CState): boolean {
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

function playerPenguinPosns(cBoard: CBoard, p: CPenguin): BoardPosn[] {
  let pPosns: BoardPosn[] = []
  for (let i = 0; i < cBoard.length; i++) {
    for (let j = 0; j < cBoard[i].length; j++) {
      let e = cBoard[i][j];
      if (PRED_isCSpaceACPenguin(e) && e == p) {
        pPosns.push({ row: i, col: j });
      }
    }
  }
  return pPosns;
}


function getFromTo(prevState : CState, nextState : CState, p : CPenguin) : [BoardPosn,BoardPosn] | false {
  const prevBoard : CBoard = GET__CBoardFromCState(prevState)
  const nextBoard : CBoard = GET__CBoardFromCState(nextState)

  const prevPenguinPosns : BoardPosn[] = playerPenguinPosns(prevBoard, p)
  const nextPenguinPosns : BoardPosn[] = playerPenguinPosns(nextBoard, p)
  
  for(let i = 0; i < prevPenguinPosns.length; i++) {
    if(JSON.stringify(prevPenguinPosns[i]) === JSON.stringify(nextPenguinPosns[i])) {
      prevPenguinPosns.splice(i, 1);
      nextPenguinPosns.splice(i, 1);
    }
    else {
      for(let j = 0; j < nextPenguinPosns.length; j++) {
        if(isValidMove(prevPenguinPosns[i], nextPenguinPosns[j], prevBoard)) {
          return [prevPenguinPosns[i], nextPenguinPosns[j]]
        }
      }
    } 
  }

  return false;
  
}

// checks if given move is a valid move
function isValidMove(from : BoardPosn, to : BoardPosn, board : CBoard) : boolean {
  let reachablePoints = getReachable(board, from);
  return isInArray(reachablePoints, to);
}

// checks if given item is in given list
function isInArray(list : any[], item : any) : boolean{
  for (let i = 0; i < list.length; i++) {
      if (JSON.stringify(item) === JSON.stringify(list[i])) {
          return true;
      }
  }
  return false;
}

//        0
//       / \
//      /   \
//     1     2
//    / \   / \
//   3  4  5   6
//   |  |  |   |
//   7  8  9   10

let stateAt0 : CState = [
  "playing", [
    ["black", 1, 4, "red"],
    ["white", "unusable", 5, "unusable"]
  ],
  [
    ["black", 4],
    ["white", 3],
    ["red", 0]
  ]
]

let stateAt1 = [
  "playing", [
    ["hole", "black", 4, "red"],
    ["white", "unusable", 5, "unusable"]
  ],
  [
    ["white", 3],
    ["red", 0],
    ["black", 5]
  ]
]


let stateAt2 = [
  "playing", [
    ["hole", 1, 4, "red"],
    ["white", "unusable", "black", "unusable"]
  ],
  [
    ["white", 3],
    ["red", 0],
    ["black", 9]
  ]
]


let stateAt3 = [
  "playing", [
    ["hole", "black", 4, "hole"],
    ["white", "unusable", "red", "unusable"]
  ],
  [
    ["black", 5],
    ["white", 3],
    ["red", 5]
  ]
]


let stateAt4 = [
  "playing", [
    ["hole", "black", "red", "hole"],
    ["white", "unusable", 5, "unusable"]
  ],
  [
    ["black", 5],
    ["white", 3],
    ["red", 4]
  ]
]

let stateAt7 = [
  "playing", [
    ["hole", "black", 4, "hole"],
    ["white", "unusable", "red", "unusable"]
  ],
  [
    ["white", 3],
    ["red", 5],
    ["black", 9]
  ]
]


let stateAt8 = [
  "playing", [
    ["hole", "black", "red", "hole"],
    ["white", "unusable", 5, "unusable"]
  ],
  [
    ["white", 3],
    ["red", 4],
    ["black", 10]
  ]
]


let stateAt5 = [
  "playing", [
    ["hole", 1, "white", "red"],
    ["hole", "unusable", "black", "unusable"]
  ],
  [
    ["red", 0],
    ["black", 9],
    ["white", 4]
  ]
]

let stateAt6 = [
  "playing", [
    ["hole", "white", 4, "red"],
    ["hole", "unusable", "black", "unusable"]
  ],
  [
    ["red", 0],
    ["black", 9],
    ["white", 7]
  ]
]

let stateAt9 = [
  "playing", [
    ["hole", "white", "red", "hole"],
    ["hole", "unusable", "black", "unusable"]
  ],
  [
    ["black", 9],
    ["white", 4],
    ["red", 4]
  ]
]

let stateAt10 = [
  "playing", [
    ["hole", "black", "white", "red"],
    ["hole", "unusable", "hole", "unusable"]
  ],
  [
    ["white", 7],
    ["red", 0],
    ["black", 10]
  ]
]



console.log(getBestAction(createGameTree(stateAt0), 2, "black", GET__nextMove(stateAt0)))
//console.log(maximizingActions, scores)
