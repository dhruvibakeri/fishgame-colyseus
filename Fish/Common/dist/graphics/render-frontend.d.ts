import { CState } from "../states/compact-state/compact-state-data-definition";
import { BoardPosn } from "../utils/other-data-definitions";
export declare const MOUSE_OVER_COLOR = "rgb(255, 165, 0, 0.3)";
export declare const MOUSE_PATH_COLOR = "rgb(255, 165, 0, 0.6)";
export declare const ICE_TILE_COLOR = "rgb(255, 165, 0, 1)";
export declare const ICE_TILE_BORDER = "rgba(255, 255, 255, 1.00)";
export declare const CANVAS_SELECTION_COLOR = "rgba(190, 211, 229, 0.40)";
export declare const CANVAS_BACKGROUND_COLOR = "rgb(190, 190, 190)";
export declare const DEFAULT_SIZE = 55;
export declare const DEFAULT_BOARD_ROWS = 6;
export declare const DEFAULT_BOARD_COLS = 5;
/**
 * A configuration object for fabric.Polygon that specifies
 * rendering properties like border, stroke, hover properties etc.
 */
export declare function genHexConfig(boardP: BoardPosn, fill: string, isEvented: boolean, clicked?: boolean): {
    boardPosn: BoardPosn;
    fill: string;
    hasControls: boolean;
    evented: boolean;
    lockMovementY: boolean;
    lockMovementX: boolean;
    selectable: boolean;
    hasBorders: boolean;
    stroke: string;
    strokeWidth: number;
    hoverCursor: string;
    perPixelTargetFind: boolean;
    clicked: boolean | undefined;
};
/**
 * The configuration object for the fabric.Image.
 * A configuration object that makes the image unselectable, unmovable,
 * changes the cursor to pointer, and provides the coordinates for its position.
 */
export declare function genImageConfig(imageX: number, imageY: number, boardP?: BoardPosn): {
    boardPosn: BoardPosn | undefined;
    left: number;
    top: number;
    lockMovementY: boolean;
    lockMovementX: boolean;
    selectable: boolean;
    hoverCursor: string;
};
/**
 * Sets the selection color and background color of the fabric canvas.
 * EFFECT: changes the fabric.canvas properties.
 * @returns void
 */
export declare function setCanvasConfig(fabricCanvas: any): void;
/**
 * Renders the board by setting the canvas configurations, the background dimensions and by
 * generating the Board itself.
 * @param {Natural} size The width of the hexagon is 3 * size and the height of the hexagon is 2 * size.
 * @param {Natural > 1} rows The number of rows of the hexagonal grid i.e. the Board.
 * @param {Natural > 0} cols The number of columns of the hexagonal grid i.e. the Board.
 */
export declare function render(size: number, rows: number, cols: number, state: CState, htmlCanvas: any, fabricCanvas: any): void;
/**
 * EFFECT: Sets the width and the height of the HTML and Fabric Canvases.
 * @param {PositiveNumber} width The width of the canvas to set.
 * @param {PositiveNumber} height The height of the canvas to set.
 */
export declare function setCanvasDimension(width: number, height: number, htmlCanvas: any, fabricCanvas: any): void;
//# sourceMappingURL=render-frontend.d.ts.map