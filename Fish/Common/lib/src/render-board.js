"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderBoard = void 0;
const board_to_hex_tiles_1 = require("./board-to-hex-tiles");
const fabric_1 = require("fabric");
const cstate_1 = require("./cstate");
const graphics_1 = require("./graphics");
const importData_1 = __importDefault(require("./importData"));
const PENGUIN_HEIGHT = 354; //px
const PENGUIN_WIDTH = 214; //px
function renderUnusable(hex, t, canvas) {
    // No rendering for "unusable" space. We just show the background.
}
function renderHole(hex, t, canvas) {
    canvas.add(new fabric_1.fabric.Polygon(hex.corners, graphics_1.genHexConfig(hex.posn, "grey", false)));
}
function renderBlankTile(hex, t, canvas) {
    canvas.add(new fabric_1.fabric.Polygon(hex.corners, graphics_1.genHexConfig(hex.posn, graphics_1.ICE_TILE_COLOR, false)));
}
function renderFishes(size, hex, t, canvas) {
    canvas.add(new fabric_1.fabric.Polygon(hex.corners, graphics_1.genHexConfig(hex.posn, graphics_1.ICE_TILE_COLOR, false)));
    const fish = new Image();
    fish.src = importData_1.default.fish;
    let fishPosUp = 0;
    let fishPosDown = (size / 5);
    let fishPos = 0;
    // adds fish on the cur hex
    for (let i = 0; i < t; i++) {
        if (i % 2 == 0) {
            let im = new fabric_1.fabric.Image(fish, graphics_1.genImageConfig(hex.corners[0].x + size, hex.corners[0].y + fishPosUp)).scale(size / 245);
            canvas.add(im);
        }
        else {
            let im = new fabric_1.fabric.Image(fish, graphics_1.genImageConfig(hex.corners[0].x + size, hex.corners[0].y - fishPosUp)).scale(size / 245);
            canvas.add(im);
        }
        fishPosUp += (size / 5);
        fishPosDown += (size / 5);
    }
}
function renderPenguin(size, hex, t, canvas) {
    canvas.add(new fabric_1.fabric.Polygon(hex.corners, graphics_1.genHexConfig(hex.posn, graphics_1.ICE_TILE_COLOR, false)));
    const penguin = new Image();
    penguin.src = importData_1.default[t];
    let im = new fabric_1.fabric.Image(penguin, graphics_1.genImageConfig(hex.corners[0].x + size - size / 3, hex.corners[0].y - size * 1.25)).scale(size / 175);
    canvas.add(im);
}
function renderBoard(size, board, canvas) {
    let hexes = board_to_hex_tiles_1.boardToHexTiles(size, board, (space) => !cstate_1.PRED_isCSpaceACUnusable(space));
    hexes.forEach((hex) => {
        const boardPosn = hex.posn;
        const t = board[boardPosn.row][boardPosn.col];
        if (cstate_1.PRED_isCSpaceACUnusable(t)) {
            renderUnusable(hex, t, canvas);
        }
        else if (cstate_1.PRED_isCSpaceACHole(t)) {
            renderHole(hex, t, canvas);
        }
        else if (cstate_1.PRED_isCSpaceACFish(t) && t === 0) {
            renderBlankTile(hex, t, canvas);
        }
        else if (cstate_1.PRED_isCSpaceACFish(t)) {
            renderFishes(size, hex, t, canvas);
        }
        else if (cstate_1.PRED_isCSpaceACPenguin(t)) {
            renderPenguin(size, hex, t, canvas);
        }
    });
}
exports.renderBoard = renderBoard;
