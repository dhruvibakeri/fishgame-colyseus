import { Room, Client } from "colyseus";
import { CBoard, CState } from "../states/compact-state/compact-state-data-definition";
import { GameState, GameStateDone, GameStatePlaying, PenguinColor, Player, Players } from "../states/game-state/game-state-data-definition";
import { ScoreSchema, StateSchema } from "../states/schema-state/schema-state-data-definition";
/**
 * For our Fish Game we are using a ,multiplayer gaming framework for Typescript called 'COLYSEUS' : https://colyseus.io/
 * A "room" in Colyseus will represent the referee in our Fish Game.
 *
 * NOTE : in our class FishRoom we are keeping track of players that get kicked out.
 *        when the game is over the referee can report the kickedPlayers list
 *        and also the final GameState. This way the tournament manager will
 *        have access to the outcome of the game and the failing and cheating players.
 */
export declare class FishRoom extends Room<StateSchema> {
    maxClients: number;
    private DEFAULT_ROWS;
    private DEFAULT_COLS;
    private players;
    private colors;
    private initBoard;
    private initCState;
    private initState;
    private totalTiles;
    private playerMap;
    private kickedPlayers;
    constructor();
    onCreate(options: any): void;
    onJoin(client: Client): void;
    onLeave(Client: any): void;
    onDispose(): void;
    onAuth(Client: any, options: any, req: any): boolean;
}
export declare function addRandomHoles(board: CBoard, holeCount: number): void;
export declare function addRandomFish(board: CBoard): void;
export declare function customizeState(state: CState, totalTiles: number): CState;
export declare function getIdx(col: PenguinColor, list: ScoreSchema[]): number;
export declare function getIdxForRemoval(col: PenguinColor, list: Players): number;
export declare function removePenguin(player: PenguinColor, state: GameState): GameState;
export declare function changeState(state: GameState, ourState: StateSchema): void;
export declare function allPenguinsPlaced(state: GameState): boolean;
export declare function hasMovesLeft(penguin: Player, state: GameStatePlaying): boolean;
export declare const getWinner: (state: GameStateDone) => PenguinColor;
//# sourceMappingURL=backend.d.ts.map