import { Schema } from "@colyseus/schema";
export declare class ScoreSchema extends Schema {
    penguincolor: string;
    score: number;
    constructor(penguincolor: string, score: number);
}
export declare class StateSchema extends Schema {
    gamestage: string;
    rowlen: number;
    board: string[];
    players: ScoreSchema[];
    constructor(gamestage: string, rowlen: number, board: string[], players: ScoreSchema[]);
}
//# sourceMappingURL=schema-state-data-definition.d.ts.map