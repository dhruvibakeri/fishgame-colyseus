"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromTo = exports.getBestAction = exports.getToPosnFromMove = exports.getFromPosnFromMove = void 0;
const game_state_reachable_1 = require("../states/game-state/game-state-reachable");
const game_tree_state_1 = require("../game-tree/game-tree-state");
const game_state_selectors_1 = require("../states/game-state/game-state-selectors");
const game_state_predicates_1 = require("../states/game-state/game-state-predicates");
function getFromPosnFromMove(move) {
    return move[0];
}
exports.getFromPosnFromMove = getFromPosnFromMove;
function getToPosnFromMove(move) {
    return move[1];
}
exports.getToPosnFromMove = getToPosnFromMove;
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
function getBestAction(position, depth) {
    let currentPlayer = game_state_selectors_1.GET_PlayerColor(game_state_selectors_1.GET_GameStateNextToPlace(game_tree_state_1.getStateFromTree(position)));
    return miniMaxResToBestAction(minimax(position, depth, currentPlayer, currentPlayer, []));
}
exports.getBestAction = getBestAction;
//GameTree Number PenguinColor PenguinColor Move[]-> [number, [BoardPosn, BoarPosn]]
//Returns a tuple of [Max Score for 'depth' turns using the strategy, best action to achieve that max score]
// TODO: split this into mutually recursive helpers. 
function minimax(position, depth, maximizingPlayer, mainPlayer, maximizingActions) {
    let action = false;
    if (depth === 0 || game_state_predicates_1.PRED_isGameState(position)) {
        return [staticEvaluation(mainPlayer, game_tree_state_1.getStateFromTree(position)), maximizingActions];
    }
    let substates = game_tree_state_1.getValidSubStatesForGameBoard(game_tree_state_1.getStateFromTree(position));
    if (mainPlayer === maximizingPlayer) {
        let maxEval = Number.NEGATIVE_INFINITY;
        substates.forEach(childPosition => {
            let ev = miniMaxResToStaticEvaluation(minimax(childPosition, depth - 1, game_state_selectors_1.GET_PlayerColor(game_state_selectors_1.GET_GameStateNextToPlace(game_tree_state_1.getStateFromTree(childPosition))), mainPlayer, maximizingActions));
            if (ev > maxEval) {
                action = (getFromTo(game_tree_state_1.getStateFromTree(position), game_tree_state_1.getStateFromTree(childPosition), maximizingPlayer));
            }
            maxEval = Math.max(maxEval, ev);
        });
        return [maxEval, [...maximizingActions, action]];
    }
    else {
        let minEval = Number.POSITIVE_INFINITY;
        substates.forEach(childPosition => {
            let ev = miniMaxResToStaticEvaluation(minimax(childPosition, depth, game_state_selectors_1.GET_PlayerColor(game_state_selectors_1.GET_GameStateNextToPlace(game_tree_state_1.getStateFromTree(childPosition))), mainPlayer, maximizingActions));
            minEval = Math.min(minEval, ev);
        });
        return [minEval, maximizingActions];
    }
}
// For a given state, returns the static evaluation of
// a position for the player p. i.e. score of the player p. 
function staticEvaluation(p, state) {
    let players = game_state_selectors_1.GET_GameStatePlayers(state);
    for (let i = 0; i < players.length; i++) {
        let currentPlayer = players[i];
        if (game_state_selectors_1.GET_PlayerColor(currentPlayer) === p) {
            return game_state_selectors_1.GET_PlayerScore(currentPlayer);
        }
    }
    throw console.error("penguin not in cState!");
}
// all positions of pengiun on cBoard.
function givenPenguinPosns(board, penguin) {
    let pPosns = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let e = board[i][j];
            if (game_state_predicates_1.PRED_isPenguinSpace(e) && game_state_selectors_1.GET_penguinColor(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(e))) == penguin) {
                pPosns.push({ row: i, col: j });
            }
        }
    }
    return pPosns;
}
// Move made from `prevState` to `nextState`.
function getFromTo(prevState, nextState, p) {
    const prevBoard = game_state_selectors_1.GET_GameStateBoard(prevState);
    const nextBoard = game_state_selectors_1.GET_GameStateBoard(nextState);
    const prevPenguinPosns = givenPenguinPosns(prevBoard, p);
    const nextPenguinPosns = givenPenguinPosns(nextBoard, p);
    for (let i = 0; i < prevPenguinPosns.length; i++) {
        if (boardPosEq(prevPenguinPosns[i], nextPenguinPosns[i])) {
            prevPenguinPosns.splice(i, 1);
            nextPenguinPosns.splice(i, 1);
        }
        else {
            for (let j = 0; j < nextPenguinPosns.length; j++) {
                if (isValidMove(prevPenguinPosns[i], nextPenguinPosns[j], prevBoard)) {
                    return [prevPenguinPosns[i], nextPenguinPosns[j]];
                }
            }
        }
    }
    return false;
}
exports.getFromTo = getFromTo;
// checks if given move is a valid move
function isValidMove(from, to, board) {
    let reachablePoints = game_state_reachable_1.getReachable(board, from);
    return isInReachable(reachablePoints, to);
}
// checks if given item is in given list
function isInReachable(list, item) {
    for (let i = 0; i < list.length; i++) {
        if (boardPosEq(item, list[i])) {
            return true;
        }
    }
    return false;
}
function boardPosEq(boardPosn1, boardPosn2) {
    return boardPosn1.row === boardPosn2.row && boardPosn1.col === boardPosn2.col;
}
function miniMaxResToBestAction(minimaxRes) {
    return minimaxRes[1][0];
}
function miniMaxResToStaticEvaluation(minimaxRes) {
    return minimaxRes[0];
}
//# sourceMappingURL=best-action-game-state.js.map