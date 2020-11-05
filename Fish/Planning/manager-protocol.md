
# Memorandum

  

**DATE**: Monday, 2nd November

  

**FROM**: Atharva Shukla, Dhruvi Bakeri

  

**Subject**: Tournament Manager

  

---

  

**Purpose**:

  

The purpose of a tournament manager is the following:

  

1. Receives a queue of players who are waiting to be assigned to a Room. This queue is ordered by timestamp of when the player signed up.

2. The tournament manager chunks the queue into groups of 4 as long as all players in the queue can be assigned a referee (and a room managed by the referee). For example, a queue of 6 players will be split into rooms of 4 and 2 but a queue of 5 players will be split into rooms of 3 and 2.

3. For each group of players in 2., a fresh Referee is created, and the clients that belong to the referee join the game room that the referee manages.

4. The tournament manager listens on state changes of each game, and does the following tasks:

1. Further broadcasts the state to the observers

2. Collects the statistics - the game result, the score of the players, and the failing, and cheating players - at the end of the game.

  

**Implementation**:

  

As discussed in previous Milestones, we'll be continuing with our use of the [Colyseus](https://colyseus.io/) multiplayer framework and extend that to the the Tournament Manager. The tournament manager takes the form of a [Colyseus.Room](https://docs.colyseus.io/).

  

For 1., the room is initialized with a timer, and collects the list of clients, their IDs, and a timestamp as they join into the [`client`](https://docs.colyseus.io/server/client/) object. When the timer runs out, the tournament manager can use the [`room.lock()`](https://docs.colyseus.io/server/room/#lock) method to prevent future clients from joining. The [`room.unlock()`](https://docs.colyseus.io/server/room/#unlock) method can be used to start the next tournament with a fresh state.



For 2., the tournament manager will accept a `groupBy` function with the signature: `client[] -> client[][]` that splits the clients into sub-groups.

  

For 3., the [Match-maker API](https://docs.colyseus.io/server/matchmaker/) should be used to create a room for each sub-group using [`matchMaker.create(roomName: string): reservation`](https://docs.colyseus.io/server/matchmaker/#createroomname-options) method. This gives us a `reservation` object. A message with the reservation object is sent to each client using [`client.send(type: string | number, message: any): void`](https://docs.colyseus.io/server/client/#sendtype-message) and they can use [`consumeSeatReservation(reservation: reservation): void`](https://docs.colyseus.io/client/client/#consumeseatreservation-reservation) from the client-side to join the room by its reserved seat object.

  

Since each `Room`'s constructor is initialized with a certain limit on clients, when the [`room.clients: client[]`](https://docs.colyseus.io/server/room/#clients-client) reaches the limit, the referee starts the game in the "placing" stage.