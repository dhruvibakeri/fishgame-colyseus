import { Board, State } from "../../../common";
import { PlayerPlaces, ScoreSchema, StateSchema } from "./new-schema-state";

export function newStateToNewSchema(state: State): StateSchema {
  return new StateSchema(
    state.stage,
    state.board[0].length,
    flattenBoardNewState(state.board),
    state.players.map(
      (player) =>
        new ScoreSchema(
          player.color,
          player.score,
          player.places.map((p) => new PlayerPlaces(p[0], p[1]))
        )
    )
  );
}

function flattenBoardNewState(board: Board): string[] {
  let res: string[] = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let e = board[i][j];
      if (e < 0) {
        res.push(e.toString());
      } else {
        res.push(e.toString());
      }
    }
  }
  return res;
}
