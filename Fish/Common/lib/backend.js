"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishRoom = void 0;
const colyseus_1 = require("colyseus");
const cstate_to_schema_1 = require("./src/cstate-to-schema");
const run_1 = require("./src/run");
const penguin_placement_strategy_1 = require("./src/penguin-placement-strategy");
class FishRoom extends colyseus_1.Room {
    constructor() {
        super(...arguments);
        this.maxClients = 4;
    }
    onCreate(options) {
        var i = 0;
        //this.setState(getRandomState());
        this.setState(getPlacedState(i));
        /*setInterval(() => {
          let newState = getRandomState()
          this.state.board = newState.board;
          this.state.gamestage = newState.gamestage;
          this.state.players = newState.players;
          this.state.rowlen = newState.rowlen;
          console.log(`NEW STATE: ${JSON.stringify(this.state.toJSON())}`)
        }, 500)*/
        setInterval(() => {
            i = i + 1;
            if (i < penguin_placement_strategy_1.all_places.length) {
                let newState = getPlacedState(i);
                this.state.board = newState.board;
                this.state.gamestage = newState.gamestage;
                this.state.players = newState.players;
                this.state.rowlen = newState.rowlen;
                console.log(`NEW STATE: ${JSON.stringify(this.state.toJSON())}`);
            }
        }, 500);
    }
    onJoin(client) {
        console.log("->onJoin in backend");
    }
    onLeave(client) {
        console.log("->onLeave in backend");
    }
    onDispose() {
        console.log("->onDispose in backend");
    }
    onAuth(client, options, req) {
        console.log("->onAuth in backend");
        return true;
    }
}
exports.FishRoom = FishRoom;
function getRandomState() {
    var item = run_1.stateList[Math.floor(Math.random() * run_1.stateList.length)];
    return cstate_to_schema_1.cStateToSchema(item);
}
function getPlacedState(i) {
    return cstate_to_schema_1.cStateToSchema(penguin_placement_strategy_1.all_places[i]);
}
