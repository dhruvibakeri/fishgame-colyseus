import { assert } from "chai";
import { CState, CBoard, CScores, CScore } from "./cstate";
import {traverseCBoard, placePenguinStrategy} from "./penguin-placement-strategy";

export const noholesboard : CBoard = [
    [1, 3, 2, 1, 5, 4, 2, 1, 3, 4, 1, 4],
    [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
  ]

export const playerscores: CScore[] = [["black", 0], ["brown", 0], ["white", 0], ["red", 0]];

export const placingstate: CState = ["placing", noholesboard, playerscores]

export const noholesboardplaced : CBoard = [
    ["black", "white", "brown", "red", "white", 4, "red", 1, "black", 4, "brown", 4],
    [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
  ]

export const placedstate: CState = ["placing", noholesboardplaced, playerscores]

export const holesboard : CBoard = [
    [1, "hole", 2, "hole", 5, 4, 2, "hole", 3, 4, 1, 4],
    [5, 2, "hole", 2, 2, 3, "hole", 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", "hole", "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
  ]

export const threeplayerscores: CScore[] = [["black", 0], ["brown", 0], ["white", 0]];

export const holesplacingstate: CState = ["placing", holesboard, threeplayerscores]

export const holesboardplaced : CBoard = [
    ["black", "hole", "brown", "hole", "white", "black", "black", "hole", "brown", "brown", "white", "white"],
    [5, 2, "hole", 2, 2, 3, "hole", 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", "hole", "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
  ]

export const holesplacedstate: CState = ["placing", holesboardplaced, threeplayerscores]

export const holesboard2 : CBoard = [
    [1, "hole", 2, "hole", 5, 4],
    [5, 2, "hole", 2, 2, 3],
    [1, "unusable", 2, "unusable", "hole"]
  ]

  export const holesboardplaced2 : CBoard = [
    ["black", "hole", "brown", "hole", "white", "black"],
    ["brown", "black", "hole", "brown", "white", "white"],
    [1, "unusable", 2, "unusable", "hole"]
  ]

  export const holesplacingstate2: CState = ["placing", holesboard2, threeplayerscores]

  export const holesplacedstate2: CState = ["placing", holesboardplaced2, threeplayerscores]

describe("testing penguin placement strategy", () => {

    it("place on a board with no holes and 4 players", () => {
        assert.deepEqual(placedstate, placePenguinStrategy(placingstate))
      })

    it("place on a board with holes and 3 players", () => {
      assert.deepEqual(holesplacedstate, placePenguinStrategy(holesplacingstate))
    })

    it("to check if it looks for a place in the next row", () => {
        assert.deepEqual(holesplacedstate2, placePenguinStrategy(holesplacingstate2))
      })

})


