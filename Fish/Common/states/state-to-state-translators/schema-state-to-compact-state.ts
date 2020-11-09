import { StateSchema } from "../schema-state/schema-state-data-definition";
import { CBoard, CFish, CScores, CSpace, CStage, CState } from "../compact-state/compact-state-data-definition"
import { cStateToSchema } from "./compact-state-to-schema-state";
import { getValidSubStates } from "../../game-tree/game-tree-state";
import { cStateToGameState } from "./compact-state-to-game-state";

export function schemaToCompact(schema: StateSchema): CState {

  // creates 2D array from the flattened array
  function make2DArrFrom1DArr(oneD, rowLen) {
    let res: string[][] = [];
    while (oneD.length > 0) {
      res.push(oneD.splice(0, rowLen));
    }
    return res;
  }

  // creates CBoard from 2D string array
  function boardFrom2DArr(arr2D: string[][]): CBoard {
    return arr2D.map(row => row.map(strToCSpace))
  }
  
  const dupBoard : string[] = [...schema.board]

  // returns a CState
  return [
    schema.gamestage as CStage,
    boardFrom2DArr(make2DArrFrom1DArr(dupBoard, schema.rowlen)) as CBoard,
    schema.players.map(player => [player.penguincolor, player.score]) as CScores
  ]
}

// converts given string to a CSpace
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
  } else if (col != "unusable" && col != "hole") {
    let colArray = col.split(',')
    return [colArray[0], parseInt(colArray[1])] as (["red" , CFish] | ["brown" , CFish] | ["black" , CFish] | ["white" , CFish])
  }
  else {
    return col as ("unusable" | "hole");
  }
}


