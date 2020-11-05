"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPenguinPositionsForGameBoard = exports.getPenguinPositionsForGameBoard = exports.getPenguinPositions = exports.moveGameState = exports.duplicateCBoard = exports.addFinalScore = exports.updateAndRotateScore = exports.placeOnBoard = exports.placeAtPosn = void 0;
const game_state_constructors_1 = require("./game-state-constructors");
const game_state_predicates_1 = require("./game-state-predicates");
const game_state_selectors_1 = require("./game-state-selectors");
/**
 * creates a GameState where player whose turn it is,is at the given posn
 */
function placeAtPosn(bPosn, state, scoreToAdd) {
    const [row, col] = [bPosn.row, bPosn.col];
    const stateKind = game_state_selectors_1.GET_GameStateKind(state);
    const board = game_state_selectors_1.GET_GameStateBoard(state);
    const players = game_state_selectors_1.GET_GameStatePlayers(state);
    let fishesToCollect = game_state_selectors_1.GET_totalFishes(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[row][col])));
    let boardPlaced = placeOnBoard(board, bPosn, game_state_constructors_1.MAKE_PenguinSpace(game_state_selectors_1.GET_PlayerColor(players[0]), fishesToCollect));
    let newPlayers = updateAndRotateScore(players, (old) => { return old + scoreToAdd; });
    return game_state_constructors_1.MAKE_GameState(game_state_constructors_1.MAKE_GameStatePlaying(stateKind, boardPlaced, newPlayers[0], newPlayers));
}
exports.placeAtPosn = placeAtPosn;
/**
 * places the given space at BoardPosn in Board.
 */
function placeOnBoard(board, bPosn, space) {
    let [row, col] = [bPosn.row, bPosn.col];
    board[row][col] = space;
    return board;
}
exports.placeOnBoard = placeOnBoard;
/**
 * Update the first elem of players with new score, then rotate the Players anti-clockwise.
 * This brings the player's whose turn is next at the top of the Players list
 */
function updateAndRotateScore(players, transFunc) {
    const [currentPlayer, ...restOfPlayers] = players;
    const currentPenguin = game_state_selectors_1.GET_PlayerColor(currentPlayer);
    const currentScore = game_state_selectors_1.GET_PlayerScore(currentPlayer);
    const newCurrentPlayerScore = game_state_constructors_1.MAKE_Player(currentPenguin, transFunc(currentScore), game_state_selectors_1.GET_PlayerStatus(currentPlayer));
    return [...restOfPlayers, newCurrentPlayerScore];
}
exports.updateAndRotateScore = updateAndRotateScore;
function addFinalScore(state) {
    const board = game_state_selectors_1.GET_GameStateBoard(state);
    const players = game_state_selectors_1.GET_GameStatePlayers(state);
    const nplayers = [];
    for (let i = 0; i < players.length; i++) {
        let nscore = players[i].score + getTotalFishesWithPenguin(players[i].penguinColor, board);
        nplayers.push(game_state_constructors_1.MAKE_Player(players[i].penguinColor, nscore, players[i].playerStatus));
    }
    return game_state_constructors_1.MAKE_GameState(game_state_constructors_1.MAKE_GameStatePlaying("playing", board, game_state_selectors_1.GET_GameStateNextToPlace(state), nplayers));
}
exports.addFinalScore = addFinalScore;
function getTotalFishesWithPenguin(penguinColor, board) {
    let fishCount = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (game_state_predicates_1.PRED_isPenguinSpace(board[i][j])) {
                if ((game_state_selectors_1.GET_penguinColor(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[i][j]))) == penguinColor)) {
                    fishCount = fishCount + game_state_selectors_1.GET_totalFishesFromPenguin(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[i][j])));
                }
            }
        }
    }
    return fishCount;
}
// creates a deep copy of the given Board
function duplicateCBoard(board) {
    var newArray = board.map(function (b) {
        return b.slice();
    });
    return newArray;
}
exports.duplicateCBoard = duplicateCBoard;
/**
 * Moves the player whose turn it currently is to bMove in GameState.
 */
