var assert = chai.assert

describe("Testing predicates for isPenguinColor", () => {
	it("isPenguinColor with true", () => {
		assert.deepEqual(isPenguinColor(true), false)
	})
	it("isPenguinColor with false", () => {
		assert.deepEqual(isPenguinColor(false), false)
	})
	it("isPenguinColor with an empty object", () => {
		assert.deepEqual(isPenguinColor({}), false)
	})
	it("isPenguinColor with a random object", () => {
		assert.deepEqual(isPenguinColor({
			random: "random",
			object: "object",
			bye: 1.00,
			bool: true
		}), false)
	})
	it("isPenguinColor with a function", () => {
		assert.deepEqual(isPenguinColor((x) => x + 3), false)
	})
	it("isPenguinColor with null", () => {
		assert.deepEqual(isPenguinColor(null), false)
	})
	it("isPenguinColor with undefined", () => {
		assert.deepEqual(isPenguinColor(undefined), false)
	})
	it("isPenguinColor with a fraction", () => {
		assert.deepEqual(isPenguinColor(123.0001), false)
	})
	it("isPenguinColor with a string", () => {
		assert.deepEqual(isPenguinColor("somestring"), false)
	})
	it("isPenguinColor with red", () => {
		assert.deepEqual(isPenguinColor("red"), true)
	})
	it("isPenguinColor with brown", () => {
		assert.deepEqual(isPenguinColor("brown"), true)
	})
	it("isPenguinColor with black", () => {
		assert.deepEqual(isPenguinColor("black"), true)
	})
	it("isPenguinColor with white", () => {
		assert.deepEqual(isPenguinColor("white"), true)
	})
	it("isPenguinColor with green", () => {
		assert.deepEqual(isPenguinColor("green"), false)
	})
	it("isPenguinColor with yellow", () => {
		assert.deepEqual(isPenguinColor("yellow"), false)
	})
	it("isPenguinColor with an object that has a red key and \"red\" value", () => {
		assert.deepEqual(isPenguinColor({
			red: "red"
		}), false)
	})
})

describe("testing predicate for isPenguin", () => {
	it("isPenguin with true", () => {
		assert.deepEqual(isPenguin(true), false)
	})
	it("isPenguin false", () => {
		assert.deepEqual(isPenguin(false), false)
	})
	it("isPenguin empty object", () => {
		assert.deepEqual(isPenguin({}), false)
	})
	it("isPenguin with a random object", () => {
		assert.deepEqual(isPenguin({
			random: "random",
			object: "object",
			bye: 1.00,
			bool: true
		}), false)
	})
	it("isPenguin with add3 function", () => {
		assert.deepEqual(isPenguin((x) => x + 3), false)
	})
	it("isPenguin with null", () => {
		assert.deepEqual(isPenguin(null), false)
	})
	it("isPenguin with undefined", () => {
		assert.deepEqual(isPenguin(undefined), false)
	})
	it("isPenguin with fraction", () => {
		assert.deepEqual(isPenguin(123.0001), false)
	})
	it("isPenguin ", () => {
		assert.deepEqual(isPenguin("somestring"), false)
	})
	it("is an actual penguin", () => {
		assert.deepEqual(isPenguin({
			kind: "penguin",
			color: "red"
		}), true)
	})
	it("has an extra field height", () => {
		assert.deepEqual(isPenguin({
			kind: "penguin",
			color: "red",
			height: 12
		}), false)
	})
	it("does not have field kind", () => {
		assert.deepEqual(isPenguin({
			color: "red"
		}), false)
	})
	it("does not have field color", () => {
		assert.deepEqual(isPenguin({
			kind: "penguin"
		}), false)
	})
	it("the kind is not a string", () => {
		assert.deepEqual(isPenguin({
			kind: 1,
			color: "red"
		}), false)
	})
	it("the kind is the wrong string", () => {
		assert.deepEqual(isPenguin({
			kind: "1",
			color: "red"
		}), false)
	})
	it("color is not a penguin color", () => {
		assert.deepEqual(isPenguin({
			kind: "1",
			color: "yellow"
		}), false)
	})
})


