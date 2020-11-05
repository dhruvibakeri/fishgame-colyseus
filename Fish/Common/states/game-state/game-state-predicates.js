"use strict";
exports.__esModule = true;
exports.PRED_isFishSpace = exports.PRED_isPenguinSpace = exports.PRED_isSpaceTile = exports.PRED_isUsableSpace = exports.PRED_isGameState = void 0;
var game_state_selectors_1 = require("./game-state-selectors");
function PRED_isGameState(gs) {
    if (typeof gs === "object" && gs !== null) {
        return (gs.hasOwnProperty("gameStateKind"));
    }
}
exports.PRED_isGameState = PRED_isGameState;
function PRED_isUsableSpace(space) {
    return (game_state_selectors_1.GET_SpaceKindFromSpace(space) == "usableSpace");
}
exports.PRED_isUsableSpace = PRED_isUsableSpace;
function PRED_isSpaceTile(space) {
    return game_state_selectors_1.GET_UsableSpaceKind(game_state_selectors_1.GET_OnUsableSpace(space)) === "tile";
}
exports.PRED_isSpaceTile = PRED_isSpaceTile;
function PRED_isPenguinSpace(space) {
    if (PRED_isUsableSpace(space)) {
        if (PRED_isSpaceTile(space)) {
            return (game_state_selectors_1.GET_OnTileKind(game_state_selectors_1.GET_OnUsableSpace(space)) === "penguin");
        }
        return false;
    }
    else {
        return false;
    }
}
exports.PRED_isPenguinSpace = PRED_isPenguinSpace;
function PRED_isFishSpace(space) {
    if (PRED_isUsableSpace(space)) {
        if (PRED_isSpaceTile(space)) {
            return (game_state_selectors_1.GET_OnTileKind(game_state_selectors_1.GET_OnUsableSpace(space)) === "fishes");
        }
        return false;
    }
    else {
        return false;
    }
}
exports.PRED_isFishSpace = PRED_isFishSpace;
