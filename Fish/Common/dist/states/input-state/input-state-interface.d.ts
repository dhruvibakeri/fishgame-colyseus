import { InputPlayer as InputPlayer, InputPosition, InputState } from "../input-state/input-state-data-definition";
/**
 * get the board-row from a Position
 */
export declare function getRowFromInputPosition(position: InputPosition): number;
/**
 * get the board-col from a Position
 */
export declare function getColFromInputPosition(position: InputPosition): number;
export declare function makeInputPosition(row: number, col: number): InputPosition;
/**
 * Gets the first player assuming there are greater than 0 players in input state.
 */
export declare function getFirstPlayer(inputState: InputState): InputPlayer;
//# sourceMappingURL=input-state-interface.d.ts.map