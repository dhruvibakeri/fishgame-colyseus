// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------- state-cstate-conversion-tests.spec.ts --------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------




// describe("Testing the translation to/from cstate/state", () => {
//   stateList.forEach((state: CState, idx: number) => {
//     it(`testing on state ${idx}`, () => {
//       assert.deepEqual(state, stateToCState(cStateToGameState(state)))
//     })
//   });
// })


// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------- bestaction.spec.ts --------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

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


// describe("test best algorithm", () => {
//   it("test minimax on the root", () => {
//     assert.deepEqual(getBestAction(stateAt0, 4), [{ row: 0, col: 0 }, { row: 0, col: 1 }])
//   })
// })

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------- board-to-hex-tiles-tests.spec.ts --------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------



//               b                    c
//             [0, 10]              [20, 0]                                   
//                 XXXXXxXXXXXXXXXXXXX                                        
//                XX                 XX                                       
//               XX                    XX                                     
//             XX   { row: 0, col: 0 }   XX                                   
//           XXX                          XX    d              g              
//    a     XX                             XX [30, 10]       [40, 10]         
// [10, 0] XX                               XXXXXXXXXXXXXXXXXX                
//          XX                            XX                 XX               
//            XX                        XX                     XX             
//              XX                     XX                        XX      h    
//                XXX                 X                            XX [50, 20]
//                  XXXXXXXXXXXXXXXXXXX      { row: 0, col: 1 }  XXX          
//         [10, 20]           [20, 20] XX                       XX            
//            f                   e     XX                    XX              
//                                        XX                 XX               
//                                          XXXXXXXXXXXXXXXXXX   i            
//                                        [30, 30]           [40, 30]         
//                                            j                               



// const h1: BoardPosn = { "row": 0, "col": 0 }
// const h2: BoardPosn = { "row": 0, "col": 1 }

// const a: CanvasPosn = { "x": 0, "y": 10 }
// const b: CanvasPosn = { "x": 10, "y": 0 }
// const c: CanvasPosn = { "x": 20, "y": 0 }
// const d: CanvasPosn = { "x": 30, "y": 10 }
// const e: CanvasPosn = { "x": 20, "y": 20 }
// const f: CanvasPosn = { "x": 10, "y": 20 }
// const g: CanvasPosn = { "x": 40, "y": 10 }
// const h: CanvasPosn = { "x": 50, "y": 20 }
// const i: CanvasPosn = { "x": 40, "y": 30 }
// const j: CanvasPosn = { "x": 30, "y": 30 }

// const hextile1: HexTile = { "posn": h1, "corners": [a, b, c, d, e, f] }
// const hextile2: HexTile = { "posn": h2, "corners": [e, d, g, h, i, j] }

// ordering of corners:

//                                             XXXXXXXX             
//              XXXX                                  X             
//                 XX                             XXXXX             
//                XX                                  X             
//               XX                            XXXXXXXX             
//              XXXXXX     XXXXXXXXXXXXXXXXXXXXX                    
//                       XX                     XX                  
//                      XX                       XX                 
//                     X                          XX                
//                   XX                            XX      X        
//       XX        XX                               XX    X    X    
//        X       XX                                 XX  XXXXXXXX   
//        X        XX                               XX        X     
//        X          XX                           XX          X     
//     XXXXXXX         XX                       XX                  
//                       XX                   XX                    
//                         XXXXXXXXXXXXXXXXXXXX                     
//                                                                  
//                    XXXXXX                    XXXXXX              
//                   X                         X                    
//                   X                         XXXXXX               
//                   X XXXXX                        X               
//                   XX    X                        X               
//                    XXXXXX                   xXXXXX               



// describe("test hex tile generation", () => {
//   it("generate hex tiles for 2 rows and 1 col of size 10", () => {
//     assert.deepEqual(boardToHexTiles(10, dimToBinBoard(2, 1), (cell) => cell === 1), [hextile1, hextile2])
//   })
// })





// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------- cboard-reachable-tests.spec.ts --------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------


//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /   3    \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/   3    \_____/   1    \______/    4    \_____/   1    \______/    4    \_____/   4    \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \      /   1   \      /   2    \       /   3   \      /   4    \       /   3   \      /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /   4    \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             


// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   |   3   |   2   |   1   |   5   |   4   |   2   |   1   |   3   |   4   |   1   |   4   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   |   2   |   3   |   3   |   5   |   4   |   1   |   3   |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx|   4   |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+




//
// [ ROW, COL] -> FALSE | [ROW, COL]
// 


