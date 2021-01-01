/**
 * CState is: [CStage, CBoard, CScores]
 * CStage - stage of the game state
 * CBoard - board of the game state
 * CScores - list of players and their associated score
 *  -- here, the order of the players in CScores determines the order
 *     in which they take turns.
 */
export declare type CState = [CStage, CBoard, CScores];
/**
 * CScores is an Array of CScores.
 */
export declare type CScores = CScore[];
/**
 * A CScore is [CPenguin, number]
 * CPenguin - penguin color
 * number - associated score
 */
export declare type CScore = [CScorePenguin, number];
/**
 * A CStage is the stage the game is currently in.
 * "playing" - stage where players are able to make moves and game is on
 * "joining" - players are joining the game, the game has not started
 * "placing" - players are placing their penguins
 * "done" - game is over
 */
export declare type CStage = "playing" | "joining" | "placing" | "done";
/**
 * A compact Board is a 2d array of compact spaces.
 * It represents the board of the CState
 */
export declare type CBoard = CSpace[][];
/**
 * A CSpace = CFish | CPenguin | CUnusable | CHole
 * CFish - tile with fishes
 * CPenguin - tile with a player's penguin
 * CUnusable - unusable space (when board dimensions have odd no. of rows,
 *                            board spaces on the odd columns of the last row are unusable.  )
 * CHole - represents a hole in the board
 */
export declare type CSpace = CFish | CPenguin | CUnusable | CHole;
/**
 * Represents the number of fish on the hex.
 */
export declare type CFish = number;
/**
 * A Compact penguin. Represented by their color.
 */
export declare type CPenguin = ["red", CFish] | ["brown", CFish] | ["black", CFish] | ["white", CFish];
export declare type CScorePenguin = "red" | "brown" | "black" | "white";
/**
 * A Compact unusable space.
 */
export declare type CUnusable = "unusable";
/**
 * A Compact Hole.
 */
export declare type CHole = "hole";
/**
 * A Compact Posn.
 * [row, col]
 */
export declare type CPosn = [number, number];
/**
 * A Compact Move.
 * - contains [from-position, to-position]
 */
export declare type CMove = [CPosn, CPosn] | "SKIP";
//# sourceMappingURL=compact-state-data-definition.d.ts.map