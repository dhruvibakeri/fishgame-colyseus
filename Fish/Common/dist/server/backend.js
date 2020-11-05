"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishRoom = void 0;
const colyseus_1 = require("colyseus");
const compact_state_examples_1 = require("../states/compact-state/compact-state-examples");
const compact_state_to_schema_state_1 = require("../states/state-to-state-translators/compact-state-to-schema-state");
// import { all_places } from "../../Player/strategy";
// import { stateList } from "../states/compact-state/compact-state-examples";
// import { cStateToSchema } from "../states/state-to-state-translators/compact-state-to-schema-state";
class FishRoom extends colyseus_1.Room {
    constructor() {
        super(...arguments);
        this.maxClients = 4;
    }
    onCreate(options) {
        // REFEREE.ts [we could rename this ro referee.ts]
        var i = 0;
        this.setState(compact_state_to_schema_state_1.cStateToSchema(compact_state_examples_1.ex2));
        //this.setState(getRandomState());
        // this.setState(getPlacedState(i))
        setInterval(() => {
            i = i + 1;
            if (i < 10) {
                let newState = getPlacedState(i);
                this.state.board = newState.board;
                this.state.gamestage = newState.gamestage;
                this.state.players = newState.players;
                this.state.rowlen = newState.rowlen;
            }
        }, 500);
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
        return true;
    }
}
exports.FishRoom = FishRoom;
// function getRandomState(): StateSchema {
//   var item = stateList[Math.floor(Math.random() * stateList.length)];
//   return cStateToSchema(item)
// }
function getPlacedState(i) {
    if (i % 2 === 0) {
        return compact_state_to_schema_state_1.cStateToSchema(compact_state_examples_1.ex2);
    }
    else {
        return compact_state_to_schema_state_1.cStateToSchema(compact_state_examples_1.state0);
    }
}
//# sourceMappingURL=backend.js.map