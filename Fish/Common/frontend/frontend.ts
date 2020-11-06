import { schemaToCompact } from '../states/state-to-state-translators/schema-state-to-compact-state';
import { GameState, Player } from '../states/game-state/game-state-data-definition';
import { GET_GameStateNextToPlace } from '../states/game-state/game-state-selectors';
import { BoardPosn } from '../utils/other-data-definitions';
import { getPenguinPlacementPosn } from '../minimax/placement-strategy-game-state';
import { getValidSubStatesForGameBoard, IllegalAction } from '../game-tree/game-tree-state';
import { getBestAction, Move } from '../minimax/best-action-game-state';
import { DEFAULT_BOARD_COLS, DEFAULT_BOARD_ROWS, DEFAULT_SIZE } from "../graphics/render-frontend"
import * as Colyseus from "colyseus.js";
import { rerender } from './frontend-canvas';


// Connecting to the server(from Lib docs)
var host = window.document.location.host.replace(/:.*/, '');
var client = new Colyseus.Client(location.protocol.replace("http", "ws")
  + "//" + host + (location.port ? ':' + location.port : ''));

client.joinOrCreate("fish").then((room: Colyseus.Room) => {
  room.onStateChange((newState) => {
    let cState = schemaToCompact(newState)

    console.log(`
newState.toJSON() ==>
${JSON.stringify(newState.toJSON())}
       -*-*-
cState            ==>
${JSON.stringify(cState)}
       -*-*-`)

    rerender(DEFAULT_SIZE, DEFAULT_BOARD_ROWS, DEFAULT_BOARD_COLS, cState)
  });
});


export function placementStrategy(state: GameState, player: Player): BoardPosn | IllegalAction {
  return getPenguinPlacementPosn(state)
}

export function getBestActionStrategy(state: GameState, depth: number): Move {
  return getBestAction([state, () => { return getValidSubStatesForGameBoard(state) }], depth)
}

export function isMyTurn(gs: GameState, player: Player): boolean {
  let nextTurn: Player = GET_GameStateNextToPlace(gs)
  return player === nextTurn
}

export function placePenguin(room: Colyseus.Room, placementPosn: BoardPosn): void {
  room.send("place", placementPosn);
}

export function movePenguin(room: Colyseus.Room, move: [BoardPosn, BoardPosn]): void {
  room.send("move", move);
}
