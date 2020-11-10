"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.placePenguinAtPosn = exports.getAllPenguinPositionsForGameBoard = exports.getPenguinPositionsForGameBoard = exports.getPenguinPositions = exports.moveGameState = exports.duplicateCBoard = exports.addFinalScore = exports.updateAndRotateScore = exports.placeOnBoard = exports.placeAtPosn = void 0;
var game_state_constructors_1 = require("./game-state-constructors");
var game_state_predicates_1 = require("./game-state-predicates");
var game_state_selectors_1 = require("./game-state-selectors");
/**
 * creates a GameState where player whose turn it is,is at the given posn
 */
function placeAtPosn(bPosn, state, scoreToAdd) {
    var _a = [bPosn.row, bPosn.col], row = _a[0], col = _a[1];
    var stateKind = game_state_selectors_1.GET_GameStateKind(state);
    var board = game_state_selectors_1.GET_GameStateBoard(state);
    var players = game_state_selectors_1.GET_GameStatePlayers(state);
    var fishesToCollect = game_state_selectors_1.GET_totalFishes(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[row][col])));
    var boardPlaced = placeOnBoard(board, bPosn, game_state_constructors_1.MAKE_PenguinSpace(game_state_selectors_1.GET_PlayerColor(players[0]), fishesToCollect));
    var newPlayers = updateAndRotateScore(players, function (old) { return old + scoreToAdd; });
    return game_state_constructors_1.MAKE_GameState(game_state_constructors_1.MAKE_GameStatePlaying(stateKind, boardPlaced, newPlayers[0], newPlayers));
}
exports.placeAtPosn = placeAtPosn;
/**
 * places the given space at BoardPosn in Board.
 */
function placeOnBoard(board, bPosn, space) {
    var _a = [bPosn.row, bPosn.col], row = _a[0], col = _a[1];
    board[row][col] = space;
    return board;
}
exports.placeOnBoard = placeOnBoard;
/**
 * Update the first elem of players with new score, then rotate the Players anti-clockwise.
 * This brings the player's whose turn is next at the top of the Players list
 */
function updateAndRotateScore(players, transFunc) {
    var currentPlayer = players[0], restOfPlayers = players.slice(1);
    var currentPenguin = game_state_selectors_1.GET_PlayerColor(currentPlayer);
    var currentScore = game_state_selectors_1.GET_PlayerScore(currentPlayer);
    var newCurrentPlayerScore = game_state_constructors_1.MAKE_Player(currentPenguin, transFunc(currentScore), game_state_selectors_1.GET_PlayerStatus(currentPlayer));
    return __spreadArrays(restOfPlayers, [newCurrentPlayerScore]);
}
exports.updateAndRotateScore = updateAndRotateScore;
function addFinalScore(state) {
    var board = game_state_selectors_1.GET_GameStateBoard(state);
    var players = game_state_selectors_1.GET_GameStatePlayers(state);
    var nplayers = [];
    for (var i = 0; i < players.length; i++) {
        var nscore = players[i].score; //+ getTotalFishesWithPenguin(players[i].penguinColor, board)
        nplayers.push(game_state_constructors_1.MAKE_Player(players[i].penguinColor, nscore, players[i].playerStatus));
    }
    return game_state_constructors_1.MAKE_GameState(game_state_constructors_1.MAKE_GameStatePlaying("playing", board, game_state_selectors_1.GET_GameStateNextToPlace(state), nplayers));
}
exports.addFinalScore = addFinalScore;
function getTotalFishesWithPenguin(penguinColor, board) {
    var fishCount = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
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
    var stateKind = game_state_selectors_1.GET_GameStateKind(state);
    var board = game_state_selectors_1.GET_GameStateBoard(state);
    var players = game_state_selectors_1.GET_GameStatePlayers(state);
    var nBoard = duplicateCBoard(board);
    if (bMove === "SKIP") {
        var newPlayers = updateAndRotateScore(players, function (oldScore) { return oldScore; });
        return game_state_constructors_1.MAKE_GameState(game_state_constructors_1.MAKE_GameStatePlaying(stateKind, nBoard, newPlayers[0], newPlayers));
    }
    else {
        var fromPosn = bMove[0], toPosn = bMove[1];
        var _a = [fromPosn.row, fromPosn.col], fromRow = _a[0], fromCol = _a[1];
        var fishesToCollect = game_state_selectors_1.GET_totalFishesFromPenguin(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[fromRow][fromCol])));
        var placedState = placeAtPosn(toPosn, game_state_constructors_1.MAKE_GameState(game_state_constructors_1.MAKE_GameStatePlaying(stateKind, nBoard, players[0], players)), fishesToCollect);
        nBoard[fromRow][fromCol] = { spaceKind: "usableSpace", onUsableSpace: { onUsableSpaceKind: "hole" } };
        return placedState;
    }
}
exports.moveGameState = moveGameState;
/**
 * gets the positions of all the penguins of the given player in the given GameState
 */
function getPenguinPositions(penguin, state) {
    var board = game_state_selectors_1.GET_GameStateBoard(state);
    var posns = [];
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
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
    var board = game_state_selectors_1.GET_GameStateBoard(state);
    var posns = [];
    for (var i = 0; i < board.length; i++) {
        // goes through all even colums (even rows in game board representation)
        for (var j = 0; j < board[i].length; j = j + 2) {
            if (game_state_predicates_1.PRED_isPenguinSpace(board[i][j])) {
                if ((game_state_selectors_1.GET_penguinColor(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[i][j]))) == game_state_selectors_1.GET_PlayerColor(penguin))) {
                    posns.push({ row: i, col: j });
                }
            }
        }
        // goes through all odd colums (odd rows in game board representation)
        for (var k = 1; k < board[i].length; k = k + 2) {
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
    var board = game_state_selectors_1.GET_GameStateBoard(state);
    var posns = [];
    for (var i = 0; i < board.length; i++) {
        // goes through all even colums (even rows in game board representation)
        for (var j = 0; j < board[i].length; j = j + 2) {
            if (game_state_predicates_1.PRED_isPenguinSpace(board[i][j])) {
                posns.push({ row: i, col: j });
            }
        }
        // goes through all odd colums (odd rows in game board representation)
        for (var k = 1; k < board[i].length; k = k + 2) {
            if (game_state_predicates_1.PRED_isPenguinSpace(board[i][k])) {
                posns.push({ row: i, col: k });
            }
        }
    }
    return posns;
}
exports.getAllPenguinPositionsForGameBoard = getAllPenguinPositionsForGameBoard;
function placePenguinAtPosn(bPosn, state) {
    var _a = [bPosn.row, bPosn.col], row = _a[0], col = _a[1];
    var stateKind = game_state_selectors_1.GET_GameStateKind(state);
    var board = game_state_selectors_1.GET_GameStateBoard(state);
    var players = game_state_selectors_1.GET_GameStatePlayers(state);
    var fishesToCollect = game_state_selectors_1.GET_totalFishes(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(board[row][col])));
    var boardPlaced = placeOnBoard(board, bPosn, game_state_constructors_1.MAKE_PenguinSpace(game_state_selectors_1.GET_PlayerColor(players[0]), fishesToCollect));
    var newPlayers = updateAndRotateScore(players, function (old) { return old + 0; });
    return game_state_constructors_1.MAKE_GameState(game_state_constructors_1.MAKE_GameStatePlacing(stateKind, boardPlaced, newPlayers[0], newPlayers));
}
exports.placePenguinAtPosn = placePenguinAtPosn;
