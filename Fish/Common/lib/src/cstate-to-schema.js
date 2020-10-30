"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cStateToSchema = void 0;
const cstate_1 = require("./cstate");
const schema_1 = require("./schema");
/**
 * converts given CState to a StateSchema
 */
function cStateToSchema(cState) {
    const cStage = cstate_1.GET__CStageFromCState(cState);
    const cBoard = cstate_1.GET__CBoardFromCState(cState);
    const cScores = cstate_1.GET__CScoresFromCState(cState);
    return new schema_1.StateSchema(cStage, cBoard[0].length, flattenBoard(cBoard), cScores.map(score => new schema_1.ScoreSchema(cstate_1.GET__CPenguinFromCScore(score), cstate_1.GET__CScoreNumFromCScore(score))));
}
exports.cStateToSchema = cStateToSchema;
/**
 * converts the given CBoard which is a 2D array,
 * into a list of strings
 * - this is because Colyseus cannot handle
 * 2D arrays
 */
function flattenBoard(cBoard) {
    let res = [];
    for (let i = 0; i < cBoard.length; i++) {
        for (let j = 0; j < cBoard[i].length; j++) {
            let e = cBoard[i][j];
            res.push(e.toString());
        }
    }
    return res;
}
