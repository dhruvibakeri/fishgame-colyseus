"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.xTree = void 0;
var game_tree_state_1 = require("../../game-tree/game-tree-state");
var best_action_game_state_1 = require("../../minimax/best-action-game-state");
var compact_state_interface_1 = require("../../states/compact-state/compact-state-interface");
var game_state_functions_1 = require("../../states/game-state/game-state-functions");
var game_state_predicates_1 = require("../../states/game-state/game-state-predicates");
var game_state_reachable_1 = require("../../states/game-state/game-state-reachable");
var compact_state_to_game_state_1 = require("../../states/state-to-state-translators/compact-state-to-game-state");
var input_state_to_compact_state_1 = require("../../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state");
var utility_functions_1 = require("../../utils/utility-functions");
/**
 *
 * - we have the current state, and the move the player makes on this state
    - we make that move, get the state where the move is made
- we do getValidSubstates on that state and receive possible moves for the next player
- we retrieve the to positions for those moves and return the one which is on the neighboring tile of the previous player
 */
function xTree(moveActionQuery) {
    var inputGameState = compact_state_to_game_state_1.cStateToGameState(input_state_to_compact_state_1.inputStateToCState(moveActionQuery.state));
    var compactFromPosn = input_state_to_compact_state_1.inputPosnToCompactPosn(moveActionQuery.from);
    var compactToPosn = input_state_to_compact_state_1.inputPosnToCompactPosn(moveActionQuery.to);
    var boardFromPosn = compact_state_interface_1.compactPosnToBoardPosn(compactFromPosn);
    var boardToPosn = compact_state_interface_1.compactPosnToBoardPosn(compactToPosn);
    var boardMove = [boardFromPosn, boardToPosn];
    var movedState = game_state_functions_1.moveGameState(inputGameState, boardMove);
    var neighboringPosns = game_state_reachable_1.getReachableNeighbours(movedState.board, boardToPosn);
    var movePosn = getAllPenguinPosns(movedState, neighboringPosns);
    if (movePosn === false) {
        return false;
    }
    else {
        var fromCPosn = utility_functions_1.boardPosnToCompactPosn(movePosn[0]);
        var toCPosn = utility_functions_1.boardPosnToCompactPosn(movePosn[1]);
        var fromResPosn = input_state_to_compact_state_1.compactPosnToInputPosn(fromCPosn);
        var toResPosn = input_state_to_compact_state_1.compactPosnToInputPosn(toCPosn);
        return [fromResPosn, toResPosn];
    }
}
exports.xTree = xTree;
function getAllPenguinPosns(state, neighbouringPosns) {
    var nextTurn = state.nextToPlace.penguinColor;
    var subStates = game_tree_state_1.getValidSubStatesForGameBoard(state);
    var subStateMoves = [];
    for (var i = 0; i < subStates.length; i++) {
        if (game_state_predicates_1.PRED_isGameState(subStates[i])) {
            var move = best_action_game_state_1.getFromTo(state, subStates[i], nextTurn);
            subStateMoves = __spreadArrays(subStateMoves, [move]);
        }
        else {
            var move = best_action_game_state_1.getFromTo(state, subStates[i][0], nextTurn);
            subStateMoves = __spreadArrays(subStateMoves, [move]);
        }
    }
    for (var j = 0; j < neighbouringPosns.length; j++) {
        for (var k = 0; k < subStateMoves.length; k++) {
            if (subStateMoves[k] != false) {
                var moveTo_1 = subStateMoves[k][1];
                if (moveTo_1.row === neighbouringPosns[j].row && moveTo_1.col === neighbouringPosns[j].col) {
                    return subStateMoves[k];
                }
            }
        }
    }
    return false;
}
