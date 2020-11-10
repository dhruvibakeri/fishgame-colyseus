"use strict";
exports.__esModule = true;
exports.xStrategy = void 0;
var game_tree_state_1 = require("../../game-tree/game-tree-state");
var best_action_game_state_1 = require("../../minimax/best-action-game-state");
var compact_state_to_game_state_1 = require("../../states/state-to-state-translators/compact-state-to-game-state");
var input_state_to_compact_state_1 = require("../../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state");
var utility_functions_1 = require("../../utils/utility-functions");
//const readline = require('readline');
// Compiles all the lines from
// STDIN and sends to `xjson`
/*export function main(): void {
  let lines: string[] = []
  let readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readLine.on('line', (l: string) => lines.push(l));
  readLine.on('close', () => {
    console.log(JSON.stringify(xStrategy(JSON.parse(lines.join("\n")) as DepthState)))
  });
}*/
function xStrategy(depthState) {
    var _a = [depthState[0], depthState[1]], depth = _a[0], inputState = _a[1];
    var gameTree = game_tree_state_1.createGameTree(compact_state_to_game_state_1.cStateToGameState(input_state_to_compact_state_1.inputStateToCState(inputState)));
    var maybeBoardPosn = best_action_game_state_1.getBestAction(gameTree, depth);
    if (maybeBoardPosn === false) {
        var action = maybeBoardPosn;
        return action;
    }
    else {
        var defMove = maybeBoardPosn;
        var fromPosn = input_state_to_compact_state_1.compactPosnToInputPosn(utility_functions_1.boardPosnToCompactPosn(best_action_game_state_1.getFromPosnFromMove(defMove)));
        var toPosn = input_state_to_compact_state_1.compactPosnToInputPosn(utility_functions_1.boardPosnToCompactPosn(best_action_game_state_1.getToPosnFromMove(defMove)));
        var action = [fromPosn, toPosn];
        return action;
    }
}
exports.xStrategy = xStrategy;
//main();
// TODO: remove these before submission. 
// console.log("best action", getBestAction([cStateToGameState(state0), () => getValidSubStates(cStateToGameState(state0))], 3))
// console.log("best action - prelim1", getBestAction([cStateToGameState(prelim1), () => getValidSubStates(cStateToGameState(prelim1))], 2))
// console.log("best action - prelim2", getBestAction([cStateToGameState(prelim2), () => getValidSubStates(cStateToGameState(prelim2))], 2))
