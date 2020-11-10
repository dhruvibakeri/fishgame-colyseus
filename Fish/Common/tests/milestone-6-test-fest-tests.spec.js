"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var xStrategy_1 = require("../executables/xStrategy/xStrategy");
var ex1_in = [2, { "board": [[2, 2], [2, 2], [0, 0], [0, 0], [1, 1], [1, 1], [1, 0]], "players": [{ "places": [[4, 1], [4, 0], [1, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[6, 0], [5, 1], [5, 0], [0, 1]], "score": 0, "color": "white" }] }];
var ex1_out = false;
var ex10_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [3, 0], [0, 1]] }, { "color": "brown", "score": 0, "places": [[0, 2], [2, 1], [3, 1], [1, 1]] }], "board": [[2, 5, 4], [4, 3, 4], [3, 5, 3], [3, 3, 1]] }];
var ex10_out = [[0, 1], [1, 0]];
var ex100_in = [2, { "players": [{ "color": "white", "score": 1, "places": [[1, 2], [0, 2], [1, 4], [0, 4]] }, { "color": "red", "score": 1, "places": [[1, 1], [2, 1], [4, 3], [2, 4]] }], "board": [[1, 3, 4, 5, 3], [2, 3, 4, 5, 3], [2, 3, 0, 3, 3], [3, 3, 3, 3, 4], [2, 3, 5, 3, 3]] }];
var ex100_out = [[1, 2], [0, 3]];
var ex101_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [3, 2], [2, 2]] }, { "color": "brown", "score": 0, "places": [[3, 0], [1, 2], [3, 1]] }], "board": [[3, 3, 1], [1, 5, 3], [2, 0, 1, 0, 1], [1, 1, 2]] }];
var ex101_out = [[0, 0], [2, 0]];
var ex102_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [3, 2], [2, 2]] }, { "color": "brown", "score": 0, "places": [[3, 0], [1, 2], [3, 1]] }], "board": [[3, 3, 1], [1, 5, 3], [2, 0, 1, 0, 1], [1, 1, 2]] }];
var ex102_out = [[0, 0], [2, 0]];
var ex103_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [3, 2], [2, 2]] }, { "color": "brown", "score": 0, "places": [[3, 0], [1, 2], [3, 1]] }], "board": [[3, 3, 1], [1, 0, 3], [0, 0, 1, 0, 1], [1, 1, 2]] }];
var ex103_out = false;
var ex104_in = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex104_out = false;
var ex105_in = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }];
var ex105_out = [[0, 0], [1, 0]];
var ex106_in = [2, { "players": [{ "places": [[0, 0], [1, 0], [4, 0]], "score": 0, "color": "red" }, { "places": [[0, 1], [3, 0], [5, 0]], "score": 0, "color": "white" }, { "places": [[2, 1], [3, 1], [4, 1]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex106_out = [[0, 0], [2, 0]];
var ex107_in = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex107_out = false;
var ex108_in = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }];
var ex108_out = [[0, 0], [1, 0]];
var ex109_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [3, 0], [4, 0], [5, 0]] }, { "color": "black", "score": 0, "places": [[0, 1], [3, 1], [4, 1], [5, 1]] }], "board": [[1, 1], [0, 1], [0, 0], [1, 1], [1, 1], [1, 1]] }];
var ex109_out = false;
var ex11_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [3, 0], [0, 1]] }, { "color": "brown", "score": 0, "places": [[0, 2], [2, 1], [3, 1], [1, 1]] }], "board": [[2, 5, 4], [4, 3, 4], [3, 5, 3], [3, 3, 1]] }];
var ex11_out = [[0, 1], [1, 0]];
var ex110_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [2, 0], [8, 0], [9, 0]] }, { "color": "brown", "score": 0, "places": [[5, 0], [10, 0], [11, 0], [12, 0]] }], "board": [[0], [1], [1], [1], [5], [1], [0], [0], [1], [1], [1], [1], [1]] }];
var ex110_out = [[1, 0], [3, 0]];
var ex111_in = [1, { "players": [{ "color": "red", "score": 3, "places": [[1, 2], [0, 4], [3, 4]] }, { "color": "black", "score": 4, "places": [[0, 0], [1, 4], [4, 4]] }, { "color": "white", "score": 5, "places": [[4, 2], [2, 4], [1, 3]] }], "board": [[1, 2, 1, 0, 1], [5, 0, 4, 4, 3, 2], [3, 1, 3, 0, 1], [0, 3, 5, 0, 3], [3, 5, 2, 0, 3]] }];
var ex111_out = [[1, 2], [0, 2]];
var ex112_in = [2, { "players": [{ "color": "red", "score": 3, "places": [[1, 2], [0, 4], [3, 4]] }, { "color": "black", "score": 4, "places": [[0, 0], [1, 4], [4, 4]] }, { "color": "white", "score": 5, "places": [[4, 2], [2, 4], [1, 3]] }], "board": [[1, 2, 1, 0, 1], [5, 0, 4, 4, 3, 2], [3, 1, 3, 0, 1], [0, 3, 5, 0, 3], [3, 5, 2, 0, 3]] }];
var ex112_out = [[1, 2], [2, 2]];
var ex113_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[4, 3], [4, 1]] }, { "color": "black", "score": 15, "places": [[0, 4], [0, 0]] }, { "color": "white", "score": 5, "places": [[1, 1], [3, 4]] }, { "color": "brown", "score": 8, "places": [[3, 1], [0, 3]] }], "board": [[1, 0, 5, 1, 1], [0, 1, 5], [0, 0, 1], [0, 1, 5, 5, 1], [0, 5, 0, 1]] }];
var ex113_out = [[4, 3], [2, 2]];
var ex114_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [0, 3]] }, { "color": "black", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1]] }];
var ex114_out = false;
var ex115_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }, { "color": "black", "score": 0, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]] }];
var ex115_out = [[1, 0], [0, 0]];
var ex116_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }, { "color": "black", "score": 0, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1, 1], [1, 2, 3, 4, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]] }];
var ex116_out = [[1, 3], [0, 3]];
var ex117_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }, { "color": "black", "score": 0, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1, 1], [1, 2, 3, 4, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]] }];
var ex117_out = [[1, 2], [0, 2]];
var ex118_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [0, 3]] }, { "color": "black", "score": 0, "places": [[5, 0], [5, 1], [5, 2], [5, 3]] }], "board": [[1, 2, 3, 4], [1, 2, 3, 3], [1, 1, 1, 4], [1, 1, 1, 4], [0, 0, 0, 0], [1, 1, 1, 1]] }];
var ex118_out = [[0, 3], [2, 3]];
var ex119_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [0, 2]] }, { "color": "brown", "score": 0, "places": [[3, 0], [1, 2]] }, { "color": "black", "score": 15, "places": [[1, 1], [2, 2]] }, { "color": "white", "score": 99, "places": [[2, 0], [0, 1]] }], "board": [[0, 2, 2], [3, 4, 5], [4, 3, 2], [2, 2, 3], [4, 4, 4, 4], [5, 5]] }];
var ex119_out = [[1, 0], [4, 2]];
var ex12_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[3, 0], [0, 1]] }, { "color": "black", "score": 0, "places": [[3, 1], [1, 1]] }, { "color": "brown", "score": 0, "places": [[0, 2], [2, 1]] }], "board": [[2, 5, 4], [0, 3], [3, 5], [3, 3]] }];
var ex12_out = false;
var ex120_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 1], [2, 2]] }, { "color": "brown", "score": 0, "places": [[0, 1], [1, 0], [2, 0]] }, { "color": "black", "score": 15, "places": [[2, 1], [1, 2], [0, 2]] }], "board": [[1, 2, 3], [4, 5, 1], [2, 3, 4]] }];
var ex120_out = false;
var ex121_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[3, 0], [1, 0], [1, 2], [2, 1]] }, { "color": "brown", "score": 0, "places": [[3, 2], [0, 2], [0, 1], [0, 0]] }], "board": [[3, 1, 2], [2, 0, 4], [1, 2, 0], [4, 5, 4]] }];
var ex121_out = [[3, 0], [2, 0]];
var ex122_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[3, 2], [4, 2], [4, 1], [4, 0]] }, { "color": "brown", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [1, 0]] }], "board": [[2, 3, 4], [1, 0, 4], [1, 2, 2], [4, 3, 2], [5, 5, 5]] }];
var ex122_out = [[4, 0], [2, 0]];
var ex123_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[4, 0], [4, 2], [4, 1]] }, { "color": "brown", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 99, "places": [[2, 2], [1, 0], [2, 3]] }], "board": [[1, 2, 3], [1], [2, 3, 4, 5], [0], [3, 4, 4]] }];
var ex123_out = [[4, 1], [2, 1]];
var ex124_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [0, 2], [1, 1]] }, { "color": "black", "score": 0, "places": [[0, 1], [1, 2], [2, 1], [2, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [0, 1, 1], [0, 0, 0]] }];
var ex124_out = false;
var ex125_in = [2, { "players": [{ "color": "black", "score": 0, "places": [[0, 2], [1, 2], [2, 2], [3, 2]] }, { "color": "red", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex125_out = false;
var ex126_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }, { "color": "black", "score": 0, "places": [[0, 2], [1, 2], [2, 2], [3, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex126_out = [[0, 1], [1, 0]];
var ex127_in = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0], [6, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0], [6, 1]], "score": 0, "color": "white" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 0]] }];
var ex127_out = false;
var ex128_in = [2, { "players": [{ "places": [[0, 2], [0, 1], [0, 0], [2, 1]], "score": 0, "color": "red" }, { "places": [[1, 1], [1, 2], [1, 0], [2, 0]], "score": 0, "color": "white" }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [1, 1, 0]] }];
var ex128_out = false;
var ex129_in = [2, { "players": [{ "places": [[0, 2], [0, 1], [0, 0], [2, 1]], "score": 0, "color": "red" }, { "places": [[6, 0], [6, 1], [6, 2], [5, 0]], "score": 0, "color": "white" }], "board": [[1, 1, 1], [0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0], [1, 1, 1]] }];
var ex129_out = false;
var ex13_in = [2, { "players": [{ "color": "red", "score": 100, "places": [[0, 0], [1, 0], [2, 0]] }, { "color": "black", "score": 10, "places": [[0, 1], [2, 1], [1, 1]] }, { "color": "white", "score": 100, "places": [[0, 2], [2, 2], [1, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [4, 1, 1], [2, 5, 1]] }];
var ex13_out = [[1, 0], [3, 0]];
var ex130_in = [2, { "players": [{ "places": [[1, 1], [0, 1], [0, 0], [1, 0]], "score": 0, "color": "white" }, { "places": [[6, 0], [6, 1], [6, 2], [5, 0]], "score": 0, "color": "red" }], "board": [[1, 1, 0], [1, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0], [1, 1, 1]] }];
var ex130_out = false;
var ex131_in = [2, { "players": [{ "places": [[0, 0], [0, 1], [0, 2], [1, 0]], "score": 0, "color": "white" }, { "places": [[1, 1], [1, 2], [2, 0], [2, 1]], "score": 0, "color": "red" }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 0]] }];
var ex131_out = false;
var ex132_in = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex132_out = false;
var ex133_in = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }];
var ex133_out = [[0, 0], [1, 0]];
var ex134_in = [2, { "players": [{ "color": "white", "score": 0, "places": [[5, 0], [4, 0], [3, 0], [2, 0]] }, { "color": "red", "score": 2, "places": [[0, 1], [5, 1], [4, 1], [3, 1]] }], "board": [[1, 2], [3, 0], [2, 1], [1, 1], [1, 1], [1, 1]] }];
var ex134_out = [[2, 0], [1, 0]];
var ex135_in = [2, { "players": [{ "color": "white", "score": 0, "places": [[0, 0], [1, 0], [0, 1], [1, 1]] }, { "color": "red", "score": 2, "places": [[4, 0], [5, 0], [4, 1], [5, 1]] }], "board": [[1, 1], [1, 1], [5, 2], [3, 1], [1, 1], [1, 1]] }];
var ex135_out = [[1, 0], [3, 0]];
var ex136_in = [2, { "players": [{ "color": "red", "score": 4, "places": [[0, 0], [0, 1], [0, 2], [0, 3]] }, { "color": "white", "score": 4, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 5, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]] }];
var ex136_out = [[0, 1], [2, 2]];
var ex137_in = [2, { "players": [{ "color": "red", "score": 4, "places": [[1, 1], [1, 2], [2, 1], [2, 2]] }, { "color": "white", "score": 4, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]] }];
var ex137_out = [[1, 1], [0, 1]];
var ex138_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }, { "color": "white", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }], "board": [[4, 4, 4], [4, 4, 4], [4, 4, 4], [4, 4, 4]] }];
var ex138_out = false;
var ex139_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }, { "color": "white", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }], "board": [[4, 4, 4], [4, 4, 4], [4, 4, 4], [4, 4, 4]] }];
var ex139_out = [[1, 1], [0, 2]];
var ex14_in = [2, { "players": [{ "color": "red", "score": 100, "places": [[0, 0], [2, 1], [2, 0]] }, { "color": "black", "score": 10, "places": [[0, 1], [3, 2], [1, 1]] }, { "color": "white", "score": 100, "places": [[0, 2], [2, 2], [1, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex14_out = [[0, 0], [1, 0]];
var ex140_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }, { "color": "white", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }], "board": [[4, 5], [4, 3], [2, 4], [1, 4], [4, 1], [4, 3], [2, 4], [4, 1], [2, 4], [4, 2], [1, 3], [4, 1]] }];
var ex140_out = [[2, 1], [4, 1]];
var ex141_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [10, 0], [10, 1]] }, { "color": "white", "score": 0, "places": [[1, 0], [6, 0], [11, 0], [11, 1]] }], "board": [[4, 5], [4, 3], [3, 4], [1, 4], [4, 1], [4, 3], [2, 4], [4, 1], [2, 4], [4, 2], [1, 3], [4, 1]] }];
var ex141_out = [[10, 1], [0, 1]];
var ex142_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [4, 0]] }, { "color": "white", "score": 0, "places": [[7, 0], [9, 0], [8, 1]] }, { "color": "brown", "score": 0, "places": [[3, 1], [5, 0], [11, 1]] }], "board": [[4, 5], [4, 3], [2, 4], [1, 4], [4, 1], [4, 3], [2, 4], [4, 1], [2, 4], [4, 2], [1, 3], [4, 1]] }];
var ex142_out = [[0, 1], [1, 0]];
var ex143_in = [2, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [0, 1]] }, { "color": "white", "score": 0, "places": [[0, 2], [1, 1], [1, 2], [2, 1]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex143_out = false;
var ex144_in = [1, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [1, 0], [0, 1]] }, { "color": "white", "score": 1, "places": [[2, 0], [3, 0], [2, 1]] }, { "color": "brown", "score": 2, "places": [[4, 0], [5, 0], [4, 1]] }], "board": [[1, 2, 1], [2, 3, 2], [1, 2, 3], [2, 3, 2], [1, 2, 1], [2, 3, 0]] }];
var ex144_out = [[0, 1], [1, 1]];
var ex145_in = [1, { "players": [{ "color": "red", "score": 10, "places": [[2, 0], [0, 1], [5, 2], [4, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [3, 2], [2, 2]] }], "board": [[2, 3, 4], [1, 1, 1], [5, 5, 5], [0, 4, 4], [3, 3, 3], [2, 2, 2]] }];
var ex145_out = [[2, 0], [0, 0]];
var ex146_in = [2, { "players": [{ "color": "red", "score": 10, "places": [[2, 0], [0, 1], [0, 0], [5, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [3, 2], [1, 2]] }], "board": [[2, 3, 0], [1, 1, 1], [5, 5, 0], [0, 4, 4], [3, 3, 0], [2, 2, 2]] }];
var ex146_out = [[0, 1], [2, 1]];
var ex147_in = [2, { "players": [{ "color": "red", "score": 10, "places": [[2, 0], [2, 1], [4, 0], [5, 2]] }, { "color": "white", "score": 0, "places": [[1, 2], [1, 1], [3, 2], [6, 2]] }], "board": [[2, 3, 0], [1, 1, 1], [5, 5], [0, 4, 4], [3, 3], [2, 2, 2], [0, 0, 1]] }];
var ex147_out = [[2, 0], [0, 0]];
var ex148_in = [1, { "players": [{ "color": "red", "score": 10, "places": [[0, 0], [0, 1], [3, 0], [3, 1]] }, { "color": "white", "score": 0, "places": [[1, 2], [1, 1], [3, 2], [4, 0]] }], "board": [[2, 3, 0], [1, 1, 1], [0, 0, 0], [1, 1, 1], [1]] }];
var ex148_out = [[0, 1], [1, 0]];
var ex149_in = [1, { "players": [{ "color": "red", "score": 10, "places": [[0, 0], [0, 1], [3, 0], [3, 1]] }, { "color": "white", "score": 0, "places": [[1, 2], [1, 1], [3, 2], [4, 0]] }], "board": [[2, 3, 0], [0, 1, 1], [0, 0, 0], [1, 1, 1], [1]] }];
var ex149_out = false;
var ex15_in = [2, { "players": [{ "color": "red", "score": 100, "places": [[1, 1], [2, 1], [2, 0]] }, { "color": "black", "score": 10, "places": [[0, 1], [3, 2], [0, 0]] }, { "color": "white", "score": 100, "places": [[0, 2], [2, 2], [1, 2]] }], "board": [[1, 1, 1], [5, 1, 1], [1, 1, 1], [1, 1, 1], [5, 4, 1]] }];
var ex15_out = [[2, 0], [1, 0]];
var ex150_in = [1, { "players": [{ "places": [[3, 0], [1, 1], [4, 2], [6, 0]], "score": 0, "color": "brown" }, { "places": [[4, 0], [5, 0], [0, 2], [1, 2]], "score": 0, "color": "red" }], "board": [[0, 0, 1], [0, 1, 1], [0, 0, 0], [1, 0, 0], [1, 0, 1], [1, 0, 5], [1, 0, 0]] }];
var ex150_out = [[4, 2], [5, 2]];
var ex151_in = [2, { "players": [{ "places": [[3, 0], [1, 1], [4, 2], [6, 0]], "score": 0, "color": "brown" }, { "places": [[4, 0], [5, 0], [0, 2], [1, 2]], "score": 0, "color": "red" }], "board": [[0, 0, 1], [0, 1, 1], [0, 0, 0], [1, 0, 0], [1, 0, 1], [1, 0, 5], [1, 0, 0]] }];
var ex151_out = [[4, 2], [5, 2]];
var ex152_in = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex152_out = false;
var ex153_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 2], [2, 1], [2, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 2, 3, 1], [4, 1, 5, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }];
var ex153_out = [[0, 0], [2, 0]];
var ex154_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 2], [2, 1], [2, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 2, 3, 1], [4, 1, 5, 1], [1, 1, 3, 1], [1, 1, 1, 1]] }];
var ex154_out = [[2, 2], [3, 1]];
var ex155_in = [1, { "players": [{ "color": "red", "score": 1, "places": [[3, 2], [0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 2, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }];
var ex155_out = [[3, 2], [2, 2]];
var ex156_in = [1, { "players": [{ "color": "red", "score": 1, "places": [[0, 3], [0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0], [1, 1, 2, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }];
var ex156_out = false;
var ex157_in = [1, { "players": [{ "color": "red", "score": 1, "places": [[0, 3], [0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0], [1, 1, 2, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }];
var ex157_out = [[0, 2], [2, 2]];
var ex158_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }, { "color": "white", "score": 0, "places": [[0, 1], [1, 1], [3, 1], [5, 1]] }], "board": [[1, 1], [1, 1], [1, 0], [1, 1], [1, 0], [1, 1]] }];
var ex158_out = [[2, 0], [4, 0]];
var ex159_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [4, 0], [5, 0]] }, { "color": "white", "score": 0, "places": [[4, 1], [5, 1], [3, 1], [1, 1]] }], "board": [[1, 0], [1, 1], [1, 0], [1, 1], [1, 1], [1, 1]] }];
var ex159_out = [[0, 0], [1, 0]];
var ex16_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [2, 0], [6, 0], [4, 0]] }, { "color": "white", "score": 0, "places": [[5, 0], [3, 0], [0, 0], [7, 0]] }], "board": [[3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3], [3]] }];
var ex16_out = [[1, 0], [0, 1]];
var ex160_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [4, 0], [5, 0]] }, { "color": "white", "score": 0, "places": [[4, 1], [5, 1], [3, 1], [1, 1]] }], "board": [[1, 0], [1, 1], [1, 0], [1, 1], [1, 1], [1, 1]] }];
var ex160_out = [[2, 0], [3, 0]];
var ex161_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[2, 1], [4, 1]] }, { "color": "black", "score": 0, "places": [[0, 2], [2, 2]] }, { "color": "brown", "score": 0, "places": [[4, 2], [5, 1]] }], "board": [[1, 2, 1], [2, 1, 1], [2, 1, 1], [2, 1, 1], [3, 1, 1], [1, 1, 1]] }];
var ex161_out = [[2, 0], [0, 1]];
var ex162_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[2, 1], [4, 1]] }, { "color": "black", "score": 0, "places": [[0, 2], [2, 2]] }, { "color": "brown", "score": 0, "places": [[4, 2], [5, 1]] }], "board": [[1, 2, 1], [2, 1, 1], [2, 1, 1], [2, 1, 1], [3, 1, 1], [0, 1, 1]] }];
var ex162_out = [[2, 0], [3, 0]];
var ex163_in = [2, { "players": [{ "places": [[0, 0], [0, 1], [0, 2], [0, 3]], "score": 0, "color": "white" }, { "places": [[1, 1], [1, 2], [2, 0], [1, 3]], "score": 0, "color": "red" }], "board": [[2, 2, 2, 3], [0, 3, 1, 2], [4, 0], [5, 4, 3, 2, 0], [3, 2]] }];
var ex163_out = false;
var ex164_in = [1, { "players": [{ "places": [[0, 0], [0, 1], [0, 2], [0, 3]], "score": 0, "color": "white" }, { "places": [[1, 1], [1, 2], [3, 1], [1, 3]], "score": 0, "color": "red" }], "board": [[2, 2, 2, 3], [0, 2, 1, 2], [4, 4, 4, 4], [5, 4, 3, 2, 0]] }];
var ex164_out = [[0, 3], [2, 3]];
var ex165_in = [2, { "players": [{ "places": [[3, 0], [3, 1], [3, 2], [1, 3]], "score": 2, "color": "brown" }, { "places": [[0, 0], [0, 1], [2, 0], [0, 3]], "score": 2, "color": "black" }], "board": [[2, 2, 2, 3], [0, 0, 1, 2], [4, 0], [5, 4, 3, 0, 0]] }];
var ex165_out = [[3, 2], [1, 2]];
var ex166_in = [1, { "players": [{ "places": [[0, 0], [3, 1], [0, 3]], "score": 2, "color": "black" }, { "places": [[3, 0], [4, 0], [3, 2]], "score": 3, "color": "white" }, { "places": [[4, 1], [4, 2], [4, 3]], "score": 3, "color": "red" }], "board": [[5, 0, 2, 3], [4, 4, 1, 5], [5, 0], [5, 4, 3, 0, 0], [3, 3, 3, 1, 2]] }];
var ex166_out = [[0, 0], [1, 0]];
var ex167_in = [2, { "players": [{ "places": [[0, 0], [1, 0]], "score": 2, "color": "black" }, { "places": [[3, 0], [3, 2]], "score": 3, "color": "white" }, { "places": [[4, 1], [4, 2]], "score": 3, "color": "red" }, { "places": [[4, 4], [2, 0]], "score": 1, "color": "brown" }], "board": [[5, 0, 2, 3], [4, 4, 1, 5], [5], [5, 4, 3, 0, 0], [3, 3, 3, 1, 2]] }];
var ex167_out = false;
var ex168_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 2], [1, 1], [2, 2]] }, { "color": "brown", "score": 10, "places": [[2, 1], [2, 0], [0, 2], [0, 1]] }], "board": [[1, 2, 3], [4, 2, 5], [1, 1, 1]] }];
var ex168_out = [[0, 0], [1, 0]];
var ex169_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 2], [1, 1], [2, 2]] }, { "color": "brown", "score": 10, "places": [[2, 1], [2, 0], [0, 2], [0, 1]] }], "board": [[1, 2, 3, 1], [4, 2, 5, 1], [1, 1, 1, 1]] }];
var ex169_out = [[1, 2], [0, 3]];
var ex17_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }, { "color": "white", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }], "board": [[3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3]] }];
var ex17_out = false;
var ex170_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 4], [1, 1], [4, 4]] }, { "color": "brown", "score": 10, "places": [[4, 1], [4, 0], [0, 4], [0, 1]] }], "board": [[1, 2, 3, 5, 5], [0, 2, 5, 2, 5], [1, 1, 1, 5, 3], [1, 1, 1, 5, 3], [1, 1, 1, 5, 3]] }];
var ex170_out = [[1, 4], [3, 3]];
var ex171_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 2], [1, 1], [2, 2]] }, { "color": "brown", "score": 10, "places": [[2, 1], [2, 0], [0, 2], [0, 1]] }], "board": [[1, 2, 3], [0, 2, 5], [1, 1, 1]] }];
var ex171_out = false;
var ex172_in = [2, { "board": [[1, 1, 1, 1], [2, 1, 3, 3], [5, 3, 0, 5], [1, 1, 1, 1], [4, 5, 5, 1]], "players": [{ "color": "red", "score": 1, "places": [[0, 0], [0, 1]] }, { "color": "black", "score": 2, "places": [[0, 2], [0, 3]] }, { "color": "white", "score": 3, "places": [[1, 0], [1, 1]] }, { "color": "brown", "score": 4, "places": [[1, 2], [1, 3]] }] }];
var ex172_out = [[0, 0], [2, 0]];
var ex173_in = [2, { "board": [[1, 1, 1, 1], [2, 1, 3, 3], [0, 0, 1, 1], [1, 1, 1, 1], [4, 5, 5, 1]], "players": [{ "color": "red", "score": 1, "places": [[0, 0], [0, 1]] }, { "color": "black", "score": 2, "places": [[0, 2], [0, 3]] }, { "color": "white", "score": 3, "places": [[1, 0], [1, 1]] }, { "color": "brown", "score": 4, "places": [[1, 2], [1, 3]] }] }];
var ex173_out = false;
var ex174_in = [1, { "board": [[1, 1, 1, 1], [2, 1, 3, 3], [1, 0, 1, 1], [1, 1, 1, 1], [4, 5, 5, 1]], "players": [{ "color": "brown", "score": 4, "places": [[1, 2], [1, 3]] }, { "color": "red", "score": 1, "places": [[0, 0], [0, 1]] }, { "color": "black", "score": 2, "places": [[0, 2], [0, 3]] }, { "color": "white", "score": 3, "places": [[1, 0], [1, 1]] }] }];
var ex174_out = [[1, 2], [2, 2]];
var ex175_in = [1, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "brown", "score": 0, "places": [[1, 2], [2, 0], [2, 1]] }, { "color": "red", "score": 0, "places": [[1, 0], [1, 1], [2, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex175_out = false;
var ex176_in = [1, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "brown", "score": 0, "places": [[1, 2], [2, 0], [2, 1]] }, { "color": "red", "score": 0, "places": [[3, 0], [3, 1], [3, 2]] }], "board": [[1, 1, 1], [5, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex176_out = [[0, 0], [1, 0]];
var ex177_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 2], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[2, 2], [1, 3], [2, 0], [1, 1]] }], "board": [[1, 2, 3, 2], [4, 1, 5, 1], [1, 1, 1, 4]] }];
var ex177_out = [[1, 2], [2, 3]];
var ex178_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 2], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[2, 2], [1, 3], [2, 0], [1, 1]] }], "board": [[4, 2, 3, 2], [4, 1, 5, 1], [1, 1, 1, 4], [1, 2, 3, 4]] }];
var ex178_out = [[0, 0], [1, 0]];
var ex179_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 1], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[1, 2], [1, 3], [1, 0], [0, 1]] }], "board": [[4, 2, 3, 2], [4, 1, 5, 1]] }];
var ex179_out = false;
var ex18_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [1, 1], [4, 0]] }, { "color": "white", "score": 0, "places": [[1, 0], [3, 0], [5, 1], [3, 1]] }], "board": [[1, 1], [1, 1], [1, 3], [1, 1], [1, 1], [1, 1]] }];
var ex18_out = [[1, 1], [0, 1]];
var ex180_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 1], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[1, 2], [1, 3], [1, 0], [0, 1]] }], "board": [[4, 2, 3, 2], [4, 1, 5, 1]] }];
var ex180_out = false;
var ex181_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[1, 1], [1, 2], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[2, 2], [1, 3], [2, 0], [0, 0]] }], "board": [[1, 2, 3, 2], [4, 1, 1, 1], [1, 1, 1, 4]] }];
var ex181_out = [[0, 3], [2, 3]];
var ex182_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[2, 1], [0, 2]] }, { "color": "brown", "score": 0, "places": [[1, 0], [1, 1]] }, { "color": "black", "score": 0, "places": [[0, 1], [4, 1]] }, { "color": "white", "score": 0, "places": [[2, 2], [4, 2]] }], "board": [[1, 2, 1], [1, 1, 1, 0, 5], [3, 2, 1], [1, 3, 2], [1, 1, 4]] }];
var ex182_out = [[2, 1], [3, 0]];
var ex183_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[2, 1], [0, 2]] }, { "color": "brown", "score": 0, "places": [[1, 0], [2, 2]] }, { "color": "black", "score": 0, "places": [[0, 1], [4, 1]] }, { "color": "white", "score": 0, "places": [[1, 1], [4, 2]] }], "board": [[1, 2, 1, 3, 4], [1, 1, 1, 0, 5], [3, 2, 1, 4, 3], [1, 3, 2, 2, 1], [1, 1, 4, 3, 5]] }];
var ex183_out = [[0, 2], [4, 4]];
var ex184_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1]] }, { "color": "brown", "score": 0, "places": [[0, 2], [1, 1]] }, { "color": "black", "score": 0, "places": [[1, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[2, 1], [4, 2]] }], "board": [[1, 2, 1], [1, 1, 1], [3, 2, 1], [1, 3, 2], [1, 1, 4]] }];
var ex184_out = false;
var ex185_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1]] }, { "color": "brown", "score": 0, "places": [[0, 2], [1, 1]] }, { "color": "black", "score": 0, "places": [[1, 0], [3, 0]] }, { "color": "white", "score": 0, "places": [[2, 1], [4, 2]] }], "board": [[1, 2, 1], [1, 1, 1], [3, 2, 1], [1, 3, 2], [1, 1, 4]] }];
var ex185_out = [[0, 0], [2, 0]];
var ex186_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[2, 1], [1, 3]] }, { "color": "brown", "score": 0, "places": [[0, 2], [0, 3]] }, { "color": "black", "score": 0, "places": [[1, 2], [2, 2]] }, { "color": "white", "score": 0, "places": [[2, 3], [3, 3]] }], "board": [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]] }];
var ex186_out = [[1, 3], [0, 4]];
var ex187_in = [1, { "players": [{ "color": "brown", "score": 2, "places": [[0, 0], [1, 0], [2, 0], [1, 1]] }, { "color": "red", "score": 0, "places": [[0, 3], [1, 2], [1, 3], [2, 3]] }], "board": [[1, 1, 1, 3], [1, 1, 2, 3], [4, 5, 5, 3]] }];
var ex187_out = [[1, 0], [0, 1]];
var ex188_in = [2, { "players": [{ "color": "brown", "score": 2, "places": [[0, 0], [1, 0], [2, 0], [1, 1]] }, { "color": "red", "score": 0, "places": [[0, 3], [1, 2], [1, 3], [2, 3]] }], "board": [[1, 1, 1, 3], [1, 1, 2, 3], [4, 5, 5, 3]] }];
var ex188_out = [[1, 0], [2, 1]];
var ex189_in = [2, { "players": [{ "color": "brown", "score": 2, "places": [[0, 0], [1, 0], [2, 0], [0, 1]] }, { "color": "red", "score": 0, "places": [[4, 1], [4, 2], [1, 3], [2, 3]] }], "board": [[1, 1, 0, 3], [1, 1, 2, 3], [4, 5, 5, 3], [0, 2, 2], [2, 2, 2]] }];
var ex189_out = [[0, 1], [2, 1]];
var ex19_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [1, 1], [4, 0]] }, { "color": "white", "score": 0, "places": [[1, 0], [3, 0], [5, 1], [3, 1]] }], "board": [[1, 1], [1, 1], [1, 3], [1, 1], [1, 1], [1, 1]] }];
var ex19_out = [[1, 1], [2, 1]];
var ex190_in = [1, { "players": [{ "color": "red", "score": 2, "places": [[0, 0], [1, 0], [2, 0], [1, 1]] }, { "color": "brown", "score": 0, "places": [[0, 3], [1, 2], [1, 3], [2, 3]] }], "board": [[1, 0, 0, 3], [1, 1, 2, 3], [4, 0, 0, 3]] }];
var ex190_out = false;
var ex191_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }, { "color": "white", "score": 0, "places": [[0, 1], [0, 2], [0, 3], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 5, 1, 1], [1, 1, 1, 1]] }];
var ex191_out = [[1, 0], [2, 1]];
var ex192_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [1, 0], [1, 1]] }, { "color": "brown", "score": 0, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 0, 0, 1], [1, 2, 1, 4, 1], [0, 0, 0, 0, 1], [0, 0, 1, 1, 1], [1, 2, 3, 1, 1]] }];
var ex192_out = false;
var ex193_in = [2, { "players": [{ "color": "white", "score": 0, "places": [[0, 0], [1, 0], [2, 1], [2, 0]] }, { "color": "red", "score": 1, "places": [[3, 1], [0, 1], [3, 0], [3, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex193_out = [[2, 1], [0, 2]];
var ex194_in = [2, { "players": [{ "color": "white", "score": 0, "places": [[2, 0], [3, 0], [2, 1], [0, 0]] }, { "color": "red", "score": 1, "places": [[0, 1], [0, 2], [1, 2], [3, 2]] }], "board": [[1, 1, 1], [1, 3, 1], [1, 1, 1], [1, 1, 1]] }];
var ex194_out = [[2, 1], [1, 1]];
var ex195_in = [2, { "players": [{ "color": "white", "score": 0, "places": [[2, 0], [3, 0], [2, 1], [0, 0]] }, { "color": "red", "score": 1, "places": [[0, 1], [0, 2], [1, 2], [3, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex195_out = [[0, 0], [1, 0]];
var ex196_in = [2, { "players": [{ "color": "white", "score": 0, "places": [[2, 0], [3, 0], [1, 0], [0, 0]] }, { "color": "red", "score": 1, "places": [[0, 1], [0, 2], [1, 1], [3, 1]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 4, 1], [1, 1, 1]] }];
var ex196_out = [[1, 0], [2, 1]];
var ex2_in = [2, { "board": [[2, 2, 2], [2, 2, 2], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 0]], "players": [{ "places": [[4, 2], [4, 1], [4, 0], [1, 0]], "score": 0, "color": "red" }, { "places": [[5, 1], [5, 0], [1, 1], [0, 1]], "score": 0, "color": "white" }] }];
var ex2_out = [[1, 0], [0, 0]];
var ex20_in = [1, { "players": [{ "color": "red", "score": 2, "places": [[0, 1], [0, 2], [0, 3]] }, { "color": "brown", "score": 1, "places": [[1, 1], [2, 2], [3, 3]] }, { "color": "black", "score": 4, "places": [[5, 3], [5, 2], [5, 1]] }], "board": [[0, 2, 5, 5], [3, 1, 0, 3], [0, 3, 1, 3], [3, 3, 0, 1], [3, 3, 3, 3], [0, 4, 4, 4]] }];
var ex20_out = [[0, 3], [1, 3]];
var ex21_in = [2, { "players": [{ "color": "red", "score": 2, "places": [[0, 1], [0, 2], [0, 3]] }, { "color": "brown", "score": 1, "places": [[1, 1], [2, 2], [3, 3]] }, { "color": "black", "score": 4, "places": [[5, 3], [5, 2], [5, 1]] }], "board": [[0, 2, 5, 5], [3, 1, 0, 3], [0, 3, 1, 3], [3, 3, 0, 1], [3, 3, 3, 3], [0, 4, 4, 4]] }];
var ex21_out = [[0, 1], [1, 0]];
var ex22_in = [2, { "players": [{ "color": "red", "score": 1, "places": [[0, 0], [0, 1], [0, 2], [0, 3]] }, { "color": "brown", "score": 2, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 1, 1, 1], [2, 2, 2, 2], [0, 0, 0, 0]] }];
var ex22_out = false;
var ex23_in = [2, { "players": [{ "color": "brown", "score": 1, "places": [[1, 1], [2, 2]] }, { "color": "red", "score": 2, "places": [[0, 1], [0, 2]] }, { "color": "white", "score": 3, "places": [[5, 3], [5, 2]] }, { "color": "black", "score": 4, "places": [[5, 1], [5, 0]] }], "board": [[0, 2, 2, 0], [5, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0], [5, 5, 0, 5], [4, 4, 3, 3]] }];
var ex23_out = false;
var ex24_in = [2, { "players": [{ "color": "brown", "score": 1, "places": [[1, 1], [2, 3]] }, { "color": "red", "score": 2, "places": [[0, 1], [0, 2]] }, { "color": "white", "score": 3, "places": [[5, 3], [5, 2]] }, { "color": "black", "score": 4, "places": [[5, 1], [5, 0]] }], "board": [[0, 2, 2, 5], [0, 1, 0, 5], [0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0], [4, 4, 3, 3]] }];
var ex24_out = [[2, 3], [0, 3]];
var ex25_in = [1, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [1, 3]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 4]] }], "board": [[1, 1, 1, 0, 1], [1, 1, 1, 1, 1]] }];
var ex25_out = [[1, 3], [0, 4]];
var ex26_in = [1, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [1, 3]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 4]] }], "board": [[1, 1, 1, 0, 0], [1, 1, 1, 1, 1]] }];
var ex26_out = false;
var ex27_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 1], [0, 2], [1, 2], [0, 0]] }, { "color": "brown", "score": 0, "places": [[2, 2], [1, 1], [2, 0], [3, 0]] }], "board": [[1, 2, 5], [4, 1, 5], [1, 1, 1], [3, 3, 3]] }];
var ex27_out = [[1, 2], [3, 2]];
var ex28_in = [2, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [1, 3]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 4]] }], "board": [[1, 1, 1, 0, 1], [1, 1, 1, 1, 1]] }];
var ex28_out = [[1, 3], [0, 4]];
var ex29_in = [2, { "players": [{ "color": "black", "score": 1, "places": [[0, 0], [0, 1], [0, 2], [1, 0]] }, { "color": "red", "score": 4, "places": [[1, 1], [3, 2], [2, 0], [2, 1]] }], "board": [[4, 2, 4], [1, 3, 0], [2, 4, 0], [0, 0, 4], [4, 0, 0], [2, 3, 4], [2, 4, 2], [3, 4, 1]] }];
var ex29_out = false;
var ex3_in = [2, { "board": [[3, 2, 2], [2, 4, 0], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 0]], "players": [{ "places": [[4, 2], [4, 1], [4, 0], [1, 0]], "score": 0, "color": "red" }, { "places": [[5, 1], [5, 0], [1, 1], [0, 1]], "score": 0, "color": "white" }] }];
var ex3_out = [[1, 0], [0, 0]];
var ex30_in = [2, { "players": [{ "color": "black", "score": 1, "places": [[1, 2], [2, 1]] }, { "color": "red", "score": 4, "places": [[1, 1], [5, 1]] }, { "color": "white", "score": 8, "places": [[6, 0], [0, 0]] }, { "color": "brown", "score": 2, "places": [[4, 2], [7, 0]] }], "board": [[4, 0, 4], [0, 3, 2], [2, 4, 2], [2, 2, 1], [4, 0, 2], [2, 3, 4], [1, 4, 0], [3, 0, 1]] }];
var ex30_out = [[2, 1], [4, 0]];
var ex31_in = [1, { "players": [{ "color": "black", "score": 40, "places": [[0, 0], [2, 0], [3, 0], [3, 1]] }, { "color": "white", "score": 31, "places": [[0, 3], [1, 3], [2, 3], [3, 3]] }], "board": [[1, 1, 1, 1], [1, 0, 2, 1], [1, 1, 5, 1], [1, 1, 0, 1]] }];
var ex31_out = [[0, 0], [1, 0]];
var ex32_in = [2, { "players": [{ "color": "black", "score": 40, "places": [[0, 0], [2, 0], [3, 0], [3, 1]] }, { "color": "white", "score": 31, "places": [[0, 3], [1, 3], [2, 3], [3, 3]] }], "board": [[1, 1, 1, 1], [1, 0, 2, 1], [1, 1, 5, 1], [1, 1, 0, 1]] }];
var ex32_out = [[3, 1], [2, 2]];
var ex33_in = [1, { "players": [{ "color": "black", "score": 40, "places": [[1, 0], [1, 4], [2, 4], [3, 4]] }, { "color": "white", "score": 31, "places": [[0, 5], [1, 5], [2, 5], [3, 5]] }], "board": [[5, 1, 1, 1, 0, 1], [2, 0, 1, 0, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 1, 0, 1, 1]] }];
var ex33_out = [[1, 0], [0, 0]];
var ex34_in = [2, { "players": [{ "color": "black", "score": 40, "places": [[1, 0], [1, 4], [2, 4], [3, 4]] }, { "color": "white", "score": 31, "places": [[0, 5], [1, 5], [2, 5], [3, 5]] }], "board": [[5, 1, 1, 1, 0, 1], [2, 0, 1, 0, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 1, 0, 1, 1]] }];
var ex34_out = [[1, 0], [0, 1]];
var ex35_in = [2, { "players": [{ "color": "black", "score": 40, "places": [[0, 4], [1, 4], [2, 4], [3, 4]] }, { "color": "white", "score": 31, "places": [[0, 5], [1, 5], [2, 5], [3, 5]] }], "board": [[5, 1, 1, 1, 1, 1], [2, 0, 1, 0, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 1, 0, 1, 1]] }];
var ex35_out = false;
var ex36_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [4, 0], [0, 1]] }, { "color": "white", "score": 0, "places": [[1, 1], [2, 1], [3, 1], [4, 1]] }], "board": [[3, 3], [3, 3], [3, 3], [3, 3], [3, 3]] }];
var ex36_out = [[0, 0], [1, 0]];
var ex37_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[3, 0], [2, 0], [4, 0], [0, 1]] }, { "color": "white", "score": 0, "places": [[1, 1], [2, 1], [3, 1], [4, 1]] }], "board": [[3, 3], [3, 3], [3, 3], [3, 3], [3, 3]] }];
var ex37_out = [[0, 1], [1, 0]];
var ex38_in = [2, { "players": [{ "places": [[0, 0], [2, 0], [4, 0]], "score": 0, "color": "red" }, { "places": [[1, 0], [3, 0], [5, 0]], "score": 0, "color": "white" }, { "places": [[5, 2], [5, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 4, 5], [1, 2, 1], [3, 5, 5], [2, 1], [1, 1, 3], [1, 4, 1], [1, 2], []] }];
var ex38_out = false;
var ex39_in = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0], [3, 2]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0], [2, 2]], "score": 0, "color": "white" }], "board": [[1, 1, 1], [1, 1, 1], [3, 2, 4], [4, 2, 1], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }];
var ex39_out = [[4, 0], [3, 0]];
var ex4_in = [1, { "board": [[1, 3, 4, 2, 2, 4, 2, 1, 5, 5, 2, 4, 4, 3, 5, 4, 1, 3, 1, 1, 3, 2, 3, 5, 5]], "players": [{ "places": [[0, 6], [0, 4], [0, 2], [0, 0]], "score": 0, "color": "red" }, { "places": [[0, 7], [0, 5], [0, 3], [0, 1]], "score": 0, "color": "white" }] }];
var ex4_out = false;
var ex40_in = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0], [3, 2]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0], [2, 2]], "score": 0, "color": "white" }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 0], [1, 1, 1], [1, 1]] }];
var ex40_out = [[0, 0], [1, 0]];
var ex41_in = [2, { "players": [{ "places": [[0, 5], [1, 0], [2, 5], [3, 0]], "score": 0, "color": "red" }, { "places": [[0, 0], [1, 5], [2, 0], [3, 5]], "score": 0, "color": "white" }], "board": [[1, 3, 2, 4, 3, 2], [4, 1, 2, 5, 3, 4], [1, 2, 3, 4, 5, 3], [2, 4, 5, 1, 3, 2]] }];
var ex41_out = [[1, 0], [3, 1]];
var ex42_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [9, 0]] }, { "color": "black", "score": 0, "places": [[6, 0], [10, 0]] }, { "color": "brown", "score": 0, "places": [[7, 0], [11, 0]] }, { "color": "white", "score": 0, "places": [[8, 0], [12, 0]] }], "board": [[1], [0], [3], [0], [3], [0], [1], [1], [1], [1], [1], [1], [1]] }];
var ex42_out = [[0, 0], [4, 0]];
var ex43_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[3, 0], [4, 1]] }, { "color": "black", "score": 0, "places": [[5, 0], [3, 1]] }, { "color": "brown", "score": 0, "places": [[0, 1], [1, 1]] }, { "color": "white", "score": 0, "places": [[2, 1], [5, 1]] }], "board": [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]] }];
var ex43_out = [[3, 0], [1, 0]];
var ex44_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[3, 0], [4, 1]] }, { "color": "black", "score": 0, "places": [[5, 0], [3, 1]] }, { "color": "brown", "score": 0, "places": [[0, 1], [1, 1]] }, { "color": "white", "score": 0, "places": [[2, 1], [5, 1]] }], "board": [[0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [1, 1]] }];
var ex44_out = false;
var ex45_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0]] }, { "color": "black", "score": 0, "places": [[0, 1], [1, 1]] }, { "color": "brown", "score": 0, "places": [[2, 1], [3, 1]] }, { "color": "white", "score": 0, "places": [[4, 1], [5, 1]] }], "board": [[1, 1], [0, 1], [1, 1], [0, 1], [1, 1], [0, 1]] }];
var ex45_out = [[2, 0], [4, 0]];
var ex46_in = [2, { "players": [{ "color": "red", "score": 4, "places": [[2, 1], [0, 1], [1, 1], [1, 2]] }, { "color": "white", "score": 5, "places": [[0, 2], [3, 1], [4, 0], [2, 2]] }], "board": [[1, 2, 3], [0, 1, 2], [5, 2, 2], [4, 3, 5], [2, 1, 2]] }];
var ex46_out = [[2, 1], [3, 0]];
var ex47_in = [2, { "board": [[1, 0, 3, 4], [1, 0, 2, 0], [5, 5, 5, 5], [1, 2, 3, 4]], "players": [{ "color": "red", "score": 6, "places": [[1, 2], [0, 2], [0, 3], [3, 0]] }, { "color": "white", "score": 8, "places": [[2, 3], [0, 0], [1, 0], [2, 2]] }] }];
var ex47_out = [[1, 2], [3, 2]];
var ex48_in = [1, { "players": [{ "color": "red", "score": 3, "places": [[0, 0], [2, 0], [4, 0], [5, 0]] }, { "color": "black", "score": 5, "places": [[0, 1], [1, 0], [3, 0], [4, 1]] }], "board": [[3, 4], [4, 1], [4, 4], [1, 1], [2, 3], [1, 1]] }];
var ex48_out = false;
var ex49_in = [2, { "players": [{ "places": [[0, 0], [1, 0], [2, 0], [0, 1]], "score": 0, "color": "red" }, { "places": [[2, 1], [1, 1], [2, 2], [1, 3]], "score": 0, "color": "white" }], "board": [[3, 1, 2, 1], [5, 2, 1, 3], [3, 1, 1, 4]] }];
var ex49_out = false;
var ex5_in = [1, { "board": [[1], [0], [0], [1], [1], [1], [1], [1], [1], [1], [1]], "players": [{ "places": [[4, 0], [3, 0]], "score": 0, "color": "red" }, { "places": [[6, 0], [5, 0]], "score": 0, "color": "white" }, { "places": [[8, 0], [7, 0]], "score": 0, "color": "brown" }, { "places": [[10, 0], [9, 0]], "score": 0, "color": "black" }] }];
var ex5_out = false;
var ex50_in = [1, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[3, 0], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[2, 1], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [0, 1, 4], [0, 2, 1], [1, 0, 2], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }];
var ex50_out = false;
var ex51_in = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [4, 5, 0], [4, 5, 0], [1, 1, 4], [1, 3, 1], [1, 1, 1]] }];
var ex51_out = [[4, 2], [2, 1]];
var ex52_in = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0], [0, 0], [1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex52_out = [[0, 0], [1, 0]];
var ex53_in = [1, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }];
var ex53_out = [[0, 0], [1, 0]];
var ex54_in = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex54_out = false;
var ex55_in = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }];
var ex55_out = [[0, 0], [1, 0]];
var ex56_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [1, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[5, 0], [5, 2], [4, 3], [3, 4]] }], "board": [[1, 2, 4, 3, 2], [2, 0, 3, 2, 4], [2, 0, 1, 5, 1], [0, 1, 3, 2, 3], [1, 1, 2, 3, 5], [5, 5, 4, 3, 1]] }];
var ex56_out = [[2, 0], [4, 0]];
var ex57_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [1, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[5, 0], [5, 2], [4, 3], [3, 4]] }], "board": [[1, 2, 4, 3, 2], [2, 0, 3, 2, 4], [2, 0, 1, 5, 1], [0, 1, 3, 2, 3], [0, 1, 2, 3, 5], [5, 5, 4, 3, 1]] }];
var ex57_out = false;
var ex58_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [1, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[5, 0], [5, 2], [4, 3], [3, 4]] }], "board": [[1, 2, 4, 3, 2], [2, 3, 3, 2, 4], [2, 0, 1, 5, 1], [0, 1, 3, 2, 3], [1, 1, 2, 3, 5], [5, 5, 4, 3, 1]] }];
var ex58_out = [[0, 1], [1, 1]];
var ex59_in = [1, { "board": [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 5]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }];
var ex59_out = [[2, 0], [4, 0]];
var ex6_in = [1, { "players": [{ "color": "black", "score": 0, "places": [[5, 2], [4, 0], [3, 2]] }, { "color": "brown", "score": 0, "places": [[0, 0], [6, 2], [6, 1]] }, { "color": "white", "score": 5, "places": [[3, 0], [0, 1], [1, 2]] }], "board": [[3, 1, 3], [5, 2, 2], [1, 4], [3, 2, 5], [1, 4, 1], [2, 2, 2], [5, 5, 1], [2, 3, 3]] }];
var ex6_out = [[3, 2], [4, 2]];
var ex60_in = [2, { "board": [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 5]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }];
var ex60_out = [[2, 1], [6, 1]];
var ex61_in = [1, { "board": [[1, 1], [1, 1], [1, 1], [1, 1], [0, 0], [1, 0], [0, 5]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }];
var ex61_out = false;
var ex62_in = [2, { "board": [[1, 1], [1, 1], [3, 2], [1, 1], [1, 1], [1, 0], [0, 5]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }];
var ex62_out = [[2, 1], [6, 1]];
var ex63_in = [2, { "board": [[1, 1], [1, 1], [1, 1], [1, 1], [1, 5], [0, 0], [0, 0]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }];
var ex63_out = [[2, 0], [4, 0]];
var ex64_in = [1, { "players": [{ "color": "black", "score": 0, "places": [[2, 1], [4, 0], [4, 1], [5, 0]] }, { "color": "white", "score": 0, "places": [[2, 0], [5, 1], [6, 0], [6, 1]] }], "board": [[1, 1], [1, 1], [1, 1], [0, 0], [1, 1], [1, 1], [1, 1]] }];
var ex64_out = [[2, 1], [0, 0]];
var ex65_in = [2, { "players": [{ "color": "black", "score": 0, "places": [[2, 1], [4, 0], [4, 1], [5, 0]] }, { "color": "white", "score": 0, "places": [[2, 0], [5, 1], [6, 0], [6, 1]] }], "board": [[1, 1], [1, 0], [1, 1], [0, 0], [1, 1], [1, 1], [1, 1]] }];
var ex65_out = [[2, 1], [1, 0]];
var ex66_in = [2, { "players": [{ "color": "black", "score": 0, "places": [[2, 1], [4, 0], [4, 1], [5, 0]] }, { "color": "white", "score": 0, "places": [[2, 0], [5, 1], [6, 0], [6, 1]] }], "board": [[1, 0], [0, 0], [1, 1], [0, 0], [1, 1], [1, 1], [1, 1]] }];
var ex66_out = false;
var ex67_in = [2, { "players": [{ "color": "black", "score": 0, "places": [[2, 1], [3, 0], [5, 0], [5, 1]] }, { "color": "white", "score": 0, "places": [[2, 0], [0, 0], [6, 0], [6, 1]] }], "board": [[1, 1], [1, 1], [1, 1], [1, 1], [0, 0], [1, 1], [1, 1]] }];
var ex67_out = [[2, 1], [0, 1]];
var ex68_in = [2, { "players": [{ "color": "black", "score": 0, "places": [[1, 1], [2, 0], [4, 0], [4, 1]] }, { "color": "white", "score": 0, "places": [[5, 0], [5, 1], [6, 0], [6, 1]] }], "board": [[2, 1], [1, 1], [1, 3], [0, 0], [1, 1], [1, 1], [1, 1]] }];
var ex68_out = [[1, 1], [2, 1]];
var ex69_in = [1, { "board": [[2, 5, 4, 0], [4, 1, 2, 0], [3, 3, 5, 5], [1, 5, 2, 1], [5, 4, 4, 5], [3, 4, 0, 5], [0, 2, 0, 2], [4, 3, 0, 3], [3, 4, 5, 2], [3, 0, 4, 5]], "players": [{ "color": "white", "score": 0, "places": [[3, 0], [5, 1]] }, { "color": "black", "score": 0, "places": [[8, 3], [8, 1]] }, { "color": "red", "score": 0, "places": [[8, 2], [6, 1]] }, { "color": "brown", "score": 0, "places": [[4, 3], [9, 3]] }] }];
var ex69_out = [[5, 1], [1, 1]];
var ex7_in = [1, { "players": [{ "color": "white", "score": 1, "places": [[3, 0], [0, 2], [2, 1], [5, 0]] }, { "color": "black", "score": 3, "places": [[4, 2], [4, 0], [2, 0], [1, 1]] }], "board": [[2, 2, 1], [3, 2, 5], [5, 4, 2], [3], [1, 1, 1], [2, 3, 5]] }];
var ex7_out = [[2, 1], [0, 0]];
var ex70_in = [1, { "board": [[1, 4, 1, 2], [3, 5, 5, 4], [4, 4, 4, 2], [0, 5, 2, 1], [5, 5, 4, 5], [5, 2, 1, 3], [1, 1, 4, 1], [4, 0, 2, 2], [4, 4, 4, 3], [3, 2, 3, 3]], "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[0, 3], [1, 0], [1, 1]] }, { "color": "brown", "score": 0, "places": [[1, 2], [1, 3], [2, 0]] }] }];
var ex70_out = [[0, 1], [2, 1]];
var ex71_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 1], [3, 2], [3, 0]] }, { "color": "black", "score": 0, "places": [[0, 2], [2, 2], [0, 1], [1, 2]] }], "board": [[1, 2, 3], [3, 3, 1], [5, 4, 5], [1, 0, 1]] }];
var ex71_out = [[1, 1], [2, 1]];
var ex72_in = [1, { "players": [{ "color": "red", "score": 2, "places": [[0, 1], [1, 0], [3, 2], [3, 0]] }, { "color": "black", "score": 0, "places": [[0, 2], [2, 2], [2, 1], [1, 2]] }], "board": [[1, 2, 3], [3, 0, 1], [5, 4, 5], [1, 0, 1]] }];
var ex72_out = [[1, 0], [0, 0]];
var ex73_in = [2, { "players": [{ "color": "red", "score": 2, "places": [[0, 1], [1, 0], [3, 2], [3, 0]] }, { "color": "black", "score": 0, "places": [[0, 2], [2, 2], [2, 1], [1, 2]] }], "board": [[1, 2, 3], [3, 0, 1], [5, 4, 5], [1, 0, 1]] }];
var ex73_out = [[1, 0], [2, 0]];
var ex74_in = [2, { "players": [{ "color": "black", "score": 0, "places": [[0, 2], [2, 2], [2, 1], [1, 2]] }, { "color": "red", "score": 2, "places": [[0, 1], [1, 0], [3, 2], [3, 0]] }], "board": [[1, 2, 3], [3, 0, 1], [5, 4, 5], [1, 0, 1]] }];
var ex74_out = false;
var ex75_in = [2, { "players": [{ "color": "black", "score": 0, "places": [[7, 3], [6, 0]] }, { "color": "red", "score": 0, "places": [[0, 0], [4, 0]] }, { "color": "brown", "score": 0, "places": [[5, 0], [7, 1]] }, { "color": "white", "score": 0, "places": [[7, 0], [6, 1]] }], "board": [[1], [1], [0, 5], [0, 5], [1, 0, 1], [1, 0, 4], [1, 1, 0, 1], [1, 2, 0, 4]] }];
var ex75_out = [[7, 3], [2, 1]];
var ex76_in = [1, { "players": [{ "places": [[0, 0], [1, 1]], "score": 0, "color": "black" }, { "places": [[3, 1], [4, 2]], "score": 0, "color": "white" }, { "places": [[1, 2], [2, 2]], "score": 0, "color": "brown" }, { "places": [[0, 2], [3, 2]], "score": 0, "color": "red" }], "board": [[1, 0, 1], [3, 3, 3], [3, 0, 1], [1, 1, 1], [4, 0, 3]] }];
var ex76_out = [[0, 0], [1, 0]];
var ex77_in = [2, { "players": [{ "places": [[0, 0], [1, 1]], "score": 0, "color": "red" }, { "places": [[3, 1], [4, 2]], "score": 0, "color": "brown" }, { "places": [[1, 2], [2, 2]], "score": 0, "color": "white" }, { "places": [[0, 2], [3, 2]], "score": 0, "color": "black" }], "board": [[1, 0, 1], [3, 3, 3], [3, 0, 1], [1, 1, 1], [4, 0, 3]] }];
var ex77_out = [[0, 0], [4, 0]];
var ex78_in = [1, { "players": [{ "places": [[3, 1], [4, 2]], "score": 0, "color": "white" }, { "places": [[0, 0], [1, 1]], "score": 0, "color": "red" }, { "places": [[1, 2], [2, 2]], "score": 0, "color": "black" }, { "places": [[0, 2], [3, 2]], "score": 0, "color": "brown" }], "board": [[1, 0, 1], [0, 3, 3], [0, 0, 1], [1, 1, 1], [4, 0, 3]] }];
var ex78_out = false;
var ex79_in = [2, { "players": [{ "color": "black", "score": 2, "places": [[1, 1], [3, 0], [3, 3]] }, { "color": "red", "score": 1, "places": [[3, 2], [0, 1], [0, 3]] }, { "color": "brown", "score": 4, "places": [[4, 2], [4, 3], [5, 2]] }], "board": [[0, 2, 3, 2], [3, 1, 0, 4], [0, 3, 1, 0], [3, 3, 2, 1], [3, 3, 4, 4], [0, 0, 4, 0]] }];
var ex79_out = [[3, 0], [2, 1]];
var ex8_in = [2, { "players": [{ "color": "black", "score": 0, "places": [[5, 2], [4, 0], [3, 2]] }, { "color": "brown", "score": 0, "places": [[0, 0], [6, 2], [6, 1]] }, { "color": "white", "score": 5, "places": [[3, 0], [0, 1], [1, 2]] }], "board": [[3, 1, 3], [5, 2, 2], [1, 4], [3, 2, 5], [1, 4, 1], [2, 2, 2], [5, 5, 1], [2, 3, 3]] }];
var ex8_out = [[3, 2], [5, 1]];
var ex80_in = [2, { "players": [{ "color": "white", "score": 0, "places": [[4, 1], [0, 0], [3, 2]] }, { "color": "red", "score": 0, "places": [[1, 0], [1, 2], [2, 0]] }, { "color": "brown", "score": 5, "places": [[2, 1], [3, 0], [2, 3]] }], "board": [[1, 2, 3, 2], [4, 0, 5, 4], [1, 1, 0, 2], [2, 1, 1, 0], [1, 1, 0, 1], [0, 2, 4, 1]] }];
var ex80_out = [[3, 2], [4, 3]];
var ex81_in = [2, { "players": [{ "color": "black", "score": 2, "places": [[0, 0], [1, 1], [0, 1], [2, 2]] }, { "color": "red", "score": 0, "places": [[3, 0], [2, 1], [1, 2], [3, 2]] }], "board": [[1, 2, 5], [2, 1, 4], [1, 3, 5], [2, 1, 1]] }];
var ex81_out = [[0, 1], [1, 0]];
var ex82_in = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [0, 1], [1, 1]] }, { "color": "brown", "score": 0, "places": [[2, 0], [3, 0], [2, 1], [3, 1]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex82_out = [[1, 1], [0, 2]];
var ex83_in = [2, { "players": [{ "color": "red", "score": 3, "places": [[0, 0], [1, 0], [0, 1], [1, 1]] }, { "color": "brown", "score": 5, "places": [[2, 0], [3, 0], [2, 1], [3, 1]] }], "board": [[1, 1, 2, 3], [1, 2, 0, 0], [1, 1, 1, 2], [1, 1, 3, 1]] }];
var ex83_out = [[1, 1], [3, 2]];
var ex84_in = [2, { "players": [{ "color": "red", "score": 3, "places": [[0, 0], [1, 0], [2, 0], [0, 1]] }, { "color": "brown", "score": 5, "places": [[3, 0], [1, 1], [1, 2], [3, 2]] }], "board": [[1, 1, 2], [1, 2, 1], [1, 0, 1], [1, 1, 3]] }];
var ex84_out = false;
var ex85_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [3, 2], [1, 1]] }, { "color": "brown", "score": 0, "places": [[2, 0], [3, 0], [2, 1], [3, 1]] }], "board": [[1, 5, 1], [1, 1, 4], [1, 1, 2], [1, 1, 1]] }];
var ex85_out = [[3, 2], [1, 2]];
var ex86_in = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 2], [1, 1], [2, 0]] }, { "color": "white", "score": 0, "places": [[0, 1], [1, 0], [1, 2], [2, 1]] }], "board": [[1, 2, 3], [3, 2, 1], [4, 5, 3], [2, 3, 4]] }];
var ex86_out = [[0, 2], [2, 2]];
var ex87_in = [1, { "players": [{ "color": "white", "score": 0, "places": [[0, 1], [1, 1]] }, { "color": "brown", "score": 0, "places": [[0, 0], [1, 0]] }, { "color": "red", "score": 0, "places": [[0, 2], [1, 2]] }, { "color": "black", "score": 0, "places": [[0, 3], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }];
var ex87_out = [[0, 1], [2, 1]];
var ex88_in = [2, { "players": [{ "color": "white", "score": 0, "places": [[0, 1], [1, 1]] }, { "color": "brown", "score": 0, "places": [[0, 0], [1, 0]] }, { "color": "red", "score": 0, "places": [[0, 2], [1, 2]] }, { "color": "black", "score": 0, "places": [[0, 3], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1]] }];
var ex88_out = false;
var ex89_in = [1, { "players": [{ "color": "brown", "score": 0, "places": [[0, 0], [0, 2], [3, 3], [5, 1]] }, { "color": "white", "score": 0, "places": [[2, 0], [0, 3], [3, 1], [5, 0]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 3], [1, 1, 1, 1]] }];
var ex89_out = [[0, 0], [1, 0]];
var ex9_in = [2, { "players": [{ "color": "brown", "score": 0, "places": [[0, 0], [0, 2], [0, 3], [0, 4]] }, { "color": "white", "score": 0, "places": [[0, 1], [3, 2], [4, 1], [2, 2]] }], "board": [[2, 2, 3, 4, 1], [0], [0, 0, 5], [1, 1, 1, 2, 5], [5, 3, 4, 2, 1]] }];
var ex9_out = false;
var ex90_in = [1, { "players": [{ "color": "brown", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1], [2, 2, 4, 4], [0, 0, 0, 0], [0, 0, 0, 0], [4, 4, 2, 2], [1, 1, 1, 1]] }];
var ex90_out = [[0, 0], [1, 0]];
var ex91_in = [2, { "players": [{ "color": "brown", "score": 0, "places": [[0, 0], [0, 2], [3, 3], [4, 1]] }, { "color": "white", "score": 0, "places": [[2, 0], [0, 3], [3, 1], [5, 0]] }], "board": [[1, 0, 1, 1], [1, 2, 1, 1], [1, 0, 1, 2], [1, 1, 5, 1], [1, 1, 1, 0], [1, 1, 1, 4]] }];
var ex91_out = [[0, 2], [2, 3]];
var ex92_in = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex92_out = false;
var ex93_in = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }];
var ex93_out = [[0, 0], [1, 0]];
var ex94_in = [1, { "board": [[0, 0, 0, 0, 0], [1, 2, 0, 4, 0], [], [1], [1, 1, 1, 1]], "players": [{ "score": 0, "color": "red", "places": [[1, 0], [1, 1], [1, 3], [3, 0]] }, { "score": 0, "color": "brown", "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }] }];
var ex94_out = false;
var ex95_in = [2, { "players": [{ "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "black" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }];
var ex95_out = false;
var ex96_in = [2, { "players": [{ "color": "red", "score": 1, "places": [[0, 1], [1, 1], [1, 0], [2, 3]] }, { "color": "black", "score": 0, "places": [[0, 0], [2, 0], [2, 1], [2, 2]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }];
var ex96_out = [[1, 1], [0, 2]];
var ex97_in = [2, { "players": [{ "color": "red", "score": 1, "places": [[0, 0], [0, 2], [0, 1], [2, 3]] }, { "color": "white", "score": 1, "places": [[2, 0], [1, 2], [2, 2], [1, 3]] }], "board": [[1, 2, 3, 4], [1, 0, 1, 1], [1, 2, 1, 5]] }];
var ex97_out = [[2, 3], [0, 3]];
var ex98_in = [2, { "players": [{ "color": "white", "score": 1, "places": [[1, 1], [1, 2], [2, 3], [1, 3]] }, { "color": "brown", "score": 0, "places": [[0, 0], [2, 0], [2, 1], [2, 2]] }], "board": [[1, 0, 4, 5], [2, 3, 4, 5], [2, 3, 5, 3], [3, 3, 3, 3]] }];
var ex98_out = [[1, 2], [0, 2]];
var ex99_in = [2, { "players": [{ "color": "black", "score": 1, "places": [[1, 1], [1, 2], [4, 4], [2, 4]] }, { "color": "white", "score": 1, "places": [[0, 0], [3, 2], [1, 3], [2, 3]] }], "board": [[1, 3, 4, 5, 3], [2, 3, 4, 5, 3], [2, 3, 0, 3, 3], [3, 3, 3, 3, 4], [2, 3, 5, 3, 3]] }];
var ex99_out = [[1, 1], [0, 1]];
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
    it("ex5_in ->  ex5_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex5_in), ex5_out);
    });
    it("ex6_in ->  ex6_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex6_in), ex6_out);
    });
    it("ex7_in ->  ex7_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex7_in), ex7_out);
    });
    it("ex8_in ->  ex8_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex8_in), ex8_out);
    });
    it("ex9_in ->  ex9_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex9_in), ex9_out);
    });
    it("ex10_in ->  ex10_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex10_in), ex10_out);
    });
    it("ex11_in ->  ex11_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex11_in), ex11_out);
    });
    it("ex12_in ->  ex12_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex12_in), ex12_out);
    });
    it("ex13_in ->  ex13_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex13_in), ex13_out);
    });
    it("ex14_in ->  ex14_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex14_in), ex14_out);
    });
    it("ex15_in ->  ex15_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex15_in), ex15_out);
    });
    it("ex16_in ->  ex16_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex16_in), ex16_out);
    });
    it("ex17_in ->  ex17_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex17_in), ex17_out);
    });
    it("ex18_in ->  ex18_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex18_in), ex18_out);
    });
    it("ex19_in ->  ex19_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex19_in), ex19_out);
    });
    it("ex20_in ->  ex20_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex20_in), ex20_out);
    });
    it("ex21_in ->  ex21_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex21_in), ex21_out);
    });
    it("ex22_in ->  ex22_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex22_in), ex22_out);
    });
    it("ex23_in ->  ex23_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex23_in), ex23_out);
    });
    it("ex24_in ->  ex24_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex24_in), ex24_out);
    });
    it("ex25_in ->  ex25_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex25_in), ex25_out);
    });
    it("ex26_in ->  ex26_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex26_in), ex26_out);
    });
    it("ex27_in ->  ex27_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex27_in), ex27_out);
    });
    it("ex28_in ->  ex28_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex28_in), ex28_out);
    });
    it("ex29_in ->  ex29_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex29_in), ex29_out);
    });
    it("ex30_in ->  ex30_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex30_in), ex30_out);
    });
    it("ex31_in ->  ex31_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex31_in), ex31_out);
    });
    it("ex32_in ->  ex32_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex32_in), ex32_out);
    });
    it("ex33_in ->  ex33_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex33_in), ex33_out);
    });
    it("ex34_in ->  ex34_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex34_in), ex34_out);
    });
    it("ex35_in ->  ex35_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex35_in), ex35_out);
    });
    it("ex36_in ->  ex36_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex36_in), ex36_out);
    });
    it("ex37_in ->  ex37_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex37_in), ex37_out);
    });
    it("ex38_in ->  ex38_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex38_in), ex38_out);
    });
    it("ex39_in ->  ex39_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex39_in), ex39_out);
    });
    it("ex40_in ->  ex40_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex40_in), ex40_out);
    });
    it("ex41_in ->  ex41_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex41_in), ex41_out);
    });
    it("ex42_in ->  ex42_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex42_in), ex42_out);
    });
    it("ex43_in ->  ex43_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex43_in), ex43_out);
    });
    it("ex44_in ->  ex44_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex44_in), ex44_out);
    });
    it("ex45_in ->  ex45_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex45_in), ex45_out);
    });
    it("ex46_in ->  ex46_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex46_in), ex46_out);
    });
    it("ex47_in ->  ex47_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex47_in), ex47_out);
    });
    it("ex48_in ->  ex48_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex48_in), ex48_out);
    });
    it("ex49_in ->  ex49_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex49_in), ex49_out);
    });
    it("ex50_in ->  ex50_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex50_in), ex50_out);
    });
    it("ex51_in ->  ex51_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex51_in), ex51_out);
    });
    it("ex52_in ->  ex52_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex52_in), ex52_out);
    });
    it("ex53_in ->  ex53_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex53_in), ex53_out);
    });
    it("ex54_in ->  ex54_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex54_in), ex54_out);
    });
    it("ex55_in ->  ex55_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex55_in), ex55_out);
    });
    it("ex56_in ->  ex56_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex56_in), ex56_out);
    });
    it("ex57_in ->  ex57_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex57_in), ex57_out);
    });
    it("ex58_in ->  ex58_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex58_in), ex58_out);
    });
    it("ex59_in ->  ex59_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex59_in), ex59_out);
    });
    it("ex60_in ->  ex60_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex60_in), ex60_out);
    });
    it("ex61_in ->  ex61_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex61_in), ex61_out);
    });
    it("ex62_in ->  ex62_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex62_in), ex62_out);
    });
    it("ex63_in ->  ex63_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex63_in), ex63_out);
    });
    it("ex64_in ->  ex64_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex64_in), ex64_out);
    });
    it("ex65_in ->  ex65_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex65_in), ex65_out);
    });
    it("ex66_in ->  ex66_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex66_in), ex66_out);
    });
    it("ex67_in ->  ex67_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex67_in), ex67_out);
    });
    it("ex68_in ->  ex68_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex68_in), ex68_out);
    });
    it("ex69_in ->  ex69_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex69_in), ex69_out);
    });
    it("ex70_in ->  ex70_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex70_in), ex70_out);
    });
    it("ex71_in ->  ex71_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex71_in), ex71_out);
    });
    it("ex72_in ->  ex72_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex72_in), ex72_out);
    });
    it("ex73_in ->  ex73_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex73_in), ex73_out);
    });
    it("ex74_in ->  ex74_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex74_in), ex74_out);
    });
    it("ex75_in ->  ex75_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex75_in), ex75_out);
    });
    it("ex76_in ->  ex76_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex76_in), ex76_out);
    });
    it("ex77_in ->  ex77_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex77_in), ex77_out);
    });
    it("ex78_in ->  ex78_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex78_in), ex78_out);
    });
    it("ex79_in ->  ex79_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex79_in), ex79_out);
    });
    it("ex80_in ->  ex80_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex80_in), ex80_out);
    });
    it("ex81_in ->  ex81_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex81_in), ex81_out);
    });
    it("ex82_in ->  ex82_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex82_in), ex82_out);
    });
    it("ex83_in ->  ex83_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex83_in), ex83_out);
    });
    it("ex84_in ->  ex84_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex84_in), ex84_out);
    });
    it("ex85_in ->  ex85_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex85_in), ex85_out);
    });
    it("ex86_in ->  ex86_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex86_in), ex86_out);
    });
    it("ex87_in ->  ex87_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex87_in), ex87_out);
    });
    it("ex88_in ->  ex88_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex88_in), ex88_out);
    });
    it("ex89_in ->  ex89_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex89_in), ex89_out);
    });
    it("ex90_in ->  ex90_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex90_in), ex90_out);
    });
    it("ex91_in ->  ex91_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex91_in), ex91_out);
    });
    it("ex92_in ->  ex92_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex92_in), ex92_out);
    });
    it("ex93_in ->  ex93_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex93_in), ex93_out);
    });
    it("ex94_in ->  ex94_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex94_in), ex94_out);
    });
    it("ex95_in ->  ex95_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex95_in), ex95_out);
    });
    it("ex96_in ->  ex96_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex96_in), ex96_out);
    });
    it("ex97_in ->  ex97_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex97_in), ex97_out);
    });
    it("ex98_in ->  ex98_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex98_in), ex98_out);
    });
    it("ex99_in ->  ex99_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex99_in), ex99_out);
    });
    it("ex100_in ->  ex100_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex100_in), ex100_out);
    });
    it("ex101_in ->  ex101_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex101_in), ex101_out);
    });
    it("ex102_in ->  ex102_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex102_in), ex102_out);
    });
    it("ex103_in ->  ex103_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex103_in), ex103_out);
    });
    it("ex104_in ->  ex104_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex104_in), ex104_out);
    });
    it("ex105_in ->  ex105_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex105_in), ex105_out);
    });
    it("ex106_in ->  ex106_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex106_in), ex106_out);
    });
    it("ex107_in ->  ex107_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex107_in), ex107_out);
    });
    it("ex108_in ->  ex108_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex108_in), ex108_out);
    });
    it("ex109_in ->  ex109_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex109_in), ex109_out);
    });
    it("ex110_in ->  ex110_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex110_in), ex110_out);
    });
    it("ex111_in ->  ex111_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex111_in), ex111_out);
    });
    it("ex112_in ->  ex112_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex112_in), ex112_out);
    });
    it("ex113_in ->  ex113_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex113_in), ex113_out);
    });
    it("ex114_in ->  ex114_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex114_in), ex114_out);
    });
    it("ex115_in ->  ex115_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex115_in), ex115_out);
    });
    it("ex116_in ->  ex116_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex116_in), ex116_out);
    });
    it("ex117_in ->  ex117_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex117_in), ex117_out);
    });
    it("ex118_in ->  ex118_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex118_in), ex118_out);
    });
    it("ex119_in ->  ex119_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex119_in), ex119_out);
    });
    it("ex120_in ->  ex120_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex120_in), ex120_out);
    });
    it("ex121_in ->  ex121_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex121_in), ex121_out);
    });
    it("ex122_in ->  ex122_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex122_in), ex122_out);
    });
    it("ex123_in ->  ex123_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex123_in), ex123_out);
    });
    it("ex124_in ->  ex124_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex124_in), ex124_out);
    });
    it("ex125_in ->  ex125_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex125_in), ex125_out);
    });
    it("ex126_in ->  ex126_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex126_in), ex126_out);
    });
    it("ex127_in ->  ex127_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex127_in), ex127_out);
    });
    it("ex128_in ->  ex128_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex128_in), ex128_out);
    });
    it("ex129_in ->  ex129_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex129_in), ex129_out);
    });
    it("ex130_in ->  ex130_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex130_in), ex130_out);
    });
    it("ex131_in ->  ex131_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex131_in), ex131_out);
    });
    it("ex132_in ->  ex132_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex132_in), ex132_out);
    });
    it("ex133_in ->  ex133_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex133_in), ex133_out);
    });
    it("ex134_in ->  ex134_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex134_in), ex134_out);
    });
    it("ex135_in ->  ex135_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex135_in), ex135_out);
    });
    it("ex136_in ->  ex136_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex136_in), ex136_out);
    });
    it("ex137_in ->  ex137_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex137_in), ex137_out);
    });
    it("ex138_in ->  ex138_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex138_in), ex138_out);
    });
    it("ex139_in ->  ex139_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex139_in), ex139_out);
    });
    it("ex140_in ->  ex140_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex140_in), ex140_out);
    });
    it("ex141_in ->  ex141_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex141_in), ex141_out);
    });
    it("ex142_in ->  ex142_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex142_in), ex142_out);
    });
    it("ex143_in ->  ex143_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex143_in), ex143_out);
    });
    it("ex144_in ->  ex144_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex144_in), ex144_out);
    });
    it("ex145_in ->  ex145_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex145_in), ex145_out);
    });
    it("ex146_in ->  ex146_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex146_in), ex146_out);
    });
    it("ex147_in ->  ex147_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex147_in), ex147_out);
    });
    it("ex148_in ->  ex148_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex148_in), ex148_out);
    });
    it("ex149_in ->  ex149_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex149_in), ex149_out);
    });
    it("ex150_in ->  ex150_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex150_in), ex150_out);
    });
    it("ex151_in ->  ex151_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex151_in), ex151_out);
    });
    it("ex152_in ->  ex152_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex152_in), ex152_out);
    });
    it("ex153_in ->  ex153_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex153_in), ex153_out);
    });
    it("ex154_in ->  ex154_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex154_in), ex154_out);
    });
    it("ex155_in ->  ex155_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex155_in), ex155_out);
    });
    it("ex156_in ->  ex156_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex156_in), ex156_out);
    });
    it("ex157_in ->  ex157_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex157_in), ex157_out);
    });
    it("ex158_in ->  ex158_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex158_in), ex158_out);
    });
    it("ex159_in ->  ex159_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex159_in), ex159_out);
    });
    it("ex160_in ->  ex160_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex160_in), ex160_out);
    });
    it("ex161_in ->  ex161_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex161_in), ex161_out);
    });
    it("ex162_in ->  ex162_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex162_in), ex162_out);
    });
    it("ex163_in ->  ex163_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex163_in), ex163_out);
    });
    it("ex164_in ->  ex164_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex164_in), ex164_out);
    });
    it("ex165_in ->  ex165_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex165_in), ex165_out);
    });
    it("ex166_in ->  ex166_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex166_in), ex166_out);
    });
    it("ex167_in ->  ex167_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex167_in), ex167_out);
    });
    it("ex168_in ->  ex168_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex168_in), ex168_out);
    });
    it("ex169_in ->  ex169_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex169_in), ex169_out);
    });
    it("ex170_in ->  ex170_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex170_in), ex170_out);
    });
    it("ex171_in ->  ex171_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex171_in), ex171_out);
    });
    it("ex172_in ->  ex172_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex172_in), ex172_out);
    });
    it("ex173_in ->  ex173_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex173_in), ex173_out);
    });
    it("ex174_in ->  ex174_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex174_in), ex174_out);
    });
    it("ex175_in ->  ex175_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex175_in), ex175_out);
    });
    it("ex176_in ->  ex176_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex176_in), ex176_out);
    });
    it("ex177_in ->  ex177_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex177_in), ex177_out);
    });
    it("ex178_in ->  ex178_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex178_in), ex178_out);
    });
    it("ex179_in ->  ex179_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex179_in), ex179_out);
    });
    it("ex180_in ->  ex180_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex180_in), ex180_out);
    });
    it("ex181_in ->  ex181_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex181_in), ex181_out);
    });
    it("ex182_in ->  ex182_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex182_in), ex182_out);
    });
    it("ex183_in ->  ex183_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex183_in), ex183_out);
    });
    it("ex184_in ->  ex184_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex184_in), ex184_out);
    });
    it("ex185_in ->  ex185_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex185_in), ex185_out);
    });
    it("ex186_in ->  ex186_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex186_in), ex186_out);
    });
    it("ex187_in ->  ex187_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex187_in), ex187_out);
    });
    it("ex188_in ->  ex188_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex188_in), ex188_out);
    });
    it("ex189_in ->  ex189_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex189_in), ex189_out);
    });
    it("ex190_in ->  ex190_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex190_in), ex190_out);
    });
    it("ex191_in ->  ex191_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex191_in), ex191_out);
    });
    it("ex192_in ->  ex192_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex192_in), ex192_out);
    });
    it("ex193_in ->  ex193_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex193_in), ex193_out);
    });
    it("ex194_in ->  ex194_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex194_in), ex194_out);
    });
    it("ex195_in ->  ex195_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex195_in), ex195_out);
    });
    it("ex196_in ->  ex196_out", function () {
        chai_1.assert.deepEqual(xStrategy_1.xStrategy(ex196_in), ex196_out);
    });
});
