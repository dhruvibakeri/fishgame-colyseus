import { Room, Client, nosync } from "colyseus";
import { dimToBinBoard } from "../states/binary-state/dimension-to-binary-board";
import { CBoard, CScores, CSpace, CState } from "../states/compact-state/compact-state-data-definition";
import { GET__CBoardFromCState, GET__CScoresFromCState, GET__CStageFromCState } from "../states/compact-state/compact-state-selectors";
import { MAKE_FishesSpace, MAKE_GameState, MAKE_GameStateDone, MAKE_GameStatePlacing, MAKE_GameStatePlaying, MAKE_Player } from "../states/game-state/game-state-constructors";
import { Board, GameState, PenguinColor, Player, Players } from "../states/game-state/game-state-data-definition";
import { ScoreSchema, StateSchema } from "../states/schema-state/schema-state-data-definition";
import { cStateToSchema } from "../states/state-to-state-translators/compact-state-to-schema-state";
import { Schema, ArraySchema, type } from "@colyseus/schema";
import { schemaToCompact } from "../states/state-to-state-translators/schema-state-to-compact-state";
import { cStateToGameState } from "../states/state-to-state-translators/compact-state-to-game-state";
import { GET_GameStateBoard, GET_GameStateKind, GET_GameStateNextToPlace, GET_GameStatePlayers, GET_PlayerColor } from "../states/game-state/game-state-selectors";
import { addFinalScore, getPenguinPositions, moveGameState, placePenguinAtPosn } from "../states/game-state/game-state-functions";
import { Action, isGameOver, isValidAction } from "../game-tree/game-tree-state";
import { stateToCState } from "../states/state-to-state-translators/game-state-to-compact-game-state";
import { BoardPosn } from "../utils/other-data-definitions";
// import { all_places } from "../../Player/strategy";
// import { stateList } from "../states/compact-state/compact-state-examples";
// import { cStateToSchema } from "../states/state-to-state-translators/compact-state-to-schema-state";

export class FishRoom extends Room<StateSchema> {
  maxClients = 4;

  private DEFAULT_ROWS = 4;
  private DEFAULT_COLS = 3;
  private players: ScoreSchema[]
  private colors: PenguinColor[]
  private initBoard: CBoard
  private initCState: CState
  private initState: StateSchema
  private totalTiles: number
  private playerMap: Map<string, PenguinColor>;

  constructor() {
    super();
    this.players = new ArraySchema<ScoreSchema>();
    this.colors = ["red", "black", "brown", "white"]
    this.initBoard = dimToBinBoard(this.DEFAULT_ROWS, this.DEFAULT_COLS)
    this.totalTiles = this.DEFAULT_ROWS * this.DEFAULT_COLS
    this.initCState = customizeState(["placing", this.initBoard, []], this.totalTiles)
    this.initState = cStateToSchema(this.initCState)
    this.playerMap = new Map<string, PenguinColor>();
  }

  onCreate(options) {

    this.setState(this.initState);
    this.state.players = this.players;

    if (this.clients.length > 0) {
      let currentGameState: GameState = cStateToGameState(schemaToCompact(this.state))


      if (isGameOver(currentGameState)) {
        let endGameState = addFinalScore(currentGameState)
        let newState: GameState = MAKE_GameStateDone("done", GET_GameStateBoard(endGameState), GET_GameStatePlayers(endGameState))
        changeState(newState, this.state)
      }

      this.onMessage("place", (client, message) => {
        let currentPlayer: Player = GET_GameStateNextToPlace(currentGameState)
        let currentTurn: PenguinColor = GET_PlayerColor(currentPlayer)
        let clientColor: PenguinColor = this.playerMap.get(client.sessionId)
        let action: Action = { kind: "place", posn: message, player: currentPlayer }

        if (clientColor === currentTurn && isValidAction(action, currentGameState)) {
          let newState: GameState = placePenguinAtPosn(message, currentGameState)
          changeState(newState, this.state)
        }
        else {
          this.playerMap.delete(client.sessionId);
          this.players.slice(getIdx(clientColor, this.players), 1)
          let newState: GameState = removePenguin(clientColor, currentGameState)
          changeState(newState, this.state)

        }

      });

      this.onMessage("move", (client, message) => {
        let currentPlayer: Player = GET_GameStateNextToPlace(currentGameState)
        let currentTurn: PenguinColor = GET_PlayerColor(currentPlayer)
        let clientColor: PenguinColor = this.playerMap.get(client.sessionId)
        let action: Action = { kind: "move", posn: message }

        if (clientColor === currentTurn && isValidAction(action, currentGameState)) {
          let newState: GameState = moveGameState(currentGameState, message)
          changeState(newState, this.state)
        }
        else {
          this.playerMap.delete(client.sessionId);
          this.players.slice(getIdx(clientColor, this.players), 1)
          let newState: GameState = removePenguin(clientColor, currentGameState)
          changeState(newState, this.state)

        }
      });
    }
  }

  onJoin(client: Client) {

    let randIdx: number = Math.floor(Math.random() * this.colors.length)
    let clientColor = this.colors[randIdx]
    this.colors.splice(randIdx, 1)
    this.players.push(new ScoreSchema(clientColor, 0))
    this.playerMap.set(client.sessionId, clientColor);
    console.log("PLAYER JOINED")
    console.log(this.players)
  }

  onLeave(Client) {
  }

  onDispose() {
  }

  onAuth(Client, options, req) {
    return true
  }
}


function getInitState(state: StateSchema): StateSchema {
  return state
}

export function addRandomHoles(board: CBoard, holeCount: number) {
  for (let i = 0; i < holeCount; i++) {
    let randRow = Math.floor(Math.random() * board.length);
    let randCol = Math.floor(Math.random() * board[0].length);
    board[randRow][randCol] = "hole"
  }
}

export function addRandomFish(board: CBoard) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let randFishNo = Math.floor(Math.random() * 5) + 1;
      board[i][j] = randFishNo
    }
  }
}

export function customizeState(state: CState, totalTiles: number): CState {
  let nboard: CBoard = GET__CBoardFromCState(state)
  addRandomFish(nboard)
  if (totalTiles > 9) {
    const holeCount = Math.floor(Math.random() * (totalTiles - 9))
    addRandomHoles(nboard, holeCount)
  }
  return [GET__CStageFromCState(state), nboard, GET__CScoresFromCState(state)]
}

export function getIdx(col: PenguinColor, list: ScoreSchema[]): number {
  for (let i = 0; i < list.length; i++) {
    if (list[i].penguincolor === col) {
      return i;
    }
  }
  throw console.error("no such penguin in Players");

}

export function getIdxForRemoval(col: PenguinColor, list: Players): number {
  for (let i = 0; i < list.length; i++) {
    if (list[i].penguinColor === col) {
      return i;
    }
  }
  throw console.error("no such penguin in Players");
}

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

export function changeState(state: GameState, ourState: StateSchema): void {
  let schemaState: StateSchema = cStateToSchema(stateToCState(state))
  ourState.board = schemaState.board;
  ourState.gamestage = schemaState.gamestage;
  ourState.players = schemaState.players;
  ourState.rowlen = schemaState.rowlen;

}
