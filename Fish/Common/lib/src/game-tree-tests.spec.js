"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const best_action_1 = require("./best-action");
const game_tree_1 = require("./game-tree");
const smallBoard = [[1, "hole", 2, "black", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]];
const smallBoardH = [["hole", "hole", 2, "black", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]];
const smallBoardF = [[1, "hole", 5, "black", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]];
const smallScores = [["black", 0], ["red", 0]];
const smallState = ["playing", smallBoard, smallScores];
const subBoard1 = [[1, "hole", "black", "hole", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]];
const subScores1 = [["red", 0], ["black", 2]];
const subState1 = ["playing", subBoard1, subScores1];
const subBoard2 = [[1, "hole", 2, "hole", "black", "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]];
const subScores2 = [["red", 0], ["black", 3]];
const subState2 = ["playing", subBoard2, subScores2];
const subBoard3 = [[1, "hole", 2, "hole", 3, "red"], ["hole", "unusable", "black", "unusable", 4, "unusable"]];
const subScores3 = [["red", 0], ["black", 2]];
const subState3 = ["playing", subBoard3, subScores3];
const subBoard4 = [[1, "hole", 2, "hole", 3, "red"], ["hole", "unusable", 2, "unusable", "black", "unusable"]];
const subScores4 = [["red", 0], ["black", 4]];
const subState4 = ["playing", subBoard4, subScores4];
describe("applying a function to directly reachable states", () => {
    it("for a small state", () => {
        chai_1.assert.deepEqual(game_tree_1.applyToDirectlyReachable(smallState, best_action_1.isGameOver), [[subState1, false],
            [subState2, false],
            [subState3, false],
            [subState4, false]]);
    });
});
describe("applying an action to a given state", () => {
    it("make a valid move", () => {
        chai_1.assert.deepEqual(game_tree_1.applyAction({ kind: "move", posn: [[0, 3], [0, 2]] }, smallState), subState1);
    });
    it("make an invalid move", () => {
        chai_1.assert.deepEqual(game_tree_1.applyAction({ kind: "move", posn: [[0, 3], [0, 1]] }, smallState), { kind: "illegalAction" });
    });
    it("make a hole", () => {
        chai_1.assert.deepEqual(game_tree_1.applyAction({ kind: "hole", posn: [0, 0] }, smallState), ["playing", smallBoardH, smallScores]);
    });
    it("add fish", () => {
        chai_1.assert.deepEqual(game_tree_1.applyAction({ kind: "placeFish", posn: [0, 2], totalFishes: 5 }, smallState), ["playing", smallBoardF, smallScores]);
    });
});
