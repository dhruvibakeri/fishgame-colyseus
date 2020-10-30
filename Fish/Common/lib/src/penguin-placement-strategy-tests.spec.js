"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holesplacedstate2 = exports.holesplacingstate2 = exports.holesboardplaced2 = exports.holesboard2 = exports.holesplacedstate = exports.holesboardplaced = exports.holesplacingstate = exports.threeplayerscores = exports.holesboard = exports.placedstate = exports.noholesboardplaced = exports.placingstate = exports.playerscores = exports.noholesboard = void 0;
const chai_1 = require("chai");
const penguin_placement_strategy_1 = require("./penguin-placement-strategy");
exports.noholesboard = [
    [1, 3, 2, 1, 5, 4, 2, 1, 3, 4, 1, 4],
    [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.playerscores = [["black", 0], ["brown", 0], ["white", 0], ["red", 0]];
exports.placingstate = ["placing", exports.noholesboard, exports.playerscores];
exports.noholesboardplaced = [
    ["black", "white", "brown", "red", "white", 4, "red", 1, "black", 4, "brown", 4],
    [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.placedstate = ["placing", exports.noholesboardplaced, exports.playerscores];
exports.holesboard = [
    [1, "hole", 2, "hole", 5, 4, 2, "hole", 3, 4, 1, 4],
    [5, 2, "hole", 2, 2, 3, "hole", 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", "hole", "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.threeplayerscores = [["black", 0], ["brown", 0], ["white", 0]];
exports.holesplacingstate = ["placing", exports.holesboard, exports.threeplayerscores];
exports.holesboardplaced = [
    ["black", "hole", "brown", "hole", "white", "black", "black", "hole", "brown", "brown", "white", "white"],
    [5, 2, "hole", 2, 2, 3, "hole", 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", "hole", "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.holesplacedstate = ["placing", exports.holesboardplaced, exports.threeplayerscores];
exports.holesboard2 = [
    [1, "hole", 2, "hole", 5, 4],
    [5, 2, "hole", 2, 2, 3],
    [1, "unusable", 2, "unusable", "hole"]
];
exports.holesboardplaced2 = [
    ["black", "hole", "brown", "hole", "white", "black"],
    ["brown", "black", "hole", "brown", "white", "white"],
    [1, "unusable", 2, "unusable", "hole"]
];
exports.holesplacingstate2 = ["placing", exports.holesboard2, exports.threeplayerscores];
exports.holesplacedstate2 = ["placing", exports.holesboardplaced2, exports.threeplayerscores];
describe("testing penguin placement strategy", () => {
    it("place on a board with no holes and 4 players", () => {
        chai_1.assert.deepEqual(exports.placedstate, penguin_placement_strategy_1.placePenguinStrategy(exports.placingstate));
    });
    it("place on a board with holes and 3 players", () => {
        chai_1.assert.deepEqual(exports.holesplacedstate, penguin_placement_strategy_1.placePenguinStrategy(exports.holesplacingstate));
    });
    it("to check if it looks for a place in the next row", () => {
        chai_1.assert.deepEqual(exports.holesplacedstate2, penguin_placement_strategy_1.placePenguinStrategy(exports.holesplacingstate2));
    });
});