describe("testing predicate for isFishes", () => {

	it("no kind field", () => {
		assert.deepEqual(isFishes({
			totalFishes: 2
		}), false)
	})
	it("the kind field is not a string", () => {
		assert.deepEqual(isFishes({
			kind: 1,
			totalFishes: 2
		}), false)
	})
	it("the kind field is not fishes", () => {
		assert.deepEqual(isFishes({
			kind: "1",
			totalFishes: 2
		}), false)
	})
	it("the totalFishes is not a number", () => {
		assert.deepEqual(isFishes({
			kind: "1",
			totalFishes: "2"
		}), false)
	})
	it("totalFishes is a fraction", () => {
		assert.deepEqual(isFishes({
			kind: "1",
			totalFishes: 0.1
		}), false)
	})
	it("total fishes is a negative integer", () => {
		assert.deepEqual(isFishes({
			kind: "1",
			totalFishes: -1
		}), false)
	})
	it("total fishes is a zero", () => {
		assert.deepEqual(isFishes({
			kind: "1",
			totalFishes: 0
		}), false)
	})
	it("isFishes on true", () => {
		assert.deepEqual(isFishes(true), false)
	})
	it("isFishes on false", () => {
		assert.deepEqual(isFishes(false), false)
	})
	it("isFishes on an empty object", () => {
		assert.deepEqual(isFishes({}), false)
	})
	it("isFishes on a random object", () => {
		assert.deepEqual(isFishes({
			random: "random",
			object: "object",
			bye: 1.00,
			bool: true
		}), false)
	})
	it("isFishes on add3 function", () => {
		assert.deepEqual(isFishes((x) => x + 3), false)
	})
	it("has an extra field color", () => {
		assert.deepEqual(isFishes({
			kind: "fish",
			totalFishes: 2,
			color: "blue"
		}), false)
	})
	it("has no totalFishes field", () => {
		assert.deepEqual(isFishes({
			kind: "fish"
		}), false)
	})
	it("isFishes on a fraction", () => {
		assert.deepEqual(isFishes(123.0001), false)
	})
	it("isFishes on a string", () => {
		assert.deepEqual(isFishes("somestring"), false)
	})
	it("isFishes on null", () => {
		assert.deepEqual(isFishes(null), false)
	})
	it("isFishes on undefined", () => {
		assert.deepEqual(isFishes(undefined), false)
	})
	it("on valid fishes", () => {
		assert.deepEqual(isFishes({
			kind: "fishes",
			totalFishes: 2
		}), true)
	})
	it("on valid fishes", () => {
		assert.deepEqual(isFishes({
			kind: "fishes",
			totalFishes: 1
		}), true)
	})

})

describe("tests isTileInfo predicates", () => {
	it("isTileInfo with true", () => {
		assert.deepEqual(isTileInfo(true), false)
	})
	it("isTileInfo with false", () => {
		assert.deepEqual(isTileInfo(false), false)
	})
	it("isTileInfo with an empty object", () => {
		assert.deepEqual(isTileInfo({}), false)
	})
	it("isTileInfo with a random object", () => {
		assert.deepEqual(isTileInfo({
			random: "random",
			object: "object",
			bye: 1.00,
			bool: true
		}), false)
	})
	it("isTileInfo with an add3 function", () => {
		assert.deepEqual(isTileInfo((x) => x + 3), false)
	})
	it("isTileInfo with null", () => {
		assert.deepEqual(isTileInfo(null), false)
	})
	it("isTileInfo with undefined", () => {
		assert.deepEqual(isTileInfo(undefined), false)
	})
	it("isTileInfo with a fraction", () => {
		assert.deepEqual(isTileInfo(123.0001), false)
	})
	it("isTileInfo with a string", () => {
		assert.deepEqual(isTileInfo("somestring"), false)
	})
	it("an actual isTileInfo", () => {
		assert.deepEqual(isTileInfo({
			size: 0,
			maxElements: 0
		}), true)
	})
	it("isTileInfo with exra fields", () => {
		assert.deepEqual(isTileInfo({
			size: 0,
			maxElements: 0,
			another: 9
		}), false)
	})
	it("isTileInfo with no size field", () => {
		assert.deepEqual(isTileInfo({
			maxElements: 0
		}), false)
	})
	it("isTileInfo with no maxElements field", () => {
		assert.deepEqual(isTileInfo({
			size: 0
		}), false)
	})
	it("isTileInfo with undefined for size", () => {
		assert.deepEqual(isTileInfo({
			size: undefined,
			maxElements: 0
		}), false)
	})
	it("isTileInfo with a null for maxElements", () => {
		assert.deepEqual(isTileInfo({
			size: undefined,
			maxElements: null
		}), false)
	})
	it("isTileInfo with a negative integer for size", () => {
		assert.deepEqual(isTileInfo({
			size: -1,
			maxElements: 0
		}), false)
	})
	it("isTileInfo with a fraction for size", () => {
		assert.deepEqual(isTileInfo({
			size: 1.2,
			maxElements: 0
		}), false)
	})
	it("isTileInfo with a negative integer for maxElements", () => {
		assert.deepEqual(isTileInfo({
			size: 0,
			maxElements: -1
		}), false)
	})
	it("isTileInfo with a fraction for maxElements", () => {
		assert.deepEqual(isTileInfo({
			size: 0,
			maxElements: 1.2
		}), false)
	})
})


