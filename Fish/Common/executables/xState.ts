import { getReachable } from "../states/compact-state/compact-board-reachable";
import { CBoard, CPosn } from "../states/compact-state/compact-state-data-definition";
import { compactPosnToBoardPosn } from "../states/compact-state/compact-state-interface";
import { InputPosition, InputState } from "../states/input-state/input-state-data-definition";
import { getFirstPlayer } from "../states/input-state/input-state-interface";
import { inputBoardToCompactBoard, inputPosnToCompactPosn } from "../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state"
import { BoardPosn } from "../utils/other-data-definitions";


export function xState(inputState: InputState): InputState | false {

  let cboard: CBoard = inputBoardToCompactBoard(inputState.board)

  let firstPenguinInputPosn: InputPosition = getFirstPlayer(inputState).places[0]
  let firstPenguinCPosn: CPosn = inputPosnToCompactPosn(firstPenguinInputPosn);
  let firstPenguinBoardPosn: BoardPosn = compactPosnToBoardPosn(firstPenguinCPosn);

  let reachablePosns = getReachable(cboard, firstPenguinBoardPosn);

  if (reachablePosns.length === 0) {
    return false
  } else {


    // let inputPosn: InputPosition =
    // return inputPosnToCompactPosn([reachablePosns[0].row, reachablePosns[0].col]);
    return false;

  }

}