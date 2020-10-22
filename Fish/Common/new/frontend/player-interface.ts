import { Board, BoardPosn, GameState, isGameState, PenguinColor, UUID } from './state'
import { } from './state';

type ClientPlayer = {
  id: UUID,
  score: Number,
  Penguincolor: PenguinColor,
  penguinPosns: BoardPosn[]
}

// Interpretation. 
// id: The unique ID
// ...

// TODO:  [Important]
// Change the old game state to remove UUID 
// Because other players should not be able to 
// look at this. 




// A synchronization of states happens when ANY player does:
// `place` or `move`. 
// If any player's `place` or `move` results in something bad:
// You get a new game state with the bad player removed.
// If the `place` or `move` are valid, the new game state is updated
// with that `place` or `move` executed. 

// Sends a message to the referee that tells it where to place the 
// player’s penguin. If It sends at the wrong time, player is kicked out.
function place(posnToPlace: BoardPosn): Promise<GameState> {
  return;
}


// Sends a message to the referee that tells it where to move the 
// player’s penguin. If It sends at the wrong time, player is kicked out.
function move(posnToPlace: BoardPosn): Promise<GameState> {
  return;
}

// UTILITY functions:
// - what valid moves do i have
// - what does the tree look like for each of them

type Move = [BoardPosn, BoardPosn];

function getValidPenguinMoves(gameState: GameState): Move[] {
  return [];
}

function getValidPenguinPlacements(gameState: GameState): BoardPosn[] {
  return [];
}

function isValidPenguinMoves(gameState: GameState): boolean {
  return false;
}

function isValidPenguinPlacements(gameState: GameState): boolean {
  return false;
}

// checks if it is the client player’s turn in this game state.
function isMyTurn(gameState: GameState, player: ClientPlayer): boolean {
  // STUB
  return true;
}
