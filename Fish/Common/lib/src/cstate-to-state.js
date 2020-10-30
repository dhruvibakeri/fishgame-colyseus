"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cSpaceToSpace = exports.cBoardToBoard = exports.cScoreToPlayer = exports.cScoresToPlayers = exports.cScoresToNextToPlace = exports.cStateToGameState = void 0;
const cstate_1 = require("./cstate");
const TILE_SIZE = 45;
const MAX_TILES = 5;
const DEFAULT_STATUS = "online";
const TILE_INFO = { size: TILE_SIZE, maxElements: MAX_TILES };
/**
 * converts given CState to a GameState
 */
function cStateToGameState(cState) {
    const cStage = cstate_1.GET__CStageFromCState(cState);
    const cBoard = cstate_1.GET__CBoardFromCState(cState);
    const cScores = cstate_1.GET__CScoresFromCState(cState);
    return cStageToGameState(cStage, cBoard, cScores);
}
exports.cStateToGameState = cStateToGameState;
// creates a GameState depending on the given CStage
function cStageToGameState(cStage, cBoard, cScores) {
    if (cStage === "playing") {
        return mkPlaying(cBoard, cScores);
    }
    else if (cStage === "joining") {
        return mkJoining(cScores);
    }
    else if (cStage === "placing") {
        return mkPlacing(cBoard, cScores);
    }
    else {
        return mkDone(cBoard, cScores);
    }
}
// creates a GameStateJoining
function mkJoining(cScores) {
    return {
        gameStateKind: "joining",
        players: cScoresToPlayers(cScores)
    };
}
// creates a GameStatePlacing
function mkPlacing(cBoard, cScores) {
    return {
        gameStateKind: "placing",
        board: cBoardToBoard(cBoard),
        nextToPlace: cScoresToNextToPlace(cScores),
        players: cScoresToPlayers(cScores)
    };
}
// creates a GameStatePlaying
function mkPlaying(cBoard, cScores) {
    return {
        gameStateKind: "playing",
        board: cBoardToBoard(cBoard),
        nextToPlace: cScoresToNextToPlace(cScores),
        players: cScoresToPlayers(cScores)
    };
}
// creates a GameStateDone
function mkDone(cBoard, cScores) {
    return {
        gameStateKind: "done",
        board: cBoardToBoard(cBoard),
        players: cScoresToPlayers(cScores)
    };
}
// gets the next Player from given CScores
function cScoresToNextToPlace(cScores) {
    return cScoreToPlayer(cstate_1.GET_currentScore(cScores));
}
exports.cScoresToNextToPlace = cScoresToNextToPlace;
// converts CScores to Players
function cScoresToPlayers(cScores) {
    return cScores.map(cScoreToPlayer);
}
exports.cScoresToPlayers = cScoresToPlayers;
// converts given CScore to Player
function cScoreToPlayer(cScore) {
    const cPenguin = cstate_1.GET__CPenguinFromCScore(cScore);
    const cScoreNum = cstate_1.GET__CScoreNumFromCScore(cScore);
    return {
        penguinColor: cPenguin,
        score: cScoreNum,
        playerStatus: DEFAULT_STATUS
    };
}
exports.cScoreToPlayer = cScoreToPlayer;
// converts given CBoard to Board
function cBoardToBoard(cBoard) {
    return cBoard.map(row => row.map(col => cSpaceToSpace(col)));
}
exports.cBoardToBoard = cBoardToBoard;
// converts given CSpace to Space
function cSpaceToSpace(cSpace) {
    if (cstate_1.PRED_isCSpaceACFish(cSpace)) {
        return mkFish(cSpace);
    }
    else if (cstate_1.PRED_isCSpaceACHole(cSpace)) {
        return mkHole();
    }
    else if (cstate_1.PRED_isCSpaceACUnusable(cSpace)) {
        return mkUnusable();
    }
    else if (cstate_1.PRED_isCSpaceACPenguin(cSpace)) {
        return mkPenguin(cSpace);
    }
}
exports.cSpaceToSpace = cSpaceToSpace;
// creates a UsableSpace with a fish tile
function mkFish(fishNum) {
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
    };
}
// creates a usable space with a penguin tile
function mkPenguin(penguinColor) {
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
    };
}
// creates a usable space with a hole
function mkHole() {
    return {
        spaceKind: "usableSpace",
        onUsableSpace: {
            onUsableSpaceKind: "hole"
        }
    };
}
// creates an unusable space
function mkUnusable() {
    return {
        spaceKind: "unusableSpace"
    };
}
