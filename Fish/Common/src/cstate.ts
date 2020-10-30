

/**
 * CState is: [CStage, CBoard, CScores]
 * CStage - stage of the game state
 * CBoard - board of the game state
 * CScores - list of players and their associated score
 *  -- here, the order of the players in CScores determines the order
 *     in which they take turns.
 */
export type CState = [CStage, CBoard, CScores];

export function GET__CStageFromCState(CState: CState): CStage {
  return CState[0];
}
export function GET__CBoardFromCState(CState: CState): CBoard {
  return CState[1];
}
export function GET__CScoresFromCState(cstate: CState): CScores {
  return cstate[2];
}
export function SET__CStageInCState(CState: CStage, cstate: CState): CState {
  return [CState, GET__CBoardFromCState(cstate), GET__CScoresFromCState(cstate)];
}
export function SET__CBoardInCstate(cboard: CBoard, cstate: CState): CState {
  return [GET__CStageFromCState(cstate), cboard, GET__CScoresFromCState(cstate)];
}
export function SET__CScoresInCState(cscore: CScores, cstate: CState): CState {
  return [GET__CStageFromCState(cstate), GET__CBoardFromCState(cstate), cscore];
}
export function MAKE__CState(cStage: CStage, cBoard: CBoard, cScores: CScores): CState {
  return [cStage, cBoard, cScores]
}
export function PRED_isCState(cstate: any) {
  return (Array.isArray(cstate)
    && cstate.length === 3)
}


export function GET__nextMove(cState: CState): CPenguin {
  return GET_currentPlayer(GET__CScoresFromCState(cState));
}

export function TEMPLATE_CState(cState: CState): void {
  const cStage = GET__CStageFromCState(cState)
  const cBoard = GET__CBoardFromCState(cState)
  const cScores = GET__CScoresFromCState(cState)

  TEMPLATE_CStage(cStage)
  TEMPLATE_CBoard(cBoard)
  TEMPLATE_CScores(cScores)
}


/**
 * CScores is an Array of CScores.
 */
export type CScores = CScore[]

export function TEMPLATE_CScores(cScores: CScores): void {
  for (let scoreIdx = 0; scoreIdx < cScores.length; scoreIdx++) {
    let thisScore: CScore = cScores[scoreIdx]
    TEMPLATE_CScore(thisScore);
  }
}

export function GET_currentScore(cScores: CScores): CScore {
  return cScores[0]
}

export function GET_currentPlayer(cScores: CScores): CPenguin {
  return GET_currentScore(cScores)[0];
}


/**
 * A CScore is [CPenguin, number]
 * CPenguin - penguin color
 * number - associated score
 */
export type CScore = [CPenguin, number];


export function GET__CPenguinFromCScore(onecscore: CScore): CPenguin {
  return onecscore[0];
}
export function GET__CScoreNumFromCScore(onescore: CScore): number {
  return onescore[1]
};
export function SET__CPenguinInCScore(cpenguin: CPenguin, onescore: CScore): CScore {
  return [cpenguin, GET__CScoreNumFromCScore(onescore)]
}
export function SET__CScoreNuminCScore(cscore: number, onescore: CScore): CScore {
  return [GET__CPenguinFromCScore(onescore), cscore]
}
export function MAKE__CScore(cPenguin: CPenguin, score: number): CScore {
  return [cPenguin, score];
}

export function TEMPLATE_CScore(cScore: CScore) {
  const cPenguin = GET__CPenguinFromCScore(cScore);
  const cScoreNum = GET__CScoreNumFromCScore(cScore);

  TEMPLATE_CPenguin(cPenguin)
  cScoreNum
}


/**
 * A CStage is the stage the game is currently in. 
 * "playing" - stage where players are able to make moves and game is on
 * "joining" - players are joining the game, the game has not started
 * "placing" - players are placing their penguins
 * "done" - game is over
 */
