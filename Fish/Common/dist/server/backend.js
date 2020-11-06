"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeState = exports.removePenguin = exports.getIdxForRemoval = exports.getIdx = exports.customizeState = exports.addRandomFish = exports.addRandomHoles = exports.FishRoom = void 0;
const colyseus_1 = require("colyseus");
const dimension_to_binary_board_1 = require("../states/binary-state/dimension-to-binary-board");
const compact_state_selectors_1 = require("../states/compact-state/compact-state-selectors");
const game_state_constructors_1 = require("../states/game-state/game-state-constructors");
const schema_state_data_definition_1 = require("../states/schema-state/schema-state-data-definition");
const compact_state_to_schema_state_1 = require("../states/state-to-state-translators/compact-state-to-schema-state");
const schema_1 = require("@colyseus/schema");
const schema_state_to_compact_state_1 = require("../states/state-to-state-translators/schema-state-to-compact-state");
const compact_state_to_game_state_1 = require("../states/state-to-state-translators/compact-state-to-game-state");
const game_state_selectors_1 = require("../states/game-state/game-state-selectors");
const game_state_functions_1 = require("../states/game-state/game-state-functions");
const game_tree_state_1 = require("../game-tree/game-tree-state");
const game_state_to_compact_game_state_1 = require("../states/state-to-state-translators/game-state-to-compact-game-state");
// import { all_places } from "../../Player/strategy";
// import { stateList } from "../states/compact-state/compact-state-examples";
// import { cStateToSchema } from "../states/state-to-state-translators/compact-state-to-schema-state";
class FishRoom extends colyseus_1.Room {
    constructor() {
        super();
        this.maxClients = 4;
        this.DEFAULT_ROWS = 4;
        this.DEFAULT_COLS = 3;
        this.players = new schema_1.ArraySchema();
        this.colors = ["red", "black", "brown", "white"];
        this.initBoard = dimension_to_binary_board_1.dimToBinBoard(this.DEFAULT_ROWS, this.DEFAULT_COLS);
        this.totalTiles = this.DEFAULT_ROWS * this.DEFAULT_COLS;
        this.initCState = customizeState(["placing", this.initBoard, []], this.totalTiles);
        this.initState = compact_state_to_schema_state_1.cStateToSchema(this.initCState);
        this.playerMap = new Map();
    }
    onCreate(options) {
        this.setState(this.initState);
        this.state.players = this.players;
        if (this.clients.length > 0) {
            let currentGameState = compact_state_to_game_state_1.cStateToGameState(schema_state_to_compact_state_1.schemaToCompact(this.state));
            if (game_tree_state_1.isGameOver(currentGameState)) {
                let endGameState = game_state_functions_1.addFinalScore(currentGameState);
                let newState = game_state_constructors_1.MAKE_GameStateDone("done", game_state_selectors_1.GET_GameStateBoard(endGameState), game_state_selectors_1.GET_GameStatePlayers(endGameState));
                changeState(newState, this.state);
            }
            this.onMessage("place", (client, message) => {
                let currentPlayer = game_state_selectors_1.GET_GameStateNextToPlace(currentGameState);
                let currentTurn = game_state_selectors_1.GET_PlayerColor(currentPlayer);
                let clientColor = this.playerMap.get(client.sessionId);
                let action = { kind: "place", posn: message, player: currentPlayer };
                if (clientColor === currentTurn && game_tree_state_1.isValidAction(action, currentGameState)) {
                    let newState = game_state_functions_1.placePenguinAtPosn(message, currentGameState);
                    changeState(newState, this.state);
                }
                else {
                    this.playerMap.delete(client.sessionId);
                    this.players.slice(getIdx(clientColor, this.players), 1);
                    let newState = removePenguin(clientColor, currentGameState);
                    changeState(newState, this.state);
                }
            });
            this.onMessage("move", (client, message) => {
                let currentPlayer = game_state_selectors_1.GET_GameStateNextToPlace(currentGameState);
                let currentTurn = game_state_selectors_1.GET_PlayerColor(currentPlayer);
                let clientColor = this.playerMap.get(client.sessionId);
                let action = { kind: "move", posn: message };
                if (clientColor === currentTurn && game_tree_state_1.isValidAction(action, currentGameState)) {
                    let newState = game_state_functions_1.moveGameState(currentGameState, message);
                    changeState(newState, this.state);
                }
                else {
                    this.playerMap.delete(client.sessionId);
                    this.players.slice(getIdx(clientColor, this.players), 1);
                    let newState = removePenguin(clientColor, currentGameState);
                    changeState(newState, this.state);
                }
            });
        }
    }
    onJoin(client) {
        let randIdx = Math.floor(Math.random() * this.colors.length);
        let clientColor = this.colors[randIdx];
        this.colors.splice(randIdx, 1);
        this.players.push(new schema_state_data_definition_1.ScoreSchema(clientColor, 0));
        this.playerMap.set(client.sessionId, clientColor);
        console.log("PLAYER JOINED");
        console.log(this.players);
    }
    onLeave(Client) {
    }
    onDispose() {
    }
    onAuth(Client, options, req) {
        return true;
    }
}
exports.FishRoom = FishRoom;
function getInitState(state) {
    return state;
}
function addRandomHoles(board, holeCount) {
    for (let i = 0; i < holeCount; i++) {
        let randRow = Math.floor(Math.random() * board.length);
        let randCol = Math.floor(Math.random() * board[0].length);
        board[randRow][randCol] = "hole";
    }
}
exports.addRandomHoles = addRandomHoles;
function addRandomFish(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let randFishNo = Math.floor(Math.random() * 5) + 1;
            board[i][j] = randFishNo;
        }
    }
}
exports.addRandomFish = addRandomFish;
function customizeState(state, totalTiles) {
    let nboard = compact_state_selectors_1.GET__CBoardFromCState(state);
    addRandomFish(nboard);
    if (totalTiles > 9) {
        const holeCount = Math.floor(Math.random() * (totalTiles - 9));
        addRandomHoles(nboard, holeCount);
    }
    return [compact_state_selectors_1.GET__CStageFromCState(state), nboard, compact_state_selectors_1.GET__CScoresFromCState(state)];
}
exports.customizeState = customizeState;
function getIdx(col, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].penguincolor === col) {
            return i;
        }
    }
    throw console.error("no such penguin in Players");
}
exports.getIdx = getIdx;
function getIdxForRemoval(col, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].penguinColor === col) {
            return i;
        }
    }
    throw console.error("no such penguin in Players");
}
exports.getIdxForRemoval = getIdxForRemoval;
function removePenguin(player, state) {
    let gsPlayers = game_state_selectors_1.GET_GameStatePlayers(state);
    let playerIdx = getIdxForRemoval(player, gsPlayers);
    let mainPlayer = gsPlayers[playerIdx];
    let penguinPosns = game_state_functions_1.getPenguinPositions(mainPlayer, state);
    let board = game_state_selectors_1.GET_GameStateBoard(state);
    for (let i = 0; i < penguinPosns.length; i++) {
        board[penguinPosns[i].row][penguinPosns[i].col] = game_state_constructors_1.MAKE_FishesSpace(0);
    }
    if (game_state_selectors_1.GET_GameStateKind(state) === "playing") {
        return game_state_constructors_1.MAKE_GameStatePlaying("playing", board, game_state_selectors_1.GET_GameStateNextToPlace(state), game_state_selectors_1.GET_GameStatePlayers(state));
    }
    else {
        return game_state_constructors_1.MAKE_GameStatePlacing("placing", board, game_state_selectors_1.GET_GameStateNextToPlace(state), game_state_selectors_1.GET_GameStatePlayers(state));
    }
}
exports.removePenguin = removePenguin;
function changeState(state, ourState) {
    let schemaState = compact_state_to_schema_state_1.cStateToSchema(game_state_to_compact_game_state_1.stateToCState(state));
    ourState.board = schemaState.board;
    ourState.gamestage = schemaState.gamestage;
    ourState.players = schemaState.players;
    ourState.rowlen = schemaState.rowlen;
}
exports.changeState = changeState;
//# sourceMappingURL=backend.js.map