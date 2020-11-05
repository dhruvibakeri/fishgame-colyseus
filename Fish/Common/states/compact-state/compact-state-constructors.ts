import { CStage, CBoard, CState, CScores, CPenguin, CScore, CScorePenguin } from "./compact-state-data-definition";
import { GET__CBoardFromCState, GET__CScoresFromCState, GET__CStageFromCState, GET__CScoreNumFromCScore, GET__CPenguinFromCScore } from "./compact-state-selectors";

export function SET__CStageInCState(CState: CStage, cstate: CState): CState {
  return [CState, GET__CBoardFromCState(cstate), GET__CScoresFromCState(cstate)];
}

export function SET__CBoardInCstate(cboard: CBoard, cstate: CState): CState {
  return [GET__CStageFromCState(cstate), cboard, GET__CScoresFromCState(cstate)];
}

export function SET__CScoresInCState(cscore: CScores, cstate: CState): CState {
  return [GET__CStageFromCState(cstate), GET__CBoardFromCState(cstate), cscore];
}

export function MAKE__CState(cStage: CStage, cBoard: CBoard, cScores: CScores): CState {
  return [cStage, cBoard, cScores]
}

export function SET__CPenguinInCScore(cpenguin: CScorePenguin, onescore: CScore): CScore {
  return [cpenguin, GET__CScoreNumFromCScore(onescore)]
}

export function SET__CScoreNuminCScore(cscore: number, onescore: CScore): CScore {
  return [GET__CPenguinFromCScore(onescore), cscore]
}

export function MAKE__CScore(cPenguin: CScorePenguin, score: number): CScore {
  return [cPenguin, score];
}