export type CStage = "playing" | "joining" | "placing" | "done"

function TEMPLATE_CStage(cStage: CStage): void {
  if (cStage === "playing") {

  } else if (cStage === "joining") {

  } else if (cStage === "placing") {

  } else if (cStage === "done") {

  }
}

/**
 * A compact Board is a 2d array of compact spaces. 
 * It represents the board of the CState
 */
export type CBoard = CSpace[][];

export function TEMPLATE_CBoard(cBoard: CBoard): void {
  for (let rowIdx = 0; rowIdx < cBoard.length; rowIdx++) {
    let row = cBoard[rowIdx];
    for (let colIdx = 0; colIdx < cBoard.length; colIdx++) {
      let cSpace: CSpace = row[colIdx];
      TEMPLATE_CSpace(cSpace);
    }
  }
}


/**
 * A CSpace = CFish | CPenguin | CUnusable | CHole
 * CFish - tile with fishes
 * CPenguin - tile with a player's penguin
 * CUnusable - unusable space (when board dimensions have odd no. of rows, 
 *                            board spaces on the odd columns of the last row are unusable.  )
 * CHole - represents a hole in the board
 */
export type CSpace = CFish | CPenguin | CUnusable | CHole

export function TEMPLATE_CSpace(cSpace: CSpace) {
  if (PRED_isCSpaceACFish(cSpace)) {
    TEMPLATE_CFish(cSpace)
  } else if (PRED_isCSpaceACHole(cSpace)) {
    TEMPLATE_CHole(cSpace)
  } else if (PRED_isCSpaceACUnusable(cSpace)) {
    TEMPLATE_Unusable(cSpace)
  } else if (PRED_isCSpaceACPenguin(cSpace)) {
    TEMPLATE_CPenguin(cSpace)
  }
}


/**
 * Represents the number of fish on the hex.
 */
export type CFish = number;

export function PRED_isCSpaceACFish(cSpace: CSpace): cSpace is CFish {
  return typeof cSpace === "number";
}

function TEMPLATE_CFish(cFish: CFish): void {
  cFish
}

/**
 * A Compact penguin. Represented by their color. 
 */
export type CPenguin = "red" | "brown" | "black" | "white"

export function PRED_isCSpaceACPenguin(cspace: CSpace): cspace is CPenguin {
  return cspace === "red" || cspace === "brown" || cspace === "black" || cspace === "white"
};

export function TEMPLATE_CPenguin(cPenguin: CPenguin): void {
  if (cPenguin === "red") {

  } else if (cPenguin === "brown") {

  } else if (cPenguin === "black") {

  } else if (cPenguin === "white") {

  }
}

/**
 * A Compact unusable space. 
 */
export type CUnusable = "unusable"

export function PRED_isCSpaceACUnusable(cspace: CSpace): cspace is CUnusable {
  return cspace === "unusable"
};

export function TEMPLATE_Unusable(cUnusable: CUnusable): void {
  cUnusable
}

/**
 * A Compact Hole. 
 */
export type CHole = "hole"

export function PRED_isCSpaceACHole(cspace: CSpace): cspace is CHole {
  return cspace === "hole"
};

export function TEMPLATE_CHole(cHole: CHole) {
  cHole
}

/**
 * A Compact Posn.
 */
export type CPosn = [number, number]

export function TEMPLATE_CPosn(cPosn: CPosn) {
  const [col, row] = cPosn;
}

/**
 * A Compact Move. 
 * - contains [from-position, to-position]
 */
export type CMove = [CPosn, CPosn] | "SKIP";

export function TEMPLATE_CMove(cMove: CMove) {
  if (cMove === "SKIP") {

  } else {
    const [fromPosn, toPosn]: [CPosn, CPosn] = cMove;
    TEMPLATE_CPosn(fromPosn);
    TEMPLATE_CPosn(toPosn);
  }
}



