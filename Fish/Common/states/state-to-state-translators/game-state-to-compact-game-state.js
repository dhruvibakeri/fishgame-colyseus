"use strict";
exports.__esModule = true;
exports.onTileToCSpace = exports.onUsableSpaceToCSpace = exports.spaceToCSpace = exports.boardToCBoard = exports.doneToCState = exports.playingToCState = exports.placingToCState = exports.nextToPlaceAndPlayersInvariant = exports.playersToCScores = exports.joiningToCState = exports.stateToCState = void 0;
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
    var players = gameStateJoining.players;
    return [
        gameStateJoining.gameStateKind,
        [],
        playersToCScores(players)
    ];
}
exports.joiningToCState = joiningToCState;
function playersToCScores(players) {
    return players.map(function (player) { return [player.penguinColor, player.score]; });
}
exports.playersToCScores = playersToCScores;
function nextToPlaceAndPlayersInvariant(nextToPlace, players) {
    console.assert(nextToPlace.penguinColor === players[0].penguinColor &&
        nextToPlace.score === players[0].score);
}
exports.nextToPlaceAndPlayersInvariant = nextToPlaceAndPlayersInvariant;
function placingToCState(gameStatePlacing) {
    var board = gameStatePlacing.board;
    var nextToPlace = gameStatePlacing.nextToPlace;
    var players = gameStatePlacing.players;
    nextToPlaceAndPlayersInvariant(nextToPlace, players);
    return [
        gameStatePlacing.gameStateKind,
        boardToCBoard(board),
        playersToCScores(players)
    ];
}
exports.placingToCState = placingToCState;
function playingToCState(gameStatePlaying) {
    var board = gameStatePlaying.board;
    var nextToPlace = gameStatePlaying.nextToPlace;
    var players = gameStatePlaying.players;
    nextToPlaceAndPlayersInvariant(nextToPlace, players);
    return [
        gameStatePlaying.gameStateKind,
        boardToCBoard(board),
        playersToCScores(players)
    ];
}
exports.playingToCState = playingToCState;
function doneToCState(gameStateDone) {
    var board = gameStateDone.board;
    var players = gameStateDone.players;
    return [
        gameStateDone.gameStateKind,
        boardToCBoard(board),
        playersToCScores(players)
    ];
}
exports.doneToCState = doneToCState;
function boardToCBoard(board) {
    return board.map(function (row) { return row.map(function (col) { return spaceToCSpace(col); }); });
}
exports.boardToCBoard = boardToCBoard;
function spaceToCSpace(space) {
    if (space.spaceKind === "unusableSpace") {
        return "unusable";
    }
    else {
        return onUsableSpaceToCSpace(space.onUsableSpace);
    }
}
exports.spaceToCSpace = spaceToCSpace;
function onUsableSpaceToCSpace(onUsableSpace) {
    if (onUsableSpace.onUsableSpaceKind === "hole") {
        return "hole";
    }
    else {
        return onTileToCSpace(onUsableSpace.onTile);
    }
}
exports.onUsableSpaceToCSpace = onUsableSpaceToCSpace;
function onTileToCSpace(onTile) {
    if (onTile.onTileKind === "fishes") {
        return onTile.totalFishes;
    }
    else {
        return [onTile.penguinColor, onTile.totalFishes];
    }
}
exports.onTileToCSpace = onTileToCSpace;
