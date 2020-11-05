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
export type OnTile = Fishes | Penguin;


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
export type Penguin = { onTileKind: "penguin", penguinColor: PenguinColor, totalFishes: number };

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
