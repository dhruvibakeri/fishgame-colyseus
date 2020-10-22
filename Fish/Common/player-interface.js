
//------------------------------------------------------ DATA DEFINITION --------------------------------------------------
/* ClientPlayer = {
  id: UUID,
  score: Number,
  penguinColor: PenguinColor,
  penguinPosns: BoardPosn[]
}*/

//A Move is [BoardPosn, BoardPosn];

//------------------------------------------------------ INTERPRETATION--------------------------------------------------

// ClientPlayer:
// id: The unique ID of the Player
// score: The current score of the Player
// penguinColor: the color of the Player's Penguins
// penguinPosns: the current positions of the Player's penguins

//Move:
//- contains position from where the player wants to move
//- contains position to where the player wants to move


// A valid move is when:
// - The player making the move has the current turn
// - The player is attempting to move one of his penguins
// - The player's target is not an unreachable tile.
// - An unreachable tile could be occupied by:
//      - A penguin (either the concerned player's or another player's)
//      - A hole
//- the move is in a straight line

// A valid placement is when:
// - The player placing has the current turn
// - The player is attempting to place a penguin of his color
// - The player has not reached maximum penguin limit
// - The player's target is not an invalid tile.
// - An invalid tile could be occupied by:
//      - A penguin (either the concerned player's or another player's)
//      - A hole


// A synchronization of states happens when ANY player does:
// `place` or `move`. 
// If any player's `place` or `move` results in something bad:
// You get a new game state with the bad player removed.
// If the `place` or `move` are valid, the new game state is updated
// with that `place` or `move` executed. 

//---------------------------------------------------------------------------------------------------------------------------

// MAIN functions:

// Sends a message to the referee that tells it where to place the 
// player’s penguin. If It sends at the wrong time, player is kicked out.
//BoardPosn -> Promise<GameState>
function place(posnToPlace) {
  return;
}

// Sends a message to the referee that tells it where to move the 
// player’s penguin. If It sends at the wrong time, player is kicked out.
// BoardPosn -> Promise<GameState>
function move(posnToPlace) {
  return;
}

// UTILITY functions:

// GameState -> Move[]
// Gets all possible valid moves for the Player's penguins according to the given gameState
function getValidPenguinMoves(gameState) {
  return [];
}


// GameState -> BoardPosn[]
// Gets all possible valid placements for the Player's penguins according to the given gameState
function getValidPenguinPlacements(gameState) {
  return [];
}

// Move GameState -> boolean
// checks whether the given move is valid according to the given gameState
function isValidPenguinMoves(move, gameState) {
  return false;
}

// GameState -> boolean
// Posn GameState -> boolean
// checks whether the given placement is valid according to the given gameState
function isValidPenguinPlacements(gameState) {
  return false;
}

// checks if it is the given player’s turn in this game state.
// GameState ClientPlayer -> boolean
function isMyTurn(gameState, player)  {
  // STUB
  return true;
}


// GameState -> GameTree
// player can create a GameTree from any given GameState
function createGameTree(gameState) {
    return;
}
