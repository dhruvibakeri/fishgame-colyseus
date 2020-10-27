import { assert } from "chai";
import { StateSchemaExample } from "./schema";
import { schemaToCompact } from "./schema-to-cstate";

describe("test schema to cboard conversion", () => {
  it("converting example", () => {
    assert.deepEqual(schemaToCompact(StateSchemaExample),
      ["playing", [["black", "red"]], [["black", 4], ["red", 4]]])
  })
})