// creates a CState where player whose turn it is,is at the given posn
export function cPlace(cPosn: CPosn, cState: CState): CState {
  const [row, col] = cPosn;
  const cStage = GET__CStageFromCState(cState)
  const cBoard = GET__CBoardFromCState(cState)
  const cScores = GET__CScoresFromCState(cState)
  let fishesToCollect = cBoard[row][col] as CFish;
  let boardPlaced = placeOnBoard(cBoard, cPosn, GET_currentPlayer(cScores));
  let newScores: CScores = updateAndRotateScore(cScores, (old) => { return old + fishesToCollect })
  return MAKE__CState(cStage, boardPlaced, newScores);


}

/**
 * places the given space at cPosn in cBoard. 
 */
function placeOnBoard(cBoard: CBoard, cPosn: CPosn, space: CSpace): CBoard {
  let [row, col] = cPosn;
  cBoard[row][col] = space;
  return cBoard;
}


/**
 * Update the first elem of scores with score, then rotate the cScores anti-clockwise.
 * This brings the player's whose turn is next at the top of the CScores list 
 */
export function updateAndRotateScore(cScores: CScores, transFunc: (oldScore: number) => number): CScores {
  const [currentPlayerScore, ...restOfScores] = cScores;
  const currentPenguin: CPenguin = GET__CPenguinFromCScore(currentPlayerScore);
  const currentScore: number = GET__CScoreNumFromCScore(currentPlayerScore);
  const newCurrentPlayerScore: CScore = MAKE__CScore(currentPenguin, transFunc(currentScore));
  return [...restOfScores, newCurrentPlayerScore]
}

// CBoard -> CBoard
// creates a deep copy of the given CBoard
export function duplicateCBoard(board: CBoard): CBoard {
  var newArray = board.map(function (b) {
    return b.slice();
  });
  return newArray
}


/**
 * Moves the player whose turn it currently is to CMove in cState.
 */
export function cMove(cState: CState, cMove: CMove): CState {
  const cStage = GET__CStageFromCState(cState)
  const cBoard = GET__CBoardFromCState(cState)
  let nBoard = duplicateCBoard(cBoard)
  const cScores = GET__CScoresFromCState(cState)
  if (cMove === "SKIP") {
    return [cStage, nBoard, updateAndRotateScore(cScores, (oldScore) => oldScore)]
  } else {
    const [fromPosn, toPosn] = cMove;
    const [fromRow, fromCol] = fromPosn;
    const placedState = cPlace(toPosn, [cStage, nBoard, cScores])
    nBoard[fromRow][fromCol] = "hole"
    return placedState;
  }
}

// gets the positions of all the penguins of the given player in the given CState
export function getPenguinPositions(penguin: CPenguin, state: CState): CPosn[] {
  const board: CBoard = GET__CBoardFromCState(state)
  let posns: CPosn[] = []

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (PRED_isCSpaceACPenguin(board[i][j])) {
        if (board[i][j] == penguin) {
          posns.push([i, j])
        }
      }
    }
  }
  return posns;
}


// gets the positions of all the penguins of the given player in the given CState
export function getPenguinPositionsForGameBoard(penguin: CPenguin, state: CState): CPosn[] {
  const board: CBoard = GET__CBoardFromCState(state)
  let posns: CPosn[] = []

  for (let i = 0; i < board.length; i++) {
    // goes through all even colums (even rows in game board representation)
    for (let j = 0; j < board[i].length; j = j + 2) {
      if (PRED_isCSpaceACPenguin(board[i][j])) {
        if (board[i][j] == penguin) {
          posns.push([i, j])
        }
      }
    }
    // goes through all odd colums (odd rows in game board representation)
    for (let k = 1; k < board[i].length; k = k + 2) {
      if (PRED_isCSpaceACPenguin(board[i][k])) {
        if (board[i][k] == penguin) {
          posns.push([i, k])
        }
      }
    }
  }
  return posns;
}