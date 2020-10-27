export type GameState = (GameStateJoining | GameStatePlacing | GameStatePlaying | GameStateDone);

export type GameStateJoining = { gameStateKind: "joining", players: Players };
export type GameStatePlacing = { gameStateKind: "placing", board: Board, nextToPlace: Player, players: Players };
export type GameStatePlaying = { gameStateKind: "playing", board: Board, nextToPlace: Player, players: Players };
export type GameStateDone = { gameStateKind: "done", board: Board, players: Players };

export type Board = Space[][]
export type Space = UsableSpace | UnusableSpace

export type UnusableSpace = { spaceKind: "unusableSpace" }
export type UsableSpace = { spaceKind: "usableSpace", onUsableSpace: OnUsableSpace };

export type OnUsableSpace = Tile | Hole;
export type Tile = { onUsableSpaceKind: "tile", tileInfo: TileInfo, onTile: OnTile };
export type Hole = { onUsableSpaceKind: "hole" }

export type TileInfo = { size: number, maxElements: number };

export type OnTile = Fishes | Penguin | BlankTile;

export type BlankTile = { onTileKind: "blankTile" }
export type Fishes = { onTileKind: "fishes", totalFishes: number };
export type Penguin = { onTileKind: "penguin", penguinColor: PenguinColor };

export type Player = { penguinColor: PenguinColor, score: number, playerStatus: PlayerStatus };

// ASSUMPTION: In ascending order of age!
export type Players = Player[]

export type PlayerStatus = "online" | "offline" | "kicked" | "left";
export type PenguinColor = "black" | "white" | "brown" | "red";

export const BLACK = "black"
export const WHITE = "white"
export const BROWN = "brown"
export const RED = "red"

export const ONLINE = "online"
export const OFFLINE = "offline"
export const KICKE = "kicked"
export const LEFT = "left"

export const HOLE = { onUsableSpaceKind: "hole" }
export const UNUSABLE = { spaceKind: "unusableSpace" }






function gameStateTemplate(gameState: GameState) {
  if (gameState.gameStateKind === "done") {
    gameStateDoneTemplate(gameState)
  } else if (gameState.gameStateKind === "joining") {
    gameStateJoiningTemplate(gameState)
  } else if (gameState.gameStateKind === "placing") {
    gameStatePlacingTemplate(gameState)
  } else if (gameState.gameStateKind === "playing") {
    gameStatePlayingTemplate(gameState)
  }
}

function gameStateJoiningTemplate(gameStateJoining: GameStateJoining) {

  const players: Players = gameStateJoining.players;

  gameStateJoining.gameStateKind
  playersTemplate(players);
}

function gameStatePlacingTemplate(gameStatePlacing: GameStatePlacing) {

  const board: Board = gameStatePlacing.board;
  const nextToPlace: Player = gameStatePlacing.nextToPlace;
  const players: Players = gameStatePlacing.players;

  gameStatePlacing.gameStateKind;
  boardTemplate(board);
  playerTemplate(nextToPlace)
  playersTemplate(players);
}

function gameStatePlayingTemplate(gameStatePlaying: GameStatePlaying) {

  const board: Board = gameStatePlaying.board
  const nextToPlace: Player = gameStatePlaying.nextToPlace
  const players: Players = gameStatePlaying.players

  gameStatePlaying.gameStateKind
  boardTemplate(board)
  playerTemplate(nextToPlace)
  playersTemplate(players)
}

function gameStateDoneTemplate(gameStateDone: GameStateDone) {

  const board: Board = gameStateDone.board
  const players: Players = gameStateDone.players

  gameStateDone.gameStateKind
  boardTemplate(board)
  playersTemplate(players);
}


function playersTemplate(players: Players) {
  for (let playerIdx = 0; playerIdx < players.length; playerIdx = playerIdx + 1) {
    let player: Player = players[playerIdx];
    playerTemplate(player);
  }
}

function boardTemplate(board: Board) {
  for (let rowIdx = 0; rowIdx < board.length; rowIdx = rowIdx + 1) {
    let currRow: Space[] = board[rowIdx];
    for (let colIdx = 0; colIdx < currRow.length; colIdx = colIdx + 1) {
      let space: Space = board[rowIdx][colIdx];
      spaceTemplate(space);
    }
  }
}

function spaceTemplate(space: Space) {
  if (space.spaceKind === "unusableSpace") {
    unusableSpaceTemplate(space)
  } else if (space.spaceKind === "usableSpace") {
    usableSpaceTemplate(space)
  }
}

function unusableSpaceTemplate(unusableSpace: UnusableSpace) {
  unusableSpace.spaceKind
}

function usableSpaceTemplate(usableSpace: UsableSpace) {
  const onUsableSpace: OnUsableSpace = usableSpace.onUsableSpace

  usableSpace.spaceKind
  onUsableSpaceTemplate(onUsableSpace)
}


function onUsableSpaceTemplate(onUsableSpace: OnUsableSpace) {
  if (onUsableSpace.onUsableSpaceKind === "hole") {
    holeTemplate(onUsableSpace)
  } else if (onUsableSpace.onUsableSpaceKind === "tile") {
    tileTemplate(onUsableSpace);
  }
}

function tileTemplate(tile: Tile) {
  const tileInfo: TileInfo = tile.tileInfo;
  const onTile: OnTile = tile.onTile;

  tile.onUsableSpaceKind
  tileInfoTemplate(tileInfo)
  onTileTemplate(onTile)
}

function holeTemplate(hole: Hole) {
  hole.onUsableSpaceKind
}

function tileInfoTemplate(tileInfo: TileInfo) {
  const size = tileInfo.size;
  const maxElements = tileInfo.maxElements;

  size
  maxElements
}

function onTileTemplate(onTile: OnTile) {
  if (onTile.onTileKind === "blankTile") {
    const blankTile = onTile;
    blankTileTemplate(blankTile);
  } else if (onTile.onTileKind === "fishes") {
    const fishes = onTile;
    fishesTemplate(fishes);
  } else if (onTile.onTileKind === "penguin") {
    const penguin = onTile;
    penguinTemplate(penguin);
  }
}

function blankTileTemplate(blankTile: BlankTile) {
  blankTile.onTileKind
}

function fishesTemplate(fishes: Fishes) {
  const totalFishes = fishes.totalFishes
  fishes.onTileKind;
  totalFishes;
}


function penguinTemplate(penguin: Penguin) {
  const penguinColor = penguin.penguinColor;
  penguin.onTileKind;
  penguinColorTemplate(penguinColor);
}


function playerTemplate(player: Player) {
  const penguinColor = player.penguinColor
  const score = player.score
  const playerStatus = player.playerStatus

  penguinColorTemplate(penguinColor);
  score;
  playerStatusTemplate(playerStatus);
}

function playerStatusTemplate(playerStatus: PlayerStatus) {
  if (playerStatus === "online") {
  } else if (playerStatus === "offline") {
  } else if (playerStatus === "kicked") {
  } else if (playerStatus === "left") {
  }
}

function penguinColorTemplate(penguinColor: PenguinColor) {
  if (penguinColor === "black") {
  } else if (penguinColor === "white") {
  } else if (penguinColor === "brown") {
  } else if (penguinColor === "red") {
  }
}