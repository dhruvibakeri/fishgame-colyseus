"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getFromTo = exports.getBestAction = exports.getToPosnFromMove = exports.getFromPosnFromMove = void 0;
var game_state_reachable_1 = require("../states/game-state/game-state-reachable");
var game_tree_state_1 = require("../game-tree/game-tree-state");
var game_state_selectors_1 = require("../states/game-state/game-state-selectors");
var game_state_predicates_1 = require("../states/game-state/game-state-predicates");
var game_state_functions_1 = require("../states/game-state/game-state-functions");
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
    var currentPlayer = game_state_selectors_1.GET_PlayerColor(game_state_selectors_1.GET_GameStateNextToPlace(game_tree_state_1.getStateFromTree(position)));
    return miniMaxResToBestAction(minimax(position, depth, currentPlayer, currentPlayer, []));
}
exports.getBestAction = getBestAction;
//GameTree Number PenguinColor PenguinColor Move[]-> [number, [BoardPosn, BoarPosn]]
//Returns a tuple of [Max Score for 'depth' turns using the strategy, best action to achieve that max score]
// TODO: split this into mutually recursive helpers. 
function minimax(position, depth, maximizingPlayer, // player who's turn it is
mainPlayer, // the player who's score we want to maximize
maximizingActions) {
    var action = false;
    if (depth === 0 || game_state_predicates_1.PRED_isGameState(position)) {
        return [staticEvaluation(mainPlayer, game_tree_state_1.getStateFromTree(position)), maximizingActions];
    }
    var substates = game_tree_state_1.getValidSubStatesForGameBoard(game_tree_state_1.getStateFromTree(position));
    if (mainPlayer === maximizingPlayer) {
        var maxEval_1 = Number.NEGATIVE_INFINITY;
        substates.forEach(function (childPosition) {
            var ev = miniMaxResToStaticEvaluation(minimax(childPosition, depth - 1, game_state_selectors_1.GET_PlayerColor(game_state_selectors_1.GET_GameStateNextToPlace(game_tree_state_1.getStateFromTree(childPosition))), mainPlayer, maximizingActions));
            if (ev > maxEval_1) {
                action = (getFromTo(game_tree_state_1.getStateFromTree(position), game_tree_state_1.getStateFromTree(childPosition), maximizingPlayer));
            }
            maxEval_1 = Math.max(maxEval_1, ev);
        });
        if (action === false) {
            for (var i = 0; i < substates.length; i++) {
                var temp_action = (getFromTo(game_tree_state_1.getStateFromTree(position), game_tree_state_1.getStateFromTree(substates[i]), maximizingPlayer));
                if (temp_action != false) {
                    action = temp_action;
                    break;
                }
            }
        }
        return [maxEval_1, __spreadArrays(maximizingActions, [action])];
    }
    else {
        var minEval_1 = Number.POSITIVE_INFINITY;
        substates.forEach(function (childPosition) {
            var ev = miniMaxResToStaticEvaluation(minimax(childPosition, depth, game_state_selectors_1.GET_PlayerColor(game_state_selectors_1.GET_GameStateNextToPlace(game_tree_state_1.getStateFromTree(childPosition))), mainPlayer, maximizingActions));
            minEval_1 = Math.min(minEval_1, ev);
        });
        return [minEval_1, maximizingActions];
    }
}
// For a given state, returns the static evaluation of
// a position for the player p. i.e. score of the player p. 
function staticEvaluation(p, state) {
    var players = game_state_selectors_1.GET_GameStatePlayers(state);
    for (var i = 0; i < players.length; i++) {
        var currentPlayer = players[i];
        if (game_state_selectors_1.GET_PlayerColor(currentPlayer) === p) {
            return game_state_selectors_1.GET_PlayerScore(currentPlayer);
        }
    }
    throw console.error("penguin not in cState!");
}
// all positions of pengiun on cBoard.
function givenPenguinPosns(board, penguin) {
    var pPosns = [];
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            var e = board[i][j];
            if (game_state_predicates_1.PRED_isPenguinSpace(e) && game_state_selectors_1.GET_penguinColor(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(e))) == penguin) {
                pPosns.push({ row: i, col: j });
            }
        }
    }
    return pPosns;
}
// Move made from `prevState` to `nextState`.
function getFromTo(prevState, nextState, p) {
    var prevBoard = game_state_selectors_1.GET_GameStateBoard(prevState);
    var player = game_state_selectors_1.GET_GameStateNextToPlace(prevState);
    var prevPenguinPosns = game_state_functions_1.getPenguinPositionsForGameBoard(player, prevState);
    var nextPenguinPosns = game_state_functions_1.getPenguinPositionsForGameBoard(player, nextState);
    for (var i = 0; i < prevPenguinPosns.length; i++) {
        if (!isInReachable(nextPenguinPosns, prevPenguinPosns[i])) {
            for (var j = 0; j < nextPenguinPosns.length; j++) {
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
    var reachablePoints = game_state_reachable_1.getReachable(board, from);
    return isInReachable(reachablePoints, to);
}
// checks if given item is in given list
function isInReachable(list, item) {
    for (var i = 0; i < list.length; i++) {
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
