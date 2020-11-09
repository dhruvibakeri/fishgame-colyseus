"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.isGameOver = exports.takeAction = exports.isValidAction = exports.makeAllMovesForAPenguin = exports.getValidSubStates = exports.getValidSubStatesForGameBoard = exports.applyToDirectlyReachable = exports.applyAction = exports.createGameTree = exports.addParent = exports.getChildren = exports.getStateFromTree = void 0;
var game_state_functions_1 = require("../states/game-state/game-state-functions");
var game_state_reachable_1 = require("../states/game-state/game-state-reachable");
var game_state_selectors_1 = require("../states/game-state/game-state-selectors");
var game_state_predicates_1 = require("../states/game-state/game-state-predicates");
var game_state_constructors_1 = require("../states/game-state/game-state-constructors");
// GameTree -> GameState
// gets the parent of the tree(current GameState)
function getStateFromTree(gameTree) {
    if (game_state_predicates_1.PRED_isGameState(gameTree)) {
        return gameTree;
    }
    else {
        return gameTree[0];
    }
}
exports.getStateFromTree = getStateFromTree;
// GameTree -> GameTree[]
// gets reachable states from the given GameTree
function getChildren(gameTree) {
    if (game_state_predicates_1.PRED_isGameState(gameTree)) {
        throw Error(gameTree + " has no children!");
    }
    else {
        return gameTree[1]();
    }
}
exports.getChildren = getChildren;
// GameState GameTree[] -> GameTree
// adds the given parent to the given subTrees
function addParent(gameState, subTrees) {
    return [gameState, function () { return subTrees; }];
}
exports.addParent = addParent;
// GameState -> GameTree
// create initial GameTree
function createGameTree(gameState) {
    // getValidSubStates returns a list of game trees. 
    return [gameState, function () { return getValidSubStates(gameState); }];
}
exports.createGameTree = createGameTree;
// GameState Action -> GameState | IllegalAction
// applies action on a given GameState only if it is legal
function applyAction(action, gs) {
    if (isValidAction(action, gs)) {
        return takeAction(action, gs);
    }
    else {
        return {
            kind: "illegalAction"
        };
    }
}
exports.applyAction = applyAction;
// applyToDirectlyReachable: GameState [GameState -> T] -> [GameState, T][]
// applies given function to all directly reachable states
function applyToDirectlyReachable(gs, func) {
    var directlyReachableStates = getValidSubStates(gs);
    var res = [];
    directlyReachableStates.forEach(function (s) {
        var currentState = getStateFromTree(s);
        res.push([currentState, func(currentState)]);
    });
    return res;
}
exports.applyToDirectlyReachable = applyToDirectlyReachable;
// - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - I N T E R N A L  - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - 
// GameState -> GameTree[]
// gets all reachable states from the given GameState
function getValidSubStatesForGameBoard(myGameState) {
    var res = [];
    var allPenguinPos = game_state_functions_1.getPenguinPositionsForGameBoard(game_state_selectors_1.GET_GameStateNextToPlace(myGameState), myGameState);
    // checks for GAME OVER and returns a state
    if (isGameOver(myGameState)) {
        var endGameState = game_state_functions_1.addFinalScore(myGameState);
        res = __spreadArrays(res, [endGameState]);
    }
    else {
        allPenguinPos.forEach(function (p) {
            res = __spreadArrays(res, makeAllMovesForAPenguin(p, myGameState));
        });
    }
    return res;
}
exports.getValidSubStatesForGameBoard = getValidSubStatesForGameBoard;
// GameState -> GameTree[]
// gets all reachable states from the given GameState
function getValidSubStates(myGameState) {
    var res = [];
    var allPenguinPos = game_state_functions_1.getPenguinPositions(game_state_selectors_1.GET_GameStateNextToPlace(myGameState), myGameState);
    allPenguinPos.forEach(function (p) {
        res = __spreadArrays(res, makeAllMovesForAPenguin(p, myGameState));
    });
    return res;
}
exports.getValidSubStates = getValidSubStates;
// BoardPosn GameState -> GameTree[]
// gets reachable states for a particular penguin of the given player according to the given GameState
function makeAllMovesForAPenguin(fromPosn, gs) {
    var res = [];
    var reachablePoints = game_state_reachable_1.getReachable(game_state_selectors_1.GET_GameStateBoard(gs), fromPosn);
    reachablePoints.sort(function (a, b) {
        return a.row == b.row ? a.col - b.col : a.row - b.row;
    });
    // accounts for SKIPS
    if (reachablePoints.length == 0) {
        var skipState_1 = game_state_functions_1.moveGameState(gs, "SKIP");
        res.push([skipState_1, function () { return getValidSubStates(skipState_1); }]);
    }
    else {
        reachablePoints.forEach(function (p) {
            var moveState = game_state_functions_1.moveGameState(gs, [fromPosn, p]);
            res.push([moveState, function () { return getValidSubStates(moveState); }]);
        });
    }
    return res;
}
exports.makeAllMovesForAPenguin = makeAllMovesForAPenguin;
// Action GameState -> boolean
// checks if given action is valid
function isValidAction(action, gs) {
    var board = game_state_selectors_1.GET_GameStateBoard(gs);
    switch (action.kind) {
        case "move":
            var posn = action.posn;
            return isValidMove(posn[0], posn[1], board);
        case "place":
            var posn_place = action.posn;
            return game_state_predicates_1.PRED_isFishSpace(board[posn_place.row][posn_place.col]);
        default:
            return false;
    }
}
exports.isValidAction = isValidAction;
// Action GameState -> GameState
// applies action to given GameState
function takeAction(action, gs) {
    var gameBoard = game_state_selectors_1.GET_GameStateBoard(gs);
    var new_board = game_state_functions_1.duplicateCBoard(gameBoard);
    switch (action.kind) {
        case "move":
            return game_state_functions_1.moveGameState(gs, action.posn);
        case "place":
            var noOfFish = game_state_selectors_1.GET_totalFishes(game_state_selectors_1.GET_OnTile(game_state_selectors_1.GET_OnUsableSpace(gameBoard[action.posn.row][action.posn.col])));
            new_board[action.posn.row][action.posn.col] = game_state_constructors_1.MAKE_PenguinSpace(game_state_selectors_1.GET_PlayerColor(action.player), noOfFish);
            return game_state_constructors_1.MAKE_GameState(game_state_constructors_1.MAKE_GameStatePlacing(game_state_selectors_1.GET_GameStateKind(gs), new_board, game_state_selectors_1.GET_GameStateNextToPlace(gs), game_state_selectors_1.GET_GameStatePlayers(gs)));
        default:
            return gs;
    }
}
exports.takeAction = takeAction;
// GameState -> boolean
// Checks whehter the game is over according to the 
// given gameState
function isGameOver(state) {
    var allPenguinPosns = game_state_functions_1.getAllPenguinPositionsForGameBoard(state);
    var board = game_state_selectors_1.GET_GameStateBoard(state);
    var allToPoints = [];
    for (var i = 0; i < allPenguinPosns.length; i++) {
        var reachablePoints = game_state_reachable_1.getReachable(board, allPenguinPosns[i]);
        allToPoints = __spreadArrays(allToPoints, reachablePoints);
    }
    return allToPoints.length === 0;
}
exports.isGameOver = isGameOver;
// checks if given move is a valid move
// TODO: fix the signatures for this.
function isValidMove(from, to, board) {
    var reachablePoints = game_state_reachable_1.getReachable(board, from);
    return isInArray(reachablePoints, to);
}
// checks if given item is in given list
function isInArray(list, item) {
    for (var i = 0; i < list.length; i++) {
        if (JSON.stringify(item) === JSON.stringify(list[i])) {
            return true;
        }
    }
    return false;
}
