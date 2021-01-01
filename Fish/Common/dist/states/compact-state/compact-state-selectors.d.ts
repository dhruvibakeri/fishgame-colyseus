import { CStage, CBoard, CState, CScores, CScore, CScorePenguin } from "./compact-state-data-definition";
export declare function GET__CStageFromCState(CState: CState): CStage;
export declare function GET__CBoardFromCState(CState: CState): CBoard;
export declare function GET__CScoresFromCState(cstate: CState): CScores;
export declare function GET__nextMove(cState: CState): CScorePenguin;
export declare function GET_currentScore(cScores: CScores): CScore;
export declare function GET_currentPlayerFromCScores(cScores: CScores): CScorePenguin;
export declare function GET_currentPlayer(cState: CState): CScorePenguin;
export declare function GET__CPenguinFromCScore(onecscore: CScore): CScorePenguin;
export declare function GET__CScoreNumFromCScore(onescore: CScore): number;
//# sourceMappingURL=compact-state-selectors.d.ts.map