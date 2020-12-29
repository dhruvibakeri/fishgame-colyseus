import { schemaToCompact } from "../states/state-to-state-translators/schema-state-to-compact-state";
import {
  GameState,
  GameStatePlaying,
  Player,
} from "../states/game-state/game-state-data-definition";
import { GET_GameStateNextToPlace } from "../states/game-state/game-state-selectors";
import { BoardPosn } from "../utils/other-data-definitions";
import { getPenguinPlacementPosn } from "../minimax/placement-strategy-game-state";
import {
  getValidSubStatesForGameBoard,
  IllegalAction,
} from "../game-tree/game-tree-state";
import { getBestAction, Move } from "../minimax/best-action-game-state";
import {
  DEFAULT_BOARD_COLS,
  DEFAULT_BOARD_ROWS,
  DEFAULT_SIZE,
} from "../graphics/render-frontend";
import * as Colyseus from "colyseus.js";
import { rerender } from "./frontend-canvas";
import { cStateToGameState } from "../states/state-to-state-translators/compact-state-to-game-state";
import { GET__CScoresFromCState } from "../states/compact-state/compact-state-selectors";
import { StateSchema } from "../states/schema-state/schema-state-data-definition";
import { CState } from "../states/compact-state/compact-state-data-definition";
import {
  CAN_MOVE,
  FROM_POSN,
  PLACEMENT_POSN,
  TO_POSN,
} from "../graphics/render-state";
import swal from "sweetalert";

let CURRENT_STATE: CState = ["joining", [], []];

let messages: string[] = [];

// Connecting to the server(from Lib docs)
//var host = window.document.location.host.replace(/:.*/, '');
//var client = new Colyseus.Client(location.protocol.replace("http", "ws")
//  + "//" + host + (location.port ? ':' + location.port : ''));

// On every state change on the server side, the updated state gets renders
// for the observers to view
// The players would also take actions based on their turns once the onStateChange
// event is triggered

document.addEventListener("DOMContentLoaded", async () => {
  var host = window.document.location.host.replace(/:.*/, "");
  var client = new Colyseus.Client(
    location.protocol.replace("http", "ws") +
      "//" +
      host +
      (location.port ? ":" + location.port : "")
  );

  let room: Colyseus.Room<StateSchema> = await client.joinOrCreate<StateSchema>(
    "fish"
  );

  const handleInput = async () => {
    console.log(CURRENT_STATE[0]);
    if (CURRENT_STATE[0] === "placing") {
      placePenguin(room, PLACEMENT_POSN);
    } else if (CURRENT_STATE[0] === "playing") {
      if (CAN_MOVE) {
        movePenguin(room, [FROM_POSN, TO_POSN]);
      }
    }
  };

  const handleKeyInput = (ev: KeyboardEvent) => {
    if (ev.code === "Space") {
      movePenguin(room, "SKIP");
    }
  };

  room.onStateChange.once((state) => {
    let cState = schemaToCompact(state);
    console.log("this is the first room state!", cState);
    rerender(
      DEFAULT_SIZE,
      DEFAULT_BOARD_ROWS,
      DEFAULT_BOARD_COLS,
      cState,
      messages
    );
  });

  room.onMessage("update", (message) => {
    console.log("message received from server");
    console.log(message);
    messages.push(message);
  });

  room.onMessage("game over", (message) => {
    swal("GAME OVER!").then((value) => {
      if (value) {
        room.leave();
      }
    });
  });

  room.onMessage("updateAndRender", (message) => {
    console.log("message received from server");
    console.log(message);
    messages.push(message.text);
    rerender(
      DEFAULT_SIZE,
      DEFAULT_BOARD_ROWS,
      DEFAULT_BOARD_COLS,
      message.state,
      messages
    );
  });

  room.onStateChange((newState) => {
    let cState = schemaToCompact(newState);
    CURRENT_STATE = cState;

    document.addEventListener("click", handleInput);
    document.addEventListener("keydown", handleKeyInput);

    console.log(`
      newState.toJSON() ==>
      ${JSON.stringify(newState.toJSON())}
       -*-*-
      cState            ==>
      ${JSON.stringify(cState)}
       -*-*-`);

    rerender(
      DEFAULT_SIZE,
      DEFAULT_BOARD_ROWS,
      DEFAULT_BOARD_COLS,
      cState,
      messages
    );
  });
});

// GameState Player -> BoardPosn | IllegalAction
// A player can use this function while deciding a placement for its penguin to place
// it according to the penguin placement strategy
export function placementStrategy(state: GameState): BoardPosn | IllegalAction {
  return getPenguinPlacementPosn(state);
}

// GameState Number -> [BoardPosn,BoardPosn]
// A player can use this function while deciding a move for its penguin to move
// it according to the best gain strategy
export function getBestActionStrategy(
  state: GameState,
  depth: number
): Move | "SKIP" {
  let move: Move = getBestAction(
    [
      state,
      () => {
        return getValidSubStatesForGameBoard(state);
      },
    ],
    depth
  );
  if (move === false) {
    return "SKIP";
  } else {
    return move;
  }
}

// GameState Player -> boolean
// A player can use this to check if it is currently their turn
export function isMyTurn(gs: GameState, player: Player): boolean {
  let nextTurn: Player = GET_GameStateNextToPlace(gs);
  return player === nextTurn;
}

// Colyseus.room BoardPosn -> void
// A player can use this function to send a "place" message to the referee
// with its desired placement positon
export function placePenguin(
  room: Colyseus.Room,
  placementPosn: BoardPosn | IllegalAction
): void {
  room.send("place", placementPosn);
}

// Colyseus.room [BoardPosn, BoardPosn] -> void
// A player can use this function to send a "move" message to the referee
// with its desired move
export function movePenguin(room: Colyseus.Room, move: Move | "SKIP"): void {
  room.send("move", move);
}
