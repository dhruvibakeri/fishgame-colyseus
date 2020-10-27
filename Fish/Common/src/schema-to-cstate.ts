import { CState, CBoard, CStage, CScores, CSpace } from "./cstate";
import { StateSchema } from "./schema";

export function schemaToCompact(schema: StateSchema): CState {
  function make2DArrFrom1DArr(oneD, rowLen) {
    let res: string[][] = [];
    while (oneD.length > 0) {
      res.push(oneD.splice(0, rowLen));
    }
    return res;
  }

  function boardFrom2DArr(arr2D: string[][]): CBoard {
    return arr2D.map(row => row.map(strToCSpace))
  }

  return [
    schema.gamestage as CStage,
    boardFrom2DArr(make2DArrFrom1DArr(schema.board, schema.rowlen)) as CBoard,
    schema.players.map(player => [player.penguincolor, player.score]) as CScores
  ]
}

function strToCSpace(col): CSpace {
  if (col === "0") {
    return 0
  } else if (col === "1") {
    return 1
  } else if (col === "2") {
    return 2
  } else if (col === "3") {
    return 3;
  } else if (col === "4") {
    return 4
  } else if (col === "5") {
    return 5
  } else {
    return col as ("red" | "brown" | "black" | "white" | "unusable" | "hole");
  }
}
