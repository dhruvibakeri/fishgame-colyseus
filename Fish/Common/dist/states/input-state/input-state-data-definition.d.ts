/**
 * Specified in Milestone 3.
 */
export declare type InputBoardPosn = {
    position: InputPosition;
    board: InputBoard;
};
export declare type InputBoard = number[][];
export declare type InputPosition = [number, number];
/**
 * Specified in Milestone 4.
 */
export declare type InputState = {
    players: InputPlayer[];
    board: InputBoard;
};
export declare type InputPlayer = {
    color: string;
    score: number;
    places: InputPosition[];
};
/**
 * Specified in Milestone 5.
 */
export declare type InputMoveResponseQuery = {
    state: InputState;
    from: InputPosition;
    to: InputPosition;
};
export declare type InputAction = false | [InputPosition, InputPosition];
/**
 * Specified in Milestone 6.
 */
export declare type DepthState = [D, InputState];
export declare type D = 1 | 2;
//# sourceMappingURL=input-state-data-definition.d.ts.map