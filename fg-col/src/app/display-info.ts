import { State } from "./common";

export type DisplaySpec = HexDisplayInfo[]

export type HexDisplayInfo = {
  tileCorners: Posn[]
  penguinDisplaySpec?: PenguinDisplaySpec,
  fishDisplaySpec?: FishDisplaySpec
}

export type FishDisplaySpec = {
  totalFishes: number,
  fishSpec: { cx: number, cy: number, rx: number, ry: number }[]
}

export type PenguinDisplaySpec = {
  penguinSpec: { x: number, y: number, rx: number, ry: number, width: number, height: number }
  penguinSkinColor: string,
  penguinSize: number,
  leftEye: { center: Posn, radius: number, color: string },
  rightEye: { center: Posn, radius: number, color: string },
  nose: { corners: { l: Posn, r: Posn, b: Posn, }, color: string }
}

export type Posn = { x: number, y: number }


export function stateToDisplaySpec(state: State): HexDisplayInfo[] {
  let players = state.players
  let board = state.board
  let res = []
  for (let i = 0; i < board.length; i++) {
    let row = board[i]
    for (let j = 0; j < row.length; j++) {
      let cell = row[j]
      if (cell !== -1) { // if cell is not a hole
        for (let k = 0; i < players.length; k++) {
          let player = players[k];
          let places = player.places;
          for (let l = 0; l < places.length; l++) {
            let place = places[l];
            res.push({
              x: i,
              y: j,
            })
          }
        }
      }
    }
  }
  return undefined;
}







