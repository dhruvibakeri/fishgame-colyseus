/**
 * GameState is one of
 * - GameStateJoining : stage where players are joing
 * - GameStatePlacing : stage where players are placing their penguins according to turn
 * - GameStatePlaying : stage where all penguins are placed and players can now take turns to move
 *                    : GameState will be in "playing" stage until none of the penguins have any moves left
 * - GameStateDone    : stage where no penguins have moves left, and the game is over
 */
export type GameState = (GameStateJoining | GameStatePlacing | GameStatePlaying | GameStateDone);

/**
 * GameStateJoining is:
 * - gameStateKind : will always be "joining"
 * - players : players that have currently joined the game
 */
export type GameStateJoining = { gameStateKind: "joining", players: Players };

/**
 * GameStatePlacing is:
 * - gameStateKind : will always be "placing"
 * - board : board containing penguins that have been placed
 * - nextToPlace : the player whose turn to place is next
 * - players : players that are a part of this game
 */
export type GameStatePlacing = { gameStateKind: "placing", board: Board, nextToPlace: Player, players: Players };

/**
 * GameStatePlaying is:
 * - gameStateKind : will always be "playing"
 * - board : board containing penguins at their chosen positions
 * - nextToPlace : the player whose turn to move is next
 * - players : players that are a part of this game
 */
export type GameStatePlaying = { gameStateKind: "playing", board: Board, nextToPlace: Player, players: Players };

/**
 * GameStatePlacing is:
 * - gameStateKind : will always be "done"
 * - board : board that was created after the last move was made and the game was over
 * - players : players that were a part of this game
 */
export type GameStateDone = { gameStateKind: "done", board: Board, players: Players };

/***
 * Board will always be a 2-D array containing 'Space'
 */
export type Board = Space[][]

/**
 * A Space is one of:
 * - UsableSpace : can be a Tile with fish/penguin or a hole
 * - UnusableSpace : - Not a part of the game board
 *                   - represents blank spaces in the odd columns of the last row 
 *                     when the row length of the board is odd
 */
export type Space = UsableSpace | UnusableSpace

/**
 * Will always be { spaceKind: "unusableSpace" }.
 */
export type UnusableSpace = { spaceKind: "unusableSpace" }

/**
 * UsableSpace is:
 * - spaceKind: will always be "usableSpace"
 * - onUsableSpace: represents a tile with fish/penguins or a hole
 */
export type UsableSpace = { spaceKind: "usableSpace", onUsableSpace: OnUsableSpace };

/**
 * OnUsableSpace is one of:
 * - Tile : represents fish/ penguin on a tile
 * - Hole : represents a hole 
 */
export type OnUsableSpace = Tile | Hole;

/**
 * Tile is
 * - onUsableSpaceKind : will always be "tile"
 * - tileInfo : represents the size of the tile and the max no. of fish / penguins it can have
 * - onTile : represents whether the tile contains fish/ a penguin
 */
export type Tile = { onUsableSpaceKind: "tile", tileInfo: TileInfo, onTile: OnTile };

/**
 * Hole represents a hole in the board(made by a referee or when a player makes a move).
 * - will always be { onUsableSpaceKind: "hole" }
 */
export type Hole = { onUsableSpaceKind: "hole" }

/**
 * TileInfo is
 * - size : size of the tile
 * - maxElements : number of max elements the tile can have
 */
export type TileInfo = { size: number, maxElements: number };

/**
 * OnTile is one of:
 * Fishes : represents no. of fish on the tile
 * Penguin : represent a particular player's penguin on the tile
 * BlankTile : no elements on the tile (unlikely case)
 */
export type OnTile = Fishes | Penguin | BlankTile;

/**
 * A BlankTile represents a tile with no elements on it.
 * - will always be { onTileKind: "blankTile" }.
 */
export type BlankTile = { onTileKind: "blankTile" }

/**
 * Fishes is
 * - onTileKind : will always be "fishes"
 * - totalFishes : represents the no of fish on that tile
 */
export type Fishes = { onTileKind: "fishes", totalFishes: number };

/**
 * Penguin is
 * - onTileKind : will always be "penguin"
 * - penguinColor : represents the color of the penguin
 */
export type Penguin = { onTileKind: "penguin", penguinColor: PenguinColor };

/**
 * Player is
 * - penguinColor : color of the penguin the player has been assigned 
 * - score : score of the player
 * - playerStatus : status of the player
 */
export type Player = { penguinColor: PenguinColor, score: number, playerStatus: PlayerStatus };

/**
 * Players is a list of Player.
 * - would represent the players that are a part of this game.
 */
export type Players = Player[]

/**
 * PlayerStatus is one of:
 * - online : the player is online and a part of this game
 * - offline : the player is offline and not a part of this game anymore
 * - kicked : the player has been kicked out and is not a part of this game anymore
 * - left : the player has left and is not a part of this game anymore
 */
export type PlayerStatus = "online" | "offline" | "kicked" | "left";

/**
 * PenguinColor represents the color of the penguin assinged to a player.
 * All players must have a different color.
 * It is one of:
 * - black
 * - white
 * - brown
 * - red
 */
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
