import { getReachable } from "../Common/states/game-state/game-state-reachable";
import { GameTree, getStateFromTree, getValidSubStates, getValidSubStatesForGameBoard } from "../Common/game-tree/game-tree-state";
import { Board, GameState, Penguin, PenguinColor, Player, Players, Tile, UsableSpace } from "../Common/states/game-state/game-state-data-definition";
import { GET_GameStateBoard, GET_GameStateNextToPlace, GET_GameStatePlayers, GET_OnTile, GET_OnUsableSpace, GET_penguinColor, GET_PlayerColor, GET_PlayerScore } from "../Common/states/game-state/game-state-selectors";
import { PRED_isGameState, PRED_isPenguinSpace } from "../Common/states/game-state/game-state-predicates";
import { CState } from "../Common/states/compact-state/compact-state-data-definition";
import { cStateToGameState } from "../Common/states/state-to-state-translators/compact-state-to-game-state";

import { getPenguinPositions } from "../Common/states/game-state/game-state-functions"
import { BoardPosn } from "../Common/utils/other-data-definitions";
import { PRED_isFishSpace } from "../Common/states/game-state/game-state-predicates";
import { IllegalAction } from "../Common/game-tree/game-tree-state";

// ----- USAGE -----
// - getPenguinPlacementPosn is used by a player to place its penguin
//    during the placing stage of the game.
// - The function uses a placement strategy where the penguin whose turn it currenly is
//    is in the given game state, places its penguin at the first available free spot 
//    followning a zig zag pattern that starts at the top left corner.

// GameState -> BoardPosn | IllegalAction
// looks for a valid penguin placement position for the player whose turn it currently is in the
// given state. If the player has already placed all its penguins it returns an 'IllegalAction'.
// If there are no valid placement positions left, it also returns an 'IllegalAction'.
export function getPenguinPlacementPosn(state: GameState): BoardPosn | IllegalAction {

  const board: Board = GET_GameStateBoard(state)
  const players: Players = GET_GameStatePlayers(state)
  const penguin: Player = GET_GameStateNextToPlace(state)
  const numOfPlayers: number = players.length
  const penguinsPerPlayer: number = 6 - numOfPlayers
  let numOfPenguinsOnThisState = getPenguinPositions(penguin, state).length

  if (numOfPenguinsOnThisState < penguinsPerPlayer) {

    for (let i = 0; i < board.length; i++) {
      // goes through all even colums (even rows in game board representation)
      for (let j = 0; j < board[i].length; j = j + 2) {
        if (PRED_isFishSpace(board[i][j])) {
          return { row: i, col: j }
        }
      }
      // goes through all odd colums (odd rows in game board representation)
      for (let k = 1; k < board[i].length; k = k + 2) {
        if (PRED_isFishSpace(board[i][k])) {
          return { row: i, col: k }
        }
      }
    }
    return { kind: "illegalAction" }
  }
  else {
    return { kind: "illegalAction" }
  }
}



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



// TODO: add INTERP. 
export type Move = DefMove | false

export type DefMove = [FromPosn, ToPosn];
export type FromPosn = BoardPosn;
export type ToPosn = BoardPosn;

export function getFromPosnFromMove(move: DefMove): FromPosn {
  return move[0];
}
export function getToPosnFromMove(move: DefMove): ToPosn {
  return move[1];
}




export type MinimaxRes = [MaxScore, Move[]];
export type MaxScore = number;


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

// GameTree Number -> [BoardPosn, BoarPosn] | false
// returns the bestAction for the current player according to the
// given gameTree and depth (no of turns at which the player wants to calculate best gain)
// The function would return a tuple of BoardPosn (see above for definition)
// The first element would be the FROM-POSITION
// The second element would be the TO-POSITION
export function getBestAction(
  position: GameTree,
  depth: number,
): Move {
  let currentPlayer: PenguinColor = GET_PlayerColor(GET_GameStateNextToPlace(getStateFromTree(position)))
  return miniMaxResToBestAction(minimax(position, depth, currentPlayer, currentPlayer, []));
}

//GameTree Number PenguinColor PenguinColor Move[]-> [number, [BoardPosn, BoarPosn]]
//Returns a tuple of [Max Score for 'depth' turns using the strategy, best action to achieve that max score]
// TODO: split this into mutually recursive helpers. 
function minimax(
  position: GameTree,
  depth: number,
  maximizingPlayer: PenguinColor,
  mainPlayer: PenguinColor,
  maximizingActions: Move[]
): [number, Move[]] {

  let action: Move = false;

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
  p: PenguinColor): [BoardPosn, BoardPosn] | false {
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






function boardPosEq(boardPosn1: BoardPosn, boardPosn2: BoardPosn): boolean {
  return boardPosn1.row === boardPosn2.row && boardPosn1.col === boardPosn2.col
}

function miniMaxResToBestAction(minimaxRes: MinimaxRes): Move {
  return minimaxRes[1][0];
}

function miniMaxResToStaticEvaluation(minimaxRes: MinimaxRes): MaxScore {
  return minimaxRes[0];
}
