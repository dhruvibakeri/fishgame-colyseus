"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placingstate = exports.placingscore = exports.placingboard = exports.placePenguinStrategy = exports.traverseCBoard = exports.duplicateCBoard = exports.all_places = void 0;
const cstate_1 = require("./cstate");
exports.all_places = [];
// CBoard -> CBoard
// creates a deep copy of the given CBoard
function duplicateCBoard(board) {
    var newArray = board.map(function (b) {
        return b.slice();
    });
    return newArray;
}
exports.duplicateCBoard = duplicateCBoard;
// CBoard CSpace -> CBoard
// traverses the given CBoard according to the penguin placement strategy
// and places penguin of given color at first available space 
function traverseCBoard(board, penguinColor) {
    let nboard = duplicateCBoard(board);
    for (let i = 0; i < nboard.length; i++) {
        // goes through all even colums (even rows in game board representation)
        for (let j = 0; j < nboard[i].length; j = j + 2) {
            if (cstate_1.PRED_isCSpaceACFish(nboard[i][j])) {
                nboard[i][j] = penguinColor;
                return nboard;
            }
        }
        // goes through all odd colums (odd rows in game board representation)
        for (let k = 1; k < nboard[i].length; k = k + 2) {
            if (cstate_1.PRED_isCSpaceACFish(nboard[i][k])) {
                nboard[i][k] = penguinColor;
                return nboard;
            }
        }
    }
    return nboard;
}
exports.traverseCBoard = traverseCBoard;
// CState -> CState
// places player penguins of the given state on the board of 
// the given state according to the placement strategy
function placePenguinStrategy(state) {
    let scores = cstate_1.GET__CScoresFromCState(state);
    // no of penguins each player should have = 6 - (no. of players)
    let npenguins = 6 - scores.length;
    let newBoard = cstate_1.GET__CBoardFromCState(state);
    for (let i = 0; i < npenguins; i++) {
        for (let j = 0; j < scores.length; j++) {
            newBoard = traverseCBoard(newBoard, cstate_1.GET__CPenguinFromCScore(scores[j]));
            exports.all_places.push([cstate_1.GET__CStageFromCState(state), newBoard, cstate_1.GET__CScoresFromCState(state)]);
        }
    }
    return [cstate_1.GET__CStageFromCState(state), newBoard, cstate_1.GET__CScoresFromCState(state)];
}
exports.placePenguinStrategy = placePenguinStrategy;
exports.placingboard = [
    [1, 3, 2, 1, 5, 4, 2, 1, 3, 4, 1, 4],
    [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.placingscore = [["black", 0], ["brown", 0], ["white", 0], ["red", 0]];
exports.placingstate = ["placing", exports.placingboard, exports.placingscore];
placePenguinStrategy(exports.placingstate);
console.log(exports.all_places);
