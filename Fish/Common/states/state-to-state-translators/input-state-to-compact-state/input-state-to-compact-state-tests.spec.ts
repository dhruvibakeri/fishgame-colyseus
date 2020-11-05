import { assert } from "chai";
import { CBoard } from "../../compact-state/compact-state-data-definition";
import { InputBoard } from "../../input-state/input-state-data-definition";
import { inputBoardToCompactBoard, interleave, padInputBoard } from "./input-state-to-compact-state";
import _ from 'lodash';



const U = "unusable"

const input_board_1: InputBoard = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
const compact_board_1: CBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, U, 0, U, 0, U, 0, U, 0, U]
]

const input_board_2: InputBoard = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
const compacT_board_2: CBoard = [
  [0, 0, 0, 1, 0, 0],
  [0, U, 0, U, 0, U]
]

const input_board_3: InputBoard = [
  [0, 0, 1],
  [1, 1, 1],
  [0, 2, 0],
  [1, 0, 0],
  [1, 1, 4]
]
const compact_board_3: CBoard = [
  [0, 1, 0, 1, 1, 1],
  [0, 1, 2, 0, 0, 0],
  [1, U, 1, U, 4, U]
]

const input_board_4: InputBoard = [
  [0, 0, 2, 4, 5],
  [1, 1, 1, 4],
  [3, 0, 0, 5],
  [4, 4, 3, 2],
  [1, 2, 1, 4, 5]
]
const compact_board_4: CBoard = [
  [0, 1, 0, 1, 2, 1, 4, 4, 5, 0],
  [3, 4, 0, 4, 0, 3, 5, 2, 0, 0],
  [1, U, 2, U, 1, U, 4, U, 5, U]
]

const input_board_5: InputBoard = [
  [0, 0],
  [1, 2, 3, 4, 4, 5, 2, 1],
  [0, 0, 0]
]

const compact_board_5: CBoard = [
  [0, 1, 0, 2, 0, 3, 0, 4, 0, 4, 0, 5, 0, 2, 0, 1],
  [0, U, 0, U, 0, U, 0, U, 0, U, 0, U, 0, U, 0, U]
]

const input_board_6: InputBoard = [
  [0, 1, 2, 3, 4],
  [2, 3, 4, 5],
  [1, 2, 0, 0, 0],
  [0, 0, 0, 0]
]

const compact_board_6: CBoard = [
  [0, 2, 1, 3, 2, 4, 3, 5, 4, 0],
  [1, 0, 2, 0, 0, 0, 0, 0, 0, 0]
]


const input_board_7: InputBoard = [
  [0, 1, 3],
  [1, 3, 3],
  [0, 1, 3]
]

const compact_board_7: CBoard = [
  [0, 1, 1, 3, 3, 3],
  [0, U, 1, U, 3, U]
]

const input_board_8: InputBoard = [
  [0, 2, 3, 3],
  [1, 1, 0, 4],
  [0, 2, 4, 2],
  [3, 5, 0, 4],
  [1, 2, 3, 3],
  [0, 2, 4, 4]
]

const compact_board_8: CBoard = [
  [0, 1, 2, 1, 3, 0, 3, 4],
  [0, 3, 2, 5, 4, 0, 2, 4],
  [1, 0, 2, 2, 3, 4, 3, 4]
]

const input_board_9: InputBoard = [
  [0, 2, 3, 4, 5],
  [1, 0, 3, 4, 5],
  [1, 2, 3, 0, 5],
  [1, 2, 3, 4, 0]
]

const compact_board_9: CBoard = [
  [0, 1, 2, 0, 3, 3, 4, 4, 5, 5],
  [1, 1, 2, 2, 3, 3, 0, 4, 5, 0]
]

const input_board_10: InputBoard = [
  [0, 3, 0, 0],
  [1, 0],
  [1, 2, 3]
]

const compact_board_10: CBoard = [
  [0, 1, 3, 0, 0, 0, 0, 0],
  [1, U, 2, U, 3, U, 0, U]
]


describe("Tests for InputBoard to CompactBoard translation", () => {
  it("input_board_1 --> compact_board_1", () => {
    assert.deepEqual(inputBoardToCompactBoard(input_board_1), compact_board_1)
  })
  it("input_board_2 --> compacT_board_2", () => {
    assert.deepEqual(inputBoardToCompactBoard(input_board_2), compacT_board_2)
  })
  it("input_board_3 --> compact_board_3", () => {
    assert.deepEqual(inputBoardToCompactBoard(input_board_3), compact_board_3)
  })
  it("input_board_4 --> compact_board_4", () => {
    assert.deepEqual(inputBoardToCompactBoard(input_board_4), compact_board_4)
  })
  it("input_board_5 --> compact_board_5", () => {
    assert.deepEqual(inputBoardToCompactBoard(input_board_5), compact_board_5)
  })
  it("input_board_6 --> compact_board_6", () => {
    assert.deepEqual(inputBoardToCompactBoard(input_board_6), compact_board_6)
  })
  it("input_board_7 --> compact_board_7", () => {
    assert.deepEqual(inputBoardToCompactBoard(input_board_7), compact_board_7)
  })
  it("input_board_8 --> compact_board_8", () => {
    assert.deepEqual(inputBoardToCompactBoard(input_board_8), compact_board_8)
  })
  it("input_board_9 --> compact_board_9", () => {
    assert.deepEqual(inputBoardToCompactBoard(input_board_9), compact_board_9)
  })
  it("input_board_10 --> compact_board_10", () => {
    assert.deepEqual(inputBoardToCompactBoard(input_board_10), compact_board_10)
  })
})

const padded_input_board_4: InputBoard = [
  [0, 0, 2, 4, 5],
  [1, 1, 1, 4, 0],
  [3, 0, 0, 5, 0],
  [4, 4, 3, 2, 0],
  [1, 2, 1, 4, 5]
]
const padded_input_board_5: InputBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 3, 4, 4, 5, 2, 1],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
const padded_input_board_6: InputBoard = [
  [0, 1, 2, 3, 4],
  [2, 3, 4, 5, 0],
  [1, 2, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const padded_input_board_10: InputBoard = [
  [0, 3, 0, 0],
  [1, 0, 0, 0],
  [1, 2, 3, 0]
]

describe("Tests for padding an input board", () => {
  it("input_board_4 --> padded_input_board_4", () => {
    assert.deepEqual(padInputBoard(input_board_4), padded_input_board_4)
  })
  it("input_board_5 --> padded_input_board_5", () => {
    assert.deepEqual(padInputBoard(input_board_5), padded_input_board_5)
  })
  it("input_board_6 --> padded_input_board_6", () => {
    assert.deepEqual(padInputBoard(input_board_6), padded_input_board_6)
  })
  it("input_board_10 --> padded_input_board_10", () => {
    assert.deepEqual(padInputBoard(input_board_10), padded_input_board_10)
  })
})

describe("interleaving tests", () => {
  it("interleaving empty lists", () => {
    assert.deepEqual(interleave([], []), [])
  })
  it("interleaving 2 element lists", () => {
    assert.deepEqual(interleave([1, 2], [3, 4]), [1, 3, 2, 4])
  })
  it("interleave 3-elem list", () => {
    assert.deepEqual(interleave([1, 2, 3], [4, 0, 5]), [1, 4, 2, 0, 3, 5])
  })
})