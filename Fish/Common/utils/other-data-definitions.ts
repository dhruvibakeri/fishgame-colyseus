
/**
 * Represents the coordinate of a board tile. 
 */
export type BoardPosn = { row: number, col: number }

/**
 * Represents a position on the canvas. 
 */
export type CanvasPosn = { x: number, y: number };

/**
 * Represents the corners of a hexagon (Tuple of 6 corners).
 */
export type HexCorners = [CanvasPosn, CanvasPosn, CanvasPosn, CanvasPosn, CanvasPosn, CanvasPosn]

/**
 * Represents the board coordinate of a tile, and its
 * corresponding corner positions (on the canvas).
 */
export type HexTile = { posn: BoardPosn, corners: HexCorners }
