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

type BoardPosn = { row: number, col: number }

import { getReachable } from "../states/game-state/game-state-reachable";
import { GameTree, getStateFromTree, getValidSubStates, getValidSubStatesForGameBoard } from "../game-tree/game-tree-state";
import { Board, GameState, Penguin, PenguinColor, Player, Players, Tile, UsableSpace } from "../states/game-state/game-state-data-definition";
import { GET_GameStateBoard, GET_GameStateNextToPlace, GET_GameStatePlayers, GET_OnTile, GET_OnUsableSpace, GET_penguinColor, GET_PlayerColor, GET_PlayerScore } from "../states/game-state/game-state-selectors";
import { PRED_isGameState, PRED_isPenguinSpace } from "../states/game-state/game-state-predicates";
import { CState } from "../states/compact-state/compact-state-data-definition";
import { cStateToGameState } from "../states/state-to-state-translators/compact-state-to-game-state";


/**         INTERPRETATION OF OUR BEST GAIN STRATEGY ALGORITHM
 *  - our minimax function takes in:
 *      -  a GameTree 
 *      -  number of turns aka depth
 *      -  player whose turn it currently is aka MAXIMIZING PLAYER
 *      -  player who's score we want to maximize aka MAIN PLAYER
 *      -  an list of 'Move'(s) (initially empty) aka  MAXIMIZING ACTIONS
 * 
 *      - As our base case, we first check:
 *          - if the depth = 0      or 
 *          - if the gameTree given is at a position where the game is OVER.
 *          - If so, we calculate the score of the MAIN PLAYER at that position and return [score, MAXIMIZING ACTIONS]
 * 
 *      - If the depth is not yet 0 or game is NOT OVER we check:
 * 
 *          - if the MAXIMIZING PLAYER is the MAIN PLAYER:
 *              - If so, we set a variable called MAX_EVAL to the lowest value possible
 *              - we then run this algorithm on directly reachable substates with depth - 1
 *              - for every substate, we get a score which we then compare to MAX_EVAL
 *                  and MAX_EVAL gets updated with the greater of the two
 *              - if the score is greater than MAX_EVAL, we also add the action made to get to
 *                  this substate to MAXIMIZING ACTIONS
 *              - after going through all substates, we return [MAX_EVAL, MAXIMIZING ACTIONS]
 * 
 *          - if the MAXIMIZING PLAYER is NOT the MAIN PLAYER:
 *              - If so, we set a variable called MIN_EVAL to the highest value possible
 *              - we then run this algorithm on directly reachable substates with the same depth 
 *              - for every substate, we get a score which we then compare to MIN_EVAL
 *                  and MIN_EVAL gets updated with the lesser of the two
 *              - after going through all substates, we return [MIN_EVAL, MAXIMIZING ACTIONS]
 * 
 * -- our function getBestAction uses minimax and returns the first action in MAXIMIZING ACTIONS
 *    which would represent the best move the MAIN PLAYER should make first.
 */

// GameTree Number -> [BoardPosn, BoarPosn]
// returns the bestAction for the current player according to the
// given gameTree and depth (no of turns at which the player wants to calculate best gain)
// The function would return a tuple of BoardPosn (see above for definition)
// The first element would be the FROM-POSITION
// The second element would be the TO-POSITION
export function getBestAction(
  position: GameTree,
  depth: number,
): [BoardPosn, BoardPosn] {
  let currentPlayer: PenguinColor = GET_PlayerColor(GET_GameStateNextToPlace(getStateFromTree(position)))
  return miniMaxResToBestAction(minimax(position, depth, currentPlayer, currentPlayer, []));
}

//GameTree Number PenguinColor PenguinColor Move[]-> [number, [BoardPosn, BoarPosn]]
//Returns a tuple of [Max Score for 'depth' turns using the strategy, best action to achieve that max score]
function minimax(
  position: GameTree,
  depth: number,
  maximizingPlayer: PenguinColor,
  mainPlayer: PenguinColor,
  maximizingActions: Move[]
): [number, Move[]] {

  let action: [BoardPosn, BoardPosn] | false

  if (depth === 0 || PRED_isGameState(position)) {
    return [staticEvaluation(mainPlayer, getStateFromTree(position)), maximizingActions];
  }

  let substates = getValidSubStatesForGameBoard(getStateFromTree(position))

  if (mainPlayer === maximizingPlayer) {

    let maxEval = Number.NEGATIVE_INFINITY;

    substates.forEach(childPosition => {
      let ev: number = miniMaxResToStaticEvaluation(minimax(
        childPosition,
        depth - 1,
        GET_PlayerColor(GET_GameStateNextToPlace(getStateFromTree(childPosition))),
        mainPlayer,
        maximizingActions
      ));
      if (ev > maxEval) {
        action = (getFromTo(getStateFromTree(position), getStateFromTree(childPosition), maximizingPlayer))
      }
      maxEval = Math.max(maxEval, ev);
    });
    return [maxEval, [...maximizingActions, action]];
  }
  else {
    let minEval = Number.POSITIVE_INFINITY;

    substates.forEach(childPosition => {
      let ev: number = miniMaxResToStaticEvaluation(minimax(
        childPosition,
        depth,
        GET_PlayerColor(GET_GameStateNextToPlace(getStateFromTree(childPosition))),
        mainPlayer,
        maximizingActions
      ));
      minEval = Math.min(minEval, ev);
    });
    return [minEval, maximizingActions];
  }
}

