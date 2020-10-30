import { assert } from "chai";
import { CState } from "./cstate";
import { stateList } from "./run";
import { cStateToGameState } from "./cstate-to-state";
import { stateToCState } from "./state-to-cstate";

describe("Testing the translation to/from cstate/state", () => {
  stateList.forEach((state: CState, idx: number) => {
    it(`testing on state ${idx}`, () => {
      assert.deepEqual(state, stateToCState(cStateToGameState(state)))
    })
  });
})
