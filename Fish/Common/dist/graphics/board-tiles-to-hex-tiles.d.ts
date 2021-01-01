/**
 * Converts a binary board (0 | 1)[][] to a set of "hexgon corners"
 * and their corresponding board coordinates.
 */
import { HexTile } from "../utils/other-data-definitions";
/**
 * Converts a generic board of the given size into
 * a list of hex tiles for each usable space.
 */
export declare function boardToHexTiles<T>(size: number, board: T[][], isUsable: (cell: T) => boolean): HexTile[];
//# sourceMappingURL=board-tiles-to-hex-tiles.d.ts.map