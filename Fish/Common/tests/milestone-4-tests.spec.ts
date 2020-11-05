import {
  assert
} from 'chai';
import {
  xState
} from '../executables/xState'
import {
  InputState
} from '../states/input-state/input-state-data-definition';

const ex1_in: InputState = {
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
}
const ex1_out = false

const ex10_in: InputState = {
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
}
const ex10_out = false

const ex11_in: InputState = {
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
}
const ex11_out: InputState = {
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
}

const ex12_in: InputState = {
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
}
const ex12_out = false

const ex13_in: InputState = {
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
}
const ex13_out: InputState = {
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
}

const ex14_in: InputState = {
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
}
const ex14_out = false

const ex15_in: InputState = {
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
}
const ex15_out = false

const ex16_in: InputState = {
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
}
const ex16_out = false

const ex17_in: InputState = {
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
}
const ex17_out = false

const ex18_in: InputState = {
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
}
const ex18_out = false

const ex19_in: InputState = {
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
}
const ex19_out = false

const ex2_in: InputState = {
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
}
const ex2_out = false

const ex20_in: InputState = {
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
}
const ex20_out: InputState = {
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
}

const ex21_in: InputState = {
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
}
const ex21_out = false

const ex22_in: InputState = {
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
}
const ex22_out: InputState = {
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
}

const ex26_in: InputState = {
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
}
const ex26_out = false

const ex27_in: InputState = {
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
}
const ex27_out: InputState = {
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
}

const ex28_in: InputState = {
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
}
const ex28_out: InputState = {
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
}

const ex29_in: InputState = {
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
}
const ex29_out = false

const ex3_in: InputState = {
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
}
const ex3_out = false

const ex30_in: InputState = {
  "players": [{
    "color": "white",
    "score": 0,
    "places": []
  }],
  "board": [
    [1, 2, 3]
  ]
}
const ex30_out = false

const ex31_in: InputState = {
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
}
const ex31_out = false

const ex32_in: InputState = {
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
}
const ex32_out = false

const ex33_in: InputState = {
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
}
const ex33_out = false

const ex34_in: InputState = {
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
}
const ex34_out = false

const ex35_in: InputState = {
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
}
const ex35_out = false

const ex36_in: InputState = {
  "players": [],
  "board": [
    [1, 2, 3, 1],
    [2, 3, 2, 2],
    [1, 0, 1, 1]
  ]
}
const ex36_out = false

const ex37_in: InputState = {
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
}
const ex37_out = false

const ex38_in: InputState = {
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
}
const ex38_out: InputState = {
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
}

const ex39_in: InputState = {
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
}
const ex39_out = false

const ex4_in: InputState = {
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
}
const ex4_out: InputState = {
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
}

const ex40_in: InputState = {
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
}
const ex40_out = false

const ex41_in: InputState = {
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
}
const ex41_out = false

const ex42_in: InputState = {
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
}
const ex42_out: InputState = {
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
}

const ex43_in: InputState = {
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
}
const ex43_out = false

const ex44_in: InputState = {
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
}
const ex44_out = false

const ex45_in: InputState = {
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
}
const ex45_out = false

const ex46_in: InputState = {
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
}
const ex46_out = false

const ex47_in: InputState = {
  "players": [],
  "board": [
    [1, 1, 0, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 0, 1]
  ]
}
const ex47_out = false

const ex48_in: InputState = {
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
}
const ex48_out = false

const ex49_in: InputState = {
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
}
const ex49_out = false

const ex5_in: InputState = {
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
}
const ex5_out: InputState = {
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
}

const ex50_in: InputState = {
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
}
const ex50_out = false

const ex51_in: InputState = {
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
}
const ex51_out: InputState = {
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
}

const ex52_in: InputState = {
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
}
const ex52_out = false

const ex53_in: InputState = {
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
}
const ex53_out: InputState = {
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
}

const ex54_in: InputState = {
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
}
const ex54_out: InputState = {
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
}

const ex55_in: InputState = {
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
}
const ex55_out = false

const ex56_in: InputState = {
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
}
const ex56_out: InputState = {
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
}

const ex57_in: InputState = {
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
}
const ex57_out = false

