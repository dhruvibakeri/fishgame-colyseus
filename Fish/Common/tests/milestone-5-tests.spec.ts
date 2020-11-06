import {
  assert
} from 'chai';
import {
  xTree
} from '../executables/xTree/xTree'
import {
  InputAction,
  InputMoveResponseQuery
} from '../states/input-state/input-state-data-definition';

const ex1_in: InputMoveResponseQuery = {
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
}
const ex1_out: InputAction = false

const ex10_in: InputMoveResponseQuery = {
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
}
const ex10_out: InputAction = [
  [3, 0],
  [1, 1]
]

const ex11_in: InputMoveResponseQuery = {
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
}
const ex11_out: InputAction = false

const ex12_in: InputMoveResponseQuery = {
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
}
const ex12_out: InputAction = [
  [0, 1],
  [1, 1]
]

const ex13_in: InputMoveResponseQuery = {
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
}
const ex13_out: InputAction = [
  [1, 1],
  [3, 1]
]

const ex14_in: InputMoveResponseQuery = {
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
}
const ex14_out: InputAction = [
  [3, 2],
  [2, 2]
]

const ex15_in: InputMoveResponseQuery = {
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
}
const ex15_out: InputAction = false

const ex16_in: InputMoveResponseQuery = {
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
}
const ex16_out: InputAction = [
  [1, 1],
  [3, 1]
]

const ex17_in: InputMoveResponseQuery = {
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
}
const ex17_out: InputAction = [
  [0, 1],
  [2, 1]
]

const ex18_in: InputMoveResponseQuery = {
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
}
const ex18_out: InputAction = false

const ex19_in: InputMoveResponseQuery = {
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
}
const ex19_out: InputAction = [
  [5, 1],
  [4, 2]
]

const ex2_in: InputMoveResponseQuery = {
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
}
const ex2_out: InputAction = [
  [1, 2],
  [3, 2]
]

const ex20_in: InputMoveResponseQuery = {
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
}
const ex20_out: InputAction = false

const ex21_in: InputMoveResponseQuery = {
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
}
const ex21_out: InputAction = false

const ex22_in: InputMoveResponseQuery = {
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
}
const ex22_out: InputAction = [
  [0, 0],
  [2, 0]
]

const ex23_in: InputMoveResponseQuery = {
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
}
const ex23_out: InputAction = [
  [2, 2],
  [1, 2]
]

const ex24_in: InputMoveResponseQuery = {
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
}
const ex24_out: InputAction = [
  [0, 2],
  [1, 1]
]

const ex25_in: InputMoveResponseQuery = {
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
}
const ex25_out: InputAction = [
  [2, 1],
  [3, 0]
]

const ex26_in: InputMoveResponseQuery = {
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
}
const ex26_out: InputAction = false

const ex27_in: InputMoveResponseQuery = {
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
}
const ex27_out: InputAction = [
  [1, 1],
  [2, 2]
]

const ex28_in: InputMoveResponseQuery = {
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
}
const ex28_out: InputAction = [
  [1, 1],
  [3, 1]
]

const ex29_in: InputMoveResponseQuery = {
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
}
const ex29_out: InputAction = [
  [0, 2],
  [1, 1]
]

const ex3_in: InputMoveResponseQuery = {
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
}
const ex3_out: InputAction = [
  [1, 1],
  [2, 2]
]

const ex30_in: InputMoveResponseQuery = {
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
}
const ex30_out: InputAction = false

const ex31_in: InputMoveResponseQuery = {
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
}
const ex31_out: InputAction = [
  [2, 2],
  [4, 2]
]

const ex32_in: InputMoveResponseQuery = {
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
}
const ex32_out: InputAction = false

const ex33_in: InputMoveResponseQuery = {
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
}
const ex33_out: InputAction = [
  [2, 2],
  [3, 1]
]

const ex34_in: InputMoveResponseQuery = {
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
}
const ex34_out: InputAction = false

const ex35_in: InputMoveResponseQuery = {
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
}
const ex35_out: InputAction = [
  [0, 1],
  [2, 1]
]

