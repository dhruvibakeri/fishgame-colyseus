import { GameState, GameStateJoining, Players, GameStatePlacing, Board, Player, GameStatePlaying, GameStateDone, Space, UnusableSpace, UsableSpace, OnUsableSpace, Tile, TileInfo, OnTile, Hole, Fishes, Penguin, PlayerStatus, PenguinColor } from "./game-state-data-definition";

export function gameStateTemplate(gameState: GameState) {
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

export function gameStateJoiningTemplate(gameStateJoining: GameStateJoining) {

  const players: Players = gameStateJoining.players;

  gameStateJoining.gameStateKind
  playersTemplate(players);
}

export function gameStatePlacingTemplate(gameStatePlacing: GameStatePlacing) {

  const board: Board = gameStatePlacing.board;
  const nextToPlace: Player = gameStatePlacing.nextToPlace;
  const players: Players = gameStatePlacing.players;

  gameStatePlacing.gameStateKind;
  boardTemplate(board);
  playerTemplate(nextToPlace)
  playersTemplate(players);
}

export function gameStatePlayingTemplate(gameStatePlaying: GameStatePlaying) {

  const board: Board = gameStatePlaying.board
  const nextToPlace: Player = gameStatePlaying.nextToPlace
  const players: Players = gameStatePlaying.players

  gameStatePlaying.gameStateKind
  boardTemplate(board)
  playerTemplate(nextToPlace)
  playersTemplate(players)
}

export function gameStateDoneTemplate(gameStateDone: GameStateDone) {

  const board: Board = gameStateDone.board
  const players: Players = gameStateDone.players

  gameStateDone.gameStateKind
  boardTemplate(board)
  playersTemplate(players);
}


export function playersTemplate(players: Players) {
  for (let playerIdx = 0; playerIdx < players.length; playerIdx = playerIdx + 1) {
    let player: Player = players[playerIdx];
    playerTemplate(player);
  }
}

export function boardTemplate(board: Board) {
  for (let rowIdx = 0; rowIdx < board.length; rowIdx = rowIdx + 1) {
    let currRow: Space[] = board[rowIdx];
    for (let colIdx = 0; colIdx < currRow.length; colIdx = colIdx + 1) {
      let space: Space = board[rowIdx][colIdx];
      spaceTemplate(space);
    }
  }
}

export function spaceTemplate(space: Space) {
  if (space.spaceKind === "unusableSpace") {
    unusableSpaceTemplate(space)
  } else if (space.spaceKind === "usableSpace") {
    usableSpaceTemplate(space)
  }
}

export function unusableSpaceTemplate(unusableSpace: UnusableSpace) {
  unusableSpace.spaceKind
}

export function usableSpaceTemplate(usableSpace: UsableSpace) {
  const onUsableSpace: OnUsableSpace = usableSpace.onUsableSpace

  usableSpace.spaceKind
  onUsableSpaceTemplate(onUsableSpace)
}


export function onUsableSpaceTemplate(onUsableSpace: OnUsableSpace) {
  if (onUsableSpace.onUsableSpaceKind === "hole") {
    holeTemplate(onUsableSpace)
  } else if (onUsableSpace.onUsableSpaceKind === "tile") {
    tileTemplate(onUsableSpace);
  }
}

export function tileTemplate(tile: Tile) {
  const tileInfo: TileInfo = tile.tileInfo;
  const onTile: OnTile = tile.onTile;

  tile.onUsableSpaceKind
  tileInfoTemplate(tileInfo)
  onTileTemplate(onTile)
}

export function holeTemplate(hole: Hole) {
  hole.onUsableSpaceKind
}

export function tileInfoTemplate(tileInfo: TileInfo) {
  const size = tileInfo.size;
  const maxElements = tileInfo.maxElements;

  size
  maxElements
}

export function onTileTemplate(onTile: OnTile) {
   if (onTile.onTileKind === "fishes") {
    const fishes = onTile;
    fishesTemplate(fishes);
  } else if (onTile.onTileKind === "penguin") {
    const penguin = onTile;
    penguinTemplate(penguin);
  }
}


export function fishesTemplate(fishes: Fishes) {
  const totalFishes = fishes.totalFishes
  fishes.onTileKind;
  totalFishes;
}


export function penguinTemplate(penguin: Penguin) {
  const penguinColor = penguin.penguinColor;
  penguin.onTileKind;
  penguinColorTemplate(penguinColor);
}


export function playerTemplate(player: Player) {
  const penguinColor = player.penguinColor
  const score = player.score
  const playerStatus = player.playerStatus

  penguinColorTemplate(penguinColor);
  score;
  playerStatusTemplate(playerStatus);
}

export function playerStatusTemplate(playerStatus: PlayerStatus) {
  if (playerStatus === "online") {
  } else if (playerStatus === "offline") {
  } else if (playerStatus === "kicked") {
  } else if (playerStatus === "left") {
  }
}

export function penguinColorTemplate(penguinColor: PenguinColor) {
  if (penguinColor === "black") {
  } else if (penguinColor === "white") {
  } else if (penguinColor === "brown") {
  } else if (penguinColor === "red") {
  }
}

