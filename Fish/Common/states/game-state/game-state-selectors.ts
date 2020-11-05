import { Board, Fishes, GameState, GameStateDone, GameStatePlacing, GameStatePlaying, OnTile, OnUsableSpace, Penguin, PenguinColor, Player, Players, PlayerStatus, Space, Tile, TileInfo, UsableSpace } from "./game-state-data-definition";

// state selectors 
export function GET_GameStateKind(gs: GameState): string {
    return gs.gameStateKind;
}

export function GET_GameStatePlayers(gs: GameState): Players {
    return gs.players
}

export function GET_GameStateBoard(gs: GameState): Board {
    if (GET_GameStateKind(gs) != "joining") {
        return (gs as GameStatePlacing | GameStatePlaying | GameStateDone).board
    }
    else {
        throw console.error("players are still joining, no board yet");

    }
}

export function GET_GameStateNextToPlace(gameState: GameState): Player {
    if (gameState.gameStateKind === "done") {
        throw new Error("done stage does not have a next to place");
    } else if (gameState.gameStateKind === "joining") {
        throw new Error("joining stage does not have a next to place");
    } else if (gameState.gameStateKind === "placing") {
        return gameState.nextToPlace
    } else if (gameState.gameStateKind === "playing") {
        return gameState.nextToPlace
    } else {
        throw Error("Not a valid game state")
    }
}

// board selectors

export function GET_SpaceKindFromSpace(space: Space): string {
    return space.spaceKind
}

export function GET_OnUsableSpace(us: UsableSpace): OnUsableSpace {
    return us.onUsableSpace
}

export function GET_UsableSpaceKind(usableSpace: OnUsableSpace): string {
    return usableSpace.onUsableSpaceKind;
}

export function GET_TileInfo(tile: Tile): TileInfo {
    return tile.tileInfo
}

export function GET_OnTile(tile: Tile): OnTile {
    return tile.onTile
}

export function GET_TileSize(tile: Tile): number {
    return tile.tileInfo.size
}

export function GET_TileMaxElements(tile: Tile): number {
    return tile.tileInfo.maxElements
}

export function GET_OnTileKind(tile: Tile): string {
    return tile.onTile.onTileKind
}

export function GET_totalFishes(onTile: Fishes): number {
    return onTile.totalFishes
}

export function GET_totalFishesFromPenguin(onTile: Penguin): number {
    return onTile.totalFishes
}

export function GET_penguinColor(onTile: Penguin): string {
    return onTile.penguinColor
}

// player selectors

export function GET_PlayerColor(player: Player): PenguinColor {
    return player.penguinColor
}

export function GET_PlayerStatus(player: Player): PlayerStatus {
    return player.playerStatus
}

export function GET_PlayerScore(player: Player): number {
    return player.score
}

