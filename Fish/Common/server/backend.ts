import { Room, Client } from "colyseus";
import {
  Board,
  Color,
  currentPlayer,
  getWinners,
  isGameOver,
  isPenguinAtPosn,
  isUnreachablePosn,
  moveAvatar,
  movesLeft,
  placeAvatar,
  Posn,
  skipMove,
  State,
  validMovePosns,
} from "../../../common";
import { ArraySchema } from "@colyseus/schema";
import { newStateToNewSchema } from "../new-state/new-state-to-new-schema";
import { schemaToNewState } from "../new-state/new-schema-to-new-state";
import { ScoreSchema, StateSchema } from "../new-state/new-schema-state";

export class FishRoom extends Room<StateSchema> {
  maxClients = 2;

  private players: ScoreSchema[];
  private colors: Color[];
  private initBoard: Board;
  private initNewState: State;
  private initState: StateSchema;
  private playerMap: Map<string, Color>;

  constructor() {
    super();
    this.players = new ArraySchema<ScoreSchema>();
    this.colors = ["red", "black", "brown", "white"];
    this.initBoard = createBoard(6, 5, Math.floor(Math.random() * 10));
    this.initNewState = {
      stage: "placing",
      board: this.initBoard,
      players: [],
    };
    this.initState = newStateToNewSchema(this.initNewState);
    this.playerMap = new Map<string, Color>();
  }

  onCreate(options) {
    //setting intial state
    this.setState(this.initState);

    //handling place messages from client
    this.onMessage("place", (client, message) => {
      let currentGameState: State = schemaToNewState(this.state);
      let placementPosn: Posn = [message.row, message.col];

      if (this.players.length > 1) {
        let currentTurn: Color = currentPlayer(currentGameState).color as Color;
        let clientColor: Color = <Color>this.playerMap.get(client.sessionId);
        if (
          currentGameState.stage === "placing" &&
          clientColor === currentTurn &&
          !isUnreachablePosn(currentGameState, placementPosn)
        ) {
          let newState: State = placeAvatar(placementPosn, currentGameState);
          if (allPenguinsPlaced(newState)) {
            newState.stage = "playing";
          }
          changeState(newState, this.state);
          broadcastUpdate(this, clientColor, " placed it's \npenguin");
        } else {
          if (clientColor !== currentTurn) {
            broadcastUpdateAndRender(
              this,
              this.state,
              ": " + clientColor + " it is not   \nyour turn to place"
            );
          } else if (isUnreachablePosn(currentGameState, placementPosn)) {
            broadcastUpdateAndRender(
              this,
              this.state,
              ": " + clientColor + ", that is an   \ninvalid tile. Try again."
            );
          }
        }
      }
    });

    // handling move messages from client
    this.onMessage("move", (client, message) => {
      let currentGameState: State = schemaToNewState(this.state);
      let from: Posn = [message[0].row, message[0].col];
      let to: Posn = [message[1].row, message[1].col];

      if (this.players.length > 1) {
        let currentTurn: Color = currentPlayer(currentGameState).color as Color;
        let clientColor: Color = <Color>this.playerMap.get(client.sessionId);
        if (
          isValidMovementTurn(
            from,
            to,
            currentGameState,
            clientColor,
            currentTurn
          )
        ) {
          let newState: State = moveAvatar(from, to, currentGameState);
          broadcastUpdate(this, clientColor, " made a move");
          if (!canKeepPlaying(newState)) {
            let skippedPlayer = currentPlayer(newState).color;
            newState = skipMove(newState);
            broadcastUpdateAndRender(
              this,
              this.state,
              ": " + skippedPlayer + " has no   \nmoves left"
            );
          }
          changeState(newState, this.state);
          if (isGameOver(newState)) {
            this.broadcast(
              "update",
              "GAME OVER    \n" + getWinners(newState)[0].color + " WON!"
            );
            this.broadcast("game over", "bye");
          }
        } else {
          if (clientColor !== currentTurn) {
            broadcastUpdateAndRender(
              this,
              this.state,
              ": " + clientColor + " it is not   \nyour turn to move"
            );
          } else if (
            !isValidMove(from, to, currentGameState) ||
            !isPenguinAtPosn(currentGameState, from) ||
            !isPlayersPenguin(currentGameState, from)
          ) {
            broadcastUpdateAndRender(
              this,
              this.state,
              ": " + clientColor + ", that is an   \ninvalid move. Try again."
            );
          }
        }
      }
    });
  }

