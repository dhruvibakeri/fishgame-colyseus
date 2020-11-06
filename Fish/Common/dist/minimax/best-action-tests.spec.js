"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex2 = void 0;
const chai_1 = require("chai");
const game_tree_state_1 = require("../game-tree/game-tree-state");
const compact_state_to_game_state_1 = require("../states/state-to-state-translators/compact-state-to-game-state");
const best_action_game_state_1 = require("./best-action-game-state");
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
describe("get best action", () => {
    it("tie breakers and skips", () => {
        chai_1.assert.deepEqual(best_action_game_state_1.getBestAction([compact_state_to_game_state_1.cStateToGameState(exports.ex2), () => game_tree_state_1.getValidSubStatesForGameBoard(compact_state_to_game_state_1.cStateToGameState(exports.ex2))], 1), [{ row: 0, col: 0 }, { row: 0, col: 1 }]);
    });
    it("false action", () => {
        chai_1.assert.deepEqual(best_action_game_state_1.getBestAction([compact_state_to_game_state_1.cStateToGameState(prelim1), () => game_tree_state_1.getValidSubStatesForGameBoard(compact_state_to_game_state_1.cStateToGameState(prelim1))], 2), false);
    });
});
//# sourceMappingURL=best-action-tests.spec.js.map