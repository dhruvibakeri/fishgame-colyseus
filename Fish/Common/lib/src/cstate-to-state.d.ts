import { CState, CBoard, CScores, CScore, CSpace } from "./cstate";
import { Board, GameState, Player, Players } from "./state";
/**
 * converts given CState to a GameState
 */
export declare function cStateToGameState(cState: CState): GameState;
export declare function cScoresToNextToPlace(cScores: CScores): Player;
export declare function cScoresToPlayers(cScores: CScores): Players;
export declare function cScoreToPlayer(cScore: CScore): Player;
export declare function cBoardToBoard(cBoard: CBoard): Board;
export declare function cSpaceToSpace(cSpace: CSpace): import("./state").Space;
