/**
 * Tournament Manager Interface
 * ----------------------------
 *
 * Please refer to the Fish/Planning/manager-protocol.md
 * for an overview.
 * 
 * 
 * !! NOTE !!
 * 
 * We're using the colyseus.io library, so the internal 
 * details of all the components is not described. 
 * That's hidden by the library. This interface will
 * enable the implementors to use the library to 
 * implement the tournament manager using its interface.
 * _Only_ the functions necessary for implementation of 
 * the manager are mentioned. The ...s in the interface
 * represent omitted methods/fields.
 */


/**
 * A LobbyRoom is a special kind of a room
 * that hosts the tournament manager. See
 * the Room details for specific details of
 * the `Room`
 */
interface LobbyRoom extends Room {
  // ...
}

/**
 * For the purposes of implementing the tournament
 * manager, we need the ability to lock and unlock 
 * based on a certain timeout, and keep track of 
 * the client information.
 */
interface Room {
  // ...

  /**
   * Keeps track of the clients that have joined
   * the room. More info in the `ServersideClientInfo`
   */
  clients: ServersideClientInfo[]

  /**
   * Locks the room. No more clients can join. 
   * Useful when the timer runs out.
   */
  lock(): void

  /**
   * Unlocks the room, more clients can join now. 
   * Useful after one tournament round to start the
   * subsequent round after cleanup.
   */
  unlock(): void

  // ...
}


/**
 * The MatchMaker can create room reservations
 * that can be used to enter a child room.
 */
interface MatchMaker {
  // ...
  /**
   * Creates a reservation based on the name 
   * of a room. But the reservation contains more
   * information about the room see `Reservation`.
   * 
   */
  create(roomName: string): Reservation
  //  ...
}


/**
 * The ServersideClientInfo keeps track of 
 * the information collected when a client joins.
 * It also sends the reservation to its client-side
 * version (this is called from within a "Room" above)
 */
interface ServersideClientInfo {

  /**
   * Unique ID assigned to each client.
   */
  id: string;

  /**
   * The timestamp added when the client joins. 
   * All clients are ordered by this.
   */
  joiningTimeStamp: string;


  // ...
  /**
   * Consumes a reservation and sends it to the client
   * side so that it can be used to join a room (see below).
   * This is important for telling a client what room
   * it belongs to. 
   */
  sendReservation(reservation: Reservation): void
  // ...
}

/**
 * The client side is now also responsible for 
 * consuming a seat reservation and joining the 
 * corresponding room. 
 */
interface ClientSide {
  // ...
  /**
   * When the client gets assigned to a room, it receives
   * a reservation object that can be used to join the 
   * corresponding room. This call does exactly that, it
   * makes the client join the room that the reservation 
   * refers to.
   */
  consumeSeatReservation(reservation: Reservation): void
  // ...
}



/**
 * Represents a reservation for a given Room. 
 * This object can be used to create a reserved
 * seat for a given room and be consumed on the 
 * ClientSide to join the room that it is a reservation
 * for.
 */
interface Reservation {
  // Internal to colyseus.io.
  sessionId: "zzzzzzzzz",
  room: {
    roomId: "xxxxxxxxx",
    processId: "yyyyyyyyy",
    name: "battle",
    locked: false
  }
  // ...
}

