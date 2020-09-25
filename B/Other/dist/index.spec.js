"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("./index");
// $ ./xyes
// []
const emptyNoLimitArgs = [];
// -->
const emptyNoLimitModel = {
    stringToPrint: "hello world",
    loopCount: "infinity"
};
// $ ./xyes -limit
// [ '-limit' ]
const emptyWithLimitsArgs = ['-limit'];
// -->
const emptyWithLimitModel = {
    stringToPrint: "hello world",
    loopCount: 20
};
// $ ./xyes red
// [ 'red' ]
const nonEmptyNoLimitArgs = ['red'];
// -->
const nonEmptyNoLimitModel = {
    stringToPrint: "red",
    loopCount: "infinity"
};
// $ ./xyes -limit blue green
// [ '-limit', 'blue', 'green' ]
const nonEmptyWithLimitArgs = ['-limit', 'blue', 'green'];
// --> 
const nonEmptyWithLimitModel = {
    stringToPrint: "blue green",
    loopCount: 20
};
describe("helpers", () => {
    it("first", () => {
        chai_1.assert.deepEqual(index_1.first(nonEmptyWithLimitArgs), '-limit');
    });
    it("rest", () => {
        chai_1.assert.deepEqual(index_1.rest(nonEmptyWithLimitArgs), ['blue', 'green']);
    });
    it("isEmpty for empty", () => {
        chai_1.assert.deepEqual(index_1.isEmpty(emptyNoLimitArgs), true);
    });
    it("isEmpty for nonempty", () => {
        chai_1.assert.deepEqual(index_1.isEmpty(nonEmptyNoLimitArgs), false);
    });
});
describe("test the predicates", () => {
    it("test isEmptyNoLimit with emptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.isEmptyNoLimit(emptyNoLimitArgs), true);
    });
    it("test isEmptyNoLimit with emptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.isEmptyNoLimit(emptyWithLimitsArgs), false);
    });
    it("test isEmptyNoLimit with nonEmptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.isEmptyNoLimit(nonEmptyNoLimitArgs), false);
    });
    it("test isEmptyNoLimit with nonEmptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.isEmptyNoLimit(nonEmptyWithLimitArgs), false);
    });
    it("test isEmptyWithLimit with emptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.isEmptyWithLimit(emptyNoLimitArgs), false);
    });
    it("test isEmptyWithLimit with emptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.isEmptyWithLimit(emptyWithLimitsArgs), true);
    });
    it("test isEmptyWithLimit with nonEmptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.isEmptyWithLimit(nonEmptyNoLimitArgs), false);
    });
    it("test isEmptyWithLimit with nonEmptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.isEmptyWithLimit(nonEmptyWithLimitArgs), false);
    });
    it("test isNonEmptyNoLimit with emptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.isNonEmptyNoLimit(emptyNoLimitArgs), false);
    });
    it("test isNonEmptyNoLimit with emptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.isNonEmptyNoLimit(emptyWithLimitsArgs), false);
    });
    it("test isNonEmptyNoLimit with nonEmptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.isNonEmptyNoLimit(nonEmptyNoLimitArgs), true);
    });
    it("test isNonEmptyNoLimit with nonEmptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.isNonEmptyNoLimit(nonEmptyWithLimitArgs), false);
    });
    it("test isNonEmptyWithLimit with emptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.isNonEmptyWithLimit(emptyNoLimitArgs), false);
    });
    it("test isNonEmptyWithLimit with emptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.isNonEmptyWithLimit(emptyWithLimitsArgs), false);
    });
    it("test isNonEmptyWithLimit with nonEmptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.isNonEmptyWithLimit(nonEmptyNoLimitArgs), false);
    });
    it("test isNonEmptyWithLimit with nonEmptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.isNonEmptyWithLimit(nonEmptyWithLimitArgs), true);
    });
});
describe("test the printmodel generation", () => {
    it("emptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.emptyNoLimit(), emptyNoLimitModel);
    });
    it("emptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.emptyWithLimit(), emptyWithLimitModel);
    });
    it("nonEmptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.nonEmptyNoLimit(nonEmptyNoLimitArgs), nonEmptyNoLimitModel);
    });
    it("nonEmptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.nonEmptyWithLimit(nonEmptyWithLimitArgs), nonEmptyWithLimitModel);
    });
});
describe("args to printmodel mapping", () => {
    it("emptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.controller(emptyNoLimitArgs), emptyNoLimitModel);
    });
    it("emptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.controller(emptyWithLimitsArgs), emptyWithLimitModel);
    });
    it("nonEmptyNoLimit", () => {
        chai_1.assert.deepEqual(index_1.controller(nonEmptyNoLimitArgs), nonEmptyNoLimitModel);
    });
    it("nonEmptyWithLimit", () => {
        chai_1.assert.deepEqual(index_1.controller(nonEmptyWithLimitArgs), nonEmptyWithLimitModel);
    });
});
//# sourceMappingURL=index.spec.js.map