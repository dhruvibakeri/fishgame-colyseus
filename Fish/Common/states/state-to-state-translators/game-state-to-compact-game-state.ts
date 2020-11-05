import { CState, CScores, CBoard, CSpace } from "../compact-state/compact-state-data-definition";
import { Board, GameState, GameStateDone, GameStateJoining, GameStatePlacing, GameStatePlaying, OnTile, OnUsableSpace, Player, Players, Space } from "../game-state/game-state-data-definition";


export function stateToCState(gameState: GameState): CState {
  if (gameState.gameStateKind === "done") {
    return doneToCState(gameState)
  } else if (gameState.gameStateKind === "joining") {
    return joiningToCState(gameState)
  } else if (gameState.gameStateKind === "placing") {
    return placingToCState(gameState)
  } else {
    return playingToCState(gameState)
  }
}

export function joiningToCState(gameStateJoining: GameStateJoining): CState {
  const players: Players = gameStateJoining.players;
  return [
    gameStateJoining.gameStateKind,
    [], // "joining" stage has an empty board!
    playersToCScores(players)
  ]

}

export function playersToCScores(players: Players): CScores {
  return players.map(player => [player.penguinColor, player.score]);
}

export function nextToPlaceAndPlayersInvariant(nextToPlace: Player, players: Players) {
  console.assert(
    nextToPlace.penguinColor === players[0].penguinColor &&
    nextToPlace.score === players[0].score
  );
}


export function placingToCState(gameStatePlacing: GameStatePlacing): CState {

  const board: Board = gameStatePlacing.board;
  const nextToPlace: Player = gameStatePlacing.nextToPlace;
  const players: Players = gameStatePlacing.players;

  nextToPlaceAndPlayersInvariant(nextToPlace, players)

  return [
    gameStatePlacing.gameStateKind,
    boardToCBoard(board),
    playersToCScores(players)
  ]
}

export function playingToCState(gameStatePlaying: GameStatePlaying): CState {

  const board: Board = gameStatePlaying.board
  const nextToPlace: Player = gameStatePlaying.nextToPlace
  const players: Players = gameStatePlaying.players

  nextToPlaceAndPlayersInvariant(nextToPlace, players)

  return [
    gameStatePlaying.gameStateKind,
    boardToCBoard(board),
    playersToCScores(players)

  ]
}

export function doneToCState(gameStateDone: GameStateDone): CState {

  const board: Board = gameStateDone.board
  const players: Players = gameStateDone.players

  return [
    gameStateDone.gameStateKind,
    boardToCBoard(board),
    playersToCScores(players)
  ]
}

export function boardToCBoard(board: Board): CBoard {
  return board.map(row => row.map(col => spaceToCSpace(col)));
}

export function spaceToCSpace(space: Space): CSpace {
  if (space.spaceKind === "unusableSpace") {
    return "unusable"
  } else {
    return onUsableSpaceToCSpace(space.onUsableSpace)
  }
}

export function onUsableSpaceToCSpace(onUsableSpace: OnUsableSpace): CSpace {
  if (onUsableSpace.onUsableSpaceKind === "hole") {
    return "hole"
  } else {
    return onTileToCSpace(onUsableSpace.onTile);
  }
}

export function onTileToCSpace(onTile: OnTile): CSpace {
  if (onTile.onTileKind === "fishes") {
    return onTile.totalFishes;
  } else {
    return [onTile.penguinColor, onTile.totalFishes]
  }
}
