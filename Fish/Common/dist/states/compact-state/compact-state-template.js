"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPLATE_CFish = exports.TEMPLATE_CMove = exports.TEMPLATE_CPosn = exports.TEMPLATE_CHole = exports.TEMPLATE_CPenguin = exports.TEMPLATE_CSpace = exports.TEMPLATE_CBoard = exports.TEMPLATE_CStage = exports.TEMPLATE_CScore = exports.TEMPLATE_CScores = exports.TEMPLATE_CState = void 0;
const compact_state_predicates_1 = require("./compact-state-predicates");
const compact_state_selectors_1 = require("./compact-state-selectors");
function TEMPLATE_CState(cState) {
    const cStage = compact_state_selectors_1.GET__CStageFromCState(cState);
    const cBoard = compact_state_selectors_1.GET__CBoardFromCState(cState);
    const cScores = compact_state_selectors_1.GET__CScoresFromCState(cState);
    TEMPLATE_CStage(cStage);
    TEMPLATE_CBoard(cBoard);
    TEMPLATE_CScores(cScores);
}
exports.TEMPLATE_CState = TEMPLATE_CState;
function TEMPLATE_CScores(cScores) {
    for (let scoreIdx = 0; scoreIdx < cScores.length; scoreIdx++) {
        let thisScore = cScores[scoreIdx];
        TEMPLATE_CScore(thisScore);
    }
}
exports.TEMPLATE_CScores = TEMPLATE_CScores;
function TEMPLATE_CScore(cScore) {
    const cPenguin = compact_state_selectors_1.GET__CPenguinFromCScore(cScore);
    const cScoreNum = compact_state_selectors_1.GET__CScoreNumFromCScore(cScore);
    //TEMPLATE_CPenguin(cPenguin)
    cScoreNum;
}
exports.TEMPLATE_CScore = TEMPLATE_CScore;
function TEMPLATE_CStage(cStage) {
    if (cStage === "playing") {
    }
    else if (cStage === "joining") {
    }
    else if (cStage === "placing") {
    }
    else if (cStage === "done") {
    }
}
exports.TEMPLATE_CStage = TEMPLATE_CStage;
function TEMPLATE_CBoard(cBoard) {
    for (let rowIdx = 0; rowIdx < cBoard.length; rowIdx++) {
        let row = cBoard[rowIdx];
        for (let colIdx = 0; colIdx < cBoard.length; colIdx++) {
            let cSpace = row[colIdx];
            TEMPLATE_CSpace(cSpace);
        }
    }
}
exports.TEMPLATE_CBoard = TEMPLATE_CBoard;
function TEMPLATE_CSpace(cSpace) {
    if (compact_state_predicates_1.PRED_isCSpaceACFish(cSpace)) {
        TEMPLATE_CFish(cSpace);
    }
    else if (compact_state_predicates_1.PRED_isCSpaceACHole(cSpace)) {
        TEMPLATE_CHole(cSpace);
    }
    else if (compact_state_predicates_1.PRED_isCSpaceACUnusable(cSpace)) {
        compact_state_predicates_1.TEMPLATE_Unusable(cSpace);
    }
    else if (compact_state_predicates_1.PRED_isCSpaceACPenguin(cSpace)) {
        TEMPLATE_CPenguin(cSpace);
    }
}
exports.TEMPLATE_CSpace = TEMPLATE_CSpace;
function TEMPLATE_CPenguin(cPenguin) {
    //if (cPenguin === "red") {
    //} else if (cPenguin === "brown") {
    //} else if (cPenguin === "black") {
    //} else if (cPenguin === "white") {
    //}
}
exports.TEMPLATE_CPenguin = TEMPLATE_CPenguin;
function TEMPLATE_CHole(cHole) {
    cHole;
}
exports.TEMPLATE_CHole = TEMPLATE_CHole;
function TEMPLATE_CPosn(cPosn) {
    const [col, row] = cPosn;
}
exports.TEMPLATE_CPosn = TEMPLATE_CPosn;
function TEMPLATE_CMove(cMove) {
    if (cMove === "SKIP") {
    }
    else {
        const [fromPosn, toPosn] = cMove;
        TEMPLATE_CPosn(fromPosn);
        TEMPLATE_CPosn(toPosn);
    }
}
exports.TEMPLATE_CMove = TEMPLATE_CMove;
function TEMPLATE_CFish(cFish) {
    cFish;
}
exports.TEMPLATE_CFish = TEMPLATE_CFish;
//# sourceMappingURL=compact-state-template.js.map