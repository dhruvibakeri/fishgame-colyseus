import { Board, GameState, GameStateDone, GameStateJoining, GameStatePlacing, GameStatePlaying, PenguinColor, Player, Players, PlayerStatus, Space } from "./game-state-data-definition";
export declare function MAKE_GameStatePlaying(kind: string, board: Board, nextToMove: Player, players: Players): GameStatePlaying;
export declare function MAKE_GameStatePlacing(kind: string, board: Board, nextToMove: Player, players: Players): GameStatePlacing;
export declare function MAKE_GameStateJoining(kind: string, players: Players): GameStateJoining;
export declare function MAKE_GameStateDone(kind: string, board: Board, players: Players): GameStateDone;
export declare function MAKE_GameState(gameState: GameStateJoining | GameStatePlacing | GameStatePlaying | GameStateDone): GameState;
export declare function MAKE_Player(color: PenguinColor, score: number, status: PlayerStatus): Player;
export declare function MAKE_PenguinSpace(color: PenguinColor, fishes: number): Space;
export declare function MAKE_HoleSpace(): Space;
export declare function MAKE_FishesSpace(fishes: number): Space;
//# sourceMappingURL=game-state-constructors.d.ts.map