// For a given state, returns the static evaluation of
// a position for the player p. i.e. score of the player p. 
function staticEvaluation(p: PenguinColor, state: GameState): number {
  let players: Players = GET_GameStatePlayers(state);

  for (let i = 0; i < players.length; i++) {
    let currentPlayer: Player = players[i];
    if (GET_PlayerColor(currentPlayer) === p) {
      return GET_PlayerScore(currentPlayer);
    }
  }
  throw console.error("penguin not in cState!");


}



// all positions of pengiun on cBoard.
function givenPenguinPosns(board: Board, penguin: PenguinColor): BoardPosn[] {
  let pPosns: BoardPosn[] = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let e = board[i][j];
      if (PRED_isPenguinSpace(e) && GET_penguinColor(GET_OnTile(GET_OnUsableSpace(e as UsableSpace) as Tile) as Penguin) == penguin) {
        pPosns.push({ row: i, col: j });
      }
    }
  }
  return pPosns;
}

// Move made from `prevState` to `nextState`.
export function getFromTo(
  prevState: GameState,
  nextState: GameState,
  p: PenguinColor): [BoardPosn, BoardPosn] | false{
  const prevBoard: Board = GET_GameStateBoard(prevState)
  const nextBoard: Board = GET_GameStateBoard(nextState)

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
  return false
}

// checks if given move is a valid move
function isValidMove(from: BoardPosn, to: BoardPosn, board: Board): boolean {
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
type Move = [BoardPosn, BoardPosn] | false

function boardPosEq(boardPosn1: BoardPosn, boardPosn2: BoardPosn) {
  return boardPosn1.row === boardPosn2.row && boardPosn1.col === boardPosn2.col
}

function miniMaxResToBestAction(minimaxRes) {
  return minimaxRes[1][0];
}

function miniMaxResToStaticEvaluation(minimaxRes) {
  return minimaxRes[0];
}


export const state0: CState = ["playing",

  [[["black",4], 1, 4, ["red",0]],
  [["white",3], "unusable", 5, "unusable"]],
  
  [["black", 0],
  ["white", 0],
  ["red", 0]]]

  export const ex2 : CState = ["playing", 
                                    [[["red",1], 1, ["red",1], "hole", ["black",1], 1, ["black",1], "hole"],
                                    [4, "hole", 4, "hole", 4, "hole", 4, "hole"],
                                    [["white",1], ["brown",1], "hole", "hole", ["white",1], ["brown",1], "hole", "hole"]],
                                     [["red", 0],
                                     ["black", 0],
                                     ["white", 0],
                                     ["brown", 0] ]]

//--------------------------------------------------------------------------------------------------------    */     
const prelim1 : CState = ["playing",

  [[1,1,1,1,1,1],
  ["hole","hole","hole","hole","hole","hole"],
    [["red",1],["white",1],["red",1],["white",1],["red",1],["white",1]],
    [["brown",1],"unusable",["brown",1],"unusable",["brown",1],"unusable"]],
  
  [["red", 0],
  ["white", 0],
  ["brown", 0]]]

const prelim2 : CState = ["playing",

[[["red",1],1,1,1,1,1],
["hole","hole","hole","hole","hole","hole"],
  [["red",1],["white",1],["red",1],["white",1],"hole",["white",1]],
  [["brown",1],"unusable",["brown",1],"unusable",["brown",1],"unusable"]],

[["red", 0],
["white", 0],
["brown", 0]]]

//console.log("final",minimax([state0 , () => getValidSubStates(state0)], 4, GET_currentPlayer(state0), GET_currentPlayer(state0)))
console.log("best action", getBestAction([cStateToGameState(state0), () => getValidSubStates(cStateToGameState(state0))], 3))
console.log("best action - prelim1", getBestAction([cStateToGameState(prelim1) , () => getValidSubStates(cStateToGameState(prelim1))], 2))
console.log("best action - prelim2", getBestAction([cStateToGameState(prelim2) , () => getValidSubStates(cStateToGameState(prelim2))], 2))
//console.log(getValidSubStatesForGameBoard((getValidSubStatesForGameBoard(getValidSubStatesForGameBoard(cStateToGameState(ex2))[0][0])[0][0]))[1][0])

/*[2,{"players":[{"places":[[4,1],[4,0],[0,0]],"score":0,"color":"red"}
,{"places":[[5,2],[5,1],[5,0]],"score":0,"color":"white"},
{"places":[[6,2],[6,1],[6,0]],"score":0,"color":"brown"}],
///"board":
[[1,1,1],[1,1,1] ///,
[0,0,0],[0,0,0],///
[1,1,0],[1,1,1],
///[1,1,1]]}]*/

/*[2,{"players":[{"places":[[4,2],[4,1],[4,0]],"score":0,"color":"red"},
{"places":[[5,2],[5,1],[5,0]],"score":0,"color":"white"},
{"places":[[6,2],[6,1],[6,0]],"score":0,"color":"brown"}],
"board":[[1,1,1],[1,1,1],
[0,0,0],[0,0,0],
[1,1,1],[1,1,1],
[1,1,1]]}]*/

