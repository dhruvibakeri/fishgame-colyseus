"use strict";
exports.__esModule = true;
var xTree_1 = require("../executables/xTree/xTree");
var ex52_in = {
    "from": [0, 0],
    "to": [1, 0],
    "state": {
        "players": [{
                "places": [
                    [5, 0],
                    [4, 0],
                    [3, 0],
                    [0, 0]
                ],
                "color": "white",
                "score": 0
            }, {
                "places": [
                    [0, 1],
                    [5, 1],
                    [4, 1],
                    [3, 1]
                ],
                "color": "red",
                "score": 2
            }],
        "board": [
            [1, 2],
            [3, 0],
            [0, 0],
            [1, 1],
            [1, 1],
            [1, 1]
        ]
    }
};
var ex52_out = false;
console.log(xTree_1.xTree(ex52_in));
