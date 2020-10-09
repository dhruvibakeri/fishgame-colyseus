var assert = chai.assert

describe("get the background dimensions depending on the board dimension", () => {
    it("normal board dimension", () => {
        assert.deepEqual(backgDimensions(4, 3, 55), [715, 275])
    })
    it("1 X 1 with a really small size", () => {
        assert.deepEqual(backgDimensions(1, 1, 5), [25, 10])
    })
    it("large number of rows, large size", () => {
        assert.deepEqual(backgDimensions(44, 3, 100), [1300, 4500])
    })
})

describe("check if given board value does not represent a player's penguin", () => {

    it("positive integer", () => {
        assert.deepEqual(isNotPenguin(3), true)
    })
    it("negative integer", () => {
        assert.deepEqual(isNotPenguin(-3), true)
    })
    it("zero", () => {
        assert.deepEqual(isNotPenguin(0), true)
    })
    it("actual penguin", () => {
        assert.deepEqual(isNotPenguin('red'), false)
    })

})

describe("check if given board value does not represent a a hole", () => {

    it("positive integer", () => {
        assert.deepEqual(isNotHole(3), true)
    })
    it("negative integer except -1", () => {
        assert.deepEqual(isNotHole(-3), true)
    })
    it("zero", () => {
        assert.deepEqual(isNotHole(0), true)
    })
    it("actual hole", () => {
        assert.deepEqual(isNotHole(-1), false)
    })
    it("penguin color", () => {
        assert.deepEqual(isNotHole('red'), true)
    })

})

describe("create a hole at given position", () => {

    let board = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1]
    ]

    it("at [0,0]", () => {
        assert.deepEqual(makeHole(board, 0, 0), [
            [-1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1]
        ])
    })

    it("at [1,5]", () => {
        assert.deepEqual(makeHole(board, 1, 5), [
            [-1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, -1]
        ])
    })

    let board2 = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0]
    ]

    it("at a position with a blank tile(0)", () => {
        assert.deepEqual(makeHole(board2, 2, 1), [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1, 0]
        ])
    })

})

describe("add value representing 'no. of fish' at given board posn", () => {

    let board = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0]
    ]
    let board2 = [
        [1, 1, 1, 'red', 1, 1],
        [1, 1, 1, 1, -1, 1],
        [1, 0, 1, 0, 1, 0]
    ]

    it("at [0,0]", () => {
        assert.deepEqual(noOfFish(board, 0, 0, 4), [
            [4, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1, 0]
        ])
    })

    it("at [2,4]", () => {
        assert.deepEqual(noOfFish(board, 2, 4, 3), [
            [4, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 3, 0]
        ])
    })

    it("position with a player's penguin", () => {
        assert.deepEqual(noOfFish(board2, 0, 3, 3), [
            [1, 1, 1, 'red', 1, 1],
            [1, 1, 1, 1, -1, 1],
            [1, 0, 1, 0, 1, 0]
        ])
    })

    it("position with a blank tile", () => {
        assert.deepEqual(noOfFish(board2, 2, 1, 3), [
            [1, 1, 1, 'red', 1, 1],
            [1, 1, 1, 1, -1, 1],
            [1, 0, 1, 0, 1, 0]
        ])
    })
    it("position with a hole", () => {
        assert.deepEqual(noOfFish(board2, 1, 4, 3), [
            [1, 1, 1, 'red', 1, 1],
            [1, 1, 1, 1, -1, 1],
            [1, 0, 1, 0, 1, 0]
        ])
    })
})

