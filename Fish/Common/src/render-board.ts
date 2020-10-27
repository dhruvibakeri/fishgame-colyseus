import { boardToHexTiles, HexTile } from "./board-to-hex-tiles";
import { fabric } from "fabric";
import { CBoard, CPenguin, CSpace, PRED_isCSpaceACFish, PRED_isCSpaceACHole, PRED_isCSpaceACPenguin, PRED_isCSpaceACUnusable } from "./cstate";
import { CANVAS_BACKGROUND_COLOR, genHexConfig, genImageConfig, ICE_TILE_COLOR } from "./graphics";
import ImportedData from "./importData";

const PENGUIN_HEIGHT = 354; //px
const PENGUIN_WIDTH = 214; //px

function renderUnusable(hex: HexTile, t: CSpace, canvas): void {
  // No rendering for "unusable" space. We just show the background.
}

function renderHole(hex: HexTile, t: CSpace, canvas): void {
  canvas.add(new fabric.Polygon(hex.corners, genHexConfig(hex.posn, "grey", false)));
}

function renderBlankTile(hex: HexTile, t: CSpace, canvas): void {
  canvas.add(new fabric.Polygon(hex.corners, genHexConfig(hex.posn, ICE_TILE_COLOR, false)))
}

function renderFishes(size: number, hex: HexTile, t: CSpace, canvas): void {
  canvas.add(new fabric.Polygon(hex.corners, genHexConfig(hex.posn, ICE_TILE_COLOR, false)))

  const fish = new Image();
  fish.src = ImportedData.fish;

  let fishPosUp = 0;
  let fishPosDown = (size / 5);
  let fishPos = 0;
  // adds fish on the cur hex
  for (let i = 0; i < t; i++) {

    if (i % 2 == 0) {
      let im = new fabric.Image(fish, genImageConfig(
        hex.corners[0].x + size,
        hex.corners[0].y + fishPosUp
      )).scale(size / 245)
      canvas.add(im)
    } else {
      let im = new fabric.Image(fish, genImageConfig(
        hex.corners[0].x + size,
        hex.corners[0].y - fishPosUp
      )).scale(size / 245)
      canvas.add(im)
    }

    fishPosUp += (size / 5);
    fishPosDown += (size / 5);
  }
}




function renderPenguin(size: number, hex: HexTile, t: CPenguin, canvas): void {
  canvas.add(new fabric.Polygon(hex.corners, genHexConfig(hex.posn, ICE_TILE_COLOR, false)))
  const penguin = new Image();
  penguin.src = ImportedData[t];
  let im = new fabric.Image(penguin, genImageConfig(
    hex.corners[0].x + size - size / 3,
    hex.corners[0].y - size * 1.25
  )).scale(size / 175)
  canvas.add(im);
}

export function renderBoard(size: number, board: CBoard, canvas: fabric.Canvas): void {
  let hexes: HexTile[] = boardToHexTiles(size, board, (space) => !PRED_isCSpaceACUnusable(space));
  hexes.forEach((hex: HexTile) => {
    const boardPosn = hex.posn
    const t = board[boardPosn.row][boardPosn.col];
    if (PRED_isCSpaceACUnusable(t)) {
      renderUnusable(hex, t, canvas);
    } else if (PRED_isCSpaceACHole(t)) {
      renderHole(hex, t, canvas);
    } else if (PRED_isCSpaceACFish(t) && t === 0) {
      renderBlankTile(hex, t, canvas);
    } else if (PRED_isCSpaceACFish(t)) {
      renderFishes(size, hex, t, canvas);
    } else if (PRED_isCSpaceACPenguin(t)) {
      renderPenguin(size, hex, t, canvas);
    }
  })
}
