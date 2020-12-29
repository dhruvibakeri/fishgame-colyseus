import {
  CBoard,
  CPenguin,
  CSpace,
  CState,
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
  MOUSE_OVER_COLOR,
  setCanvasConfig,
  setCanvasDimension,
} from "./render-frontend";
import { BoardPosn, HexTile } from "../utils/other-data-definitions";
import { BLACK } from "../states/game-state/game-state-data-definition";

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
}

function renderBlankTile(hex: HexTile, t: CSpace, canvas): void {
  canvas.add(
    new fabric.Polygon(
      hex.corners,
      genHexConfig(hex.posn, ICE_TILE_COLOR, true)
    )
  );
}

function renderFishes(size: number, hex: HexTile, t: CSpace, canvas): void {
  canvas.add(
    new fabric.Polygon(
      hex.corners,
      genHexConfig(hex.posn, ICE_TILE_COLOR, true)
    )
  );

  const fish = new Image();
  fish.src = ImportedData.fish;

  let fishPosUp = 0;
  let fishPosDown = size / 5;
  let fishPos = 0;
  // adds fish on the cur hex
  fish.onload = function (img) {
    for (let i = 0; i < t; i++) {
      if (i % 2 == 0) {
        let im = new fabric.Image(
          fish,
          genImageConfig(
            hex.corners[0].x + size,
            hex.corners[0].y + fishPosUp,
            hex.posn
          )
        ).scale(size / 245);
        canvas.add(im);
      } else {
        let im = new fabric.Image(
          fish,
          genImageConfig(
            hex.corners[0].x + size,
            hex.corners[0].y - fishPosUp,
            hex.posn
          )
        ).scale(size / 245);
        canvas.add(im);
      }

      fishPosUp += size / 5;
      fishPosDown += size / 5;
    }
  };
}

function renderPenguin(size: number, hex: HexTile, t: CPenguin, canvas): void {
  canvas.add(
    new fabric.Polygon(
      hex.corners,
      genHexConfig(hex.posn, ICE_TILE_COLOR, true)
    )
  );

  var penguinImg = new Image();
  penguinImg.onload = function (img) {
    let im = new fabric.Image(
      penguinImg,
      genImageConfig(
        hex.corners[0].x + size - size / 3,
        hex.corners[0].y - size * 1.25,
        hex.posn
      )
    ).scale(size / 175);
    canvas.add(im);
  };
  penguinImg.src = ImportedData[t[0]];
}

export function renderPenguinRoster(
  cpenguins: CPenguin[],
  htmlCanvas,
  fabricCanvas
) {
  fabricCanvas.selectionColor = BLACK;
  fabricCanvas.backgroundColor = BLACK;
  setCanvasDimension(100 * cpenguins.length, 100, htmlCanvas, fabricCanvas);
  let i = 0;
  let j = 0;
  let k = 0;
  cpenguins.forEach((p) => {
    var penguinImg = new Image();
    penguinImg.onload = function (img) {
      let im = new fabric.Image(penguinImg, {
        left: 100 * i,
        top: 0,
        lockMovementY: true,
        lockMovementX: true,
        selectable: false,
        hoverCursor: "pointer",
      }).scale(45 / 175);
      fabricCanvas.add(im);
      i++;
    };
    penguinImg.src = ImportedData[p[0]];
  });

  cpenguins.forEach((p) => {
    let text = new fabric.Text(p[1].toString(), {
      left: j === 0 ? 55 : 155,
      top: 30,
      fontSize: 35,
      fontFamily: "Courier Prime",
      fontWeight: "bold",
      fill: "white",
      lockMovementY: true,
      lockMovementX: true,
      selectable: false,
      hoverCursor: "pointer",
    });
    fabricCanvas.add(text);
    j++;
  });

  cpenguins.forEach((p) => {
    let text = new fabric.Text(p[0], {
      left: k === 0 ? 30 : 130,
      top: 75,
      fontSize: 15,
      fontFamily: "Courier Prime",
      fontWeight: "bold",
      fill: "white",
      lockMovementY: true,
      lockMovementX: true,
      selectable: false,
      hoverCursor: "pointer",
    });
    fabricCanvas.add(text);
    k++;
  });

  const rect = new fabric.Rect({
    top: 0,
    left: 0,
    width: 96,
    height: 96,
    hasBorder: true,
    stroke: "white",
    strokeWidth: 4,
    lockMovementY: true,
    lockMovementX: true,
    selectable: false,
    fill: "transparent",
  });

  fabricCanvas.add(rect);
}

export function renderChatBox(messages: string[], htmlCanvas, fabricCanvas) {
  fabricCanvas.selectionColor = BLACK;
  fabricCanvas.backgroundColor = BLACK;
  setCanvasDimension(
    210,
    210 + (messages.length < 7 ? 0 : (messages.length - 6) * 35),
    htmlCanvas,
    fabricCanvas
  );
  let j: number = 0;
  messages.forEach((p) => {
    let text = new fabric.Text(p, {
      left: 0,
      top: 35 * j,
      fontSize: 12,
      fontFamily: "Courier Prime",
      fontWeight: "bold",
      fill: "white",
      lockMovementY: true,
      lockMovementX: true,
      selectable: false,
      hoverCursor: "pointer",
    });
    fabricCanvas.add(text);
    j++;
  });

  var div: HTMLElement = document.getElementById("scrollbottom") as HTMLElement;
  div.scrollTop = (210 +
    (messages.length < 7 ? 0 : (messages.length - 6) * 50) -
    210) as number;
}

export function renderBoard(
  size: number,
  board: CBoard,
  canvas,
  state?: CState
): void {
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
    if (state && state[0] === "placing") {
      PLACEMENT_POSN = e.target.boardPosn;
      console.log(PLACEMENT_POSN);
    } else if (state && state[0] === "playing") {
      if (flag) {
        FROM_POSN = e.target.boardPosn;
        e.target.set("fill", MOUSE_OVER_COLOR);
        e.target.set("clicked", true);
        canvas.renderAll();
        console.log("from", FROM_POSN);
        flag = false;
      } else {
        TO_POSN = e.target.boardPosn;
        console.log("to", TO_POSN);
        CAN_MOVE = true;
        flag = true;
      }
      console.log("can move", CAN_MOVE);
    }
  });

  canvas.on("mouse:over", function (e) {
    e.target.set("fill", MOUSE_OVER_COLOR);
    canvas.renderAll();
  });

  canvas.on("mouse:out", function (e) {
    e.target.set("fill", ICE_TILE_COLOR);
    if (e.target.clicked) {
      e.target.set("fill", MOUSE_OVER_COLOR);
    }
    canvas.renderAll();
  });
}
