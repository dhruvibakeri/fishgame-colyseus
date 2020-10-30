/**
 * Converts a binary board (0 | 1)[][] to a set of "hexgon corners"
 * and their corresponding board coordinates.
 */
/**
 * Represents the coordinate of a board tile.
 */
export declare type BoardPosn = {
    row: number;
    col: number;
};
/**
 * Represents a position on the canvas.
 */
export declare type CanvasPosn = {
    x: number;
    y: number;
};
/**
 * Represents the corners of a hexagon (Tuple of 6 corners).
 */
export declare type HexCorners = [CanvasPosn, CanvasPosn, CanvasPosn, CanvasPosn, CanvasPosn, CanvasPosn];
/**
 * Represents the board coordinate of a tile, and its
 * corresponding corner positions (on the canvas).
 */
export declare type HexTile = {
    posn: BoardPosn;
    corners: HexCorners;
};
/**
 * Converts a generic board of the given size into
 * a list of hex tiles for each usable space.
 */
export declare function boardToHexTiles<T>(size: number, board: T[][], isUsable: (cell: T) => boolean): HexTile[];
