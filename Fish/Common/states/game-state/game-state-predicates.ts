import { OnTile, Space, Tile, TileInfo, UsableSpace } from "./game-state-data-definition";
import { GET_OnTileKind, GET_OnUsableSpace, GET_SpaceKindFromSpace, GET_UsableSpaceKind } from "./game-state-selectors";

export function PRED_isGameState(gs : any) {
    if(typeof gs === "object" && gs !== null) {
          return (gs.hasOwnProperty("gameStateKind")) 
    }
}

export function PRED_isUsableSpace(space : Space) {
    return (GET_SpaceKindFromSpace(space) == "usableSpace")
}

export function PRED_isSpaceTile(space: Space) {
    return GET_UsableSpaceKind(GET_OnUsableSpace(space as UsableSpace)) === "tile"
}

export function PRED_isPenguinSpace(space : Space) {
    if (PRED_isUsableSpace(space)) {
        if(PRED_isSpaceTile(space)) {

            return (GET_OnTileKind(GET_OnUsableSpace(space as UsableSpace) as Tile) === "penguin")
        }
        return false
    }
    else {
        return false
    }
} 

export function PRED_isFishSpace(space : Space) {
    if (PRED_isUsableSpace(space)) {
        if(PRED_isSpaceTile(space)) {

            return (GET_OnTileKind(GET_OnUsableSpace(space as UsableSpace) as Tile) === "fishes")
        }
        return false
    }
    else {
        return false
    }
} 