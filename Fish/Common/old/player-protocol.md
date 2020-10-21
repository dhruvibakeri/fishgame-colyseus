# Memorandum

**DATE**: Wednesday, 21st October

**FROM**: Atharva Shukla, Dhruvi Bakeri

**Subject**: The player protocol.

---
**Joining Stage**

The various players join the game. [This is the job of the _Tournament Manager_]

**Placing Stage**

The player waits for `"pleasePlace"` message from the server. When they receive the message, they can look for the possible placements on the game state and respond with a `"place"` message with their desired position. 

The Referee sends out `"pleasePlace"` messages to the various clients till all the penguins are placed. Then the referee transitions the `Playing Stage`

**Playing Stage**

The player waits for the `"pleaseMove"` message from the server. When they receive the message, they can look for possible moves, validity of the moves, or fold over the tree and respond with a `"move"` message with their a `Move` object that contains to and from positions. 

The Referee send out sends out `"pleaseMove"` messages to the various clients tioll all the penguins are placed. Then the referee transitions to the `Done Stage` (when there are no moves left). 

**Synchronization of states**

Whenever the state of the game changes on the server side, `onStateChange` event is triggered with the new state of the game. 

**Done Stage**

When the game is over, we transition onto the done stage. At this point, the clients can gracefully leave. 

---

**Client side**

`onStateChange((state) => { ... })`: OnStateChange event is triggered by the referee whenever the state of the game changes. We attach a callback on the `onStateChange` listener that responds to changes to the state of the game. The GUI also renders the fresh game state.

- `send(type, message)`: The AI can send two kinds of messages to the Referee: `"move"` and `"place"` These messages should only be sent when its the concerned AI's turn to place/move. Implementation detail of the send adds in the `UUID` of the client that's sending the message. 
  - `send("move", Move)`: Sends a message to the referee to make the `Move` from one posn to another on the board. 
  - `send("place", BoardPosn)`: Sends a message to the referee to place the penguin at a given posn on the board. 

- `onMessage(type, message)`: This event is triggered when the server sends a message directly to the client, or via broadcast.
  - `onMessage("pleaseMove", (GameState) => { ... })`: Asks the client to make a `"move"` send.
  - `onMessage("pleasePlace", (GameState) => { ... })`: Asks the client to make a `"place"` send.

**Server side**

- `onMessage (type, (UUID, message) => { ... })`: used on the server side to respond to `send` messages. The callback processes the various types of messages, and possibly changes the state accordingly. 

**Note**: the `type` is a string, and the `message` is the payload of any type. 

---