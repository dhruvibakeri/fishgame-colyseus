# Memorandum

**DATE**: 29th October, 2020

**FROM**: Atharva Shukla, Dhruvi Bakeri

**Subject**: Referee Component

---

Initially, the referee is provided a game room by the tournament manager with the following properties:

- Unique ID of the Game Room
- An ordered list of the Unique IDs of the AIs that have been assigned to the Game Room. This list is in ascending ordered of the "age" of the player. The definition of "age" is yet to be decided.
- Dimensions of the Board

After the initial assignment is made, the referee:

- Generates an initial Board with the following properties:
  - Width and height according to the values given by the tournament manager.
  - Random number of holes on the board such that `(6 - N) * N` penguins may be placed on the board for `N` in range `[2, 4]`.
  - Random number of fishes on each tile that doesn't have a hole.
- Assigns unique colors randomly to each AI.

Create the initial state with the following properties:

- Is set to the `placing` stage.
- Has the board as specified above.
- Generates a list of `Player`s (Player as defined in our Game State) which is ordered according to the list given by the Tournament Manager. Each player starts with the score `0`.

The referee starts the game (in placing stage). It broadcasts the initial state o the game, and then:

- **Broadcasting Messages**: Broadcasts any change to the state of the game. The clients will listen to the state changes and make appropriate responses.

- **Listening for Messages**: Listeners on the messages broadcasted by the AI clients, these messages are specified in the `player-protocol.md`.
  - **Input Validation**: Any message that does not adhere to the format specified in Player Protol leads to the sender of the message being kicked out.
  - **Time to Response**: When the state of the game changes to show that a certain player is supposed to move/place, the player has `5` seconds to respond with a valid response (unless the game is in `done` stage). If there is no response, the corresponding AI is kicked out. 
  - **Changing State**: The referee uses the State Interface to change the state of the game with the valid input from the player.













