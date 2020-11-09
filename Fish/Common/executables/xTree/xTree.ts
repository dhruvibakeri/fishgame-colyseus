import { BoardMove, GameTree, getValidSubStatesForGameBoard } from "../../game-tree/game-tree-state";
import { getFromTo, Move } from "../../minimax/best-action-game-state";
import { CPosn } from "../../states/compact-state/compact-state-data-definition";
import { compactPosnToBoardPosn } from "../../states/compact-state/compact-state-interface";
import { GameState, GameStatePlaying, PenguinColor } from "../../states/game-state/game-state-data-definition";
import { moveGameState } from "../../states/game-state/game-state-functions";
import { PRED_isGameState } from "../../states/game-state/game-state-predicates";
import { getReachableNeighbours } from "../../states/game-state/game-state-reachable";
import { InputAction, InputMoveResponseQuery, InputPosition } from "../../states/input-state/input-state-data-definition"
import { cStateToGameState } from "../../states/state-to-state-translators/compact-state-to-game-state";
import { stateToCState } from "../../states/state-to-state-translators/game-state-to-compact-game-state";
import { compactPosnToInputPosn, inputPosnToCompactPosn, inputStateToCState } from "../../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state";
import { BoardPosn } from "../../utils/other-data-definitions";
import { boardPosnToCompactPosn } from "../../utils/utility-functions";

/**
 * 
 * - we have the current state, and the move the player makes on this state
    - we make that move, get the state where the move is made
- we do getValidSubstates on that state and receive possible moves for the next player
- we retrieve the to positions for those moves and return the one which is on the neighboring tile of the previous player
 */

export function xTree(moveActionQuery: InputMoveResponseQuery): InputAction {
    let inputGameState: GameState = cStateToGameState(inputStateToCState(moveActionQuery.state))
    let compactFromPosn: CPosn = inputPosnToCompactPosn(moveActionQuery.from)
    let compactToPosn: CPosn = inputPosnToCompactPosn(moveActionQuery.to)
    let boardFromPosn: BoardPosn = compactPosnToBoardPosn(compactFromPosn)
    let boardToPosn: BoardPosn = compactPosnToBoardPosn(compactToPosn)
    let boardMove: BoardMove = [boardFromPosn, boardToPosn]
    let movedState: GameStatePlaying = moveGameState(inputGameState, boardMove) as GameStatePlaying
    let neighboringPosns: BoardPosn[] = getReachableNeighbours(movedState.board, boardToPosn)
    let movePosn: Move = getAllPenguinPosns(movedState, neighboringPosns)
    if (movePosn === false) {
        return false
    }
    else {
        let fromCPosn: CPosn = boardPosnToCompactPosn(movePosn[0])
        let toCPosn: CPosn = boardPosnToCompactPosn(movePosn[1])
        let fromResPosn: InputPosition = compactPosnToInputPosn(fromCPosn)
        let toResPosn: InputPosition = compactPosnToInputPosn(toCPosn)
        return [fromResPosn, toResPosn]
    }



}

function getAllPenguinPosns(state: GameStatePlaying, neighbouringPosns: BoardPosn[]) {
    let nextTurn: PenguinColor = state.nextToPlace.penguinColor
    let subStates: GameTree[] = getValidSubStatesForGameBoard(state)
    let subStateMoves: Move[] = []

    for (let i = 0; i < subStates.length; i++) {
        if(PRED_isGameState(subStates[i])) {
        let move: Move = getFromTo(state, subStates[i] as GameState, nextTurn)
        subStateMoves = [...subStateMoves, move]
        } else {
        let move: Move = getFromTo(state, subStates[i][0], nextTurn)
        subStateMoves = [...subStateMoves, move]
        }
        
    }

    for (let j = 0; j < neighbouringPosns.length; j++) {
        for (let k = 0; k < subStateMoves.length; k++) {
            if (subStateMoves[k] != false) {
                let moveTo: BoardPosn = subStateMoves[k][1]
                if (moveTo.row === neighbouringPosns[j].row && moveTo.col === neighbouringPosns[j].col) {
                    return subStateMoves[k]
                }
            }
        }
       
    }
    return false
}
