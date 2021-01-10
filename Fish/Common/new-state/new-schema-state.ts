import { type, Schema } from "@colyseus/schema";

export class PlayerPlaces extends Schema {
  @type("number")
  row: number;

  @type("number")
  col: number;

  constructor(row: number, col: number) {
    super();
    this.row = row;
    this.col = col;
  }
}

export class ScoreSchema extends Schema {
  @type("string")
  penguincolor: string;

  @type("number")
  score: number;

  @type([PlayerPlaces])
  places: PlayerPlaces[];

  constructor(penguincolor: string, score: number, places: PlayerPlaces[]) {
    super();
    this.penguincolor = penguincolor;
    this.score = score;
    this.places = places;
  }
}

export class StateSchema extends Schema {
  @type("string")
  gamestage: string;

  @type("number")
  rowlen: number;

  @type(["string"])
  board: string[];

  @type([ScoreSchema])
  players: ScoreSchema[];

  constructor(
    gamestage: string,
    rowlen: number,
    board: string[],
    players: ScoreSchema[]
  ) {
    super();
    this.gamestage = gamestage;
    this.rowlen = rowlen;
    this.board = board;
    this.players = players;
  }
}
