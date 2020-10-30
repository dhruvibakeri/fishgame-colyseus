"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cstate_to_schema_1 = require("./cstate-to-schema");
const run_1 = require("./run");
const schema_to_cstate_1 = require("./schema-to-cstate");
describe("test cstate/schem conversions", () => {
    run_1.stateList.forEach((state, idx) => {
        it(`testing on state ${idx}`, () => {
            chai_1.assert.deepEqual(state, schema_to_cstate_1.schemaToCompact(cstate_to_schema_1.cStateToSchema(state)));
        });
    });
});
