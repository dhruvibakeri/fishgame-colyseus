import { Component, Input, SimpleChanges } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { equals, includes } from 'ramda';
import { CookieService } from 'ngx-cookie';
import {
  backgDimFromBoardDim,
  getFishInfo,
  getPenguinInfo,
  getBoardCells,
} from '../renderinfo';
import {
  currentPlayer,
  getPenguinPosns,
  getPlaces,
  getPlayers,
  isHoleAtPos,
  isPenguinAtPosn,
  moveAvatar,
  movesLeft,
  placeAvatar,
  Posn,
  skipMove,
  State,
  validMovePosns,
} from '../common';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { GameRoom } from '../game-room/gameRoom';
import { ActivatedRoute } from '@angular/router';

/*let state: State = {
  stage: 'playing',
  board: [
    [4, 3, 2, 1, 0],
    [3, 2, 2, -1, 2],
    [2, -1, 2, 4, 2],
    [2, 2, 4, 0, 2],
    [1, 2, -1, 2, 2],
  ],
  players: [
    {
      color: 'red',
      score: 0,
      places: [
        [0, 0],
        [0, 4],
      ],
      status: 'online',
      name: 'atharva',
      depth: 2,
    },
    {
      color: 'white',
      score: 0,
      places: [
        [0, 1],
        [1, 0],
      ],
      status: 'online',
      name: 'dhruvi',
      depth: 2,
    },
    {
      color: 'brown',
      score: 0,
      places: [
        [0, 2],
        [1, 1],
      ],
      status: 'online',
      name: 'thomas',
      depth: 2,
    },
    {
      color: 'black',
      score: 0,
      places: [
        [0, 3],
        [1, 2],
      ],
      status: 'online',
      name: 'john',
      depth: 2,
    },
  ],
};*/

@Component({
  selector: 'app-svg-board',
  templateUrl: './svg-board.component.html',
  styleUrls: ['./svg-board.component.css'],
})
export class SvgBoardComponent {
  @Input() state: State;
  @Input() size: number;
  backDim;
  boardCells;
  penguinInfo;
  fishInfo;
  curState: State;
  roomidurl: string;
  room: AngularFireObject<GameRoom>;
  roomRef: any;
  roomRefPlayers: any;

  constructor(
    private cookieService: CookieService,
    public db: AngularFireDatabase,
    private route: ActivatedRoute
  ) {
    this.room = db.object('/rooms/' + this.roomidurl);
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  ngOnInit() {
    this.backDim = {
      width: backgDimFromBoardDim(
        this.state.board.length,
        this.state.board[0].length,
        this.size
      ).width,
      height: backgDimFromBoardDim(
        this.state.board.length,
        this.state.board[0].length,
        this.size
      ).height,
    };
    this.boardCells = getBoardCells(this.state, this.size);
    this.penguinInfo = getPenguinInfo(this.state, this.size);
    this.fishInfo = getFishInfo(this.state, this.size);
    this.roomidurl = this.route.snapshot.paramMap.get('id');
    this.db
      .object('/rooms/' + this.roomidurl)
      .valueChanges()
      .subscribe((roomRef) => {
        this.roomRef = roomRef;
        this.roomRefPlayers = this.roomRef.players;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    let stateChange = changes['state']
      ? changes['state'].currentValue
      : this.state;
    let sizeChange = changes['size'] ? changes['size'].currentValue : this.size;

    this.backDim = {
      width: backgDimFromBoardDim(
        stateChange.board.length,
        stateChange.board[0].length,
        sizeChange
      ).width,
      height: backgDimFromBoardDim(
        stateChange.board.length,
        stateChange.board[0].length,
        sizeChange
      ).height,
    };
    this.boardCells = getBoardCells(stateChange, sizeChange);
    this.penguinInfo = getPenguinInfo(stateChange, sizeChange);
    this.fishInfo = getFishInfo(stateChange, sizeChange);
    this.curState = stateChange;
  }

  // Click Selection Stuff

  from: false | Posn = false;
  to: false | Posn = false;

  clickEvent(clickedstr) {
    let clicked = JSON.parse(`[${clickedstr}]`);
    // placing a penguin
    if (this.curState.stage === 'placing') {
      if (
        this.getCookie('uuid') ===
        this.roomRefPlayers[getPlayers(this.curState)[0].name]
      ) {
        if (
          !isPenguinAtPosn(this.curState, clicked) ||
          !isHoleAtPos(this.curState, clicked)
        ) {
          this.db
            .object('/rooms/' + this.roomidurl)
            .update({ gameState: placeAvatar(clicked, this.curState) });
          if (
            getPenguinPosns(this.curState).length ===
            (6 - getPlayers(this.curState).length) * 2 - 1
          ) {
            this.db
              .object('/rooms/' + this.roomidurl + '/gameState')
              .update({ stage: 'playing' });
          }
        }
      } else {
        console.log('not your turn');
      }
    }

    // moving a penguin

    if (this.curState.stage === 'playing') {
      if (
        this.getCookie('uuid') ===
        this.roomRefPlayers[getPlayers(this.curState)[0].name]
      ) {
        if (this.from === false && this.to === false) {
          this.from = clicked;
        } else if (this.from !== false && this.to === false) {
          if (equals(clicked, this.from)) {
            this.from = false;
          } else {
            if (includes(clicked, validMovePosns(this.curState, this.from))) {
              this.to = clicked;
              this.db.object('/rooms/' + this.roomidurl).update({
                gameState: moveAvatar(
                  this.from,
                  this.to as Posn,
                  this.curState
                ),
              });
              this.to = false;
              this.from = false;
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
      } else {
        console.log('not your turn to move.');
      }
    }

    /**if (this.from === false && this.to === false) {
      this.from = clicked;  
    } else if (this.from !== false && this.to === false) {
      if (equals(clicked, this.from)) {
        this.from = false;
      } else {
        if (includes(clicked, validMovePosns(this.state, this.from))) {
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
    }*/
  }

  /*this.db
  .object('/rooms/' + this.roomidurl)
  .update({ gameState: placeAvatar(clicked, this.curState) });*/

  resetSelectedButton() {
    this.from = false;
    this.to = false;
  }

  isPolySelected(pin) {
    let p = JSON.parse(`[${pin.id}]`);
    return equals(p, this.from) || equals(p, this.to);
  }
}
