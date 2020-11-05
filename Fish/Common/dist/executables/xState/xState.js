"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xState = void 0;
const compact_board_reachable_1 = require("../../states/compact-state/compact-board-reachable");
const compact_state_interface_1 = require("../../states/compact-state/compact-state-interface");
const input_state_interface_1 = require("../../states/input-state/input-state-interface");
const input_state_to_compact_state_1 = require("../../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state");
// TODO: xState fails on the new cBoard. Fix it.
function xState(inputState) {
    let cboard = input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(inputState.board);
    let firstPenguinInputPosn = input_state_interface_1.getFirstPlayer(inputState).places[0];
    let firstPenguinCPosn = input_state_to_compact_state_1.inputPosnToCompactPosn(firstPenguinInputPosn);
    let firstPenguinBoardPosn = compact_state_interface_1.compactPosnToBoardPosn(firstPenguinCPosn);
    let reachablePosns = compact_board_reachable_1.getReachable(cboard, firstPenguinBoardPosn);
    if (reachablePosns.length === 0) {
        return false;
    }
    else {
        // let inputPosn: InputPosition =
        // return inputPosnToCompactPosn([reachablePosns[0].row, reachablePosns[0].col]);
        return false;
    }
}
exports.xState = xState;
//# sourceMappingURL=xState.js.map