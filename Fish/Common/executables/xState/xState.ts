import { BoardMove } from "../../game-tree/game-tree-state";
import { getReachable, getReachableNeighbours } from "../../states/game-state/game-state-reachable";
import { CBoard, CPosn, CState } from "../../states/compact-state/compact-state-data-definition";
import { compactPosnToBoardPosn } from "../../states/compact-state/compact-state-interface";
import { Board, GameState, GameStatePlaying } from "../../states/game-state/game-state-data-definition";
import { moveGameState } from "../../states/game-state/game-state-functions";
import { InputPosition, InputState } from "../../states/input-state/input-state-data-definition";
import { getFirstPlayer } from "../../states/input-state/input-state-interface";
import { cStateToGameState } from "../../states/state-to-state-translators/compact-state-to-game-state";
import { compactBoardToResultBoard, compactPlayersToInputPlayers } from "../../states/state-to-state-translators/compact-state-to-input-state/compact-to-input-state";
import { stateToCState } from "../../states/state-to-state-translators/game-state-to-compact-game-state";
import { inputBoardToCBoardNoPlayers, inputPosnToCompactPosn, inputStateToCState } from "../../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state"
import { BoardPosn } from "../../utils/other-data-definitions";


// TODO: xState fails on the new cBoard. Fix it.
export function xState(inputState: InputState) : InputState | false{

  
  if(inputState.players.length === 0 || inputState.players[0].places.length === 0) { 
    return false
  }
  else {
  let firstPenguinInputPosn: InputPosition = getFirstPlayer(inputState).places[0]
  let firstPenguinCPosn: CPosn = inputPosnToCompactPosn(firstPenguinInputPosn);
  let firstPenguinBoardPosn: BoardPosn = compactPosnToBoardPosn(firstPenguinCPosn);
  let inputGameState : GameState = cStateToGameState(inputStateToCState(inputState)) as GameStatePlaying
  let board: Board = inputGameState.board
  let reachablePosns : BoardPosn[] = getReachableNeighbours(board, firstPenguinBoardPosn);

  if (reachablePosns.length === 0) {
    return false
  } else {
    
    let fromPosn : InputPosition = inputState.players[0].places[0]
    let fromCposn : CPosn = inputPosnToCompactPosn(fromPosn)
    let fromBoardPosn : BoardPosn = compactPosnToBoardPosn(fromCposn)
    let toPosn: CPosn = [reachablePosns[0].row, reachablePosns[0].col];
    let toBoardPosn : BoardPosn = compactPosnToBoardPosn(toPosn)
    let move : BoardMove = [fromBoardPosn, toBoardPosn]
    let movedState : GameState = moveGameState(inputGameState,move);

    let cState : CState = stateToCState(movedState)
     
    return {players : compactPlayersToInputPlayers(cState[2], toPosn, inputState.players) , board : compactBoardToResultBoard(cState[1])}


  }
}

}