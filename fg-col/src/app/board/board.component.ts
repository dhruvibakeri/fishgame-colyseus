import { Component, OnInit } from '@angular/core';
import 'fabric';
declare const fabric: any;

import { boardDimToCorners, descriptionToState, gameDesc, gamePlayMakeMove, gdInfoToState, mygd, Player, State } from '../common'
import { renderState } from '../canvas'
import { pipeFromArray } from 'rxjs/internal/util/pipe';

const ICE_TILE_COLOR = "rgb(255,165,0,0.6)";




@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  canvas: any;

  hexSize = 40;
  boardWidth = 5;
  boardHeight = 6;

  constructor() {
  }


  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', { selection: false });
    let st = descriptionToState({
      row: this.boardHeight,
      column: this.boardWidth,
      players: [
        ["atharva", 2],
        ["dhruvi", 2],
        ["thomas", 2],
        ["john", 2]
      ],
      fish: 2
    }, false)
    let board = st.board;
    let corners = boardDimToCorners(this.hexSize, board.length, board[0].length, 1)

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        // hex pos [num, num]
        let hid = [i, j]
        // hex corners as jsobjs (not numpairs)
        let cs = corners[i][j].map(p => ({ x: p[1], y: p[0] }))
        if (board[i][j] === -1) {
          this.canvas.add(new fabric.Polygon(cs, genHexConfig(hid, "grey", false)))
        } else {
          let tileColor = getTileColor(st, i, j);
          let p = new fabric.Polygon(cs, genHexConfig(hid, tileColor, false))
          this.canvas.add(p)

          if (board[i][j] > 0) {
            let n = new fabric.Text(board[i][j].toString(), {
              left: cs[0].x + this.hexSize * 1.5,
              top: cs[0].y,
              fontSize: 20,
              fill: 'yellow',
              stroke: 'purple',
              strokeWidth: 1,
              evented: false,
              hasControls: false,
              lockMovementY: true,
              lockMovementX: true,
              hoverCursor: "pointer",
              perPixelTargetFind: true
            })
            this.canvas.add(n)
          }

          setTimeout(() => {
            this.events(p, tileColor)
          }, 1000);
        }
      }
    }
  }

  // Input: Fabric Polygon
  // -- Sets events to true
  // -- fills mouseover
  // -- unfill on mouseout (as long as it hasn't been clicked)
  // -- fill mousedown (if 0 filled) 
  //    unfill mousedown if the clicked has been filled
  //    fill with 2nd color if the clicked has not been filled
  // -- send over msg on 2nd 
  events(p, tileColor) {
    // set evented to true NOW. 
    // `events` is wrapped around a timeout of 1s to let everything
    // render first, then start the events. 
    p.set("evented", true);

    p.on('mouseover', () => {
      if (!p.clicked) {
        let s = p.fill;
        p.set("fill", s.substr(0, s.length - 4) + "0.3)")
        this.canvas.requestRenderAll()
      }
    })
    p.on('mouseout', () => {
      if (!p.clicked) {
        p.set("fill", tileColor)
      }
    })
    p.on('mousedown', () => {
      let totalSelected = this.canvas.getObjects().filter(o => o.clicked === true).length
      // if this is the first selection...
      if (totalSelected === 0) {
        // then make the hex blue and mark it as selected!
        let s = p.fill;
        p.set("fill", s.substr(0, s.length - 4) + "0.78)")
        p.set("clicked", true)
        this.canvas.sendToBack(p);
        // If 1 polygon has been selected. 
      } else if (totalSelected === 1) {
        // if the given polygon had been selected
        if (p.clicked) {
          // ... unmark it. 
          p.set("fill", tileColor)
          p.set("clicked", false)
        } else {
          let from = this.canvas.getObjects().filter(o => o.clicked)[0].pos
          // mark it as dark blue and console.log the move. 
          let s = p.fill;
          p.set("fill", s.substr(0, s.length - 4) + "0.78)")
          p.set("clicked", true)
          let to = p.pos
          this.makeMove(from, to)
        }
      } else {
        // if more than one have been selected, do nothing!
      }
      // this.addNumber(num, corners);
    })
  }

  makeMove(from: [number, number], to: [number, number]) {
    console.log(JSON.stringify(from) + " -> " + JSON.stringify(to));
  }

}

export function genHexConfig(
  pos,
  fill: string,
  isEvented: boolean,
  clicked?: boolean
) {
  return {
    pos: pos,
    fill: fill,
    hasControls: false,
    evented: isEvented,
    lockMovementY: true,
    lockMovementX: true,
    selectable: true,
    hasBorders: false,
    stroke: "grey",
    strokeWidth: 1,
    hoverCursor: "pointer",
    perPixelTargetFind: true,
    clicked: clicked,
  };
}

// row, col -> color
// gets the color of the tile, given a row, col
function getTileColor(state: State, rowIdx: number, colIdx: number): string {
  let players: Player[] = state.players;
  for (let i = 0; i < players.length; i++) {
    let player = players[i];
    let places = player.places
    for (let j = 0; j < places.length; j++) {
      let place = places[j];
      let r = place[0];
      let c = place[1];
      if (r === rowIdx && c === colIdx) {
        if (player.color === "red") {
          return "rgb(255,0,0,0.6)"
        }
        if (player.color === "brown") {
          return "rgb(165,42,42,0.6)"
        }
        if (player.color === "black") {
          return "rgb(57,57,57,0.6)"
        }
        if (player.color === "white") {
          return "rgb(240,245,255,0.6)"
        }
      }
    }
  }
  return ICE_TILE_COLOR;
}