
// - - - - - - - - - PSEUDOCODE: MINIMAX - - - - - - 
// function minimax(position, depth, alpha, beta, maximizingPlayer)
//   if depth == 0 or game over in position
//     return static evaluation of position
// 
//   if maximizingPlayer
//     maxEval = -infinity
//     for each child of position
//       eval = minimax(child, depth - 1, alpha, beta, false)
//       maxEval = max(maxEval, eval)
//       alpha = max(alpha, eval)
//       if beta <= alpha:
//         break
//     return maxEval
// 
//   else 
//     minEval = +infinity
//     for each child of position
//       p = is it maximizingPlayer's turn next?
//       eval = minimax(child, depth - 1, alpha, beta, p)
//       minEval = min(minEval, eval)
//       alpha = max(alpha, eval)
//       if beta <= alpha:
//         break
//     return minEval

// Implements a modified version of minimax for >=2 players.  
function minimax(
  position: GameTree,
  depth: number,
  maximizingPlayer: CPenguin,
  mainPlayer: CPenguin
): number {
  if (depth === 0 || PRED_isCState(position)) {
    return staticEvaluation(maximizingPlayer, getStateFromTree(position));
  }
  let substates = getValidSubStates(getStateFromTree(position))
  if (mainPlayer === maximizingPlayer) {
    let maxEval = Number.NEGATIVE_INFINITY;

    substates.forEach(childPosition => {
      let ev: number = minimax(
        childPosition,
        depth - 1,
        GET__nextMove(getStateFromTree(childPosition)),
        mainPlayer
      );
      maxEval = Math.max(maxEval, ev);
    });
    return maxEval;
  } else {
    let minEval = Number.POSITIVE_INFINITY;

    substates.forEach(childPosition => {
      let ev: number = minimax(
        childPosition,
        depth - 1,
        GET__nextMove(getStateFromTree(childPosition)),
        mainPlayer
      );
      minEval = Math.min(minEval, ev);
    });
    return minEval;
  }
}

// For a given state, returns the static evaluation of
// a position for the player p. i.e. score of the player p. 
function staticEvaluation(p: CPenguin, cState: CState): number {
  let scores: CScores = GET__CScoresFromCState(cState);

  for (let i = 0; i < scores.length; i++) {
    let currentScore: CScore = scores[i];
    if (GET__CPenguinFromCScore(currentScore) === p) {
      return GET__CScoreNumFromCScore(currentScore);
    }
  }
  throw console.error("penguin not in cState!");


}

// The game is over when no penguin has any valid moves left. 
// i.e. The reachable states for ALL penguins is an empty list.
export function isGameOver(cState: CState): boolean {
  let cBoard: CBoard = GET__CBoardFromCState(cState)
  let pPosns: BoardPosn[] = penguinPosns(cBoard);
  for (let i = 0; i < pPosns.length; i++) {
    let posn = pPosns[i];
    if (getReachable(cBoard, posn).length > 0) {
      return false;
    }
  }
  return true;
}

function penguinPosns(cBoard: CBoard): BoardPosn[] {
  let pPosns: BoardPosn[] = []
  for (let i = 0; i < cBoard.length; i++) {
    for (let j = 0; j < cBoard[i].length; j++) {
      let e = cBoard[i][j];
      if (PRED_isCSpaceACPenguin(e)) {
        pPosns.push({ row: i, col: j });
      }
    }
  }
  return pPosns;
}

export let all_places: CState[] = []

// CBoard -> CBoard
// creates a deep copy of the given CBoard
export function duplicateCBoard(board: CBoard): CBoard {
  var newArray = board.map(function (b) {
    return b.slice();
  });
  return newArray
}

// CBoard CSpace -> CBoard
// traverses the given CBoard according to the penguin placement strategy
// and places penguin of given color at first available space 
export function traverseCBoard(board: CBoard, penguinColor: CSpace): CBoard {

  let nboard = duplicateCBoard(board)

  for (let i = 0; i < nboard.length; i++) {
    // goes through all even colums (even rows in game board representation)
    for (let j = 0; j < nboard[i].length; j = j + 2) {
      if (PRED_isCSpaceACFish(nboard[i][j])) {
        nboard[i][j] = penguinColor
        return nboard
      }
    }
    // goes through all odd colums (odd rows in game board representation)
    for (let k = 1; k < nboard[i].length; k = k + 2) {
      if (PRED_isCSpaceACFish(nboard[i][k])) {
        nboard[i][k] = penguinColor
        return nboard
      }
    }
  }

  return nboard

}

// CState -> CState
// places player penguins of the given state on the board of 
// the given state according to the placement strategy
export function placePenguinStrategy(state: CState): CState {

  let scores = GET__CScoresFromCState(state)
  // no of penguins each player should have = 6 - (no. of players)
  let npenguins = 6 - scores.length
  let newBoard = GET__CBoardFromCState(state)

  for (let i = 0; i < npenguins; i++) {
    for (let j = 0; j < scores.length; j++) {
      newBoard = traverseCBoard(newBoard, GET__CPenguinFromCScore(scores[j]))
      all_places.push([GET__CStageFromCState(state), newBoard, GET__CScoresFromCState(state)])
    }
  }
  return [GET__CStageFromCState(state), newBoard, GET__CScoresFromCState(state)]
}
