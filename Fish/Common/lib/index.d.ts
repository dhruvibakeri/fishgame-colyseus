import { CBoard, CPosn } from "./src/cstate";
export declare function getReachableNeighbours(board: CBoard, boardPosn: CPosn): CPosn[];
export declare function getPathsNeighbours(board: CBoard, boardCoord: CPosn): {
    north: CPosn[];
    south: CPosn[];
    northWest: CPosn[];
    northEast: CPosn[];
    southWest: CPosn[];
    southEast: CPosn[];
};
export declare function getPathInDirection1(board: CBoard, posn: CPosn, getNeighborInDirection: (posn: any) => CPosn): CPosn[];
