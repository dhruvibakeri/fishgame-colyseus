import { assert } from 'chai';
import { array2DFill, dimToBinBoard } from './dim-to-bin-board';

describe("dimension to binaryBoard", () => {
  it("2 by 1", () => { assert.deepEqual(dimToBinBoard(2, 1), [[1, 1]]) })
  it("2 by 2", () => { assert.deepEqual(dimToBinBoard(2, 2), [[1, 1, 1, 1]]) })
  it("2 by 3", () => { assert.deepEqual(dimToBinBoard(2, 3), [[1, 1, 1, 1, 1, 1]]) })
  it("2 by 4", () => { assert.deepEqual(dimToBinBoard(2, 4), [[1, 1, 1, 1, 1, 1, 1, 1]]) })
  it("2 by 5", () => { assert.deepEqual(dimToBinBoard(2, 5), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
  it("2 by 6", () => { assert.deepEqual(dimToBinBoard(2, 6), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
  it("3 by 1", () => { assert.deepEqual(dimToBinBoard(3, 1), [[1, 1], [1, 0]]) })
  it("3 by 2", () => { assert.deepEqual(dimToBinBoard(3, 2), [[1, 1, 1, 1], [1, 0, 1, 0]]) })
  it("3 by 3", () => { assert.deepEqual(dimToBinBoard(3, 3), [[1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0]]) })
  it("3 by 4", () => { assert.deepEqual(dimToBinBoard(3, 4), [[1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0]]) })
  it("3 by 5", () => { assert.deepEqual(dimToBinBoard(3, 5), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]]) })
  it("3 by 6", () => { assert.deepEqual(dimToBinBoard(3, 6), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]]) })
  it("4 by 1", () => { assert.deepEqual(dimToBinBoard(4, 1), [[1, 1], [1, 1]]) })
  it("4 by 2", () => { assert.deepEqual(dimToBinBoard(4, 2), [[1, 1, 1, 1], [1, 1, 1, 1]]) })
  it("4 by 3", () => { assert.deepEqual(dimToBinBoard(4, 3), [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]) })
  it("4 by 4", () => { assert.deepEqual(dimToBinBoard(4, 4), [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]]) })
  it("4 by 5", () => { assert.deepEqual(dimToBinBoard(4, 5), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
  it("4 by 6", () => { assert.deepEqual(dimToBinBoard(4, 6), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
  it("5 by 1", () => { assert.deepEqual(dimToBinBoard(5, 1), [[1, 1], [1, 1], [1, 0]]) })
  it("5 by 2", () => { assert.deepEqual(dimToBinBoard(5, 2), [[1, 1, 1, 1], [1, 1, 1, 1], [1, 0, 1, 0]]) })
  it("5 by 3", () => { assert.deepEqual(dimToBinBoard(5, 3), [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0]]) })
  it("5 by 4", () => { assert.deepEqual(dimToBinBoard(5, 4), [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0]]) })
  it("5 by 5", () => { assert.deepEqual(dimToBinBoard(5, 5), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]]) })
  it("5 by 6", () => { assert.deepEqual(dimToBinBoard(5, 6), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]]) })
  it("6 by 1", () => { assert.deepEqual(dimToBinBoard(6, 1), [[1, 1], [1, 1], [1, 1]]) })
  it("6 by 2", () => { assert.deepEqual(dimToBinBoard(6, 2), [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]) })
  it("6 by 3", () => { assert.deepEqual(dimToBinBoard(6, 3), [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]) })
  it("6 by 4", () => { assert.deepEqual(dimToBinBoard(6, 4), [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]]) })
  it("6 by 5", () => { assert.deepEqual(dimToBinBoard(6, 5), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
  it("6 by 6", () => { assert.deepEqual(dimToBinBoard(6, 6), [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]) })
})

describe("test 2d array gen", () => {
  it("1 by 1", () => {
    assert.deepEqual(array2DFill(1, 1, 0), [[0]])
  })
  it("2 by 3", () => {
    assert.deepEqual(array2DFill(2, 3, 0), [[0, 0, 0], [0, 0, 0]])
  })
  it("3 by 2", () => {
    assert.deepEqual(array2DFill(3, 2, 0), [[0, 0], [0, 0], [0, 0]])
  })
})