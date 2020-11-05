import { Room } from "colyseus";
import { ex2, state0 } from "../minimax/best-action-game-state";
import { StateSchema } from "../states/schema-state/schema-state-data-definition";
import { cStateToSchema } from "../states/state-to-state-translators/compact-state-to-schema-state";
// import { all_places } from "../../Player/strategy";
// import { stateList } from "../states/compact-state/compact-state-examples";
// import { cStateToSchema } from "../states/state-to-state-translators/compact-state-to-schema-state";

export class FishRoom extends Room<StateSchema> {
  maxClients = 4;

  onCreate(options) {

    // REFEREE.ts [we could rename this ro referee.ts]

    var i = 0
    this.setState(cStateToSchema(ex2));
    //this.setState(getRandomState());
    // this.setState(getPlacedState(i))

    setInterval(() => {
      i = i + 1

      if(i < 10) {
      let newState = getPlacedState(i)
      this.state.board = newState.board;
      this.state.gamestage = newState.gamestage;
      this.state.players = newState.players;
      this.state.rowlen = newState.rowlen;
      }
    }, 500)

    // setInterval(() => {
    //   i = i + 1
    //   if (i < all_places.length) {
    //     let newState = getPlacedState(i)
    //     this.state.board = newState.board;
    //     this.state.gamestage = newState.gamestage;
    //     this.state.players = newState.players;
    //     this.state.rowlen = newState.rowlen;
    //   }
    // }, 500)
  }

  onJoin(client) {
  }

  onLeave(client) {
  }

  onDispose() {
  }

  onAuth(client, options, req) {
    return true
  }
}

// function getRandomState(): StateSchema {
//   var item = stateList[Math.floor(Math.random() * stateList.length)];
//   return cStateToSchema(item)
// }

function getPlacedState(i: number): StateSchema {
  if(i % 2 === 0) {
    return cStateToSchema(ex2)
  }
  else {
    return cStateToSchema(state0)
  }
}
