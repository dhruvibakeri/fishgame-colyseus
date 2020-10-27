import { Schema, type } from "@colyseus/schema";


export class ScoreSchema extends Schema {

  @type("string")
  penguincolor: string;

  @type("number")
  score: number;

  constructor(penguincolor: string, score: number) {
    super();
    this.penguincolor = penguincolor;
    this.score = score;
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

  constructor(gamestage: string, rowlen: number, board: string[], players: ScoreSchema[]) {
    super();
    this.gamestage = gamestage;
    this.rowlen = rowlen;
    this.board = board;
    this.players = players;
  }
}

/**
 * Example
 */

export const StateSchemaExample = new StateSchema(
  "playing",
  2,
  ["black", "red"],
  [new ScoreSchema("black", 4), new ScoreSchema("red", 4)]
)