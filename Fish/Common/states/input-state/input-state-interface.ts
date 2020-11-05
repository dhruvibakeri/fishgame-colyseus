import { InputPlayer as InputPlayer, InputPosition, InputState } from "../input-state/input-state-data-definition";

/**
 * get the board-row from a Position
 */
export function getRowFromInputPosition(position: InputPosition): number {
  return position[0];
}

/**
 * get the board-col from a Position
 */
export function getColFromInputPosition(position: InputPosition): number {
  return position[1];
}

export function makeInputPosition(row: number, col: number): InputPosition {
  return [row, col];
}

/**
 * Gets the first player assuming there are greater than 0 players in input state.
 */
export function getFirstPlayer(inputState: InputState): InputPlayer {
  return inputState.players[0];
}