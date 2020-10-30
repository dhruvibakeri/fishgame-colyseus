# Memorandum

**DATE**: Wednesday, 21st October

**FROM**: Atharva Shukla, Dhruvi Bakeri

**Subject**: The player protocol.

---

## Joining Stage

The various players join the game. [This is the job of the _Tournament Manager_]

## Placing Stage

The player checks on the current gameState if it is their turn to place. If it is, they can look for the possible placements on the game state and respond with a `"place"` message with their desired position. If the desired placement is invalid, the player is kicked out.

When the referee knows that all the penguins of all the players have been placed, the referee transitions to the `Playing Stage`.

The player is kicked out if there is no response in _N_ seconds.

## Playing Stage

The player checks on the current gameState if it is their turn to play. If it is, they can look for possible moves, validity of the moves, and respond with a `"move"` message with their  `Move` object that contains to and from positions.If the desired move is invalid, the player is kicked out.

When the referee knows that none of the penguins of any player have moves left, the referee transitions to the `Done Stage` (when there are no moves left).

The player is kicked out if there is no response in _N_ seconds.

## Synchronization of states

Whenever the state of the game changes on the server side, `onStateChange` event is triggered with the new state of the game.

## Done Stage

When the game is over, we transition onto the done stage. At this point, the clients can gracefully leave.

---

## Client side

`onStateChange((state) => { ... })`: OnStateChange event is triggered by the referee whenever the state of the game changes. We attach a callback on the `onStateChange` listener that responds to changes to the state of the game. The GUI also renders the fresh game state.

- `send(type, message)`: The AI can send two kinds of messages to the Referee: `"move"` and `"place"` These messages should only be sent when its the concerned AI's turn to place/move. Implementation detail of the send adds in the `UUID` of the client that's sending the message.

  - `send("move", Move)`: Sends a message to the referee to make the `Move` from one posn to another on the board.
  - `send("place", BoardPosn)`: Sends a message to the referee to place the penguin at a given posn on the board.

## Server side

- `onMessage (type, (client ID, message) => { ... })`: used on the server side to respond to `send` messages. The callback processes the various types of messages, and possibly changes the state accordingly.

**Note**: the `type` is a string, and the `message` is the payload of any type.

---
