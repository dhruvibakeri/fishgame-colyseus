import { GameState, Player } from "../states/game-state/game-state-data-definition";
import { BoardPosn } from "../utils/other-data-definitions";
import { IllegalAction } from "../game-tree/game-tree-state";
import { Move } from "../minimax/best-action-game-state";
import * as Colyseus from "colyseus.js";
export declare function placementStrategy(state: GameState): BoardPosn | IllegalAction;
export declare function getBestActionStrategy(state: GameState, depth: number): Move | "SKIP";
export declare function isMyTurn(gs: GameState, player: Player): boolean;
export declare function placePenguin(room: Colyseus.Room, placementPosn: BoardPosn | IllegalAction): void;
export declare function movePenguin(room: Colyseus.Room, move: Move | "SKIP"): void;
//# sourceMappingURL=frontend.d.ts.map