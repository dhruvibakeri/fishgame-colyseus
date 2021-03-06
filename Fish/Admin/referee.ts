import { Room, Client, nosync } from "colyseus";
import { ex2, state0 } from "../Common/minimax/best-action-game-state";
import { dimToBinBoard } from "../Common/states/binary-state/dimension-to-binary-board";
import { CBoard, CScores, CSpace, CState } from "../Common/states/compact-state/compact-state-data-definition";
import { GET__CBoardFromCState, GET__CScoresFromCState, GET__CStageFromCState } from "../Common/states/compact-state/compact-state-selectors";
import { MAKE_FishesSpace, MAKE_GameState, MAKE_GameStateDone, MAKE_GameStatePlacing, MAKE_GameStatePlaying, MAKE_Player } from "../Common/states/game-state/game-state-constructors";
import { Board, GameState, PenguinColor, Player, Players } from "../Common/states/game-state/game-state-data-definition";
import { ScoreSchema, StateSchema } from "../Common/states/schema-state/schema-state-data-definition";
import { cStateToSchema } from "../Common/states/state-to-state-translators/compact-state-to-schema-state";
import { Schema, ArraySchema, type } from "@colyseus/schema";
import { schemaToCompact } from "../Common/states/state-to-state-translators/schema-state-to-compact-state";
import { cStateToGameState } from "../Common/states/state-to-state-translators/compact-state-to-game-state";
import { GET_GameStateBoard, GET_GameStateKind, GET_GameStateNextToPlace, GET_GameStatePlayers, GET_PlayerColor } from "../Common/states/game-state/game-state-selectors";
import { addFinalScore, getPenguinPositions, moveGameState, placePenguinAtPosn } from "../Common/states/game-state/game-state-functions";
import { Action, isGameOver, isValidAction } from "../Common/game-tree/game-tree-state";
import { stateToCState } from "../Common/states/state-to-state-translators/game-state-to-compact-game-state";
import { BoardPosn } from "../Common/utils/other-data-definitions";
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

export class FishRoom extends Room<StateSchema> {
  maxClients = 4;

  // rows of column dimensions of board
  // when tournament manager is implemented,
  // the referee will receive these from there
  private DEFAULT_ROWS = 4;
  private DEFAULT_COLS = 3;
  private players: ScoreSchema[]
  private colors: PenguinColor[]
  private initBoard: CBoard
  private initCState: CState
  private initState: StateSchema
  private totalTiles: number
  private playerMap: Map<string, PenguinColor>;
  private kickedPlayers: string[]

  constructor() {
    super();
    // list of players for this game (initially empty)
    this.players = new ArraySchema<ScoreSchema>();
    // colors to be assigned to the players
    this.colors = ["red", "black", "brown", "white"]
    // initial board that the referee sets up (no holes)
    this.initBoard = dimToBinBoard(this.DEFAULT_ROWS, this.DEFAULT_COLS)
    // total no. of tiles on the given board
    this.totalTiles = this.DEFAULT_ROWS * this.DEFAULT_COLS
    // state customized by referee by adding random holes and different no. of fish
    // on each tile
    this.initCState = customizeState(["placing", this.initBoard, []], this.totalTiles)
    // converting to schemaState which will be used by Colyseus
    this.initState = cStateToSchema(this.initCState)
    // map of player colors with their client id as key
    this.playerMap = new Map<string, PenguinColor>();
    // list of client ids of players that are kicked out during the game
    this.kickedPlayers = []
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
      let currentGameState: GameState = cStateToGameState(schemaToCompact(this.state))

      // we first check if the game is OVER according to the currentGameState
      if (isGameOver(currentGameState)) {
        let endGameState = addFinalScore(currentGameState)
        // we create a GameState at the "done" stage which contains
        // the final positions and scores of all players
        let newState: GameState = MAKE_GameStateDone("done", GET_GameStateBoard(endGameState), GET_GameStatePlayers(endGameState))
        // we then update our current Colyseus Schema state with this state
        changeState(newState, this.state)
      }

      // if the referee receives a "place" message
      this.onMessage("place", (client, message) => {
        let currentPlayer: Player = GET_GameStateNextToPlace(currentGameState)
        let currentTurn: PenguinColor = GET_PlayerColor(currentPlayer)
        let clientColor: PenguinColor = <PenguinColor>this.playerMap.get(client.sessionId)
        let action: Action = { kind: "place", posn: message, player: currentPlayer }

        // the referee will check if the message has been received from a client
        // whose turn it currently is
        // the referee will also check if the desired placement position is a
        // valid position
        if (clientColor === currentTurn && isValidAction(action, currentGameState)) {
          // if all is valid, referee will place the penguin at that positon
          let newState: GameState = placePenguinAtPosn(message, currentGameState)
          // then update our current Colyseus Schema state with the newState
          changeState(newState, this.state)
        }
        // if the message was sent out-of-turn or if it was invalid,
        // the referee will delete that player from the list of players in the gameState
        // the referee will also remove all of that player's penguins from the board.
        // then update our current Colyseus Schema state with the removed player state
        else {
          this.playerMap.delete(client.sessionId);
          this.players.slice(getIdx(clientColor, this.players), 1)
          let newState: GameState = removePenguin(clientColor, currentGameState)
          changeState(newState, this.state)
          this.kickedPlayers.push(client.sessionId)
        }

      });

      // if the referee receives a "move" message
      this.onMessage("move", (client, message) => {
        let currentPlayer: Player = GET_GameStateNextToPlace(currentGameState)
        let currentTurn: PenguinColor = GET_PlayerColor(currentPlayer)
        let clientColor: PenguinColor = <PenguinColor>this.playerMap.get(client.sessionId)
        let action: Action = { kind: "move", posn: message }

        // the referee will check if the message has been received from a client
        // whose turn it currently is
        // the referee will also check if the desired move is a
        // valid move
        if (clientColor === currentTurn && isValidAction(action, currentGameState)) {
          let newState: GameState = moveGameState(currentGameState, message)
          // then update our current Colyseus Schema state with the newState
          changeState(newState, this.state)
        }
        // if the message was sent out-of-turn or if it was invalid,
        // the referee will delete that player from the list of players in the gameState
        // the referee will also remove all of that player's penguins from the board.
        // then update our current Colyseus Schema state with the removed player state
        else {
          this.playerMap.delete(client.sessionId);
          this.players.slice(getIdx(clientColor, this.players), 1)
          let newState: GameState = removePenguin(clientColor, currentGameState)
          changeState(newState, this.state)
          this.kickedPlayers.push(client.sessionId)
        }
      });
    }
  }

  // everytime a client joins the room, the referee assigns the client
  // an unused penguin color
  // and also adds the client to the list of players for this game
  onJoin(client: Client) {
    let randIdx: number = Math.floor(Math.random() * this.colors.length)
    let clientColor = this.colors[randIdx]
    this.colors.splice(randIdx, 1)
    this.players.push(new ScoreSchema(clientColor, 0))
    this.playerMap.set(client.sessionId, clientColor);
  }

  onLeave(Client) {
  }

  onDispose() {
  }

  onAuth(Client, options, req) {
    return true
  }
}


