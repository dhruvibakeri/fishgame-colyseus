"use strict";
exports.__esModule = true;
exports.MAKE_FishesSpace = exports.MAKE_HoleSpace = exports.MAKE_PenguinSpace = exports.MAKE_Player = exports.MAKE_GameState = exports.MAKE_GameStateDone = exports.MAKE_GameStateJoining = exports.MAKE_GameStatePlacing = exports.MAKE_GameStatePlaying = void 0;
function MAKE_GameStatePlaying(kind, board, nextToMove, players) {
    return { gameStateKind: "playing", board: board, nextToPlace: nextToMove, players: players };
}
exports.MAKE_GameStatePlaying = MAKE_GameStatePlaying;
function MAKE_GameStatePlacing(kind, board, nextToMove, players) {
    return { gameStateKind: "placing", board: board, nextToPlace: nextToMove, players: players };
}
exports.MAKE_GameStatePlacing = MAKE_GameStatePlacing;
function MAKE_GameStateJoining(kind, players) {
    return { gameStateKind: "joining", players: players };
}
exports.MAKE_GameStateJoining = MAKE_GameStateJoining;
function MAKE_GameStateDone(kind, board, players) {
    return { gameStateKind: "done", board: board, players: players };
}
exports.MAKE_GameStateDone = MAKE_GameStateDone;
function MAKE_GameState(gameState) {
    if (gameState.gameStateKind === "done") {
        return MAKE_GameStateDone(gameState.gameStateKind, gameState.board, gameState.players);
    }
    else if (gameState.gameStateKind === "joining") {
        return MAKE_GameStateJoining(gameState.gameStateKind, gameState.players);
    }
    else if (gameState.gameStateKind === "placing") {
        return MAKE_GameStatePlacing(gameState.gameStateKind, gameState.board, gameState.nextToPlace, gameState.players);
    }
    else if (gameState.gameStateKind === "playing") {
        return MAKE_GameStatePlaying(gameState.gameStateKind, gameState.board, gameState.nextToPlace, gameState.players);
    }
    throw console.error("not a valid gameState");
}
exports.MAKE_GameState = MAKE_GameState;
function MAKE_Player(color, score, status) {
    return { penguinColor: color, score: score, playerStatus: status };
}
exports.MAKE_Player = MAKE_Player;
function MAKE_PenguinSpace(color, fishes) {
    return { spaceKind: "usableSpace", onUsableSpace: { onUsableSpaceKind: "tile", tileInfo: { size: 55, maxElements: 1 }, onTile: { onTileKind: "penguin", penguinColor: color, totalFishes: fishes } } };
}
exports.MAKE_PenguinSpace = MAKE_PenguinSpace;
function MAKE_HoleSpace() {
    return { spaceKind: "usableSpace", onUsableSpace: { onUsableSpaceKind: "hole" } };
}
exports.MAKE_HoleSpace = MAKE_HoleSpace;
function MAKE_FishesSpace(fishes) {
    return { spaceKind: "usableSpace", onUsableSpace: { onUsableSpaceKind: "tile", tileInfo: { size: 55, maxElements: 5 }, onTile: { onTileKind: "fishes", totalFishes: fishes } } };
}
exports.MAKE_FishesSpace = MAKE_FishesSpace;