const ex36_in: InputMoveResponseQuery = {
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
}
const ex36_out: InputAction = false

const ex37_in: InputMoveResponseQuery = {
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
}
const ex37_out: InputAction = [
  [1, 2],
  [2, 2]
]

const ex38_in: InputMoveResponseQuery = {
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
}
const ex38_out: InputAction = [
  [3, 0],
  [2, 0]
]

const ex39_in: InputMoveResponseQuery = {
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
}
const ex39_out: InputAction = [
  [3, 0],
  [2, 1]
]

const ex4_in: InputMoveResponseQuery = {
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
}
const ex4_out: InputAction = [
  [0, 3],
  [3, 4]
]

const ex40_in: InputMoveResponseQuery = {
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
}
const ex40_out: InputAction = [
  [0, 1],
  [1, 0]
]

const ex41_in: InputMoveResponseQuery = {
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
}
const ex41_out: InputAction = [
  [3, 2],
  [0, 1]
]

const ex42_in: InputMoveResponseQuery = {
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
}
const ex42_out: InputAction = false

const ex43_in: InputMoveResponseQuery = {
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
}
const ex43_out: InputAction = false

const ex44_in: InputMoveResponseQuery = {
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
}
const ex44_out: InputAction = [
  [1, 0],
  [2, 1]
]

const ex45_in: InputMoveResponseQuery = {
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
}
const ex45_out: InputAction = [
  [0, 2],
  [1, 1]
]

const ex46_in: InputMoveResponseQuery = {
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
}
const ex46_out: InputAction = false

const ex47_in: InputMoveResponseQuery = {
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
}
const ex47_out: InputAction = [
  [1, 3],
  [3, 3]
]

const ex48_in: InputMoveResponseQuery = {
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
}
const ex48_out: InputAction = false

const ex49_in: InputMoveResponseQuery = {
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
}
const ex49_out: InputAction = [
  [2, 0],
  [3, 0]
]

const ex5_in: InputMoveResponseQuery = {
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
}
const ex5_out: InputAction = [
  [6, 1],
  [4, 2]
]

const ex50_in: InputMoveResponseQuery = {
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
}
const ex50_out: InputAction = false

const ex51_in: InputMoveResponseQuery = {
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
}
const ex51_out: InputAction = [
  [2, 0],
  [3, 0]
]

const ex52_in: InputMoveResponseQuery = {
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
}
const ex52_out: InputAction = false

const ex53_in: InputMoveResponseQuery = {
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
}
const ex53_out: InputAction = false

const ex54_in: InputMoveResponseQuery = {
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
}
const ex54_out: InputAction = [
  [0, 1],
  [2, 1]
]

const ex55_in: InputMoveResponseQuery = {
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
}
const ex55_out: InputAction = [
  [0, 1],
  [1, 0]
]

const ex56_in: InputMoveResponseQuery = {
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
}
const ex56_out: InputAction = [
  [0, 1],
  [1, 0]
]

const ex57_in: InputMoveResponseQuery = {
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
}
const ex57_out: InputAction = [
  [1, 0],
  [3, 0]
]

const ex58_in: InputMoveResponseQuery = {
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
}
const ex58_out: InputAction = false

const ex59_in: InputMoveResponseQuery = {
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
}
const ex59_out: InputAction = false

const ex6_in: InputMoveResponseQuery = {
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
}
const ex6_out: InputAction = false

const ex60_in: InputMoveResponseQuery = {
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
}
const ex60_out: InputAction = [
  [0, 1],
  [3, 2]
]

const ex61_in: InputMoveResponseQuery = {
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
}
const ex61_out: InputAction = false

const ex62_in: InputMoveResponseQuery = {
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
}
const ex62_out: InputAction = false

const ex63_in: InputMoveResponseQuery = {
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
}
const ex63_out: InputAction = [
  [1, 2],
  [3, 2]
]

const ex64_in: InputMoveResponseQuery = {
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
}
const ex64_out: InputAction = [
  [1, 1],
  [3, 1]
]

