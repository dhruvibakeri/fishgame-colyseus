"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex2 = exports.ex1 = void 0;
const chai_1 = require("chai");
const compact_state_to_game_state_1 = require("../states/state-to-state-translators/compact-state-to-game-state");
const placement_strategy_game_state_1 = require("./placement-strategy-game-state");
exports.ex1 = ["playing",
    [[2, 1, ["red", 1], "hole", ["black", 1], 1, ["black", 1], "hole"],
        [4, "hole", 4, "hole", 4, "hole", 4, "hole"],
        [["white", 1], ["brown", 1], "hole", "hole", ["white", 1], ["brown", 1], "hole", "hole"]],
    [["red", 0],
        ["black", 0],
        ["white", 0],
        ["brown", 0]]];
exports.ex2 = ["playing",
    [[["red", 1], 1, ["red", 1], "hole", ["black", 1], 1, ["black", 1], "hole"],
        [4, "hole", 4, "hole", 4, "hole", 4, "hole"],
        [["white", 1], ["brown", 1], "hole", "hole", ["white", 1], ["brown", 1], "hole", "hole"]],
    [["red", 0],
        ["black", 0],
        ["white", 0],
        ["brown", 0]]];
const prelim1 = ["playing",
    [[1, 1, 1, 1, 1, 1],
        ["hole", "hole", "hole", "hole", "hole", "hole"],
        [["red", 1], ["white", 1], ["red", 1], ["white", 1], ["red", 1], ["white", 1]],
        [["brown", 1], "unusable", ["brown", 1], "unusable", ["brown", 1], "unusable"]],
    [["red", 0],
        ["white", 0],
        ["brown", 0]]];
describe("get placement Posn", () => {
    it("return a placement", () => {
        chai_1.assert.deepEqual(placement_strategy_game_state_1.getPenguinPlacementPosn(compact_state_to_game_state_1.cStateToGameState(exports.ex1)), { row: 0, col: 0 });
    });
    it("no placements available", () => {
        chai_1.assert.deepEqual(placement_strategy_game_state_1.getPenguinPlacementPosn(compact_state_to_game_state_1.cStateToGameState(exports.ex2)), { kind: "illegalAction" });
    });
});
//# sourceMappingURL=placement-strategy-tests.spec.js.map