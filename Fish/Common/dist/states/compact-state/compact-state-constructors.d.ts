import { CStage, CBoard, CState, CScores, CScore, CScorePenguin } from "./compact-state-data-definition";
export declare function SET__CStageInCState(CState: CStage, cstate: CState): CState;
export declare function SET__CBoardInCstate(cboard: CBoard, cstate: CState): CState;
export declare function SET__CScoresInCState(cscore: CScores, cstate: CState): CState;
export declare function MAKE__CState(cStage: CStage, cBoard: CBoard, cScores: CScores): CState;
export declare function SET__CPenguinInCScore(cpenguin: CScorePenguin, onescore: CScore): CScore;
export declare function SET__CScoreNuminCScore(cscore: number, onescore: CScore): CScore;
export declare function MAKE__CScore(cPenguin: CScorePenguin, score: number): CScore;
//# sourceMappingURL=compact-state-constructors.d.ts.map