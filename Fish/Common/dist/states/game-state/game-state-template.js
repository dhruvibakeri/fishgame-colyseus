"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.penguinColorTemplate = exports.playerStatusTemplate = exports.playerTemplate = exports.penguinTemplate = exports.fishesTemplate = exports.onTileTemplate = exports.tileInfoTemplate = exports.holeTemplate = exports.tileTemplate = exports.onUsableSpaceTemplate = exports.usableSpaceTemplate = exports.unusableSpaceTemplate = exports.spaceTemplate = exports.boardTemplate = exports.playersTemplate = exports.gameStateDoneTemplate = exports.gameStatePlayingTemplate = exports.gameStatePlacingTemplate = exports.gameStateJoiningTemplate = exports.gameStateTemplate = void 0;
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
exports.gameStateTemplate = gameStateTemplate;
function gameStateJoiningTemplate(gameStateJoining) {
    const players = gameStateJoining.players;
    gameStateJoining.gameStateKind;
    playersTemplate(players);
}
exports.gameStateJoiningTemplate = gameStateJoiningTemplate;
function gameStatePlacingTemplate(gameStatePlacing) {
    const board = gameStatePlacing.board;
    const nextToPlace = gameStatePlacing.nextToPlace;
    const players = gameStatePlacing.players;
    gameStatePlacing.gameStateKind;
    boardTemplate(board);
    playerTemplate(nextToPlace);
    playersTemplate(players);
}
exports.gameStatePlacingTemplate = gameStatePlacingTemplate;
function gameStatePlayingTemplate(gameStatePlaying) {
    const board = gameStatePlaying.board;
    const nextToPlace = gameStatePlaying.nextToPlace;
    const players = gameStatePlaying.players;
    gameStatePlaying.gameStateKind;
    boardTemplate(board);
    playerTemplate(nextToPlace);
    playersTemplate(players);
}
exports.gameStatePlayingTemplate = gameStatePlayingTemplate;
function gameStateDoneTemplate(gameStateDone) {
    const board = gameStateDone.board;
    const players = gameStateDone.players;
    gameStateDone.gameStateKind;
    boardTemplate(board);
    playersTemplate(players);
}
exports.gameStateDoneTemplate = gameStateDoneTemplate;
function playersTemplate(players) {
    for (let playerIdx = 0; playerIdx < players.length; playerIdx = playerIdx + 1) {
        let player = players[playerIdx];
        playerTemplate(player);
    }
}
exports.playersTemplate = playersTemplate;
function boardTemplate(board) {
    for (let rowIdx = 0; rowIdx < board.length; rowIdx = rowIdx + 1) {
        let currRow = board[rowIdx];
        for (let colIdx = 0; colIdx < currRow.length; colIdx = colIdx + 1) {
            let space = board[rowIdx][colIdx];
            spaceTemplate(space);
        }
    }
}
exports.boardTemplate = boardTemplate;
function spaceTemplate(space) {
    if (space.spaceKind === "unusableSpace") {
        unusableSpaceTemplate(space);
    }
    else if (space.spaceKind === "usableSpace") {
        usableSpaceTemplate(space);
    }
}
exports.spaceTemplate = spaceTemplate;
function unusableSpaceTemplate(unusableSpace) {
    unusableSpace.spaceKind;
}
exports.unusableSpaceTemplate = unusableSpaceTemplate;
function usableSpaceTemplate(usableSpace) {
    const onUsableSpace = usableSpace.onUsableSpace;
    usableSpace.spaceKind;
    onUsableSpaceTemplate(onUsableSpace);
}
exports.usableSpaceTemplate = usableSpaceTemplate;
function onUsableSpaceTemplate(onUsableSpace) {
    if (onUsableSpace.onUsableSpaceKind === "hole") {
        holeTemplate(onUsableSpace);
    }
    else if (onUsableSpace.onUsableSpaceKind === "tile") {
        tileTemplate(onUsableSpace);
    }
}
exports.onUsableSpaceTemplate = onUsableSpaceTemplate;
function tileTemplate(tile) {
    const tileInfo = tile.tileInfo;
    const onTile = tile.onTile;
    tile.onUsableSpaceKind;
    tileInfoTemplate(tileInfo);
    onTileTemplate(onTile);
}
exports.tileTemplate = tileTemplate;
function holeTemplate(hole) {
    hole.onUsableSpaceKind;
}
exports.holeTemplate = holeTemplate;
function tileInfoTemplate(tileInfo) {
    const size = tileInfo.size;
    const maxElements = tileInfo.maxElements;
    size;
    maxElements;
}
exports.tileInfoTemplate = tileInfoTemplate;
function onTileTemplate(onTile) {
    if (onTile.onTileKind === "fishes") {
        const fishes = onTile;
        fishesTemplate(fishes);
    }
    else if (onTile.onTileKind === "penguin") {
        const penguin = onTile;
        penguinTemplate(penguin);
    }
}
exports.onTileTemplate = onTileTemplate;
function fishesTemplate(fishes) {
    const totalFishes = fishes.totalFishes;
    fishes.onTileKind;
    totalFishes;
}
exports.fishesTemplate = fishesTemplate;
function penguinTemplate(penguin) {
    const penguinColor = penguin.penguinColor;
    penguin.onTileKind;
    penguinColorTemplate(penguinColor);
}
exports.penguinTemplate = penguinTemplate;
function playerTemplate(player) {
    const penguinColor = player.penguinColor;
    const score = player.score;
    const playerStatus = player.playerStatus;
    penguinColorTemplate(penguinColor);
    score;
    playerStatusTemplate(playerStatus);
}
exports.playerTemplate = playerTemplate;
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
exports.playerStatusTemplate = playerStatusTemplate;
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
exports.penguinColorTemplate = penguinColorTemplate;
//# sourceMappingURL=game-state-template.js.map