describe("testing predicate on unusablespace", () => {
	it("actual isUnusableSpace", () => {
		assert.deepEqual(isUnusableSpace({
			kind: "unusableSpace"
		}), true)
	})
	it("isUnusableSpace with kind as undefined", () => {
		assert.deepEqual(isUnusableSpace({
			kind: undefined
		}), false)
	})
	it("isUnusableSpace with kind as null", () => {
		assert.deepEqual(isUnusableSpace({
			kind: null
		}), false)
	})
	it("isUnusableSpace with an extra field", () => {
		assert.deepEqual(isUnusableSpace({
			kind: null,
			g: ""
		}), false)
	})
	it("isUnusableSpace with kind as a number", () => {
		assert.deepEqual(isUnusableSpace({
			kind: 1
		}), false)
	})
	it("isUnusableSpace with kind as a string that's not unusableSpace", () => {
		assert.deepEqual(isUnusableSpace({
			kind: "null"
		}), false)
	})
	it("isUnusableSpace on true", () => {
		assert.deepEqual(isUnusableSpace(true), false)
	})
	it("isUnusableSpace on false", () => {
		assert.deepEqual(isUnusableSpace(false), false)
	})
	it("isUnusableSpace on {}", () => {
		assert.deepEqual(isUnusableSpace({}), false)
	})
	it("isUnusableSpace on randomobj", () => {
		assert.deepEqual(isUnusableSpace({
			random: "random",
			object: "object",
			bye: 1.00,
			bool: true
		}), false)
	})
	it("isUnusableSpace on add3", () => {
		assert.deepEqual(isUnusableSpace((x) => x + 3), false)
	})
	it("isUnusableSpace on null", () => {
		assert.deepEqual(isUnusableSpace(null), false)
	})
	it("isUnusableSpace on undefined", () => {
		assert.deepEqual(isUnusableSpace(undefined), false)
	})
	it("isUnusableSpace on 123.000", () => {
		assert.deepEqual(isUnusableSpace(123.0001), false)
	})
	it("isUnusableSpace on \"somestring\"", () => {
		assert.deepEqual(isUnusableSpace("somestring"), false)
	})
})


