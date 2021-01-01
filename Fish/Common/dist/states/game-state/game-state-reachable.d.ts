import { BoardPosn } from "../../utils/other-data-definitions";
import { Board } from "./game-state-data-definition";
export declare function getReachable(board: Board, boardPosn: BoardPosn): BoardPosn[];
/**
 * `Direction` is all possible directions a player may move:
 * "north" | "south" | "northWest" | "northEast" | "southWest" | "southEast"
 */
export declare type Direction = "north" | "south" | "northWest" | "northEast" | "southWest" | "southEast";
/**
 * Paths specifies longest paths in all `Direction`s as an object
 * with `Direction`s as the keys and `BoardPosn`s as the values.
 */
export declare type Paths = {
    "north": BoardPosn[];
    "south": BoardPosn[];
    "northWest": BoardPosn[];
    "northEast": BoardPosn[];
    "southWest": BoardPosn[];
    "southEast": BoardPosn[];
};
/**
 * gets a `Path` object from `boardPosn` in `baord`.
 */
export declare function getPaths(board: Board, boardPosn: BoardPosn): {
    north: BoardPosn[];
    south: BoardPosn[];
    northWest: BoardPosn[];
    northEast: BoardPosn[];
    southWest: BoardPosn[];
    southEast: BoardPosn[];
};
/**
 * longest path in a direction that getNeighborInDirection
 * generates the neighbors for.
 */
export declare function getPathInDirection(board: Board, posn: BoardPosn, getNeighborInDirection: (p: BoardPosn) => BoardPosn): BoardPosn[];
export declare function getReachableNeighbours(board: Board, boardPosn: BoardPosn): BoardPosn[];
export declare function getPathInDirection1(board: Board, posn: BoardPosn, getNeighborInDirection: (p: BoardPosn) => BoardPosn): BoardPosn[];
/**
 * Checks if a neighbouring tile is not a valid move
 */
export declare function isNeighborUnreachable(board: Board, posn: BoardPosn): boolean;
export declare function getNeighborNorth(boardPosn: BoardPosn): BoardPosn;
export declare function getNeighborSouth(boardPosn: BoardPosn): BoardPosn;
export declare function getNeighborNorthWest(boardPosn: BoardPosn): BoardPosn;
export declare function getNeighborNorthEast(boardPosn: BoardPosn): BoardPosn;
export declare function getNeighborSouthWest(boardPosn: BoardPosn): BoardPosn;
export declare function getNeighborSouthEast(boardPosn: BoardPosn): BoardPosn;
//# sourceMappingURL=game-state-reachable.d.ts.map