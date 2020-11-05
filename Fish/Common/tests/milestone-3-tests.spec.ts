import {
  InputBoardPosn
} from "../states/input-state/input-state-data-definition";

import {
  assert
} from 'chai';

import {
  xBoard
} from "../executables/xBoard";

const ex1_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ]
}
const ex1_out: number = 1


const ex10_in: InputBoardPosn = {
  "board": [
    [2, 0, 0],
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
    [0, 0, 2]
  ],
  "position": [2, 1]
}
const ex10_out: number = 6


const ex100_in: InputBoardPosn = {
  "board": [
    [1, 2, 2, 0, 3],
    [0, 3, 2, 5, 0],
    [2, 5, 4, 0, 1],
    [5, 5, 1, 3, 5],
    [0, 5, 4, 0, 1]
  ],
  "position": [2, 1]
}
const ex100_out: number = 7


const ex101_in: InputBoardPosn = {
  "board": [
    [1, 4, 4, 0, 1, 3, 2, 2],
    [2, 0, 2, 4, 5, 3, 5, 0],
    [5, 2, 4, 3, 0, 2, 0, 1]
  ],
  "position": [1, 3]
}
const ex101_out: number = 2


const ex102_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 1, 1],
    [0, 0, 0]
  ]
}
const ex102_out: number = 0


const ex103_in: InputBoardPosn = {
  "position": [0, 4],
  "board": [
    [1, 2, 3, 2, 3],
    [0, 0, 2, 1, 1],
    [1, 0, 0, 2, 2],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]
}
const ex103_out: number = 4


const ex104_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1]
  ]
}
const ex104_out: number = 0


const ex105_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ]
}
const ex105_out: number = 1


const ex106_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex106_out: number = 3


const ex107_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 5],
    [0, 3, 3],
    [1, 0, 0]
  ]
}
const ex107_out: number = 1


const ex108_in: InputBoardPosn = {
  "position": [2, 3],
  "board": [
    [1, 0, 1, 0],
    [0, 3, 3, 2],
    [1, 0, 0, 5]
  ]
}
const ex108_out: number = 3


const ex109_in: InputBoardPosn = {
  "position": [2, 0],
  "board": [
    [0, 3, 0, 0],
    [1, 0],
    [1, 2, 3]
  ]
}
const ex109_out: number = 2


const ex11_in: InputBoardPosn = {
  "position": [0, 4],
  "board": [
    [1, 2, 3, 5, 5],
    [4, 0, 5, 2],
    [1, 1, 0]
  ]
}
const ex11_out: number = 1


const ex110_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ]
}
const ex110_out: number = 1


const ex111_in: InputBoardPosn = {
  "board": [
    [0, 1, 2, 3, 4],
    [2, 3, 4, 5],
    [1, 2, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  "position": [1, 1]
}
const ex111_out: number = 3


const ex112_in: InputBoardPosn = {
  "board": [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 2, 0]
  ],
  "position": [0, 0]
}
const ex112_out: number = 1


const ex113_in: InputBoardPosn = {
  "position": [0, 2],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex113_out: number = 1


const ex114_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 0, 0]
  ]
}
const ex114_out: number = 2


const ex115_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex115_out: number = 3


const ex116_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ]
}
const ex116_out: number = 1


const ex117_in: InputBoardPosn = {
  "position": [1, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex117_out: number = 4


const ex118_in: InputBoardPosn = {
  "position": [1, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0],
    [1, 1, 1]
  ]
}
const ex118_out: number = 6


const ex119_in: InputBoardPosn = {
  "board": [
    [1, 1, 1, 1],
    [2, 1, 3, 3],
    [5, 3, 0, 5],
    [1, 1, 1, 1],
    [4, 5, 5, 1]
  ],
  "position": [0, 0]
}
const ex119_out: number = 6


const ex12_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex12_out: number = 3


const ex120_in: InputBoardPosn = {
  "board": [
    [1, 1, 1, 1],
    [2, 1, 3, 3],
    [5, 3, 0, 5],
    [1, 1, 1, 1],
    [4, 5, 5, 1]
  ],
  "position": [2, 1]
}
const ex120_out: number = 10


const ex121_in: InputBoardPosn = {
  "board": [
    [1, 1, 1, 1],
    [2, 1, 3, 3],
    [5, 3, 0, 5],
    [1, 1, 1, 1],
    [4, 5, 5, 1]
  ],
  "position": [4, 2]
}
const ex121_out: number = 7


const ex122_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ]
}
const ex122_out: number = 1


const ex123_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex123_out: number = 3


const ex124_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 0],
    [3, 4],
    [2, 4],
    [2, 3],
    [0, 1]
  ]
}
const ex124_out: number = 4


