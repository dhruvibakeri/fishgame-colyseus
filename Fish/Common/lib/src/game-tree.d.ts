import { CMove, CPenguin, CPosn, CState } from "./cstate";
export declare type SubGameTree = [CState, () => GameTree[]];
export declare type GameTree = CState | SubGameTree;
export declare type Action = (MoveAction | PlaceAction | HoleAction | FishAction);
export declare type MoveAction = {
    kind: "move";
    posn: CMove;
};
export declare type PlaceAction = {
    kind: "place";
    player: CPenguin;
    posn: CPosn;
};
export declare type HoleAction = {
    kind: "hole";
    posn: CPosn;
};
export declare type FishAction = {
    kind: "placeFish";
    posn: CPosn;
    totalFishes: number;
};
export declare type IllegalAction = {
    kind: "illegalAction";
};
export declare function getStateFromTree(gameTree: GameTree): CState;
export declare function getChildren(gameTree: GameTree): GameTree[];
export declare function addParent(gameState: CState, subTrees: GameTree[]): GameTree;
export declare function createGameTree(gameState: CState): GameTree;
export declare function applyAction(action: Action, gs: CState): CState | IllegalAction;
export declare function applyToDirectlyReachable(gs: CState, func: (state: CState) => any): [CState, any][];
export declare function getValidSubStates(myGameState: CState): GameTree[];
export declare function makeAllMovesForAPenguin(penguin: CPenguin, fromPosn: CPosn, gs: CState): GameTree[];
export declare function isValidAction(action: Action, gs: CState): boolean;
export declare function takeAction(action: Action, gs: CState): CState;
