import { CState, CScores, CBoard, CSpace } from "./cstate";
import { GameState, GameStateJoining, Players, Player, GameStatePlacing, Board, GameStatePlaying, GameStateDone, Space, OnUsableSpace, OnTile } from "./state";

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

function joiningToCState(gameStateJoining: GameStateJoining): CState {
  const players: Players = gameStateJoining.players;
  return [
    gameStateJoining.gameStateKind,
    [], // "joining" stage has an empty board!
    playersToCScores(players)
  ]

}

function playersToCScores(players: Players): CScores {
  return players.map(player => [player.penguinColor, player.score]);
}

function nextToPlaceAndPlayersInvariant(nextToPlace: Player, players: Players) {
  console.assert(
    nextToPlace.penguinColor === players[0].penguinColor &&
    nextToPlace.score === players[0].score
  );
}


function placingToCState(gameStatePlacing: GameStatePlacing): CState {

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

function playingToCState(gameStatePlaying: GameStatePlaying): CState {

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

function doneToCState(gameStateDone: GameStateDone): CState {

  const board: Board = gameStateDone.board
  const players: Players = gameStateDone.players

  return [
    gameStateDone.gameStateKind,
    boardToCBoard(board),
    playersToCScores(players)
  ]
}

function boardToCBoard(board: Board): CBoard {
  return board.map(row => row.map(col => spaceToCSpace(col)));
}

function spaceToCSpace(space: Space): CSpace {
  if (space.spaceKind === "unusableSpace") {
    return "unusable"
  } else {
    return onUsableSpaceToCSpace(space.onUsableSpace)
  }
}

function onUsableSpaceToCSpace(onUsableSpace: OnUsableSpace): CSpace {
  if (onUsableSpace.onUsableSpaceKind === "hole") {
    return "hole"
  } else {
    return onTileToCSpace(onUsableSpace.onTile);
  }
}

function onTileToCSpace(onTile: OnTile): CSpace {
  if (onTile.onTileKind === "blankTile") {
    return 0;
  } else if (onTile.onTileKind === "fishes") {
    return onTile.totalFishes;
  } else {
    return onTile.penguinColor
  }
}
