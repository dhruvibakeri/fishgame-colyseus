import { Component, OnInit } from '@angular/core';
import { equals, includes } from 'ramda';
import { take } from "lodash";
import { hexCoordToCorners, Posn, State, validMovePosns } from '../common';


let state: State = {
  "stage": "playing",
  "board": [
    [4, 3, 2, 1, 0],
    [3, 2, 2, -1, 2],
    [2, -1, 2, 4, 2],
    [2, 2, 4, 0, 2],
    [1, 2, -1, 2, 2]
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

const SIZE = 40;
let backDim = backgDimFromBoardDim(state.board.length, state.board[0].length, SIZE)

@Component({
  selector: 'app-svg-board',
  templateUrl: './svg-board.component.html',
  styleUrls: ['./svg-board.component.css']
})
export class SvgBoardComponent implements OnInit {

  backDim = { width: backDim.width, height: backDim.height };
  from: false | Posn = false;
  to: false | Posn = false;

  clickEvent(clickedstr) {
    let clicked = JSON.parse(`[${clickedstr}]`)
    if (this.from === false && this.to === false) {
      this.from = clicked;
    } else if (this.from !== false && this.to === false) {
      if (equals(clicked, this.from)) {
        this.from = false;
      } else {
        if (includes(clicked, validMovePosns(state, this.from))) {
          this.to = clicked;
        } else {
          this.to = false;
          this.from = false;
        }
      }
    } else if (this.from !== false && this.to !== false) {
      // 
    } else {
      // 
    }
  }


  boardCells = this.getBoardCells();
  penguinInfo = this.getPenguinInfo();
  fishInfo = this.getFishInfo(state as any);


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
      let cornOb = { x: corn[1], y: corn[0] + ((SIZE / 2)) /** vertical centering  */ };
      return generatePenguinSpecObject(penguinInfo.color, SIZE, cornOb, { x: penguinInfo.place[0], y: penguinInfo.place[1] })
    })
  }

  getFishInfo(state) {
    let fishSpecs = []
    for (let i = 0; i < state.board.length; i++) {
      for (let j = 0; j < state.board[i].length; j++) {
        let totalFishes = state.board[i][j]
        if (totalFishes > 0) {
          let corn = hexCoordToCorners(SIZE, i, j, 0)[1]
          fishSpecs.push(genFishSpec(totalFishes, corn[1], corn[0], SIZE, { x: i, y: j }, hasPenguin(state, [i, j])))
        }
      }
    }
    return fishSpecs;
  }

  constructor() { }

  ngOnInit(): void { }
}

function hasPenguin(state: State, pos: [number, number]) {
  const players = state.players;
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const places = player.places;
    for (let j = 0; j < places.length; j++) {
      const place = places[j];
      if (equals(place, pos)) {
        return true;
      }
    }
  }
  return false;
}



// assuming that the [x,y] position is the top left position on the board. 
function genFishSpec(totalFishes: number, x: number, y: number, hexSize: number,
  boardPos: { x: number, y: number }, hasPenguin: boolean): {
    cx: number, cy: number, rx: number, ry: number
  }[] {
  const subGrid = hexSize / 4;

  if (hasPenguin) {
    const topFish = {
      cx: x + subGrid * 2,
      cy: y + subGrid,
      rx: subGrid * 2.5,
      ry: subGrid / 2,
      id: idToString(boardPos)
    }

    const bottomFish = {
      cx: x + subGrid * 2,
      cy: y + subGrid * 7,
      rx: subGrid * 2.5,
      ry: subGrid / 2,
      id: idToString(boardPos)
    }

    const leftFish = {
      cx: x - subGrid,
      cy: y + subGrid * 4,
      rx: subGrid / 2,
      ry: subGrid * 2.5,
      id: idToString(boardPos)
    }

    const rightFish = {
      cx: x + subGrid * 5,
      cy: y + subGrid * 4,
      rx: subGrid / 2,
      ry: subGrid * 2.5,
      id: idToString(boardPos)
    }

    return take([topFish, bottomFish, leftFish, rightFish], totalFishes);
  } else {
    let fishes = [];
    for (let i = 0; i < totalFishes; i++) {
      fishes.push({
        id: idToString(boardPos),
        cx: x + (subGrid * 2),
        cy: y + (subGrid * 2) + (i * (subGrid * 1.1)),
        rx: subGrid * 2.5,
        ry: subGrid / 2
      })
    }
    return fishes;
  }



}

// genFishSpec(1, 0, 0, 400)
// => [{ cx: 200, cy: 525, rx: 300, ry: 25 }]


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
  offset: { x: number, y: number },
  penguinPlace: { x: number, y: number }
) {
  const gridSize = size / 8;
  const eyeSize = gridSize * 2;
  return {
    id: idToString(penguinPlace),
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
