import { GameState, Player } from "../states/game-state/game-state-data-definition";
import { BoardPosn } from "../utils/other-data-definitions";
export declare type BoardMove = [BoardPosn, BoardPosn] | "SKIP";
export declare type SubGameTree = [GameState, () => GameTree[]];
export declare type GameTree = GameState | SubGameTree;
export declare type Action = (MoveAction | PlaceAction);
export declare type MoveAction = {
    kind: "move";
    posn: BoardMove;
};
export declare type PlaceAction = {
    kind: "place";
    player: Player;
    posn: BoardPosn;
};
export declare type IllegalAction = {
    kind: "illegalAction";
};
export declare function getStateFromTree(gameTree: GameTree): GameState;
export declare function getChildren(gameTree: GameTree): GameTree[];
export declare function addParent(gameState: GameState, subTrees: GameTree[]): GameTree;
export declare function createGameTree(gameState: GameState): GameTree;
export declare function applyAction(action: Action, gs: GameState): GameState | IllegalAction;
export declare function applyToDirectlyReachable(gs: GameState, func: (state: GameState) => any): [GameState, any][];
export declare function getValidSubStatesForGameBoard(myGameState: GameState): GameTree[];
export declare function getValidSubStates(myGameState: GameState): GameTree[];
export declare function makeAllMovesForAPenguin(fromPosn: BoardPosn, gs: GameState): GameTree[];
export declare function isValidAction(action: Action, gs: GameState): boolean;
export declare function takeAction(action: Action, gs: GameState): GameState;
export declare function isGameOver(state: GameState): boolean;
//# sourceMappingURL=game-tree-state.d.ts.map