const ex65_in: InputMoveResponseQuery = {
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
}
const ex65_out: InputAction = false

const ex66_in: InputMoveResponseQuery = {
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
}
const ex66_out: InputAction = [
  [0, 2],
  [1, 1]
]

const ex67_in: InputMoveResponseQuery = {
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
}
const ex67_out: InputAction = [
  [4, 2],
  [3, 2]
]

const ex68_in: InputMoveResponseQuery = {
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
}
const ex68_out: InputAction = false

const ex69_in: InputMoveResponseQuery = {
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
}
const ex69_out: InputAction = [
  [1, 0],
  [2, 0]
]

const ex7_in: InputMoveResponseQuery = {
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
}
const ex7_out: InputAction = [
  [0, 2],
  [2, 2]
]

const ex70_in: InputMoveResponseQuery = {
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
}
const ex70_out: InputAction = false

const ex71_in: InputMoveResponseQuery = {
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
}
const ex71_out: InputAction = [
  [0, 3],
  [1, 3]
]

const ex72_in: InputMoveResponseQuery = {
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
}
const ex72_out: InputAction = false

const ex73_in: InputMoveResponseQuery = {
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
}
const ex73_out: InputAction = [
  [1, 2],
  [0, 2]
]

const ex74_in: InputMoveResponseQuery = {
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
}
const ex74_out: InputAction = [
  [4, 1],
  [2, 2]
]

const ex75_in: InputMoveResponseQuery = {
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
}
const ex75_out: InputAction = false

const ex76_in: InputMoveResponseQuery = {
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
}
const ex76_out: InputAction = [
  [3, 1],
  [1, 2]
]

const ex77_in: InputMoveResponseQuery = {
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
}
const ex77_out: InputAction = [
  [0, 2],
  [2, 2]
]

const ex8_in: InputMoveResponseQuery = {
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
}
const ex8_out: InputAction = false

const ex9_in: InputMoveResponseQuery = {
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
}
const ex9_out: InputAction = [
  [0, 1],
  [1, 1]
]




