"use strict";
exports.__esModule = true;
exports.cSpaceToSpace = exports.cBoardToBoard = exports.cScoreToPlayer = exports.cScoresToPlayers = exports.cScoresToNextToPlace = exports.cStateToGameState = exports.TILE_INFO = exports.DEFAULT_STATUS = exports.MAX_TILES = exports.TILE_SIZE = void 0;
var compact_state_predicates_1 = require("../compact-state/compact-state-predicates");
var compact_state_selectors_1 = require("../compact-state/compact-state-selectors");
exports.TILE_SIZE = 45;
exports.MAX_TILES = 5;
exports.DEFAULT_STATUS = "online";
exports.TILE_INFO = { size: exports.TILE_SIZE, maxElements: exports.MAX_TILES };
/**
 * converts given CState to a GameState
 */
function cStateToGameState(cState) {
    var cStage = compact_state_selectors_1.GET__CStageFromCState(cState);
    var cBoard = compact_state_selectors_1.GET__CBoardFromCState(cState);
    var cScores = compact_state_selectors_1.GET__CScoresFromCState(cState);
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
    return cScoreToPlayer(compact_state_selectors_1.GET_currentScore(cScores));
}
exports.cScoresToNextToPlace = cScoresToNextToPlace;
// converts CScores to Players
function cScoresToPlayers(cScores) {
    return cScores.map(cScoreToPlayer);
}
exports.cScoresToPlayers = cScoresToPlayers;
// converts given CScore to Player
function cScoreToPlayer(cScore) {
    var cPenguin = compact_state_selectors_1.GET__CPenguinFromCScore(cScore);
    var cScoreNum = compact_state_selectors_1.GET__CScoreNumFromCScore(cScore);
    return {
        penguinColor: cPenguin,
        score: cScoreNum,
        playerStatus: exports.DEFAULT_STATUS
    };
}
exports.cScoreToPlayer = cScoreToPlayer;
// converts given CBoard to Board
function cBoardToBoard(cBoard) {
    return cBoard.map(function (row) { return row.map(function (col) { return cSpaceToSpace(col); }); });
}
exports.cBoardToBoard = cBoardToBoard;
// converts given CSpace to Space
function cSpaceToSpace(cSpace) {
    if (compact_state_predicates_1.PRED_isCSpaceACFish(cSpace)) {
        return mkFish(cSpace);
    }
    else if (compact_state_predicates_1.PRED_isCSpaceACHole(cSpace)) {
        return mkHole();
    }
    else if (compact_state_predicates_1.PRED_isCSpaceACUnusable(cSpace)) {
        return mkUnusable();
    }
    else if (compact_state_predicates_1.PRED_isCSpaceACPenguin(cSpace)) {
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
            tileInfo: exports.TILE_INFO,
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
            tileInfo: exports.TILE_INFO,
            onTile: {
                onTileKind: "penguin",
                penguinColor: penguinColor[0],
                totalFishes: penguinColor[1]
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
