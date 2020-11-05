
/**
 * Specified in Milestone 3.
 */


export type InputBoardPosn = {
  position: InputPosition,
  board: InputBoard
}

export type InputBoard = number[][];
export type InputPosition = [number, number]


/**
 * Specified in Milestone 4.
 */


export type InputState = {
  players: InputPlayer[],
  board: InputBoard
}

export type InputPlayer = {
  color: string,
  score: number,
  places: InputPosition[]
}

/**
 * Specified in Milestone 5.
 */

export type InputMoveResponseQuery = {
  state: InputState,
  from: InputPosition,
  to: InputPosition
}

export type InputAction = false | [InputPosition, InputPosition];