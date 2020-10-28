import { CState, GET__CStageFromCState, GET__CBoardFromCState, GET__CScoresFromCState, CStage, CBoard, CScores, GET_currentScore, CScore, GET__CPenguinFromCScore, GET__CScoreNumFromCScore, CSpace, PRED_isCSpaceACFish, PRED_isCSpaceACHole, PRED_isCSpaceACUnusable, PRED_isCSpaceACPenguin, CFish, CPenguin } from "./cstate";

export let all_places : CState[] = []

// CBoard -> CBoard
// creates a deep copy of the given CBoard
export function duplicateCBoard(board : CBoard) : CBoard {
    var newArray = board.map(function(b) {
      return b.slice();
  });
    return newArray
  }

// CBoard CSpace -> CBoard
// traverses the given CBoard according to the penguin placement strategy
// and places penguin of given color at first available space 
  export function traverseCBoard(board : CBoard, penguinColor: CSpace) : CBoard {

    let nboard = duplicateCBoard(board)

    for(let i = 0; i < nboard.length; i++) {
            // goes through all even colums (even rows in game board representation)
            for(let j = 0; j < nboard[i].length; j = j + 2) {
                if(PRED_isCSpaceACFish(nboard[i][j])) {
                    nboard[i][j] = penguinColor
                    return nboard
                }
            }
            // goes through all odd colums (odd rows in game board representation)
            for(let k = 1; k < nboard[i].length; k = k + 2) {
                if(PRED_isCSpaceACFish(nboard[i][k])) {
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
    export function placePenguinStrategy(state : CState) : CState{

        let scores = GET__CScoresFromCState(state)
        // no of penguins each player should have = 6 - (no. of players)
        let npenguins = 6 - scores.length
        let newBoard = GET__CBoardFromCState(state)

        for(let i = 0; i < npenguins; i ++) {
            for(let j = 0; j < scores.length; j++) {
            newBoard = traverseCBoard(newBoard, GET__CPenguinFromCScore(scores[j]))
            all_places.push([GET__CStageFromCState(state), newBoard, GET__CScoresFromCState(state)])
            }
        }
            return [GET__CStageFromCState(state), newBoard, GET__CScoresFromCState(state)]
    }

    export const placingboard: CBoard = [
        [1, 3, 2, 1, 5, 4, 2, 1, 3, 4, 1, 4],
        [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
        [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
      ]



    export const placingscore: CScore[] = [["black", 0], ["brown", 0], ["white", 0], ["red", 0]];

    export const placingstate: CState = ["placing", placingboard, placingscore]

    placePenguinStrategy(placingstate)


   console.log(all_places)   