  // setting up a new player with a penguin color
  onJoin(client: Client) {
    let randIdx: number = Math.floor(Math.random() * this.colors.length);
    let clientColor = this.colors[randIdx];
    this.colors.splice(randIdx, 1);
    this.players.push(new ScoreSchema(clientColor as string, 0, []));
    this.playerMap.set(client.sessionId, clientColor);
    this.state.players = this.players;
    broadcastUpdateAndRender(
      this,
      this.state,
      ": " + clientColor + " has joined    \nthe game"
    );
    if (this.players.length === 1) {
      broadcastUpdateAndRender(this, this.state, ": waiting .......");
    } else if (this.players.length === 2) {
      broadcastUpdateAndRender(
        this,
        this.state,
        ": you can start the   \ngame"
      );
    }
  }

  onAuth(Client, options, req) {
    return true;
  }
}

/** ----------------------------------------------------- helper functions -------------------------------------------------------- */
// checks whether the current player have moves left
const canKeepPlaying = (newState: State): boolean => {
  let moves: Posn[] = currentPlayer(newState).places.filter((p) =>
    movesLeft(newState, p)
  );
  return moves.length > 0;
};

// gets the index at which the player with the given penguinColor lies
// in the given list
export const getIdx = (col: Color, list: ScoreSchema[]): number => {
  let res = 0;
  let i: number = 0;
  list.forEach((element) => {
    if (element.penguincolor === col) {
      res = i;
    }
    i = i + 1;
  });
  return res;
};

// updates the colyseus state with our game state
export const changeState = (state: State, ourState: StateSchema): void => {
  state.players.forEach((p) => {});
  let schemaState: StateSchema = newStateToNewSchema(state);
  ourState.board = schemaState.board;
  ourState.gamestage = schemaState.gamestage;
  ourState.players = schemaState.players;
  ourState.rowlen = schemaState.rowlen;
};

// checks whether all the players' penguins have been placed
export const allPenguinsPlaced = (state: State): boolean => {
  let num: number = 0;
  state.players.forEach((p) => (num += p.places.length));
  let noOfPlayers: number = state.players.length;
  let noOfPenguinsOnBoard: number = num;
  let noOfPenguinsAllowed: number = (6 - noOfPlayers) * noOfPlayers;
  return noOfPenguinsOnBoard === noOfPenguinsAllowed;
};

// checks if given move is a valid turn
const isValidMovementTurn = (
  from: Posn,
  to: Posn,
  currentGameState: State,
  clientColor: Color,
  currentTurn: Color
): boolean => {
  return (
    currentGameState.stage === "playing" &&
    clientColor === currentTurn &&
    isValidMove(from, to, currentGameState) &&
    isPenguinAtPosn(currentGameState, from) &&
    isPlayersPenguin(currentGameState, from)
  );
};

// checks if given move is valid
const isValidMove = (from: Posn, to: Posn, state: State): boolean => {
  let validPosns: Posn[] = validMovePosns(state, from);
  let res = validPosns.filter((posn) => {
    return posn[0] === to[0] && posn[1] === to[1];
  });
  return res.length > 0;
};

// checks if the given from postition belongs to the current player's penguin
const isPlayersPenguin = (state: State, from: Posn): boolean => {
  let curPlaces: Posn[] = currentPlayer(state).places;
  let res = curPlaces.filter((posn) => {
    return posn[0] === from[0] && posn[1] === from[1];
  });
  return res.length > 0;
};

// creates a Board according to the given specs
const createBoard = (rows: number, cols: number, holes: number): Board => {
  var result: number[][] = [];
  for (var i = 0; i < rows; i++) {
    result[i] = [];
    for (var j = 0; j < cols; j++) {
      result[i][j] = Math.floor(Math.random() * 5) + 1;
    }
  }
  for (let i = 0; i < holes; i++) {
    result[Math.floor(Math.random() * rows)][
      Math.floor(Math.random() * cols)
    ] = -1;
  }
  return result;
};

// broadcasts the given message to all clients
const broadcastUpdate = (
  room: Room,
  clientColor: Color,
  text: string
): void => {
  room.broadcast(
    "update",
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }) +
      ": " +
      clientColor +
      text
  );
};

// broadcasts the given message to all clients as well as the updated state
// occurs when colyseus state has not been changed, but there are updates in the game that need to be rendered.
const broadcastUpdateAndRender = (
  room: Room,
  state: StateSchema,
  text: string
): void => {
  room.broadcast("updateAndRender", {
    text:
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }) + text,
    state: state,
  });
};
