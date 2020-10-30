"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateToCState = void 0;
function stateToCState(gameState) {
    if (gameState.gameStateKind === "done") {
        return doneToCState(gameState);
    }
    else if (gameState.gameStateKind === "joining") {
        return joiningToCState(gameState);
    }
    else if (gameState.gameStateKind === "placing") {
        return placingToCState(gameState);
    }
    else {
        return playingToCState(gameState);
    }
}
exports.stateToCState = stateToCState;
function joiningToCState(gameStateJoining) {
    const players = gameStateJoining.players;
    return [
        gameStateJoining.gameStateKind,
        [],
        playersToCScores(players)
    ];
}
function playersToCScores(players) {
    return players.map(player => [player.penguinColor, player.score]);
}
function nextToPlaceAndPlayersInvariant(nextToPlace, players) {
    console.assert(nextToPlace.penguinColor === players[0].penguinColor &&
        nextToPlace.score === players[0].score);
}
function placingToCState(gameStatePlacing) {
    const board = gameStatePlacing.board;
    const nextToPlace = gameStatePlacing.nextToPlace;
    const players = gameStatePlacing.players;
    nextToPlaceAndPlayersInvariant(nextToPlace, players);
    return [
        gameStatePlacing.gameStateKind,
        boardToCBoard(board),
        playersToCScores(players)
    ];
}
function playingToCState(gameStatePlaying) {
    const board = gameStatePlaying.board;
    const nextToPlace = gameStatePlaying.nextToPlace;
    const players = gameStatePlaying.players;
    nextToPlaceAndPlayersInvariant(nextToPlace, players);
    return [
        gameStatePlaying.gameStateKind,
        boardToCBoard(board),
        playersToCScores(players)
    ];
}
function doneToCState(gameStateDone) {
    const board = gameStateDone.board;
    const players = gameStateDone.players;
    return [
        gameStateDone.gameStateKind,
        boardToCBoard(board),
        playersToCScores(players)
    ];
}
function boardToCBoard(board) {
    return board.map(row => row.map(col => spaceToCSpace(col)));
}
function spaceToCSpace(space) {
    if (space.spaceKind === "unusableSpace") {
        return "unusable";
    }
    else {
        return onUsableSpaceToCSpace(space.onUsableSpace);
    }
}
function onUsableSpaceToCSpace(onUsableSpace) {
    if (onUsableSpace.onUsableSpaceKind === "hole") {
        return "hole";
    }
    else {
        return onTileToCSpace(onUsableSpace.onTile);
    }
}
function onTileToCSpace(onTile) {
    if (onTile.onTileKind === "blankTile") {
        return 0;
    }
    else if (onTile.onTileKind === "fishes") {
        return onTile.totalFishes;
    }
    else {
        return onTile.penguinColor;
    }
}
