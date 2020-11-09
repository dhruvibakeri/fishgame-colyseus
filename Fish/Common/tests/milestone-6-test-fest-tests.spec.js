"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var xStrategy_1 = require("../executables/xStrategy/xStrategy");
var ex1_in = [2, { "board": [[2, 2], [2, 2], [0, 0], [0, 0], [1, 1], [1, 1], [1, 0]], "players": [{ "places": [[4, 1], [4, 0], [1, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[6, 0], [5, 1], [5, 0], [0, 1]], "score": 0, "color": "white" }] }];
var ex1_out = false;
var ex2_in = [2, { "board": [[2, 2, 2], [2, 2, 2], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 0]], "players": [{ "places": [[4, 2], [4, 1], [4, 0], [1, 0]], "score": 0, "color": "red" }, { "places": [[5, 1], [5, 0], [1, 1], [0, 1]], "score": 0, "color": "white" }] }];
var ex2_out = [[1, 0], [0, 0]];
var ex3_in = [2, { "board": [[3, 2, 2], [2, 4, 0], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 0]], "players": [{ "places": [[4, 2], [4, 1], [4, 0], [1, 0]], "score": 0, "color": "red" }, { "places": [[5, 1], [5, 0], [1, 1], [0, 1]], "score": 0, "color": "white" }] }];
var ex3_out = [[1, 0], [0, 0]];
var ex4_in = [1, { "board": [[1, 3, 4, 2, 2, 4, 2, 1, 5, 5, 2, 4, 4, 3, 5, 4, 1, 3, 1, 1, 3, 2, 3, 5, 5]], "players": [{ "places": [[0, 6], [0, 4], [0, 2], [0, 0]], "score": 0, "color": "red" }, { "places": [[0, 7], [0, 5], [0, 3], [0, 1]], "score": 0, "color": "white" }] }];
var ex4_out = false;
var ex5_in = [1, { "board": [[1], [0], [0], [1], [1], [1], [1], [1], [1], [1], [1]], "players": [{ "places": [[4, 0], [3, 0]], "score": 0, "color": "red" }, { "places": [[6, 0], [5, 0]], "score": 0, "color": "white" }, { "places": [[8, 0], [7, 0]], "score": 0, "color": "brown" }, { "places": [[10, 0], [9, 0]], "score": 0, "color": "black" }] }];
var ex5_out = false;
describe("Milestone 6 tests", function () {
    it("ex1_in ->  ex1_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex1_in), ex1_out);
    });
    it("ex2_in ->  ex2_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex2_in), ex2_out);
    });
    it("ex3_in ->  ex3_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex3_in), ex3_out);
    });
    it("ex4_in ->  ex4_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex4_in), ex4_out);
    });
    it("ex5_in ->  ex6_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex5_in), ex5_out);
    });
});
