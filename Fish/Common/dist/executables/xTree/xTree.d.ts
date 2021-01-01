import { InputAction, InputMoveResponseQuery } from "../../states/input-state/input-state-data-definition";
/**
 *
 * - we have the current state, and the move the player makes on this state
    - we make that move, get the state where the move is made
- we do getValidSubstates on that state and receive possible moves for the next player
- we retrieve the to positions for those moves and return the one which is on the neighboring tile of the previous player
 */
export declare function xTree(moveActionQuery: InputMoveResponseQuery): InputAction;
//# sourceMappingURL=xTree.d.ts.map