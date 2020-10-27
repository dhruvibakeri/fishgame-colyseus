import { Room } from "colyseus";
import { cStateToSchema } from "./src/cstate-to-schema";
import { stateList } from "./src/run";
import { StateSchema } from "./src/schema";



export class FishRoom extends Room<StateSchema> {
  maxClients = 4;

  onCreate(options) {

    this.setState(getRandomState());

    setInterval(() => {
      let newState = getRandomState()
      this.state.board = newState.board;
      this.state.gamestage = newState.gamestage;
      this.state.players = newState.players;
      this.state.rowlen = newState.rowlen;
      console.log(`NEW STATE: ${JSON.stringify(this.state.toJSON())}`)
    }, 500)
  }

  onJoin(client) {
    console.log("->onJoin in backend")
  }

  onLeave(client) {
    console.log("->onLeave in backend")
  }

  onDispose() {
    console.log("->onDispose in backend")
  }

  onAuth(client, options, req) {
    console.log("->onAuth in backend")
    return true
  }
}

function getRandomState(): StateSchema {
  var item = stateList[Math.floor(Math.random() * stateList.length)];
  return cStateToSchema(item)
}