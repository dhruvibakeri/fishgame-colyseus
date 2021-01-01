import { BoardMove } from "../../game-tree/game-tree-state";
import { BoardPosn } from "../../utils/other-data-definitions";
import { Board, GameState, GameStatePlaying, Player, Players, Space } from "./game-state-data-definition";
/**
 * creates a GameState where player whose turn it is,is at the given posn
 */
export declare function placeAtPosn(bPosn: BoardPosn, state: GameState, scoreToAdd: number): GameState;
/**
 * places the given space at BoardPosn in Board.
 */
export declare function placeOnBoard(board: Board, bPosn: BoardPosn, space: Space): Board;
/**
 * Update the first elem of players with new score, then rotate the Players anti-clockwise.
 * This brings the player's whose turn is next at the top of the Players list
 */
export declare function updateAndRotateScore(players: Players, transFunc: (oldScore: number) => number): Players;
export declare function addFinalScore(state: GameState): GameState;
export declare function duplicateCBoard(board: Board): Board;
/**
 * Moves the player whose turn it currently is to bMove in GameState.
 */
export declare function moveGameState(state: GameState, bMove: BoardMove): GameState;
/**
 * gets the positions of all the penguins of the given player in the given GameState
 */
export declare function getPenguinPositions(penguin: Player, state: GameState): BoardPosn[];
export declare function hasMovesLeft(penguin: Player, state: GameStatePlaying): boolean;
/**
 * gets the positions of all the penguins of the given player in the given GameState
 */
export declare function getPenguinPositionsForGameBoard(penguin: Player, state: GameState): BoardPosn[];
export declare function getAllPenguinPositionsForGameBoard(state: GameState): BoardPosn[];
export declare function placePenguinAtPosn(bPosn: BoardPosn, state: GameState): GameState;
//# sourceMappingURL=game-state-functions.d.ts.map