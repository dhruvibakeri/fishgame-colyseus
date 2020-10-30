"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const schema_1 = require("./schema");
const schema_to_cstate_1 = require("./schema-to-cstate");
describe("test schema to cboard conversion", () => {
    it("converting example", () => {
        chai_1.assert.deepEqual(schema_to_cstate_1.schemaToCompact(schema_1.StateSchemaExample), ["playing", [["black", "red"]], [["black", 4], ["red", 4]]]);
    });
});
