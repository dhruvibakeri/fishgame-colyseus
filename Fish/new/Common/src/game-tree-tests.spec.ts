import { assert } from "chai";
import { isGameOver } from "./best-action";
import { CState, CBoard, CScores, CScore } from "./cstate";
import { applyAction, applyToDirectlyReachable, createGameTree, getValidSubStates } from "./game-tree";
import {traverseCBoard, placePenguinStrategy} from "./penguin-placement-strategy";
import { initplacingstate, move13blackstate, move23whiteskipstate } from "./run";

const smallBoard : CBoard = [[1, "hole", 2, "black", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]]
const smallBoardH : CBoard = [["hole", "hole", 2, "black", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]]
const smallBoardF : CBoard = [[1, "hole", 5, "black", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]]
const smallScores : CScores = [["black", 0], ["red", 0]]
const smallState : CState = ["playing", smallBoard, smallScores]

const subBoard1 : CBoard = [[1, "hole", "black", "hole", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]]
const subScores1 : CScores = [["red", 0],["black", 2]]
const subState1 : CState = ["playing", subBoard1, subScores1]

const subBoard2 : CBoard = [[1, "hole", 2, "hole", "black", "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]]
const subScores2 : CScores = [["red", 0],["black", 3]]
const subState2 : CState = ["playing", subBoard2, subScores2]

const subBoard3 : CBoard = [[1, "hole", 2, "hole", 3, "red"], ["hole", "unusable", "black", "unusable", 4, "unusable"]]
const subScores3 : CScores = [["red", 0],["black", 2]]
const subState3 : CState = ["playing", subBoard3, subScores3]

const subBoard4 : CBoard = [[1, "hole", 2, "hole", 3, "red"], ["hole", "unusable", 2, "unusable", "black", "unusable"]]
const subScores4 : CScores = [["red", 0],["black", 4]]
const subState4 : CState = ["playing", subBoard4, subScores4]

describe("applying a function to directly reachable states", () => {

    it("for a small state", () => {
        assert.deepEqual(applyToDirectlyReachable(smallState, isGameOver), [[subState1, false],
                                                                            [subState2, false], 
                                                                            [subState3, false], 
                                                                            [subState4, false]])
      })


})

describe("applying an action to a given state", () => {

    it("make a valid move", () => {
        assert.deepEqual(applyAction({kind : "move", posn : [[0,3], [0,2]]}, smallState), subState1)
      })

      it("make an invalid move", () => {
        assert.deepEqual(applyAction({kind : "move", posn : [[0,3], [0,1]]}, smallState), {kind: "illegalAction"})
      })

      it("make a hole", () => {
        assert.deepEqual(applyAction({kind : "hole", posn : [0,0]}, smallState), ["playing", smallBoardH, smallScores])
      })

      it("add fish", () => {
        assert.deepEqual(applyAction({kind : "placeFish", posn : [0,2], totalFishes: 5}, smallState), ["playing", smallBoardF, smallScores])
      })


})