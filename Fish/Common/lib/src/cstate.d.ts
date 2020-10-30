/**
 * CState is: [CStage, CBoard, CScores]
 * CStage - stage of the game state
 * CBoard - board of the game state
 * CScores - list of players and their associated score
 *  -- here, the order of the players in CScores determines the order
 *     in which they take turns.
 */
export declare type CState = [CStage, CBoard, CScores];
export declare function GET__CStageFromCState(CState: CState): CStage;
export declare function GET__CBoardFromCState(CState: CState): CBoard;
export declare function GET__CScoresFromCState(cstate: CState): CScores;
export declare function SET__CStageInCState(CState: CStage, cstate: CState): CState;
export declare function SET__CBoardInCstate(cboard: CBoard, cstate: CState): CState;
export declare function SET__CScoresInCState(cscore: CScores, cstate: CState): CState;
export declare function MAKE__CState(cStage: CStage, cBoard: CBoard, cScores: CScores): CState;
export declare function PRED_isCState(cstate: any): boolean;
export declare function GET__nextMove(cState: CState): CPenguin;
export declare function TEMPLATE_CState(cState: CState): void;
/**
 * CScores is an Array of CScores.
 */
export declare type CScores = CScore[];
export declare function TEMPLATE_CScores(cScores: CScores): void;
export declare function GET_currentScore(cScores: CScores): CScore;
export declare function GET_currentPlayer(cScores: CScores): CPenguin;
/**
 * A CScore is [CPenguin, number]
 * CPenguin - penguin color
 * number - associated score
 */
export declare type CScore = [CPenguin, number];
export declare function GET__CPenguinFromCScore(onecscore: CScore): CPenguin;
export declare function GET__CScoreNumFromCScore(onescore: CScore): number;
export declare function SET__CPenguinInCScore(cpenguin: CPenguin, onescore: CScore): CScore;
export declare function SET__CScoreNuminCScore(cscore: number, onescore: CScore): CScore;
export declare function MAKE__CScore(cPenguin: CPenguin, score: number): CScore;
export declare function TEMPLATE_CScore(cScore: CScore): void;
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
export declare function TEMPLATE_CBoard(cBoard: CBoard): void;
/**
 * A CSpace = CFish | CPenguin | CUnusable | CHole
 * CFish - tile with fishes
 * CPenguin - tile with a player's penguin
 * CUnusable - unusable space (when board dimensions have odd no. of rows,
 *                            board spaces on the odd columns of the last row are unusable.  )
 * CHole - represents a hole in the board
 */
export declare type CSpace = CFish | CPenguin | CUnusable | CHole;
export declare function TEMPLATE_CSpace(cSpace: CSpace): void;
/**
 * Represents the number of fish on the hex.
 */
export declare type CFish = number;
export declare function PRED_isCSpaceACFish(cSpace: CSpace): cSpace is CFish;
/**
 * A Compact penguin. Represented by their color.
 */
export declare type CPenguin = "red" | "brown" | "black" | "white";
export declare function PRED_isCSpaceACPenguin(cspace: CSpace): cspace is CPenguin;
export declare function TEMPLATE_CPenguin(cPenguin: CPenguin): void;
/**
 * A Compact unusable space.
 */
export declare type CUnusable = "unusable";
export declare function PRED_isCSpaceACUnusable(cspace: CSpace): cspace is CUnusable;
export declare function TEMPLATE_Unusable(cUnusable: CUnusable): void;
/**
 * A Compact Hole.
 */
export declare type CHole = "hole";
export declare function PRED_isCSpaceACHole(cspace: CSpace): cspace is CHole;
export declare function TEMPLATE_CHole(cHole: CHole): void;
/**
 * A Compact Posn.
 */
export declare type CPosn = [number, number];
export declare function TEMPLATE_CPosn(cPosn: CPosn): void;
/**
 * A Compact Move.
 * - contains [from-position, to-position]
 */
export declare type CMove = [CPosn, CPosn] | "SKIP";
export declare function TEMPLATE_CMove(cMove: CMove): void;
export declare function cPlace(cPosn: CPosn, cState: CState): CState;
/**
 * Update the first elem of scores with score, then rotate the cScores anti-clockwise.
 * This brings the player's whose turn is next at the top of the CScores list
 */
export declare function updateAndRotateScore(cScores: CScores, transFunc: (oldScore: number) => number): CScores;
export declare function duplicateCBoard(board: CBoard): CBoard;
/**
 * Moves the player whose turn it currently is to CMove in cState.
 */
export declare function cMove(cState: CState, cMove: CMove): CState;
export declare function getPenguinPositions(penguin: CPenguin, state: CState): CPosn[];