const ex125_in: InputBoardPosn = {
  "position": [2, 1],
  "board": [
    [1, 1, 1],
    [0, 1, 1],
    [0, 2, 0],
    [1, 1, 0],
    [2, 0, 5]
  ]
}
const ex125_out: number = 7


const ex126_in: InputBoardPosn = {
  "position": [2, 1],
  "board": [
    [0, 0, 1],
    [1, 1, 1],
    [0, 2, 0],
    [1, 0, 0],
    [1, 1, 4]
  ]
}
const ex126_out: number = 6


const ex127_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ]
}
const ex127_out: number = 4


const ex128_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [1, 1, 0],
    [1, 0, 0],
    [1, 0, 1]
  ]
}
const ex128_out: number = 0


const ex129_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex129_out: number = 3


const ex13_in: InputBoardPosn = {
  "position": [0, 2],
  "board": [
    [1, 2, 3, 0],
    [4, 0, 0, 5],
    [1, 1, 0, 1]
  ]
}
const ex13_out: number = 0


const ex130_in: InputBoardPosn = {
  "position": [1, 2],
  "board": [
    [1, 2, 0],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex130_out: number = 0


const ex131_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
  ]
}
const ex131_out: number = 10


const ex132_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 0, 0],
    [0, 0, 0]
  ]
}
const ex132_out: number = 0


const ex133_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex133_out: number = 3


const ex134_in: InputBoardPosn = {
  "position": [2, 3],
  "board": [
    [1, 2, 3, 1, 2],
    [4, 0, 5, 2, 3],
    [1, 2, 3, 1, 2],
    [4, 1, 5, 3, 4],
    [1, 2, 3, 4, 3]
  ]
}
const ex134_out: number = 10


const ex14_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [1, 2, 3],
    [4, 1, 1, 5],
    [1, 1, 2, 1],
    [1, 0, 5, 1],
    [1, 1, 1, 0]
  ]
}
const ex14_out: number = 6


const ex15_in: InputBoardPosn = {
  "position": [3, 1],
  "board": [
    [0, 2, 3, 3],
    [1, 1, 0, 4],
    [0, 2, 4, 2],
    [3, 5, 0, 4],
    [1, 2, 3, 3],
    [0, 2, 4, 4]
  ]
}
const ex15_out: number = 8


const ex16_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [1, 2, 0],
    [1, 4, 4, 4],
    [0, 2, 5, 2],
    [3, 4, 2, 4],
    [1, 2, 0, 0],
    [0, 2, 4, 3]
  ]
}
const ex16_out: number = 6


const ex17_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1]
  ]
}
const ex17_out: number = 0


const ex18_in: InputBoardPosn = {
  "board": [
    [5, 2, 1, 0],
    [4, 0]
  ],
  "position": [0, 1]
}
const ex18_out: number = 1


const ex19_in: InputBoardPosn = {
  "board": [
    [1, 2, 0, 4, 5],
    [1, 0, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
  ],
  "position": [2, 2]
}
const ex19_out: number = 7


const ex2_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex2_out: number = 3


const ex20_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ],
  "position": [0, 0]
}
const ex20_out: number = 1


const ex21_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [1, 0]
}
const ex21_out: number = 4


const ex22_in: InputBoardPosn = {
  "board": [
    [1, 0, 0],
    [0, 0, 0]
  ],
  "position": [0, 0]
}
const ex22_out: number = 0


const ex23_in: InputBoardPosn = {
  "board": [
    [1, 2, 3, 4, 5],
    [1, 4, 0, 5],
    [3, 5, 4, 3, 2, 1],
    [4, 2, 4]
  ],
  "position": [0, 4]
}
const ex23_out: number = 4


const ex24_in: InputBoardPosn = {
  "board": [
    [0, 0],
    [1, 2, 3, 4, 4, 5, 2, 1],
    [0, 0, 0]
  ],
  "position": [1, 0]
}
const ex24_out: number = 0


const ex25_in: InputBoardPosn = {
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
}
const ex25_out: number = 9


const ex26_in: InputBoardPosn = {
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
}
const ex26_out: number = 2


const ex27_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [3, 2, 2],
    [3, 0, 5],
    [0, 3, 0],
    [1, 0, 5],
    [1, 2, 3]
  ]
}
const ex27_out: number = 2


const ex28_in: InputBoardPosn = {
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
}
const ex28_out: number = 0


const ex29_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex29_out: number = 3


const ex3_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
}
const ex3_out: number = 0


const ex30_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0],
    [0, 0, 0],
    [1, 0, 0]
  ]
}
const ex30_out: number = 4


const ex31_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
  ]
}
const ex31_out: number = 2


const ex32_in: InputBoardPosn = {
  "position": [1, 1],
  "board": [
    [1, 2, 3],
    [0, 1, 2],
    [5, 1, 2]
  ]
}
const ex32_out: number = 4