const ex58_in: InputState = {
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
}
const ex58_out = false

const ex59_in: InputState = {
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
}
const ex59_out = false

const ex6_in: InputState = {
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
}
const ex6_out = false

const ex60_in: InputState = {
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
}
const ex60_out: InputState = {
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
}

const ex61_in: InputState = {
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
}
const ex61_out: InputState = {
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
}

const ex62_in: InputState = {
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
}
const ex62_out = false

const ex63_in: InputState = {
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
}
const ex63_out: InputState = {
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
}

const ex64_in: InputState = {
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
}
const ex64_out = false

const ex65_in: InputState = {
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
}
const ex65_out: InputState = {
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
}

const ex66_in: InputState = {
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
}
const ex66_out = false

const ex67_in: InputState = {
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
}
const ex67_out: InputState = {
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
}

const ex68_in: InputState = {
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
}
const ex68_out: InputState = {
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
}

const ex69_in: InputState = {
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
}
const ex69_out: InputState = {
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
}

const ex7_in: InputState = {
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
}
const ex7_out: InputState = {
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
}

const ex70_in: InputState = {
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
}
const ex70_out = false

const ex71_in: InputState = {
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
}
const ex71_out: InputState = {
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
}

const ex72_in: InputState = {
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
const ex72_out = false

const ex73_in: InputState = {
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
}
const ex73_out: InputState = {
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
}

const ex74_in: InputState = {
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
}
const ex74_out: InputState = {
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
}

const ex75_in: InputState = {
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
}
const ex75_out: InputState = {
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
}

const ex76_in: InputState = {
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
}
const ex76_out: InputState = {
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
}

const ex77_in: InputState = {
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
}
const ex77_out = false

const ex78_in: InputState = {
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
}
const ex78_out = false

const ex79_in: InputState = {
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
}
const ex79_out: InputState = {
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
}

const ex8_in: InputState = {
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
}
const ex8_out = false

const ex80_in: InputState = {
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
}
const ex80_out: InputState = {
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
}

const ex9_in: InputState = {
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
}
const ex9_out: InputState = {
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
}




describe("Milestone 4", () => {

  it("ex1_in: InputState --> ex1_out", () => {
    assert.deepEqual(xState(ex1_in), ex1_out)
  })

  it("ex10_in: InputState --> ex10_out", () => {
    assert.deepEqual(xState(ex10_in), ex10_out)
  })

  it("ex11_in: InputState --> ex11_out", () => {
    assert.deepEqual(xState(ex11_in), ex11_out)
  })

  it("ex12_in: InputState --> ex12_out", () => {
    assert.deepEqual(xState(ex12_in), ex12_out)
  })

  it("ex13_in: InputState --> ex13_out", () => {
    assert.deepEqual(xState(ex13_in), ex13_out)
  })

  it("ex14_in: InputState --> ex14_out", () => {
    assert.deepEqual(xState(ex14_in), ex14_out)
  })

  it("ex15_in: InputState --> ex15_out", () => {
    assert.deepEqual(xState(ex15_in), ex15_out)
  })

  it("ex16_in: InputState --> ex16_out", () => {
    assert.deepEqual(xState(ex16_in), ex16_out)
  })

  it("ex17_in: InputState --> ex17_out", () => {
    assert.deepEqual(xState(ex17_in), ex17_out)
  })

  it("ex18_in: InputState --> ex18_out", () => {
    assert.deepEqual(xState(ex18_in), ex18_out)
  })

  it("ex19_in: InputState --> ex19_out", () => {
    assert.deepEqual(xState(ex19_in), ex19_out)
  })

  it("ex2_in: InputState --> ex2_out", () => {
    assert.deepEqual(xState(ex2_in), ex2_out)
  })

  it("ex20_in: InputState --> ex20_out", () => {
    assert.deepEqual(xState(ex20_in), ex20_out)
  })

  it("ex21_in: InputState --> ex21_out", () => {
    assert.deepEqual(xState(ex21_in), ex21_out)
  })

  it("ex22_in: InputState --> ex22_out", () => {
    assert.deepEqual(xState(ex22_in), ex22_out)
  })

  it("ex26_in: InputState --> ex26_out", () => {
    assert.deepEqual(xState(ex26_in), ex26_out)
  })

  it("ex27_in: InputState --> ex27_out", () => {
    assert.deepEqual(xState(ex27_in), ex27_out)
  })

  it("ex28_in: InputState --> ex28_out", () => {
    assert.deepEqual(xState(ex28_in), ex28_out)
  })

  it("ex29_in: InputState --> ex29_out", () => {
    assert.deepEqual(xState(ex29_in), ex29_out)
  })

  it("ex3_in: InputState --> ex3_out", () => {
    assert.deepEqual(xState(ex3_in), ex3_out)
  })

  it("ex30_in: InputState --> ex30_out", () => {
    assert.deepEqual(xState(ex30_in), ex30_out)
  })

  it("ex31_in: InputState --> ex31_out", () => {
    assert.deepEqual(xState(ex31_in), ex31_out)
  })

  it("ex32_in: InputState --> ex32_out", () => {
    assert.deepEqual(xState(ex32_in), ex32_out)
  })

  it("ex33_in: InputState --> ex33_out", () => {
    assert.deepEqual(xState(ex33_in), ex33_out)
  })

  it("ex34_in: InputState --> ex34_out", () => {
    assert.deepEqual(xState(ex34_in), ex34_out)
  })

  it("ex35_in: InputState --> ex35_out", () => {
    assert.deepEqual(xState(ex35_in), ex35_out)
  })

  it("ex36_in: InputState --> ex36_out", () => {
    assert.deepEqual(xState(ex36_in), ex36_out)
  })

  it("ex37_in: InputState --> ex37_out", () => {
    assert.deepEqual(xState(ex37_in), ex37_out)
  })

  it("ex38_in: InputState --> ex38_out", () => {
    assert.deepEqual(xState(ex38_in), ex38_out)
  })

  it("ex39_in: InputState --> ex39_out", () => {
    assert.deepEqual(xState(ex39_in), ex39_out)
  })

  it("ex4_in: InputState --> ex4_out", () => {
    assert.deepEqual(xState(ex4_in), ex4_out)
  })

  it("ex40_in: InputState --> ex40_out", () => {
    assert.deepEqual(xState(ex40_in), ex40_out)
  })

  it("ex41_in: InputState --> ex41_out", () => {
    assert.deepEqual(xState(ex41_in), ex41_out)
  })

  it("ex42_in: InputState --> ex42_out", () => {
    assert.deepEqual(xState(ex42_in), ex42_out)
  })

  it("ex43_in: InputState --> ex43_out", () => {
    assert.deepEqual(xState(ex43_in), ex43_out)
  })

  it("ex44_in: InputState --> ex44_out", () => {
    assert.deepEqual(xState(ex44_in), ex44_out)
  })

  it("ex45_in: InputState --> ex45_out", () => {
    assert.deepEqual(xState(ex45_in), ex45_out)
  })

  it("ex46_in: InputState --> ex46_out", () => {
    assert.deepEqual(xState(ex46_in), ex46_out)
  })

  it("ex47_in: InputState --> ex47_out", () => {
    assert.deepEqual(xState(ex47_in), ex47_out)
  })

  it("ex48_in: InputState --> ex48_out", () => {
    assert.deepEqual(xState(ex48_in), ex48_out)
  })

  it("ex49_in: InputState --> ex49_out", () => {
    assert.deepEqual(xState(ex49_in), ex49_out)
  })

  it("ex5_in: InputState --> ex5_out", () => {
    assert.deepEqual(xState(ex5_in), ex5_out)
  })

  it("ex50_in: InputState --> ex50_out", () => {
    assert.deepEqual(xState(ex50_in), ex50_out)
  })

  it("ex51_in: InputState --> ex51_out", () => {
    assert.deepEqual(xState(ex51_in), ex51_out)
  })

  it("ex52_in: InputState --> ex52_out", () => {
    assert.deepEqual(xState(ex52_in), ex52_out)
  })

  it("ex53_in: InputState --> ex53_out", () => {
    assert.deepEqual(xState(ex53_in), ex53_out)
  })

  it("ex54_in: InputState --> ex54_out", () => {
    assert.deepEqual(xState(ex54_in), ex54_out)
  })

  it("ex55_in: InputState --> ex55_out", () => {
    assert.deepEqual(xState(ex55_in), ex55_out)
  })

  it("ex56_in: InputState --> ex56_out", () => {
    assert.deepEqual(xState(ex56_in), ex56_out)
  })

  it("ex57_in: InputState --> ex57_out", () => {
    assert.deepEqual(xState(ex57_in), ex57_out)
  })

  it("ex58_in: InputState --> ex58_out", () => {
    assert.deepEqual(xState(ex58_in), ex58_out)
  })

  it("ex59_in: InputState --> ex59_out", () => {
    assert.deepEqual(xState(ex59_in), ex59_out)
  })

  it("ex6_in: InputState --> ex6_out", () => {
    assert.deepEqual(xState(ex6_in), ex6_out)
  })

  it("ex60_in: InputState --> ex60_out", () => {
    assert.deepEqual(xState(ex60_in), ex60_out)
  })

  it("ex61_in: InputState --> ex61_out", () => {
    assert.deepEqual(xState(ex61_in), ex61_out)
  })

  it("ex62_in: InputState --> ex62_out", () => {
    assert.deepEqual(xState(ex62_in), ex62_out)
  })

  it("ex63_in: InputState --> ex63_out", () => {
    assert.deepEqual(xState(ex63_in), ex63_out)
  })

  it("ex64_in: InputState --> ex64_out", () => {
    assert.deepEqual(xState(ex64_in), ex64_out)
  })

  it("ex65_in: InputState --> ex65_out", () => {
    assert.deepEqual(xState(ex65_in), ex65_out)
  })

  it("ex66_in: InputState --> ex66_out", () => {
    assert.deepEqual(xState(ex66_in), ex66_out)
  })

  it("ex67_in: InputState --> ex67_out", () => {
    assert.deepEqual(xState(ex67_in), ex67_out)
  })

  it("ex68_in: InputState --> ex68_out", () => {
    assert.deepEqual(xState(ex68_in), ex68_out)
  })

  it("ex69_in: InputState --> ex69_out", () => {
    assert.deepEqual(xState(ex69_in), ex69_out)
  })

  it("ex7_in: InputState --> ex7_out", () => {
    assert.deepEqual(xState(ex7_in), ex7_out)
  })

  it("ex70_in: InputState --> ex70_out", () => {
    assert.deepEqual(xState(ex70_in), ex70_out)
  })

  it("ex71_in: InputState --> ex71_out", () => {
    assert.deepEqual(xState(ex71_in), ex71_out)
  })

  it("ex72_in: InputState --> ex72_out", () => {
    assert.deepEqual(xState(ex72_in), ex72_out)
  })

  it("ex73_in: InputState --> ex73_out", () => {
    assert.deepEqual(xState(ex73_in), ex73_out)
  })

  it("ex74_in: InputState --> ex74_out", () => {
    assert.deepEqual(xState(ex74_in), ex74_out)
  })

  it("ex75_in: InputState --> ex75_out", () => {
    assert.deepEqual(xState(ex75_in), ex75_out)
  })

  it("ex76_in: InputState --> ex76_out", () => {
    assert.deepEqual(xState(ex76_in), ex76_out)
  })

  it("ex77_in: InputState --> ex77_out", () => {
    assert.deepEqual(xState(ex77_in), ex77_out)
  })

  it("ex78_in: InputState --> ex78_out", () => {
    assert.deepEqual(xState(ex78_in), ex78_out)
  })

  it("ex79_in: InputState --> ex79_out", () => {
    assert.deepEqual(xState(ex79_in), ex79_out)
  })

  it("ex8_in: InputState --> ex8_out", () => {
    assert.deepEqual(xState(ex8_in), ex8_out)
  })

  it("ex80_in: InputState --> ex80_out", () => {
    assert.deepEqual(xState(ex80_in), ex80_out)
  })

  it("ex9_in: InputState --> ex9_out", () => {
    assert.deepEqual(xState(ex9_in), ex9_out)
  })
})