// describe("cboard reachable tests", () => {
//   it("5x6 board: north of [0, 1] is [0, 0]", () => { assert.deepEqual(north([0, 1]), [0, 0]) })
//   it("5x6 board: north of [2, 1] is [2, 0]", () => { assert.deepEqual(north([2, 1]), [2, 0]) })
//   it("5x6 board: north of [4, 1] is [4, 0]", () => { assert.deepEqual(north([4, 1]), [4, 0]) })
//   it("5x6 board: north of [6, 1] is [6, 0]", () => { assert.deepEqual(north([6, 1]), [6, 0]) })
//   it("5x6 board: north of [8, 1] is [8, 0]", () => { assert.deepEqual(north([8, 1]), [8, 0]) })
//   it("5x6 board: north of [10, 1] is [10, 0]", () => { assert.deepEqual(north([10, 1]), [10, 0]) })
//   it("5x6 board: north of [1, 1] is [1, 0]", () => { assert.deepEqual(north([1, 1]), [1, 0]) })
//   it("5x6 board: north of [3, 1] is [3, 0]", () => { assert.deepEqual(north([3, 1]), [3, 0]) })
//   it("5x6 board: north of [5, 1] is [5, 0]", () => { assert.deepEqual(north([5, 1]), [5, 0]) })
//   it("5x6 board: north of [7, 1] is [7, 0]", () => { assert.deepEqual(north([7, 1]), [7, 0]) })
//   it("5x6 board: north of [9, 1] is [9, 0]", () => { assert.deepEqual(north([9, 1]), [9, 0]) })
//   it("5x6 board: north of [11, 1] is [11, 0]", () => { assert.deepEqual(north([11, 1]), [11, 0]) })
//   it("5x6 board: north of [0, 2] is [0, 1]", () => { assert.deepEqual(north([0, 2]), [0, 1]) })
//   it("5x6 board: north of [2, 2] is [2, 1]", () => { assert.deepEqual(north([2, 2]), [2, 1]) })
//   it("5x6 board: north of [4, 2] is [4, 1]", () => { assert.deepEqual(north([4, 2]), [4, 1]) })
//   it("5x6 board: north of [6, 2] is [6, 1]", () => { assert.deepEqual(north([6, 2]), [6, 1]) })
//   it("5x6 board: north of [8, 2] is [8, 1]", () => { assert.deepEqual(north([8, 2]), [8, 1]) })
//   it("5x6 board: north of [10, 2] is [10, 1]", () => { assert.deepEqual(north([10, 2]), [10, 1]) })
//   it("5x6 board: south of [0, 0] is [0, 1]", () => { assert.deepEqual(south([0, 0]), [0, 1]) })
//   it("5x6 board: south of [2, 0] is [2, 1]", () => { assert.deepEqual(south([2, 0]), [2, 1]) })
//   it("5x6 board: south of [4, 0] is [4, 1]", () => { assert.deepEqual(south([4, 0]), [4, 1]) })
//   it("5x6 board: south of [6, 0] is [6, 1]", () => { assert.deepEqual(south([6, 0]), [6, 1]) })
//   it("5x6 board: south of [8, 0] is [8, 1]", () => { assert.deepEqual(south([8, 0]), [8, 1]) })
//   it("5x6 board: south of [10, 0] is [10, 1]", () => { assert.deepEqual(south([10, 0]), [10, 1]) })
//   it("5x6 board: south of [1, 0] is [1, 1]", () => { assert.deepEqual(south([1, 0]), [1, 1]) })
//   it("5x6 board: south of [3, 0] is [3, 1]", () => { assert.deepEqual(south([3, 0]), [3, 1]) })
//   it("5x6 board: south of [5, 0] is [5, 1]", () => { assert.deepEqual(south([5, 0]), [5, 1]) })
//   it("5x6 board: south of [7, 0] is [7, 1]", () => { assert.deepEqual(south([7, 0]), [7, 1]) })
//   it("5x6 board: south of [9, 0] is [9, 1]", () => { assert.deepEqual(south([9, 0]), [9, 1]) })
//   it("5x6 board: south of [11, 0] is [11, 1]", () => { assert.deepEqual(south([11, 0]), [11, 1]) })
//   it("5x6 board: south of [0, 1] is [0, 2]", () => { assert.deepEqual(south([0, 1]), [0, 2]) })
//   it("5x6 board: south of [2, 1] is [2, 2]", () => { assert.deepEqual(south([2, 1]), [2, 2]) })
//   it("5x6 board: south of [4, 1] is [4, 2]", () => { assert.deepEqual(south([4, 1]), [4, 2]) })
//   it("5x6 board: south of [6, 1] is [6, 2]", () => { assert.deepEqual(south([6, 1]), [6, 2]) })
//   it("5x6 board: south of [8, 1] is [8, 2]", () => { assert.deepEqual(south([8, 1]), [8, 2]) })
//   it("5x6 board: south of [10, 1] is [10, 2]", () => { assert.deepEqual(south([10, 1]), [10, 2]) })
//   it("5x6 board: northeast of [1, 0] is [2, 0]", () => { assert.deepEqual(northeast([1, 0]), [2, 0]) })
//   it("5x6 board: northeast of [3, 0] is [4, 0]", () => { assert.deepEqual(northeast([3, 0]), [4, 0]) })
//   it("5x6 board: northeast of [5, 0] is [6, 0]", () => { assert.deepEqual(northeast([5, 0]), [6, 0]) })
//   it("5x6 board: northeast of [7, 0] is [8, 0]", () => { assert.deepEqual(northeast([7, 0]), [8, 0]) })
//   it("5x6 board: northeast of [9, 0] is [10, 0]", () => { assert.deepEqual(northeast([9, 0]), [10, 0]) })
//   it("5x6 board: northeast of [0, 1] is [1, 0]", () => { assert.deepEqual(northeast([0, 1]), [1, 0]) })
//   it("5x6 board: northeast of [2, 1] is [3, 0]", () => { assert.deepEqual(northeast([2, 1]), [3, 0]) })
//   it("5x6 board: northeast of [4, 1] is [5, 0]", () => { assert.deepEqual(northeast([4, 1]), [5, 0]) })
//   it("5x6 board: northeast of [6, 1] is [7, 0]", () => { assert.deepEqual(northeast([6, 1]), [7, 0]) })
//   it("5x6 board: northeast of [8, 1] is [9, 0]", () => { assert.deepEqual(northeast([8, 1]), [9, 0]) })
//   it("5x6 board: northeast of [10, 1] is [11, 0]", () => { assert.deepEqual(northeast([10, 1]), [11, 0]) })
//   it("5x6 board: northeast of [1, 1] is [2, 1]", () => { assert.deepEqual(northeast([1, 1]), [2, 1]) })
//   it("5x6 board: northeast of [3, 1] is [4, 1]", () => { assert.deepEqual(northeast([3, 1]), [4, 1]) })
//   it("5x6 board: northeast of [5, 1] is [6, 1]", () => { assert.deepEqual(northeast([5, 1]), [6, 1]) })
//   it("5x6 board: northeast of [7, 1] is [8, 1]", () => { assert.deepEqual(northeast([7, 1]), [8, 1]) })
//   it("5x6 board: northeast of [9, 1] is [10, 1]", () => { assert.deepEqual(northeast([9, 1]), [10, 1]) })
//   it("5x6 board: northeast of [0, 2] is [1, 1]", () => { assert.deepEqual(northeast([0, 2]), [1, 1]) })
//   it("5x6 board: northeast of [2, 2] is [3, 1]", () => { assert.deepEqual(northeast([2, 2]), [3, 1]) })
//   it("5x6 board: northeast of [4, 2] is [5, 1]", () => { assert.deepEqual(northeast([4, 2]), [5, 1]) })
//   it("5x6 board: northeast of [6, 2] is [7, 1]", () => { assert.deepEqual(northeast([6, 2]), [7, 1]) })
//   it("5x6 board: northeast of [8, 2] is [9, 1]", () => { assert.deepEqual(northeast([8, 2]), [9, 1]) })
//   it("5x6 board: northeast of [10, 2] is [11, 1]", () => { assert.deepEqual(northeast([10, 2]), [11, 1]) })
//   it("5x6 board: northwest of [1, 0] is [0, 0]", () => { assert.deepEqual(northwest([1, 0]), [0, 0]) })
//   it("5x6 board: northwest of [3, 0] is [2, 0]", () => { assert.deepEqual(northwest([3, 0]), [2, 0]) })
//   it("5x6 board: northwest of [5, 0] is [4, 0]", () => { assert.deepEqual(northwest([5, 0]), [4, 0]) })
//   it("5x6 board: northwest of [7, 0] is [6, 0]", () => { assert.deepEqual(northwest([7, 0]), [6, 0]) })
//   it("5x6 board: northwest of [9, 0] is [8, 0]", () => { assert.deepEqual(northwest([9, 0]), [8, 0]) })
//   it("5x6 board: northwest of [11, 0] is [10, 0]", () => { assert.deepEqual(northwest([11, 0]), [10, 0]) })
//   it("5x6 board: northwest of [2, 1] is [1, 0]", () => { assert.deepEqual(northwest([2, 1]), [1, 0]) })
//   it("5x6 board: northwest of [4, 1] is [3, 0]", () => { assert.deepEqual(northwest([4, 1]), [3, 0]) })
//   it("5x6 board: northwest of [6, 1] is [5, 0]", () => { assert.deepEqual(northwest([6, 1]), [5, 0]) })
//   it("5x6 board: northwest of [8, 1] is [7, 0]", () => { assert.deepEqual(northwest([8, 1]), [7, 0]) })
//   it("5x6 board: northwest of [10, 1] is [9, 0]", () => { assert.deepEqual(northwest([10, 1]), [9, 0]) })
//   it("5x6 board: northwest of [1, 1] is [0, 1]", () => { assert.deepEqual(northwest([1, 1]), [0, 1]) })
//   it("5x6 board: northwest of [3, 1] is [2, 1]", () => { assert.deepEqual(northwest([3, 1]), [2, 1]) })
//   it("5x6 board: northwest of [5, 1] is [4, 1]", () => { assert.deepEqual(northwest([5, 1]), [4, 1]) })
//   it("5x6 board: northwest of [7, 1] is [6, 1]", () => { assert.deepEqual(northwest([7, 1]), [6, 1]) })
//   it("5x6 board: northwest of [9, 1] is [8, 1]", () => { assert.deepEqual(northwest([9, 1]), [8, 1]) })
//   it("5x6 board: northwest of [11, 1] is [10, 1]", () => { assert.deepEqual(northwest([11, 1]), [10, 1]) })
//   it("5x6 board: northwest of [2, 2] is [1, 1]", () => { assert.deepEqual(northwest([2, 2]), [1, 1]) })
//   it("5x6 board: northwest of [4, 2] is [3, 1]", () => { assert.deepEqual(northwest([4, 2]), [3, 1]) })
//   it("5x6 board: northwest of [6, 2] is [5, 1]", () => { assert.deepEqual(northwest([6, 2]), [5, 1]) })
//   it("5x6 board: northwest of [8, 2] is [7, 1]", () => { assert.deepEqual(northwest([8, 2]), [7, 1]) })
//   it("5x6 board: northwest of [10, 2] is [9, 1]", () => { assert.deepEqual(northwest([10, 2]), [9, 1]) })
//   it("5x6 board: southwest of [2, 0] is [1, 0]", () => { assert.deepEqual(southwest([2, 0]), [1, 0]) })
//   it("5x6 board: southwest of [4, 0] is [3, 0]", () => { assert.deepEqual(southwest([4, 0]), [3, 0]) })
//   it("5x6 board: southwest of [6, 0] is [5, 0]", () => { assert.deepEqual(southwest([6, 0]), [5, 0]) })
//   it("5x6 board: southwest of [8, 0] is [7, 0]", () => { assert.deepEqual(southwest([8, 0]), [7, 0]) })
//   it("5x6 board: southwest of [10, 0] is [9, 0]", () => { assert.deepEqual(southwest([10, 0]), [9, 0]) })
//   it("5x6 board: southwest of [1, 0] is [0, 1]", () => { assert.deepEqual(southwest([1, 0]), [0, 1]) })
//   it("5x6 board: southwest of [3, 0] is [2, 1]", () => { assert.deepEqual(southwest([3, 0]), [2, 1]) })
//   it("5x6 board: southwest of [5, 0] is [4, 1]", () => { assert.deepEqual(southwest([5, 0]), [4, 1]) })
//   it("5x6 board: southwest of [7, 0] is [6, 1]", () => { assert.deepEqual(southwest([7, 0]), [6, 1]) })
//   it("5x6 board: southwest of [9, 0] is [8, 1]", () => { assert.deepEqual(southwest([9, 0]), [8, 1]) })
//   it("5x6 board: southwest of [11, 0] is [10, 1]", () => { assert.deepEqual(southwest([11, 0]), [10, 1]) })
//   it("5x6 board: southwest of [2, 1] is [1, 1]", () => { assert.deepEqual(southwest([2, 1]), [1, 1]) })
//   it("5x6 board: southwest of [4, 1] is [3, 1]", () => { assert.deepEqual(southwest([4, 1]), [3, 1]) })
//   it("5x6 board: southwest of [6, 1] is [5, 1]", () => { assert.deepEqual(southwest([6, 1]), [5, 1]) })
//   it("5x6 board: southwest of [8, 1] is [7, 1]", () => { assert.deepEqual(southwest([8, 1]), [7, 1]) })
//   it("5x6 board: southwest of [10, 1] is [9, 1]", () => { assert.deepEqual(southwest([10, 1]), [9, 1]) })
//   it("5x6 board: southwest of [1, 1] is [0, 2]", () => { assert.deepEqual(southwest([1, 1]), [0, 2]) })
//   it("5x6 board: southwest of [3, 1] is [2, 2]", () => { assert.deepEqual(southwest([3, 1]), [2, 2]) })
//   it("5x6 board: southwest of [5, 1] is [4, 2]", () => { assert.deepEqual(southwest([5, 1]), [4, 2]) })
//   it("5x6 board: southwest of [7, 1] is [6, 2]", () => { assert.deepEqual(southwest([7, 1]), [6, 2]) })
//   it("5x6 board: southwest of [9, 1] is [8, 2]", () => { assert.deepEqual(southwest([9, 1]), [8, 2]) })
//   it("5x6 board: southwest of [11, 1] is [10, 2]", () => { assert.deepEqual(southwest([11, 1]), [10, 2]) })
//   it("5x6 board: southeast of [0, 0] is [1, 0]", () => { assert.deepEqual(southeast([0, 0]), [1, 0]) })
//   it("5x6 board: southeast of [2, 0] is [3, 0]", () => { assert.deepEqual(southeast([2, 0]), [3, 0]) })
//   it("5x6 board: southeast of [4, 0] is [5, 0]", () => { assert.deepEqual(southeast([4, 0]), [5, 0]) })
//   it("5x6 board: southeast of [6, 0] is [7, 0]", () => { assert.deepEqual(southeast([6, 0]), [7, 0]) })
//   it("5x6 board: southeast of [8, 0] is [9, 0]", () => { assert.deepEqual(southeast([8, 0]), [9, 0]) })
//   it("5x6 board: southeast of [10, 0] is [11, 0]", () => { assert.deepEqual(southeast([10, 0]), [11, 0]) })
//   it("5x6 board: southeast of [1, 0] is [2, 1]", () => { assert.deepEqual(southeast([1, 0]), [2, 1]) })
//   it("5x6 board: southeast of [3, 0] is [4, 1]", () => { assert.deepEqual(southeast([3, 0]), [4, 1]) })
//   it("5x6 board: southeast of [5, 0] is [6, 1]", () => { assert.deepEqual(southeast([5, 0]), [6, 1]) })
//   it("5x6 board: southeast of [7, 0] is [8, 1]", () => { assert.deepEqual(southeast([7, 0]), [8, 1]) })
//   it("5x6 board: southeast of [9, 0] is [10, 1]", () => { assert.deepEqual(southeast([9, 0]), [10, 1]) })
//   it("5x6 board: southeast of [0, 1] is [1, 1]", () => { assert.deepEqual(southeast([0, 1]), [1, 1]) })
//   it("5x6 board: southeast of [2, 1] is [3, 1]", () => { assert.deepEqual(southeast([2, 1]), [3, 1]) })
//   it("5x6 board: southeast of [4, 1] is [5, 1]", () => { assert.deepEqual(southeast([4, 1]), [5, 1]) })
//   it("5x6 board: southeast of [6, 1] is [7, 1]", () => { assert.deepEqual(southeast([6, 1]), [7, 1]) })
//   it("5x6 board: southeast of [8, 1] is [9, 1]", () => { assert.deepEqual(southeast([8, 1]), [9, 1]) })
//   it("5x6 board: southeast of [10, 1] is [11, 1]", () => { assert.deepEqual(southeast([10, 1]), [11, 1]) })
//   it("5x6 board: southeast of [1, 1] is [2, 2]", () => { assert.deepEqual(southeast([1, 1]), [2, 2]) })
//   it("5x6 board: southeast of [3, 1] is [4, 2]", () => { assert.deepEqual(southeast([3, 1]), [4, 2]) })
//   it("5x6 board: southeast of [5, 1] is [6, 2]", () => { assert.deepEqual(southeast([5, 1]), [6, 2]) })
//   it("5x6 board: southeast of [7, 1] is [8, 2]", () => { assert.deepEqual(southeast([7, 1]), [8, 2]) })
//   it("5x6 board: southeast of [9, 1] is [10, 2]", () => { assert.deepEqual(southeast([9, 1]), [10, 2]) })
// })


