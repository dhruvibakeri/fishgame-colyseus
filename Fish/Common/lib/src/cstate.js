"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPenguinPositions = exports.cMove = exports.duplicateCBoard = exports.updateAndRotateScore = exports.cPlace = exports.TEMPLATE_CMove = exports.TEMPLATE_CPosn = exports.TEMPLATE_CHole = exports.PRED_isCSpaceACHole = exports.TEMPLATE_Unusable = exports.PRED_isCSpaceACUnusable = exports.TEMPLATE_CPenguin = exports.PRED_isCSpaceACPenguin = exports.PRED_isCSpaceACFish = exports.TEMPLATE_CSpace = exports.TEMPLATE_CBoard = exports.TEMPLATE_CScore = exports.MAKE__CScore = exports.SET__CScoreNuminCScore = exports.SET__CPenguinInCScore = exports.GET__CScoreNumFromCScore = exports.GET__CPenguinFromCScore = exports.GET_currentPlayer = exports.GET_currentScore = exports.TEMPLATE_CScores = exports.TEMPLATE_CState = exports.GET__nextMove = exports.PRED_isCState = exports.MAKE__CState = exports.SET__CScoresInCState = exports.SET__CBoardInCstate = exports.SET__CStageInCState = exports.GET__CScoresFromCState = exports.GET__CBoardFromCState = exports.GET__CStageFromCState = void 0;
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
function SET__CStageInCState(CState, cstate) {
    return [CState, GET__CBoardFromCState(cstate), GET__CScoresFromCState(cstate)];
}
exports.SET__CStageInCState = SET__CStageInCState;
function SET__CBoardInCstate(cboard, cstate) {
    return [GET__CStageFromCState(cstate), cboard, GET__CScoresFromCState(cstate)];
}
exports.SET__CBoardInCstate = SET__CBoardInCstate;
function SET__CScoresInCState(cscore, cstate) {
    return [GET__CStageFromCState(cstate), GET__CBoardFromCState(cstate), cscore];
}
exports.SET__CScoresInCState = SET__CScoresInCState;
function MAKE__CState(cStage, cBoard, cScores) {
    return [cStage, cBoard, cScores];
}
exports.MAKE__CState = MAKE__CState;
function PRED_isCState(cstate) {
    return (Array.isArray(cstate)
        && cstate.length === 3);
}
exports.PRED_isCState = PRED_isCState;
function GET__nextMove(cState) {
    return GET_currentPlayer(GET__CScoresFromCState(cState));
}
exports.GET__nextMove = GET__nextMove;
function TEMPLATE_CState(cState) {
    const cStage = GET__CStageFromCState(cState);
    const cBoard = GET__CBoardFromCState(cState);
    const cScores = GET__CScoresFromCState(cState);
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
function GET_currentScore(cScores) {
    return cScores[0];
}
exports.GET_currentScore = GET_currentScore;
function GET_currentPlayer(cScores) {
    return GET_currentScore(cScores)[0];
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
function SET__CPenguinInCScore(cpenguin, onescore) {
    return [cpenguin, GET__CScoreNumFromCScore(onescore)];
}
exports.SET__CPenguinInCScore = SET__CPenguinInCScore;
function SET__CScoreNuminCScore(cscore, onescore) {
    return [GET__CPenguinFromCScore(onescore), cscore];
}
exports.SET__CScoreNuminCScore = SET__CScoreNuminCScore;
function MAKE__CScore(cPenguin, score) {
    return [cPenguin, score];
}
exports.MAKE__CScore = MAKE__CScore;
function TEMPLATE_CScore(cScore) {
    const cPenguin = GET__CPenguinFromCScore(cScore);
    const cScoreNum = GET__CScoreNumFromCScore(cScore);
    TEMPLATE_CPenguin(cPenguin);
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
    if (PRED_isCSpaceACFish(cSpace)) {
        TEMPLATE_CFish(cSpace);
    }
    else if (PRED_isCSpaceACHole(cSpace)) {
        TEMPLATE_CHole(cSpace);
    }
    else if (PRED_isCSpaceACUnusable(cSpace)) {
        TEMPLATE_Unusable(cSpace);
    }
    else if (PRED_isCSpaceACPenguin(cSpace)) {
        TEMPLATE_CPenguin(cSpace);
    }
}
exports.TEMPLATE_CSpace = TEMPLATE_CSpace;
function PRED_isCSpaceACFish(cSpace) {
    return typeof cSpace === "number";
}
exports.PRED_isCSpaceACFish = PRED_isCSpaceACFish;
function TEMPLATE_CFish(cFish) {
    cFish;
}
function PRED_isCSpaceACPenguin(cspace) {
    return cspace === "red" || cspace === "brown" || cspace === "black" || cspace === "white";
}
exports.PRED_isCSpaceACPenguin = PRED_isCSpaceACPenguin;
;
function TEMPLATE_CPenguin(cPenguin) {
    if (cPenguin === "red") {
    }
    else if (cPenguin === "brown") {
    }
    else if (cPenguin === "black") {
    }
    else if (cPenguin === "white") {
    }
}
exports.TEMPLATE_CPenguin = TEMPLATE_CPenguin;
function PRED_isCSpaceACUnusable(cspace) {
    return cspace === "unusable";
}
exports.PRED_isCSpaceACUnusable = PRED_isCSpaceACUnusable;
;
function TEMPLATE_Unusable(cUnusable) {
    cUnusable;
}
exports.TEMPLATE_Unusable = TEMPLATE_Unusable;
function PRED_isCSpaceACHole(cspace) {
    return cspace === "hole";
}
exports.PRED_isCSpaceACHole = PRED_isCSpaceACHole;
;
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
// creates a CState where player whose turn it is,is at the given posn
function cPlace(cPosn, cState) {
    const [row, col] = cPosn;
    const cStage = GET__CStageFromCState(cState);
    const cBoard = GET__CBoardFromCState(cState);
    const cScores = GET__CScoresFromCState(cState);
    let fishesToCollect = cBoard[row][col];
    let boardPlaced = placeOnBoard(cBoard, cPosn, GET_currentPlayer(cScores));
    let newScores = updateAndRotateScore(cScores, (old) => { return old + fishesToCollect; });
    return MAKE__CState(cStage, boardPlaced, newScores);
}
exports.cPlace = cPlace;
/**
 * places the given space at cPosn in cBoard.
 */
function placeOnBoard(cBoard, cPosn, space) {
    let [row, col] = cPosn;
    cBoard[row][col] = space;
    return cBoard;
}
/**
 * Update the first elem of scores with score, then rotate the cScores anti-clockwise.
 * This brings the player's whose turn is next at the top of the CScores list
 */
function updateAndRotateScore(cScores, transFunc) {
    const [currentPlayerScore, ...restOfScores] = cScores;
    const currentPenguin = GET__CPenguinFromCScore(currentPlayerScore);
    const currentScore = GET__CScoreNumFromCScore(currentPlayerScore);
    const newCurrentPlayerScore = MAKE__CScore(currentPenguin, transFunc(currentScore));
    return [...restOfScores, newCurrentPlayerScore];
}
exports.updateAndRotateScore = updateAndRotateScore;
// CBoard -> CBoard
// creates a deep copy of the given CBoard
function duplicateCBoard(board) {
    var newArray = board.map(function (b) {
        return b.slice();
    });
    return newArray;
}
exports.duplicateCBoard = duplicateCBoard;
/**
 * Moves the player whose turn it currently is to CMove in cState.
 */
function cMove(cState, cMove) {
    const cStage = GET__CStageFromCState(cState);
    const cBoard = GET__CBoardFromCState(cState);
    let nBoard = duplicateCBoard(cBoard);
    const cScores = GET__CScoresFromCState(cState);
    if (cMove === "SKIP") {
        return [cStage, nBoard, updateAndRotateScore(cScores, (oldScore) => oldScore)];
    }
    else {
        const [fromPosn, toPosn] = cMove;
        const [fromRow, fromCol] = fromPosn;
        const placedState = cPlace(toPosn, [cStage, nBoard, cScores]);
        nBoard[fromRow][fromCol] = "hole";
        return placedState;
    }
}
exports.cMove = cMove;
// gets the positions of all the penguins of the given player in the given CState
function getPenguinPositions(penguin, state) {
    const board = GET__CBoardFromCState(state);
    let posns = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (PRED_isCSpaceACPenguin(board[i][j])) {
                if (board[i][j] == penguin) {
                    posns.push([i, j]);
                }
            }
        }
    }
    return posns;
}
exports.getPenguinPositions = getPenguinPositions;
