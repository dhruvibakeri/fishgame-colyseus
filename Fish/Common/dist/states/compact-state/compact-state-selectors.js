"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET__CScoreNumFromCScore = exports.GET__CPenguinFromCScore = exports.GET_currentPlayer = exports.GET_currentPlayerFromCScores = exports.GET_currentScore = exports.GET__nextMove = exports.GET__CScoresFromCState = exports.GET__CBoardFromCState = exports.GET__CStageFromCState = void 0;
function GET__CStageFromCState(CState) {
    return CState[0];
}
exports.GET__CStageFromCState = GET__CStageFromCState;
function GET__CBoardFromCState(CState) {
    return CState[1];
}
exports.GET__CBoardFromCState = GET__CBoardFromCState;
function GET__CScoresFromCState(cstate) {
    return cstate[2];
}
exports.GET__CScoresFromCState = GET__CScoresFromCState;
function GET__nextMove(cState) {
    return GET_currentPlayerFromCScores(GET__CScoresFromCState(cState));
}
exports.GET__nextMove = GET__nextMove;
function GET_currentScore(cScores) {
    return cScores[0];
}
exports.GET_currentScore = GET_currentScore;
function GET_currentPlayerFromCScores(cScores) {
    return GET_currentScore(cScores)[0];
}
exports.GET_currentPlayerFromCScores = GET_currentPlayerFromCScores;
function GET_currentPlayer(cState) {
    return GET__CPenguinFromCScore(GET__CScoresFromCState(cState)[0]);
}
exports.GET_currentPlayer = GET_currentPlayer;
function GET__CPenguinFromCScore(onecscore) {
    return onecscore[0];
}
exports.GET__CPenguinFromCScore = GET__CPenguinFromCScore;
function GET__CScoreNumFromCScore(onescore) {
    return onescore[1];
}
exports.GET__CScoreNumFromCScore = GET__CScoreNumFromCScore;
;
//# sourceMappingURL=compact-state-selectors.js.map