// describe("6 by 4 board", () => {
//   it("north of [0, 1] is [0, 0]", () => { assert.deepEqual(north([0, 1]), [0, 0]) })
//   it("north of [0, 2] is [0, 1]", () => { assert.deepEqual(north([0, 2]), [0, 1]) })
//   it("north of [1, 1] is [1, 0]", () => { assert.deepEqual(north([1, 1]), [1, 0]) })
//   it("north of [1, 2] is [1, 1]", () => { assert.deepEqual(north([1, 2]), [1, 1]) })
//   it("north of [2, 1] is [2, 0]", () => { assert.deepEqual(north([2, 1]), [2, 0]) })
//   it("north of [2, 2] is [2, 1]", () => { assert.deepEqual(north([2, 2]), [2, 1]) })
//   it("north of [3, 1] is [3, 0]", () => { assert.deepEqual(north([3, 1]), [3, 0]) })
//   it("north of [3, 2] is [3, 1]", () => { assert.deepEqual(north([3, 2]), [3, 1]) })
//   it("north of [4, 1] is [4, 0]", () => { assert.deepEqual(north([4, 1]), [4, 0]) })
//   it("north of [4, 2] is [4, 1]", () => { assert.deepEqual(north([4, 2]), [4, 1]) })
//   it("north of [5, 1] is [5, 0]", () => { assert.deepEqual(north([5, 1]), [5, 0]) })
//   it("north of [5, 2] is [5, 1]", () => { assert.deepEqual(north([5, 2]), [5, 1]) })
//   it("north of [6, 1] is [6, 0]", () => { assert.deepEqual(north([6, 1]), [6, 0]) })
//   it("north of [6, 2] is [6, 1]", () => { assert.deepEqual(north([6, 2]), [6, 1]) })
//   it("north of [7, 1] is [7, 0]", () => { assert.deepEqual(north([7, 1]), [7, 0]) })
//   it("north of [7, 2] is [7, 1]", () => { assert.deepEqual(north([7, 2]), [7, 1]) })
//   it("northeast of [0, 1] is [1, 0]", () => { assert.deepEqual(northeast([0, 1]), [1, 0]) })
//   it("northeast of [0, 2] is [1, 1]", () => { assert.deepEqual(northeast([0, 2]), [1, 1]) })
//   it("northeast of [1, 0] is [2, 0]", () => { assert.deepEqual(northeast([1, 0]), [2, 0]) })
//   it("northeast of [1, 1] is [2, 1]", () => { assert.deepEqual(northeast([1, 1]), [2, 1]) })
//   it("northeast of [1, 2] is [2, 2]", () => { assert.deepEqual(northeast([1, 2]), [2, 2]) })
//   it("northeast of [2, 1] is [3, 0]", () => { assert.deepEqual(northeast([2, 1]), [3, 0]) })
//   it("northeast of [2, 2] is [3, 1]", () => { assert.deepEqual(northeast([2, 2]), [3, 1]) })
//   it("northeast of [3, 0] is [4, 0]", () => { assert.deepEqual(northeast([3, 0]), [4, 0]) })
//   it("northeast of [3, 1] is [4, 1]", () => { assert.deepEqual(northeast([3, 1]), [4, 1]) })
//   it("northeast of [3, 2] is [4, 2]", () => { assert.deepEqual(northeast([3, 2]), [4, 2]) })
//   it("northeast of [4, 1] is [5, 0]", () => { assert.deepEqual(northeast([4, 1]), [5, 0]) })
//   it("northeast of [4, 2] is [5, 1]", () => { assert.deepEqual(northeast([4, 2]), [5, 1]) })
//   it("northeast of [5, 0] is [6, 0]", () => { assert.deepEqual(northeast([5, 0]), [6, 0]) })
//   it("northeast of [5, 1] is [6, 1]", () => { assert.deepEqual(northeast([5, 1]), [6, 1]) })
//   it("northeast of [5, 2] is [6, 2]", () => { assert.deepEqual(northeast([5, 2]), [6, 2]) })
//   it("northeast of [6, 1] is [7, 0]", () => { assert.deepEqual(northeast([6, 1]), [7, 0]) })
//   it("northeast of [6, 2] is [7, 1]", () => { assert.deepEqual(northeast([6, 2]), [7, 1]) })
//   it("southeast of [0, 0] is [1, 0]", () => { assert.deepEqual(southeast([0, 0]), [1, 0]) })
//   it("southeast of [0, 1] is [1, 1]", () => { assert.deepEqual(southeast([0, 1]), [1, 1]) })
//   it("southeast of [0, 2] is [1, 2]", () => { assert.deepEqual(southeast([0, 2]), [1, 2]) })
//   it("southeast of [1, 0] is [2, 1]", () => { assert.deepEqual(southeast([1, 0]), [2, 1]) })
//   it("southeast of [1, 1] is [2, 2]", () => { assert.deepEqual(southeast([1, 1]), [2, 2]) })
//   it("southeast of [2, 0] is [3, 0]", () => { assert.deepEqual(southeast([2, 0]), [3, 0]) })
//   it("southeast of [2, 1] is [3, 1]", () => { assert.deepEqual(southeast([2, 1]), [3, 1]) })
//   it("southeast of [2, 2] is [3, 2]", () => { assert.deepEqual(southeast([2, 2]), [3, 2]) })
//   it("southeast of [3, 0] is [4, 1]", () => { assert.deepEqual(southeast([3, 0]), [4, 1]) })
//   it("southeast of [3, 1] is [4, 2]", () => { assert.deepEqual(southeast([3, 1]), [4, 2]) })
//   it("southeast of [4, 0] is [5, 0]", () => { assert.deepEqual(southeast([4, 0]), [5, 0]) })
//   it("southeast of [4, 1] is [5, 1]", () => { assert.deepEqual(southeast([4, 1]), [5, 1]) })
//   it("southeast of [4, 2] is [5, 2]", () => { assert.deepEqual(southeast([4, 2]), [5, 2]) })
//   it("southeast of [5, 0] is [6, 1]", () => { assert.deepEqual(southeast([5, 0]), [6, 1]) })
//   it("southeast of [5, 1] is [6, 2]", () => { assert.deepEqual(southeast([5, 1]), [6, 2]) })
//   it("southeast of [6, 0] is [7, 0]", () => { assert.deepEqual(southeast([6, 0]), [7, 0]) })
//   it("southeast of [6, 1] is [7, 1]", () => { assert.deepEqual(southeast([6, 1]), [7, 1]) })
//   it("southeast of [6, 2] is [7, 2]", () => { assert.deepEqual(southeast([6, 2]), [7, 2]) })
//   it("south of [0, 0] is [0, 1]", () => { assert.deepEqual(south([0, 0]), [0, 1]) })
//   it("south of [0, 1] is [0, 2]", () => { assert.deepEqual(south([0, 1]), [0, 2]) })
//   it("south of [1, 0] is [1, 1]", () => { assert.deepEqual(south([1, 0]), [1, 1]) })
//   it("south of [1, 1] is [1, 2]", () => { assert.deepEqual(south([1, 1]), [1, 2]) })
//   it("south of [2, 0] is [2, 1]", () => { assert.deepEqual(south([2, 0]), [2, 1]) })
//   it("south of [2, 1] is [2, 2]", () => { assert.deepEqual(south([2, 1]), [2, 2]) })
//   it("south of [3, 0] is [3, 1]", () => { assert.deepEqual(south([3, 0]), [3, 1]) })
//   it("south of [3, 1] is [3, 2]", () => { assert.deepEqual(south([3, 1]), [3, 2]) })
//   it("south of [4, 0] is [4, 1]", () => { assert.deepEqual(south([4, 0]), [4, 1]) })
//   it("south of [4, 1] is [4, 2]", () => { assert.deepEqual(south([4, 1]), [4, 2]) })
//   it("south of [5, 0] is [5, 1]", () => { assert.deepEqual(south([5, 0]), [5, 1]) })
//   it("south of [5, 1] is [5, 2]", () => { assert.deepEqual(south([5, 1]), [5, 2]) })
//   it("south of [6, 0] is [6, 1]", () => { assert.deepEqual(south([6, 0]), [6, 1]) })
//   it("south of [6, 1] is [6, 2]", () => { assert.deepEqual(south([6, 1]), [6, 2]) })
//   it("south of [7, 0] is [7, 1]", () => { assert.deepEqual(south([7, 0]), [7, 1]) })
//   it("south of [7, 1] is [7, 2]", () => { assert.deepEqual(south([7, 1]), [7, 2]) })
//   it("southwest of [1, 0] is [0, 1]", () => { assert.deepEqual(southwest([1, 0]), [0, 1]) })
//   it("southwest of [1, 1] is [0, 2]", () => { assert.deepEqual(southwest([1, 1]), [0, 2]) })
//   it("southwest of [2, 0] is [1, 0]", () => { assert.deepEqual(southwest([2, 0]), [1, 0]) })
//   it("southwest of [2, 1] is [1, 1]", () => { assert.deepEqual(southwest([2, 1]), [1, 1]) })
//   it("southwest of [2, 2] is [1, 2]", () => { assert.deepEqual(southwest([2, 2]), [1, 2]) })
//   it("southwest of [3, 0] is [2, 1]", () => { assert.deepEqual(southwest([3, 0]), [2, 1]) })
//   it("southwest of [3, 1] is [2, 2]", () => { assert.deepEqual(southwest([3, 1]), [2, 2]) })
//   it("southwest of [4, 0] is [3, 0]", () => { assert.deepEqual(southwest([4, 0]), [3, 0]) })
//   it("southwest of [4, 1] is [3, 1]", () => { assert.deepEqual(southwest([4, 1]), [3, 1]) })
//   it("southwest of [4, 2] is [3, 2]", () => { assert.deepEqual(southwest([4, 2]), [3, 2]) })
//   it("southwest of [5, 0] is [4, 1]", () => { assert.deepEqual(southwest([5, 0]), [4, 1]) })
//   it("southwest of [5, 1] is [4, 2]", () => { assert.deepEqual(southwest([5, 1]), [4, 2]) })
//   it("southwest of [6, 0] is [5, 0]", () => { assert.deepEqual(southwest([6, 0]), [5, 0]) })
//   it("southwest of [6, 1] is [5, 1]", () => { assert.deepEqual(southwest([6, 1]), [5, 1]) })
//   it("southwest of [6, 2] is [5, 2]", () => { assert.deepEqual(southwest([6, 2]), [5, 2]) })
//   it("southwest of [7, 0] is [6, 1]", () => { assert.deepEqual(southwest([7, 0]), [6, 1]) })
//   it("southwest of [7, 1] is [6, 2]", () => { assert.deepEqual(southwest([7, 1]), [6, 2]) })
//   it("northwest of [1, 0] is [0, 0]", () => { assert.deepEqual(northwest([1, 0]), [0, 0]) })
//   it("northwest of [1, 1] is [0, 1]", () => { assert.deepEqual(northwest([1, 1]), [0, 1]) })
//   it("northwest of [1, 2] is [0, 1]", () => { assert.deepEqual(northwest([1, 2]), [0, 2]) })
//   it("northwest of [2, 1] is [1, 0]", () => { assert.deepEqual(northwest([2, 1]), [1, 0]) })
//   it("northwest of [2, 2] is [1, 1]", () => { assert.deepEqual(northwest([2, 2]), [1, 1]) })
//   it("northwest of [3, 0] is [2, 0]", () => { assert.deepEqual(northwest([3, 0]), [2, 0]) })
//   it("northwest of [3, 1] is [2, 1]", () => { assert.deepEqual(northwest([3, 1]), [2, 1]) })
//   it("northwest of [3, 2] is [2, 2]", () => { assert.deepEqual(northwest([3, 2]), [2, 2]) })
//   it("northwest of [4, 1] is [3, 0]", () => { assert.deepEqual(northwest([4, 1]), [3, 0]) })
//   it("northwest of [4, 2] is [3, 1]", () => { assert.deepEqual(northwest([4, 2]), [3, 1]) })
//   it("northwest of [5, 0] is [4, 0]", () => { assert.deepEqual(northwest([5, 0]), [4, 0]) })
//   it("northwest of [5, 1] is [4, 1]", () => { assert.deepEqual(northwest([5, 1]), [4, 1]) })
//   it("northwest of [5, 2] is [4, 2]", () => { assert.deepEqual(northwest([5, 2]), [4, 2]) })
//   it("northwest of [6, 1] is [5, 0]", () => { assert.deepEqual(northwest([6, 1]), [5, 0]) })
//   it("northwest of [6, 2] is [5, 1]", () => { assert.deepEqual(northwest([6, 2]), [5, 1]) })
//   it("northwest of [7, 0] is [6, 0]", () => { assert.deepEqual(northwest([7, 0]), [6, 0]) })
//   it("northwest of [7, 1] is [6, 1]", () => { assert.deepEqual(northwest([7, 1]), [6, 1]) })
//   it("northwest of [7, 2] is [6, 2]", () => { assert.deepEqual(northwest([7, 2]), [6, 2]) })
// })



