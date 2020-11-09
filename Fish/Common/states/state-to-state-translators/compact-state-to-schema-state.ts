import { CState, CBoard, CScores } from "../compact-state/compact-state-data-definition";
import { GET__CStageFromCState, GET__CBoardFromCState, GET__CScoresFromCState, GET__CPenguinFromCScore, GET__CScoreNumFromCScore } from "../compact-state/compact-state-selectors";
import { ScoreSchema, StateSchema } from "../schema-state/schema-state-data-definition"

/**
 * converts given CState to a StateSchema
 */
export function cStateToSchema(cState: CState): StateSchema {
  const cStage = GET__CStageFromCState(cState)
  const cBoard = GET__CBoardFromCState(cState)
  const cScores = GET__CScoresFromCState(cState)

  return new StateSchema(
    cStage,
    cBoard[0].length,
    flattenBoard(cBoard),
    cScores.map(score => new ScoreSchema(GET__CPenguinFromCScore(score), GET__CScoreNumFromCScore(score)))
  )
}



/**
 * converts the given CBoard which is a 2D array,
 * into a list of strings
 * - this is because Colyseus cannot handle
 * 2D arrays
 */
function flattenBoard(cBoard: CBoard): string[] {
  let res: string[] = [];
  for (let i = 0; i < cBoard.length; i++) {
    for (let j = 0; j < cBoard[i].length; j++) {
      let e = cBoard[i][j]
      res.push(e.toString());
    }
  }
  return res;
}


