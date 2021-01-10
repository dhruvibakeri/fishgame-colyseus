import { Board, State } from "../../../common";
import { StateSchema } from "./new-schema-state";

export function schemaToNewState(schema: StateSchema): State {
  // creates 2D array from the flattened array
  function make2DArrFrom1DArr(oneD, rowLen) {
    let res: string[][] = [];
    while (oneD.length > 0) {
      res.push(oneD.splice(0, rowLen));
    }
    return res;
  }

  // creates CBoard from 2D string array
  function boardFrom2DArr(arr2D: string[][]): Board {
    return arr2D.map((row) => row.map(strToNumberSpace));
  }

  const dupBoard: string[] = [...schema.board];

  // returns a CState
  return {
    stage: schema.gamestage as "placing" | "playing",
    board: boardFrom2DArr(make2DArrFrom1DArr(dupBoard, schema.rowlen)),
    players: schema.players.map((p) => {
      return {
        color: p.penguincolor,
        score: p.score,
        places: p.places.map((p) => {
          return [p.row, p.col];
        }),
        status: "online",
      };
    }),
  };
}

function strToNumberSpace(col): number {
  if (col === "0") {
    return 0;
  } else if (col === "1") {
    return 1;
  } else if (col === "2") {
    return 2;
  } else if (col === "3") {
    return 3;
  } else if (col === "4") {
    return 4;
  } else if (col === "5") {
    return 5;
  } else if (col === "-1") {
    return -1;
  } else {
    return -2
  }

}