// it("5x6 board: north of [0, 0] is false", () => { assert.deepEqual(north([0, 0]), false) })
// it("5x6 board: north of [2, 0] is false", () => { assert.deepEqual(north([2, 0]), false) })
// it("5x6 board: north of [4, 0] is false", () => { assert.deepEqual(north([4, 0]), false) })
// it("5x6 board: north of [6, 0] is false", () => { assert.deepEqual(north([6, 0]), false) })
// it("5x6 board: north of [8, 0] is false", () => { assert.deepEqual(north([8, 0]), false) })
// it("5x6 board: north of [10, 0] is false", () => { assert.deepEqual(north([10, 0]), false) })
// it("5x6 board: north of [1, 0] is false", () => { assert.deepEqual(north([1, 0]), false) })
// it("5x6 board: north of [3, 0] is false", () => { assert.deepEqual(north([3, 0]), false) })
// it("5x6 board: north of [5, 0] is false", () => { assert.deepEqual(north([5, 0]), false) })
// it("5x6 board: north of [7, 0] is false", () => { assert.deepEqual(north([7, 0]), false) })
// it("5x6 board: north of [9, 0] is false", () => { assert.deepEqual(north([9, 0]), false) })
// it("5x6 board: north of [11, 0] is false", () => { assert.deepEqual(north([11, 0]), false) })
// it("5x6 board: south of [1, 1] is false", () => { assert.deepEqual(south([1, 1]), false) })
// it("5x6 board: south of [3, 1] is false", () => { assert.deepEqual(south([3, 1]), false) })
// it("5x6 board: south of [5, 1] is false", () => { assert.deepEqual(south([5, 1]), false) })
// it("5x6 board: south of [7, 1] is false", () => { assert.deepEqual(south([7, 1]), false) })
// it("5x6 board: south of [9, 1] is false", () => { assert.deepEqual(south([9, 1]), false) })
// it("5x6 board: south of [11, 1] is false", () => { assert.deepEqual(south([11, 1]), false) })
// it("5x6 board: south of [0, 2] is false", () => { assert.deepEqual(south([0, 2]), false) })
// it("5x6 board: south of [2, 2] is false", () => { assert.deepEqual(south([2, 2]), false) })
// it("5x6 board: south of [4, 2] is false", () => { assert.deepEqual(south([4, 2]), false) })
// it("5x6 board: south of [6, 2] is false", () => { assert.deepEqual(south([6, 2]), false) })
// it("5x6 board: south of [8, 2] is false", () => { assert.deepEqual(south([8, 2]), false) })
// it("5x6 board: south of [10, 2] is false", () => { assert.deepEqual(south([10, 2]), false) })
// it("5x6 board: northeast of [0, 0] is false", () => { assert.deepEqual(northeast([0, 0]), false) })
// it("5x6 board: northeast of [2, 0] is false", () => { assert.deepEqual(northeast([2, 0]), false) })
// it("5x6 board: northeast of [4, 0] is false", () => { assert.deepEqual(northeast([4, 0]), false) })
// it("5x6 board: northeast of [6, 0] is false", () => { assert.deepEqual(northeast([6, 0]), false) })
// it("5x6 board: northeast of [8, 0] is false", () => { assert.deepEqual(northeast([8, 0]), false) })
// it("5x6 board: northeast of [10, 0] is false", () => { assert.deepEqual(northeast([10, 0]), false) })
// it("5x6 board: northeast of [11, 0] is false", () => { assert.deepEqual(northeast([11, 0]), false) })
// it("5x6 board: northeast of [11, 1] is false", () => { assert.deepEqual(northeast([11, 1]), false) })
// it("5x6 board: northwest of [0, 0] is false", () => { assert.deepEqual(northwest([0, 0]), false) })
// it("5x6 board: northwest of [2, 0] is false", () => { assert.deepEqual(northwest([2, 0]), false) })
// it("5x6 board: northwest of [4, 0] is false", () => { assert.deepEqual(northwest([4, 0]), false) })
// it("5x6 board: northwest of [6, 0] is false", () => { assert.deepEqual(northwest([6, 0]), false) })
// it("5x6 board: northwest of [8, 0] is false", () => { assert.deepEqual(northwest([8, 0]), false) })
// it("5x6 board: northwest of [10, 0] is false", () => { assert.deepEqual(northwest([10, 0]), false) })
// it("5x6 board: northwest of [0, 1] is false", () => { assert.deepEqual(northwest([0, 1]), false) })
// it("5x6 board: northwest of [0, 2] is false", () => { assert.deepEqual(northwest([0, 2]), false) })
// it("5x6 board: southwest of [0, 0] is false", () => { assert.deepEqual(southwest([0, 0]), false) })
// it("5x6 board: southwest of [0, 1] is false", () => { assert.deepEqual(southwest([0, 1]), false) })
// it("5x6 board: southwest of [0, 2] is false", () => { assert.deepEqual(southwest([0, 2]), false) })
// it("5x6 board: southwest of [2, 2] is false", () => { assert.deepEqual(southwest([2, 2]), false) })
// it("5x6 board: southwest of [4, 2] is false", () => { assert.deepEqual(southwest([4, 2]), false) })
// it("5x6 board: southwest of [6, 2] is false", () => { assert.deepEqual(southwest([6, 2]), false) })
// it("5x6 board: southwest of [8, 2] is false", () => { assert.deepEqual(southwest([8, 2]), false) })
// it("5x6 board: southwest of [10, 2] is false", () => { assert.deepEqual(southwest([10, 2]), false) })
// it("5x6 board: southeast of [11, 0] is false", () => { assert.deepEqual(southeast([11, 0]), false) })
// it("5x6 board: southeast of [11, 1] is false", () => { assert.deepEqual(southeast([11, 1]), false) })
// it("5x6 board: southeast of [0, 2] is false", () => { assert.deepEqual(southeast([0, 2]), false) })
// it("5x6 board: southeast of [2, 2] is false", () => { assert.deepEqual(southeast([2, 2]), false) })
// it("5x6 board: southeast of [4, 2] is false", () => { assert.deepEqual(southeast([4, 2]), false) })
// it("5x6 board: southeast of [6, 2] is false", () => { assert.deepEqual(southeast([6, 2]), false) })
// it("5x6 board: southeast of [8, 2] is false", () => { assert.deepEqual(southeast([8, 2]), false) })
// it("5x6 board: southeast of [10, 2] is false", () => { assert.deepEqual(southeast([10, 2]), false) })
// it("north of [0, 0] is false", () => { assert.deepEqual(north([0, 0]), false) })
// it("north of [1, 0] is false", () => { assert.deepEqual(north([1, 0]), false) })
// it("north of [2, 0] is false", () => { assert.deepEqual(north([2, 0]), false) })
// it("north of [3, 0] is false", () => { assert.deepEqual(north([3, 0]), false) })
// it("north of [4, 0] is false", () => { assert.deepEqual(north([4, 0]), false) })
// it("north of [5, 0] is false", () => { assert.deepEqual(north([5, 0]), false) })
// it("north of [6, 0] is false", () => { assert.deepEqual(north([6, 0]), false) })
// it("north of [7, 0] is false", () => { assert.deepEqual(north([7, 0]), false) })
// it("northeast of [0, 0] is false", () => { assert.deepEqual(northeast([0, 0]), false) })
// it("northeast of [2, 0] is false", () => { assert.deepEqual(northeast([2, 0]), false) })
// it("northeast of [4, 0] is false", () => { assert.deepEqual(northeast([4, 0]), false) })
// it("northeast of [6, 0] is false", () => { assert.deepEqual(northeast([6, 0]), false) })
// it("northeast of [7, 0] is false", () => { assert.deepEqual(northeast([7, 0]), false) })
// it("northeast of [7, 1] is false", () => { assert.deepEqual(northeast([7, 1]), false) })
// it("northeast of [7, 2] is false", () => { assert.deepEqual(northeast([7, 2]), false) })
// it("southeast of [1, 2] is false", () => { assert.deepEqual(southeast([1, 2]), false) })
// it("southeast of [3, 2] is false", () => { assert.deepEqual(southeast([3, 2]), false) })
// it("southeast of [5, 2] is false", () => { assert.deepEqual(southeast([5, 2]), false) })
// it("southeast of [7, 0] is false", () => { assert.deepEqual(southeast([7, 0]), false) })
// it("southeast of [7, 1] is false", () => { assert.deepEqual(southeast([7, 1]), false) })
// it("southeast of [7, 2] is false", () => { assert.deepEqual(southeast([7, 2]), false) })
// it("south of [0, 2] is false", () => { assert.deepEqual(south([0, 2]), false) })
// it("south of [1, 2] is false", () => { assert.deepEqual(south([1, 2]), false) })
// it("south of [2, 2] is false", () => { assert.deepEqual(south([2, 2]), false) })
// it("south of [3, 2] is false", () => { assert.deepEqual(south([3, 2]), false) })
// it("south of [4, 2] is false", () => { assert.deepEqual(south([4, 2]), false) })
// it("south of [5, 2] is false", () => { assert.deepEqual(south([5, 2]), false) })
// it("south of [6, 2] is false", () => { assert.deepEqual(south([6, 2]), false) })
// it("south of [7, 2] is false", () => { assert.deepEqual(south([7, 2]), false) })
// it("southwest of [0, 0] is false", () => { assert.deepEqual(southwest([0, 0]), false) })
// it("southwest of [0, 1] is false", () => { assert.deepEqual(southwest([0, 1]), false) })
// it("southwest of [0, 2] is false", () => { assert.deepEqual(southwest([0, 2]), false) })
// it("southwest of [1, 2] is false", () => { assert.deepEqual(southwest([1, 2]), false) })
// it("southwest of [3, 2] is false", () => { assert.deepEqual(southwest([3, 2]), false) })
// it("southwest of [5, 2] is false", () => { assert.deepEqual(southwest([5, 2]), false) })
// it("southwest of [7, 2] is false", () => { assert.deepEqual(southwest([7, 2]), false) })
// it("northwest of [0, 0] is false", () => { assert.deepEqual(northwest([0, 0]), false) })
// it("northwest of [0, 1] is false", () => { assert.deepEqual(northwest([0, 1]), false) })
// it("northwest of [0, 2] is false", () => { assert.deepEqual(northwest([0, 2]), false) })
// it("northwest of [2, 0] is false", () => { assert.deepEqual(northwest([2, 0]), false) })
// it("northwest of [4, 0] is false", () => { assert.deepEqual(northwest([4, 0]), false) })
// it("northwest of [6, 0] is false", () => { assert.deepEqual(northwest([6, 0]), false) })

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------- cstate-tests.spec.ts --------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------


