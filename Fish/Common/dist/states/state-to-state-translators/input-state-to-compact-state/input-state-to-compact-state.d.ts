import { CBoard, CPosn, CState } from "../../compact-state/compact-state-data-definition";
import { InputBoard, InputPosition, InputState } from "../../input-state/input-state-data-definition";
/**
 * Convert an input board to a compact board. The 0s in the board is mapped
 * to "holes" because 0s represent blank tiles on compact board.
 */
export declare function inputBoardToCBoardNoPlayers(inputBoard: InputBoard): CBoard;
/**
 * Make a row of "unusable" elements that has the length equal to the
 * longest row in input board.
 */
export declare function longestRowAsUnusable(inputBoard: InputBoard): any[];
/**
 * Get the longest row of the input board.
 */
export declare function getLongestRowLength(inputBoard: InputBoard): number;
/**
 * Pad the input board with holes (a hole in an input board is a 0).
 */
export declare function padInputBoard(board: InputBoard): InputBoard;
/**
 * Interleaves l1 and l2
 * ASSUMPTION: l1.length === l2.length
 */
export declare function interleave<T>(l1: T[], l2: T[]): T[];
/**
 * Convert an input posn to compact posn.
 */
export declare function inputPosnToCompactPosn(inputPosition: InputPosition): CPosn;
/**
 * Convert a compact posn to input posn.
 */
export declare function compactPosnToInputPosn(cPosn: CPosn): InputPosition;
export declare function inputStateToCState(inputState: InputState): CState;
//# sourceMappingURL=input-state-to-compact-state.d.ts.map