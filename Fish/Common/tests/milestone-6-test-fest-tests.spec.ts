import {
    assert
  } from 'chai';
  import {
    xStrategy
  } from '../executables/xStrategy/xStrategy'
import { DepthState, InputAction } from '../states/input-state/input-state-data-definition';

const ex1_in : DepthState = [2,{"board":[[2,2],[2,2],[0,0],[0,0],[1,1],[1,1],[1,0]],"players":[{"places":[[4,1],[4,0],[1,0],[0,0]],"score":0,"color":"red"},{"places":[[6,0],[5,1],[5,0],[0,1]],"score":0,"color":"white"}]}]
const ex1_out : InputAction = false
const ex2_in : DepthState  = [2,{"board":[[2,2,2],[2,2,2],[0,0,0],[0,0,0],[1,1,1],[1,1,0]],"players":[{"places":[[4,2],[4,1],[4,0],[1,0]],"score":0,"color":"red"},{"places":[[5,1],[5,0],[1,1],[0,1]],"score":0,"color":"white"}]}]
const ex2_out : InputAction = [[1,0],[0,0]]
const ex3_in  : DepthState = [2,{"board":[[3,2,2],[2,4,0],[0,0,0],[0,0,0],[1,1,1],[1,1,0]],"players":[{"places":[[4,2],[4,1],[4,0],[1,0]],"score":0,"color":"red"},{"places":[[5,1],[5,0],[1,1],[0,1]],"score":0,"color":"white"}]}]
const ex3_out : InputAction = [[1,0],[0,0]]
const ex4_in  : DepthState = [1,{"board":[[1,3,4,2,2,4,2,1,5,5,2,4,4,3,5,4,1,3,1,1,3,2,3,5,5]],"players":[{"places":[[0,6],[0,4],[0,2],[0,0]],"score":0,"color":"red"},{"places":[[0,7],[0,5],[0,3],[0,1]],"score":0,"color":"white"}]}]
const ex4_out : InputAction = false
const ex5_in : DepthState = [1,{"board":[[1],[0],[0],[1],[1],[1],[1],[1],[1],[1],[1]],"players":[{"places":[[4,0],[3,0]],"score":0,"color":"red"},{"places":[[6,0],[5,0]],"score":0,"color":"white"},{"places":[[8,0],[7,0]],"score":0,"color":"brown"},{"places":[[10,0],[9,0]],"score":0,"color":"black"}]}]
const ex5_out: InputAction  = false

describe("Milestone 6 tests", () => {
    it("ex1_in ->  ex1_out", () => {
      assert.deepEqual(xStrategy(ex1_in), ex1_out)
    })
    it("ex2_in ->  ex2_out", () => {
      assert.deepEqual(xStrategy(ex2_in), ex2_out)
    })
    it("ex3_in ->  ex3_out", () => {
      assert.deepEqual(xStrategy(ex3_in), ex3_out)
    })
    it("ex4_in ->  ex4_out", () => {
      assert.deepEqual(xStrategy(ex4_in), ex4_out)
    })
    it("ex5_in ->  ex6_out", () => {
      assert.deepEqual(xStrategy(ex5_in), ex5_out)
    })
}
)