// describe("place tests", () => {
//   it(`${str(place1)} on initialstate => placement1blackstate`, () => {
//     assert.deepEqual(cPlace(place1, initplacingstate), placement1blackstate)
//   })
//   it(`${str(place2)} on placement1blackstate => placement2brownstate`, () => {
//     assert.deepEqual(cPlace(place2, placement1blackstate), placement2brownstate)
//   })
//   it(`${str(place3)} on placement2brownstate => placement3whitestate`, () => {
//     assert.deepEqual(cPlace(place3, placement2brownstate), placement3whitestate)
//   })
//   it(`${str(place4)} on placement3whitestate => placement4redstate`, () => {
//     assert.deepEqual(cPlace(place4, placement3whitestate), placement4redstate)
//   })
//   it(`${str(place5)} on placement4redstate => placement5blackstate`, () => {
//     assert.deepEqual(cPlace(place5, placement4redstate), placement5blackstate)
//   })
//   it(`${str(place6)} on placement5blackstate => placement6brownstate`, () => {
//     assert.deepEqual(cPlace(place6, placement5blackstate), placement6brownstate)
//   })
//   it(`${str(place7)} on placement6brownstate => placement7whitestate`, () => {
//     assert.deepEqual(cPlace(place7, placement6brownstate), placement7whitestate)
//   })
//   it(`${str(place8)} on placement7whitestate => placement8redstate`, () => {
//     assert.deepEqual(cPlace(place8, placement7whitestate), placement8redstate)
//   })
// })