describe("testing the predicate for Tile", () => {
	it("isTile with true", () => {
		assert.deepEqual(isTile(true), false)
	})
	it("isTile with false", () => {
		assert.deepEqual(isTile(false), false)
	})
	it("isTile with an empty object", () => {
		assert.deepEqual(isTile({}), false)
	})
	it("isTile with a random object", () => {
		assert.deepEqual(isTile({
			random: "random",
			object: "object",
			bye: 1.00,
			bool: true
		}), false)
	})
	it("isTile with an add3 function", () => {
		assert.deepEqual(isTile((x) => x + 3), false)
	})
	it("isTile with null", () => {
		assert.deepEqual(isTile(null), false)
	})
	it("isTile with undefined", () => {
		assert.deepEqual(isTile(undefined), false)
	})
	it("isTile with a fraction", () => {
		assert.deepEqual(isTile(123.0001), false)
	})
	it("isTile with a string", () => {
		assert.deepEqual(isTile("somestring"), false)
	})
	it("actual tile with false for occupiedBy", () => {
		assert.deepEqual(isTile({
			tileInfo: {
				size: 0,
				maxElements: 0
			},
			occupiedBy: false
		}), true)
	})
	it("tile that's occupied by true", () => {
		assert.deepEqual(isTile({
			tileInfo: {
				size: 0,
				maxElements: 0
			},
			occupiedBy: true
		}), false)
	})
	it("actual tile with a valid Fishes for occupiedBy", () => {
		assert.deepEqual(isTile({
			tileInfo: {
				size: 0,
				maxElements: 0
			},
			occupiedBy: {
				kind: "fishes",
				totalFishes: 1
			}
		}), true)
	})
	it("actual tile with a valid Penguin for occupiedBy", () => {
		assert.deepEqual(isTile({
			tileInfo: {
				size: 0,
				maxElements: 0
			},
			occupiedBy: {
				kind: "penguin",
				color: "red"
			}
		}), true)
	})
	it("tile with an extra field", () => {
		assert.deepEqual(isTile({
			tileInfo: {
				size: 0,
				maxElements: 0
			},
			occupiedBy: {
				kind: "penguin",
				color: "red"
			},
			extra: "4"
		}), false)
	})
})

describe("testing the predicate for usablespace", () => {
	it("isUsableSpace with true", () => {
		assert.deepEqual(isUsableSpace(true), false)
	})
	it("isUsableSpace with false", () => {
		assert.deepEqual(isUsableSpace(false), false)
	})
	it("isUsableSpace with an empty object", () => {
		assert.deepEqual(isUsableSpace({}), false)
	})
	it("isUsableSpace with a random object", () => {
		assert.deepEqual(isUsableSpace({
			random: "random",
			object: "object",
			bye: 1.00,
			bool: true
		}), false)
	})
	it("isUsableSpace with an add3 function", () => {
		assert.deepEqual(isUsableSpace((x) => x + 3), false)
	})
	it("isUsableSpace with null", () => {
		assert.deepEqual(isUsableSpace(null), false)
	})
	it("isUsableSpace with undefined", () => {
		assert.deepEqual(isUsableSpace(undefined), false)
	})
	it("isUsableSpace with a fraction", () => {
		assert.deepEqual(isUsableSpace(123.0001), false)
	})
	it("isUsableSpace with a string", () => {
		assert.deepEqual(isUsableSpace("somestring"), false)
	})
	it("actual usableSpace with false", () => {
		assert.deepEqual(isUsableSpace({
			kind: "usableSpace",
			occupiedBy: false
		}), true)
	})
	it("actual usableSpace with false tile", () => {
		assert.deepEqual(isUsableSpace({
			kind: "usableSpace",
			occupiedBy: {
				tileInfo: {
					size: 0,
					maxElements: 0
				},
				occupiedBy: false
			}
		}), true)
	})
	it("actual usableSpace with true tile", () => {
		assert.deepEqual(isUsableSpace({
			kind: "usableSpace",
			occupiedBy: {
				tileInfo: {
					size: 0,
					maxElements: 0
				},
				occupiedBy: true
			}
		}), false)
	})
	it("actual usableSpace with Fishes tile", () => {
		assert.deepEqual(isUsableSpace({
			kind: "usableSpace",
			occupiedBy: {
				tileInfo: {
					size: 0,
					maxElements: 0
				},
				occupiedBy: {
					kind: "fishes",
					totalFishes: 1
				}
			}
		}), true)
	})
	it("actual usableSpace with Penguin tile", () => {
		assert.deepEqual(isUsableSpace({
			kind: "usableSpace",
			occupiedBy: {
				tileInfo: {
					size: 0,
					maxElements: 0
				},
				occupiedBy: {
					kind: "penguin",
					color: "red"
				}
			}
		}), true)
	})
})
