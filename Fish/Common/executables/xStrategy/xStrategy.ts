import { Action, createGameTree, GameTree, getValidSubStates } from "../../game-tree/game-tree-state";
import { DefMove, getBestAction, getFromPosnFromMove as getFromPosnFromDefMove, getToPosnFromMove as getToPosnFromDefMove, Move } from "../../minimax/best-action-game-state";
import { prelim1, prelim2, state0 } from "../../states/compact-state/compact-state-examples";
import { GameState } from "../../states/game-state/game-state-data-definition";
import { D, DepthState, InputAction, InputPosition, InputState } from "../../states/input-state/input-state-data-definition";
import { cStateToGameState } from "../../states/state-to-state-translators/compact-state-to-game-state";
import { compactPosnToInputPosn, inputPosnToCompactPosn, inputStateToCState } from "../../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state";
import { boardPosnToCompactPosn, boardPosnToInputPosn } from "../../utils/utility-functions";
import { prelim1InputState } from "../../states/input-state/input-state-examples"

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

export function xStrategy(depthState: DepthState) {
  let [depth, inputState]: [D, InputState] = [depthState[0], depthState[1]];
  let gameTree: GameTree = createGameTree(cStateToGameState(inputStateToCState(inputState)));

  let maybeBoardPosn: Move = getBestAction(gameTree, depth)

  if (maybeBoardPosn === false) {
    let action: InputAction = maybeBoardPosn;
    return action;
  } else {
    let defMove: DefMove = maybeBoardPosn;
    let fromPosn: InputPosition = compactPosnToInputPosn(boardPosnToCompactPosn(getFromPosnFromDefMove(defMove)));
    let toPosn: InputPosition = compactPosnToInputPosn(boardPosnToCompactPosn(getToPosnFromDefMove(defMove)));
    let action: [InputPosition, InputPosition] = [fromPosn, toPosn]
    return action;
  }
}


//main();

// TODO: remove these before submission. 
// console.log("best action", getBestAction([cStateToGameState(state0), () => getValidSubStates(cStateToGameState(state0))], 3))
// console.log("best action - prelim1", getBestAction([cStateToGameState(prelim1), () => getValidSubStates(cStateToGameState(prelim1))], 2))
// console.log("best action - prelim2", getBestAction([cStateToGameState(prelim2), () => getValidSubStates(cStateToGameState(prelim2))], 2))