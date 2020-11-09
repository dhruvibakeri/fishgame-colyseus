"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var xState_1 = require("../executables/xState/xState");
var ex1_in = {
    "players": [{
            "color": "black",
            "score": 0,
            "places": [
                [1, 1],
                [1, 2]
            ]
        }, {
            "color": "red",
            "score": 0,
            "places": [
                [0, 0],
                [2, 0]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [0, 1],
                [1, 0]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [0, 2],
                [2, 1]
            ]
        }],
    "board": [
        [1, 2, 3],
        [4, 1, 5],
        [1, 1, 0]
    ]
};
var ex1_out = false;
var ex10_in = {
    "players": [{
            "color": "brown",
            "score": 2,
            "places": [
                [3, 2],
                [0, 1],
                [0, 3]
            ]
        }, {
            "color": "red",
            "score": 1,
            "places": [
                [1, 1],
                [2, 2],
                [3, 3]
            ]
        }, {
            "color": "black",
            "score": 4,
            "places": [
                [4, 2],
                [4, 3],
                [5, 2]
            ]
        }],
    "board": [
        [0, 2, 3, 2],
        [3, 1, 0, 4],
        [0, 3, 1, 0],
        [3, 3, 2, 1],
        [3, 3, 4, 4],
        [0, 0, 4, 0]
    ]
};
var ex10_out = false;
var ex11_in = {
    "players": [{
            "color": "red",
            "score": 2,
            "places": [
                [1, 0],
                [0, 1]
            ]
        }, {
            "color": "white",
            "score": 4,
            "places": [
                [1, 2],
                [0, 2]
            ]
        }],
    "board": [
        [5, 2, 1],
        [4, 0, 3],
        [4, 4, 4, 4]
    ]
};
var ex11_out = {
    "players": [{
            "color": "white",
            "score": 4,
            "places": [
                [1, 2],
                [0, 2]
            ]
        }, {
            "color": "red",
            "score": 6,
            "places": [
                [2, 1],
                [0, 1]
            ]
        }],
    "board": [
        [5, 2, 1, 0],
        [0, 0, 3, 0],
        [4, 4, 4, 4]
    ]
};
var ex12_in = {
    "players": [{
            "color": "red",
            "score": 4,
            "places": [
                [0, 0],
                [1, 0]
            ]
        }, {
            "color": "white",
            "score": 4,
            "places": [
                [1, 2],
                [0, 2]
            ]
        }],
    "board": [
        [5, 2, 1],
        [4, 0, 3]
    ]
};
var ex12_out = false;
var ex13_in = {
    "players": [{
            "color": "black",
            "score": 4,
            "places": [
                [0, 2],
                [1, 2]
            ]
        }, {
            "color": "white",
            "score": 4,
            "places": [
                [0, 0],
                [1, 0]
            ]
        }],
    "board": [
        [5, 2, 1],
        [4, 3, 3]
    ]
};
var ex13_out = {
    "players": [{
            "color": "white",
            "score": 4,
            "places": [
                [0, 0],
                [1, 0]
            ]
        }, {
            "color": "black",
            "score": 5,
            "places": [
                [1, 1],
                [1, 2]
            ]
        }],
    "board": [
        [5, 2, 0],
        [4, 3, 3]
    ]
};
var ex14_in = {
    "players": [{
            "color": "white",
            "score": 696969,
            "places": [
                [0, 0],
                [2, 2],
                [1, 2],
                [2, 1]
            ]
        }, {
            "color": "red",
            "score": 80085,
            "places": [
                [1, 1],
                [2, 0],
                [0, 1],
                [0, 2]
            ]
        }],
    "board": [
        [3, 5, 4],
        [0, 2, 3],
        [4, 1, 1]
    ]
};
var ex14_out = false;
var ex15_in = {
    "players": [{
            "color": "red",
            "score": 3,
            "places": [
                [0, 1],
                [1, 1],
                [3, 2],
                [3, 3]
            ]
        }, {
            "color": "black",
            "score": 8,
            "places": [
                [1, 0],
                [3, 0],
                [3, 1],
                [2, 2]
            ]
        }],
    "board": [
        [3, 3, 3, 3],
        [3, 3, 3, 3],
        [3, 0, 3, 3],
        [3, 3, 3, 3]
    ]
};
var ex15_out = false;
var ex16_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [2, 0],
                [0, 1],
                [1, 0],
                [0, 2]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [3, 0],
                [1, 1],
                [2, 2],
                [1, 2]
            ]
        }],
    "board": [
        [0, 2, 2],
        [3, 4, 5],
        [4, 3, 2],
        [2, 2, 3]
    ]
};
var ex16_out = false;
var ex17_in = {
    "board": [
        [1, 0, 3, 4],
        [1, 0, 2, 0],
        [5, 5, 5, 5],
        [1, 2, 3, 4]
    ],
    "players": [{
            "color": "red",
            "score": 6,
            "places": [
                [1, 2],
                [0, 2],
                [0, 3],
                [2, 2]
            ]
        }, {
            "color": "white",
            "score": 8,
            "places": [
                [2, 3],
                [0, 0],
                [1, 0],
                [3, 2]
            ]
        }]
};
var ex17_out = false;
var ex18_in = {
    "players": [{
            "color": "red",
            "score": 6,
            "places": [
                [2, 2],
                [2, 0]
            ]
        }, {
            "color": "white",
            "score": 6,
            "places": [
                [0, 0]
            ]
        }],
    "board": [
        [1],
        [0],
        [3, 3, 5],
        [4]
    ]
};
var ex18_out = false;
var ex19_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0]
            ]
        }],
    "board": [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
};
var ex19_out = false;
var ex2_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0],
                [2, 0]
            ]
        }, {
            "color": "black",
            "score": 0,
            "places": [
                [1, 1],
                [1, 2]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [0, 1],
                [1, 0]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [0, 2],
                [2, 1]
            ]
        }],
    "board": [
        [1, 2, 3],
        [4, 1, 5],
        [1, 1, 0]
    ]
};
var ex2_out = false;
var ex20_in = {
    "players": [{
            "color": "black",
            "score": 0,
            "places": [
                [1, 0],
                [0, 0]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [0, 1],
                [0, 2]
            ]
        }, {
            "color": "red",
            "score": 0,
            "places": [
                [1, 1],
                [1, 2]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [2, 1],
                [2, 2]
            ]
        }],
    "board": [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
};
var ex20_out = {
    "players": [{
            "color": "white",
            "score": 0,
            "places": [
                [0, 1],
                [0, 2]
            ]
        }, {
            "color": "red",
            "score": 0,
            "places": [
                [1, 1],
                [1, 2]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [2, 1],
                [2, 2]
            ]
        }, {
            "color": "black",
            "score": 1,
            "places": [
                [3, 0],
                [0, 0]
            ]
        }],
    "board": [
        [1, 1, 1],
        [0, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
};
var ex21_in = {
    "players": [{
            "color": "black",
            "score": 2,
            "places": [
                [0, 0]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [1, 0]
            ]
        }],
    "board": [
        [1],
        [1]
    ]
};
var ex21_out = false;
var ex22_in = {
    "players": [{
            "color": "black",
            "score": 2,
            "places": [
                [0, 0],
                [1, 0]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [3, 0]
            ]
        }],
    "board": [
        [1],
        [1],
        [1],
        [1]
    ]
};
var ex22_out = {
    "players": [{
            "color": "white",
            "score": 0,
            "places": [
                [3, 0]
            ]
        }, {
            "color": "black",
            "score": 3,
            "places": [
                [2, 0],
                [1, 0]
            ]
        }],
    "board": [
        [0],
        [1],
        [1],
        [1]
    ]
};
var ex26_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0],
                [1, 0],
                [1, 2],
                [2, 1],
                [2, 0]
            ]
        }],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex26_out = false;
