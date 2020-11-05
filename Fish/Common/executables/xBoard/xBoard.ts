import { getReachable } from "../../states/compact-state/compact-board-reachable";
import { CBoard, CPosn } from "../../states/compact-state/compact-state-data-definition";
import { compactPosnToBoardPosn } from "../../states/compact-state/compact-state-interface";
import { InputBoardPosn } from "../../states/input-state/input-state-data-definition";
import { inputBoardToCBoardNoPlayers, inputPosnToCompactPosn } from "../../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state";
import { BoardPosn } from "../../utils/other-data-definitions";


// INPUT: BoardPosn is Matthias' JSON representation of the Board + a position
// OUTPUT: number represents the positions reachable from the position specified.
export function xBoard(boardPosn: InputBoardPosn): number {

  let cBoard: CBoard = inputBoardToCBoardNoPlayers(boardPosn.board);
  let cPos: CPosn = inputPosnToCompactPosn(boardPosn.position)
  let bPosn: BoardPosn = compactPosnToBoardPosn(cPos);
  return getReachable(cBoard, bPosn).length;
}