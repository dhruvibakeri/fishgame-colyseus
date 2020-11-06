import { assert } from "chai"
import { getValidSubStatesForGameBoard } from "../game-tree/game-tree-state"
import { CState } from "../states/compact-state/compact-state-data-definition"
import { cStateToGameState } from "../states/state-to-state-translators/compact-state-to-game-state"
import { getBestAction } from "./best-action-game-state"


  export const ex2 : CState = ["playing", 
                                    [[["red",1], 1, ["red",1], "hole", ["black",1], 1, ["black",1], "hole"],
                                    [4, "hole", 4, "hole", 4, "hole", 4, "hole"],
                                    [["white",1], ["brown",1], "hole", "hole", ["white",1], ["brown",1], "hole", "hole"]],
                                     [["red", 0],
                                     ["black", 0],
                                     ["white", 0],
                                     ["brown", 0] ]]
   
const prelim1 : CState = ["playing",

  [[1,1,1,1,1,1],
  ["hole","hole","hole","hole","hole","hole"],
    [["red",1],["white",1],["red",1],["white",1],["red",1],["white",1]],
    [["brown",1],"unusable",["brown",1],"unusable",["brown",1],"unusable"]],
  
  [["red", 0],
  ["white", 0],
  ["brown", 0]]]

                                     
describe("get best action", () => {

    it("tie breakers and skips", () => {
        assert.deepEqual(getBestAction([cStateToGameState(ex2), () => getValidSubStatesForGameBoard(cStateToGameState(ex2))], 1),[ { row: 0, col: 0 }, { row: 0, col: 1 } ])
      })

    it("false action", () => {
        assert.deepEqual(getBestAction([cStateToGameState(prelim1), () => getValidSubStatesForGameBoard(cStateToGameState(prelim1))], 2),false)
      })

})
