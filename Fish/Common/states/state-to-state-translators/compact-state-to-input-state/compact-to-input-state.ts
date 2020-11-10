import { CBoard, CPosn, CScore, CScores, CSpace, CState } from "../../compact-state/compact-state-data-definition";
import { InputBoard, InputPlayer, InputPosition } from "../../input-state/input-state-data-definition";
import { compactPosnToInputPosn } from "../input-state-to-compact-state/input-state-to-compact-state";

export function compactPlayerToInputPlayerChange(player : CScore, toMove : CPosn, prevPosns : InputPosition[]) : InputPlayer{
    let [first, ...rest] : InputPosition[] = prevPosns
    return {color : player[0], score : player[1], places : [compactPosnToInputPosn(toMove), ...rest]}
} 

export function compactPlayerToInputPlayer(player : CScore, prevPosns : InputPosition[]) : InputPlayer {
    return {color : player[0], score : player[1], places : prevPosns}
} 

export function compactPlayersToInputPlayers(players : CScores, toMove : CPosn, prevPlayers : InputPlayer[]) {
    let inputPlayers : InputPlayer[] = []
    let noOfPlayers : number = prevPlayers.length;
    let [first, ...rest] : InputPlayer[]= prevPlayers
    let updatedPrevPlayers : InputPlayer[] = [...rest, first]

    for(let i = 0; i < players.length - 1; i++) {
        inputPlayers = [...inputPlayers, compactPlayerToInputPlayer(players[i], updatedPrevPlayers[i].places)]
    }

    inputPlayers = [...inputPlayers, compactPlayerToInputPlayerChange(players[noOfPlayers - 1], toMove, updatedPrevPlayers[noOfPlayers - 1].places)]

    return inputPlayers
}

// InputBoard -> IntermediateBoard
// Translate the our board to desired board. 
export function compactBoardToResultBoard(ourBoard : CBoard) : InputBoard{
    const totalRows : number = ourBoard.length;
  
    if(ourBoard[totalRows - 1][1] === "unusable") {
      return oddOurBoardToResultBoard(ourBoard);
    } else {
      return evenOurBoardToResultBoard(ourBoard);
    }
  }
  
  function evenOurBoardToResultBoard(board : CBoard) : InputBoard {
  
    const totalRows : number = board.length
    const totalCols : number = board[0].length
  
    let finalBoard : InputBoard = []
  
    for(let i = 0; i < totalRows; i++) {
      let evenRow : number[] = []
      let oddRow : number[] = []
      for (let j = 0; j < totalCols; j++) {
        if(j % 2 == 0) {
          evenRow.push(makeInputSpace(board[i][j]))
        }
        else {
          oddRow.push(makeInputSpace(board[i][j]))
        }
      }
      finalBoard.push(evenRow)
      finalBoard.push(oddRow)
    }
    return finalBoard
  }
  
  function oddOurBoardToResultBoard(board : CBoard) : InputBoard {
  
    const totalRows : number = board.length
    const totalCols : number = board[0].length
  
    let finalBoard : InputBoard = []
  
    for(let i = 0; i < totalRows; i++) {
      let evenRow : number[] = []
      let oddRow : number[] = []
      for (let j = 0; j < totalCols; j++) {
        if(j % 2 == 0) {
          evenRow.push(makeInputSpace(board[i][j]))
        }
        else if(i < totalRows - 1){
          oddRow.push(makeInputSpace(board[i][j]))
        }
      }
      finalBoard.push(evenRow)
      if(i < totalRows - 1){
      finalBoard.push(oddRow)
      }
    }
    return finalBoard
  }

  function makeInputSpace(space : CSpace) : number {
      if (space != "unusable") {
      if(space === "hole") {
          return 0
      }
      else {
          if(typeof(space) === "number") {
              return space
          }
          else {
              return space[1]
          }
      }
    }
    return 0
}
  
