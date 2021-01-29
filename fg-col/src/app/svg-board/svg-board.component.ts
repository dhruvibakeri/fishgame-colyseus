import { Component, OnInit } from '@angular/core';
import { equals } from 'ramda';
import { hexCoordToCorners, Posn, State, validMovePosns } from '../common';

// TODO: 
// - selection of the first one highlights the poly
// - if you click the first one again -- deselection happens
// - if you select an unreachable poly -- deselection happens
// - all reachable polys are marked
// - if you select a reachable poly, the penguin is moved, and the
//   `from` and `to` positions are marked!



let state: State = {
  "stage": "playing",
  "board": [
    [2, 2, 2, 2, 2],
    [2, 2, 2, -1, 2],
    [2, -1, 2, 2, 2],
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


  // 1. add types for these two things. 
  // 2. then merge them.
  // 
  // Better: rethink how I can generate this data directly from the state.
  //         Efficiently.
  // 
  boardCells = this.getBoardCells()
  penguinInfo = this.getPenguinInfo()


  isPolySelected(pin) {
    let p = JSON.parse(`[${pin.id}]`)
    return (equals(p, this.from) || equals(p, this.to))
  }
  resetSelectedButton() {
    this.from = false;
    this.to = false;
  }

  getBoardCells() {
    let idCornersTypeArr = stateTo__IdCornersType(state);
    return idCornersTypeArr.map(p => ({
      id: idToString(p.id),
      corners: cornersToString(p.corners),
      type: p.type,
    }))
  }







  getPenguinInfo() {
    return stateToPenguinDisplayInfo(state as any).map(penguinInfo => {
      let corn = hexCoordToCorners(SIZE, penguinInfo.place[0], penguinInfo.place[1], 0)[1] // end corner posn
      let cornOb = { x: corn[1], y: corn[0] + SIZE / 2 /** vertical centering  */ };
      return generatePenguinSpecObject(penguinInfo.color, SIZE, cornOb)
    })
  }




  constructor() {
    console.log(this.boardCells);
    console.log(this.penguinInfo);
  }

  ngOnInit(): void { }

  onMouseOverPoly(p) {
    // console.log(JSON.stringify(p));
  }

}


function mapColorToGrad(color: string): string {
  switch (color) {
    case "red":
      return "red";
    case "black":
      return "black";
    case "brown":
      return "brown";
    case "white":
      return "white";
  }
}


function stateToPenguinDisplayInfo(state: State): { color: string, place: [number, number] }[] {
  let players = state.players;
  let res = []
  for (let i = 0; i < players.length; i++) {
    let player = players[i];
    let color = player.color;
    let places = player.places;
    for (let j = 0; j < places.length; j++) {
      let place = places[j];
      res.push({
        color: mapColorToGrad(color),
        place: place
      })
    }
  }
  return res;
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


function stateTo__IdCornersType(state: State) {
  let board = state.board;
  let res = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const hexCorners =
        hexCoordToCorners(SIZE, i, j, 1).map(c => ({ x: c[0], y: c[1] }));
      res.push({
        id: { x: i, y: j },
        corners: hexCorners,
        type: state.board[i][j]
      })
    }
  }
  return res;
}


export const cornersToString = (corners): string =>
  corners.map(c => c.y.toString() + "," + c.x.toString()).join(", ")

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



// imagine the penguin's face is a size x size pixels 
// square. We need to place 2 eyes (circles) and 1 nose (triangle)
// so we divide the face (square) into an 8 by 8 grid, and place
// the eyes and nose in relation to the face grid.
function generatePenguinSpecObject(
  color: string,
  size: number,
  offset: { x: number, y: number }
) {
  const gridSize = size / 8;
  const eyeSize = gridSize * 2;
  return {
    x: offset.x,
    y: offset.y,
    penguinSkinColor: colorToSVGFillStyle(color),
    penguinSize: size,
    cornerRounding: gridSize,
    leftEye: {
      center: { x: eyeSize + offset.x, y: eyeSize + offset.y },
      radius: gridSize,
      color: colorToSVGFillStyle("goldenrod")
    },
    rightEye: {
      center: { x: (size - eyeSize) + offset.x, y: eyeSize + offset.y },
      radius: gridSize,
      color: colorToSVGFillStyle("goldenrod")
    },
    nose: {
      corners: triangleCornersToString({
        l: { x: gridSize * 3 + offset.x, y: gridSize * 4 + offset.y },
        r: { x: gridSize * 5 + offset.x, y: gridSize * 4 + offset.y },
        b: { x: gridSize * 4 + offset.x, y: gridSize * 6 + offset.y }
      }),
      color: colorToSVGFillStyle("goldenrod")
    }
  }
}

// converts a color to a string that goes into svg tag. 
// "red" -> "fill: red; "
const colorToSVGFillStyle = (color: string) =>
  `fill:${color} ;`

// converts the nose corners to an svg-compatible string
const triangleCornersToString = ({ l, r, b }: {
  l: { x: number, y: number },
  r: { x: number, y: number },
  b: { x: number, y: number },
}) => `${l.x},${l.y} ${r.x},${r.y} ${b.x},${b.y}`
