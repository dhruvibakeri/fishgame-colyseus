"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPenguinPlacementPosn = void 0;
const game_state_functions_1 = require("../states/game-state/game-state-functions");
const game_state_selectors_1 = require("../states/game-state/game-state-selectors");
const game_state_predicates_1 = require("../states/game-state/game-state-predicates");
// ----- USAGE -----
// - getPenguinPlacementPosn is used by a player to place its penguin
//    during the placing stage of the game.
// - The function uses a placement strategy where the penguin whose turn it currenly is
//    is in the given game state, places its penguin at the first available free spot 
//    followning a zig zag pattern that starts at the top left corner.
// GameState -> BoardPosn | IllegalAction
// looks for a valid penguin placement position for the player whose turn it currently is in the
// given state. If the player has already placed all its penguins it returns an 'IllegalAction'.
// If there are no valid placement positions left, it also returns an 'IllegalAction'.
function getPenguinPlacementPosn(state) {
    const board = game_state_selectors_1.GET_GameStateBoard(state);
    const players = game_state_selectors_1.GET_GameStatePlayers(state);
    const penguin = game_state_selectors_1.GET_GameStateNextToPlace(state);
    const numOfPlayers = players.length;
    const penguinsPerPlayer = 6 - numOfPlayers;
    let numOfPenguinsOnThisState = game_state_functions_1.getPenguinPositions(penguin, state).length;
    if (numOfPenguinsOnThisState < penguinsPerPlayer) {
        for (let i = 0; i < board.length; i++) {
            // goes through all even colums (even rows in game board representation)
            for (let j = 0; j < board[i].length; j = j + 2) {
                if (game_state_predicates_1.PRED_isFishSpace(board[i][j])) {
                    return { row: i, col: j };
                }
            }
            // goes through all odd colums (odd rows in game board representation)
            for (let k = 1; k < board[i].length; k = k + 2) {
                if (game_state_predicates_1.PRED_isFishSpace(board[i][k])) {
                    return { row: i, col: k };
                }
            }
        }
        return { kind: "illegalAction" };
    }
    else {
        return { kind: "illegalAction" };
    }
}
exports.getPenguinPlacementPosn = getPenguinPlacementPosn;
//# sourceMappingURL=placement-strategy-game-state.js.map