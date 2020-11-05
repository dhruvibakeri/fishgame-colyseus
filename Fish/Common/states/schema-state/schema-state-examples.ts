import { ScoreSchema, StateSchema } from "./schema-state-data-definition";

/**
 * Example
 */

export const StateSchemaExample = new StateSchema(
  "playing",
  2,
  ["black", "red"],
  [new ScoreSchema("black", 4), new ScoreSchema("red", 4)]
)