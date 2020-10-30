"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeAction = exports.isValidAction = exports.makeAllMovesForAPenguin = exports.getValidSubStates = exports.applyToDirectlyReachable = exports.applyAction = exports.createGameTree = exports.addParent = exports.getChildren = exports.getStateFromTree = void 0;
const board_reachable_1 = require("./board-reachable");
//------------------------------------- DATA DEFINITION -----------------------------------------------------------
const cstate_1 = require("./cstate");
// GameTree -> GameState
// gets the parent of the tree(current GameState)
function getStateFromTree(gameTree) {
    if (cstate_1.PRED_isCState(gameTree)) {
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
    if (cstate_1.PRED_isCState(gameTree)) {
        throw Error(`${gameTree} has no children!`);
    }
    else {
        return gameTree[1]();
    }
}
exports.getChildren = getChildren;
// GameState GameTree[] -> GameTree
// adds the given parent to the given subTrees
function addParent(gameState, subTrees) {
    return [gameState, () => subTrees];
}
exports.addParent = addParent;
// GameState -> GameTree
// create initial GameTree
function createGameTree(gameState) {
    // getValidSubStates returns a list of game trees. 
    return [gameState, () => { return getValidSubStates(gameState); }];
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
    let directlyReachableStates = getValidSubStates(gs);
    let res = [];
    directlyReachableStates.forEach(s => {
        let currentState = getStateFromTree(s);
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
function getValidSubStates(myGameState) {
    let res = [];
    let allPenguinPos = cstate_1.getPenguinPositions(cstate_1.GET_currentPlayer(cstate_1.GET__CScoresFromCState(myGameState)), myGameState);
    allPenguinPos.forEach(p => {
        res = [...res, ...makeAllMovesForAPenguin(cstate_1.GET_currentPlayer(cstate_1.GET__CScoresFromCState(myGameState)), p, myGameState)];
    });
    return res;
}
exports.getValidSubStates = getValidSubStates;
// UUID Posn GameState -> GameTree[]
// gets reachable states for a particular penguin of the given player according to the given GameState
function makeAllMovesForAPenguin(penguin, fromPosn, gs) {
    let res = [];
    let reachablePoints = board_reachable_1.getReachable(cstate_1.GET__CBoardFromCState(gs), fromPosn);
    reachablePoints.forEach(p => {
        let moveState = cstate_1.cMove(gs, [fromPosn, p]);
        res.push([moveState, () => { return getValidSubStates(moveState); }]);
    });
    return res;
}
exports.makeAllMovesForAPenguin = makeAllMovesForAPenguin;
// Action GameState -> boolean
// checks if given action is valid
function isValidAction(action, gs) {
    let board = cstate_1.GET__CBoardFromCState(gs);
    switch (action.kind) {
        case "move":
            let posn = action.posn;
            return isValidMove(posn[0], posn[1], board);
        case "place":
            let posn_place = action.posn;
            return cstate_1.PRED_isCSpaceACFish(board[posn_place[0]][posn_place[1]]);
        case "hole":
            let posn_hole = action.posn;
            return cstate_1.PRED_isCSpaceACFish(board[posn_hole[0]][posn_hole[1]]);
        case "placeFish":
            let posn_fish = action.posn;
            return cstate_1.PRED_isCSpaceACFish(board[posn_fish[0]][posn_fish[1]]);
        default:
            return false;
    }
}
exports.isValidAction = isValidAction;
// Action GameState -> GameState
// applies action to given GameState
function takeAction(action, gs) {
    let new_board = cstate_1.duplicateCBoard(cstate_1.GET__CBoardFromCState(gs));
    switch (action.kind) {
        case "move":
            return cstate_1.cMove(gs, action.posn);
            break;
        case "place":
            new_board[action.posn[0]][action.posn[1]] = action.player;
            return [cstate_1.GET__CStageFromCState(gs), new_board, cstate_1.GET__CScoresFromCState(gs)];
            break;
        case "hole":
            new_board[action.posn[0]][action.posn[1]] = "hole";
            return [cstate_1.GET__CStageFromCState(gs), new_board, cstate_1.GET__CScoresFromCState(gs)];
            break;
        case "placeFish":
            new_board[action.posn[0]][action.posn[1]] = action.totalFishes;
            return [cstate_1.GET__CStageFromCState(gs), new_board, cstate_1.GET__CScoresFromCState(gs)];
            break;
        default:
            return gs;
    }
}
exports.takeAction = takeAction;
// checks if given move is a valid move
function isValidMove(from, to, board) {
    let reachablePoints = board_reachable_1.getReachable(board, from);
    return isInArray(reachablePoints, to);
}
// checks if given item is in given list
function isInArray(list, item) {
    for (let i = 0; i < list.length; i++) {
        if (JSON.stringify(item) === JSON.stringify(list[i])) {
            return true;
        }
    }
    return false;
}
