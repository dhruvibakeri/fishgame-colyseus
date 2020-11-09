import { xState } from "../executables/xState/xState";
import { xTree } from "../executables/xTree/xTree";
import { getReachable } from "../states/compact-state/compact-board-reachable";
import { compactPosnToBoardPosn } from "../states/compact-state/compact-state-interface";
import { GameState } from "../states/game-state/game-state-data-definition";
import { InputAction, InputBoardPosn, InputMoveResponseQuery, InputState } from "../states/input-state/input-state-data-definition";
import { stateToCState } from "../states/state-to-state-translators/game-state-to-compact-game-state";
import { inputBoardToCBoardNoPlayers, inputPosnToCompactPosn } from "../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state";

const ex52_in: InputMoveResponseQuery = {
    "from": [0, 0],
    "to": [1, 0],
    "state": {
      "players": [{
        "places": [
          [5, 0],
          [4, 0],
          [3, 0],
          [0, 0]
        ],
        "color": "white",
        "score": 0
      }, {
        "places": [
          [0, 1],
          [5, 1],
          [4, 1],
          [3, 1]
        ],
        "color": "red",
        "score": 2
      }],
      "board": [
        [1, 2],
        [3, 0],
        [0, 0],
        [1, 1],
        [1, 1],
        [1, 1]
      ]
    }
  }
  const ex52_out: InputAction = false
  
  console.log(xTree(ex52_in))