describe("Milestone 5 tests", () => {
  it("ex1_in ->  ex1_out", () => {
    assert.deepEqual(xTree(ex1_in), ex1_out)
  })
  it("ex10_in ->  ex10_out", () => {
    assert.deepEqual(xTree(ex10_in), ex10_out)
  })
  it("ex11_in ->  ex11_out", () => {
    assert.deepEqual(xTree(ex11_in), ex11_out)
  })
  it("ex12_in ->  ex12_out", () => {
    assert.deepEqual(xTree(ex12_in), ex12_out)
  })
  it("ex13_in ->  ex13_out", () => {
    assert.deepEqual(xTree(ex13_in), ex13_out)
  })
  it("ex14_in ->  ex14_out", () => {
    assert.deepEqual(xTree(ex14_in), ex14_out)
  })
  it("ex15_in ->  ex15_out", () => {
    assert.deepEqual(xTree(ex15_in), ex15_out)
  })
  it("ex16_in ->  ex16_out", () => {
    assert.deepEqual(xTree(ex16_in), ex16_out)
  })
  it("ex17_in ->  ex17_out", () => {
    assert.deepEqual(xTree(ex17_in), ex17_out)
  })
  it("ex18_in ->  ex18_out", () => {
    assert.deepEqual(xTree(ex18_in), ex18_out)
  })
  it("ex19_in ->  ex19_out", () => {
    assert.deepEqual(xTree(ex19_in), ex19_out)
  })
  it("ex2_in ->  ex2_out", () => {
    assert.deepEqual(xTree(ex2_in), ex2_out)
  })
  it("ex20_in ->  ex20_out", () => {
    assert.deepEqual(xTree(ex20_in), ex20_out)
  })
  it("ex21_in ->  ex21_out", () => {
    assert.deepEqual(xTree(ex21_in), ex21_out)
  })
  it("ex22_in ->  ex22_out", () => {
    assert.deepEqual(xTree(ex22_in), ex22_out)
  })
  it("ex23_in ->  ex23_out", () => {
    assert.deepEqual(xTree(ex23_in), ex23_out)
  })
  it("ex24_in ->  ex24_out", () => {
    assert.deepEqual(xTree(ex24_in), ex24_out)
  })
  it("ex25_in ->  ex25_out", () => {
    assert.deepEqual(xTree(ex25_in), ex25_out)
  })
  it("ex26_in ->  ex26_out", () => {
    assert.deepEqual(xTree(ex26_in), ex26_out)
  })
  it("ex27_in ->  ex27_out", () => {
    assert.deepEqual(xTree(ex27_in), ex27_out)
  })
  it("ex28_in ->  ex28_out", () => {
    assert.deepEqual(xTree(ex28_in), ex28_out)
  })
  it("ex29_in ->  ex29_out", () => {
    assert.deepEqual(xTree(ex29_in), ex29_out)
  })
  it("ex3_in ->  ex3_out", () => {
    assert.deepEqual(xTree(ex3_in), ex3_out)
  })
  it("ex30_in ->  ex30_out", () => {
    assert.deepEqual(xTree(ex30_in), ex30_out)
  })
  it("ex31_in ->  ex31_out", () => {
    assert.deepEqual(xTree(ex31_in), ex31_out)
  })
  it("ex32_in ->  ex32_out", () => {
    assert.deepEqual(xTree(ex32_in), ex32_out)
  })
  it("ex33_in ->  ex33_out", () => {
    assert.deepEqual(xTree(ex33_in), ex33_out)
  })
  it("ex34_in ->  ex34_out", () => {
    assert.deepEqual(xTree(ex34_in), ex34_out)
  })
  it("ex35_in ->  ex35_out", () => {
    assert.deepEqual(xTree(ex35_in), ex35_out)
  })
  it("ex36_in ->  ex36_out", () => {
    assert.deepEqual(xTree(ex36_in), ex36_out)
  })
  it("ex37_in ->  ex37_out", () => {
    assert.deepEqual(xTree(ex37_in), ex37_out)
  })
  it("ex38_in ->  ex38_out", () => {
    assert.deepEqual(xTree(ex38_in), ex38_out)
  })
  it("ex39_in ->  ex39_out", () => {
    assert.deepEqual(xTree(ex39_in), ex39_out)
  })
  it("ex4_in ->  ex4_out", () => {
    assert.deepEqual(xTree(ex4_in), ex4_out)
  })
  it("ex40_in ->  ex40_out", () => {
    assert.deepEqual(xTree(ex40_in), ex40_out)
  })
  it("ex41_in ->  ex41_out", () => {
    assert.deepEqual(xTree(ex41_in), ex41_out)
  })
  it("ex42_in ->  ex42_out", () => {
    assert.deepEqual(xTree(ex42_in), ex42_out)
  })
  it("ex43_in ->  ex43_out", () => {
    assert.deepEqual(xTree(ex43_in), ex43_out)
  })
  it("ex44_in ->  ex44_out", () => {
    assert.deepEqual(xTree(ex44_in), ex44_out)
  })
  it("ex45_in ->  ex45_out", () => {
    assert.deepEqual(xTree(ex45_in), ex45_out)
  })
  it("ex46_in ->  ex46_out", () => {
    assert.deepEqual(xTree(ex46_in), ex46_out)
  })
  it("ex47_in ->  ex47_out", () => {
    assert.deepEqual(xTree(ex47_in), ex47_out)
  })
  it("ex48_in ->  ex48_out", () => {
    assert.deepEqual(xTree(ex48_in), ex48_out)
  })
  it("ex49_in ->  ex49_out", () => {
    assert.deepEqual(xTree(ex49_in), ex49_out)
  })
  it("ex5_in ->  ex5_out", () => {
    assert.deepEqual(xTree(ex5_in), ex5_out)
  })
  it("ex50_in ->  ex50_out", () => {
    assert.deepEqual(xTree(ex50_in), ex50_out)
  })
  it("ex51_in ->  ex51_out", () => {
    assert.deepEqual(xTree(ex51_in), ex51_out)
  })
  it("ex52_in ->  ex52_out", () => {
    assert.deepEqual(xTree(ex52_in), ex52_out)
  })
  it("ex53_in ->  ex53_out", () => {
    assert.deepEqual(xTree(ex53_in), ex53_out)
  })
  it("ex54_in ->  ex54_out", () => {
    assert.deepEqual(xTree(ex54_in), ex54_out)
  })
  it("ex55_in ->  ex55_out", () => {
    assert.deepEqual(xTree(ex55_in), ex55_out)
  })
  it("ex56_in ->  ex56_out", () => {
    assert.deepEqual(xTree(ex56_in), ex56_out)
  })
  it("ex57_in ->  ex57_out", () => {
    assert.deepEqual(xTree(ex57_in), ex57_out)
  })
  it("ex58_in ->  ex58_out", () => {
    assert.deepEqual(xTree(ex58_in), ex58_out)
  })
  it("ex59_in ->  ex59_out", () => {
    assert.deepEqual(xTree(ex59_in), ex59_out)
  })
  it("ex6_in ->  ex6_out", () => {
    assert.deepEqual(xTree(ex6_in), ex6_out)
  })
  it("ex60_in ->  ex60_out", () => {
    assert.deepEqual(xTree(ex60_in), ex60_out)
  })
  it("ex61_in ->  ex61_out", () => {
    assert.deepEqual(xTree(ex61_in), ex61_out)
  })
  it("ex62_in ->  ex62_out", () => {
    assert.deepEqual(xTree(ex62_in), ex62_out)
  })
  it("ex63_in ->  ex63_out", () => {
    assert.deepEqual(xTree(ex63_in), ex63_out)
  })
  it("ex64_in ->  ex64_out", () => {
    assert.deepEqual(xTree(ex64_in), ex64_out)
  })
  it("ex65_in ->  ex65_out", () => {
    assert.deepEqual(xTree(ex65_in), ex65_out)
  })
  it("ex66_in ->  ex66_out", () => {
    assert.deepEqual(xTree(ex66_in), ex66_out)
  })
  it("ex67_in ->  ex67_out", () => {
    assert.deepEqual(xTree(ex67_in), ex67_out)
  })
  it("ex68_in ->  ex68_out", () => {
    assert.deepEqual(xTree(ex68_in), ex68_out)
  })
  it("ex69_in ->  ex69_out", () => {
    assert.deepEqual(xTree(ex69_in), ex69_out)
  })
  it("ex7_in ->  ex7_out", () => {
    assert.deepEqual(xTree(ex7_in), ex7_out)
  })
  it("ex70_in ->  ex70_out", () => {
    assert.deepEqual(xTree(ex70_in), ex70_out)
  })
  it("ex71_in ->  ex71_out", () => {
    assert.deepEqual(xTree(ex71_in), ex71_out)
  })
  it("ex72_in ->  ex72_out", () => {
    assert.deepEqual(xTree(ex72_in), ex72_out)
  })
  it("ex73_in ->  ex73_out", () => {
    assert.deepEqual(xTree(ex73_in), ex73_out)
  })
  it("ex74_in ->  ex74_out", () => {
    assert.deepEqual(xTree(ex74_in), ex74_out)
  })
  it("ex75_in ->  ex75_out", () => {
    assert.deepEqual(xTree(ex75_in), ex75_out)
  })
  it("ex76_in ->  ex76_out", () => {
    assert.deepEqual(xTree(ex76_in), ex76_out)
  })
  it("ex77_in ->  ex77_out", () => {
    assert.deepEqual(xTree(ex77_in), ex77_out)
  })
  it("ex8_in ->  ex8_out", () => {
    assert.deepEqual(xTree(ex8_in), ex8_out)
  })
  it("ex9_in ->.  ex9_out", () => {
    assert.deepEqual(xTree(ex9_in), ex9_out)
  })
})