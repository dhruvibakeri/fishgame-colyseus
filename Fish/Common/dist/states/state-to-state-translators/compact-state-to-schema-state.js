"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cStateToSchema = void 0;
const compact_state_selectors_1 = require("../compact-state/compact-state-selectors");
const schema_state_data_definition_1 = require("../schema-state/schema-state-data-definition");
/**
 * converts given CState to a StateSchema
 */
function cStateToSchema(cState) {
    const cStage = compact_state_selectors_1.GET__CStageFromCState(cState);
    const cBoard = compact_state_selectors_1.GET__CBoardFromCState(cState);
    const cScores = compact_state_selectors_1.GET__CScoresFromCState(cState);
    return new schema_state_data_definition_1.StateSchema(cStage, cBoard[0].length, flattenBoard(cBoard), cScores.map(score => new schema_state_data_definition_1.ScoreSchema(compact_state_selectors_1.GET__CPenguinFromCScore(score), compact_state_selectors_1.GET__CScoreNumFromCScore(score))));
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
//# sourceMappingURL=compact-state-to-schema-state.js.map