import { CBoard, CFish, CHole, CMove, CPenguin, CPosn, CScore, CScores, CSpace, CStage, CState } from "./compact-state-data-definition"
import { PRED_isCSpaceACFish, PRED_isCSpaceACHole, PRED_isCSpaceACUnusable, TEMPLATE_Unusable, PRED_isCSpaceACPenguin } from "./compact-state-predicates"
import { GET__CStageFromCState, GET__CBoardFromCState, GET__CScoresFromCState, GET__CPenguinFromCScore, GET__CScoreNumFromCScore } from "./compact-state-selectors"

export function TEMPLATE_CState(cState: CState): void {
  const cStage = GET__CStageFromCState(cState)
  const cBoard = GET__CBoardFromCState(cState)
  const cScores = GET__CScoresFromCState(cState)

  TEMPLATE_CStage(cStage)
  TEMPLATE_CBoard(cBoard)
  TEMPLATE_CScores(cScores)
}

export function TEMPLATE_CScores(cScores: CScores): void {
  for (let scoreIdx = 0; scoreIdx < cScores.length; scoreIdx++) {
    let thisScore: CScore = cScores[scoreIdx]
    TEMPLATE_CScore(thisScore);
  }
}

export function TEMPLATE_CScore(cScore: CScore) {
  const cPenguin = GET__CPenguinFromCScore(cScore);
  const cScoreNum = GET__CScoreNumFromCScore(cScore);

  //TEMPLATE_CPenguin(cPenguin)
  cScoreNum
}

export function TEMPLATE_CStage(cStage: CStage): void {
  if (cStage === "playing") {

  } else if (cStage === "joining") {

  } else if (cStage === "placing") {

  } else if (cStage === "done") {

  }
}

export function TEMPLATE_CBoard(cBoard: CBoard): void {
  for (let rowIdx = 0; rowIdx < cBoard.length; rowIdx++) {
    let row = cBoard[rowIdx];
    for (let colIdx = 0; colIdx < cBoard.length; colIdx++) {
      let cSpace: CSpace = row[colIdx];
      TEMPLATE_CSpace(cSpace);
    }
  }
}

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


export function TEMPLATE_CPenguin(cPenguin: CPenguin): void {
  //if (cPenguin === "red") {

  //} else if (cPenguin === "brown") {

  //} else if (cPenguin === "black") {

  //} else if (cPenguin === "white") {

  //}
}


export function TEMPLATE_CHole(cHole: CHole) {
  cHole
}



export function TEMPLATE_CPosn(cPosn: CPosn) {
  const [col, row] = cPosn;
}



export function TEMPLATE_CMove(cMove: CMove) {
  if (cMove === "SKIP") {

  } else {
    const [fromPosn, toPosn]: [CPosn, CPosn] = cMove;
    TEMPLATE_CPosn(fromPosn);
    TEMPLATE_CPosn(toPosn);
  }
}

export function TEMPLATE_CFish(cFish: CFish): void {
  cFish
}
