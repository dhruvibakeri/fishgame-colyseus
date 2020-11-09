"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var xBoard_1 = require("../executables/xBoard/xBoard");
var ex1_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ]
};
var ex1_out = 1;
var ex10_in = {
    "board": [
        [2, 0, 0],
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
        [0, 0, 2]
    ],
    "position": [2, 1]
};
var ex10_out = 6;
var ex100_in = {
    "board": [
        [1, 2, 2, 0, 3],
        [0, 3, 2, 5, 0],
        [2, 5, 4, 0, 1],
        [5, 5, 1, 3, 5],
        [0, 5, 4, 0, 1]
    ],
    "position": [2, 1]
};
var ex100_out = 7;
var ex101_in = {
    "board": [
        [1, 4, 4, 0, 1, 3, 2, 2],
        [2, 0, 2, 4, 5, 3, 5, 0],
        [5, 2, 4, 3, 0, 2, 0, 1]
    ],
    "position": [1, 3]
};
var ex101_out = 2;
var ex102_in = {
    "position": [0, 0],
    "board": [
        [1, 1, 1],
        [0, 0, 0]
    ]
};
var ex102_out = 0;
var ex103_in = {
    "position": [0, 4],
    "board": [
        [1, 2, 3, 2, 3],
        [0, 0, 2, 1, 1],
        [1, 0, 0, 2, 2],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
};
var ex103_out = 4;
var ex104_in = {
    "position": [0, 0],
    "board": [
        [1]
    ]
};
var ex104_out = 0;
var ex105_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ]
};
var ex105_out = 1;
var ex106_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex106_out = 3;
var ex107_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 5],
        [0, 3, 3],
        [1, 0, 0]
    ]
};
var ex107_out = 1;
var ex108_in = {
    "position": [2, 3],
    "board": [
        [1, 0, 1, 0],
        [0, 3, 3, 2],
        [1, 0, 0, 5]
    ]
};
var ex108_out = 3;
var ex109_in = {
    "position": [2, 0],
    "board": [
        [0, 3, 0, 0],
        [1, 0],
        [1, 2, 3]
    ]
};
var ex109_out = 2;
var ex11_in = {
    "position": [0, 4],
    "board": [
        [1, 2, 3, 5, 5],
        [4, 0, 5, 2],
        [1, 1, 0]
    ]
};
var ex11_out = 1;
var ex110_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ]
};
var ex110_out = 1;
var ex111_in = {
    "board": [
        [0, 1, 2, 3, 4],
        [2, 3, 4, 5],
        [1, 2, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    "position": [1, 1]
};
var ex111_out = 3;
var ex112_in = {
    "board": [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 0]
    ],
    "position": [0, 0]
};
var ex112_out = 1;
var ex113_in = {
    "position": [0, 2],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex113_out = 1;
var ex114_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 0, 0]
    ]
};
var ex114_out = 2;
var ex115_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex115_out = 3;
var ex116_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ]
};
var ex116_out = 1;
var ex117_in = {
    "position": [1, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex117_out = 4;
var ex118_in = {
    "position": [1, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0],
        [1, 1, 1]
    ]
};
var ex118_out = 6;
var ex119_in = {
    "board": [
        [1, 1, 1, 1],
        [2, 1, 3, 3],
        [5, 3, 0, 5],
        [1, 1, 1, 1],
        [4, 5, 5, 1]
    ],
    "position": [0, 0]
};
var ex119_out = 6;
var ex12_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex12_out = 3;
var ex120_in = {
    "board": [
        [1, 1, 1, 1],
        [2, 1, 3, 3],
        [5, 3, 0, 5],
        [1, 1, 1, 1],
        [4, 5, 5, 1]
    ],
    "position": [2, 1]
};
var ex120_out = 10;
var ex121_in = {
    "board": [
        [1, 1, 1, 1],
        [2, 1, 3, 3],
        [5, 3, 0, 5],
        [1, 1, 1, 1],
        [4, 5, 5, 1]
    ],
    "position": [4, 2]
};
var ex121_out = 7;
var ex122_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ]
};
var ex122_out = 1;
var ex123_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex123_out = 3;
var ex124_in = {
    "position": [0, 0],
    "board": [
        [1, 0],
        [3, 4],
        [2, 4],
        [2, 3],
        [0, 1]
    ]
};
var ex124_out = 4;
var ex125_in = {
    "position": [2, 1],
    "board": [
        [1, 1, 1],
        [0, 1, 1],
        [0, 2, 0],
        [1, 1, 0],
        [2, 0, 5]
    ]
};
var ex125_out = 7;
var ex126_in = {
    "position": [2, 1],
    "board": [
        [0, 0, 1],
        [1, 1, 1],
        [0, 2, 0],
        [1, 0, 0],
        [1, 1, 4]
    ]
};
var ex126_out = 6;
var ex127_in = {
    "position": [2, 2],
    "board": [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
};
var ex127_out = 4;
var ex128_in = {
    "position": [2, 2],
    "board": [
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 1]
    ]
};
var ex128_out = 0;
var ex129_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex129_out = 3;
var ex13_in = {
    "position": [0, 2],
    "board": [
        [1, 2, 3, 0],
        [4, 0, 0, 5],
        [1, 1, 0, 1]
    ]
};
var ex13_out = 0;
var ex130_in = {
    "position": [1, 2],
    "board": [
        [1, 2, 0],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex130_out = 0;
var ex131_in = {
    "position": [2, 2],
    "board": [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5]
    ]
};
var ex131_out = 10;
var ex132_in = {
    "position": [0, 0],
    "board": [
        [1, 0, 0],
        [0, 0, 0]
    ]
};
var ex132_out = 0;
var ex133_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex133_out = 3;
var ex134_in = {
    "position": [2, 3],
    "board": [
        [1, 2, 3, 1, 2],
        [4, 0, 5, 2, 3],
        [1, 2, 3, 1, 2],
        [4, 1, 5, 3, 4],
        [1, 2, 3, 4, 3]
    ]
};
var ex134_out = 10;
var ex14_in = {
    "position": [2, 2],
    "board": [
        [1, 2, 3],
        [4, 1, 1, 5],
        [1, 1, 2, 1],
        [1, 0, 5, 1],
        [1, 1, 1, 0]
    ]
};
var ex14_out = 6;
var ex15_in = {
    "position": [3, 1],
    "board": [
        [0, 2, 3, 3],
        [1, 1, 0, 4],
        [0, 2, 4, 2],
        [3, 5, 0, 4],
        [1, 2, 3, 3],
        [0, 2, 4, 4]
    ]
};
var ex15_out = 8;
var ex16_in = {
    "position": [2, 2],
    "board": [
        [1, 2, 0],
        [1, 4, 4, 4],
        [0, 2, 5, 2],
        [3, 4, 2, 4],
        [1, 2, 0, 0],
        [0, 2, 4, 3]
    ]
};
var ex16_out = 6;
var ex17_in = {
    "position": [0, 0],
    "board": [
        [1]
    ]
};
var ex17_out = 0;
var ex18_in = {
    "board": [
        [5, 2, 1, 0],
        [4, 0]
    ],
    "position": [0, 1]
};
var ex18_out = 1;
var ex19_in = {
    "board": [
        [1, 2, 0, 4, 5],
        [1, 0, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5]
    ],
    "position": [2, 2]
};
var ex19_out = 7;
var ex2_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex2_out = 3;
var ex20_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ],
    "position": [0, 0]
};
var ex20_out = 1;
var ex21_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [1, 0]
};
var ex21_out = 4;
var ex22_in = {
    "board": [
        [1, 0, 0],
        [0, 0, 0]
    ],
    "position": [0, 0]
};
var ex22_out = 0;
var ex23_in = {
    "board": [
        [1, 2, 3, 4, 5],
        [1, 4, 0, 5],
        [3, 5, 4, 3, 2, 1],
        [4, 2, 4]
    ],
    "position": [0, 4]
};
var ex23_out = 4;
var ex24_in = {
    "board": [
        [0, 0],
        [1, 2, 3, 4, 4, 5, 2, 1],
        [0, 0, 0]
    ],
    "position": [1, 0]
};
var ex24_out = 0;
var ex25_in = {
    "board": [
        [4, 2, 4],
        [1, 3, 2],
        [2, 0, 2],
        [2, 2, 1],
        [4, 2, 4],
        [0, 3, 4],
        [2, 4, 2],
        [3, 4, 1]
    ],
    "position": [4, 1]
};
var ex25_out = 9;
var ex26_in = {
    "position": [0, 0],
    "board": [
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        [0],
        [0],
        [1],
        [0],
        [1],
        [0]
    ]
};
var ex26_out = 2;
var ex27_in = {
    "position": [0, 0],
    "board": [
        [3, 2, 2],
        [3, 0, 5],
        [0, 3, 0],
        [1, 0, 5],
        [1, 2, 3]
    ]
};
var ex27_out = 2;
var ex28_in = {
    "position": [4, 1],
    "board": [
        [1, 1],
        [1, 1],
        [1, 0],
        [0, 0],
        [1, 1],
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 1],
        [1, 1]
    ]
};
var ex28_out = 0;
var ex29_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex29_out = 3;
var ex3_in = {
    "position": [0, 0],
    "board": [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
};
var ex3_out = 0;
var ex30_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0],
        [0, 0, 0],
        [1, 0, 0]
    ]
};
var ex30_out = 4;
var ex31_in = {
    "position": [0, 0],
    "board": [
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
    ]
};
var ex31_out = 2;
var ex32_in = {
    "position": [1, 1],
    "board": [
        [1, 2, 3],
        [0, 1, 2],
        [5, 1, 2]
    ]
};
var ex32_out = 4;
var ex33_in = {
    "position": [1, 2],
    "board": [
        [1, 2, 3, 5, 5],
        [4, 0, 5, 2],
        [1, 1, 0]
    ]
};
var ex33_out = 2;
var ex34_in = {
    "position": [2, 3],
    "board": [
        [1, 0, 3, 4],
        [1, 0, 2, 0],
        [5, 5, 5, 5],
        [1, 2, 3, 4]
    ]
};
var ex34_out = 5;
var ex35_in = {
    "position": [2, 2],
    "board": [
        [1, 3, 2, 4, 5],
        [1, 1, 1, 4],
        [3, 0, 1, 2, 5],
        [4, 4, 0, 2, 4],
        [1, 2, 0, 4, 5]
    ]
};
var ex35_out = 7;
var ex36_in = {
    "position": [0, 0],
    "board": [
        [1, 3],
        [0, 0, 0, 0],
        [3, 0, 1, 2, 5]
    ]
};
var ex36_out = 1;
var ex37_in = {
    "position": [2, 3],
    "board": [
        [0, 0, 2, 4, 5],
        [1, 1, 1, 4],
        [3, 0, 0, 5],
        [4, 4, 3, 2],
        [1, 2, 1, 4, 5]
    ]
};
var ex37_out = 10;
var ex38_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ]
};
var ex38_out = 1;
var ex39_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [0, 0]
};
var ex39_out = 3;
var ex4_in = {
    "position": [3, 3],
    "board": [
        [5, 0, 1, 4, 5],
        [5, 2, 2, 3, 2],
        [5, 4, 4, 3, 1],
        [2, 1, 4, 5, 0],
        [5, 4, 3, 3, 1]
    ]
};
var ex4_out = 8;
var ex40_in = {
    "board": [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    "position": [0, 0]
};
var ex40_out = 0;
var ex41_in = {
    "board": [
        [1, 2, 3],
        [4, 5, 1],
        [3, 2, 1]
    ],
    "position": [2, 1]
};
var ex41_out = 5;
var ex42_in = {
    "position": [3, 1],
    "board": [
        [1, 0, 4],
        [2, 4, 5],
        [5, 0, 1],
        [0, 1, 5]
    ]
};
var ex42_out = 3;
var ex43_in = {
    "board": [
        [1, 0, 3],
        [0, 0, 5],
        [1, 1, 2],
        [0, 0, 2],
        [1, 0, 3]
    ],
    "position": [2, 1]
};
var ex43_out = 0;
var ex44_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [0, 0]
};
var ex44_out = 3;
var ex45_in = {
    "board": [
        [1, 2, 3],
        [4, 3, 5],
        [1, 1, 2],
        [5, 3, 2],
        [1, 2, 3]
    ],
    "position": [2, 1]
};
var ex45_out = 10;
var ex46_in = {
    "position": [1, 1],
    "board": [
        [1, 0],
        [2, 4],
        [0, 2],
        [5, 5],
        [0, 0]
    ]
};
var ex46_out = 3;
var ex47_in = {
    "position": [1, 1],
    "board": [
        [1, 1, 1],
        [2, 4, 4],
        [0, 2, 0],
        [5, 5, 2]
    ]
};
var ex47_out = 5;
var ex48_in = {
    "position": [0, 0],
    "board": [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
};
var ex48_out = 0;
var ex49_in = {
    "position": [2, 2],
    "board": [
        [1, 2, 3, 4, 5],
        [5, 4, 3, 2, 1],
        [1, 2, 3, 4, 5],
        [5, 4, 3, 2, 1],
        [1, 2, 3, 4, 5]
    ]
};
var ex49_out = 10;
var ex5_in = {
    "position": [1, 1],
    "board": [
        [5, 0],
        [5, 2]
    ]
};
var ex5_out = 0;
var ex50_in = {
    "position": [0, 2],
    "board": [
        [1, 2, 3],
        [4, 0]
    ]
};
var ex50_out = 0;
var ex51_in = {
    "position": [2, 1],
    "board": [
        [1, 2, 3],
        [4, 2, 5],
        [1, 1, 0]
    ]
};
var ex51_out = 5;
var ex52_in = {
    "position": [1, 2],
    "board": [
        [1, 3, 1, 0],
        [4, 0, 1, 2],
        [2, 5]
    ]
};
var ex52_out = 1;
var ex53_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ],
    "position": [0, 0]
};
var ex53_out = 1;
var ex54_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [2, 1]
};
var ex54_out = 3;
var ex55_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 0],
        [1, 1, 0],
        [1, 2, 3],
        [4, 1, 5],
        [1, 1, 2]
    ],
    "position": [0, 2]
};
var ex55_out = 0;
var ex56_in = {
    "board": [
        [1],
        [1, 2, 2],
        [3, 3, 3, 3, 3],
        [1],
        [1]
    ],
    "position": [2, 3]
};
var ex56_out = 1;
var ex57_in = {
    "board": [
        [3, 3, 3],
        [4, 1, 5],
        [1, 1, 0],
        [1, 1, 1]
    ],
    "position": [1, 0]
};
var ex57_out = 6;
var ex58_in = {
    "board": [
        [1, 1, 1],
        [0, 0, 1],
        [1, 0, 4]
    ],
    "position": [0, 1]
};
var ex58_out = 0;
var ex59_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0],
        [5, 5, 5],
        [1, 0, 1]
    ]
};
var ex59_out = 6;
var ex6_in = {
    "position": [1, 0],
    "board": [
        [0, 1, 3],
        [1, 3, 3],
        [0, 3, 1]
    ]
};
var ex6_out = 2;
var ex60_in = {
    "position": [2, 2],
    "board": [
        [0, 2, 3, 4, 5],
        [1, 0, 3, 4, 5],
        [1, 2, 3, 0, 5],
        [1, 2, 3, 4, 0]
    ]
};
var ex60_out = 5;
var ex61_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3, 2, 3, 4, 1, 2, 3, 1, 3, 4, 1, 2, 3, 4, 1, 2, 5, 5, 2, 5, 4, 3, 4]
    ]
};
var ex61_out = 0;
var ex62_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ],
    "position": [0, 0]
};
var ex62_out = 1;
var ex63_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [0, 0]
};
var ex63_out = 3;
var ex64_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [1, 0]
};
var ex64_out = 4;
var ex65_in = {
    "position": [0, 0],
    "board": [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
};
var ex65_out = 3;
var ex66_in = {
    "position": [0, 0],
    "board": [
        [1, 0],
        [0, 0]
    ]
};
var ex66_out = 0;
var ex67_in = {
    "position": [1, 1],
    "board": [
        [1],
        [1, 2],
        [1, 0, 1]
    ]
};
var ex67_out = 1;
var ex68_in = {
    "position": [2, 2],
    "board": [
        [1, 5, 3, 2, 0],
        [4, 0, 2, 1, 4],
        [3, 0, 1, 4, 0],
        [2, 1, 1, 5, 2],
        [1, 0, 0, 1, 2]
    ]
};
var ex68_out = 6;
var ex69_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex69_out = 3;
var ex7_in = {
    "position": [0, 1],
    "board": [
        [1, 1, 1],
        [0, 0, 3],
        [0, 0, 0]
    ]
};
var ex7_out = 0;
var ex70_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [0, 2]
};
var ex70_out = 1;
var ex71_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [0, 0]
};
var ex71_out = 3;
var ex72_in = {
    "board": [
        [1, 2, 3],
        [0, 0, 5],
        [1, 1, 0]
    ],
    "position": [0, 0]
};
var ex72_out = 1;
var ex73_in = {
    "position": [0, 1],
    "board": [
        [2, 1, 4],
        [1, 5, 0]
    ]
};
var ex73_out = 2;
var ex74_in = {
    "position": [2, 2],
    "board": [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
    ]
};
var ex74_out = 1;
var ex75_in = {
    "position": [0, 2],
    "board": [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
    ]
};
var ex75_out = 10;
var ex76_in = {
    "board": [
        [1, 1, 1],
        [1, 1, 1],
        [1, 0, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    "position": [4, 1]
};
var ex76_out = 0;
var ex77_in = {
    "board": [
        [1]
    ],
    "position": [0, 0]
};
var ex77_out = 0;
var ex78_in = {
    "board": [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ],
    "position": [5, 1]
};
var ex78_out = 8;
var ex79_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ]
};
var ex79_out = 1;
var ex8_in = {
    "position": [1, 1],
    "board": [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
};
var ex8_out = 4;
var ex80_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex80_out = 3;
var ex81_in = {
    "position": [3, 0],
    "board": [
        [4, 2, 1, 5],
        [0, 0, 0, 0],
        [4, 0, 5, 1],
        [1, 1, 1, 0]
    ]
};
var ex81_out = 1;
var ex82_in = {
    "position": [1, 2],
    "board": [
        [2, 0, 1, 2],
        [0, 3, 3, 4],
        [1, 0, 2, 4]
    ]
};
var ex82_out = 4;
var ex83_in = {
    "position": [2, 1],
    "board": [
        [4, 0, 3],
        [0, 0, 2],
        [1, 4, 5],
        [0, 0, 4],
        [2, 0, 3]
    ]
};
var ex83_out = 0;
var ex84_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ]
};
var ex84_out = 3;
var ex85_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ]
};
var ex85_out = 1;
var ex86_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 0]
    ]
};
var ex86_out = 2;
var ex87_in = {
    "position": [0, 0],
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ]
};
var ex87_out = 1;
var ex88_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [0, 0]
};
var ex88_out = 3;
var ex89_in = {
    "position": [1, 2],
    "board": [
        [1, 1, 1],
        [1, 3, 5],
        [0, 3, 0]
    ]
};
var ex89_out = 1;
var ex9_in = {
    "board": [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ],
    "position": [3, 0]
};
var ex9_out = 9;
var ex90_in = {
    "board": [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ],
    "position": [1, 1]
};
var ex90_out = 0;
var ex91_in = {
    "board": [
        [1, 2, 3],
        [4, 1, 5],
        [4, 1, 5],
        [4, 1, 5]
    ],
    "position": [0, 1]
};
var ex91_out = 6;
var ex92_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [2, 1]
};
var ex92_out = 3;
var ex93_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5]
    ],
    "position": [0, 0]
};
var ex93_out = 1;
var ex94_in = {
    "board": [
        [1, 2, 3],
        [4, 0, 5],
        [1, 1, 0]
    ],
    "position": [0, 0]
};
var ex94_out = 3;
var ex95_in = {
    "position": [0, 0],
    "board": [
        [1]
    ]
};
var ex95_out = 0;
var ex96_in = {
    "position": [0, 0],
    "board": [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 1, 1]
    ]
};
var ex96_out = 2;
var ex97_in = {
    "position": [1, 0],
    "board": [
        [1, 2, 3, 2],
        [1, 3, 0, 4],
        [2, 5, 1, 3],
        [3, 0, 4, 2]
    ]
};
var ex97_out = 5;
var ex98_in = {
    "position": [2, 2],
    "board": [
        [1, 2, 3, 2],
        [1, 3, 0, 4],
        [2, 5, 1, 3],
        [3, 0, 4, 2],
        [2, 3, 0, 5],
        [1, 1, 1, 1]
    ]
};
var ex98_out = 6;
var ex99_in = {
    "board": [
        [0, 4, 3, 2],
        [5, 2, 0, 3],
        [3, 3, 2, 5],
        [0, 5, 2, 3],
        [3, 5, 0, 4],
        [4, 5, 1, 5]
    ],
    "position": [3, 2]
};
var ex99_out = 8;
describe("Milestone 3 test fest", function () {
    it("ex1_in --> ex1_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex1_in), ex1_out);
    });
    it("ex10_in --> ex10_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex10_in), ex10_out);
    });
    it("ex100_in --> ex100_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex100_in), ex100_out);
    });
    it("ex101_in --> ex101_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex101_in), ex101_out);
    });
    it("ex102_in --> ex102_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex102_in), ex102_out);
    });
    it("ex103_in --> ex103_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex103_in), ex103_out);
    });
    it("ex104_in --> ex104_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex104_in), ex104_out);
    });
    it("ex105_in --> ex105_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex105_in), ex105_out);
    });
    it("ex106_in --> ex106_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex106_in), ex106_out);
    });
    it("ex107_in --> ex107_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex107_in), ex107_out);
    });
    it("ex108_in --> ex108_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex108_in), ex108_out);
    });
    it("ex109_in --> ex109_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex109_in), ex109_out);
    });
    it("ex11_in --> ex11_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex11_in), ex11_out);
    });
    it("ex110_in --> ex110_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex110_in), ex110_out);
    });
    it("ex111_in --> ex111_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex111_in), ex111_out);
    });
    it("ex112_in --> ex112_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex112_in), ex112_out);
    });
    it("ex113_in --> ex113_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex113_in), ex113_out);
    });
    it("ex114_in --> ex114_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex114_in), ex114_out);
    });
    it("ex115_in --> ex115_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex115_in), ex115_out);
    });
    it("ex116_in --> ex116_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex116_in), ex116_out);
    });
    it("ex117_in --> ex117_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex117_in), ex117_out);
    });
    it("ex118_in --> ex118_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex118_in), ex118_out);
    });
    it("ex119_in --> ex119_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex119_in), ex119_out);
    });
    it("ex12_in --> ex12_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex12_in), ex12_out);
    });
    it("ex120_in --> ex120_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex120_in), ex120_out);
    });
    it("ex121_in --> ex121_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex121_in), ex121_out);
    });
    it("ex122_in --> ex122_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex122_in), ex122_out);
    });
    it("ex123_in --> ex123_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex123_in), ex123_out);
    });
    it("ex124_in --> ex124_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex124_in), ex124_out);
    });
    it("ex125_in --> ex125_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex125_in), ex125_out);
    });
    it("ex126_in --> ex126_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex126_in), ex126_out);
    });
    it("ex127_in --> ex127_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex127_in), ex127_out);
    });
    it("ex128_in --> ex128_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex128_in), ex128_out);
    });
    it("ex129_in --> ex129_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex129_in), ex129_out);
    });
    it("ex13_in --> ex13_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex13_in), ex13_out);
    });
    it("ex130_in --> ex130_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex130_in), ex130_out);
    });
    it("ex131_in --> ex131_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex131_in), ex131_out);
    });
    it("ex132_in --> ex132_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex132_in), ex132_out);
    });
    it("ex133_in --> ex133_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex133_in), ex133_out);
    });
    it("ex134_in --> ex134_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex134_in), ex134_out);
    });
    it("ex14_in --> ex14_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex14_in), ex14_out);
    });
    it("ex15_in --> ex15_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex15_in), ex15_out);
    });
    it("ex16_in --> ex16_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex16_in), ex16_out);
    });
    it("ex17_in --> ex17_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex17_in), ex17_out);
    });
    it("ex18_in --> ex18_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex18_in), ex18_out);
    });
    it("ex19_in --> ex19_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex19_in), ex19_out);
    });
    it("ex2_in --> ex2_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex2_in), ex2_out);
    });
    it("ex20_in --> ex20_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex20_in), ex20_out);
    });
    it("ex21_in --> ex21_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex21_in), ex21_out);
    });
    it("ex22_in --> ex22_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex22_in), ex22_out);
    });
    it("ex23_in --> ex23_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex23_in), ex23_out);
    });
    it("ex24_in --> ex24_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex24_in), ex24_out);
    });
    it("ex25_in --> ex25_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex25_in), ex25_out);
    });
    it("ex26_in --> ex26_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex26_in), ex26_out);
    });
    it("ex27_in --> ex27_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex27_in), ex27_out);
    });
    it("ex28_in --> ex28_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex28_in), ex28_out);
    });
    it("ex29_in --> ex29_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex29_in), ex29_out);
    });
    it("ex3_in --> ex3_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex3_in), ex3_out);
    });
    it("ex30_in --> ex30_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex30_in), ex30_out);
    });
    it("ex31_in --> ex31_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex31_in), ex31_out);
    });
    it("ex32_in --> ex32_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex32_in), ex32_out);
    });
    it("ex33_in --> ex33_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex33_in), ex33_out);
    });
    it("ex34_in --> ex34_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex34_in), ex34_out);
    });
    it("ex35_in --> ex35_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex35_in), ex35_out);
    });
    it("ex36_in --> ex36_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex36_in), ex36_out);
    });
    it("ex37_in --> ex37_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex37_in), ex37_out);
    });
    it("ex38_in --> ex38_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex38_in), ex38_out);
    });
    it("ex39_in --> ex39_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex39_in), ex39_out);
    });
    it("ex4_in --> ex4_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex4_in), ex4_out);
    });
    it("ex40_in --> ex40_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex40_in), ex40_out);
    });
    it("ex41_in --> ex41_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex41_in), ex41_out);
    });
    it("ex42_in --> ex42_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex42_in), ex42_out);
    });
    it("ex43_in --> ex43_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex43_in), ex43_out);
    });
    it("ex44_in --> ex44_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex44_in), ex44_out);
    });
    it("ex45_in --> ex45_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex45_in), ex45_out);
    });
    it("ex46_in --> ex46_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex46_in), ex46_out);
    });
    it("ex47_in --> ex47_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex47_in), ex47_out);
    });
    it("ex48_in --> ex48_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex48_in), ex48_out);
    });
    it("ex49_in --> ex49_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex49_in), ex49_out);
    });
    it("ex5_in --> ex5_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex5_in), ex5_out);
    });
    it("ex50_in --> ex50_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex50_in), ex50_out);
    });
    it("ex51_in --> ex51_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex51_in), ex51_out);
    });
    it("ex52_in --> ex52_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex52_in), ex52_out);
    });
    it("ex53_in --> ex53_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex53_in), ex53_out);
    });
    it("ex54_in --> ex54_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex54_in), ex54_out);
    });
    it("ex55_in --> ex55_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex55_in), ex55_out);
    });
    it("ex56_in --> ex56_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex56_in), ex56_out);
    });
    it("ex57_in --> ex57_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex57_in), ex57_out);
    });
    it("ex58_in --> ex58_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex58_in), ex58_out);
    });
    it("ex59_in --> ex59_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex59_in), ex59_out);
    });
    it("ex6_in --> ex6_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex6_in), ex6_out);
    });
    it("ex60_in --> ex60_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex60_in), ex60_out);
    });
    it("ex61_in --> ex61_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex61_in), ex61_out);
    });
    it("ex62_in --> ex62_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex62_in), ex62_out);
    });
    it("ex63_in --> ex63_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex63_in), ex63_out);
    });
    it("ex64_in --> ex64_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex64_in), ex64_out);
    });
    it("ex65_in --> ex65_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex65_in), ex65_out);
    });
    it("ex66_in --> ex66_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex66_in), ex66_out);
    });
    it("ex67_in --> ex67_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex67_in), ex67_out);
    });
    it("ex68_in --> ex68_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex68_in), ex68_out);
    });
    it("ex69_in --> ex69_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex69_in), ex69_out);
    });
    it("ex7_in --> ex7_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex7_in), ex7_out);
    });
    it("ex70_in --> ex70_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex70_in), ex70_out);
    });
    it("ex71_in --> ex71_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex71_in), ex71_out);
    });
    it("ex72_in --> ex72_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex72_in), ex72_out);
    });
    it("ex73_in --> ex73_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex73_in), ex73_out);
    });
    it("ex74_in --> ex74_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex74_in), ex74_out);
    });
    it("ex75_in --> ex75_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex75_in), ex75_out);
    });
    it("ex76_in --> ex76_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex76_in), ex76_out);
    });
    it("ex77_in --> ex77_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex77_in), ex77_out);
    });
    it("ex78_in --> ex78_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex78_in), ex78_out);
    });
    it("ex79_in --> ex79_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex79_in), ex79_out);
    });
    it("ex8_in --> ex8_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex8_in), ex8_out);
    });
    it("ex80_in --> ex80_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex80_in), ex80_out);
    });
    it("ex81_in --> ex81_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex81_in), ex81_out);
    });
    it("ex82_in --> ex82_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex82_in), ex82_out);
    });
    it("ex83_in --> ex83_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex83_in), ex83_out);
    });
    it("ex84_in --> ex84_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex84_in), ex84_out);
    });
    it("ex85_in --> ex85_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex85_in), ex85_out);
    });
    it("ex86_in --> ex86_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex86_in), ex86_out);
    });
    it("ex87_in --> ex87_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex87_in), ex87_out);
    });
    it("ex88_in --> ex88_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex88_in), ex88_out);
    });
    it("ex89_in --> ex89_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex89_in), ex89_out);
    });
    it("ex9_in --> ex9_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex9_in), ex9_out);
    });
    it("ex90_in --> ex90_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex90_in), ex90_out);
    });
    it("ex91_in --> ex91_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex91_in), ex91_out);
    });
    it("ex92_in --> ex92_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex92_in), ex92_out);
    });
    it("ex93_in --> ex93_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex93_in), ex93_out);
    });
    it("ex94_in --> ex94_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex94_in), ex94_out);
    });
    it("ex95_in --> ex95_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex95_in), ex95_out);
    });
    it("ex96_in --> ex96_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex96_in), ex96_out);
    });
    it("ex97_in --> ex97_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex97_in), ex97_out);
    });
    it("ex98_in --> ex98_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex98_in), ex98_out);
    });
    it("ex99_in --> ex99_out", function () {
        chai_1.assert.deepEqual(xBoard_1.xBoard(ex99_in), ex99_out);
    });
});
