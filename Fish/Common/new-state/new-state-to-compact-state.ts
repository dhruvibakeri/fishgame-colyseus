import { State } from "../../../common";
import {
  CBoard,
  CScore,
  CState,
} from "../states/compact-state/compact-state-data-definition";
import { PenguinColor } from "../states/game-state/game-state-data-definition";
import {
  inputBoardToCBoardNoPlayers,
  inputPosnToCompactPosn,
} from "../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state";

export function newStateToCState(state: State): CState {
  return [
    state.stage,
    newBoardToCBoard(state),
    state.players ? state.players.map((p) => [p.color, p.score] as CScore) : [],
  ];
}

export function newBoardToCBoard(state: State): CBoard {
  let preBoard = inputBoardToCBoardNoPlayers(state.board);
  state.players.forEach((p) => {
    if (p.places) {
      p.places.forEach((place) => {
        let compactPosn = inputPosnToCompactPosn([place[0], place[1]]);
        preBoard[compactPosn[0]][compactPosn[1]] = [
          p.color as PenguinColor,
          state.board[place[0]][place[1]],
        ];
      });
    }
  });

  return preBoard;
}
