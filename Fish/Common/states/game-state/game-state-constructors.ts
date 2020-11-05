import { Board, GameState, GameStateDone, GameStateJoining, GameStatePlacing, GameStatePlaying, PenguinColor, Player, Players, PlayerStatus, Space } from "./game-state-data-definition";

export function MAKE_GameStatePlaying(kind : string, board : Board, nextToMove : Player, players : Players) : GameStatePlaying {
    return {gameStateKind : "playing", board : board, nextToPlace : nextToMove, players : players}
}

export function MAKE_GameStatePlacing(kind : string, board : Board, nextToMove : Player, players : Players) : GameStatePlacing {
    return {gameStateKind : "placing", board : board, nextToPlace : nextToMove, players : players}
}

export function MAKE_GameStateJoining(kind : string, players : Players) : GameStateJoining {
    return {gameStateKind : "joining", players : players}
}

export function MAKE_GameStateDone(kind : string, board : Board, players : Players) : GameStateDone {
    return {gameStateKind : "done", board : board, players : players}
}

export function MAKE_GameState(gameState : GameStateJoining | GameStatePlacing | GameStatePlaying | GameStateDone) : GameState {
    if (gameState.gameStateKind === "done") {
        return MAKE_GameStateDone(gameState.gameStateKind, gameState.board, gameState.players)
      } else if (gameState.gameStateKind === "joining") {
        return MAKE_GameStateJoining(gameState.gameStateKind, gameState.players)
      } else if (gameState.gameStateKind === "placing") { 
        return MAKE_GameStatePlacing(gameState.gameStateKind, gameState.board, gameState.nextToPlace, gameState.players)
      } else if (gameState.gameStateKind === "playing") {
        return MAKE_GameStatePlaying(gameState.gameStateKind, gameState.board, gameState.nextToPlace, gameState.players)
      }
      throw console.error("not a valid gameState");
      
}

export function MAKE_Player(color: PenguinColor, score : number, status : PlayerStatus) :Player {
    return {penguinColor : color, score : score, playerStatus : status}
}

export function MAKE_PenguinSpace(color : PenguinColor, fishes : number) : Space{
    return { spaceKind: "usableSpace", onUsableSpace: { onUsableSpaceKind: "tile", tileInfo: { size: 55, maxElements: 1 }, onTile: { onTileKind: "penguin", penguinColor: color , totalFishes: fishes} } };
} 

export function MAKE_HoleSpace() : Space{
    return { spaceKind: "usableSpace", onUsableSpace: { onUsableSpaceKind: "hole"} };
} 

export function MAKE_FishesSpace(fishes : number) : Space{
    return { spaceKind: "usableSpace", onUsableSpace: { onUsableSpaceKind: "tile", tileInfo: { size: 55, maxElements: 5 }, onTile: { onTileKind: "fishes", totalFishes: fishes } } };
} 