const ex33_in: InputBoardPosn = {
  "position": [1, 2],
  "board": [
    [1, 2, 3, 5, 5],
    [4, 0, 5, 2],
    [1, 1, 0]
  ]
}
const ex33_out: number = 2


const ex34_in: InputBoardPosn = {
  "position": [2, 3],
  "board": [
    [1, 0, 3, 4],
    [1, 0, 2, 0],
    [5, 5, 5, 5],
    [1, 2, 3, 4]
  ]
}
const ex34_out: number = 5


const ex35_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [1, 3, 2, 4, 5],
    [1, 1, 1, 4],
    [3, 0, 1, 2, 5],
    [4, 4, 0, 2, 4],
    [1, 2, 0, 4, 5]
  ]
}
const ex35_out: number = 7


const ex36_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 3],
    [0, 0, 0, 0],
    [3, 0, 1, 2, 5]
  ]
}
const ex36_out: number = 1


const ex37_in: InputBoardPosn = {
  "position": [2, 3],
  "board": [
    [0, 0, 2, 4, 5],
    [1, 1, 1, 4],
    [3, 0, 0, 5],
    [4, 4, 3, 2],
    [1, 2, 1, 4, 5]
  ]
}
const ex37_out: number = 10


const ex38_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ]
}
const ex38_out: number = 1


const ex39_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [0, 0]
}
const ex39_out: number = 3


const ex4_in: InputBoardPosn = {
  "position": [3, 3],
  "board": [
    [5, 0, 1, 4, 5],
    [5, 2, 2, 3, 2],
    [5, 4, 4, 3, 1],
    [2, 1, 4, 5, 0],
    [5, 4, 3, 3, 1]
  ]
}
const ex4_out: number = 8


const ex40_in: InputBoardPosn = {
  "board": [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  "position": [0, 0]
}
const ex40_out: number = 0


const ex41_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 5, 1],
    [3, 2, 1]
  ],
  "position": [2, 1]
}
const ex41_out: number = 5


const ex42_in: InputBoardPosn = {
  "position": [3, 1],
  "board": [
    [1, 0, 4],
    [2, 4, 5],
    [5, 0, 1],
    [0, 1, 5]
  ]
}
const ex42_out: number = 3


const ex43_in: InputBoardPosn = {
  "board": [
    [1, 0, 3],
    [0, 0, 5],
    [1, 1, 2],
    [0, 0, 2],
    [1, 0, 3]
  ],
  "position": [2, 1]
}
const ex43_out: number = 0


const ex44_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [0, 0]
}
const ex44_out: number = 3


const ex45_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 3, 5],
    [1, 1, 2],
    [5, 3, 2],
    [1, 2, 3]
  ],
  "position": [2, 1]
}
const ex45_out: number = 10


const ex46_in: InputBoardPosn = {
  "position": [1, 1],
  "board": [
    [1, 0],
    [2, 4],
    [0, 2],
    [5, 5],
    [0, 0]
  ]
}
const ex46_out: number = 3


const ex47_in: InputBoardPosn = {
  "position": [1, 1],
  "board": [
    [1, 1, 1],
    [2, 4, 4],
    [0, 2, 0],
    [5, 5, 2]
  ]
}
const ex47_out: number = 5


const ex48_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}
const ex48_out: number = 0


const ex49_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5]
  ]
}
const ex49_out: number = 10


const ex5_in: InputBoardPosn = {
  "position": [1, 1],
  "board": [
    [5, 0],
    [5, 2]
  ]
}
const ex5_out: number = 0


const ex50_in: InputBoardPosn = {
  "position": [0, 2],
  "board": [
    [1, 2, 3],
    [4, 0]
  ]
}
const ex50_out: number = 0


const ex51_in: InputBoardPosn = {
  "position": [2, 1],
  "board": [
    [1, 2, 3],
    [4, 2, 5],
    [1, 1, 0]
  ]
}
const ex51_out: number = 5


const ex52_in: InputBoardPosn = {
  "position": [1, 2],
  "board": [
    [1, 3, 1, 0],
    [4, 0, 1, 2],
    [2, 5]
  ]
}
const ex52_out: number = 1


const ex53_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ],
  "position": [0, 0]
}
const ex53_out: number = 1


const ex54_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [2, 1]
}
const ex54_out: number = 3


const ex55_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 0],
    [1, 1, 0],
    [1, 2, 3],
    [4, 1, 5],
    [1, 1, 2]
  ],
  "position": [0, 2]
}
const ex55_out: number = 0


const ex56_in: InputBoardPosn = {
  "board": [
    [1],
    [1, 2, 2],
    [3, 3, 3, 3, 3],
    [1],
    [1]
  ],
  "position": [2, 3]
}
const ex56_out: number = 1


