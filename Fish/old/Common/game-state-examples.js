// joining stage
const gs_first_stage = makeGameState(makeGameStage("joining"), false, false, []);
const gs_1player_join = createState(1234, gs_first_stage)[0]
const gs_2players_join = createState(2345, gs_1player_join)[0]
const gs_3players_join = createState(3456, gs_2players_join)[0]
const gs_4players_join = createState(4567, gs_3players_join)[0]

// generate board to start placing

const gs_board_4players = makeGameState(makeGameStage("placing"), makeBoardWithSpecs(dimensionToBoard(4, 3), noOfFish, placePenguin, makeHole, []), false, playersFromGameState(gs_4players_join))

// referee makes board changes

const custom_board_gs = makeGameState("playing", makeBoardWithSpecs(boardFromGameState(gs_board_4players), noOfFish, placePenguin, makeHole,
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

// placing stage
const placed_player1 = placeAPenguin(1234, [0, 1], custom_board_gs)
const placed_player2 = placeAPenguin(2345, [1, 4], placed_player1)
const placed_player3 = placeAPenguin(3456, [0, 3], placed_player2)
const placed_player4 = placeAPenguin(4567, [1, 1], placed_player3)

// penguins making moves

const move1234 = makeMove(1234, { row: 0, col: 1 }, { row: 1, col: 0 }, placed_player4)
const move2345 = makeMove(2345, { row: 1, col: 4 }, { row: 0, col: 4 }, move1234)
const move3456 = makeMove(3456, { row: 0, col: 3 }, { row: 1, col: 3 }, move2345)
const move1234again = makeMove(1234, { row: 1, col: 0 }, { row: 0, col: 0 }, move3456)


// no more moves left, game is over

const game_over = makeGameState("done", boardFromGameState(move1234again), false, playersFromGameState(move1234again))

all_game_states.push(game_over)


renderState(game_over)

console.log(all_game_states)

/*
ALL GAME STATES FOR A FULL GAME(played above) :
0: {gameStage: "joining", board: false, nextMove: false, players: Array(1)}
1: {gameStage: "joining", board: false, nextMove: false, players: Array(2)}
2: {gameStage: "joining", board: false, nextMove: false, players: Array(3)}
3: {gameStage: "joining", board: false, nextMove: false, players: Array(4)}
4: {gameStage: "placing", board: Array(2), nextMove: false, players: Array(4)}
5: {gameStage: "placing", board: Array(2), nextMove: false, players: Array(4)}
6: {gameStage: "placing", board: Array(2), nextMove: false, players: Array(4)}
7: {gameStage: "placing", board: Array(2), nextMove: false, players: Array(4)}
8: {gameStage: "playing", board: Array(2), nextMove: 2345, players: Array(4)}
9: {gameStage: "playing", board: Array(2), nextMove: 3456, players: Array(4)}
10: {gameStage: "playing", board: Array(2), nextMove: 1234, players: Array(4)}
11: {gameStage: "playing", board: Array(2), nextMove: false, players: Array(4)}
12: {gameStage: "done", board: Array(2), nextMove: false, players: Array(4)}
*/



