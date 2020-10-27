
import { CState, GET__CStageFromCState, GET__CBoardFromCState, GET__CScoresFromCState, CStage, CBoard, CScores, GET_currentScore, CScore, GET__CPenguinFromCScore, GET__CScoreNumFromCScore, CSpace, PRED_isCSpaceACFish, PRED_isCSpaceACHole, PRED_isCSpaceACUnusable, PRED_isCSpaceACPenguin, CFish, CPenguin } from "./cstate";
import { Board, GameState, GameStateDone, GameStateJoining, GameStatePlacing, GameStatePlaying, Player, Players, TileInfo, UnusableSpace, UsableSpace } from "./state";

const TILE_SIZE = 45;
const MAX_TILES = 5;
const DEFAULT_STATUS = "online"
const TILE_INFO: TileInfo = { size: TILE_SIZE, maxElements: MAX_TILES }


export function cStateToGameState(cState: CState): GameState {
  const cStage = GET__CStageFromCState(cState)
  const cBoard = GET__CBoardFromCState(cState)
  const cScores = GET__CScoresFromCState(cState)

  return cStageToGameState(cStage, cBoard, cScores)
}

function cStageToGameState(cStage: CStage, cBoard: CBoard, cScores: CScores): GameState {
  if (cStage === "playing") {
    return mkPlaying(cBoard, cScores);
  } else if (cStage === "joining") {
    return mkJoining(cScores);
  } else if (cStage === "placing") {
    return mkPlacing(cBoard, cScores);
  } else {
    return mkDone(cBoard, cScores);
  }
}

function mkJoining(cScores: CScores): GameStateJoining {
  return {
    gameStateKind: "joining",
    players: cScoresToPlayers(cScores)
  };
}
function mkPlacing(cBoard: CBoard, cScores: CScores): GameStatePlacing {
  return {
    gameStateKind: "placing",
    board: cBoardToBoard(cBoard),
    nextToPlace: cScoresToNextToPlace(cScores),
    players: cScoresToPlayers(cScores)
  };
}
function mkPlaying(cBoard: CBoard, cScores: CScores): GameStatePlaying {
  return {
    gameStateKind: "playing",
    board: cBoardToBoard(cBoard),
    nextToPlace: cScoresToNextToPlace(cScores),
    players: cScoresToPlayers(cScores)
  };
}
function mkDone(cBoard: CBoard, cScores: CScores): GameStateDone {
  return {
    gameStateKind: "done",
    board: cBoardToBoard(cBoard),
    players: cScoresToPlayers(cScores)
  };
}


export function cScoresToNextToPlace(cScores: CScores): Player {
  return cScoreToPlayer(GET_currentScore(cScores))
}

export function cScoresToPlayers(cScores: CScores): Players {
  return cScores.map(cScoreToPlayer);
}

export function cScoreToPlayer(cScore: CScore): Player {
  const cPenguin = GET__CPenguinFromCScore(cScore);
  const cScoreNum = GET__CScoreNumFromCScore(cScore);
  return {
    penguinColor: cPenguin,
    score: cScoreNum,
    playerStatus: DEFAULT_STATUS
  }
}

export function cBoardToBoard(cBoard: CBoard): Board {
  return cBoard.map(row => row.map(col => cSpaceToSpace(col))) as Board
}

export function cSpaceToSpace(cSpace: CSpace) {
  if (PRED_isCSpaceACFish(cSpace)) {
    return mkFish(cSpace);
  } else if (PRED_isCSpaceACHole(cSpace)) {
    return mkHole();
  } else if (PRED_isCSpaceACUnusable(cSpace)) {
    return mkUnusable();
  } else if (PRED_isCSpaceACPenguin(cSpace)) {
    return mkPenguin(cSpace);
  }
}

function mkFish(fishNum: CFish): UsableSpace {
  return {
    spaceKind: "usableSpace",
    onUsableSpace: {
      onUsableSpaceKind: "tile",
      tileInfo: TILE_INFO,
      onTile: {
        onTileKind: "fishes",
        totalFishes: fishNum
      }
    }
  }
}


function mkPenguin(penguinColor: CPenguin): UsableSpace {
  return {
    spaceKind: "usableSpace",
    onUsableSpace: {
      onUsableSpaceKind: "tile",
      tileInfo: TILE_INFO,
      onTile: {
        onTileKind: "penguin",
        penguinColor: penguinColor
      }
    }
  }
}


function mkHole(): UsableSpace {
  return {
    spaceKind: "usableSpace",
    onUsableSpace: {
      onUsableSpaceKind: "hole"
    }
  }
}

function mkUnusable(): UnusableSpace {
  return {
    spaceKind: "unusableSpace"
  }
}