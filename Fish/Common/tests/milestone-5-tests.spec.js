"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var xTree_1 = require("../executables/xTree/xTree");
var ex1_in = {
    "state": {
        "players": [{
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
                "color": "black",
                "score": 0,
                "places": [
                    [1, 1],
                    [1, 2]
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
            [2, 5, 4],
            [4, 3, 4],
            [3, 5, 3],
            [3, 3, 1]
        ]
    },
    "from": [2, 0],
    "to": [3, 0]
};
var ex1_out = false;
var ex10_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [1, 0],
                    [2, 0],
                    [6, 0],
                    [4, 0]
                ]
            }, {
                "color": "white",
                "score": 0,
                "places": [
                    [5, 0],
                    [3, 0],
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
            [3]
        ]
    },
    "from": [1, 0],
    "to": [3, 1]
};
var ex10_out = [
    [3, 0],
    [1, 1]
];
var ex11_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [1, 0],
                    [0, 0],
                    [3, 0],
                    [7, 0]
                ]
            }, {
                "color": "white",
                "score": 0,
                "places": [
                    [6, 0],
                    [5, 0],
                    [2, 0],
                    [4, 0]
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
            [3]
        ]
    },
    "from": [1, 0],
    "to": [5, 2]
};
var ex11_out = false;
var ex12_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [0, 0],
                    [0, 3],
                    [1, 3],
                    [2, 3]
                ]
            }, {
                "color": "black",
                "score": 0,
                "places": [
                    [0, 2],
                    [0, 1],
                    [3, 3],
                    [4, 3]
                ]
            }],
        "board": [
            [4, 4, 4, 4],
            [4, 4, 4, 4],
            [4, 4, 4, 4],
            [3, 3, 3, 3],
            [4, 4, 4, 4],
            [4, 4]
        ]
    },
    "from": [0, 0],
    "to": [3, 1]
};
var ex12_out = [
    [0, 1],
    [1, 1]
];
var ex13_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 2,
                "places": [
                    [0, 1],
                    [0, 2],
                    [0, 3]
                ]
            }, {
                "color": "brown",
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
                    [5, 3],
                    [5, 2],
                    [5, 1]
                ]
            }],
        "board": [
            [0, 2, 2, 2],
            [3, 1, 0, 4],
            [0, 3, 1, 3],
            [3, 3, 0, 1],
            [3, 3, 3, 3],
            [0, 4, 4, 4]
        ]
    },
    "from": [0, 1],
    "to": [2, 1]
};
var ex13_out = [
    [1, 1],
    [3, 1]
];
var ex14_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 1,
                "places": [
                    [1, 2],
                    [1, 1]
                ]
            }, {
                "color": "red",
                "score": 2,
                "places": [
                    [3, 2],
                    [3, 0]
                ]
            }, {
                "color": "white",
                "score": 3,
                "places": [
                    [0, 2],
                    [4, 1]
                ]
            }, {
                "color": "brown",
                "score": 4,
                "places": [
                    [5, 1],
                    [0, 1]
                ]
            }],
        "board": [
            [5, 4, 3],
            [5, 1, 1, 5],
            [0, 5, 5, 5],
            [2, 5, 2, 5],
            [5, 3, 0, 0],
            [0, 4, 5, 5]
        ]
    },
    "from": [1, 1],
    "to": [3, 1]
};
var ex14_out = [
    [3, 2],
    [2, 2]
];
var ex15_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 1,
                "places": [
                    [1, 2],
                    [2, 2]
                ]
            }, {
                "color": "red",
                "score": 2,
                "places": [
                    [2, 3],
                    [3, 0]
                ]
            }, {
                "color": "white",
                "score": 3,
                "places": [
                    [3, 2],
                    [4, 1]
                ]
            }, {
                "color": "brown",
                "score": 4,
                "places": [
                    [1, 1],
                    [0, 1]
                ]
            }],
        "board": [
            [5, 4, 5],
            [5, 4, 1, 5],
            [0, 5, 1, 2],
            [2, 5, 3, 5],
            [5, 3, 0, 0],
            [0, 5, 5, 5]
        ]
    },
    "from": [2, 2],
    "to": [0, 2]
};
var ex15_out = false;
var ex16_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [0, 1],
                    [0, 2],
                    [1, 2],
                    [0, 0]
                ]
            }, {
                "color": "brown",
                "score": 0,
                "places": [
                    [2, 2],
                    [1, 1],
                    [2, 0],
                    [3, 0]
                ]
            }],
        "board": [
            [1, 2, 3],
            [4, 1, 5],
            [1, 1, 1],
            [3, 3, 3]
        ]
    },
    "from": [0, 1],
    "to": [2, 1]
};
var ex16_out = [
    [1, 1],
    [3, 1]
];
var ex17_in = {
    "state": {
        "players": [{
                "color": "brown",
                "score": 0,
                "places": [
                    [0, 0],
                    [1, 1],
                    [2, 0],
                    [3, 0]
                ]
            }, {
                "color": "red",
                "score": 0,
                "places": [
                    [0, 1],
                    [0, 2],
                    [1, 2],
                    [2, 2]
                ]
            }],
        "board": [
            [1, 2, 3],
            [4, 1, 5],
            [1, 1, 1],
            [3, 3, 3]
        ]
    },
    "from": [0, 0],
    "to": [1, 0]
};
var ex17_out = [
    [0, 1],
    [2, 1]
];
var ex18_in = {
    "state": {
        "players": [{
                "color": "brown",
                "score": 0,
                "places": [
                    [2, 1],
                    [1, 0],
                    [2, 0],
                    [3, 0]
                ]
            }, {
                "color": "red",
                "score": 0,
                "places": [
                    [3, 2],
                    [0, 2],
                    [1, 2],
                    [2, 2]
                ]
            }],
        "board": [
            [1, 2, 3],
            [4, 1, 5],
            [1, 1, 1],
            [3, 3, 3]
        ]
    },
    "from": [1, 0],
    "to": [0, 0]
};
var ex18_out = false;
var ex19_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 1,
                "places": [
                    [0, 0],
                    [2, 2],
                    [1, 2],
                    [2, 1]
                ]
            }, {
                "color": "red",
                "score": 4,
                "places": [
                    [1, 1],
                    [5, 1],
                    [7, 1],
                    [0, 2]
                ]
            }],
        "board": [
            [4, 2, 4],
            [1, 3, 2],
            [2, 4, 2],
            [2, 2, 1],
            [4, 0, 2],
            [2, 3, 4],
            [2, 4, 2],
            [3, 4, 1]
        ]
    },
    "from": [2, 1],
    "to": [3, 1]
};
var ex19_out = [
    [5, 1],
    [4, 2]
];
var ex2_in = {
    "state": {
        "players": [{
                "color": "brown",
                "score": 0,
                "places": [
                    [0, 2],
                    [2, 1]
                ]
            }, {
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
            }],
        "board": [
            [2, 5, 4],
            [4, 3, 4],
            [3, 5, 3],
            [3, 3, 1]
        ]
    },
    "from": [0, 2],
    "to": [2, 2]
};
var ex2_out = [
    [1, 2],
    [3, 2]
];
var ex20_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 1,
                "places": [
                    [2, 0],
                    [2, 2],
                    [1, 2],
                    [2, 1]
                ]
            }, {
                "color": "red",
                "score": 4,
                "places": [
                    [1, 1],
                    [5, 1],
                    [7, 1],
                    [4, 0]
                ]
            }],
        "board": [
            [4, 2, 4],
            [1, 3, 2],
            [2, 4, 2],
            [2, 2, 1],
            [4, 0, 2],
            [2, 3, 4],
            [2, 4, 2],
            [3, 4, 1]
        ]
    },
    "from": [2, 0],
    "to": [0, 1]
};
var ex20_out = false;
var ex21_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 40,
                "places": [
                    [2, 1],
                    [3, 3]
                ]
            }, {
                "color": "white",
                "score": 31,
                "places": [
                    [0, 1],
                    [1, 1]
                ]
            }, {
                "color": "red",
                "score": 56,
                "places": [
                    [3, 1],
                    [3, 0]
                ]
            }, {
                "color": "brown",
                "score": 78,
                "places": [
                    [2, 2],
                    [2, 3]
                ]
            }],
        "board": [
            [2, 5, 1, 5],
            [1, 5, 3, 3],
            [2, 4, 5, 5],
            [4, 3, 5, 2]
        ]
    },
    "from": [2, 1],
    "to": [1, 0]
};
var ex21_out = false;
var ex22_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 40,
                "places": [
                    [2, 1],
                    [3, 3]
                ]
            }, {
                "color": "white",
                "score": 31,
                "places": [
                    [0, 0],
                    [3, 0]
                ]
            }, {
                "color": "red",
                "score": 56,
                "places": [
                    [3, 1],
                    [3, 2]
                ]
            }, {
                "color": "brown",
                "score": 78,
                "places": [
                    [2, 2],
                    [2, 3]
                ]
            }],
        "board": [
            [2, 5, 1, 5],
            [1, 5, 3, 3],
            [2, 4, 5, 5],
            [4, 3, 5, 2]
        ]
    },
    "from": [2, 1],
    "to": [1, 0]
};
var ex22_out = [
    [0, 0],
    [2, 0]
];
var ex23_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 40,
                "places": [
                    [2, 1],
                    [3, 3]
                ]
            }, {
                "color": "brown",
                "score": 78,
                "places": [
                    [2, 2],
                    [2, 3]
                ]
            }, {
                "color": "red",
                "score": 56,
                "places": [
                    [3, 1],
                    [3, 2]
                ]
            }, {
                "color": "white",
                "score": 31,
                "places": [
                    [0, 0],
                    [3, 0]
                ]
            }],
        "board": [
            [2, 5, 1, 5],
            [1, 5, 3, 3],
            [2, 4, 5, 5],
            [4, 3, 5, 2]
        ]
    },
    "from": [2, 1],
    "to": [0, 2]
};
var ex23_out = [
    [2, 2],
    [1, 2]
];
var ex24_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 3,
                "places": [
                    [0, 0],
                    [2, 0],
                    [3, 0],
                    [0, 1]
                ]
            }, {
                "color": "white",
                "score": 1,
                "places": [
                    [3, 2],
                    [2, 2],
                    [1, 2],
                    [0, 2]
                ]
            }],
        "board": [
            [3, 3, 3],
            [3, 3, 3],
            [3, 3, 3],
            [3, 3, 3]
        ]
    },
    "from": [0, 0],
    "to": [2, 1]
};
var ex24_out = [
    [0, 2],
    [1, 1]
];
var ex25_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 3,
                "places": [
                    [0, 0],
                    [1, 0],
                    [4, 0],
                    [0, 1]
                ]
            }, {
                "color": "white",
                "score": 1,
                "places": [
                    [2, 2],
                    [3, 3],
                    [4, 1],
                    [2, 1]
                ]
            }],
        "board": [
            [3, 3, 3, 3],
            [3, 3, 3, 3],
            [3, 3, 3, 3],
            [3, 3, 3, 3],
            [3, 3, 3, 3]
        ]
    },
    "from": [0, 0],
    "to": [2, 0]
};
var ex25_out = [
    [2, 1],
    [3, 0]
];
var ex26_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 3,
                "places": [
                    [0, 0],
                    [1, 0],
                    [4, 0],
                    [0, 1]
                ]
            }, {
                "color": "white",
                "score": 1,
                "places": [
                    [4, 2],
                    [3, 2],
                    [1, 2],
                    [3, 0]
                ]
            }],
        "board": [
            [3, 3, 3, 3],
            [3, 3, 3, 3],
            [3, 3, 3, 3],
            [3, 3, 3, 3],
            [3, 3, 3, 3]
        ]
    },
    "from": [0, 0],
    "to": [2, 0]
};
var ex26_out = false;
var ex27_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 9,
                "places": [
                    [0, 0],
                    [3, 0],
                    [2, 1]
                ]
            }, {
                "color": "black",
                "score": 8,
                "places": [
                    [0, 1],
                    [1, 1],
                    [1, 3]
                ]
            }, {
                "color": "brown",
                "score": 4,
                "places": [
                    [4, 0],
                    [4, 1],
                    [2, 0]
                ]
            }],
        "board": [
            [1, 2, 3],
            [0, 2, 1, 2],
            [4, 5, 1],
            [3, 2, 4],
            [1, 2, 3]
        ]
    },
    "from": [2, 1],
    "to": [4, 2]
};
var ex27_out = [
    [1, 1],
    [2, 2]
];
var ex28_in = {
    "state": {
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
    },
    "from": [0, 1],
    "to": [2, 1]
};
var ex28_out = [
    [1, 1],
    [3, 1]
];
var ex29_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [2, 0],
                    [0, 1],
                    [1, 0],
                    [3, 0]
                ]
            }, {
                "color": "brown",
                "score": 0,
                "places": [
                    [0, 2],
                    [3, 1],
                    [1, 2],
                    [3, 2]
                ]
            }],
        "board": [
            [0, 2, 2],
            [3, 4, 5],
            [4, 3, 2],
            [2, 2, 3]
        ]
    },
    "from": [0, 1],
    "to": [2, 1]
};
var ex29_out = [
    [0, 2],
    [1, 1]
];
var ex3_in = {
    "state": {
        "players": [{
                "color": "brown",
                "score": 0,
                "places": [
                    [0, 2],
                    [2, 1]
                ]
            }, {
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
            }],
        "board": [
            [2, 5, 4],
            [4, 3, 4],
            [3, 5, 3],
            [3, 3, 1],
            [1, 1, 1]
        ]
    },
    "from": [2, 1],
    "to": [3, 1]
};
var ex3_out = [
    [1, 1],
    [2, 2]
];
var ex30_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [1, 2],
                    [0, 1],
                    [2, 2],
                    [3, 0]
                ]
            }, {
                "color": "brown",
                "score": 0,
                "places": [
                    [0, 0],
                    [0, 2],
                    [2, 0],
                    [3, 1]
                ]
            }],
        "board": [
            [2, 2, 2],
            [0, 0, 5],
            [4, 3, 2],
            [2, 2, 3]
        ]
    },
    "from": [0, 1],
    "to": [2, 1]
};
var ex30_out = false;
var ex31_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 4,
                "places": [
                    [2, 1],
                    [0, 1],
                    [1, 1],
                    [1, 2]
                ]
            }, {
                "color": "white",
                "score": 5,
                "places": [
                    [0, 2],
                    [3, 1],
                    [4, 0],
                    [2, 2]
                ]
            }],
        "board": [
            [1, 2, 3],
            [0, 1, 2],
            [5, 2, 2],
            [4, 3, 5],
            [2, 1, 2]
        ]
    },
    "from": [1, 2],
    "to": [3, 2]
};
var ex31_out = [
    [2, 2],
    [4, 2]
];
var ex32_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 2,
                "places": [
                    [1, 0],
                    [0, 1],
                    [0, 2],
                    [1, 2]
                ]
            }, {
                "color": "white",
                "score": 8,
                "places": [
                    [2, 0],
                    [2, 1],
                    [1, 3],
                    [0, 4]
                ]
            }],
        "board": [
            [1, 2, 3, 5, 5],
            [4, 0, 5, 2],
            [1, 1, 0]
        ]
    },
    "from": [1, 2],
    "to": [0, 3]
};
var ex32_out = false;
var ex33_in = {
    "state": {
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
                    [3, 0]
                ]
            }, {
                "color": "white",
                "score": 8,
                "places": [
                    [2, 3],
                    [0, 0],
                    [1, 0],
                    [2, 2]
                ]
            }]
    },
    "from": [3, 0],
    "to": [2, 1]
};
var ex33_out = [
    [2, 2],
    [3, 1]
];
var ex34_in = {
    "state": {
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
    },
    "from": [1, 2],
    "to": [0, 2]
};
var ex34_out = false;
var ex35_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [0, 0],
                    [1, 1],
                    [3, 2],
                    [3, 0]
                ]
            }, {
                "color": "black",
                "score": 0,
                "places": [
                    [0, 2],
                    [2, 2],
                    [0, 1],
                    [1, 2]
                ]
            }],
        "board": [
            [1, 2, 3],
            [3, 3, 1],
            [5, 4, 5],
            [1, 0, 1]
        ]
    },
    "from": [0, 0],
    "to": [1, 0]
};
var ex35_out = [
    [0, 1],
    [2, 1]
];
var ex36_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 2,
                "places": [
                    [0, 1],
                    [1, 0],
                    [3, 2],
                    [3, 0]
                ]
            }, {
                "color": "black",
                "score": 0,
                "places": [
                    [0, 2],
                    [2, 2],
                    [2, 1],
                    [1, 2]
                ]
            }],
        "board": [
            [1, 2, 3],
            [3, 0, 1],
            [5, 4, 5],
            [1, 0, 1]
        ]
    },
    "from": [1, 0],
    "to": [0, 0]
};
var ex36_out = false;
var ex37_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 4,
                "places": [
                    [0, 0],
                    [0, 2],
                    [1, 1],
                    [2, 0]
                ]
            }, {
                "color": "black",
                "score": 0,
                "places": [
                    [0, 1],
                    [1, 0],
                    [1, 2],
                    [2, 1]
                ]
            }],
        "board": [
            [1, 2, 3],
            [3, 3, 1],
            [5, 4, 5],
            [1, 5, 1]
        ]
    },
    "from": [1, 1],
    "to": [3, 2]
};
var ex37_out = [
    [1, 2],
    [2, 2]
];
var ex38_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 2,
                "places": [
                    [0, 0],
                    [1, 1],
                    [0, 1],
                    [2, 2]
                ]
            }, {
                "color": "red",
                "score": 0,
                "places": [
                    [3, 0],
                    [2, 1],
                    [1, 2],
                    [3, 2]
                ]
            }],
        "board": [
            [1, 2, 5],
            [2, 1, 4],
            [1, 3, 5],
            [2, 1, 1]
        ]
    },
    "from": [0, 0],
    "to": [1, 0]
};
var ex38_out = [
    [3, 0],
    [2, 0]
];
var ex39_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 2,
                "places": [
                    [0, 1],
                    [0, 2],
                    [1, 2],
                    [3, 2]
                ]
            }, {
                "color": "red",
                "score": 0,
                "places": [
                    [0, 0],
                    [2, 0],
                    [3, 0],
                    [3, 1]
                ]
            }],
        "board": [
            [1, 2, 5],
            [0, 1, 4],
            [1, 3, 0],
            [2, 1, 1]
        ]
    },
    "from": [0, 2],
    "to": [1, 1]
};
var ex39_out = [
    [3, 0],
    [2, 1]
];
var ex4_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [0, 0],
                    [0, 4]
                ]
            }, {
                "color": "white",
                "score": 0,
                "places": [
                    [1, 0],
                    [0, 3]
                ]
            }, {
                "color": "brown",
                "score": 0,
                "places": [
                    [2, 0],
                    [2, 2]
                ]
            }, {
                "color": "black",
                "score": 0,
                "places": [
                    [0, 1],
                    [1, 2]
                ]
            }],
        "board": [
            [1, 2, 3, 4, 5],
            [1, 4, 3, 2, 1],
            [1, 3, 5, 2, 2],
            [1, 3, 5, 2, 2],
            [1, 3, 5, 2, 2]
        ]
    },
    "from": [0, 4],
    "to": [1, 4]
};
var ex4_out = [
    [0, 3],
    [3, 4]
];
var ex40_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 6,
                "places": [
                    [2, 0],
                    [1, 1],
                    [0, 3],
                    [2, 3]
                ]
            }, {
                "color": "brown",
                "score": 11,
                "places": [
                    [3, 1],
                    [0, 1],
                    [1, 3],
                    [3, 3]
                ]
            }],
        "board": [
            [5, 2, 5, 1],
            [1, 1, 4, 1],
            [3, 0, 5, 1],
            [4, 3, 3, 1]
        ]
    },
    "from": [2, 0],
    "to": [0, 0]
};
var ex40_out = [
    [0, 1],
    [1, 0]
];
var ex41_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 6,
                "places": [
                    [2, 0],
                    [2, 1],
                    [0, 3],
                    [2, 3]
                ]
            }, {
                "color": "brown",
                "score": 11,
                "places": [
                    [3, 2],
                    [1, 2],
                    [1, 3],
                    [3, 3]
                ]
            }],
        "board": [
            [5, 2, 5, 1],
            [1, 1, 4, 1],
            [3, 2, 5, 1],
            [4, 3, 3, 1]
        ]
    },
    "from": [2, 0],
    "to": [1, 0]
};
var ex41_out = [
    [3, 2],
    [0, 1]
];
var ex42_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 6,
                "places": [
                    [2, 0],
                    [1, 1],
                    [0, 3],
                    [2, 3]
                ]
            }, {
                "color": "brown",
                "score": 11,
                "places": [
                    [3, 1],
                    [1, 2],
                    [1, 3],
                    [3, 3]
                ]
            }],
        "board": [
            [5, 2, 5, 1],
            [1, 1, 4, 1],
            [3, 2, 5, 1],
            [4, 3, 3, 1]
        ]
    },
    "from": [1, 1],
    "to": [2, 1]
};
var ex42_out = false;
var ex43_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [0, 0],
                    [0, 1],
                    [0, 2]
                ]
            }, {
                "color": "white",
                "score": 0,
                "places": [
                    [1, 0],
                    [3, 2],
                    [2, 2]
                ]
            }, {
                "color": "brown",
                "score": 0,
                "places": [
                    [3, 0],
                    [1, 2],
                    [3, 1]
                ]
            }],
        "board": [
            [3, 3, 1],
            [1, 5, 3],
            [2, 0, 1, 0, 1],
            [1, 1, 2]
        ]
    },
    "from": [0, 2],
    "to": [1, 1]
};
var ex43_out = false;
var ex44_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [0, 0],
                    [0, 1],
                    [0, 2]
                ]
            }, {
                "color": "white",
                "score": 0,
                "places": [
                    [1, 0],
                    [3, 2],
                    [2, 2]
                ]
            }, {
                "color": "brown",
                "score": 0,
                "places": [
                    [3, 0],
                    [1, 2],
                    [3, 1]
                ]
            }],
        "board": [
            [3, 3, 1],
            [1, 5, 3],
            [2, 3, 1],
            [1, 1, 2]
        ]
    },
    "from": [0, 2],
    "to": [1, 1]
};
var ex44_out = [
    [1, 0],
    [2, 1]
];
var ex45_in = {
    "state": {
        "players": [{
                "color": "brown",
                "score": 0,
                "places": [
                    [0, 1],
                    [3, 1]
                ]
            }, {
                "color": "red",
                "score": 0,
                "places": [
                    [2, 1],
                    [0, 2]
                ]
            }, {
                "color": "black",
                "score": 0,
                "places": [
                    [1, 2],
                    [4, 0]
                ]
            }, {
                "color": "white",
                "score": 0,
                "places": [
                    [0, 0],
                    [3, 0]
                ]
            }],
        "board": [
            [2, 1, 5],
            [3, 3, 1],
            [5, 1, 1],
            [3, 2, 4],
            [4, 0, 2]
        ]
    },
    "from": [0, 1],
    "to": [2, 2]
};
var ex45_out = [
    [0, 2],
    [1, 1]
];
var ex46_in = {
    "state": {
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
            [1, 5, 4, 2],
            [1, 1, 1, 1]
        ]
    },
    "from": [0, 3],
    "to": [2, 3]
};
var ex46_out = false;
var ex47_in = {
    "state": {
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
                    [4, 3],
                    [1, 3],
                    [1, 1]
                ]
            }],
        "board": [
            [2, 1, 4, 2],
            [1, 5, 4, 2],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [0, 1, 2, 3]
        ]
    },
    "from": [0, 3],
    "to": [2, 3]
};
var ex47_out = [
    [1, 3],
    [3, 3]
];
var ex48_in = {
    "state": {
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
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ]
    },
    "from": [0, 0],
    "to": [1, 0]
};
var ex48_out = false;
var ex49_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 0,
                "places": [
                    [0, 2],
                    [4, 1],
                    [0, 1]
                ]
            }, {
                "color": "white",
                "score": 1,
                "places": [
                    [0, 0],
                    [2, 0],
                    [4, 0]
                ]
            }, {
                "color": "brown",
                "score": 2,
                "places": [
                    [0, 3],
                    [1, 3],
                    [2, 3]
                ]
            }],
        "board": [
            [1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ]
    },
    "from": [0, 1],
    "to": [2, 1]
};
var ex49_out = [
    [2, 0],
    [3, 0]
];
var ex5_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 0,
                "places": [
                    [5, 2],
                    [4, 0],
                    [3, 2]
                ]
            }, {
                "color": "brown",
                "score": 0,
                "places": [
                    [0, 0],
                    [6, 2],
                    [6, 1]
                ]
            }, {
                "color": "white",
                "score": 5,
                "places": [
                    [3, 0],
                    [0, 1],
                    [1, 2]
                ]
            }],
        "board": [
            [3, 1, 3],
            [5, 2, 2],
            [1, 4],
            [3, 2, 5],
            [1, 4, 1],
            [2, 2, 2],
            [5, 5, 1],
            [2, 3, 3]
        ]
    },
    "from": [5, 2],
    "to": [3, 1]
};
var ex5_out = [
    [6, 1],
    [4, 2]
];
var ex50_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 0,
                "places": [
                    [0, 2],
                    [4, 1],
                    [0, 1]
                ]
            }, {
                "color": "white",
                "score": 1,
                "places": [
                    [0, 0],
                    [2, 0],
                    [1, 0]
                ]
            }, {
                "color": "brown",
                "score": 2,
                "places": [
                    [0, 3],
                    [1, 3],
                    [2, 3]
                ]
            }],
        "board": [
            [1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1]
        ]
    },
    "from": [0, 1],
    "to": [2, 1]
};
var ex50_out = false;
var ex51_in = {
    "state": {
        "players": [{
                "color": "white",
                "score": 0,
                "places": [
                    [0, 2],
                    [4, 1],
                    [0, 1]
                ]
            }, {
                "color": "red",
                "score": 2,
                "places": [
                    [0, 0],
                    [2, 0],
                    [4, 0]
                ]
            }, {
                "color": "brown",
                "score": 5,
                "places": [
                    [0, 3],
                    [1, 3],
                    [2, 3]
                ]
            }],
        "board": [
            [2, 1, 1, 1],
            [1, 3, 1, 1, 1],
            [1, 1, 2, 1, 1],
            [2, 1, 1, 1, 1],
            [1, 1, 2, 1, 2]
        ]
    },
    "from": [0, 1],
    "to": [2, 1]
};
var ex51_out = [
    [2, 0],
    [3, 0]
];
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
var ex53_in = {
    "from": [2, 0],
    "to": [1, 0],
    "state": {
        "players": [{
                "places": [
                    [5, 0],
                    [4, 0],
                    [3, 0],
                    [2, 0]
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
            [2, 0],
            [1, 1],
            [1, 1],
            [1, 1]
        ]
    }
};
var ex53_out = false;
var ex54_in = {
    "from": [2, 0],
    "to": [1, 0],
    "state": {
        "players": [{
                "places": [
                    [5, 0],
                    [4, 0],
                    [3, 0],
                    [2, 0]
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
            [2, 1],
            [1, 1],
            [1, 1],
            [1, 1]
        ]
    }
};
var ex54_out = [
    [0, 1],
    [2, 1]
];
var ex55_in = {
    "from": [2, 0],
    "to": [0, 0],
    "state": {
        "players": [{
                "places": [
                    [5, 0],
                    [4, 0],
                    [3, 0],
                    [2, 0]
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
            [2, 1],
            [1, 1],
            [1, 1],
            [1, 1]
        ]
    }
};
var ex55_out = [
    [0, 1],
    [1, 0]
];
var ex56_in = {
    "from": [2, 0],
    "to": [0, 0],
    "state": {
        "players": [{
                "places": [
                    [5, 0],
                    [4, 0],
                    [2, 0],
                    [1, 1]
                ],
                "color": "white",
                "score": 0
            }, {
                "places": [
                    [0, 1],
                    [2, 1],
                    [5, 1],
                    [4, 1]
                ],
                "color": "red",
                "score": 2
            }],
        "board": [
            [1, 2],
            [3, 1],
            [2, 1],
            [1, 1],
            [1, 1],
            [1, 1]
        ]
    }
};
var ex56_out = [
    [0, 1],
    [1, 0]
];
var ex57_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [0, 0],
                    [0, 2],
                    [2, 1],
                    [2, 2]
                ]
            }, {
                "color": "white",
                "score": 0,
                "places": [
                    [1, 0],
                    [1, 1],
                    [1, 2],
                    [1, 3]
                ]
            }],
        "board": [
            [1, 2, 3, 1],
            [4, 1, 5, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ]
    },
    "from": [0, 0],
    "to": [2, 0]
};
var ex57_out = [
    [1, 0],
    [3, 0]
];
var ex58_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 0,
                "places": [
                    [0, 0],
                    [0, 2],
                    [2, 1],
                    [2, 2]
                ]
            }, {
                "color": "white",
                "score": 0,
                "places": [
                    [1, 0],
                    [1, 1],
                    [3, 0],
                    [1, 3]
                ]
            }],
        "board": [
            [1, 2, 3, 1],
            [4, 1, 5, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ]
    },
    "from": [0, 0],
    "to": [2, 0]
};
var ex58_out = false;
var ex59_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 4,
                "places": [
                    [2, 2],
                    [1, 4]
                ]
            }, {
                "color": "brown",
                "score": 2,
                "places": [
                    [4, 3],
                    [4, 4]
                ]
            }, {
                "color": "white",
                "score": 10,
                "places": [
                    [3, 0],
                    [2, 4]
                ]
            }, {
                "color": "black",
                "score": 1,
                "places": [
                    [3, 4],
                    [3, 3]
                ]
            }],
        "board": [
            [1, 2, 5, 4, 2],
            [2, 3, 3, 1, 4],
            [4, 2, 3, 1, 5],
            [2, 5, 4, 3, 1],
            [2, 1, 4, 2, 2]
        ]
    },
    "from": [2, 2],
    "to": [0, 1]
};
var ex59_out = false;
var ex6_in = {
    "state": {
        "players": [{
                "color": "white",
                "score": 1,
                "places": [
                    [3, 0],
                    [0, 2],
                    [2, 1],
                    [5, 0]
                ]
            }, {
                "color": "black",
                "score": 3,
                "places": [
                    [4, 2],
                    [4, 0],
                    [2, 0],
                    [1, 1]
                ]
            }],
        "board": [
            [2, 2, 1],
            [3, 2, 5],
            [5, 4, 2],
            [3],
            [1, 1, 1],
            [2, 3, 5]
        ]
    },
    "from": [3, 0],
    "to": [5, 1]
};
var ex6_out = false;
var ex60_in = {
    "state": {
        "players": [{
                "color": "white",
                "score": 2,
                "places": [
                    [0, 0],
                    [0, 3]
                ]
            }, {
                "color": "black",
                "score": 2,
                "places": [
                    [2, 0],
                    [0, 1]
                ]
            }, {
                "color": "red",
                "score": 1,
                "places": [
                    [3, 0],
                    [3, 1]
                ]
            }, {
                "color": "brown",
                "score": 3,
                "places": [
                    [0, 2],
                    [1, 2]
                ]
            }],
        "board": [
            [1, 2, 3, 4],
            [4, 3, 4],
            [2, 5, 1, 1],
            [2, 2, 1, 0]
        ]
    },
    "from": [0, 3],
    "to": [2, 3]
};
var ex60_out = [
    [0, 1],
    [3, 2]
];
var ex61_in = {
    "state": {
        "players": [{
                "color": "brown",
                "score": 5,
                "places": [
                    [0, 1],
                    [1, 1],
                    [2, 3],
                    [1, 2]
                ]
            }, {
                "color": "white",
                "score": 6,
                "places": [
                    [3, 2],
                    [0, 3],
                    [0, 2],
                    [2, 2]
                ]
            }],
        "board": [
            [1, 2, 3, 3],
            [4, 3, 4, 3],
            [4, 0, 1, 1],
            [0, 2, 4],
            [3]
        ]
    },
    "from": [0, 1],
    "to": [2, 0]
};
var ex61_out = false;
var ex62_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 0,
                "places": [
                    [1, 0],
                    [0, 0],
                    [0, 1],
                    [0, 2]
                ]
            }, {
                "color": "brown",
                "score": 0,
                "places": [
                    [1, 1],
                    [1, 2],
                    [2, 0],
                    [2, 1]
                ]
            }],
        "board": [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ]
    },
    "from": [1, 0],
    "to": [3, 0]
};
var ex62_out = false;
var ex63_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 0,
                "places": [
                    [1, 0],
                    [0, 0],
                    [0, 1],
                    [0, 2]
                ]
            }, {
                "color": "brown",
                "score": 0,
                "places": [
                    [1, 1],
                    [1, 2],
                    [2, 0],
                    [2, 1]
                ]
            }],
        "board": [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ]
    },
    "from": [0, 2],
    "to": [2, 2]
};
var ex63_out = [
    [1, 2],
    [3, 2]
];
var ex64_in = {
    "state": {
        "players": [{
                "color": "black",
                "score": 0,
                "places": [
                    [1, 0],
                    [0, 0],
                    [0, 1],
                    [0, 2]
                ]
            }, {
                "color": "brown",
                "score": 0,
                "places": [
                    [1, 1],
                    [1, 2],
                    [2, 0],
                    [2, 1]
                ]
            }],
        "board": [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [1, 1]
        ]
    },
    "from": [0, 2],
    "to": [2, 2]
};
var ex64_out = [
    [1, 1],
    [3, 1]
];
var ex65_in = {
    "state": {
        "board": [
            [1, 1, 1, 1],
            [2, 1, 3, 3],
            [5, 3, 0, 5],
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
    },
    "from": [0, 0],
    "to": [2, 0]
};
var ex65_out = false;
var ex66_in = {
    "state": {
        "board": [
            [1, 1, 1, 1],
            [2, 1, 3, 3],
            [5, 3, 1, 5],
            [1, 1, 1, 0],
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
                    [4, 0],
                    [4, 1]
                ]
            }, {
                "color": "brown",
                "score": 4,
                "places": [
                    [4, 2],
                    [4, 3]
                ]
            }]
    },
    "from": [0, 1],
    "to": [2, 1]
};
var ex66_out = [
    [0, 2],
    [1, 1]
];
var ex67_in = {
    "state": {
        "board": [
            [1, 1, 1, 1],
            [2, 1, 3, 3],
            [5, 3, 1, 5],
            [1, 1, 1, 0],
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
                "color": "brown",
                "score": 4,
                "places": [
                    [4, 2],
                    [4, 3]
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
                    [4, 0],
                    [4, 1]
                ]
            }]
    },
    "from": [0, 1],
    "to": [2, 2]
};
var ex67_out = [
    [4, 2],
    [3, 2]
];
var ex68_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 9,
                "places": [
                    [3, 1],
                    [0, 1],
                    [2, 0],
                    [0, 3]
                ]
            }, {
                "color": "white",
                "score": 3,
                "places": [
                    [2, 3],
                    [1, 0],
                    [2, 2],
                    [2, 1]
                ]
            }],
        "board": [
            [1, 2, 3, 2],
            [4, 1, 5, 1],
            [1, 1, 1, 4],
            [1, 2, 3, 4]
        ]
    },
    "from": [2, 0],
    "to": [3, 0]
};
var ex68_out = false;
var ex69_in = {
    "state": {
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
    },
    "from": [2, 1],
    "to": [3, 0]
};
var ex69_out = [
    [1, 0],
    [2, 0]
];
var ex7_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 100,
                "places": [
                    [4, 1],
                    [4, 2],
                    [3, 0]
                ]
            }, {
                "color": "black",
                "score": 10,
                "places": [
                    [0, 1],
                    [1, 0],
                    [0, 2]
                ]
            }, {
                "color": "white",
                "score": 100,
                "places": [
                    [0, 0],
                    [2, 1],
                    [1, 1]
                ]
            }],
        "board": [
            [1, 1, 1],
            [1, 5, 1],
            [3, 1, 1],
            [5, 1, 1],
            [5, 1, 1]
        ]
    },
    "from": [4, 1],
    "to": [3, 1]
};
var ex7_out = [
    [0, 2],
    [2, 2]
];
var ex70_in = {
    "state": {
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
    },
    "from": [2, 1],
    "to": [3, 1]
};
var ex70_out = false;
var ex71_in = {
    "state": {
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
                    [3, 4],
                    [0, 3]
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
            [1, 2, 1, 1, 1],
            [1, 1, 1, 1, 5],
            [3, 2, 1, 1, 1],
            [1, 3, 2, 1, 1],
            [1, 1, 4, 1, 1]
        ]
    },
    "from": [0, 2],
    "to": [2, 3]
};
var ex71_out = [
    [0, 3],
    [1, 3]
];
var ex72_in = {
    "from": [1, 0],
    "to": [2, 1],
    "state": {
        "players": [{
                "color": "brown",
                "score": 2,
                "places": [
                    [0, 0],
                    [1, 0],
                    [2, 0],
                    [1, 1]
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
    }
};
var ex72_out = false;
var ex73_in = {
    "from": [0, 1],
    "to": [1, 1],
    "state": {
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
    }
};
var ex73_out = [
    [1, 2],
    [0, 2]
];
var ex74_in = {
    "from": [0, 1],
    "to": [1, 1],
    "state": {
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
                    [4, 1],
                    [4, 2],
                    [1, 3],
                    [2, 3]
                ]
            }],
        "board": [
            [1, 1, 0, 3],
            [1, 1, 2, 3],
            [4, 5, 5, 3],
            [0, 2, 2],
            [2, 2, 2]
        ]
    }
};
var ex74_out = [
    [4, 1],
    [2, 2]
];
var ex75_in = {
    "state": {
        "players": [{
                "color": "white",
                "score": 0,
                "places": [
                    [2, 0],
                    [3, 0],
                    [2, 1],
                    [0, 0]
                ]
            }, {
                "color": "red",
                "score": 1,
                "places": [
                    [0, 1],
                    [0, 2],
                    [1, 2],
                    [3, 2]
                ]
            }],
        "board": [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 0],
            [1, 1, 1]
        ]
    },
    "from": [2, 1],
    "to": [3, 1]
};
var ex75_out = false;
var ex76_in = {
    "state": {
        "players": [{
                "color": "white",
                "score": 0,
                "places": [
                    [0, 0],
                    [1, 0],
                    [2, 1],
                    [2, 0]
                ]
            }, {
                "color": "red",
                "score": 1,
                "places": [
                    [3, 1],
                    [0, 1],
                    [3, 0],
                    [3, 2]
                ]
            }],
        "board": [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ]
    },
    "from": [2, 1],
    "to": [0, 2]
};
var ex76_out = [
    [3, 1],
    [1, 2]
];
var ex77_in = {
    "state": {
        "players": [{
                "color": "white",
                "score": 0,
                "places": [
                    [2, 0],
                    [3, 0],
                    [2, 1],
                    [0, 0]
                ]
            }, {
                "color": "red",
                "score": 1,
                "places": [
                    [0, 1],
                    [0, 2],
                    [1, 2],
                    [3, 2]
                ]
            }],
        "board": [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ]
    },
    "from": [2, 1],
    "to": [1, 1]
};
var ex77_out = [
    [0, 2],
    [2, 2]
];
var ex8_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 100,
                "places": [
                    [1, 0],
                    [3, 0],
                    [4, 1]
                ]
            }, {
                "color": "black",
                "score": 10,
                "places": [
                    [0, 1],
                    [1, 1],
                    [3, 1]
                ]
            }, {
                "color": "white",
                "score": 10,
                "places": [
                    [0, 2],
                    [1, 2],
                    [2, 2]
                ]
            }],
        "board": [
            [1, 1, 1],
            [1, 5, 1],
            [3, 1, 1],
            [5, 1, 1],
            [5, 1, 1]
        ]
    },
    "from": [4, 1],
    "to": [2, 1]
};
var ex8_out = false;
var ex9_in = {
    "state": {
        "players": [{
                "color": "red",
                "score": 2,
                "places": [
                    [4, 1],
                    [4, 2],
                    [3, 0]
                ]
            }, {
                "color": "black",
                "score": 10,
                "places": [
                    [0, 1],
                    [1, 0],
                    [0, 2]
                ]
            }, {
                "color": "white",
                "score": 2,
                "places": [
                    [0, 0],
                    [2, 0],
                    [1, 2]
                ]
            }],
        "board": [
            [1, 1, 1],
            [1, 5, 1],
            [3, 1, 1],
            [5, 1, 1],
            [5, 1, 1]
        ]
    },
    "from": [4, 1],
    "to": [3, 1]
};
var ex9_out = [
    [0, 1],
    [1, 1]
];
describe("Milestone 5 tests", function () {
    it("ex1_in ->  ex1_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex1_in), ex1_out);
    });
    it("ex10_in ->  ex10_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex10_in), ex10_out);
    });
    it("ex11_in ->  ex11_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex11_in), ex11_out);
    });
    it("ex12_in ->  ex12_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex12_in), ex12_out);
    });
    it("ex13_in ->  ex13_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex13_in), ex13_out);
    });
    it("ex14_in ->  ex14_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex14_in), ex14_out);
    });
    it("ex15_in ->  ex15_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex15_in), ex15_out);
    });
    it("ex16_in ->  ex16_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex16_in), ex16_out);
    });
    it("ex17_in ->  ex17_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex17_in), ex17_out);
    });
    it("ex18_in ->  ex18_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex18_in), ex18_out);
    });
    it("ex19_in ->  ex19_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex19_in), ex19_out);
    });
    it("ex2_in ->  ex2_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex2_in), ex2_out);
    });
    it("ex20_in ->  ex20_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex20_in), ex20_out);
    });
    it("ex21_in ->  ex21_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex21_in), ex21_out);
    });
    it("ex22_in ->  ex22_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex22_in), ex22_out);
    });
    it("ex23_in ->  ex23_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex23_in), ex23_out);
    });
    it("ex24_in ->  ex24_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex24_in), ex24_out);
    });
    it("ex25_in ->  ex25_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex25_in), ex25_out);
    });
    it("ex26_in ->  ex26_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex26_in), ex26_out);
    });
    it("ex27_in ->  ex27_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex27_in), ex27_out);
    });
    it("ex28_in ->  ex28_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex28_in), ex28_out);
    });
    it("ex29_in ->  ex29_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex29_in), ex29_out);
    });
    it("ex3_in ->  ex3_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex3_in), ex3_out);
    });
    it("ex30_in ->  ex30_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex30_in), ex30_out);
    });
    it("ex31_in ->  ex31_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex31_in), ex31_out);
    });
    it("ex32_in ->  ex32_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex32_in), ex32_out);
    });
    it("ex33_in ->  ex33_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex33_in), ex33_out);
    });
    it("ex34_in ->  ex34_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex34_in), ex34_out);
    });
    it("ex35_in ->  ex35_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex35_in), ex35_out);
    });
    it("ex36_in ->  ex36_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex36_in), ex36_out);
    });
    it("ex37_in ->  ex37_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex37_in), ex37_out);
    });
    it("ex38_in ->  ex38_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex38_in), ex38_out);
    });
    it("ex39_in ->  ex39_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex39_in), ex39_out);
    });
    it("ex4_in ->  ex4_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex4_in), ex4_out);
    });
    it("ex40_in ->  ex40_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex40_in), ex40_out);
    });
    it("ex41_in ->  ex41_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex41_in), ex41_out);
    });
    it("ex42_in ->  ex42_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex42_in), ex42_out);
    });
    it("ex43_in ->  ex43_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex43_in), ex43_out);
    });
    it("ex44_in ->  ex44_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex44_in), ex44_out);
    });
    it("ex45_in ->  ex45_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex45_in), ex45_out);
    });
    it("ex46_in ->  ex46_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex46_in), ex46_out);
    });
    it("ex47_in ->  ex47_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex47_in), ex47_out);
    });
    it("ex48_in ->  ex48_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex48_in), ex48_out);
    });
    it("ex49_in ->  ex49_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex49_in), ex49_out);
    });
    it("ex5_in ->  ex5_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex5_in), ex5_out);
    });
    it("ex50_in ->  ex50_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex50_in), ex50_out);
    });
    it("ex51_in ->  ex51_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex51_in), ex51_out);
    });
    it("ex52_in ->  ex52_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex52_in), ex52_out);
    });
    it("ex53_in ->  ex53_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex53_in), ex53_out);
    });
    it("ex54_in ->  ex54_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex54_in), ex54_out);
    });
    it("ex55_in ->  ex55_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex55_in), ex55_out);
    });
    it("ex56_in ->  ex56_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex56_in), ex56_out);
    });
    it("ex57_in ->  ex57_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex57_in), ex57_out);
    });
    it("ex58_in ->  ex58_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex58_in), ex58_out);
    });
    it("ex59_in ->  ex59_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex59_in), ex59_out);
    });
    it("ex6_in ->  ex6_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex6_in), ex6_out);
    });
    it("ex60_in ->  ex60_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex60_in), ex60_out);
    });
    it("ex61_in ->  ex61_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex61_in), ex61_out);
    });
    it("ex62_in ->  ex62_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex62_in), ex62_out);
    });
    it("ex63_in ->  ex63_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex63_in), ex63_out);
    });
    it("ex64_in ->  ex64_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex64_in), ex64_out);
    });
    it("ex65_in ->  ex65_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex65_in), ex65_out);
    });
    it("ex66_in ->  ex66_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex66_in), ex66_out);
    });
    it("ex67_in ->  ex67_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex67_in), ex67_out);
    });
    it("ex68_in ->  ex68_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex68_in), ex68_out);
    });
    it("ex69_in ->  ex69_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex69_in), ex69_out);
    });
    it("ex7_in ->  ex7_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex7_in), ex7_out);
    });
    it("ex70_in ->  ex70_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex70_in), ex70_out);
    });
    it("ex71_in ->  ex71_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex71_in), ex71_out);
    });
    it("ex72_in ->  ex72_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex72_in), ex72_out);
    });
    it("ex73_in ->  ex73_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex73_in), ex73_out);
    });
    it("ex74_in ->  ex74_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex74_in), ex74_out);
    });
    it("ex75_in ->  ex75_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex75_in), ex75_out);
    });
    it("ex76_in ->  ex76_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex76_in), ex76_out);
    });
    it("ex77_in ->  ex77_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex77_in), ex77_out);
    });
    it("ex8_in ->  ex8_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex8_in), ex8_out);
    });
    it("ex9_in ->.  ex9_out", function () {
        chai_1.assert.deepEqual(xTree_1.xTree(ex9_in), ex9_out);
    });
});
