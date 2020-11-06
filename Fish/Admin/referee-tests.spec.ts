import { assert } from "chai";
import { addRandomHoles, removePenguin } from "../Common/server/backend";
import { CBoard, CState } from "../Common/states/compact-state/compact-state-data-definition";
import { GET__CBoardFromCState } from "../Common/states/compact-state/compact-state-selectors";
import { cStateToGameState } from "../Common/states/state-to-state-translators/compact-state-to-game-state";
import { stateToCState } from "../Common/states/state-to-state-translators/game-state-to-compact-game-state";

export const blank_board: CState = ["playing",

    [[1, 1, 1, 1],
    [1, "unusable", 1, "unusable"]],

    [["black", 0],
    ["white", 0],
    ["red", 0]]]

export const state0: CState = ["playing",

    [[["black", 4], 1, 4, ["red", 0]],
    [["white", 3], "unusable", 5, "unusable"]],

    [["black", 0],
    ["white", 0],
    ["red", 0]]]

export const ex2: CState = ["playing",
    [[["red", 1], 1, ["red", 1], "hole", ["black", 1], 1, ["black", 1], "hole"],
    [4, "hole", 4, "hole", 4, "hole", 4, "hole"],
    [["white", 1], ["brown", 1], "hole", "hole", ["white", 1], ["brown", 1], "hole", "hole"]],
    [["red", 0],
    ["black", 0],
    ["white", 0],
    ["brown", 0]]]


describe("customize board by adding random holes", () => {

    it("add 2 holes", () => {
        addRandomHoles(GET__CBoardFromCState(blank_board), 2)
        assert.deepEqual(2, countHoles(GET__CBoardFromCState(blank_board)))
    })

})

describe("removing all player penguins from board", () => {

    it("remove all red penguins", () => {
        assert.deepEqual(stateToCState(removePenguin("red", cStateToGameState(state0))), ["playing",

            [[["black", 4], 1, 4, 0],
            [["white", 3], "unusable", 5, "unusable"]],

            [["black", 0],
            ["white", 0],
            ["red", 0]]])
    })

})




// UTIL

function countHoles(board: CBoard): number {
    let count: number = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == "hole") {
                count = count + 1
            }
        }
    }
    return count
}