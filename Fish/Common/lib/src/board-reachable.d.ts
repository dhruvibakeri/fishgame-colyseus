import { CBoard, CPosn } from "./cstate";
export declare function getReachable(board: CBoard, boardPosn: CPosn): CPosn[];
export declare function getPaths(board: CBoard, boardCoord: CPosn): {
    north: CPosn[];
    south: CPosn[];
    northWest: CPosn[];
    northEast: CPosn[];
    southWest: CPosn[];
    southEast: CPosn[];
};
export declare function getPathInDirection(board: CBoard, posn: CPosn, getNeighborInDirection: (posn: any) => CPosn): CPosn[];
export declare function isNeighborUnreachable(board: CBoard, posn: CPosn): boolean;
export declare function getNeighborNorth(posn: CPosn): CPosn;
export declare function getNeighborSouth(posn: CPosn): CPosn;
export declare function getNeighborNorthWest(posn: CPosn): CPosn;
export declare function getNeighborNorthEast(posn: CPosn): CPosn;
export declare function getNeighborSouthWest(posn: CPosn): CPosn;
export declare function getNeighborSouthEast(posn: CPosn): CPosn;