describe("add value representing a penguin at given board posn", () => {

    let board = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0]
    ]
    let board2 = [
        [1, 1, 1, 'red', 1, 1],
        [1, 1, 1, 1, -1, 1],
        [1, 0, 1, 0, 1, 0]
    ]

    it("at [0,0]", () => {
        assert.deepEqual(placePenguin(board, 0, 0, 'red'), [
            ['red', 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1, 0]
        ])
    })

    it("at [2,4]", () => {
        assert.deepEqual(placePenguin(board, 2, 4, 'black'), [
            ['red', 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 'black', 0]
        ])
    })

    it("at a blank tile", () => {
        assert.deepEqual(placePenguin(board, 2, 5, 'black'), [
            ['red', 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 'black', 0]
        ])
    })

    it("at a hole", () => {
        assert.deepEqual(placePenguin(board2, 1, 4, 'white'), [
            [1, 1, 1, 'red', 1, 1],
            [1, 1, 1, 1, -1, 1],
            [1, 0, 1, 0, 1, 0]
        ])
    })


})

describe("add holes at specified values and have a given min. number of 1-fish tiles", () => {

    let board = [
        [1, 1, 1, 'red', 1, 1],
        [1, 1, 1, 1, -1, 1],
        [1, 0, 1, 0, 1, 0]
    ]
    let board2 = [
        ['black', 3, 4, 'brown', 2, 3],
        ['red', -1, 5, 2, 2, 'white']
    ]

    addBoardHolesMinFish(board, 3, [
        [0, 1],
        [1, 3],
        [2, 2]
    ]);

    it("check if holes have been created at specified posns", () => {
        assert.deepEqual([board[0][1], board[1][3], board[2][2]], [-1, -1, -1])
    })

    addBoardHolesMinFish(board2, 3, [[1, 3]])

    it("check whether 1-fish tiles been been added if min req was satisfied", () => {
        assert.deepEqual((countOneFishTiles(board2) >= 3), true)
    })

    addBoardHolesMinFish(board2, 5, [
        [1, 3]
    ]);

    it("check whether required 1-fish tiles have been added", () => {
        assert.deepEqual(countOneFishTiles(board2) >= 5, true)
    })

})

describe("checks if board has required no of min 1-fish tiles", () => {

    let board = [
        ['black', 1, 4, 'brown', 1, 3],
        ['red', -1, 5, 1, 1, 'white']
    ]

    it("board has min 1-fish tiles", () => {
        assert.deepEqual(hasMinFish(board, 3), true)
    })

    it("board does not have min 1-fish tiles", () => {
        assert.deepEqual(hasMinFish(board, 5), false)
    })


})

describe("counts no. of 1-fish tiles in a board", () => {

    let board = [
        ['black', 1, 4, 'brown', 1, 3],
        ['red', -1, 5, 1, 1, 'white']
    ]
    let board2 = [
        ['black', 4, 4, 'brown', 4, 3],
        ['red', -1, 5, 2, 4, 'white']
    ]

    it("board does has 4 1-fish tiles", () => {
        assert.deepEqual(countOneFishTiles(board), 4)
    })

    it("board does has no 1-fish tiles", () => {
        assert.deepEqual(countOneFishTiles(board2), 0)
    })


})

describe("gets board posns of changeable hex tiles", () => {
    let board = [
        ['black', 1, 4, 'brown', 1, 3],
        ['red', -1, 5, 1, 1, 'white']
    ]
    let board2 = [
        ['black', 1, 1, 'brown', 1, 1],
        ['red', -1, 1, 1, 1, 'white']
    ]
    let board3 = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0]
    ]

    it("retrieves board positions of changeable hex tiles", () => {
        assert.deepEqual(getChangablePoints(board), [
            [0, 2],
            [0, 5],
            [1, 2]
        ])
    })

    it("no changeable tiles", () => {
        assert.deepEqual(getChangablePoints(board2), [])
    })

    it("does not count 0 as a changeable tile", () => {
        assert.deepEqual(getChangablePoints(board3), [])
    })

})

describe("checks if a given value represents a changeable tile", () => {

    it("for 0 / blank tile", () => {
        assert.deepEqual(isChangeableState(0), false)
    })

    it("for -1 / hole", () => {
        assert.deepEqual(isChangeableState(-1), false)
    })

    it("for a penguin color", () => {
        assert.deepEqual(isChangeableState('red'), false)
    })

    it("a 1-fish tile", () => {
        assert.deepEqual(isChangeableState(1), false)
    })

    it("integer > 1", () => {
        assert.deepEqual(isChangeableState(5), true)
    })

})

