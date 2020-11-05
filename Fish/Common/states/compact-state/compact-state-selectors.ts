import { CStage, CBoard, CState, CScores, CPenguin, CScore, CScorePenguin } from "./compact-state-data-definition";

export function GET__CStageFromCState(CState: CState): CStage {
  return CState[0];
}

export function GET__CBoardFromCState(CState: CState): CBoard {
  return CState[1];
}

export function GET__CScoresFromCState(cstate: CState): CScores {
  return cstate[2];
}

export function GET__nextMove(cState: CState): CScorePenguin {
  return GET_currentPlayerFromCScores(GET__CScoresFromCState(cState));
}

export function GET_currentScore(cScores: CScores): CScore {
  return cScores[0]
}

export function GET_currentPlayerFromCScores(cScores: CScores): CScorePenguin {
  return GET_currentScore(cScores)[0];
}

export function GET_currentPlayer(cState: CState): CScorePenguin {
  return GET__CPenguinFromCScore(GET__CScoresFromCState(cState)[0])
}

export function GET__CPenguinFromCScore(onecscore: CScore): CScorePenguin {
  return onecscore[0];
}

export function GET__CScoreNumFromCScore(onescore: CScore): number {
  return onescore[1]
};