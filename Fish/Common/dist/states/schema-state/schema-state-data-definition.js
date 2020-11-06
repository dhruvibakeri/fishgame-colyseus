"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateSchema = exports.ScoreSchema = void 0;
const schema_1 = require("@colyseus/schema");
let ScoreSchema = /** @class */ (() => {
    class ScoreSchema extends schema_1.Schema {
        constructor(penguincolor, score) {
            super();
            this.penguincolor = penguincolor;
            this.score = score;
        }
    }
    __decorate([
        schema_1.type("string")
    ], ScoreSchema.prototype, "penguincolor", void 0);
    __decorate([
        schema_1.type("number")
    ], ScoreSchema.prototype, "score", void 0);
    return ScoreSchema;
})();
exports.ScoreSchema = ScoreSchema;
let StateSchema = /** @class */ (() => {
    class StateSchema extends schema_1.Schema {
        constructor(gamestage, rowlen, board, players) {
            super();
            this.gamestage = gamestage;
            this.rowlen = rowlen;
            this.board = board;
            this.players = players;
        }
    }
    __decorate([
        schema_1.type("string")
    ], StateSchema.prototype, "gamestage", void 0);
    __decorate([
        schema_1.type("number")
    ], StateSchema.prototype, "rowlen", void 0);
    __decorate([
        schema_1.type(["string"])
    ], StateSchema.prototype, "board", void 0);
    __decorate([
        schema_1.type([ScoreSchema])
    ], StateSchema.prototype, "players", void 0);
    return StateSchema;
})();
exports.StateSchema = StateSchema;
//# sourceMappingURL=schema-state-data-definition.js.map