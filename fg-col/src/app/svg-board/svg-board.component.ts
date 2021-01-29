import { Component } from '@angular/core';
import { equals, includes } from 'ramda';
import { backgDimFromBoardDim, getFishInfo, getPenguinInfo, getBoardCells } from "../renderinfo";
import { Posn, State, validMovePosns } from '../common';

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




@Component({
  selector: 'app-svg-board',
  templateUrl: './svg-board.component.html',
  styleUrls: ['./svg-board.component.css']
})
export class SvgBoardComponent {

  size = 40;
  backDim = {
    width: backgDimFromBoardDim(state.board.length, state.board[0].length, this.size).width,
    height: backgDimFromBoardDim(state.board.length, state.board[0].length, this.size).height
  };
  boardCells = getBoardCells(state, this.size);
  penguinInfo = getPenguinInfo(state, this.size);
  fishInfo = getFishInfo(state, this.size);

  // Click Selection Stuff

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

  resetSelectedButton() {
    this.from = false;
    this.to = false;
  }

  isPolySelected(pin) {
    let p = JSON.parse(`[${pin.id}]`)
    return (equals(p, this.from) || equals(p, this.to))
  }



}