const ex57_in: InputBoardPosn = {
  "board": [
    [3, 3, 3],
    [4, 1, 5],
    [1, 1, 0],
    [1, 1, 1]
  ],
  "position": [1, 0]
}
const ex57_out: number = 6


const ex58_in: InputBoardPosn = {
  "board": [
    [1, 1, 1],
    [0, 0, 1],
    [1, 0, 4]
  ],
  "position": [0, 1]
}
const ex58_out: number = 0


const ex59_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0],
    [5, 5, 5],
    [1, 0, 1]
  ]
}
const ex59_out: number = 6


const ex6_in: InputBoardPosn = {
  "position": [1, 0],
  "board": [
    [0, 1, 3],
    [1, 3, 3],
    [0, 3, 1]
  ]
}
const ex6_out: number = 2


const ex60_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [0, 2, 3, 4, 5],
    [1, 0, 3, 4, 5],
    [1, 2, 3, 0, 5],
    [1, 2, 3, 4, 0]
  ]
}
const ex60_out: number = 5


const ex61_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3, 2, 3, 4, 1, 2, 3, 1, 3, 4, 1, 2, 3, 4, 1, 2, 5, 5, 2, 5, 4, 3, 4]
  ]
}
const ex61_out: number = 0


const ex62_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ],
  "position": [0, 0]
}
const ex62_out: number = 1


const ex63_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [0, 0]
}
const ex63_out: number = 3


const ex64_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [1, 0]
}
const ex64_out: number = 4


const ex65_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ]
}
const ex65_out: number = 3


const ex66_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 0],
    [0, 0]
  ]
}
const ex66_out: number = 0


const ex67_in: InputBoardPosn = {
  "position": [1, 1],
  "board": [
    [1],
    [1, 2],
    [1, 0, 1]
  ]
}
const ex67_out: number = 1


const ex68_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [1, 5, 3, 2, 0],
    [4, 0, 2, 1, 4],
    [3, 0, 1, 4, 0],
    [2, 1, 1, 5, 2],
    [1, 0, 0, 1, 2]
  ]
}
const ex68_out: number = 6


const ex69_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex69_out: number = 3


const ex7_in: InputBoardPosn = {
  "position": [0, 1],
  "board": [
    [1, 1, 1],
    [0, 0, 3],
    [0, 0, 0]
  ]
}
const ex7_out: number = 0


const ex70_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [0, 2]
}
const ex70_out: number = 1


const ex71_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [0, 0]
}
const ex71_out: number = 3


const ex72_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [0, 0, 5],
    [1, 1, 0]
  ],
  "position": [0, 0]
}
const ex72_out: number = 1


const ex73_in: InputBoardPosn = {
  "position": [0, 1],
  "board": [
    [2, 1, 4],
    [1, 5, 0]
  ]
}
const ex73_out: number = 2


const ex74_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ]
}
const ex74_out: number = 1


const ex75_in: InputBoardPosn = {
  "position": [0, 2],
  "board": [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ]
}
const ex75_out: number = 10


const ex76_in: InputBoardPosn = {
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
}
const ex76_out: number = 0


const ex77_in: InputBoardPosn = {
  "board": [
    [1]
  ],
  "position": [0, 0]
}
const ex77_out: number = 0


const ex78_in: InputBoardPosn = {
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
}
const ex78_out: number = 8


const ex79_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ]
}
const ex79_out: number = 1


const ex8_in: InputBoardPosn = {
  "position": [1, 1],
  "board": [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ]
}
const ex8_out: number = 4


const ex80_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex80_out: number = 3


const ex81_in: InputBoardPosn = {
  "position": [3, 0],
  "board": [
    [4, 2, 1, 5],
    [0, 0, 0, 0],
    [4, 0, 5, 1],
    [1, 1, 1, 0]
  ]
}
const ex81_out: number = 1


const ex82_in: InputBoardPosn = {
  "position": [1, 2],
  "board": [
    [2, 0, 1, 2],
    [0, 3, 3, 4],
    [1, 0, 2, 4]
  ]
}
const ex82_out: number = 4


const ex83_in: InputBoardPosn = {
  "position": [2, 1],
  "board": [
    [4, 0, 3],
    [0, 0, 2],
    [1, 4, 5],
    [0, 0, 4],
    [2, 0, 3]
  ]
}
const ex83_out: number = 0


const ex84_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ]
}
const ex84_out: number = 3


const ex85_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ]
}
const ex85_out: number = 1


const ex86_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 0]
  ]
}
const ex86_out: number = 2


const ex87_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ]
}
const ex87_out: number = 1


const ex88_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [0, 0]
}
const ex88_out: number = 3


const ex89_in: InputBoardPosn = {
  "position": [1, 2],
  "board": [
    [1, 1, 1],
    [1, 3, 5],
    [0, 3, 0]
  ]
}
const ex89_out: number = 1


