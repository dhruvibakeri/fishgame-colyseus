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
import {
  DefMove,
  getBestAction,
  Move,
} from "../minimax/best-action-game-state";
import {
  DEFAULT_BOARD_COLS,
  DEFAULT_BOARD_ROWS,
  DEFAULT_SIZE,
} from "../graphics/render-frontend";
import * as Colyseus from "colyseus.js";
import { rerender } from "./frontend-canvas";
import { cStateToGameState } from "../states/state-to-state-translators/compact-state-to-game-state";
import { GET__CScoresFromCState } from "../states/compact-state/compact-state-selectors";
import { CState } from "../states/compact-state/compact-state-data-definition";
import {
  CAN_MOVE,
  FROM_POSN,
  PLACEMENT_POSN,
  TO_POSN,
} from "../graphics/render-state";
import swal from "sweetalert";
import { Posn } from "../../../common";
import { compactPosnToInputPosn } from "../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state";
import { newStateToCState } from "../new-state/new-state-to-compact-state";
import { schemaToNewState } from "../new-state/new-schema-to-new-state";
import { StateSchema } from "../new-state/new-schema-state";

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

  room.onStateChange.once((state) => {
    let cState = newStateToCState(schemaToNewState(state));
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
      newStateToCState(schemaToNewState(message.state)),
      messages
    );
  });

  room.onStateChange((newState) => {
    let cState = newStateToCState(schemaToNewState(newState));
    CURRENT_STATE = cState;

    document.addEventListener("click", handleInput);

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
  placementPosn: BoardPosn
): void {
  let compactPosn: Posn = [placementPosn.row, placementPosn.col];
  let newStatePosn: Posn = compactPosnToInputPosn(compactPosn);
  room.send("place", { row: newStatePosn[0], col: newStatePosn[1] });
}

// Colyseus.room [BoardPosn, BoardPosn] -> void
// A player can use this function to send a "move" message to the referee
// with its desired move
export function movePenguin(room: Colyseus.Room, move: DefMove): void {
  let fcompactPosn: Posn = [move[0].row, move[0].col];
  let fnewStatePosn: Posn = compactPosnToInputPosn(fcompactPosn);
  let from = { row: fnewStatePosn[0], col: fnewStatePosn[1] };
  let tcompactPosn: Posn = [move[1].row, move[1].col];
  let tnewStatePosn: Posn = compactPosnToInputPosn(tcompactPosn);
  let to = { row: tnewStatePosn[0], col: tnewStatePosn[1] };
  room.send("move", [from, to]);
}
