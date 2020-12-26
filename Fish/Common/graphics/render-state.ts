import {
  CBoard,
  CPenguin,
  CSpace,
} from "../states/compact-state/compact-state-data-definition";
import {
  PRED_isCSpaceACFish,
  PRED_isCSpaceACHole,
  PRED_isCSpaceACPenguin,
  PRED_isCSpaceACUnusable,
} from "../states/compact-state/compact-state-predicates";
const fabric = require("fabric").fabric;
import { boardToHexTiles } from "./board-tiles-to-hex-tiles";
import ImportedData from "../frontend/importData";
import {
  genHexConfig,
  genImageConfig,
  ICE_TILE_COLOR,
} from "./render-frontend";
import { BoardPosn, HexTile } from "../utils/other-data-definitions";

const PENGUIN_HEIGHT = 354; //px
const PENGUIN_WIDTH = 214; //px

export let PLACEMENT_POSN: BoardPosn = { row: 0, col: 0 };
export let FROM_POSN: BoardPosn = { row: 0, col: 0 };
export let TO_POSN: BoardPosn = { row: 0, col: 0 };
export let CAN_MOVE: boolean = false;
let flag = true;

function renderUnusable(hex: HexTile, t: CSpace, canvas): void {
  // No rendering for "unusable" space. We just show the background.
}

function renderHole(hex: HexTile, t: CSpace, canvas): void {
  const fabricHole = new fabric.Polygon(
    hex.corners,
    genHexConfig(hex.posn, "grey", false)
  );
  canvas.add(fabricHole);
  /*canvas.on("mouse:up", function (e) {
    console.log("Event mouse:up Triggered", e.target.boardPosn);
  });

  canvas.on("mouse:down", function () {
    console.log("Event mouse:down Triggered");
  });*/
}

function renderBlankTile(hex: HexTile, t: CSpace, canvas): void {
  canvas.add(
    new fabric.Polygon(
      hex.corners,
      genHexConfig(hex.posn, ICE_TILE_COLOR, false)
    )
  );
}

function renderFishes(size: number, hex: HexTile, t: CSpace, canvas): void {
  canvas.add(
    new fabric.Polygon(
      hex.corners,
      genHexConfig(hex.posn, ICE_TILE_COLOR, false)
    )
  );

  const fish = new Image();
  fish.src = ImportedData.fish;

  let fishPosUp = 0;
  let fishPosDown = size / 5;
  let fishPos = 0;
  // adds fish on the cur hex
  for (let i = 0; i < t; i++) {
    if (i % 2 == 0) {
      let im = new fabric.Image(
        fish,
        genImageConfig(
          hex.posn,
          hex.corners[0].x + size,
          hex.corners[0].y + fishPosUp
        )
      ).scale(size / 245);
      canvas.add(im);
    } else {
      let im = new fabric.Image(
        fish,
        genImageConfig(
          hex.posn,
          hex.corners[0].x + size,
          hex.corners[0].y - fishPosUp
        )
      ).scale(size / 245);
      canvas.add(im);
    }

    fishPosUp += size / 5;
    fishPosDown += size / 5;
  }
}

function renderPenguin(size: number, hex: HexTile, t: CPenguin, canvas): void {
  canvas.add(
    new fabric.Polygon(
      hex.corners,
      genHexConfig(hex.posn, ICE_TILE_COLOR, false)
    )
  );
  const penguin = new Image();
  penguin.src = ImportedData[t[0]];
  let im = new fabric.Image(
    penguin,
    genImageConfig(
      hex.posn,
      hex.corners[0].x + size - size / 3,
      hex.corners[0].y - size * 1.25
    )
  ).scale(size / 175);
  canvas.add(im);
}

export function renderBoard(size: number, board: CBoard, canvas): void {
  let hexes: HexTile[] = boardToHexTiles(
    size,
    board,
    (space) => !PRED_isCSpaceACUnusable(space)
  );
  hexes.forEach((hex: HexTile) => {
    const boardPosn = hex.posn;
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
  });

  canvas.on("mouse:up", function (e) {
    CAN_MOVE = false;
    console.log("Event mouse:up Triggered", e.target.boardPosn);
    PLACEMENT_POSN = e.target.boardPosn;
    console.log(PLACEMENT_POSN);
    if (flag) {
      FROM_POSN = e.target.boardPosn;
      console.log("from", FROM_POSN);
      flag = false;
    } else {
      TO_POSN = e.target.boardPosn;
      console.log("to", TO_POSN);
      CAN_MOVE = true;
      flag = true;
    }
    console.log("can move", CAN_MOVE);
  });
}
