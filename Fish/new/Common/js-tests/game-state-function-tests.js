var assert = chai.assert

const gs1 = makeGameState(makeGameStage("joining"), false, false, []);
const gs2 = createState(1234, gs1)[0]
const gs3 = createState(2345, gs2)[0]
const gs4 = createState(3456, gs3)[0]
const gs5 = createState(4567, gs4)[0]

describe("Create state: Adds an unused color as the oldest player to the gs", () => {

    it("1st player joins", () => {
        assert.deepEqual(createState(1234, gs1), [{ gameStage: "joining", board: false, nextMove: false, players: [[1234, { color: "red", score: 0 }]] }, "red"])
    })
    it("2nd player joins", () => {
        assert.deepEqual(createState(2345, gs2), [{ gameStage: "joining", board: false, nextMove: false, players: [[1234, { color: "red", score: 0 }], [2345, { color: "black", score: 0 }]] }, "black"])
    })
    it("3rd player joins", () => {
        assert.deepEqual(createState(3456, gs3), [{ gameStage: "joining", board: false, nextMove: false, players: [[1234, { color: "red", score: 0 }], [2345, { color: "black", score: 0 }], [3456, { color: "brown", score: 0 }]] }, "brown"])
    })
    it("4th player joins", () => {
        assert.deepEqual(createState(4567, gs4), [{ gameStage: "joining", board: false, nextMove: false, players: [[1234, { color: "red", score: 0 }], [2345, { color: "black", score: 0 }], [3456, { color: "brown", score: 0 }], [4567, { color: "white", score: 0 }]] }, "white"])
    })

})

describe("place a penguin at the given posn", () => {

    const players = [[1234, { color: "red", score: 0 }], [2345, { color: "black", score: 0 }], [3456, { color: "brown", score: 0 }], [4567, { color: "white", score: 0 }]];

    const gs_board_4players = makeGameState(makeGameStage("placing"), makeBoardWithSpecs(dimensionToBoard(4, 3), noOfFish, placePenguin, makeHole, []), false, players)


    const custom_gs = makeGameState("playing", makeBoardWithSpecs(boardFromGameState(gs_board_4players), noOfFish, placePenguin, makeHole,
        [["hole", [
            [1, 2],
            [0, 5]
        ]],
        ["fish", [
            [[0, 4], 5],
            [[0, 2], 2],
            [[1, 0], 3]
        ]]
        ]), false, playersFromGameState(gs_board_4players))

    const placed_player1 = placeAPenguin(1234, [0, 1], custom_gs)
    const placed_player2 = placeAPenguin(2345, [1, 4], placed_player1)
    const placed_player3 = placeAPenguin(3456, [0, 3], placed_player2)
    const placed_player4 = placeAPenguin(4567, [1, 1], placed_player3)

    const board1 = [[{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "red" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 2 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 5 } } },
    { kind: "usableSpace", occupiedBy: false }],

    [{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 3 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } }]
    ]

    const board2 = [[{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "red" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 2 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 5 } } },
    { kind: "usableSpace", occupiedBy: false }],

    [{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 3 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "black" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } }]
    ]
    const board3 = [[{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "red" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 2 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "brown" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 5 } } },
    { kind: "usableSpace", occupiedBy: false }],

    [{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 3 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "black" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } }]
    ]

    const board4 = [[{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "red" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 2 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "brown" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 5 } } },
    { kind: "usableSpace", occupiedBy: false }],

    [{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 3 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "white" } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "black" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } }]
    ]


    it("place 1st penguin", () => {
        assert.deepEqual(placeAPenguin(1234, [0, 1], custom_gs), { gameStage: "placing", board: board1, nextMove: false, players: players })
    })
    it("place 2nd penguin", () => {
        assert.deepEqual(placeAPenguin(2345, [1, 4], placed_player1), { gameStage: "placing", board: board2, nextMove: false, players: players })
    })
    it("place 3rd penguin", () => {
        assert.deepEqual(placeAPenguin(3456, [0, 3], placed_player2), { gameStage: "placing", board: board3, nextMove: false, players: players })
    })
    it("place 4th penguin", () => {
        assert.deepEqual(placeAPenguin(4567, [1, 1], placed_player3), { gameStage: "placing", board: board4, nextMove: false, players: players })
    })
    it("placing penguin where a penguin exists", () => {
        assert.deepEqual(placeAPenguin(1234, [1, 1], placed_player4), { gameStage: "placing", board: board4, nextMove: false, players: players })
    })
    it("placing penguin on a hole", () => {
        assert.deepEqual(placeAPenguin(1234, [1, 2], placed_player4), { gameStage: "placing", board: board4, nextMove: false, players: players })
    })



})

describe("make a move", () => {

    const move1234 = makeMove(1234, { row: 0, col: 1 }, { row: 1, col: 0 }, placed_player4)
    const move2345 = makeMove(2345, { row: 1, col: 4 }, { row: 0, col: 4 }, move1234)
    const move3456 = makeMove(3456, { row: 0, col: 3 }, { row: 1, col: 3 }, move2345)
    const move1234again = makeMove(1234, { row: 1, col: 0 }, { row: 0, col: 0 }, move3456)

    const board1 = [[{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 2 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "brown" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 5 } } },
    { kind: "usableSpace", occupiedBy: false }],

    [{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "red" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "white" } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "black" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } }]
    ]

    const board2 = [[{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 2 } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "brown" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "black" } } },
    { kind: "usableSpace", occupiedBy: false }],

    [{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "red" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "white" } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } }]
    ]

    const board3 = [[{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 2 } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "black" } } },
    { kind: "usableSpace", occupiedBy: false }],

    [{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "red" } } },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "white" } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "brown" } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } }]
    ]

    const board4 = [[{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "red" } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 2 } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "black" } } },
    { kind: "usableSpace", occupiedBy: false }],

    [{ kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "white" } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "brown" } } },
    { kind: "usableSpace", occupiedBy: false },
    { kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } }]
    ]


    it("player1 makes move", () => {
        assert.deepEqual(makeMove(1234, { row: 0, col: 1 }, { row: 1, col: 0 }, placed_player4), { gameStage: "playing", board: board1, nextMove: 2345, players: players })
    })
    it("player2 makes move", () => {
        assert.deepEqual(makeMove(2345, { row: 1, col: 4 }, { row: 0, col: 4 }, move1234), { gameStage: "playing", board: board2, nextMove: 3456, players: players })
    })
    it("player3 makes move", () => {
        assert.deepEqual(makeMove(3456, { row: 0, col: 3 }, { row: 1, col: 3 }, move2345), { gameStage: "playing", board: board3, nextMove: 1234, players: players })
    })
    it("move player4 to an unreachable position", () => {
        assert.deepEqual(makeMove(4567, { row: 1, col: 1 }, { row: 0, col: 2 }, move1234again), undefined)
    })
    it("move player3 to a hole", () => {
        assert.deepEqual(makeMove(3456, { row: 1, col: 3 }, { row: 1, col: 2 }, move1234again), undefined)
    })


})

describe("checks if game is still on / not over", () => {

    it("after first turn", () => {
        assert.deepEqual(isGameOn(placed_player4), true)
    })
    it("after second turn", () => {
        assert.deepEqual(isGameOn(move1234), true)
    })
    it("after third turn", () => {
        assert.deepEqual(isGameOn(move2345), true)
    })
    it("game is over", () => {
        assert.deepEqual(isGameOn(move1234again), true)
    })


})