// describe("move tests", () => {
//   it(`${str(move1)} on playinginitstate => move1blackstate`, () => {
//     assert.deepEqual(cMove(playinginitstate, move1), move1blackstate)
//   })
//   it(`${str(move2)} on move1blackstate => move2brownstate`, () => {
//     assert.deepEqual(cMove(move1blackstate, move2), move2brownstate)
//   })
//   it(`${str(move3)} on move2brownstate => move3whitestate`, () => {
//     assert.deepEqual(cMove(move2brownstate, move3), move3whitestate)
//   })
//   it(`${str(move4)} on move3whitestate => move4redstate`, () => {
//     assert.deepEqual(cMove(move3whitestate, move4), move4redstate)
//   })
//   it(`${str(move5)} on move4redstate => move5blackstate`, () => {
//     assert.deepEqual(cMove(move4redstate, move5), move5blackstate)
//   })
//   it(`${str(move6)} on move5blackstate => move6brownstate`, () => {
//     assert.deepEqual(cMove(move5blackstate, move6), move6brownstate)
//   })
//   it(`${str(move7)} on move6brownstate => move7whitestate`, () => {
//     assert.deepEqual(cMove(move6brownstate, move7), move7whitestate)
//   })
//   it(`${str(move8)} on move7whitestate => move8redstate`, () => {
//     assert.deepEqual(cMove(move7whitestate, move8), move8redstate)
//   })
//   it(`${str(move9)} on move8redstate => move9blackstate`, () => {
//     assert.deepEqual(cMove(move8redstate, move9), move9blackstate)
//   })
//   it(`${str(move10)} on move9blackstate => move10brownstate`, () => {
//     assert.deepEqual(cMove(move9blackstate, move10), move10brownstate)
//   })
//   it(`${str(move11)} on move10brownstate => move11whitestate`, () => {
//     assert.deepEqual(cMove(move10brownstate, move11), move11whitestate)
//   })
//   it(`${str(move12)} on move11whitestate => move12redskipstate`, () => {
//     assert.deepEqual(cMove(move11whitestate, move12), move12redskipstate)
//   })
//   it(`${str(move13)} on move12redskipstate => move13blackstate`, () => {
//     assert.deepEqual(cMove(move12redskipstate, move13), move13blackstate)
//   })
//   it(`${str(move14)} on move13blackstate => move14brownstate`, () => {
//     assert.deepEqual(cMove(move13blackstate, move14), move14brownstate)
//   })
//   it(`${str(move15)} on move14brownstate => move15whiteskipstate`, () => {
//     assert.deepEqual(cMove(move14brownstate, move15), move15whiteskipstate)
//   })
//   it(`${str(move16)} on move15whiteskipstate => move16redskipstate`, () => {
//     assert.deepEqual(cMove(move15whiteskipstate, move16), move16redskipstate)
//   })
//   it(`${str(move17)} on move16redskipstate => move17blackstate`, () => {
//     assert.deepEqual(cMove(move16redskipstate, move17), move17blackstate)
//   })
//   it(`${str(move18)} on move17blackstate => move18brownstate`, () => {
//     assert.deepEqual(cMove(move17blackstate, move18), move18brownstate)
//   })
//   it(`${str(move19)} on move18brownstate => move19whiteskipstate`, () => {
//     assert.deepEqual(cMove(move18brownstate, move19), move19whiteskipstate)
//   })
//   it(`${str(move20)} on move19whiteskipstate => move20redskipstate`, () => {
//     assert.deepEqual(cMove(move19whiteskipstate, move20), move20redskipstate)
//   })
//   it(`${str(move21)} on move20redskipstate => move21blackstate`, () => {
//     assert.deepEqual(cMove(move20redskipstate, move21), move21blackstate)
//   })
//   it(`${str(move22)} on move21blackstate => move22brownstate`, () => {
//     assert.deepEqual(cMove(move21blackstate, move22), move22brownstate)
//   })
//   it(`${str(move23)} on move22brownstate => move23whiteskipstate`, () => {
//     assert.deepEqual(cMove(move22brownstate, move23), move23whiteskipstate)
//   })
//   it(`${str(move24)} on move23whiteskipstate => move24redskipstate`, () => {
//     assert.deepEqual(cMove(move23whiteskipstate, move24), move24redskipstate)
//   })
//   it(`${str(move25)} on move24redskipstate => move25blackstate`, () => {
//     assert.deepEqual(cMove(move24redskipstate, move25), move25blackstate)
//   })
//   it(`${str(move26)} on move25blackstate => move26brownstate`, () => {
//     assert.deepEqual(cMove(move25blackstate, move26), move26brownstate)
//   })
//   it(`${str(move27)} on move26brownstate => move27whiteskipstate`, () => {
//     assert.deepEqual(cMove(move26brownstate, move27), move27whiteskipstate)
//   })
//   it(`${str(move28)} on move27whiteskipstate => move28redskipstate`, () => {
//     assert.deepEqual(cMove(move27whiteskipstate, move28), move28redskipstate)
//   })
//   it(`${str(move29)} on move28redskipstate => move29blackskipstate`, () => {
//     assert.deepEqual(cMove(move28redskipstate, move29), move29blackskipstate)
//   })
//   it(`${str(move30)} on move29blackskipstate => move30brownskipstate`, () => {
//     assert.deepEqual(cMove(move29blackskipstate, move30), move30brownskipstate)
//   })
//   it(`${str(move31)} on move30brownskipstate => move31whiteskipstate`, () => {
//     assert.deepEqual(cMove(move30brownskipstate, move31), move31whiteskipstate)
//   })
//   it(`${str(move32)} on move31whiteskipstate => move32redskipstate`, () => {
//     assert.deepEqual(cMove(move31whiteskipstate, move32), move32redskipstate)
//   })
//   it(`${str(move33)} on move32redskipstate => move33blackstate`, () => {
//     assert.deepEqual(cMove(move32redskipstate, move33), move33blackstate)
//   })
// })

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------- cstate-to-schema-tests.spec.ts --------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// describe("test cstate/schem conversions", () => {
//   stateList.forEach((state, idx) => {
//     it(`testing on state ${idx}`, () => {
//       assert.deepEqual(state, schemaToCompact(cStateToSchema(state)))
//     })
//   })
// })

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------- dim-to-bin-board-tests.spec.ts --------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------


