import { assert } from "chai"
import { cStateToSchema } from "./cstate-to-schema"
import { stateList } from "./run"
import { schemaToCompact } from "./schema-to-cstate"

describe("test cstate/schem conversions", () => {
  stateList.forEach((state, idx) => {
    it(`testing on state ${idx}`, () => {
      assert.deepEqual(state, schemaToCompact(cStateToSchema(state)))
    })
  })
})