const ex9_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ],
  "position": [3, 0]
}
const ex9_out: number = 9


const ex90_in: InputBoardPosn = {
  "board": [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ],
  "position": [1, 1]
}
const ex90_out: number = 0


const ex91_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 1, 5],
    [4, 1, 5],
    [4, 1, 5]
  ],
  "position": [0, 1]
}
const ex91_out: number = 6


const ex92_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [2, 1]
}
const ex92_out: number = 3


const ex93_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5]
  ],
  "position": [0, 0]
}
const ex93_out: number = 1


const ex94_in: InputBoardPosn = {
  "board": [
    [1, 2, 3],
    [4, 0, 5],
    [1, 1, 0]
  ],
  "position": [0, 0]
}
const ex94_out: number = 3


const ex95_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1]
  ]
}
const ex95_out: number = 0


const ex96_in: InputBoardPosn = {
  "position": [0, 0],
  "board": [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1]
  ]
}
const ex96_out: number = 2


const ex97_in: InputBoardPosn = {
  "position": [1, 0],
  "board": [
    [1, 2, 3, 2],
    [1, 3, 0, 4],
    [2, 5, 1, 3],
    [3, 0, 4, 2]
  ]
}
const ex97_out: number = 5


const ex98_in: InputBoardPosn = {
  "position": [2, 2],
  "board": [
    [1, 2, 3, 2],
    [1, 3, 0, 4],
    [2, 5, 1, 3],
    [3, 0, 4, 2],
    [2, 3, 0, 5],
    [1, 1, 1, 1]
  ]
}
const ex98_out: number = 6


const ex99_in: InputBoardPosn = {
  "board": [
    [0, 4, 3, 2],
    [5, 2, 0, 3],
    [3, 3, 2, 5],
    [0, 5, 2, 3],
    [3, 5, 0, 4],
    [4, 5, 1, 5]
  ],
  "position": [3, 2]
}
const ex99_out: number = 8




