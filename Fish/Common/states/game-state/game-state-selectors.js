"use strict";
exports.__esModule = true;
exports.GET_PlayerScore = exports.GET_PlayerStatus = exports.GET_PlayerColor = exports.GET_penguinColor = exports.GET_totalFishesFromPenguin = exports.GET_totalFishes = exports.GET_OnTileKind = exports.GET_TileMaxElements = exports.GET_TileSize = exports.GET_OnTile = exports.GET_TileInfo = exports.GET_UsableSpaceKind = exports.GET_OnUsableSpace = exports.GET_SpaceKindFromSpace = exports.GET_GameStateNextToPlace = exports.GET_GameStateBoard = exports.GET_GameStatePlayers = exports.GET_GameStateKind = void 0;
// state selectors 
function GET_GameStateKind(gs) {
    return gs.gameStateKind;
}
exports.GET_GameStateKind = GET_GameStateKind;
function GET_GameStatePlayers(gs) {
    return gs.players;
}
exports.GET_GameStatePlayers = GET_GameStatePlayers;
function GET_GameStateBoard(gs) {
    if (GET_GameStateKind(gs) != "joining") {
        return gs.board;
    }
    else {
        throw console.error("players are still joining, no board yet");
    }
}
exports.GET_GameStateBoard = GET_GameStateBoard;
function GET_GameStateNextToPlace(gameState) {
    if (gameState.gameStateKind === "done") {
        throw new Error("done stage does not have a next to place");
    }
    else if (gameState.gameStateKind === "joining") {
        throw new Error("joining stage does not have a next to place");
    }
    else if (gameState.gameStateKind === "placing") {
        return gameState.nextToPlace;
    }
    else if (gameState.gameStateKind === "playing") {
        return gameState.nextToPlace;
    }
    else {
        throw Error("Not a valid game state");
    }
}
exports.GET_GameStateNextToPlace = GET_GameStateNextToPlace;
// board selectors
function GET_SpaceKindFromSpace(space) {
    return space.spaceKind;
}
exports.GET_SpaceKindFromSpace = GET_SpaceKindFromSpace;
function GET_OnUsableSpace(us) {
    return us.onUsableSpace;
}
exports.GET_OnUsableSpace = GET_OnUsableSpace;
function GET_UsableSpaceKind(usableSpace) {
    return usableSpace.onUsableSpaceKind;
}
exports.GET_UsableSpaceKind = GET_UsableSpaceKind;
function GET_TileInfo(tile) {
    return tile.tileInfo;
}
exports.GET_TileInfo = GET_TileInfo;
function GET_OnTile(tile) {
    return tile.onTile;
}
exports.GET_OnTile = GET_OnTile;
function GET_TileSize(tile) {
    return tile.tileInfo.size;
}
exports.GET_TileSize = GET_TileSize;
function GET_TileMaxElements(tile) {
    return tile.tileInfo.maxElements;
}
exports.GET_TileMaxElements = GET_TileMaxElements;
function GET_OnTileKind(tile) {
    return tile.onTile.onTileKind;
}
exports.GET_OnTileKind = GET_OnTileKind;
function GET_totalFishes(onTile) {
    return onTile.totalFishes;
}
exports.GET_totalFishes = GET_totalFishes;
function GET_totalFishesFromPenguin(onTile) {
    return onTile.totalFishes;
}
exports.GET_totalFishesFromPenguin = GET_totalFishesFromPenguin;
function GET_penguinColor(onTile) {
    return onTile.penguinColor;
}
exports.GET_penguinColor = GET_penguinColor;
// player selectors
function GET_PlayerColor(player) {
    return player.penguinColor;
}
exports.GET_PlayerColor = GET_PlayerColor;
function GET_PlayerStatus(player) {
    return player.playerStatus;
}
exports.GET_PlayerStatus = GET_PlayerStatus;
function GET_PlayerScore(player) {
    return player.score;
}
exports.GET_PlayerScore = GET_PlayerScore;
