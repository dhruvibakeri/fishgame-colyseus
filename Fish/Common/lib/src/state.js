"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNUSABLE = exports.HOLE = exports.LEFT = exports.KICKE = exports.OFFLINE = exports.ONLINE = exports.RED = exports.BROWN = exports.WHITE = exports.BLACK = void 0;
exports.BLACK = "black";
exports.WHITE = "white";
exports.BROWN = "brown";
exports.RED = "red";
exports.ONLINE = "online";
exports.OFFLINE = "offline";
exports.KICKE = "kicked";
exports.LEFT = "left";
exports.HOLE = { onUsableSpaceKind: "hole" };
exports.UNUSABLE = { spaceKind: "unusableSpace" };
function gameStateTemplate(gameState) {
    if (gameState.gameStateKind === "done") {
        gameStateDoneTemplate(gameState);
    }
    else if (gameState.gameStateKind === "joining") {
        gameStateJoiningTemplate(gameState);
    }
    else if (gameState.gameStateKind === "placing") {
        gameStatePlacingTemplate(gameState);
    }
    else if (gameState.gameStateKind === "playing") {
        gameStatePlayingTemplate(gameState);
    }
}
function gameStateJoiningTemplate(gameStateJoining) {
    const players = gameStateJoining.players;
    gameStateJoining.gameStateKind;
    playersTemplate(players);
}
function gameStatePlacingTemplate(gameStatePlacing) {
    const board = gameStatePlacing.board;
    const nextToPlace = gameStatePlacing.nextToPlace;
    const players = gameStatePlacing.players;
    gameStatePlacing.gameStateKind;
    boardTemplate(board);
    playerTemplate(nextToPlace);
    playersTemplate(players);
}
function gameStatePlayingTemplate(gameStatePlaying) {
    const board = gameStatePlaying.board;
    const nextToPlace = gameStatePlaying.nextToPlace;
    const players = gameStatePlaying.players;
    gameStatePlaying.gameStateKind;
    boardTemplate(board);
    playerTemplate(nextToPlace);
    playersTemplate(players);
}
function gameStateDoneTemplate(gameStateDone) {
    const board = gameStateDone.board;
    const players = gameStateDone.players;
    gameStateDone.gameStateKind;
    boardTemplate(board);
    playersTemplate(players);
}
function playersTemplate(players) {
    for (let playerIdx = 0; playerIdx < players.length; playerIdx = playerIdx + 1) {
        let player = players[playerIdx];
        playerTemplate(player);
    }
}
function boardTemplate(board) {
    for (let rowIdx = 0; rowIdx < board.length; rowIdx = rowIdx + 1) {
        let currRow = board[rowIdx];
        for (let colIdx = 0; colIdx < currRow.length; colIdx = colIdx + 1) {
            let space = board[rowIdx][colIdx];
            spaceTemplate(space);
        }
    }
}
function spaceTemplate(space) {
    if (space.spaceKind === "unusableSpace") {
        unusableSpaceTemplate(space);
    }
    else if (space.spaceKind === "usableSpace") {
        usableSpaceTemplate(space);
    }
}
function unusableSpaceTemplate(unusableSpace) {
    unusableSpace.spaceKind;
}
function usableSpaceTemplate(usableSpace) {
    const onUsableSpace = usableSpace.onUsableSpace;
    usableSpace.spaceKind;
    onUsableSpaceTemplate(onUsableSpace);
}
function onUsableSpaceTemplate(onUsableSpace) {
    if (onUsableSpace.onUsableSpaceKind === "hole") {
        holeTemplate(onUsableSpace);
    }
    else if (onUsableSpace.onUsableSpaceKind === "tile") {
        tileTemplate(onUsableSpace);
    }
}
function tileTemplate(tile) {
    const tileInfo = tile.tileInfo;
    const onTile = tile.onTile;
    tile.onUsableSpaceKind;
    tileInfoTemplate(tileInfo);
    onTileTemplate(onTile);
}
function holeTemplate(hole) {
    hole.onUsableSpaceKind;
}
function tileInfoTemplate(tileInfo) {
    const size = tileInfo.size;
    const maxElements = tileInfo.maxElements;
    size;
    maxElements;
}
function onTileTemplate(onTile) {
    if (onTile.onTileKind === "blankTile") {
        const blankTile = onTile;
        blankTileTemplate(blankTile);
    }
    else if (onTile.onTileKind === "fishes") {
        const fishes = onTile;
        fishesTemplate(fishes);
    }
    else if (onTile.onTileKind === "penguin") {
        const penguin = onTile;
        penguinTemplate(penguin);
    }
}
function blankTileTemplate(blankTile) {
    blankTile.onTileKind;
}
function fishesTemplate(fishes) {
    const totalFishes = fishes.totalFishes;
    fishes.onTileKind;
    totalFishes;
}
function penguinTemplate(penguin) {
    const penguinColor = penguin.penguinColor;
    penguin.onTileKind;
    penguinColorTemplate(penguinColor);
}
function playerTemplate(player) {
    const penguinColor = player.penguinColor;
    const score = player.score;
    const playerStatus = player.playerStatus;
    penguinColorTemplate(penguinColor);
    score;
    playerStatusTemplate(playerStatus);
}
function playerStatusTemplate(playerStatus) {
    if (playerStatus === "online") {
    }
    else if (playerStatus === "offline") {
    }
    else if (playerStatus === "kicked") {
    }
    else if (playerStatus === "left") {
    }
}
function penguinColorTemplate(penguinColor) {
    if (penguinColor === "black") {
    }
    else if (penguinColor === "white") {
    }
    else if (penguinColor === "brown") {
    }
    else if (penguinColor === "red") {
    }
}