describe("generates a board according to the given dimensions", () => {

    it("even rows, even cols", () => {
        assert.deepEqual(dimensionToBoard(4, 4), [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ])
    })

    it("odd rows, even cols", () => {
        assert.deepEqual(dimensionToBoard(3, 4), [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ])
    })

    it("odd rows, odd cols", () => {
        assert.deepEqual(dimensionToBoard(3, 3), [
            [1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1, 0]
        ])
    })

    it("even rows, odd cols", () => {
        assert.deepEqual(dimensionToBoard(4, 3), [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1]
        ])
    })


})

describe("create a hexagon with given configs", () => {

    it("normal usage", () => {
        assert.deepEqual(makeHex(55, 150, 120, [4, 5]), [
            [{ x: 150, y: 175 },
                { x: 205, y: 120 },
                { x: 260, y: 120 },
                { x: 315, y: 175 },
                { x: 260, y: 230 },
                { x: 205, y: 230 }
            ],
            [4, 5]
        ])
    })

})

describe("get tiles that are reachable from given boardPosn", () => {

    let board = [
        [1,1,1,1], 
        [1,1,1,1],
        [1,1,1,1]
    ]

    it("paths reachable from [2,1]", () => {
        assert.deepEqual(getReachable(board, {col:2, row:1}), 
        [
            {col:2,row:0},
            {col:2,row:2},
            {col:1,row:0},
            {col:3,row:0},
            {col:1,row:2},
            {col:3,row:2}
        ])
    })
    it("paths reachable from [0,0]", () => {
        assert.deepEqual(getReachable(board, {col:0, row:0}), 
        [
            {col:0,row:1},
            {col:0,row:2},
            {col:1,row:1},
            {col:2,row:2}
        ])
    })

})


describe("test getting neighbors in all directions for even and odd columns", () => {
    it("test getNeighborNorth", () => { 
        assert.deepEqual(getNeighborNorth({col: 2, row: 1}), {col:2,row:0}) 
      })
      
      it("test getNeighborSouth", () => { 
        assert.deepEqual(getNeighborSouth({col: 2, row: 1}), {col:2,row:2}) 
      })
      
      it("test getNeighborNorthWest", () => { 
        assert.deepEqual(getNeighborNorthWest({col: 2, row: 1}), {col:1,row:0}) 
      })
      
      it("test getNeighborNorthEast", () => { 
        assert.deepEqual(getNeighborNorthEast({col: 2, row: 1}), {col:3,row:0}) 
      })
      
      it("test getNeighborSouthWest", () => { 
        assert.deepEqual(getNeighborSouthWest({col: 2, row: 1}), {col:1,row:2}) 
      })
      
      it("test getNeighborSouthEast", () => { 
        assert.deepEqual(getNeighborSouthEast({col: 2, row: 1}), {col:3,row:2}) 
      })
      
      it("test getNeighborNorth", () => { 
        assert.deepEqual(getNeighborNorth({col: 1, row: 1}), {col:1,row:0}) 
      })
      
      it("test getNeighborSouth", () => { 
        assert.deepEqual(getNeighborSouth({col: 1, row: 1}), {col:1,row:2}) 
      })
      
      it("test getNeighborNorthWest", () => { 
        assert.deepEqual(getNeighborNorthWest({col: 1, row: 1}), {col:0,row:0}) 
      })
      
      it("test getNeighborNorthEast", () => { 
        assert.deepEqual(getNeighborNorthEast({col: 1, row: 1}), {col:2,row:0}) 
      })
      
      it("test getNeighborSouthWest", () => { 
        assert.deepEqual(getNeighborSouthWest({col: 1, row: 1}), {col:0,row:2}) 
      })
      
      it("test getNeighborSouthEast", () => { 
        assert.deepEqual(getNeighborSouthEast({col: 1, row: 1}), {col:2,row:2}) 
      })
})



