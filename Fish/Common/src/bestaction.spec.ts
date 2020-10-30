// import { assert } from "chai"
// import { CState } from "./cstate"
// import { getFromTo } from "./bestaction2";

// let stateAt0: CState = [
//   "playing", [
//     ["black", 1, 4, "red"],
//     ["white", "unusable", 5, "unusable"]
//   ],
//   [
//     ["black", 4],
//     ["white", 3],
//     ["red", 0]
//   ]
// ]

// let stateAt1: CState = [
//   "playing", [
//     ["hole", "black", 4, "red"],
//     ["white", "unusable", 5, "unusable"]
//   ],
//   [
//     ["white", 3],
//     ["red", 0],
//     ["black", 5]
//   ]
// ]


// let stateAt2: CState = [
//   "playing", [
//     ["hole", 1, 4, "red"],
//     ["white", "unusable", "black", "unusable"]
//   ],
//   [
//     ["white", 3],
//     ["red", 0],
//     ["black", 9]
//   ]
// ]


// let stateAt3: CState = [
//   "playing", [
//     ["hole", "black", 4, "hole"],
//     ["white", "unusable", "red", "unusable"]
//   ],
//   [
//     ["black", 5],
//     ["white", 3],
//     ["red", 5]
//   ]
// ]


// let stateAt4: CState = [
//   "playing", [
//     ["hole", "black", "red", "hole"],
//     ["white", "unusable", 5, "unusable"]
//   ],
//   [
//     ["black", 5],
//     ["white", 3],
//     ["red", 4]
//   ]
// ]

// let stateAt7: CState = [
//   "playing", [
//     ["hole", "black", 4, "hole"],
//     ["white", "unusable", "red", "unusable"]
//   ],
//   [
//     ["white", 3],
//     ["red", 5],
//     ["black", 9]
//   ]
// ]


// let stateAt8: CState = [
//   "playing", [
//     ["hole", "black", "red", "hole"],
//     ["white", "unusable", 5, "unusable"]
//   ],
//   [
//     ["white", 3],
//     ["red", 4],
//     ["black", 10]
//   ]
// ]


// let stateAt5: CState = [
//   "playing", [
//     ["hole", 1, "white", "red"],
//     ["hole", "unusable", "black", "unusable"]
//   ],
//   [
//     ["red", 0],
//     ["black", 9],
//     ["white", 4]
//   ]
// ]

// let stateAt6: CState = [
//   "playing", [
//     ["hole", "white", 4, "red"],
//     ["hole", "unusable", "black", "unusable"]
//   ],
//   [
//     ["red", 0],
//     ["black", 9],
//     ["white", 7]
//   ]
// ]

// let stateAt9: CState = [
//   "playing", [
//     ["hole", "white", "red", "hole"],
//     ["hole", "unusable", "black", "unusable"]
//   ],
//   [
//     ["black", 9],
//     ["white", 4],
//     ["red", 4]
//   ]
// ]

// let stateAt10: CState = [
//   "playing", [
//     ["hole", "black", "white", "red"],
//     ["hole", "unusable", "hole", "unusable"]
//   ],
//   [
//     ["white", 7],
//     ["red", 0],
//     ["black", 10]
//   ]
// ]

// describe("testing the move from state1->state2 on all possible", () => {
//   it("0->1", () => {
//     assert.deepEqual(getFromTo(stateAt0, stateAt1, "black"),
//       [{ row: 0, col: 0 }, { row: 1, col: 0 }])
//   })
//   it("0->2", () => {
//     assert.deepEqual(getFromTo(stateAt0, stateAt2, "black"),
//       [{ row: 0, col: 0 }, { row: 2, col: 1 }])
//   })
//   it("3->7", () => {
//     assert.deepEqual(getFromTo(stateAt3, stateAt7, "black"),
//       [{ row: 1, col: 0 }, { row: 2, col: 0 }])
//   })
//   it("4->8", () => {
//     assert.deepEqual(getFromTo(stateAt4, stateAt8, "black"),
//       [{ row: 1, col: 0 }, { row: 2, col: 1 }])
//   })
//   it("5->9", () => {
//     assert.deepEqual(getFromTo(stateAt5, stateAt9, "red"),
//       [{ row: 3, col: 0 }, { row: 2, col: 0 }])
//   })
//   it("2->5", () => {
//     assert.deepEqual(getFromTo(stateAt2, stateAt5, "white"),
//       [{ row: 0, col: 1 }, { row: 1, col: 0 }])
//   })
//   it("2->6", () => {
//     assert.deepEqual(getFromTo(stateAt2, stateAt6, "white"),
//       [{ row: 0, col: 1 }, { row: 2, col: 0 }])
//   })
// })

