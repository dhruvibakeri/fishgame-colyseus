"use strict";
exports.__esModule = true;
exports.xState = void 0;
var game_state_reachable_1 = require("../../states/game-state/game-state-reachable");
var compact_state_interface_1 = require("../../states/compact-state/compact-state-interface");
var game_state_functions_1 = require("../../states/game-state/game-state-functions");
var input_state_interface_1 = require("../../states/input-state/input-state-interface");
var compact_state_to_game_state_1 = require("../../states/state-to-state-translators/compact-state-to-game-state");
var compact_to_input_state_1 = require("../../states/state-to-state-translators/compact-state-to-input-state/compact-to-input-state");
var game_state_to_compact_game_state_1 = require("../../states/state-to-state-translators/game-state-to-compact-game-state");
var input_state_to_compact_state_1 = require("../../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state");
// TODO: xState fails on the new cBoard. Fix it.
function xState(inputState) {
    if (inputState.players.length === 0 || inputState.players[0].places.length === 0) {
        return false;
    }
    else {
        var firstPenguinInputPosn = input_state_interface_1.getFirstPlayer(inputState).places[0];
        var firstPenguinCPosn = input_state_to_compact_state_1.inputPosnToCompactPosn(firstPenguinInputPosn);
        var firstPenguinBoardPosn = compact_state_interface_1.compactPosnToBoardPosn(firstPenguinCPosn);
        var inputGameState = compact_state_to_game_state_1.cStateToGameState(input_state_to_compact_state_1.inputStateToCState(inputState));
        var board = inputGameState.board;
        var reachablePosns = game_state_reachable_1.getReachableNeighbours(board, firstPenguinBoardPosn);
        if (reachablePosns.length === 0) {
            return false;
        }
        else {
            var fromPosn = inputState.players[0].places[0];
            var fromCposn = input_state_to_compact_state_1.inputPosnToCompactPosn(fromPosn);
            var fromBoardPosn = compact_state_interface_1.compactPosnToBoardPosn(fromCposn);
            var toPosn = [reachablePosns[0].row, reachablePosns[0].col];
            var toBoardPosn = compact_state_interface_1.compactPosnToBoardPosn(toPosn);
            var move = [fromBoardPosn, toBoardPosn];
            var movedState = game_state_functions_1.moveGameState(inputGameState, move);
            var cState = game_state_to_compact_game_state_1.stateToCState(movedState);
            return { players: compact_to_input_state_1.compactPlayersToInputPlayers(cState[2], toPosn, inputState.players), board: compact_to_input_state_1.compactBoardToResultBoard(cState[1]) };
        }
    }
}
exports.xState = xState;
