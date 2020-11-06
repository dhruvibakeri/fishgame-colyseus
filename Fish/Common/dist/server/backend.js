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
/**
 * For our Fish Game we are using a ,multiplayer gaming framework for Typescript called 'COLYSEUS' : https://colyseus.io/
 * A "room" in Colyseus will represent the referee in our Fish Game.
 *
 * NOTE : in our class FishRoom we are keeping track of players that get kicked out.
 *        when the game is over the referee can report the kickedPlayers list
 *        and also the final GameState. This way the tournament manager will
 *        have access to the outcome of the game and the failing and cheating players.
 */
class FishRoom extends colyseus_1.Room {
    constructor() {
        super();
        this.maxClients = 4;
        // rows of column dimensions of board
        // when tournament manager is implemented,
        // the referee will receive these from there
        this.DEFAULT_ROWS = 4;
        this.DEFAULT_COLS = 3;
        // list of players for this game (initially empty)
        this.players = new schema_1.ArraySchema();
        // colors to be assigned to the players
        this.colors = ["red", "black", "brown", "white"];
        // initial board that the referee sets up (no holes)
        this.initBoard = dimension_to_binary_board_1.dimToBinBoard(this.DEFAULT_ROWS, this.DEFAULT_COLS);
        // total no. of tiles on the given board
        this.totalTiles = this.DEFAULT_ROWS * this.DEFAULT_COLS;
        // state customized by referee by adding random holes and different no. of fish
        // on each tile
        this.initCState = customizeState(["placing", this.initBoard, []], this.totalTiles);
        // converting to schemaState which will be used by Colyseus
        this.initState = compact_state_to_schema_state_1.cStateToSchema(this.initCState);
        // map of player colors with their client id as key
        this.playerMap = new Map();
        // list of client ids of players that are kicked out during the game
        this.kickedPlayers = [];
    }
    onCreate(options) {
        // sets the state of the game room as the customised initial state
        // this ensures that all client who join first see this state
        // (if they join before the game starts)
        this.setState(this.initState);
        // this updates the list of players as clients join the room.
        this.state.players = this.players;
        // if there are 2 or more clients that have joined,
        // the game begins
        if (this.clients.length > 1) {
            // we will convert from the Colyseus Schema state representation to our GameState representation
            // so we can use our GameState interface to perform referee functions.
            let currentGameState = compact_state_to_game_state_1.cStateToGameState(schema_state_to_compact_state_1.schemaToCompact(this.state));
            // we first check if the game is OVER according to the currentGameState
            if (game_tree_state_1.isGameOver(currentGameState)) {
                let endGameState = game_state_functions_1.addFinalScore(currentGameState);
                // we create a GameState at the "done" stage which contains
                // the final positions and scores of all players
                let newState = game_state_constructors_1.MAKE_GameStateDone("done", game_state_selectors_1.GET_GameStateBoard(endGameState), game_state_selectors_1.GET_GameStatePlayers(endGameState));
                // we then update our current Colyseus Schema state with this state
                changeState(newState, this.state);
            }
            // if the referee receives a "place" message
            this.onMessage("place", (client, message) => {
                let currentPlayer = game_state_selectors_1.GET_GameStateNextToPlace(currentGameState);
                let currentTurn = game_state_selectors_1.GET_PlayerColor(currentPlayer);
                let clientColor = this.playerMap.get(client.sessionId);
                let action = { kind: "place", posn: message, player: currentPlayer };
                // the referee will check if the message has been received from a client
                // whose turn it currently is
                // the referee will also check if the desired placement position is a
                // valid position
                if (clientColor === currentTurn && game_tree_state_1.isValidAction(action, currentGameState)) {
                    // if all is valid, referee will place the penguin at that positon
                    let newState = game_state_functions_1.placePenguinAtPosn(message, currentGameState);
                    // then update our current Colyseus Schema state with the newState
                    changeState(newState, this.state);
                }
                // if the message was sent out-of-turn or if it was invalid,
                // the referee will delete that player from the list of players in the gameState
                // the referee will also remove all of that player's penguins from the board.
                // then update our current Colyseus Schema state with the removed player state
                else {
                    this.playerMap.delete(client.sessionId);
                    this.players.slice(getIdx(clientColor, this.players), 1);
                    let newState = removePenguin(clientColor, currentGameState);
                    changeState(newState, this.state);
                    this.kickedPlayers.push(client.sessionId);
                }
            });
            // if the referee receives a "move" message
            this.onMessage("move", (client, message) => {
                let currentPlayer = game_state_selectors_1.GET_GameStateNextToPlace(currentGameState);
                let currentTurn = game_state_selectors_1.GET_PlayerColor(currentPlayer);
                let clientColor = this.playerMap.get(client.sessionId);
                let action = { kind: "move", posn: message };
                // the referee will check if the message has been received from a client
                // whose turn it currently is
                // the referee will also check if the desired move is a
                // valid move
                if (clientColor === currentTurn && game_tree_state_1.isValidAction(action, currentGameState)) {
                    let newState = game_state_functions_1.moveGameState(currentGameState, message);
                    // then update our current Colyseus Schema state with the newState
                    changeState(newState, this.state);
                }
                // if the message was sent out-of-turn or if it was invalid,
                // the referee will delete that player from the list of players in the gameState
                // the referee will also remove all of that player's penguins from the board.
                // then update our current Colyseus Schema state with the removed player state
                else {
                    this.playerMap.delete(client.sessionId);
                    this.players.slice(getIdx(clientColor, this.players), 1);
                    let newState = removePenguin(clientColor, currentGameState);
                    changeState(newState, this.state);
                    this.kickedPlayers.push(client.sessionId);
                }
            });
        }
    }
    // everytime a client joins the room, the referee assigns the client
    // an unused penguin color
    // and also adds the client to the list of players for this game
    onJoin(client) {
        let randIdx = Math.floor(Math.random() * this.colors.length);
        let clientColor = this.colors[randIdx];
        this.colors.splice(randIdx, 1);
        this.players.push(new schema_state_data_definition_1.ScoreSchema(clientColor, 0));
        this.playerMap.set(client.sessionId, clientColor);
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
// CBoard Number -> void
// adds given number of holes at random places in the given game board
function addRandomHoles(board, holeCount) {
    for (let i = 0; i < holeCount; i++) {
        let randRow = Math.floor(Math.random() * board.length);
        let randCol = Math.floor(Math.random() * board[0].length);
        board[randRow][randCol] = "hole";
    }
}
exports.addRandomHoles = addRandomHoles;
// CBoard -> void
// adds random number of fish (1-5) in each tile of the given board
function addRandomFish(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let randFishNo = Math.floor(Math.random() * 5) + 1;
            board[i][j] = randFishNo;
        }
    }
}
exports.addRandomFish = addRandomFish;
// CState Number -> CState
// customizes the given state by adding holes and random number of fishes
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
// PenguinColor ScoreSchema[] -> Number
// gets the index at which the player with the given penguinColor lies 
// in the given list
function getIdx(col, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].penguincolor === col) {
            return i;
        }
    }
    throw console.error("no such penguin in Players");
}
exports.getIdx = getIdx;
// PenguinColor Players -> Number
// gets the index at which the player with the given penguinColor lies 
// in the given list
function getIdxForRemoval(col, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].penguinColor === col) {
            return i;
        }
    }
    throw console.error("no such penguin in Players");
}
exports.getIdxForRemoval = getIdxForRemoval;
// PenguinColor GameState -> GameState
// removes all occurrences of the given player fromt he given GameState
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
// GameState StateSchema -> void
// updates the current Colyseus Schema state
function changeState(state, ourState) {
    let schemaState = compact_state_to_schema_state_1.cStateToSchema(game_state_to_compact_game_state_1.stateToCState(state));
    ourState.board = schemaState.board;
    ourState.gamestage = schemaState.gamestage;
    ourState.players = schemaState.players;
    ourState.rowlen = schemaState.rowlen;
}
exports.changeState = changeState;
//# sourceMappingURL=backend.js.map