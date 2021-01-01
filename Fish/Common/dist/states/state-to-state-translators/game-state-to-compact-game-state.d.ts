import { CState, CScores, CBoard, CSpace } from "../compact-state/compact-state-data-definition";
import { Board, GameState, GameStateDone, GameStateJoining, GameStatePlacing, GameStatePlaying, OnTile, OnUsableSpace, Player, Players, Space } from "../game-state/game-state-data-definition";
export declare function stateToCState(gameState: GameState): CState;
export declare function joiningToCState(gameStateJoining: GameStateJoining): CState;
export declare function playersToCScores(players: Players): CScores;
export declare function nextToPlaceAndPlayersInvariant(nextToPlace: Player, players: Players): void;
export declare function placingToCState(gameStatePlacing: GameStatePlacing): CState;
export declare function playingToCState(gameStatePlaying: GameStatePlaying): CState;
export declare function doneToCState(gameStateDone: GameStateDone): CState;
export declare function boardToCBoard(board: Board): CBoard;
export declare function spaceToCSpace(space: Space): CSpace;
export declare function onUsableSpaceToCSpace(onUsableSpace: OnUsableSpace): CSpace;
export declare function onTileToCSpace(onTile: OnTile): CSpace;
//# sourceMappingURL=game-state-to-compact-game-state.d.ts.map