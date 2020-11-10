import { xState } from "../executables/xState/xState";
import { xStrategy } from "../executables/xStrategy/xStrategy";
import { xTree } from "../executables/xTree/xTree";
import { getReachable } from "../states/compact-state/compact-board-reachable";
import { compactPosnToBoardPosn } from "../states/compact-state/compact-state-interface";
import { GameState } from "../states/game-state/game-state-data-definition";
import { DepthState, InputAction, InputBoardPosn, InputMoveResponseQuery, InputState } from "../states/input-state/input-state-data-definition";
import { stateToCState } from "../states/state-to-state-translators/game-state-to-compact-game-state";
import { inputBoardToCBoardNoPlayers, inputPosnToCompactPosn } from "../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state";

const ex62_in: DepthState = [2, { "board": [[1, 1], [1, 1], [3, 2], [1, 1], [1, 1], [1, 0], [0, 5]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }]
const ex62_out: InputAction = [[2, 1], [6, 1]]

const ex63_in: DepthState = [2, 
  { "board": 
  [[1, 1], 
  [1, 1], 
  [1, 1], 
  [1, 1], 
  [1, 5], 
  [0, 0], 
  [0, 0]], 
  "players": [
    { "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, 
    { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }]
const ex63_out: InputAction = [[2, 0], [4, 0]]
  
  console.log(xStrategy(ex63_in))