// describe("dimension to binaryBoard", () => {
//   it("2 by 1", () => { assert.deepEqual(dimToBinBoard(2, 1), [[1, 1]]) })
//   it("2 by 2", () => { assert.deepEqual(dimToBinBoard(2, 2), [[1, 1, 1, 1]]) })
//   it("2 by 3", () => { assert.deepEqual(dimToBinBoard(2, 3), [[1, 1, 1, 1, 1, 1]]) })
//   it("2 by 4", () => { assert.deepEqual(dimToBinBoard(2, 4), [[1, 1, 1, 1, 1, 1, 1, 1]]) })
//   it("2 by 5", () => { assert.deepEqual(dimToBinBoard(2, 5), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
//   it("2 by 6", () => { assert.deepEqual(dimToBinBoard(2, 6), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
//   it("3 by 1", () => { assert.deepEqual(dimToBinBoard(3, 1), [[1, 1], [1, 0]]) })
//   it("3 by 2", () => { assert.deepEqual(dimToBinBoard(3, 2), [[1, 1, 1, 1], [1, 0, 1, 0]]) })
//   it("3 by 3", () => { assert.deepEqual(dimToBinBoard(3, 3), [[1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0]]) })
//   it("3 by 4", () => { assert.deepEqual(dimToBinBoard(3, 4), [[1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0]]) })
//   it("3 by 5", () => { assert.deepEqual(dimToBinBoard(3, 5), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]]) })
//   it("3 by 6", () => { assert.deepEqual(dimToBinBoard(3, 6), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]]) })
//   it("4 by 1", () => { assert.deepEqual(dimToBinBoard(4, 1), [[1, 1], [1, 1]]) })
//   it("4 by 2", () => { assert.deepEqual(dimToBinBoard(4, 2), [[1, 1, 1, 1], [1, 1, 1, 1]]) })
//   it("4 by 3", () => { assert.deepEqual(dimToBinBoard(4, 3), [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]) })
//   it("4 by 4", () => { assert.deepEqual(dimToBinBoard(4, 4), [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]]) })
//   it("4 by 5", () => { assert.deepEqual(dimToBinBoard(4, 5), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
//   it("4 by 6", () => { assert.deepEqual(dimToBinBoard(4, 6), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
//   it("5 by 1", () => { assert.deepEqual(dimToBinBoard(5, 1), [[1, 1], [1, 1], [1, 0]]) })
//   it("5 by 2", () => { assert.deepEqual(dimToBinBoard(5, 2), [[1, 1, 1, 1], [1, 1, 1, 1], [1, 0, 1, 0]]) })
//   it("5 by 3", () => { assert.deepEqual(dimToBinBoard(5, 3), [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0]]) })
//   it("5 by 4", () => { assert.deepEqual(dimToBinBoard(5, 4), [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0]]) })
//   it("5 by 5", () => { assert.deepEqual(dimToBinBoard(5, 5), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]]) })
//   it("5 by 6", () => { assert.deepEqual(dimToBinBoard(5, 6), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]]) })
//   it("6 by 1", () => { assert.deepEqual(dimToBinBoard(6, 1), [[1, 1], [1, 1], [1, 1]]) })
//   it("6 by 2", () => { assert.deepEqual(dimToBinBoard(6, 2), [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]) })
//   it("6 by 3", () => { assert.deepEqual(dimToBinBoard(6, 3), [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]) })
//   it("6 by 4", () => { assert.deepEqual(dimToBinBoard(6, 4), [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]]) })
//   it("6 by 5", () => { assert.deepEqual(dimToBinBoard(6, 5), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
//   it("6 by 6", () => { assert.deepEqual(dimToBinBoard(6, 6), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
// })