// CBoard Number -> void
// adds given number of holes at random places in the given game board
export function addRandomHoles(board: CBoard, holeCount: number) : void{
  for (let i = 0; i < holeCount; i++) {
    let randRow = Math.floor(Math.random() * board.length);
    let randCol = Math.floor(Math.random() * board[0].length);
    board[randRow][randCol] = "hole"
  }
}

// CBoard -> void
// adds random number of fish (1-5) in each tile of the given board
export function addRandomFish(board: CBoard) : void {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let randFishNo = Math.floor(Math.random() * 5) + 1;
      board[i][j] = randFishNo
    }
  }
}

// CState Number -> CState
// customizes the given state by adding holes and random number of fishes
export function customizeState(state: CState, totalTiles: number): CState {
  let nboard: CBoard = GET__CBoardFromCState(state)
  addRandomFish(nboard)
  if (totalTiles > 9) {
    const holeCount = Math.floor(Math.random() * (totalTiles - 9))
    addRandomHoles(nboard, holeCount)
  }
  return [GET__CStageFromCState(state), nboard, GET__CScoresFromCState(state)]
}

// PenguinColor ScoreSchema[] -> Number
// gets the index at which the player with the given penguinColor lies 
// in the given list
export function getIdx(col: PenguinColor, list: ScoreSchema[]): number {
  for (let i = 0; i < list.length; i++) {
    if (list[i].penguincolor === col) {
      return i;
    }
  }
  throw console.error("no such penguin in Players");

}

// PenguinColor Players -> Number
// gets the index at which the player with the given penguinColor lies 
// in the given list
export function getIdxForRemoval(col: PenguinColor, list: Players): number {
  for (let i = 0; i < list.length; i++) {
    if (list[i].penguinColor === col) {
      return i;
    }
  }
  throw console.error("no such penguin in Players");
}

// PenguinColor GameState -> GameState
// removes all occurrences of the given player fromt he given GameState
export function removePenguin(player: PenguinColor, state: GameState): GameState {
  let gsPlayers: Players = GET_GameStatePlayers(state)
  let playerIdx: number = getIdxForRemoval(player, gsPlayers)
  let mainPlayer: Player = gsPlayers[playerIdx]
  let penguinPosns: BoardPosn[] = getPenguinPositions(mainPlayer, state)
  let board: Board = GET_GameStateBoard(state)
  for (let i = 0; i < penguinPosns.length; i++) {
    board[penguinPosns[i].row][penguinPosns[i].col] = MAKE_FishesSpace(0)
  }

  if (GET_GameStateKind(state) === "playing") {
    return MAKE_GameStatePlaying("playing", board, GET_GameStateNextToPlace(state), GET_GameStatePlayers(state))
  }
  else {
    return MAKE_GameStatePlacing("placing", board, GET_GameStateNextToPlace(state), GET_GameStatePlayers(state))
  }
}

// GameState StateSchema -> void
// updates the current Colyseus Schema state
export function changeState(state: GameState, ourState: StateSchema): void {
  let schemaState: StateSchema = cStateToSchema(stateToCState(state))
  ourState.board = schemaState.board;
  ourState.gamestage = schemaState.gamestage;
  ourState.players = schemaState.players;
  ourState.rowlen = schemaState.rowlen;

}





