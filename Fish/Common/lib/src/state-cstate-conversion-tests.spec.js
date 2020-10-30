"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const run_1 = require("./run");
const cstate_to_state_1 = require("./cstate-to-state");
const state_to_cstate_1 = require("./state-to-cstate");
describe("Testing the translation to/from cstate/state", () => {
    run_1.stateList.forEach((state, idx) => {
        it(`testing on state ${idx}`, () => {
            chai_1.assert.deepEqual(state, state_to_cstate_1.stateToCState(cstate_to_state_1.cStateToGameState(state)));
        });
    });
});
