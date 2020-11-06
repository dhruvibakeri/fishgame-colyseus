"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateSchemaExample = void 0;
const schema_state_data_definition_1 = require("./schema-state-data-definition");
/**
 * Example
 */
exports.StateSchemaExample = new schema_state_data_definition_1.StateSchema("playing", 2, ["black", "red"], [new schema_state_data_definition_1.ScoreSchema("black", 4), new schema_state_data_definition_1.ScoreSchema("red", 4)]);
//# sourceMappingURL=schema-state-examples.js.map