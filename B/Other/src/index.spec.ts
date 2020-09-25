import { assert } from 'chai';
import { controller, emptyNoLimit, emptyWithLimit, first, isEmpty, isEmptyNoLimit, isEmptyWithLimit, isNonEmptyNoLimit, isNonEmptyWithLimit, nonEmptyNoLimit, nonEmptyWithLimit, PrintModel, rest } from "./index";

// $ ./xyes
// []
const emptyNoLimitArgs: string[] = [];
// -->
const emptyNoLimitModel: PrintModel = {
    stringToPrint: "hello world",
    loopCount: "infinity"
}


// $ ./xyes -limit
// [ '-limit' ]
const emptyWithLimitsArgs = ['-limit']
// -->
const emptyWithLimitModel: PrintModel = {
    stringToPrint: "hello world",
    loopCount: 20
}

// $ ./xyes red
// [ 'red' ]
const nonEmptyNoLimitArgs: string[] = ['red']
// -->
const nonEmptyNoLimitModel: PrintModel = {
    stringToPrint: "red",
    loopCount: "infinity"
}

// $ ./xyes -limit blue green
// [ '-limit', 'blue', 'green' ]
const nonEmptyWithLimitArgs: string[] = ['-limit', 'blue', 'green']
// --> 
const nonEmptyWithLimitModel: PrintModel = {
    stringToPrint: "blue green",
    loopCount: 20
}


describe("helpers", () => {
    it("first", () => {
        assert.deepEqual(first(nonEmptyWithLimitArgs), '-limit')
    })

    it("rest", () => {
        assert.deepEqual(rest(nonEmptyWithLimitArgs), ['blue', 'green'])
    })

    it("isEmpty for empty", () => {
        assert.deepEqual(isEmpty(emptyNoLimitArgs), true)
    })

    it("isEmpty for nonempty", () => {
        assert.deepEqual(isEmpty(nonEmptyNoLimitArgs), false)
    })
})

describe("test the predicates", () => {
    it("test isEmptyNoLimit with emptyNoLimit", () => {
        assert.deepEqual(isEmptyNoLimit(emptyNoLimitArgs), true)
    })
    it("test isEmptyNoLimit with emptyWithLimit", () => {
        assert.deepEqual(isEmptyNoLimit(emptyWithLimitsArgs), false)
    })
    it("test isEmptyNoLimit with nonEmptyNoLimit", () => {
        assert.deepEqual(isEmptyNoLimit(nonEmptyNoLimitArgs), false)
    })
    it("test isEmptyNoLimit with nonEmptyWithLimit", () => {
        assert.deepEqual(isEmptyNoLimit(nonEmptyWithLimitArgs), false)
    })
    it("test isEmptyWithLimit with emptyNoLimit", () => {
        assert.deepEqual(isEmptyWithLimit(emptyNoLimitArgs), false)
    })
    it("test isEmptyWithLimit with emptyWithLimit", () => {
        assert.deepEqual(isEmptyWithLimit(emptyWithLimitsArgs), true)
    })
    it("test isEmptyWithLimit with nonEmptyNoLimit", () => {
        assert.deepEqual(isEmptyWithLimit(nonEmptyNoLimitArgs), false)
    })
    it("test isEmptyWithLimit with nonEmptyWithLimit", () => {
        assert.deepEqual(isEmptyWithLimit(nonEmptyWithLimitArgs), false)
    })
    it("test isNonEmptyNoLimit with emptyNoLimit", () => {
        assert.deepEqual(isNonEmptyNoLimit(emptyNoLimitArgs), false)
    })
    it("test isNonEmptyNoLimit with emptyWithLimit", () => {
        assert.deepEqual(isNonEmptyNoLimit(emptyWithLimitsArgs), false)
    })
    it("test isNonEmptyNoLimit with nonEmptyNoLimit", () => {
        assert.deepEqual(isNonEmptyNoLimit(nonEmptyNoLimitArgs), true)
    })
    it("test isNonEmptyNoLimit with nonEmptyWithLimit", () => {
        assert.deepEqual(isNonEmptyNoLimit(nonEmptyWithLimitArgs), false)
    })
    it("test isNonEmptyWithLimit with emptyNoLimit", () => {
        assert.deepEqual(isNonEmptyWithLimit(emptyNoLimitArgs), false)
    })
    it("test isNonEmptyWithLimit with emptyWithLimit", () => {
        assert.deepEqual(isNonEmptyWithLimit(emptyWithLimitsArgs), false)
    })
    it("test isNonEmptyWithLimit with nonEmptyNoLimit", () => {
        assert.deepEqual(isNonEmptyWithLimit(nonEmptyNoLimitArgs), false)
    })
    it("test isNonEmptyWithLimit with nonEmptyWithLimit", () => {
        assert.deepEqual(isNonEmptyWithLimit(nonEmptyWithLimitArgs), true)
    })
})

describe("test the printmodel generation", () => {
    it("emptyNoLimit", () => {
        assert.deepEqual(emptyNoLimit(), emptyNoLimitModel)
    })
    it("emptyWithLimit", () => {
        assert.deepEqual(emptyWithLimit(), emptyWithLimitModel)
    })
    it("nonEmptyNoLimit", () => {
        assert.deepEqual(nonEmptyNoLimit(nonEmptyNoLimitArgs), nonEmptyNoLimitModel)
    })
    it("nonEmptyWithLimit", () => {
        assert.deepEqual(nonEmptyWithLimit(nonEmptyWithLimitArgs), nonEmptyWithLimitModel)
    })
})

describe("args to printmodel mapping", () => {
    it("emptyNoLimit", () => {
        assert.deepEqual(controller(emptyNoLimitArgs), emptyNoLimitModel)
    })
    it("emptyWithLimit", () => {
        assert.deepEqual(controller(emptyWithLimitsArgs), emptyWithLimitModel)
    })
    it("nonEmptyNoLimit", () => {
        assert.deepEqual(controller(nonEmptyNoLimitArgs), nonEmptyNoLimitModel)
    })
    it("nonEmptyWithLimit", () => {
        assert.deepEqual(controller(nonEmptyWithLimitArgs), nonEmptyWithLimitModel)
    })
})