// describe("test 2d array gen", () => {
//   it("1 by 1", () => {
//     assert.deepEqual(array2DFill(1, 1, 0), [[0]])
//   })
//   it("2 by 3", () => {
//     assert.deepEqual(array2DFill(2, 3, 0), [[0, 0, 0], [0, 0, 0]])
//   })
//   it("3 by 2", () => {
//     assert.deepEqual(array2DFill(3, 2, 0), [[0, 0], [0, 0], [0, 0]])
//   })
// })

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------- game-tree-tests.spec.ts --------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------



// const smallBoard: CBoard = [[1, "hole", 2, "black", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]]
// const smallBoardH: CBoard = [["hole", "hole", 2, "black", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]]
// const smallBoardF: CBoard = [[1, "hole", 5, "black", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]]
// const smallScores: CScores = [["black", 0], ["red", 0]]
// const smallState: CState = ["playing", smallBoard, smallScores]

// const subBoard1: CBoard = [[1, "hole", "black", "hole", 3, "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]]
// const subScores1: CScores = [["red", 0], ["black", 2]]
// const subState1: CState = ["playing", subBoard1, subScores1]

// const subBoard2: CBoard = [[1, "hole", 2, "hole", "black", "red"], ["hole", "unusable", 2, "unusable", 4, "unusable"]]
// const subScores2: CScores = [["red", 0], ["black", 3]]
// const subState2: CState = ["playing", subBoard2, subScores2]

// const subBoard3: CBoard = [[1, "hole", 2, "hole", 3, "red"], ["hole", "unusable", "black", "unusable", 4, "unusable"]]
// const subScores3: CScores = [["red", 0], ["black", 2]]
// const subState3: CState = ["playing", subBoard3, subScores3]

// const subBoard4: CBoard = [[1, "hole", 2, "hole", 3, "red"], ["hole", "unusable", 2, "unusable", "black", "unusable"]]
// const subScores4: CScores = [["red", 0], ["black", 4]]
// const subState4: CState = ["playing", subBoard4, subScores4]


// describe("applying an action to a given state", () => {

//   it("make a valid move", () => {
//     assert.deepEqual(applyAction({ kind: "move", posn: [[0, 3], [0, 2]] }, smallState), subState1)
//   })

//   it("make an invalid move", () => {
//     assert.deepEqual(applyAction({ kind: "move", posn: [[0, 3], [0, 1]] }, smallState), { kind: "illegalAction" })
//   })

//   it("make a hole", () => {
//     assert.deepEqual(applyAction({ kind: "hole", posn: [0, 0] }, smallState), ["playing", smallBoardH, smallScores])
//   })

//   it("add fish", () => {
//     assert.deepEqual(applyAction({ kind: "placeFish", posn: [0, 2], totalFishes: 5 }, smallState), ["playing", smallBoardF, smallScores])
//   })


// })

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------- penguin-placement-strategy-tests.spec.ts --------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------


// export const placingboard: CBoard = [
//   [1, 3, 2, 1, 5, 4, 2, 1, 3, 4, 1, 4],
//   [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
//   [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
// ]

// export const placingscore: CScore[] = [["black", 0], ["brown", 0], ["white", 0], ["red", 0]];

// export const noholesboard: CBoard = [
//   [1, 3, 2, 1, 5, 4, 2, 1, 3, 4, 1, 4],
//   [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
//   [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
// ]

// export const playerscores: CScore[] = [["black", 0], ["brown", 0], ["white", 0], ["red", 0]];

// export const placingstate: CState = ["placing", noholesboard, playerscores]

// export const noholesboardplaced: CBoard = [
//   ["black", "white", "brown", "red", "white", 4, "red", 1, "black", 4, "brown", 4],
//   [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
//   [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
// ]

// export const placedstate: CState = ["placing", noholesboardplaced, playerscores]

// export const holesboard: CBoard = [
//   [1, "hole", 2, "hole", 5, 4, 2, "hole", 3, 4, 1, 4],
//   [5, 2, "hole", 2, 2, 3, "hole", 5, 4, 1, 3, 3],
//   [1, "unusable", 2, "unusable", "hole", "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
// ]

// export const threeplayerscores: CScore[] = [["black", 0], ["brown", 0], ["white", 0]];

// export const holesplacingstate: CState = ["placing", holesboard, threeplayerscores]

// export const holesboardplaced: CBoard = [
//   ["black", "hole", "brown", "hole", "white", "black", "black", "hole", "brown", "brown", "white", "white"],
//   [5, 2, "hole", 2, 2, 3, "hole", 5, 4, 1, 3, 3],
//   [1, "unusable", 2, "unusable", "hole", "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
// ]

// export const holesplacedstate: CState = ["placing", holesboardplaced, threeplayerscores]

// export const holesboard2: CBoard = [
//   [1, "hole", 2, "hole", 5, 4],
//   [5, 2, "hole", 2, 2, 3],
//   [1, "unusable", 2, "unusable", "hole"]
// ]

// export const holesboardplaced2: CBoard = [
//   ["black", "hole", "brown", "hole", "white", "black"],
//   ["brown", "black", "hole", "brown", "white", "white"],
//   [1, "unusable", 2, "unusable", "hole"]
// ]

// export const holesplacingstate2: CState = ["placing", holesboard2, threeplayerscores]

// export const holesplacedstate2: CState = ["placing", holesboardplaced2, threeplayerscores]

// describe("testing penguin placement strategy", () => {

//   it("place on a board with no holes and 4 players", () => {
//     assert.deepEqual(placedstate, placePenguinStrategy(placingstate))
//   })

//   it("place on a board with holes and 3 players", () => {
//     assert.deepEqual(holesplacedstate, placePenguinStrategy(holesplacingstate))
//   })

//   it("to check if it looks for a place in the next row", () => {
//     assert.deepEqual(holesplacedstate2, placePenguinStrategy(holesplacingstate2))
//   })

// })

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------- schema-to-cstate-tests.spec.ts --------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// describe("test schema to cboard conversion", () => {
//   it("converting example", () => {
//     assert.deepEqual(schemaToCompact(StateSchemaExample),
//       ["playing", [["black", "red"]], [["black", 4], ["red", 4]]])
//   })
// })

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------