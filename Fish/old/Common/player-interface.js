

//---------------------- INTERPRETATION ----------------------------------

// A Move is [BoardPosn, BoardPosn];

// Move:
// - contains position from where the player wants to move
// - contains position to where the player wants to move

// A synchronization of states happens when ANY player does:
// `place` or `move`. 
// If any player's `place` or `move` results in something bad:
// You get a new game state with the bad player removed.
// If the `place` or `move` are valid, the new game state is updated
// with that `place` or `move` executed. 

//------------------------ EVENTS ----------------------------------------
/*
- onStateChange(state => { ... }): 
   - OnStateChange event is triggered by the referee whenever the state of
     the game changes. 
   - We attach a callback on the onStateChange listener that responds to
     changes to the state of the game.                                 
   - The GUI also renders the fresh game state.

- send(type, message): 
  - The AI can send two kinds of messages to the Referee: "move" and "place"                      
  - These messages should only be sent when its the concerned AI's turn to
    place/move. (Otherwise they'll get kicked out)
  - Implementation detail of the send adds in the unique ID of the client that's
    sending the message.

    - send("move", Move): Sends a message to the referee to make the Move from
      one posn to another on the board.
    - send("place", BoardPosn): Sends a message to the referee to place the
      penguin at a given posn on the board.
*/
//-------------------------------------------------------------------------------

// MAIN functions:

// Sends a message to the referee that tells it where to place the 
// player’s penguin. If It sends at the wrong time, player is kicked out.
//BoardPosn -> Promise<GameState>
function place(posnToPlace) {
  // send("place", posnToPlace)
  return;
}

// Sends a message to the referee that tells it where to move the 
// player’s penguin. If It sends at the wrong time, player is kicked out.
// Move -> Promise<GameState>
function move(movePosn) {
  // send("move", movePosn)
  return;
}
