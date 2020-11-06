"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const game_tree_state_1 = require("../../game-tree/game-tree-state");
const best_action_game_state_1 = require("../../minimax/best-action-game-state");
const compact_state_to_game_state_1 = require("../../states/state-to-state-translators/compact-state-to-game-state");
const input_state_to_compact_state_1 = require("../../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state");
const utility_functions_1 = require("../../utils/utility-functions");
const readline = require('readline');
// Compiles all the lines from
// STDIN and sends to `xjson`
function main() {
    let lines = [];
    let readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.on('line', (l) => lines.push(l));
    readLine.on('close', () => {
        console.log(JSON.stringify(xStrategy(JSON.parse(lines.join("\n")))));
    });
}
exports.main = main;
function xStrategy(depthState) {
    let [depth, inputState] = [depthState[0], depthState[1]];
    let gameTree = game_tree_state_1.createGameTree(compact_state_to_game_state_1.cStateToGameState(input_state_to_compact_state_1.inputStateToCState(inputState)));
    let maybeBoardPosn = best_action_game_state_1.getBestAction(gameTree, depth);
    if (maybeBoardPosn === false) {
        let action = maybeBoardPosn;
        return action;
    }
    else {
        let defMove = maybeBoardPosn;
        let fromPosn = utility_functions_1.boardPosnToInputPosn(best_action_game_state_1.getFromPosnFromMove(defMove));
        let toPosn = utility_functions_1.boardPosnToInputPosn(best_action_game_state_1.getToPosnFromMove(defMove));
        let action = [fromPosn, toPosn];
        return action;
    }
}
main();
// TODO: remove these before submission. 
// console.log("best action", getBestAction([cStateToGameState(state0), () => getValidSubStates(cStateToGameState(state0))], 3))
// console.log("best action - prelim1", getBestAction([cStateToGameState(prelim1), () => getValidSubStates(cStateToGameState(prelim1))], 2))
// console.log("best action - prelim2", getBestAction([cStateToGameState(prelim2), () => getValidSubStates(cStateToGameState(prelim2))], 2))
//# sourceMappingURL=xStrategy.js.map