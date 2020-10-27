describe("inputBoardToIntermediateBoard tests", () => {
  it("even # of rows", () => {
    assert.deepEqual(inputBoardToIntermediateBoard(inputBoardExample1), boardExample1);
  })
  it("odd # of rows", () => {
    assert.deepEqual(inputBoardToIntermediateBoard(inputBoardExample2), boardExample2);
  })
})

describe("tests for even board helper", () => {
  it("on [[1,2,3] [4,0,5]]", () => {
    assert.deepEqual(evenInputBoardToIntermediateBoard(inputBoardExample1), boardExample1);
  })
})

describe("tests for odd board helper", () => {
  it("on [[1, 2, 3], [4, 0, 5], [1, 1, 0]]", () => {
    assert.deepEqual(oddInputBoardToIntermediateBoard(inputBoardExample2), boardExample2);
  })
})

describe("interleave tests", () => {
  it("on empty arrays", () => {
    assert.deepEqual(interleaveRows([], []), [])
  })
  it("on [1, 2], [3, 4]", () => {
    assert.deepEqual(interleaveRows([1, 2], [3, 4]), [1, 3, 2, 4])
  })
  it("on [1, 2, 3], [4, 0, 5]", () => {
    assert.deepEqual(interleaveRows([1, 2, 3], [4, 0, 5]), [1, 4, 2, 0, 3, 5])
  })
})

describe("test the total reachable tiles form Board-Posn", () => {
  it("for example 1", () => {
    assert.deepEqual(getTotalReachableFromBoardPosn(exampleBoardPosn1), 1)
  })
  it("for example 2", () => {
    assert.deepEqual(getTotalReachableFromBoardPosn(exampleBoardPosn2), 3)
  })
})