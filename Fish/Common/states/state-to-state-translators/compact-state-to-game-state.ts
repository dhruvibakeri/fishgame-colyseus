import { CState, CStage, CBoard, CScores, CScore, CSpace, CFish, CPenguin } from "../compact-state/compact-state-data-definition";
import { PRED_isCSpaceACFish, PRED_isCSpaceACHole, PRED_isCSpaceACUnusable, PRED_isCSpaceACPenguin } from "../compact-state/compact-state-predicates";
import { GET__CStageFromCState, GET__CBoardFromCState, GET__CScoresFromCState, GET_currentScore, GET__CPenguinFromCScore, GET__CScoreNumFromCScore } from "../compact-state/compact-state-selectors";
import { Board, GameState, GameStateDone, GameStateJoining, GameStatePlacing, GameStatePlaying, Player, Players, TileInfo, UnusableSpace, UsableSpace } from "../game-state/game-state-data-definition"

export const TILE_SIZE = 45;
export const MAX_TILES = 5;
export const DEFAULT_STATUS = "online"
export const TILE_INFO: TileInfo = { size: TILE_SIZE, maxElements: MAX_TILES }


/**
 * converts given CState to a GameState
 */
export function cStateToGameState(cState: CState): GameState {
  const cStage = GET__CStageFromCState(cState)
  const cBoard = GET__CBoardFromCState(cState)
  const cScores = GET__CScoresFromCState(cState)

  return cStageToGameState(cStage, cBoard, cScores)
}

// creates a GameState depending on the given CStage
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

// creates a GameStateJoining
function mkJoining(cScores: CScores): GameStateJoining {
  return {
    gameStateKind: "joining",
    players: cScoresToPlayers(cScores)
  };
}

// creates a GameStatePlacing
function mkPlacing(cBoard: CBoard, cScores: CScores): GameStatePlacing {
  return {
    gameStateKind: "placing",
    board: cBoardToBoard(cBoard),
    nextToPlace: cScoresToNextToPlace(cScores),
    players: cScoresToPlayers(cScores)
  };
}

// creates a GameStatePlaying
function mkPlaying(cBoard: CBoard, cScores: CScores): GameStatePlaying {
  return {
    gameStateKind: "playing",
    board: cBoardToBoard(cBoard),
    nextToPlace: cScoresToNextToPlace(cScores),
    players: cScoresToPlayers(cScores)
  };
}

// creates a GameStateDone
function mkDone(cBoard: CBoard, cScores: CScores): GameStateDone {
  return {
    gameStateKind: "done",
    board: cBoardToBoard(cBoard),
    players: cScoresToPlayers(cScores)
  };
}


// gets the next Player from given CScores
export function cScoresToNextToPlace(cScores: CScores): Player {
  return cScoreToPlayer(GET_currentScore(cScores))
}

// converts CScores to Players
export function cScoresToPlayers(cScores: CScores): Players {
  return cScores.map(cScoreToPlayer);
}

// converts given CScore to Player
export function cScoreToPlayer(cScore: CScore): Player {
  const cPenguin = GET__CPenguinFromCScore(cScore);
  const cScoreNum = GET__CScoreNumFromCScore(cScore);
  return {
    penguinColor: cPenguin,
    score: cScoreNum,
    playerStatus: DEFAULT_STATUS
  }
}

// converts given CBoard to Board
export function cBoardToBoard(cBoard: CBoard): Board {
  return cBoard.map(row => row.map(col => cSpaceToSpace(col))) as Board
}

// converts given CSpace to Space
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

// creates a UsableSpace with a fish tile
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


// creates a usable space with a penguin tile
function mkPenguin(penguinColor: CPenguin): UsableSpace {
  return {
    spaceKind: "usableSpace",
    onUsableSpace: {
      onUsableSpaceKind: "tile",
      tileInfo: TILE_INFO, 
      onTile: {
        onTileKind: "penguin",
        penguinColor: penguinColor[0],
        totalFishes: penguinColor[1]
      }
    }
  }
}


// creates a usable space with a hole
function mkHole(): UsableSpace {
  return {
    spaceKind: "usableSpace",
    onUsableSpace: {
      onUsableSpaceKind: "hole"
    }
  }
}

// creates an unusable space
function mkUnusable(): UnusableSpace {
  return {
    spaceKind: "unusableSpace"
  }
}