var ex27_in = {
    "players": [{
            "color": "white",
            "score": 0,
            "places": [
                [1, 0],
                [1, 2],
                [2, 1],
                [2, 0]
            ]
        }, {
            "color": "red",
            "score": 0,
            "places": [
                [0, 0],
                [3, 0],
                [3, 1],
                [3, 2]
            ]
        }],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0],
        [2, 4, 1]
    ]
};
var ex27_out = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0],
                [3, 0],
                [3, 1],
                [3, 2]
            ]
        }, {
            "color": "white",
            "score": 4,
            "places": [
                [0, 1],
                [1, 2],
                [2, 1],
                [2, 0]
            ]
        }],
    "board": [
        [1, 2, 3],
        [0, 0, 5],
        [1, 1, 0],
        [2, 4, 1]
    ]
};
var ex28_in = {
    "players": [{
            "color": "white",
            "score": 0,
            "places": [
                [4, 1],
                [0, 0],
                [3, 2]
            ]
        }, {
            "color": "red",
            "score": 0,
            "places": [
                [1, 0],
                [1, 2],
                [2, 0]
            ]
        }, {
            "color": "brown",
            "score": 5,
            "places": [
                [2, 1],
                [3, 0],
                [2, 3]
            ]
        }],
    "board": [
        [1, 2, 3, 2],
        [4, 0, 5, 4],
        [1, 1, 0, 2],
        [2, 4, 1, 0],
        [1, 1, 0, 1],
        [0, 2, 4, 1]
    ]
};
var ex28_out = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [1, 0],
                [1, 2],
                [2, 0]
            ]
        }, {
            "color": "brown",
            "score": 5,
            "places": [
                [2, 1],
                [3, 0],
                [2, 3]
            ]
        }, {
            "color": "white",
            "score": 1,
            "places": [
                [3, 1],
                [0, 0],
                [3, 2]
            ]
        }],
    "board": [
        [1, 2, 3, 2],
        [4, 0, 5, 4],
        [1, 1, 0, 2],
        [2, 4, 1, 0],
        [1, 0, 0, 1],
        [0, 2, 4, 1]
    ]
};
var ex29_in = {
    "players": [{
            "color": "white",
            "score": 1,
            "places": [
                [1, 2]
            ]
        }, {
            "color": "red",
            "score": 1,
            "places": [
                [0, 2],
                [2, 2]
            ]
        }],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 3, 1]
    ]
};
var ex29_out = false;
var ex3_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0]
            ]
        }, {
            "color": "black",
            "score": 0,
            "places": [
                [1, 0]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [2, 1]
            ]
        }],
    "board": [
        [5, 1, 1],
        [1, 5, 1],
        [0, 1, 1],
        [5, 1, 1]
    ]
};
var ex3_out = false;
var ex30_in = {
    "players": [{
            "color": "white",
            "score": 0,
            "places": []
        }],
    "board": [
        [1, 2, 3]
    ]
};
var ex30_out = false;
var ex31_in = {
    "players": [{
            "color": "red",
            "score": 2,
            "places": [
                [1, 0],
                [0, 0],
                [2, 0],
                [3, 0]
            ]
        }, {
            "color": "brown",
            "score": 5,
            "places": [
                [0, 2],
                [1, 2],
                [2, 2],
                [3, 2]
            ]
        }],
    "board": [
        [1, 0, 5],
        [2, 1, 4],
        [1, 0, 5],
        [2, 1, 4]
    ]
};
var ex31_out = false;
var ex32_in = {
    "players": [{
            "color": "red",
            "score": 3,
            "places": [
                [0, 1],
                [1, 1]
            ]
        }, {
            "color": "brown",
            "score": 6,
            "places": [
                [2, 1],
                [1, 2]
            ]
        }],
    "board": [
        [5, 2, 5],
        [0, 1, 4],
        [3, 2, 5]
    ]
};
var ex32_out = false;
var ex33_in = {
    "board": [
        [1, 2, 3],
        [4, 1, 5],
        [1, 1, 4]
    ],
    "players": [{
            "color": "white",
            "score": 1,
            "places": [
                [0, 0],
                [0, 1],
                [0, 2]
            ]
        }, {
            "color": "brown",
            "score": 8,
            "places": [
                [1, 0],
                [1, 1],
                [1, 2]
            ]
        }, {
            "color": "red",
            "score": 5,
            "places": [
                [2, 0],
                [2, 1],
                [2, 2]
            ]
        }]
};
var ex33_out = false;
var ex34_in = {
    "board": [
        [0, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "players": [{
            "color": "white",
            "score": 1,
            "places": [
                [2, 0]
            ]
        }, {
            "color": "brown",
            "score": 8,
            "places": [
                [1, 0]
            ]
        }, {
            "color": "red",
            "score": 5,
            "places": [
                [1, 2]
            ]
        }]
};
var ex34_out = false;
var ex35_in = {
    "players": [{
            "color": "white",
            "score": 44,
            "places": []
        }, {
            "color": "red",
            "score": 1,
            "places": [
                [2, 2],
                [0, 2]
            ]
        }],
    "board": [
        [1, 2, 3, 1],
        [2, 3, 2, 2],
        [1, 0, 1, 1]
    ]
};
var ex35_out = false;
var ex36_in = {
    "players": [],
    "board": [
        [1, 2, 3, 1],
        [2, 3, 2, 2],
        [1, 0, 1, 1]
    ]
};
var ex36_out = false;
var ex37_in = {
    "players": [{
            "color": "white",
            "score": 3,
            "places": [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3]
            ]
        }, {
            "color": "red",
            "score": 3,
            "places": [
                [1, 0],
                [1, 1],
                [1, 2],
                [1, 3]
            ]
        }],
    "board": [
        [2, 1, 4, 2],
        [1, 5, 4, 2]
    ]
};
var ex37_out = false;
var ex38_in = {
    "players": [{
            "color": "white",
            "score": 3,
            "places": [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3]
            ]
        }, {
            "color": "red",
            "score": 3,
            "places": [
                [2, 0],
                [1, 1],
                [1, 2],
                [1, 3]
            ]
        }],
    "board": [
        [2, 1, 4, 2],
        [1, 5, 4, 2],
        [1, 1, 1, 1]
    ]
};
var ex38_out = {
    "players": [{
            "color": "red",
            "score": 3,
            "places": [
                [2, 0],
                [1, 1],
                [1, 2],
                [1, 3]
            ]
        }, {
            "color": "white",
            "score": 5,
            "places": [
                [1, 0],
                [0, 1],
                [0, 2],
                [0, 3]
            ]
        }],
    "board": [
        [0, 1, 4, 2],
        [1, 5, 4, 2],
        [1, 1, 1, 1]
    ]
};
var ex39_in = {
    "board": [
        [0, 0],
        [3, 1],
        [1, 1],
        [1, 1],
        [1, 1]
    ],
    "players": [{
            "color": "white",
            "score": 1,
            "places": [
                [1, 0]
            ]
        }, {
            "color": "red",
            "score": 5,
            "places": [
                [2, 1],
                [2, 0]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [3, 0]
            ]
        }]
};
var ex39_out = false;
var ex4_in = {
    "players": [{
            "color": "red",
            "score": 10,
            "places": [
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0]
            ]
        }, {
            "color": "white",
            "score": 11,
            "places": [
                [5, 0],
                [6, 0],
                [0, 0],
                [7, 0]
            ]
        }],
    "board": [
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3]
    ]
};
var ex4_out = {
    "players": [{
            "color": "white",
            "score": 11,
            "places": [
                [5, 0],
                [6, 0],
                [0, 0],
                [7, 0]
            ]
        }, {
            "color": "red",
            "score": 13,
            "places": [
                [0, 1],
                [2, 0],
                [3, 0],
                [4, 0]
            ]
        }],
    "board": [
        [3, 3, 3],
        [0, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3]
    ]
};
var ex40_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0]
            ]
        }, {
            "color": "black",
            "score": 0,
            "places": [
                [1, 0]
            ]
        }],
    "board": [
        [1, 1],
        [1, 1]
    ]
};
var ex40_out = false;
var ex41_in = {
    "players": [{
            "color": "red",
            "score": 15,
            "places": [
                [0, 0]
            ]
        }, {
            "color": "black",
            "score": 83,
            "places": [
                [0, 1]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [1, 0]
            ]
        }, {
            "color": "brown",
            "score": 99,
            "places": [
                [1, 1]
            ]
        }],
    "board": [
        [1, 1],
        [1, 1]
    ]
};
var ex41_out = false;
var ex42_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0]
            ]
        }],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex42_out = {
    "players": [{
            "color": "red",
            "score": 1,
            "places": [
                [1, 0]
            ]
        }],
    "board": [
        [0, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex43_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0],
                [0, 2]
            ]
        }, {
            "color": "black",
            "score": 0,
            "places": [
                [0, 1],
                [1, 1]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [2, 0],
                [2, 1]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [1, 2],
                [2, 2]
            ]
        }],
    "board": [
        [1, 1, 1],
        [0, 1, 1],
        [1, 1, 1]
    ]
};
var ex43_out = false;
var ex44_in = {
    "players": [{
            "color": "red",
            "score": 2,
            "places": [
                [0, 12],
                [0, 1],
                [0, 2],
                [0, 3]
            ]
        }, {
            "color": "white",
            "score": 3,
            "places": [
                [0, 24],
                [0, 23],
                [0, 22],
                [0, 21]
            ]
        }],
    "board": [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
};
var ex44_out = false;
var ex45_in = {
    "players": [{
            "color": "red",
            "score": 2,
            "places": [
                [2, 2],
                [1, 1],
                [0, 2],
                [1, 2]
            ]
        }, {
            "color": "white",
            "score": 3,
            "places": [
                [3, 1],
                [4, 2],
                [3, 2],
                [2, 1]
            ]
        }],
    "board": [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
    ]
};
var ex45_out = false;
var ex46_in = {
    "players": [{
            "color": "red",
            "score": 2,
            "places": [
                [2, 2],
                [0, 0],
                [0, 1],
                [1, 0]
            ]
        }, {
            "color": "white",
            "score": 3,
            "places": [
                [0, 3],
                [0, 4],
                [1, 3],
                [1, 4]
            ]
        }],
    "board": [
        [1, 1, 0, 1, 1],
        [1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 1],
        [1, 1, 0, 1, 1]
    ]
};
var ex46_out = false;
var ex47_in = {
    "players": [],
    "board": [
        [1, 1, 0, 1, 1],
        [1, 0, 0, 1, 1],
        [1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 0, 0, 1]
    ]
};
var ex47_out = false;
var ex48_in = {
    "players": [{
            "color": "red",
            "score": 2,
            "places": []
        }, {
            "color": "white",
            "score": 3,
            "places": [
                [3, 3],
                [3, 4],
                [4, 3],
                [4, 4]
            ]
        }],
    "board": [
        [1, 0, 1, 1, 1],
        [5, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1],
        [1, 0, 1, 1, 1]
    ]
};
var ex48_out = false;
var ex49_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0]
            ]
        }],
    "board": [
        [1]
    ]
};
var ex49_out = false;
var ex5_in = {
    "players": [{
            "color": "red",
            "score": 5,
            "places": [
                [1, 2],
                [2, 1],
                [2, 2],
                [1, 3]
            ]
        }, {
            "color": "white",
            "score": 11,
            "places": [
                [0, 0]
            ]
        }, {
            "color": "black",
            "score": 5,
            "places": [
                [2, 0]
            ]
        }, {
            "color": "brown",
            "score": 2,
            "places": [
                [1, 1]
            ]
        }],
    "board": [
        [1, 2, 3, 5, 5],
        [4, 1, 5, 2],
        [1, 1, 1]
    ]
};
var ex5_out = {
    "players": [{
            "color": "white",
            "score": 11,
            "places": [
                [0, 0]
            ]
        }, {
            "color": "black",
            "score": 5,
            "places": [
                [2, 0]
            ]
        }, {
            "color": "brown",
            "score": 2,
            "places": [
                [1, 1]
            ]
        }, {
            "color": "red",
            "score": 10,
            "places": [
                [0, 3],
                [2, 1],
                [2, 2],
                [1, 3]
            ]
        }],
    "board": [
        [1, 2, 3, 5, 5],
        [4, 1, 0, 2, 0],
        [1, 1, 1, 0, 0]
    ]
};
var ex50_in = {
    "players": [{
            "color": "white",
            "score": 15,
            "places": [
                [2, 2]
            ]
        }, {
            "color": "red",
            "score": 20,
            "places": [
                [3, 2],
                [4, 2],
                [1, 1]
            ]
        }],
    "board": [
        [1, 2, 0, 2],
        [1, 3, 0, 4],
        [2, 0, 1, 3],
        [3, 0, 4, 2],
        [1, 1, 1, 1]
    ]
};
var ex50_out = false;
var ex51_in = {
    "players": [{
            "color": "black",
            "score": 0,
            "places": [
                [0, 1],
                [1, 0],
                [0, 0]
            ]
        }, {
            "color": "white",
            "score": 1,
            "places": [
                [2, 0],
                [3, 0],
                [2, 1]
            ]
        }, {
            "color": "brown",
            "score": 2,
            "places": [
                [4, 0],
                [5, 0],
                [4, 1]
            ]
        }],
    "board": [
        [1, 2],
        [2, 3],
        [1, 2],
        [2, 3],
        [1, 2],
        [2, 3]
    ]
};
var ex51_out = {
    "players": [{
            "color": "white",
            "score": 1,
            "places": [
                [2, 0],
                [3, 0],
                [2, 1]
            ]
        }, {
            "color": "brown",
            "score": 2,
            "places": [
                [4, 0],
                [5, 0],
                [4, 1]
            ]
        }, {
            "color": "black",
            "score": 2,
            "places": [
                [1, 1],
                [1, 0],
                [0, 0]
            ]
        }],
    "board": [
        [1, 0],
        [2, 3],
        [1, 2],
        [2, 3],
        [1, 2],
        [2, 3]
    ]
};
var ex52_in = {
    "players": [{
            "color": "white",
            "score": 0,
            "places": [
                [0, 1],
                [1, 0],
                [1, 2],
                [2, 1]
            ]
        }, {
            "color": "black",
            "score": 1,
            "places": [
                [2, 2],
                [0, 2],
                [0, 0],
                [2, 0]
            ]
        }],
    "board": [
        [1, 4, 4],
        [5, 0, 1],
        [1, 4, 5]
    ]
};
var ex52_out = false;
var ex53_in = {
    "players": [{
            "color": "black",
            "score": 0,
            "places": [
                [0, 1],
                [1, 0]
            ]
        }, {
            "color": "white",
            "score": 1,
            "places": [
                [2, 0],
                [3, 0]
            ]
        }, {
            "color": "brown",
            "score": 2,
            "places": [
                [4, 0],
                [5, 0]
            ]
        }, {
            "color": "red",
            "score": 3,
            "places": [
                [0, 0],
                [2, 1]
            ]
        }],
    "board": [
        [1, 2],
        [2, 3],
        [1, 2],
        [2, 3],
        [1, 2],
        [2, 3]
    ]
};
var ex53_out = {
    "players": [{
            "color": "white",
            "score": 1,
            "places": [
                [2, 0],
                [3, 0]
            ]
        }, {
            "color": "brown",
            "score": 2,
            "places": [
                [4, 0],
                [5, 0]
            ]
        }, {
            "color": "red",
            "score": 3,
            "places": [
                [0, 0],
                [2, 1]
            ]
        }, {
            "color": "black",
            "score": 2,
            "places": [
                [1, 1],
                [1, 0]
            ]
        }],
    "board": [
        [1, 0],
        [2, 3],
        [1, 2],
        [2, 3],
        [1, 2],
        [2, 3]
    ]
};
var ex54_in = {
    "players": [{
            "color": "red",
            "score": 10,
            "places": [
                [0, 0],
                [0, 1]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [1, 0],
                [1, 1]
            ]
        }],
    "board": [
        [2, 3, 4],
        [1, 1, 1],
        [5, 5, 5],
        [4, 4, 4],
        [3, 3, 3],
        [2, 2, 2]
    ]
};
var ex54_out = {
    "players": [{
            "color": "white",
            "score": 0,
            "places": [
                [1, 0],
                [1, 1]
            ]
        }, {
            "color": "red",
            "score": 12,
            "places": [
                [2, 0],
                [0, 1]
            ]
        }],
    "board": [
        [0, 3, 4],
        [1, 1, 1],
        [5, 5, 5],
        [4, 4, 4],
        [3, 3, 3],
        [2, 2, 2]
    ]
};
var ex55_in = {
    "players": [{
            "color": "red",
            "score": 10,
            "places": [
                [0, 1],
                [1, 0]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [1, 1],
                [2, 1]
            ]
        }],
    "board": [
        [2, 3, 4],
        [1, 1],
        [5, 5, 5],
        [4, 4, 4],
        [3, 3, 3],
        [2]
    ]
};
var ex55_out = false;
var ex56_in = {
    "players": [{
            "color": "red",
            "score": 10,
            "places": [
                [2, 1],
                [0, 1]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [1, 1],
                [3, 1]
            ]
        }, {
            "color": "brown",
            "score": 200,
            "places": [
                [4, 1],
                [3, 0]
            ]
        }],
    "board": [
        [2, 3],
        [1, 1, 1],
        [5, 5, 5],
        [4, 4, 4],
        [3, 3, 3],
        [2]
    ]
};
var ex56_out = {
    "players": [{
            "color": "white",
            "score": 0,
            "places": [
                [1, 1],
                [3, 1]
            ]
        }, {
            "color": "brown",
            "score": 200,
            "places": [
                [4, 1],
                [3, 0]
            ]
        }, {
            "color": "red",
            "score": 15,
            "places": [
                [1, 0],
                [0, 1]
            ]
        }],
    "board": [
        [2, 3, 0],
        [1, 1, 1],
        [5, 0, 5],
        [4, 4, 4],
        [3, 3, 3],
        [2, 0, 0]
    ]
};
var ex57_in = {
    "board": [
        [2, 2, 2, 2],
        [0, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2]
    ],
    "players": [{
            "color": "red",
            "score": 5002,
            "places": [
                [0, 0],
                [3, 0],
                [2, 2],
                [1, 2]
            ]
        }, {
            "color": "brown",
            "score": 20,
            "places": [
                [2, 0],
                [0, 1],
                [1, 1],
                [2, 1]
            ]
        }]
};
var ex57_out = false;
var ex58_in = {
    "board": [
        [2, 2, 2, 2],
        [0, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2]
    ],
    "players": [{
            "color": "red",
            "score": 5002,
            "places": [
                [0, 0],
                [3, 0],
                [2, 2],
                [1, 2]
            ]
        }, {
            "color": "brown",
            "score": 20,
            "places": [
                [2, 0],
                [0, 1],
                [1, 1],
                [2, 1]
            ]
        }]
};
var ex58_out = false;
var ex59_in = {
    "board": [
        [1, 2]
    ],
    "players": [{
            "places": [
                [0, 0]
            ],
            "score": 0,
            "color": "white"
        }, {
            "places": [
                [0, 1]
            ],
            "score": 1,
            "color": "red"
        }]
};
var ex59_out = false;
var ex6_in = {
    "players": [{
            "color": "black",
            "score": 10,
            "places": [
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0]
            ]
        }, {
            "color": "white",
            "score": 11,
            "places": [
                [0, 0],
                [6, 0],
                [7, 0],
                [0, 1],
                [2, 1]
            ]
        }],
    "board": [
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3]
    ]
};
var ex6_out = false;
var ex60_in = {
    "board": [
        [1, 2],
        [3]
    ],
    "players": [{
            "places": [
                [0, 0]
            ],
            "score": 0,
            "color": "white"
        }, {
            "places": [
                [0, 1]
            ],
            "score": 1,
            "color": "red"
        }]
};
var ex60_out = {
    "board": [
        [0, 2],
        [3, 0]
    ],
    "players": [{
            "score": 1,
            "color": "red",
            "places": [
                [0, 1]
            ]
        }, {
            "score": 1,
            "color": "white",
            "places": [
                [1, 0]
            ]
        }]
};
var ex61_in = {
    "board": [
        [1, 2],
        [3, 0, 2]
    ],
    "players": [{
            "places": [
                [0, 1],
                [1, 2]
            ],
            "score": 2,
            "color": "red"
        }, {
            "places": [
                [0, 0]
            ],
            "score": 0,
            "color": "white"
        }]
};
var ex61_out = {
    "board": [
        [1, 0, 0],
        [3, 0, 2]
    ],
    "players": [{
            "score": 0,
            "color": "white",
            "places": [
                [0, 0]
            ]
        }, {
            "score": 4,
            "color": "red",
            "places": [
                [1, 0],
                [1, 2]
            ]
        }]
};
var ex62_in = {
    "players": [{
            "color": "white",
            "score": 5,
            "places": [
                [2, 2],
                [0, 3]
            ]
        }, {
            "color": "black",
            "score": 5,
            "places": [
                [1, 2],
                [3, 2]
            ]
        }, {
            "color": "red",
            "score": 6,
            "places": [
                [1, 1],
                [0, 2]
            ]
        }, {
            "color": "brown",
            "score": 4,
            "places": [
                [3, 1],
                [3, 0]
            ]
        }],
    "board": [
        [1, 2, 3, 4],
        [4, 3, 4, 3],
        [2, 5, 1, 1],
        [2, 2, 1, 0]
    ]
};
var ex62_out = false;
var ex63_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0],
                [1, 2]
            ]
        }, {
            "color": "brown",
            "score": 10,
            "places": [
                [2, 1],
                [2, 0]
            ]
        }],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex63_out = {
    "players": [{
            "color": "brown",
            "score": 10,
            "places": [
                [2, 1],
                [2, 0]
            ]
        }, {
            "color": "red",
            "score": 1,
            "places": [
                [1, 0],
                [1, 2]
            ]
        }],
    "board": [
        [0, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex64_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0],
                [1, 2],
                [0, 1],
                [1, 0]
            ]
        }, {
            "color": "brown",
            "score": 10,
            "places": [
                [2, 3],
                [2, 0],
                [0, 2],
                [0, 3]
            ]
        }],
    "board": [
        [1, 2, 3, 4],
        [4, 0, 5, 0],
        [1, 1, 0, 3]
    ]
};
var ex64_out = false;
var ex65_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [3, 1],
                [1, 2],
                [0, 1],
                [1, 0]
            ]
        }, {
            "color": "brown",
            "score": 10,
            "places": [
                [0, 0],
                [2, 0],
                [0, 2],
                [0, 3]
            ]
        }],
    "board": [
        [1, 2, 3, 4],
        [4, 0, 5, 0],
        [1, 1, 0, 3],
        [0, 1, 0, 3],
        [0, 0, 0, 3]
    ]
};
var ex65_out = {
    "players": [{
            "color": "brown",
            "score": 10,
            "places": [
                [0, 0],
                [2, 0],
                [0, 2],
                [0, 3]
            ]
        }, {
            "color": "red",
            "score": 1,
            "places": [
                [2, 1],
                [1, 2],
                [0, 1],
                [1, 0]
            ]
        }],
    "board": [
        [1, 2, 3, 4],
        [4, 0, 5, 0],
        [1, 1, 0, 3],
        [0, 0, 0, 3],
        [0, 0, 0, 3]
    ]
};
var ex66_in = {
    "board": [
        [1, 1, 1, 1],
        [2, 1, 3, 3],
        [0, 3, 0, 5],
        [1, 1, 1, 1],
        [4, 5, 5, 1]
    ],
    "players": [{
            "color": "red",
            "score": 1,
            "places": [
                [0, 0],
                [0, 1]
            ]
        }, {
            "color": "black",
            "score": 2,
            "places": [
                [0, 2],
                [0, 3]
            ]
        }, {
            "color": "white",
            "score": 3,
            "places": [
                [1, 0],
                [1, 1]
            ]
        }, {
            "color": "brown",
            "score": 4,
            "places": [
                [1, 2],
                [1, 3]
            ]
        }]
};
var ex66_out = false;
var ex67_in = {
    "players": [{
            "color": "red",
            "score": 9,
            "places": [
                [3, 1],
                [0, 1],
                [0, 2],
                [0, 3]
            ]
        }, {
            "color": "white",
            "score": 3,
            "places": [
                [2, 3],
                [1, 3],
                [2, 0],
                [2, 1]
            ]
        }],
    "board": [
        [1, 2, 3, 2],
        [4, 1, 5, 1],
        [1, 1, 1, 4],
        [1, 2, 3, 4]
    ]
};
var ex67_out = {
    "players": [{
            "color": "white",
            "score": 3,
            "places": [
                [2, 3],
                [1, 3],
                [2, 0],
                [2, 1]
            ]
        }, {
            "color": "red",
            "score": 11,
            "places": [
                [1, 1],
                [0, 1],
                [0, 2],
                [0, 3]
            ]
        }],
    "board": [
        [1, 2, 3, 2],
        [4, 1, 5, 1],
        [1, 1, 1, 4],
        [1, 0, 3, 4]
    ]
};
var ex68_in = {
    "players": [{
            "color": "white",
            "score": 0,
            "places": [
                [3, 1],
                [0, 1],
                [0, 2],
                [0, 3]
            ]
        }, {
            "color": "red",
            "score": 1,
            "places": [
                [2, 3],
                [1, 3],
                [2, 0],
                [2, 1]
            ]
        }],
    "board": [
        [1, 2, 3, 2],
        [4, 1, 5, 1],
        [1, 1, 1, 4],
        [1, 2, 3, 4]
    ]
};
var ex68_out = {
    "players": [{
            "color": "red",
            "score": 1,
            "places": [
                [2, 3],
                [1, 3],
                [2, 0],
                [2, 1]
            ]
        }, {
            "color": "white",
            "score": 2,
            "places": [
                [1, 1],
                [0, 1],
                [0, 2],
                [0, 3]
            ]
        }],
    "board": [
        [1, 2, 3, 2],
        [4, 1, 5, 1],
        [1, 1, 1, 4],
        [1, 0, 3, 4]
    ]
};
var ex69_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [2, 1],
                [0, 2]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [1, 0],
                [1, 1]
            ]
        }, {
            "color": "black",
            "score": 0,
            "places": [
                [0, 1],
                [4, 1]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [2, 2],
                [4, 2]
            ]
        }],
    "board": [
        [1, 2, 1],
        [1, 1, 1, 0, 5],
        [3, 2, 1],
        [1, 3, 2],
        [1, 1, 4]
    ]
};
var ex69_out = {
    "players": [{
            "color": "brown",
            "score": 0,
            "places": [
                [1, 0],
                [1, 1]
            ]
        }, {
            "color": "black",
            "score": 0,
            "places": [
                [0, 1],
                [4, 1]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [2, 2],
                [4, 2]
            ]
        }, {
            "color": "red",
            "score": 2,
            "places": [
                [3, 1],
                [0, 2]
            ]
        }],
    "board": [
        [1, 2, 1, 0, 0],
        [1, 1, 1, 0, 5],
        [3, 0, 1, 0, 0],
        [1, 3, 2, 0, 0],
        [1, 1, 4, 0, 0]
    ]
};
var ex7_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0]
            ]
        }],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex7_out = {
    "players": [{
            "color": "red",
            "score": 1,
            "places": [
                [1, 0]
            ]
        }],
    "board": [
        [0, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex70_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [2, 1],
                [3, 0]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [1, 0],
                [1, 1]
            ]
        }, {
            "color": "black",
            "score": 0,
            "places": [
                [0, 1],
                [4, 1]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [3, 1],
                [4, 2]
            ]
        }],
    "board": [
        [1, 2, 1],
        [1, 1, 1],
        [3, 2, 1],
        [1, 3, 2],
        [1, 1, 4]
    ]
};
var ex70_out = false;
var ex71_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [2, 2],
                [0, 2]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [1, 0],
                [1, 1]
            ]
        }, {
            "color": "black",
            "score": 0,
            "places": [
                [0, 1],
                [4, 1]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [3, 1],
                [4, 2]
            ]
        }],
    "board": [
        [1, 2, 1],
        [1, 1, 0],
        [3, 2, 1],
        [1, 3, 2],
        [1, 1, 4]
    ]
};
var ex71_out = {
    "players": [{
            "color": "brown",
            "score": 0,
            "places": [
                [1, 0],
                [1, 1]
            ]
        }, {
            "color": "black",
            "score": 0,
            "places": [
                [0, 1],
                [4, 1]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [3, 1],
                [4, 2]
            ]
        }, {
            "color": "red",
            "score": 1,
            "places": [
                [3, 2],
                [0, 2]
            ]
        }],
    "board": [
        [1, 2, 1],
        [1, 1, 0],
        [3, 2, 0],
        [1, 3, 2],
        [1, 1, 4]
    ]
};
var ex72_in = {
    "players": [{
            "color": "brown",
            "score": 2,
            "places": [
                [0, 0],
                [1, 0],
                [2, 0],
                [0, 1]
            ]
        }, {
            "color": "red",
            "score": 0,
            "places": [
                [0, 3],
                [1, 2],
                [1, 3],
                [2, 3]
            ]
        }],
    "board": [
        [1, 1, 1, 3],
        [1, 1, 2, 3],
        [4, 5, 5, 3]
    ]
};
var ex72_out = false;
var ex73_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [1, 2],
                [0, 3],
                [1, 3],
                [2, 3]
            ]
        }, {
            "color": "brown",
            "score": 2,
            "places": [
                [0, 0],
                [1, 0],
                [2, 0],
                [0, 1]
            ]
        }],
    "board": [
        [1, 1, 1, 3],
        [1, 1, 2, 3],
        [4, 5, 5, 3]
    ]
};
var ex73_out = {
    "players": [{
            "color": "brown",
            "score": 2,
            "places": [
                [0, 0],
                [1, 0],
                [2, 0],
                [0, 1]
            ]
        }, {
            "color": "red",
            "score": 2,
            "places": [
                [2, 2],
                [0, 3],
                [1, 3],
                [2, 3]
            ]
        }],
    "board": [
        [1, 1, 1, 3],
        [1, 1, 0, 3],
        [4, 5, 5, 3]
    ]
};
var ex74_in = {
    "players": [{
            "color": "brown",
            "score": 2,
            "places": [
                [1, 0],
                [0, 0],
                [2, 0],
                [0, 1]
            ]
        }, {
            "color": "red",
            "score": 0,
            "places": [
                [0, 3],
                [1, 2],
                [1, 3],
                [2, 3]
            ]
        }],
    "board": [
        [1, 1, 1, 3],
        [1, 1, 2, 3],
        [4, 5, 5, 3]
    ]
};
var ex74_out = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 3],
                [1, 2],
                [1, 3],
                [2, 3]
            ]
        }, {
            "color": "brown",
            "score": 3,
            "places": [
                [2, 1],
                [0, 0],
                [2, 0],
                [0, 1]
            ]
        }],
    "board": [
        [1, 1, 1, 3],
        [0, 1, 2, 3],
        [4, 5, 5, 3]
    ]
};
var ex75_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [2, 2],
                [2, 3]
            ]
        }, {
            "color": "brown",
            "score": 0,
            "places": [
                [1, 4],
                [4, 3]
            ]
        }],
    "board": [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5]
    ]
};
var ex75_out = {
    "players": [{
            "color": "brown",
            "score": 0,
            "places": [
                [1, 4],
                [4, 3]
            ]
        }, {
            "color": "red",
            "score": 3,
            "places": [
                [0, 2],
                [2, 3]
            ]
        }],
    "board": [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 0, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5]
    ]
};
var ex76_in = {
    "players": [{
            "color": "red",
            "score": 5,
            "places": [
                [1, 1],
                [2, 2],
                [4, 4]
            ]
        }, {
            "color": "brown",
            "score": 7,
            "places": [
                [0, 2],
                [4, 3],
                [3, 3]
            ]
        }],
    "board": [
        [1, 2, 3, 4, 5],
        [1, 2, 0, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 0, 3, 4, 5],
        [1, 2, 3, 4, 5]
    ]
};
var ex76_out = {
    "players": [{
            "color": "brown",
            "score": 7,
            "places": [
                [0, 2],
                [4, 3],
                [3, 3]
            ]
        }, {
            "color": "red",
            "score": 7,
            "places": [
                [2, 1],
                [2, 2],
                [4, 4]
            ]
        }],
    "board": [
        [1, 2, 3, 4, 5],
        [1, 0, 0, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 0, 3, 4, 5],
        [1, 2, 3, 4, 5]
    ]
};
var ex77_in = {
    "players": [{
            "color": "red",
            "score": 24,
            "places": [
                [1, 1]
            ]
        }, {
            "color": "brown",
            "score": 23,
            "places": [
                [3, 4]
            ]
        }],
    "board": [
        [0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0],
        [0, 0, 0, 0, 5],
        [0, 0, 0, 0, 5],
        [0, 0, 0, 0, 0]
    ]
};
var ex77_out = false;
var ex78_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [0, 1],
                [1, 1],
                [2, 1],
                [3, 1]
            ]
        }],
    "board": [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
};
var ex78_out = false;
var ex79_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [2, 2],
                [1, 0],
                [2, 0],
                [3, 0]
            ]
        }, {
            "color": "white",
            "score": 0,
            "places": [
                [0, 1],
                [1, 1],
                [2, 1],
                [3, 1]
            ]
        }],
    "board": [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
};
var ex79_out = {
    "players": [{
            "color": "white",
            "score": 0,
            "places": [
                [0, 1],
                [1, 1],
                [2, 1],
                [3, 1]
            ]
        }, {
            "color": "red",
            "score": 1,
            "places": [
                [0, 2],
                [1, 0],
                [2, 0],
                [3, 0]
            ]
        }],
    "board": [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 0],
        [1, 1, 1]
    ]
};
var ex8_in = {
    "players": [{
            "color": "red",
            "score": 0,
            "places": [
                [0, 0]
            ]
        }],
    "board": [
        [1, 2, 3],
        [0, 0, 5],
        [0, 1, 0]
    ]
};
var ex8_out = false;
var ex80_in = {
    "players": [{
            "color": "white",
            "score": 3,
            "places": [
                [0, 0],
                [1, 0],
                [2, 2],
                [3, 0]
            ]
        }, {
            "color": "red",
            "score": 2,
            "places": [
                [0, 1],
                [1, 1],
                [2, 1],
                [3, 1]
            ]
        }],
    "board": [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
};
var ex80_out = {
    "players": [{
            "color": "red",
            "score": 2,
            "places": [
                [0, 1],
                [1, 1],
                [2, 1],
                [3, 1]
            ]
        }, {
            "color": "white",
            "score": 4,
            "places": [
                [2, 0],
                [1, 0],
                [2, 2],
                [3, 0]
            ]
        }],
    "board": [
        [0, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
};
var ex9_in = {
    "players": [{
            "color": "red",
            "score": 4,
            "places": [
                [1, 1],
                [0, 0]
            ]
        }, {
            "color": "brown",
            "score": 3,
            "places": [
                [0, 2]
            ]
        }],
    "board": [
        [1, 2, 3],
        [4, 3, 5],
        [1, 1]
    ]
};
var ex9_out = {
    "players": [{
            "color": "brown",
            "score": 3,
            "places": [
                [0, 2]
            ]
        }, {
            "color": "red",
            "score": 7,
            "places": [
                [2, 1],
                [0, 0]
            ]
        }],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
describe("Milestone 4", function () {
    it("ex1_in: InputState --> ex1_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex1_in), ex1_out);
    });
    it("ex10_in: InputState --> ex10_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex10_in), ex10_out);
    });
    it("ex11_in: InputState --> ex11_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex11_in), ex11_out);
    });
    it("ex12_in: InputState --> ex12_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex12_in), ex12_out);
    });
    it("ex13_in: InputState --> ex13_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex13_in), ex13_out);
    });
    it("ex14_in: InputState --> ex14_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex14_in), ex14_out);
    });
    it("ex15_in: InputState --> ex15_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex15_in), ex15_out);
    });
    it("ex16_in: InputState --> ex16_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex16_in), ex16_out);
    });
    it("ex17_in: InputState --> ex17_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex17_in), ex17_out);
    });
    it("ex18_in: InputState --> ex18_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex18_in), ex18_out);
    });
    it("ex19_in: InputState --> ex19_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex19_in), ex19_out);
    });
    it("ex2_in: InputState --> ex2_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex2_in), ex2_out);
    });
    it("ex20_in: InputState --> ex20_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex20_in), ex20_out);
    });
    it("ex21_in: InputState --> ex21_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex21_in), ex21_out);
    });
    it("ex22_in: InputState --> ex22_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex22_in), ex22_out);
    });
    it("ex26_in: InputState --> ex26_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex26_in), ex26_out);
    });
    it("ex27_in: InputState --> ex27_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex27_in), ex27_out);
    });
    it("ex28_in: InputState --> ex28_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex28_in), ex28_out);
    });
    it("ex29_in: InputState --> ex29_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex29_in), ex29_out);
    });
    it("ex3_in: InputState --> ex3_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex3_in), ex3_out);
    });
    it("ex30_in: InputState --> ex30_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex30_in), ex30_out);
    });
    it("ex31_in: InputState --> ex31_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex31_in), ex31_out);
    });
    it("ex32_in: InputState --> ex32_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex32_in), ex32_out);
    });
    it("ex33_in: InputState --> ex33_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex33_in), ex33_out);
    });
    it("ex34_in: InputState --> ex34_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex34_in), ex34_out);
    });
    it("ex35_in: InputState --> ex35_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex35_in), ex35_out);
    });
    it("ex36_in: InputState --> ex36_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex36_in), ex36_out);
    });
    it("ex37_in: InputState --> ex37_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex37_in), ex37_out);
    });
    it("ex38_in: InputState --> ex38_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex38_in), ex38_out);
    });
    it("ex39_in: InputState --> ex39_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex39_in), ex39_out);
    });
    it("ex4_in: InputState --> ex4_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex4_in), ex4_out);
    });
    it("ex40_in: InputState --> ex40_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex40_in), ex40_out);
    });
    it("ex41_in: InputState --> ex41_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex41_in), ex41_out);
    });
    it("ex42_in: InputState --> ex42_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex42_in), ex42_out);
    });
    it("ex43_in: InputState --> ex43_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex43_in), ex43_out);
    });
    it("ex44_in: InputState --> ex44_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex44_in), ex44_out);
    });
    it("ex45_in: InputState --> ex45_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex45_in), ex45_out);
    });
    it("ex46_in: InputState --> ex46_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex46_in), ex46_out);
    });
    it("ex47_in: InputState --> ex47_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex47_in), ex47_out);
    });
    it("ex48_in: InputState --> ex48_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex48_in), ex48_out);
    });
    it("ex49_in: InputState --> ex49_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex49_in), ex49_out);
    });
    it("ex5_in: InputState --> ex5_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex5_in), ex5_out);
    });
    it("ex50_in: InputState --> ex50_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex50_in), ex50_out);
    });
    it("ex51_in: InputState --> ex51_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex51_in), ex51_out);
    });
    it("ex52_in: InputState --> ex52_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex52_in), ex52_out);
    });
    it("ex53_in: InputState --> ex53_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex53_in), ex53_out);
    });
    it("ex54_in: InputState --> ex54_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex54_in), ex54_out);
    });
    it("ex55_in: InputState --> ex55_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex55_in), ex55_out);
    });
    it("ex56_in: InputState --> ex56_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex56_in), ex56_out);
    });
    it("ex57_in: InputState --> ex57_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex57_in), ex57_out);
    });
    it("ex58_in: InputState --> ex58_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex58_in), ex58_out);
    });
    it("ex59_in: InputState --> ex59_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex59_in), ex59_out);
    });
    it("ex6_in: InputState --> ex6_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex6_in), ex6_out);
    });
    it("ex60_in: InputState --> ex60_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex60_in), ex60_out);
    });
    it("ex61_in: InputState --> ex61_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex61_in), ex61_out);
    });
    it("ex62_in: InputState --> ex62_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex62_in), ex62_out);
    });
    it("ex63_in: InputState --> ex63_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex63_in), ex63_out);
    });
    it("ex64_in: InputState --> ex64_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex64_in), ex64_out);
    });
    it("ex65_in: InputState --> ex65_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex65_in), ex65_out);
    });
    it("ex66_in: InputState --> ex66_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex66_in), ex66_out);
    });
    it("ex67_in: InputState --> ex67_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex67_in), ex67_out);
    });
    it("ex68_in: InputState --> ex68_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex68_in), ex68_out);
    });
    it("ex69_in: InputState --> ex69_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex69_in), ex69_out);
    });
    it("ex7_in: InputState --> ex7_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex7_in), ex7_out);
    });
    it("ex70_in: InputState --> ex70_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex70_in), ex70_out);
    });
    it("ex71_in: InputState --> ex71_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex71_in), ex71_out);
    });
    it("ex72_in: InputState --> ex72_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex72_in), ex72_out);
    });
    it("ex73_in: InputState --> ex73_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex73_in), ex73_out);
    });
    it("ex74_in: InputState --> ex74_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex74_in), ex74_out);
    });
    it("ex75_in: InputState --> ex75_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex75_in), ex75_out);
    });
    it("ex76_in: InputState --> ex76_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex76_in), ex76_out);
    });
    it("ex77_in: InputState --> ex77_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex77_in), ex77_out);
    });
    it("ex78_in: InputState --> ex78_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex78_in), ex78_out);
    });
    it("ex79_in: InputState --> ex79_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex79_in), ex79_out);
    });
    it("ex8_in: InputState --> ex8_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex8_in), ex8_out);
    });
    it("ex80_in: InputState --> ex80_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex80_in), ex80_out);
    });
    it("ex9_in: InputState --> ex9_out", function () {
        chai_1.assert.deepEqual(xState_1.xState(ex9_in), ex9_out);
    });
});
