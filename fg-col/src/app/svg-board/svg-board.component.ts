import { Component, OnInit } from '@angular/core';
import { equals } from 'ramda';
import { hexCoordToCorners, Posn, validMovePosns } from '../common';

// TODO: 
// - selection of the first one highlights the poly
// - if you click the first one again -- deselection happens
// - if you select an unreachable poly -- deselection happens
// - all reachable polys are marked
// - if you select a reachable poly, the penguin is moved, and the
//   `from` and `to` positions are marked!



let state = {
  "stage": "playing",
  "board": [
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 0, 2],
    [2, 2, -1, 2, 2]
  ],
  "players": [
    {
      "color": "red",
      "score": 0,
      "places": [[0, 0], [0, 4]],
      "status": "online",
      "name": "atharva",
      "depth": 2
    },
    {
      "color": "white",
      "score": 0,
      "places": [[0, 1], [1, 0]],
      "status": "online",
      "name": "dhruvi",
      "depth": 2
    },
    {
      "color": "brown",
      "score": 0,
      "places": [[0, 2], [1, 1]],
      "status": "online",
      "name": "thomas",
      "depth": 2
    },
    {
      "color": "black",
      "score": 0,
      "places": [[0, 3], [1, 2]],
      "status": "online",
      "name": "john",
      "depth": 2
    }
  ]
}

const SIZE = 40

let backDim = backgDimFromBoardDim(
  // get this out
  state.board.length,
  state.board[0].length,
  SIZE
)



@Component({
  selector: 'app-svg-board',
  templateUrl: './svg-board.component.html',
  styleUrls: ['./svg-board.component.css']
})
export class SvgBoardComponent implements OnInit {

  backDim = {
    width: backDim.width,
    height: backDim.height,
  };

  from: false | Posn = false;
  to: false | Posn = false;
  moveOptions: false | Posn[] = false;

  clickEvent(clickedstr) {
    let clicked = JSON.parse(`[${clickedstr}]`)

    if (this.from === false && this.to === false) {
      this.from = clicked;

      this.moveOptions = validMovePosns(<any>state, <any>this.from)

    } else if (this.from !== false && this.to === false) {
      if (equals(clicked, this.from)) {
        this.from = false;
      } else {
        this.to = clicked;
      }
    } else if (this.from !== false && this.to !== false) {
      console.log("from and to have been selected already")
    } else { // if (this.from === false && this.to !== false) {
      console.log("this is not possible")
    }
  }


  ps = stateToCorners(state).map(p => ({
    id: idToString(p.id),
    corners: cornersToString(p.corners)
  }))


  isPolySelected(pin) {
    let p = JSON.parse(`[${pin.id}]`)
    return (equals(p, this.from) || equals(p, this.to))
  }
  resetSelectedButton() {
    this.from = false;
    this.to = false;
  }


  constructor() { }

  ngOnInit(): void { }

}


type HexDisplayStructure = {
  points: [number, number][],
  id: [number, number],
  style: {
    fill: string
  }
}

type HexDisplayInfo = {
  points: string,
  id: string,
  style: string
}


function stateToCorners(state) {
  let board = state.board;
  let res = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      res.push({
        id: { x: i, y: j },
        corners: hexCoordToCorners(SIZE, i, j, 1),
        type: state.board[i][j]
      })
    }
  }
  return res;
}


export const cornersToString = (corners): string =>
  corners.map(c => c[1].toString() + "," + c[0].toString()).join(", ")

export const idToString = (id: { x: number, y: number }): string =>
  `${id.x},${id.y}`


/**
* Converts a row by column dimension of a board to a height by width
* dimension of the canvas.
* @param {Natural > 1} boardRows
* @param {Natural > 0} boardCols
* @param {PositiveInteger} hexSize
* @returns {CanvasDimension} The height and width of the canvas in pixels.
*/
function backgDimFromBoardDim(
  boardRows: number,
  boardCols: number,
  hexSize: number
) {
  return {
    // board width
    // -----------
    // Each column (2 tiles) has the width `5 * size`. but
    // every subsequent column shares `size` worth of width on
    // either side. So the subtraction accounts for doublecounting.
    width: (5 * hexSize * boardCols - (boardCols - 1) * hexSize),
    // board height
    // ------------
    // The tiles that are on the right are not relevant for height
    // but each tile has height `2 * size`. BUT the last tile (on
    // the right) adds half its height i.e. `size` amount of height.
    height: (boardRows + 1) * hexSize,
  }
}