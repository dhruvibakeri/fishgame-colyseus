import { getPenguinPositions } from "../states/game-state/game-state-functions"
import { Board, GameState, Player, Players } from "../states/game-state/game-state-data-definition";
import { BoardPosn } from "../utils/other-data-definitions";
import { GET_GameStateBoard, GET_GameStateNextToPlace, GET_GameStatePlayers, GET_PlayerColor } from "../states/game-state/game-state-selectors";
import { PRED_isFishSpace } from "../states/game-state/game-state-predicates";
import { IllegalAction } from "../game-tree/game-tree-state";

// ----- USAGE -----
// - getPenguinPlacementPosn is used by a player to place its penguin
//    during the placing stage of the game.
// - The function uses a placement strategy where the penguin whose turn it currenly is
//    is in the given game state, places its penguin at the first available free spot 
//    followning a zig zag pattern that starts at the top left corner.

// GameState -> BoardPosn | IllegalAction
// looks for a valid penguin placement position for the player whose turn it currently is in the
// given state. If the player has already placed all its penguins it returns an 'IllegalAction'.
// If there are no valid placement positions left, it also returns an 'IllegalAction'.
export function getPenguinPlacementPosn(state: GameState): BoardPosn | IllegalAction {

  const board: Board = GET_GameStateBoard(state)
  const players: Players = GET_GameStatePlayers(state)
  const penguin: Player = GET_GameStateNextToPlace(state)
  const numOfPlayers: number = players.length
  const penguinsPerPlayer: number = 6 - numOfPlayers
  let numOfPenguinsOnThisState = getPenguinPositions(penguin, state).length

  if (numOfPenguinsOnThisState < penguinsPerPlayer) {

    for (let i = 0; i < board.length; i++) {
      // goes through all even colums (even rows in game board representation)
      for (let j = 0; j < board[i].length; j = j + 2) {
        if (PRED_isFishSpace(board[i][j])) {
          return { row: i, col: j }
        }
      }
      // goes through all odd colums (odd rows in game board representation)
      for (let k = 1; k < board[i].length; k = k + 2) {
        if (PRED_isFishSpace(board[i][k])) {
          return { row: i, col: k }
        }
      }
    }
    return { kind: "illegalAction" }
  }
  else {
    return { kind: "illegalAction" }
  }
}