describe("Milestone 3 test fest", () => {
  it("ex1_in --> ex1_out", () => {
    assert.deepEqual(xBoard(ex1_in), ex1_out);
  })
  it("ex10_in --> ex10_out", () => {
    assert.deepEqual(xBoard(ex10_in), ex10_out);
  })
  it("ex100_in --> ex100_out", () => {
    assert.deepEqual(xBoard(ex100_in), ex100_out);
  })
  it("ex101_in --> ex101_out", () => {
    assert.deepEqual(xBoard(ex101_in), ex101_out);
  })
  it("ex102_in --> ex102_out", () => {
    assert.deepEqual(xBoard(ex102_in), ex102_out);
  })
  it("ex103_in --> ex103_out", () => {
    assert.deepEqual(xBoard(ex103_in), ex103_out);
  })
  it("ex104_in --> ex104_out", () => {
    assert.deepEqual(xBoard(ex104_in), ex104_out);
  })
  it("ex105_in --> ex105_out", () => {
    assert.deepEqual(xBoard(ex105_in), ex105_out);
  })
  it("ex106_in --> ex106_out", () => {
    assert.deepEqual(xBoard(ex106_in), ex106_out);
  })
  it("ex107_in --> ex107_out", () => {
    assert.deepEqual(xBoard(ex107_in), ex107_out);
  })
  it("ex108_in --> ex108_out", () => {
    assert.deepEqual(xBoard(ex108_in), ex108_out);
  })
  it("ex109_in --> ex109_out", () => {
    assert.deepEqual(xBoard(ex109_in), ex109_out);
  })
  it("ex11_in --> ex11_out", () => {
    assert.deepEqual(xBoard(ex11_in), ex11_out);
  })
  it("ex110_in --> ex110_out", () => {
    assert.deepEqual(xBoard(ex110_in), ex110_out);
  })
  it("ex111_in --> ex111_out", () => {
    assert.deepEqual(xBoard(ex111_in), ex111_out);
  })
  it("ex112_in --> ex112_out", () => {
    assert.deepEqual(xBoard(ex112_in), ex112_out);
  })
  it("ex113_in --> ex113_out", () => {
    assert.deepEqual(xBoard(ex113_in), ex113_out);
  })
  it("ex114_in --> ex114_out", () => {
    assert.deepEqual(xBoard(ex114_in), ex114_out);
  })
  it("ex115_in --> ex115_out", () => {
    assert.deepEqual(xBoard(ex115_in), ex115_out);
  })
  it("ex116_in --> ex116_out", () => {
    assert.deepEqual(xBoard(ex116_in), ex116_out);
  })
  it("ex117_in --> ex117_out", () => {
    assert.deepEqual(xBoard(ex117_in), ex117_out);
  })
  it("ex118_in --> ex118_out", () => {
    assert.deepEqual(xBoard(ex118_in), ex118_out);
  })
  it("ex119_in --> ex119_out", () => {
    assert.deepEqual(xBoard(ex119_in), ex119_out);
  })
  it("ex12_in --> ex12_out", () => {
    assert.deepEqual(xBoard(ex12_in), ex12_out);
  })
  it("ex120_in --> ex120_out", () => {
    assert.deepEqual(xBoard(ex120_in), ex120_out);
  })
  it("ex121_in --> ex121_out", () => {
    assert.deepEqual(xBoard(ex121_in), ex121_out);
  })
  it("ex122_in --> ex122_out", () => {
    assert.deepEqual(xBoard(ex122_in), ex122_out);
  })
  it("ex123_in --> ex123_out", () => {
    assert.deepEqual(xBoard(ex123_in), ex123_out);
  })
  it("ex124_in --> ex124_out", () => {
    assert.deepEqual(xBoard(ex124_in), ex124_out);
  })
  it("ex125_in --> ex125_out", () => {
    assert.deepEqual(xBoard(ex125_in), ex125_out);
  })
  it("ex126_in --> ex126_out", () => {
    assert.deepEqual(xBoard(ex126_in), ex126_out);
  })
  it("ex127_in --> ex127_out", () => {
    assert.deepEqual(xBoard(ex127_in), ex127_out);
  })
  it("ex128_in --> ex128_out", () => {
    assert.deepEqual(xBoard(ex128_in), ex128_out);
  })
  it("ex129_in --> ex129_out", () => {
    assert.deepEqual(xBoard(ex129_in), ex129_out);
  })
  it("ex13_in --> ex13_out", () => {
    assert.deepEqual(xBoard(ex13_in), ex13_out);
  })
  it("ex130_in --> ex130_out", () => {
    assert.deepEqual(xBoard(ex130_in), ex130_out);
  })
  it("ex131_in --> ex131_out", () => {
    assert.deepEqual(xBoard(ex131_in), ex131_out);
  })
  it("ex132_in --> ex132_out", () => {
    assert.deepEqual(xBoard(ex132_in), ex132_out);
  })
  it("ex133_in --> ex133_out", () => {
    assert.deepEqual(xBoard(ex133_in), ex133_out);
  })
  it("ex134_in --> ex134_out", () => {
    assert.deepEqual(xBoard(ex134_in), ex134_out);
  })
  it("ex14_in --> ex14_out", () => {
    assert.deepEqual(xBoard(ex14_in), ex14_out);
  })
  it("ex15_in --> ex15_out", () => {
    assert.deepEqual(xBoard(ex15_in), ex15_out);
  })
  it("ex16_in --> ex16_out", () => {
    assert.deepEqual(xBoard(ex16_in), ex16_out);
  })
  it("ex17_in --> ex17_out", () => {
    assert.deepEqual(xBoard(ex17_in), ex17_out);
  })
  it("ex18_in --> ex18_out", () => {
    assert.deepEqual(xBoard(ex18_in), ex18_out);
  })
  it("ex19_in --> ex19_out", () => {
    assert.deepEqual(xBoard(ex19_in), ex19_out);
  })
  it("ex2_in --> ex2_out", () => {
    assert.deepEqual(xBoard(ex2_in), ex2_out);
  })
  it("ex20_in --> ex20_out", () => {
    assert.deepEqual(xBoard(ex20_in), ex20_out);
  })
  it("ex21_in --> ex21_out", () => {
    assert.deepEqual(xBoard(ex21_in), ex21_out);
  })
  it("ex22_in --> ex22_out", () => {
    assert.deepEqual(xBoard(ex22_in), ex22_out);
  })
  it("ex23_in --> ex23_out", () => {
    assert.deepEqual(xBoard(ex23_in), ex23_out);
  })
  it("ex24_in --> ex24_out", () => {
    assert.deepEqual(xBoard(ex24_in), ex24_out);
  })
  it("ex25_in --> ex25_out", () => {
    assert.deepEqual(xBoard(ex25_in), ex25_out);
  })
  it("ex26_in --> ex26_out", () => {
    assert.deepEqual(xBoard(ex26_in), ex26_out);
  })
  it("ex27_in --> ex27_out", () => {
    assert.deepEqual(xBoard(ex27_in), ex27_out);
  })
  it("ex28_in --> ex28_out", () => {
    assert.deepEqual(xBoard(ex28_in), ex28_out);
  })
  it("ex29_in --> ex29_out", () => {
    assert.deepEqual(xBoard(ex29_in), ex29_out);
  })
  it("ex3_in --> ex3_out", () => {
    assert.deepEqual(xBoard(ex3_in), ex3_out);
  })
  it("ex30_in --> ex30_out", () => {
    assert.deepEqual(xBoard(ex30_in), ex30_out);
  })
  it("ex31_in --> ex31_out", () => {
    assert.deepEqual(xBoard(ex31_in), ex31_out);
  })
  it("ex32_in --> ex32_out", () => {
    assert.deepEqual(xBoard(ex32_in), ex32_out);
  })
  it("ex33_in --> ex33_out", () => {
    assert.deepEqual(xBoard(ex33_in), ex33_out);
  })
  it("ex34_in --> ex34_out", () => {
    assert.deepEqual(xBoard(ex34_in), ex34_out);
  })
  it("ex35_in --> ex35_out", () => {
    assert.deepEqual(xBoard(ex35_in), ex35_out);
  })
  it("ex36_in --> ex36_out", () => {
    assert.deepEqual(xBoard(ex36_in), ex36_out);
  })
  it("ex37_in --> ex37_out", () => {
    assert.deepEqual(xBoard(ex37_in), ex37_out);
  })
  it("ex38_in --> ex38_out", () => {
    assert.deepEqual(xBoard(ex38_in), ex38_out);
  })
  it("ex39_in --> ex39_out", () => {
    assert.deepEqual(xBoard(ex39_in), ex39_out);
  })
  it("ex4_in --> ex4_out", () => {
    assert.deepEqual(xBoard(ex4_in), ex4_out);
  })
  it("ex40_in --> ex40_out", () => {
    assert.deepEqual(xBoard(ex40_in), ex40_out);
  })
  it("ex41_in --> ex41_out", () => {
    assert.deepEqual(xBoard(ex41_in), ex41_out);
  })
  it("ex42_in --> ex42_out", () => {
    assert.deepEqual(xBoard(ex42_in), ex42_out);
  })
  it("ex43_in --> ex43_out", () => {
    assert.deepEqual(xBoard(ex43_in), ex43_out);
  })
  it("ex44_in --> ex44_out", () => {
    assert.deepEqual(xBoard(ex44_in), ex44_out);
  })
  it("ex45_in --> ex45_out", () => {
    assert.deepEqual(xBoard(ex45_in), ex45_out);
  })
  it("ex46_in --> ex46_out", () => {
    assert.deepEqual(xBoard(ex46_in), ex46_out);
  })
  it("ex47_in --> ex47_out", () => {
    assert.deepEqual(xBoard(ex47_in), ex47_out);
  })
  it("ex48_in --> ex48_out", () => {
    assert.deepEqual(xBoard(ex48_in), ex48_out);
  })
  it("ex49_in --> ex49_out", () => {
    assert.deepEqual(xBoard(ex49_in), ex49_out);
  })
  it("ex5_in --> ex5_out", () => {
    assert.deepEqual(xBoard(ex5_in), ex5_out);
  })
  it("ex50_in --> ex50_out", () => {
    assert.deepEqual(xBoard(ex50_in), ex50_out);
  })
  it("ex51_in --> ex51_out", () => {
    assert.deepEqual(xBoard(ex51_in), ex51_out);
  })
  it("ex52_in --> ex52_out", () => {
    assert.deepEqual(xBoard(ex52_in), ex52_out);
  })
  it("ex53_in --> ex53_out", () => {
    assert.deepEqual(xBoard(ex53_in), ex53_out);
  })
  it("ex54_in --> ex54_out", () => {
    assert.deepEqual(xBoard(ex54_in), ex54_out);
  })
  it("ex55_in --> ex55_out", () => {
    assert.deepEqual(xBoard(ex55_in), ex55_out);
  })
  it("ex56_in --> ex56_out", () => {
    assert.deepEqual(xBoard(ex56_in), ex56_out);
  })
  it("ex57_in --> ex57_out", () => {
    assert.deepEqual(xBoard(ex57_in), ex57_out);
  })
  it("ex58_in --> ex58_out", () => {
    assert.deepEqual(xBoard(ex58_in), ex58_out);
  })
  it("ex59_in --> ex59_out", () => {
    assert.deepEqual(xBoard(ex59_in), ex59_out);
  })
  it("ex6_in --> ex6_out", () => {
    assert.deepEqual(xBoard(ex6_in), ex6_out);
  })
  it("ex60_in --> ex60_out", () => {
    assert.deepEqual(xBoard(ex60_in), ex60_out);
  })
  it("ex61_in --> ex61_out", () => {
    assert.deepEqual(xBoard(ex61_in), ex61_out);
  })
  it("ex62_in --> ex62_out", () => {
    assert.deepEqual(xBoard(ex62_in), ex62_out);
  })
  it("ex63_in --> ex63_out", () => {
    assert.deepEqual(xBoard(ex63_in), ex63_out);
  })
  it("ex64_in --> ex64_out", () => {
    assert.deepEqual(xBoard(ex64_in), ex64_out);
  })
  it("ex65_in --> ex65_out", () => {
    assert.deepEqual(xBoard(ex65_in), ex65_out);
  })
  it("ex66_in --> ex66_out", () => {
    assert.deepEqual(xBoard(ex66_in), ex66_out);
  })
  it("ex67_in --> ex67_out", () => {
    assert.deepEqual(xBoard(ex67_in), ex67_out);
  })
  it("ex68_in --> ex68_out", () => {
    assert.deepEqual(xBoard(ex68_in), ex68_out);
  })
  it("ex69_in --> ex69_out", () => {
    assert.deepEqual(xBoard(ex69_in), ex69_out);
  })
  it("ex7_in --> ex7_out", () => {
    assert.deepEqual(xBoard(ex7_in), ex7_out);
  })
  it("ex70_in --> ex70_out", () => {
    assert.deepEqual(xBoard(ex70_in), ex70_out);
  })
  it("ex71_in --> ex71_out", () => {
    assert.deepEqual(xBoard(ex71_in), ex71_out);
  })
  it("ex72_in --> ex72_out", () => {
    assert.deepEqual(xBoard(ex72_in), ex72_out);
  })
  it("ex73_in --> ex73_out", () => {
    assert.deepEqual(xBoard(ex73_in), ex73_out);
  })
  it("ex74_in --> ex74_out", () => {
    assert.deepEqual(xBoard(ex74_in), ex74_out);
  })
  it("ex75_in --> ex75_out", () => {
    assert.deepEqual(xBoard(ex75_in), ex75_out);
  })
  it("ex76_in --> ex76_out", () => {
    assert.deepEqual(xBoard(ex76_in), ex76_out);
  })
  it("ex77_in --> ex77_out", () => {
    assert.deepEqual(xBoard(ex77_in), ex77_out);
  })
  it("ex78_in --> ex78_out", () => {
    assert.deepEqual(xBoard(ex78_in), ex78_out);
  })
  it("ex79_in --> ex79_out", () => {
    assert.deepEqual(xBoard(ex79_in), ex79_out);
  })
  it("ex8_in --> ex8_out", () => {
    assert.deepEqual(xBoard(ex8_in), ex8_out);
  })
  it("ex80_in --> ex80_out", () => {
    assert.deepEqual(xBoard(ex80_in), ex80_out);
  })
  it("ex81_in --> ex81_out", () => {
    assert.deepEqual(xBoard(ex81_in), ex81_out);
  })
  it("ex82_in --> ex82_out", () => {
    assert.deepEqual(xBoard(ex82_in), ex82_out);
  })
  it("ex83_in --> ex83_out", () => {
    assert.deepEqual(xBoard(ex83_in), ex83_out);
  })
  it("ex84_in --> ex84_out", () => {
    assert.deepEqual(xBoard(ex84_in), ex84_out);
  })
  it("ex85_in --> ex85_out", () => {
    assert.deepEqual(xBoard(ex85_in), ex85_out);
  })
  it("ex86_in --> ex86_out", () => {
    assert.deepEqual(xBoard(ex86_in), ex86_out);
  })
  it("ex87_in --> ex87_out", () => {
    assert.deepEqual(xBoard(ex87_in), ex87_out);
  })
  it("ex88_in --> ex88_out", () => {
    assert.deepEqual(xBoard(ex88_in), ex88_out);
  })
  it("ex89_in --> ex89_out", () => {
    assert.deepEqual(xBoard(ex89_in), ex89_out);
  })
  it("ex9_in --> ex9_out", () => {
    assert.deepEqual(xBoard(ex9_in), ex9_out);
  })
  it("ex90_in --> ex90_out", () => {
    assert.deepEqual(xBoard(ex90_in), ex90_out);
  })
  it("ex91_in --> ex91_out", () => {
    assert.deepEqual(xBoard(ex91_in), ex91_out);
  })
  it("ex92_in --> ex92_out", () => {
    assert.deepEqual(xBoard(ex92_in), ex92_out);
  })
  it("ex93_in --> ex93_out", () => {
    assert.deepEqual(xBoard(ex93_in), ex93_out);
  })
  it("ex94_in --> ex94_out", () => {
    assert.deepEqual(xBoard(ex94_in), ex94_out);
  })
  it("ex95_in --> ex95_out", () => {
    assert.deepEqual(xBoard(ex95_in), ex95_out);
  })
  it("ex96_in --> ex96_out", () => {
    assert.deepEqual(xBoard(ex96_in), ex96_out);
  })
  it("ex97_in --> ex97_out", () => {
    assert.deepEqual(xBoard(ex97_in), ex97_out);
  })
  it("ex98_in --> ex98_out", () => {
    assert.deepEqual(xBoard(ex98_in), ex98_out);
  })
  it("ex99_in --> ex99_out", () => {
    assert.deepEqual(xBoard(ex99_in), ex99_out);
  })
})