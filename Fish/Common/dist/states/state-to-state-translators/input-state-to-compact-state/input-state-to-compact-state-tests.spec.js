"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const input_state_to_compact_state_1 = require("./input-state-to-compact-state");
const input_state_examples_1 = require("../../input-state/input-state-examples");
const compact_state_examples_1 = require("../../compact-state/compact-state-examples");
const U = "unusable";
const input_board_1 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
];
const compact_board_1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, U, 0, U, 0, U, 0, U, 0, U]
];
const input_board_2 = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];
const compacT_board_2 = [
    [0, 0, 0, 1, 0, 0],
    [0, U, 0, U, 0, U]
];
const input_board_3 = [
    [0, 0, 1],
    [1, 1, 1],
    [0, 2, 0],
    [1, 0, 0],
    [1, 1, 4]
];
const compact_board_3 = [
    [0, 1, 0, 1, 1, 1],
    [0, 1, 2, 0, 0, 0],
    [1, U, 1, U, 4, U]
];
const input_board_4 = [
    [0, 0, 2, 4, 5],
    [1, 1, 1, 4],
    [3, 0, 0, 5],
    [4, 4, 3, 2],
    [1, 2, 1, 4, 5]
];
const compact_board_4 = [
    [0, 1, 0, 1, 2, 1, 4, 4, 5, 0],
    [3, 4, 0, 4, 0, 3, 5, 2, 0, 0],
    [1, U, 2, U, 1, U, 4, U, 5, U]
];
const input_board_5 = [
    [0, 0],
    [1, 2, 3, 4, 4, 5, 2, 1],
    [0, 0, 0]
];
const compact_board_5 = [
    [0, 1, 0, 2, 0, 3, 0, 4, 0, 4, 0, 5, 0, 2, 0, 1],
    [0, U, 0, U, 0, U, 0, U, 0, U, 0, U, 0, U, 0, U]
];
const input_board_6 = [
    [0, 1, 2, 3, 4],
    [2, 3, 4, 5],
    [1, 2, 0, 0, 0],
    [0, 0, 0, 0]
];
const compact_board_6 = [
    [0, 2, 1, 3, 2, 4, 3, 5, 4, 0],
    [1, 0, 2, 0, 0, 0, 0, 0, 0, 0]
];
const input_board_7 = [
    [0, 1, 3],
    [1, 3, 3],
    [0, 1, 3]
];
const compact_board_7 = [
    [0, 1, 1, 3, 3, 3],
    [0, U, 1, U, 3, U]
];
const input_board_8 = [
    [0, 2, 3, 3],
    [1, 1, 0, 4],
    [0, 2, 4, 2],
    [3, 5, 0, 4],
    [1, 2, 3, 3],
    [0, 2, 4, 4]
];
const compact_board_8 = [
    [0, 1, 2, 1, 3, 0, 3, 4],
    [0, 3, 2, 5, 4, 0, 2, 4],
    [1, 0, 2, 2, 3, 4, 3, 4]
];
const input_board_9 = [
    [0, 2, 3, 4, 5],
    [1, 0, 3, 4, 5],
    [1, 2, 3, 0, 5],
    [1, 2, 3, 4, 0]
];
const compact_board_9 = [
    [0, 1, 2, 0, 3, 3, 4, 4, 5, 5],
    [1, 1, 2, 2, 3, 3, 0, 4, 5, 0]
];
const input_board_10 = [
    [0, 3, 0, 0],
    [1, 0],
    [1, 2, 3]
];
const compact_board_10 = [
    [0, 1, 3, 0, 0, 0, 0, 0],
    [1, U, 2, U, 3, U, 0, U]
];
describe("Tests for InputBoard to CompactBoard translation", () => {
    it("input_board_1 --> compact_board_1", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(input_board_1), compact_board_1);
    });
    it("input_board_2 --> compacT_board_2", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(input_board_2), compacT_board_2);
    });
    it("input_board_3 --> compact_board_3", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(input_board_3), compact_board_3);
    });
    it("input_board_4 --> compact_board_4", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(input_board_4), compact_board_4);
    });
    it("input_board_5 --> compact_board_5", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(input_board_5), compact_board_5);
    });
    it("input_board_6 --> compact_board_6", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(input_board_6), compact_board_6);
    });
    it("input_board_7 --> compact_board_7", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(input_board_7), compact_board_7);
    });
    it("input_board_8 --> compact_board_8", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(input_board_8), compact_board_8);
    });
    it("input_board_9 --> compact_board_9", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(input_board_9), compact_board_9);
    });
    it("input_board_10 --> compact_board_10", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputBoardToCBoardNoPlayers(input_board_10), compact_board_10);
    });
});
const padded_input_board_4 = [
    [0, 0, 2, 4, 5],
    [1, 1, 1, 4, 0],
    [3, 0, 0, 5, 0],
    [4, 4, 3, 2, 0],
    [1, 2, 1, 4, 5]
];
const padded_input_board_5 = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 3, 4, 4, 5, 2, 1],
    [0, 0, 0, 0, 0, 0, 0, 0]
];
const padded_input_board_6 = [
    [0, 1, 2, 3, 4],
    [2, 3, 4, 5, 0],
    [1, 2, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
const padded_input_board_10 = [
    [0, 3, 0, 0],
    [1, 0, 0, 0],
    [1, 2, 3, 0]
];
describe("Tests for padding an input board", () => {
    it("input_board_4 --> padded_input_board_4", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.padInputBoard(input_board_4), padded_input_board_4);
    });
    it("input_board_5 --> padded_input_board_5", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.padInputBoard(input_board_5), padded_input_board_5);
    });
    it("input_board_6 --> padded_input_board_6", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.padInputBoard(input_board_6), padded_input_board_6);
    });
    it("input_board_10 --> padded_input_board_10", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.padInputBoard(input_board_10), padded_input_board_10);
    });
});
describe("interleaving tests", () => {
    it("interleaving empty lists", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.interleave([], []), []);
    });
    it("interleaving 2 element lists", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.interleave([1, 2], [3, 4]), [1, 3, 2, 4]);
    });
    it("interleave 3-elem list", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.interleave([1, 2, 3], [4, 0, 5]), [1, 4, 2, 0, 3, 5]);
    });
});
describe("Converting input state to compact state", () => {
    it("converting the first prelims input state example to compact state", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputStateToCState(input_state_examples_1.prelim1InputState), compact_state_examples_1.prelim1);
    });
    it("converting the second prelims input state example to compact state", () => {
        chai_1.assert.deepEqual(input_state_to_compact_state_1.inputStateToCState(input_state_examples_1.prelim2InputState), compact_state_examples_1.prelim2);
    });
});
//# sourceMappingURL=input-state-to-compact-state-tests.spec.js.map