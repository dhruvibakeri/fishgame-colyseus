import { CState, CBoard, CScores, CScore, CSpace } from "../compact-state/compact-state-data-definition";
import { Board, GameState, Player, Players, TileInfo, UnusableSpace, UsableSpace } from "../game-state/game-state-data-definition";
export declare const TILE_SIZE = 45;
export declare const MAX_TILES = 5;
export declare const DEFAULT_STATUS = "online";
export declare const TILE_INFO: TileInfo;
/**
 * converts given CState to a GameState
 */
export declare function cStateToGameState(cState: CState): GameState;
export declare function cScoresToNextToPlace(cScores: CScores): Player;
export declare function cScoresToPlayers(cScores: CScores): Players;
export declare function cScoreToPlayer(cScore: CScore): Player;
export declare function cBoardToBoard(cBoard: CBoard): Board;
export declare function cSpaceToSpace(cSpace: CSpace): UsableSpace | UnusableSpace | undefined;
//# sourceMappingURL=compact-state-to-game-state.d.ts.map