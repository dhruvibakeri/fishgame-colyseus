"use strict";
exports.__esModule = true;
var xStrategy_1 = require("../executables/xStrategy/xStrategy");
var ex62_in = [2, { "board": [[1, 1], [1, 1], [3, 2], [1, 1], [1, 1], [1, 0], [0, 5]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }];
var ex62_out = [[2, 1], [6, 1]];
var ex63_in = [2,
    { "board": [[1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 5],
            [0, 0],
            [0, 0]],
        "players": [
            { "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] },
            { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }
        ] }];
var ex63_out = [[2, 0], [4, 0]];
console.log(xStrategy_1.xStrategy(ex63_in));
