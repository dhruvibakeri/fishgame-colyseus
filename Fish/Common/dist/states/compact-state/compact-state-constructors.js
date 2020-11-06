"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAKE__CScore = exports.SET__CScoreNuminCScore = exports.SET__CPenguinInCScore = exports.MAKE__CState = exports.SET__CScoresInCState = exports.SET__CBoardInCstate = exports.SET__CStageInCState = void 0;
const compact_state_selectors_1 = require("./compact-state-selectors");
function SET__CStageInCState(CState, cstate) {
    return [CState, compact_state_selectors_1.GET__CBoardFromCState(cstate), compact_state_selectors_1.GET__CScoresFromCState(cstate)];
}
exports.SET__CStageInCState = SET__CStageInCState;
function SET__CBoardInCstate(cboard, cstate) {
    return [compact_state_selectors_1.GET__CStageFromCState(cstate), cboard, compact_state_selectors_1.GET__CScoresFromCState(cstate)];
}
exports.SET__CBoardInCstate = SET__CBoardInCstate;
function SET__CScoresInCState(cscore, cstate) {
    return [compact_state_selectors_1.GET__CStageFromCState(cstate), compact_state_selectors_1.GET__CBoardFromCState(cstate), cscore];
}
exports.SET__CScoresInCState = SET__CScoresInCState;
function MAKE__CState(cStage, cBoard, cScores) {
    return [cStage, cBoard, cScores];
}
exports.MAKE__CState = MAKE__CState;
function SET__CPenguinInCScore(cpenguin, onescore) {
    return [cpenguin, compact_state_selectors_1.GET__CScoreNumFromCScore(onescore)];
}
exports.SET__CPenguinInCScore = SET__CPenguinInCScore;
function SET__CScoreNuminCScore(cscore, onescore) {
    return [compact_state_selectors_1.GET__CPenguinFromCScore(onescore), cscore];
}
exports.SET__CScoreNuminCScore = SET__CScoreNuminCScore;
function MAKE__CScore(cPenguin, score) {
    return [cPenguin, score];
}
exports.MAKE__CScore = MAKE__CScore;
//# sourceMappingURL=compact-state-constructors.js.map