function moveGameState(state, bMove) {
    const stateKind = game_state_selectors_1.GET_GameStateKind(state);
    const board = game_state_selectors_1.GET_GameStateBoard(state);
    const players = game_state_selectors_1.GET_GameStatePlayers(state);
    let nBoard = duplicateCBoard(board);
    if (bMove === "SKIP") {
        let newPlayers = updateAndRotateScore(players, (oldScore) => oldScore);
        return game_state_constructors_1.MAKE_GameState(game_state_constructors_1.MAKE_GameStatePlaying(stateKind, nBoard, newPlayers[0], newPlayers));
    }
    else {
        const [fromPosn, toPosn] = bMove;
        const [fromRow, fromCol] = [fromPosn.row, fromPosn.col];
        let fishesToCollect = game_state_selectors_1.GET_totalFishesFromPenguin(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[fromRow][fromCol])));
        const placedState = placeAtPosn(toPosn, game_state_constructors_1.MAKE_GameState(game_state_constructors_1.MAKE_GameStatePlaying(stateKind, nBoard, players[0], players)), fishesToCollect);
        nBoard[fromRow][fromCol] = { spaceKind: "usableSpace", onUsableSpace: { onUsableSpaceKind: "hole" } };
        return placedState;
    }
}
exports.moveGameState = moveGameState;
/**
 * gets the positions of all the penguins of the given player in the given GameState
 */
function getPenguinPositions(penguin, state) {
    const board = game_state_selectors_1.GET_GameStateBoard(state);
    let posns = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (game_state_predicates_1.PRED_isPenguinSpace(board[i][j])) {
                if ((game_state_selectors_1.GET_penguinColor(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[i][j]))) == game_state_selectors_1.GET_PlayerColor(penguin))) {
                    posns.push({ row: i, col: j });
                }
            }
        }
    }
    return posns;
}
exports.getPenguinPositions = getPenguinPositions;
/**
 * gets the positions of all the penguins of the given player in the given GameState
 */
function getPenguinPositionsForGameBoard(penguin, state) {
    const board = game_state_selectors_1.GET_GameStateBoard(state);
    let posns = [];
    for (let i = 0; i < board.length; i++) {
        // goes through all even colums (even rows in game board representation)
        for (let j = 0; j < board[i].length; j = j + 2) {
            if (game_state_predicates_1.PRED_isPenguinSpace(board[i][j])) {
                if ((game_state_selectors_1.GET_penguinColor(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[i][j]))) == game_state_selectors_1.GET_PlayerColor(penguin))) {
                    posns.push({ row: i, col: j });
                }
            }
        }
        // goes through all odd colums (odd rows in game board representation)
        for (let k = 1; k < board[i].length; k = k + 2) {
            if (game_state_predicates_1.PRED_isPenguinSpace(board[i][k])) {
                if ((game_state_selectors_1.GET_penguinColor(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[i][k]))) == game_state_selectors_1.GET_PlayerColor(penguin))) {
                    posns.push({ row: i, col: k });
                }
            }
        }
    }
    return posns;
}
exports.getPenguinPositionsForGameBoard = getPenguinPositionsForGameBoard;
function getAllPenguinPositionsForGameBoard(state) {
    const board = game_state_selectors_1.GET_GameStateBoard(state);
    let posns = [];
    for (let i = 0; i < board.length; i++) {
        // goes through all even colums (even rows in game board representation)
        for (let j = 0; j < board[i].length; j = j + 2) {
            if (game_state_predicates_1.PRED_isPenguinSpace(board[i][j])) {
                posns.push({ row: i, col: j });
            }
        }
        // goes through all odd colums (odd rows in game board representation)
        for (let k = 1; k < board[i].length; k = k + 2) {
            if (game_state_predicates_1.PRED_isPenguinSpace(board[i][k])) {
                posns.push({ row: i, col: k });
            }
        }
    }
    return posns;
}
exports.getAllPenguinPositionsForGameBoard = getAllPenguinPositionsForGameBoard;
//# sourceMappingURL=game-state-functions.js.map