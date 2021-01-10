import { addIndex, map } from "ramda";
import { Board, boardDimToCorners, hexCoordToCorners, Player, Posn, State } from "./common";

/** ----------------------------------------------- index ---------------------------------------------------------------- */

export let ctx = (<HTMLCanvasElement>document.getElementById('canvas')).getContext('2d');

/** ----------------------------------------------- render ---------------------------------------------------------------- */

/** renders a state on the html canvas' "ctx" global variable */
export const renderState = (size: number, state: State) =>
  (renderBoard(size, state.board), renderPenguins(size, state.players, ctx.strokeStyle, ctx.fillStyle))

/** renders the board on on the html canvas' "ctx" global variable */
export const renderBoard = (size: number, board: Board) =>
  renderHexGrid(size, board, boardDimToCorners(size, board.length, board[0].length, 1))

/** displays each board space at corresponding corner position. Each hex has size "size" */
export const renderHexGrid = (size: number, board: Board, corners: (Posn[])[][]) =>
  addIndex(map)((row: number[], r) => addIndex(map)(((_col, c) =>
  (board[r][c] === -1 ?
    renderHex(corners[r][c], "gray", "red", ctx.strokeStyle, ctx.fillStyle)
    : (
      renderHex(corners[r][c], "yellow", "red", ctx.strokeStyle, ctx.fillStyle),
      renderFishes(size, r, c, board[r][c], 10, "blue", ctx.strokeStyle, ctx.fillStyle)
    )
  )), row), board)

/** displays a penguin at for all players in a board with the given size */
export const renderPenguins = (size: number, players: Player[], oldStrokeStyle, oldFillStyle) =>
(addIndex(map)((player: Player, i) => addIndex(map)(((place, _j) =>
  (ctx.fillStyle = players[i].color, renderPenguin(size, hexCoordToCorners(size, place[0], place[1], 1)[0]))),
  player.places), players), ctx.strokeStyle = oldStrokeStyle, ctx.fillStyle = oldFillStyle)

export const renderPenguin = (size: number, westCorner: Posn): void =>
(ctx.beginPath(), ctx.ellipse(westCorner[1] + size * 1.5, westCorner[0] + size / 2, 10, 10, 0, Math.PI * 2, 0),
  ctx.closePath(), ctx.stroke(), ctx.fill())

/** for given corner positions, draws a hex on canvas with the given fill/outline colors  */
export const renderHex = (cornerPosns: Posn[], fillColor: string, outlineColor: string, oldStrokeStyle, oldFillStyle) => {
  ctx.strokeStyle = outlineColor;
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(cornerPosns[0][1], cornerPosns[0][0]);
  ctx.lineTo(cornerPosns[1][1], cornerPosns[1][0]);
  ctx.lineTo(cornerPosns[2][1], cornerPosns[2][0]);
  ctx.lineTo(cornerPosns[3][1], cornerPosns[3][0]);
  ctx.lineTo(cornerPosns[4][1], cornerPosns[4][0]);
  ctx.lineTo(cornerPosns[5][1], cornerPosns[5][0]);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = oldStrokeStyle;
  ctx.fillStyle = oldFillStyle;
}

/** display a the given number of fishes on the tile at [r, c] position, with the given fCol, with fSpace between them */
export const renderFishes = (s: number, r: number, c: number, f: number, fSpace: number, fCol: string, oldStroke, oldFill) => {
  ctx.fillStyle = fCol;
  if (f > 0) {
    displayFishesOnTile(s, hexCoordToCorners(s, r, c, 1), f, fSpace)
  }
  ctx.fillStyle = oldFill;
  ctx.strokeStyle = oldStroke;
}

/** displays f fishes at a tile whose corners are given with "fSpace" space between them */
export const displayFishesOnTile = (s: number, corners: Posn[], f: number, fSpace: number) =>
  renderAllFishesOnTile(0, corners[1][0] + s / 4, f, s, fSpace, corners)

/** displays currF more fishes at a tile whose corners are given with "fSpace" space between them */
export const renderAllFishesOnTile = (currF: number, yOff: number, f: number, s: number, fSpace: number, corners: Posn[]) => {
  if (currF !== f) {
    ctx.beginPath();
    ctx.ellipse(corners[0][1] + 1.5 * s, yOff, 30, 3, 0, Math.PI * 2, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    renderAllFishesOnTile(currF + 1, yOff + fSpace, f, s, fSpace, corners);
  }
}

/** ----------------------------------------------------------------------------------------------------------------------- */