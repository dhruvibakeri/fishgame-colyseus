"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xBoard = void 0;
const compact_board_reachable_1 = require("../../states/compact-state/compact-board-reachable");
const compact_state_interface_1 = require("../../states/compact-state/compact-state-interface");
const input_state_to_compact_state_1 = require("../../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state");
// INPUT: BoardPosn is Matthias' JSON representation of the Board + a position
// OUTPUT: number represents the positions reachable from the position specified.
function xBoard(boardPosn) {
    let cBoard = input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(boardPosn.board);
    let cPos = input_state_to_compact_state_1.inputPosnToCompactPosn(boardPosn.position);
    let bPosn = compact_state_interface_1.compactPosnToBoardPosn(cPos);
    return compact_board_reachable_1.getReachable(cBoard, bPosn).length;
}
exports.xBoard = xBoard;
//# sourceMappingURL=xBoard.js.map