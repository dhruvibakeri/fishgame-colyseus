import {
  assert
} from 'chai';
import {
  xStrategy
} from '../executables/xStrategy/xStrategy'
import { DepthState, InputAction } from '../states/input-state/input-state-data-definition';


const ex1_in: DepthState = [2, { "board": [[2, 2], [2, 2], [0, 0], [0, 0], [1, 1], [1, 1], [1, 0]], "players": [{ "places": [[4, 1], [4, 0], [1, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[6, 0], [5, 1], [5, 0], [0, 1]], "score": 0, "color": "white" }] }]
const ex1_out: InputAction = false
const ex10_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [3, 0], [0, 1]] }, { "color": "brown", "score": 0, "places": [[0, 2], [2, 1], [3, 1], [1, 1]] }], "board": [[2, 5, 4], [4, 3, 4], [3, 5, 3], [3, 3, 1]] }]
const ex10_out: InputAction = [[0, 1], [1, 0]]
const ex100_in: DepthState = [2, { "players": [{ "color": "white", "score": 1, "places": [[1, 2], [0, 2], [1, 4], [0, 4]] }, { "color": "red", "score": 1, "places": [[1, 1], [2, 1], [4, 3], [2, 4]] }], "board": [[1, 3, 4, 5, 3], [2, 3, 4, 5, 3], [2, 3, 0, 3, 3], [3, 3, 3, 3, 4], [2, 3, 5, 3, 3]] }]
const ex100_out: InputAction = [[1, 2], [0, 3]]
const ex101_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [3, 2], [2, 2]] }, { "color": "brown", "score": 0, "places": [[3, 0], [1, 2], [3, 1]] }], "board": [[3, 3, 1], [1, 5, 3], [2, 0, 1, 0, 1], [1, 1, 2]] }]
const ex101_out: InputAction = [[0, 0], [2, 0]]
const ex102_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [3, 2], [2, 2]] }, { "color": "brown", "score": 0, "places": [[3, 0], [1, 2], [3, 1]] }], "board": [[3, 3, 1], [1, 5, 3], [2, 0, 1, 0, 1], [1, 1, 2]] }]
const ex102_out: InputAction = [[0, 0], [2, 0]]
const ex103_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [3, 2], [2, 2]] }, { "color": "brown", "score": 0, "places": [[3, 0], [1, 2], [3, 1]] }], "board": [[3, 3, 1], [1, 0, 3], [0, 0, 1, 0, 1], [1, 1, 2]] }]
const ex103_out: InputAction = false
const ex104_in: DepthState = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex104_out: InputAction = false
const ex105_in: DepthState = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }]
const ex105_out: InputAction = [[0, 0], [1, 0]]
const ex106_in: DepthState = [2, { "players": [{ "places": [[0, 0], [1, 0], [4, 0]], "score": 0, "color": "red" }, { "places": [[0, 1], [3, 0], [5, 0]], "score": 0, "color": "white" }, { "places": [[2, 1], [3, 1], [4, 1]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex106_out: InputAction = [[0, 0], [2, 0]]
const ex107_in: DepthState = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex107_out: InputAction = false
const ex108_in: DepthState = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }]
const ex108_out: InputAction = [[0, 0], [1, 0]]
const ex109_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [3, 0], [4, 0], [5, 0]] }, { "color": "black", "score": 0, "places": [[0, 1], [3, 1], [4, 1], [5, 1]] }], "board": [[1, 1], [0, 1], [0, 0], [1, 1], [1, 1], [1, 1]] }]
const ex109_out: InputAction = false
const ex11_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [3, 0], [0, 1]] }, { "color": "brown", "score": 0, "places": [[0, 2], [2, 1], [3, 1], [1, 1]] }], "board": [[2, 5, 4], [4, 3, 4], [3, 5, 3], [3, 3, 1]] }]
const ex11_out: InputAction = [[0, 1], [1, 0]]
const ex110_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [2, 0], [8, 0], [9, 0]] }, { "color": "brown", "score": 0, "places": [[5, 0], [10, 0], [11, 0], [12, 0]] }], "board": [[0], [1], [1], [1], [5], [1], [0], [0], [1], [1], [1], [1], [1]] }]
const ex110_out: InputAction = [[1, 0], [3, 0]]
const ex111_in: DepthState = [1, { "players": [{ "color": "red", "score": 3, "places": [[1, 2], [0, 4], [3, 4]] }, { "color": "black", "score": 4, "places": [[0, 0], [1, 4], [4, 4]] }, { "color": "white", "score": 5, "places": [[4, 2], [2, 4], [1, 3]] }], "board": [[1, 2, 1, 0, 1], [5, 0, 4, 4, 3, 2], [3, 1, 3, 0, 1], [0, 3, 5, 0, 3], [3, 5, 2, 0, 3]] }]
const ex111_out: InputAction = [[1, 2], [0, 2]]
const ex112_in: DepthState = [2, { "players": [{ "color": "red", "score": 3, "places": [[1, 2], [0, 4], [3, 4]] }, { "color": "black", "score": 4, "places": [[0, 0], [1, 4], [4, 4]] }, { "color": "white", "score": 5, "places": [[4, 2], [2, 4], [1, 3]] }], "board": [[1, 2, 1, 0, 1], [5, 0, 4, 4, 3, 2], [3, 1, 3, 0, 1], [0, 3, 5, 0, 3], [3, 5, 2, 0, 3]] }]
const ex112_out: InputAction = [[1, 2], [2, 2]]
const ex113_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[4, 3], [4, 1]] }, { "color": "black", "score": 15, "places": [[0, 4], [0, 0]] }, { "color": "white", "score": 5, "places": [[1, 1], [3, 4]] }, { "color": "brown", "score": 8, "places": [[3, 1], [0, 3]] }], "board": [[1, 0, 5, 1, 1], [0, 1, 5], [0, 0, 1], [0, 1, 5, 5, 1], [0, 5, 0, 1]] }]
const ex113_out: InputAction = [[4, 3], [2, 2]]
const ex114_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [0, 3]] }, { "color": "black", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1]] }]
const ex114_out: InputAction = false
const ex115_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }, { "color": "black", "score": 0, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]] }]
const ex115_out: InputAction = [[1, 0], [0, 0]]
const ex116_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }, { "color": "black", "score": 0, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1, 1], [1, 2, 3, 4, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]] }]
const ex116_out: InputAction = [[1, 3], [0, 3]]
const ex117_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }, { "color": "black", "score": 0, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1, 1], [1, 2, 3, 4, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]] }]
const ex117_out: InputAction = [[1, 2], [0, 2]]
const ex118_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [0, 3]] }, { "color": "black", "score": 0, "places": [[5, 0], [5, 1], [5, 2], [5, 3]] }], "board": [[1, 2, 3, 4], [1, 2, 3, 3], [1, 1, 1, 4], [1, 1, 1, 4], [0, 0, 0, 0], [1, 1, 1, 1]] }]
const ex118_out: InputAction = [[0, 3], [2, 3]]
const ex119_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [0, 2]] }, { "color": "brown", "score": 0, "places": [[3, 0], [1, 2]] }, { "color": "black", "score": 15, "places": [[1, 1], [2, 2]] }, { "color": "white", "score": 99, "places": [[2, 0], [0, 1]] }], "board": [[0, 2, 2], [3, 4, 5], [4, 3, 2], [2, 2, 3], [4, 4, 4, 4], [5, 5]] }]
const ex119_out: InputAction = [[1, 0], [4, 2]]
const ex12_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[3, 0], [0, 1]] }, { "color": "black", "score": 0, "places": [[3, 1], [1, 1]] }, { "color": "brown", "score": 0, "places": [[0, 2], [2, 1]] }], "board": [[2, 5, 4], [0, 3], [3, 5], [3, 3]] }]
const ex12_out: InputAction = false
const ex120_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 1], [2, 2]] }, { "color": "brown", "score": 0, "places": [[0, 1], [1, 0], [2, 0]] }, { "color": "black", "score": 15, "places": [[2, 1], [1, 2], [0, 2]] }], "board": [[1, 2, 3], [4, 5, 1], [2, 3, 4]] }]
const ex120_out: InputAction = false
const ex121_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[3, 0], [1, 0], [1, 2], [2, 1]] }, { "color": "brown", "score": 0, "places": [[3, 2], [0, 2], [0, 1], [0, 0]] }], "board": [[3, 1, 2], [2, 0, 4], [1, 2, 0], [4, 5, 4]] }]
const ex121_out: InputAction = [[3, 0], [2, 0]]
const ex122_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[3, 2], [4, 2], [4, 1], [4, 0]] }, { "color": "brown", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [1, 0]] }], "board": [[2, 3, 4], [1, 0, 4], [1, 2, 2], [4, 3, 2], [5, 5, 5]] }]
const ex122_out: InputAction = [[4, 0], [2, 0]]
const ex123_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[4, 0], [4, 2], [4, 1]] }, { "color": "brown", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 99, "places": [[2, 2], [1, 0], [2, 3]] }], "board": [[1, 2, 3], [1], [2, 3, 4, 5], [0], [3, 4, 4]] }]
const ex123_out: InputAction = [[4, 1], [2, 1]]
const ex124_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [0, 2], [1, 1]] }, { "color": "black", "score": 0, "places": [[0, 1], [1, 2], [2, 1], [2, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [0, 1, 1], [0, 0, 0]] }]
const ex124_out: InputAction = false
const ex125_in: DepthState = [2, { "players": [{ "color": "black", "score": 0, "places": [[0, 2], [1, 2], [2, 2], [3, 2]] }, { "color": "red", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex125_out: InputAction = false
const ex126_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }, { "color": "black", "score": 0, "places": [[0, 2], [1, 2], [2, 2], [3, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex126_out: InputAction = [[0, 1], [1, 0]]
const ex127_in: DepthState = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0], [6, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0], [6, 1]], "score": 0, "color": "white" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 0]] }]
const ex127_out: InputAction = false
const ex128_in: DepthState = [2, { "players": [{ "places": [[0, 2], [0, 1], [0, 0], [2, 1]], "score": 0, "color": "red" }, { "places": [[1, 1], [1, 2], [1, 0], [2, 0]], "score": 0, "color": "white" }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [1, 1, 0]] }]
const ex128_out: InputAction = false
const ex129_in: DepthState = [2, { "players": [{ "places": [[0, 2], [0, 1], [0, 0], [2, 1]], "score": 0, "color": "red" }, { "places": [[6, 0], [6, 1], [6, 2], [5, 0]], "score": 0, "color": "white" }], "board": [[1, 1, 1], [0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0], [1, 1, 1]] }]
const ex129_out: InputAction = false
const ex13_in: DepthState = [2, { "players": [{ "color": "red", "score": 100, "places": [[0, 0], [1, 0], [2, 0]] }, { "color": "black", "score": 10, "places": [[0, 1], [2, 1], [1, 1]] }, { "color": "white", "score": 100, "places": [[0, 2], [2, 2], [1, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [4, 1, 1], [2, 5, 1]] }]
const ex13_out: InputAction = [[1, 0], [3, 0]]
const ex130_in: DepthState = [2, { "players": [{ "places": [[1, 1], [0, 1], [0, 0], [1, 0]], "score": 0, "color": "white" }, { "places": [[6, 0], [6, 1], [6, 2], [5, 0]], "score": 0, "color": "red" }], "board": [[1, 1, 0], [1, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0], [1, 1, 1]] }]
const ex130_out: InputAction = false
const ex131_in: DepthState = [2, { "players": [{ "places": [[0, 0], [0, 1], [0, 2], [1, 0]], "score": 0, "color": "white" }, { "places": [[1, 1], [1, 2], [2, 0], [2, 1]], "score": 0, "color": "red" }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 0]] }]
const ex131_out: InputAction = false
const ex132_in: DepthState = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex132_out: InputAction = false
const ex133_in: DepthState = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }]
const ex133_out: InputAction = [[0, 0], [1, 0]]
const ex134_in: DepthState = [2, { "players": [{ "color": "white", "score": 0, "places": [[5, 0], [4, 0], [3, 0], [2, 0]] }, { "color": "red", "score": 2, "places": [[0, 1], [5, 1], [4, 1], [3, 1]] }], "board": [[1, 2], [3, 0], [2, 1], [1, 1], [1, 1], [1, 1]] }]
const ex134_out: InputAction = [[2, 0], [1, 0]]
const ex135_in: DepthState = [2, { "players": [{ "color": "white", "score": 0, "places": [[0, 0], [1, 0], [0, 1], [1, 1]] }, { "color": "red", "score": 2, "places": [[4, 0], [5, 0], [4, 1], [5, 1]] }], "board": [[1, 1], [1, 1], [5, 2], [3, 1], [1, 1], [1, 1]] }]
const ex135_out: InputAction = [[1, 0], [3, 0]]
const ex136_in: DepthState = [2, { "players": [{ "color": "red", "score": 4, "places": [[0, 0], [0, 1], [0, 2], [0, 3]] }, { "color": "white", "score": 4, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 5, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]] }]
const ex136_out: InputAction = [[0, 1], [2, 2]]
const ex137_in: DepthState = [2, { "players": [{ "color": "red", "score": 4, "places": [[1, 1], [1, 2], [2, 1], [2, 2]] }, { "color": "white", "score": 4, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]] }]
const ex137_out: InputAction = [[1, 1], [0, 1]]
const ex138_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }, { "color": "white", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }], "board": [[4, 4, 4], [4, 4, 4], [4, 4, 4], [4, 4, 4]] }]
const ex138_out: InputAction = false
const ex139_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }, { "color": "white", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }], "board": [[4, 4, 4], [4, 4, 4], [4, 4, 4], [4, 4, 4]] }]
const ex139_out: InputAction = [[1, 1], [0, 2]]
const ex14_in: DepthState = [2, { "players": [{ "color": "red", "score": 100, "places": [[0, 0], [2, 1], [2, 0]] }, { "color": "black", "score": 10, "places": [[0, 1], [3, 2], [1, 1]] }, { "color": "white", "score": 100, "places": [[0, 2], [2, 2], [1, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex14_out: InputAction = [[0, 0], [1, 0]]
const ex140_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }, { "color": "white", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }], "board": [[4, 5], [4, 3], [2, 4], [1, 4], [4, 1], [4, 3], [2, 4], [4, 1], [2, 4], [4, 2], [1, 3], [4, 1]] }]
const ex140_out: InputAction = [[2, 1], [4, 1]]
const ex141_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [10, 0], [10, 1]] }, { "color": "white", "score": 0, "places": [[1, 0], [6, 0], [11, 0], [11, 1]] }], "board": [[4, 5], [4, 3], [3, 4], [1, 4], [4, 1], [4, 3], [2, 4], [4, 1], [2, 4], [4, 2], [1, 3], [4, 1]] }]
const ex141_out: InputAction = [[10, 1], [0, 1]]
const ex142_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [4, 0]] }, { "color": "white", "score": 0, "places": [[7, 0], [9, 0], [8, 1]] }, { "color": "brown", "score": 0, "places": [[3, 1], [5, 0], [11, 1]] }], "board": [[4, 5], [4, 3], [2, 4], [1, 4], [4, 1], [4, 3], [2, 4], [4, 1], [2, 4], [4, 2], [1, 3], [4, 1]] }]
const ex142_out: InputAction = [[0, 1], [1, 0]]
const ex143_in: DepthState = [2, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [0, 1]] }, { "color": "white", "score": 0, "places": [[0, 2], [1, 1], [1, 2], [2, 1]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex143_out: InputAction = false
const ex144_in: DepthState = [1, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [1, 0], [0, 1]] }, { "color": "white", "score": 1, "places": [[2, 0], [3, 0], [2, 1]] }, { "color": "brown", "score": 2, "places": [[4, 0], [5, 0], [4, 1]] }], "board": [[1, 2, 1], [2, 3, 2], [1, 2, 3], [2, 3, 2], [1, 2, 1], [2, 3, 0]] }]
const ex144_out: InputAction = [[0, 1], [1, 1]]
const ex145_in: DepthState = [1, { "players": [{ "color": "red", "score": 10, "places": [[2, 0], [0, 1], [5, 2], [4, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [3, 2], [2, 2]] }], "board": [[2, 3, 4], [1, 1, 1], [5, 5, 5], [0, 4, 4], [3, 3, 3], [2, 2, 2]] }]
const ex145_out: InputAction = [[2, 0], [0, 0]]
const ex146_in: DepthState = [2, { "players": [{ "color": "red", "score": 10, "places": [[2, 0], [0, 1], [0, 0], [5, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [3, 2], [1, 2]] }], "board": [[2, 3, 0], [1, 1, 1], [5, 5, 0], [0, 4, 4], [3, 3, 0], [2, 2, 2]] }]
const ex146_out: InputAction = [[0, 1], [2, 1]]
const ex147_in: DepthState = [2, { "players": [{ "color": "red", "score": 10, "places": [[2, 0], [2, 1], [4, 0], [5, 2]] }, { "color": "white", "score": 0, "places": [[1, 2], [1, 1], [3, 2], [6, 2]] }], "board": [[2, 3, 0], [1, 1, 1], [5, 5], [0, 4, 4], [3, 3], [2, 2, 2], [0, 0, 1]] }]
const ex147_out: InputAction = [[2, 0], [0, 0]]
const ex148_in: DepthState = [1, { "players": [{ "color": "red", "score": 10, "places": [[0, 0], [0, 1], [3, 0], [3, 1]] }, { "color": "white", "score": 0, "places": [[1, 2], [1, 1], [3, 2], [4, 0]] }], "board": [[2, 3, 0], [1, 1, 1], [0, 0, 0], [1, 1, 1], [1]] }]
const ex148_out: InputAction = [[0, 1], [1, 0]]
const ex149_in: DepthState = [1, { "players": [{ "color": "red", "score": 10, "places": [[0, 0], [0, 1], [3, 0], [3, 1]] }, { "color": "white", "score": 0, "places": [[1, 2], [1, 1], [3, 2], [4, 0]] }], "board": [[2, 3, 0], [0, 1, 1], [0, 0, 0], [1, 1, 1], [1]] }]
const ex149_out: InputAction = false
const ex15_in: DepthState = [2, { "players": [{ "color": "red", "score": 100, "places": [[1, 1], [2, 1], [2, 0]] }, { "color": "black", "score": 10, "places": [[0, 1], [3, 2], [0, 0]] }, { "color": "white", "score": 100, "places": [[0, 2], [2, 2], [1, 2]] }], "board": [[1, 1, 1], [5, 1, 1], [1, 1, 1], [1, 1, 1], [5, 4, 1]] }]
const ex15_out: InputAction = [[2, 0], [1, 0]]
const ex150_in: DepthState = [1, { "players": [{ "places": [[3, 0], [1, 1], [4, 2], [6, 0]], "score": 0, "color": "brown" }, { "places": [[4, 0], [5, 0], [0, 2], [1, 2]], "score": 0, "color": "red" }], "board": [[0, 0, 1], [0, 1, 1], [0, 0, 0], [1, 0, 0], [1, 0, 1], [1, 0, 5], [1, 0, 0]] }]
const ex150_out: InputAction = [[4, 2], [5, 2]]
const ex151_in: DepthState = [2, { "players": [{ "places": [[3, 0], [1, 1], [4, 2], [6, 0]], "score": 0, "color": "brown" }, { "places": [[4, 0], [5, 0], [0, 2], [1, 2]], "score": 0, "color": "red" }], "board": [[0, 0, 1], [0, 1, 1], [0, 0, 0], [1, 0, 0], [1, 0, 1], [1, 0, 5], [1, 0, 0]] }]
const ex151_out: InputAction = [[4, 2], [5, 2]]
const ex152_in: DepthState = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex152_out: InputAction = false
const ex153_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 2], [2, 1], [2, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 2, 3, 1], [4, 1, 5, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }]
const ex153_out: InputAction = [[0, 0], [2, 0]]
const ex154_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 2], [2, 1], [2, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 2, 3, 1], [4, 1, 5, 1], [1, 1, 3, 1], [1, 1, 1, 1]] }]
const ex154_out: InputAction = [[2, 2], [3, 1]]
const ex155_in: DepthState = [1, { "players": [{ "color": "red", "score": 1, "places": [[3, 2], [0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 2, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }]
const ex155_out: InputAction = [[3, 2], [2, 2]]
const ex156_in: DepthState = [1, { "players": [{ "color": "red", "score": 1, "places": [[0, 3], [0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0], [1, 1, 2, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }]
const ex156_out: InputAction = false
const ex157_in: DepthState = [1, { "players": [{ "color": "red", "score": 1, "places": [[0, 3], [0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0], [1, 1, 2, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }]
const ex157_out: InputAction = [[0, 2], [2, 2]]
const ex158_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }, { "color": "white", "score": 0, "places": [[0, 1], [1, 1], [3, 1], [5, 1]] }], "board": [[1, 1], [1, 1], [1, 0], [1, 1], [1, 0], [1, 1]] }]
const ex158_out: InputAction = [[2, 0], [4, 0]]
const ex159_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [4, 0], [5, 0]] }, { "color": "white", "score": 0, "places": [[4, 1], [5, 1], [3, 1], [1, 1]] }], "board": [[1, 0], [1, 1], [1, 0], [1, 1], [1, 1], [1, 1]] }]
const ex159_out: InputAction = [[0, 0], [1, 0]]
const ex16_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[1, 0], [2, 0], [6, 0], [4, 0]] }, { "color": "white", "score": 0, "places": [[5, 0], [3, 0], [0, 0], [7, 0]] }], "board": [[3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3], [3]] }]
const ex16_out: InputAction = [[1, 0], [0, 1]]
const ex160_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [4, 0], [5, 0]] }, { "color": "white", "score": 0, "places": [[4, 1], [5, 1], [3, 1], [1, 1]] }], "board": [[1, 0], [1, 1], [1, 0], [1, 1], [1, 1], [1, 1]] }]
const ex160_out: InputAction = [[2, 0], [3, 0]]
const ex161_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[2, 1], [4, 1]] }, { "color": "black", "score": 0, "places": [[0, 2], [2, 2]] }, { "color": "brown", "score": 0, "places": [[4, 2], [5, 1]] }], "board": [[1, 2, 1], [2, 1, 1], [2, 1, 1], [2, 1, 1], [3, 1, 1], [1, 1, 1]] }]
const ex161_out: InputAction = [[2, 0], [0, 1]]
const ex162_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[2, 1], [4, 1]] }, { "color": "black", "score": 0, "places": [[0, 2], [2, 2]] }, { "color": "brown", "score": 0, "places": [[4, 2], [5, 1]] }], "board": [[1, 2, 1], [2, 1, 1], [2, 1, 1], [2, 1, 1], [3, 1, 1], [0, 1, 1]] }]
const ex162_out: InputAction = [[2, 0], [3, 0]]
const ex163_in: DepthState = [2, { "players": [{ "places": [[0, 0], [0, 1], [0, 2], [0, 3]], "score": 0, "color": "white" }, { "places": [[1, 1], [1, 2], [2, 0], [1, 3]], "score": 0, "color": "red" }], "board": [[2, 2, 2, 3], [0, 3, 1, 2], [4, 0], [5, 4, 3, 2, 0], [3, 2]] }]
const ex163_out: InputAction = false
const ex164_in: DepthState = [1, { "players": [{ "places": [[0, 0], [0, 1], [0, 2], [0, 3]], "score": 0, "color": "white" }, { "places": [[1, 1], [1, 2], [3, 1], [1, 3]], "score": 0, "color": "red" }], "board": [[2, 2, 2, 3], [0, 2, 1, 2], [4, 4, 4, 4], [5, 4, 3, 2, 0]] }]
const ex164_out: InputAction = [[0, 3], [2, 3]]
const ex165_in: DepthState = [2, { "players": [{ "places": [[3, 0], [3, 1], [3, 2], [1, 3]], "score": 2, "color": "brown" }, { "places": [[0, 0], [0, 1], [2, 0], [0, 3]], "score": 2, "color": "black" }], "board": [[2, 2, 2, 3], [0, 0, 1, 2], [4, 0], [5, 4, 3, 0, 0]] }]
const ex165_out: InputAction = [[3, 2], [1, 2]]
const ex166_in: DepthState = [1, { "players": [{ "places": [[0, 0], [3, 1], [0, 3]], "score": 2, "color": "black" }, { "places": [[3, 0], [4, 0], [3, 2]], "score": 3, "color": "white" }, { "places": [[4, 1], [4, 2], [4, 3]], "score": 3, "color": "red" }], "board": [[5, 0, 2, 3], [4, 4, 1, 5], [5, 0], [5, 4, 3, 0, 0], [3, 3, 3, 1, 2]] }]
const ex166_out: InputAction = [[0, 0], [1, 0]]
const ex167_in: DepthState = [2, { "players": [{ "places": [[0, 0], [1, 0]], "score": 2, "color": "black" }, { "places": [[3, 0], [3, 2]], "score": 3, "color": "white" }, { "places": [[4, 1], [4, 2]], "score": 3, "color": "red" }, { "places": [[4, 4], [2, 0]], "score": 1, "color": "brown" }], "board": [[5, 0, 2, 3], [4, 4, 1, 5], [5], [5, 4, 3, 0, 0], [3, 3, 3, 1, 2]] }]
const ex167_out: InputAction = false
const ex168_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 2], [1, 1], [2, 2]] }, { "color": "brown", "score": 10, "places": [[2, 1], [2, 0], [0, 2], [0, 1]] }], "board": [[1, 2, 3], [4, 2, 5], [1, 1, 1]] }]
const ex168_out: InputAction = [[0, 0], [1, 0]]
const ex169_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 2], [1, 1], [2, 2]] }, { "color": "brown", "score": 10, "places": [[2, 1], [2, 0], [0, 2], [0, 1]] }], "board": [[1, 2, 3, 1], [4, 2, 5, 1], [1, 1, 1, 1]] }]
const ex169_out: InputAction = [[1, 2], [0, 3]]
const ex17_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }, { "color": "white", "score": 0, "places": [[0, 1], [1, 1], [2, 1], [3, 1]] }], "board": [[3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3]] }]
const ex17_out: InputAction = false
const ex170_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 4], [1, 1], [4, 4]] }, { "color": "brown", "score": 10, "places": [[4, 1], [4, 0], [0, 4], [0, 1]] }], "board": [[1, 2, 3, 5, 5], [0, 2, 5, 2, 5], [1, 1, 1, 5, 3], [1, 1, 1, 5, 3], [1, 1, 1, 5, 3]] }]
const ex170_out: InputAction = [[1, 4], [3, 3]]
const ex171_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 2], [1, 1], [2, 2]] }, { "color": "brown", "score": 10, "places": [[2, 1], [2, 0], [0, 2], [0, 1]] }], "board": [[1, 2, 3], [0, 2, 5], [1, 1, 1]] }]
const ex171_out: InputAction = false
const ex172_in: DepthState = [2, { "board": [[1, 1, 1, 1], [2, 1, 3, 3], [5, 3, 0, 5], [1, 1, 1, 1], [4, 5, 5, 1]], "players": [{ "color": "red", "score": 1, "places": [[0, 0], [0, 1]] }, { "color": "black", "score": 2, "places": [[0, 2], [0, 3]] }, { "color": "white", "score": 3, "places": [[1, 0], [1, 1]] }, { "color": "brown", "score": 4, "places": [[1, 2], [1, 3]] }] }]
const ex172_out: InputAction = [[0, 0], [2, 0]]
const ex173_in: DepthState = [2, { "board": [[1, 1, 1, 1], [2, 1, 3, 3], [0, 0, 1, 1], [1, 1, 1, 1], [4, 5, 5, 1]], "players": [{ "color": "red", "score": 1, "places": [[0, 0], [0, 1]] }, { "color": "black", "score": 2, "places": [[0, 2], [0, 3]] }, { "color": "white", "score": 3, "places": [[1, 0], [1, 1]] }, { "color": "brown", "score": 4, "places": [[1, 2], [1, 3]] }] }]
const ex173_out: InputAction = false
const ex174_in: DepthState = [1, { "board": [[1, 1, 1, 1], [2, 1, 3, 3], [1, 0, 1, 1], [1, 1, 1, 1], [4, 5, 5, 1]], "players": [{ "color": "brown", "score": 4, "places": [[1, 2], [1, 3]] }, { "color": "red", "score": 1, "places": [[0, 0], [0, 1]] }, { "color": "black", "score": 2, "places": [[0, 2], [0, 3]] }, { "color": "white", "score": 3, "places": [[1, 0], [1, 1]] }] }]
const ex174_out: InputAction = [[1, 2], [2, 2]]
const ex175_in: DepthState = [1, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "brown", "score": 0, "places": [[1, 2], [2, 0], [2, 1]] }, { "color": "red", "score": 0, "places": [[1, 0], [1, 1], [2, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex175_out: InputAction = false
const ex176_in: DepthState = [1, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "brown", "score": 0, "places": [[1, 2], [2, 0], [2, 1]] }, { "color": "red", "score": 0, "places": [[3, 0], [3, 1], [3, 2]] }], "board": [[1, 1, 1], [5, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex176_out: InputAction = [[0, 0], [1, 0]]
const ex177_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 2], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[2, 2], [1, 3], [2, 0], [1, 1]] }], "board": [[1, 2, 3, 2], [4, 1, 5, 1], [1, 1, 1, 4]] }]
const ex177_out: InputAction = [[1, 2], [2, 3]]
const ex178_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 2], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[2, 2], [1, 3], [2, 0], [1, 1]] }], "board": [[4, 2, 3, 2], [4, 1, 5, 1], [1, 1, 1, 4], [1, 2, 3, 4]] }]
const ex178_out: InputAction = [[0, 0], [1, 0]]
const ex179_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 1], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[1, 2], [1, 3], [1, 0], [0, 1]] }], "board": [[4, 2, 3, 2], [4, 1, 5, 1]] }]
const ex179_out: InputAction = false
const ex18_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [1, 1], [4, 0]] }, { "color": "white", "score": 0, "places": [[1, 0], [3, 0], [5, 1], [3, 1]] }], "board": [[1, 1], [1, 1], [1, 3], [1, 1], [1, 1], [1, 1]] }]
const ex18_out: InputAction = [[1, 1], [0, 1]]
const ex180_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 1], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[1, 2], [1, 3], [1, 0], [0, 1]] }], "board": [[4, 2, 3, 2], [4, 1, 5, 1]] }]
const ex180_out: InputAction = false
const ex181_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[1, 1], [1, 2], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[2, 2], [1, 3], [2, 0], [0, 0]] }], "board": [[1, 2, 3, 2], [4, 1, 1, 1], [1, 1, 1, 4]] }]
const ex181_out: InputAction = [[0, 3], [2, 3]]
const ex182_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[2, 1], [0, 2]] }, { "color": "brown", "score": 0, "places": [[1, 0], [1, 1]] }, { "color": "black", "score": 0, "places": [[0, 1], [4, 1]] }, { "color": "white", "score": 0, "places": [[2, 2], [4, 2]] }], "board": [[1, 2, 1], [1, 1, 1, 0, 5], [3, 2, 1], [1, 3, 2], [1, 1, 4]] }]
const ex182_out: InputAction = [[2, 1], [3, 0]]
const ex183_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[2, 1], [0, 2]] }, { "color": "brown", "score": 0, "places": [[1, 0], [2, 2]] }, { "color": "black", "score": 0, "places": [[0, 1], [4, 1]] }, { "color": "white", "score": 0, "places": [[1, 1], [4, 2]] }], "board": [[1, 2, 1, 3, 4], [1, 1, 1, 0, 5], [3, 2, 1, 4, 3], [1, 3, 2, 2, 1], [1, 1, 4, 3, 5]] }]
const ex183_out: InputAction = [[0, 2], [4, 4]]
const ex184_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1]] }, { "color": "brown", "score": 0, "places": [[0, 2], [1, 1]] }, { "color": "black", "score": 0, "places": [[1, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[2, 1], [4, 2]] }], "board": [[1, 2, 1], [1, 1, 1], [3, 2, 1], [1, 3, 2], [1, 1, 4]] }]
const ex184_out: InputAction = false
const ex185_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1]] }, { "color": "brown", "score": 0, "places": [[0, 2], [1, 1]] }, { "color": "black", "score": 0, "places": [[1, 0], [3, 0]] }, { "color": "white", "score": 0, "places": [[2, 1], [4, 2]] }], "board": [[1, 2, 1], [1, 1, 1], [3, 2, 1], [1, 3, 2], [1, 1, 4]] }]
const ex185_out: InputAction = [[0, 0], [2, 0]]
const ex186_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[2, 1], [1, 3]] }, { "color": "brown", "score": 0, "places": [[0, 2], [0, 3]] }, { "color": "black", "score": 0, "places": [[1, 2], [2, 2]] }, { "color": "white", "score": 0, "places": [[2, 3], [3, 3]] }], "board": [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]] }]
const ex186_out: InputAction = [[1, 3], [0, 4]]
const ex187_in: DepthState = [1, { "players": [{ "color": "brown", "score": 2, "places": [[0, 0], [1, 0], [2, 0], [1, 1]] }, { "color": "red", "score": 0, "places": [[0, 3], [1, 2], [1, 3], [2, 3]] }], "board": [[1, 1, 1, 3], [1, 1, 2, 3], [4, 5, 5, 3]] }]
const ex187_out: InputAction = [[1, 0], [0, 1]]
const ex188_in: DepthState = [2, { "players": [{ "color": "brown", "score": 2, "places": [[0, 0], [1, 0], [2, 0], [1, 1]] }, { "color": "red", "score": 0, "places": [[0, 3], [1, 2], [1, 3], [2, 3]] }], "board": [[1, 1, 1, 3], [1, 1, 2, 3], [4, 5, 5, 3]] }]
const ex188_out: InputAction = [[1, 0], [2, 1]]
const ex189_in: DepthState = [2, { "players": [{ "color": "brown", "score": 2, "places": [[0, 0], [1, 0], [2, 0], [0, 1]] }, { "color": "red", "score": 0, "places": [[4, 1], [4, 2], [1, 3], [2, 3]] }], "board": [[1, 1, 0, 3], [1, 1, 2, 3], [4, 5, 5, 3], [0, 2, 2], [2, 2, 2]] }]
const ex189_out: InputAction = [[0, 1], [2, 1]]
const ex19_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [1, 1], [4, 0]] }, { "color": "white", "score": 0, "places": [[1, 0], [3, 0], [5, 1], [3, 1]] }], "board": [[1, 1], [1, 1], [1, 3], [1, 1], [1, 1], [1, 1]] }]
const ex19_out: InputAction = [[1, 1], [2, 1]]
const ex190_in: DepthState = [1, { "players": [{ "color": "red", "score": 2, "places": [[0, 0], [1, 0], [2, 0], [1, 1]] }, { "color": "brown", "score": 0, "places": [[0, 3], [1, 2], [1, 3], [2, 3]] }], "board": [[1, 0, 0, 3], [1, 1, 2, 3], [4, 0, 0, 3]] }]
const ex190_out: InputAction = false
const ex191_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [2, 0], [3, 0]] }, { "color": "white", "score": 0, "places": [[0, 1], [0, 2], [0, 3], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 5, 1, 1], [1, 1, 1, 1]] }]
const ex191_out: InputAction = [[1, 0], [2, 1]]
const ex192_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [1, 0], [1, 1]] }, { "color": "brown", "score": 0, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 0, 0, 1], [1, 2, 1, 4, 1], [0, 0, 0, 0, 1], [0, 0, 1, 1, 1], [1, 2, 3, 1, 1]] }]
const ex192_out: InputAction = false
const ex193_in: DepthState = [2, { "players": [{ "color": "white", "score": 0, "places": [[0, 0], [1, 0], [2, 1], [2, 0]] }, { "color": "red", "score": 1, "places": [[3, 1], [0, 1], [3, 0], [3, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex193_out: InputAction = [[2, 1], [0, 2]]
const ex194_in: DepthState = [2, { "players": [{ "color": "white", "score": 0, "places": [[2, 0], [3, 0], [2, 1], [0, 0]] }, { "color": "red", "score": 1, "places": [[0, 1], [0, 2], [1, 2], [3, 2]] }], "board": [[1, 1, 1], [1, 3, 1], [1, 1, 1], [1, 1, 1]] }]
const ex194_out: InputAction = [[2, 1], [1, 1]]
const ex195_in: DepthState = [2, { "players": [{ "color": "white", "score": 0, "places": [[2, 0], [3, 0], [2, 1], [0, 0]] }, { "color": "red", "score": 1, "places": [[0, 1], [0, 2], [1, 2], [3, 2]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex195_out: InputAction = [[0, 0], [1, 0]]
const ex196_in: DepthState = [2, { "players": [{ "color": "white", "score": 0, "places": [[2, 0], [3, 0], [1, 0], [0, 0]] }, { "color": "red", "score": 1, "places": [[0, 1], [0, 2], [1, 1], [3, 1]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 4, 1], [1, 1, 1]] }]
const ex196_out: InputAction = [[1, 0], [2, 1]]
const ex2_in: DepthState = [2, { "board": [[2, 2, 2], [2, 2, 2], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 0]], "players": [{ "places": [[4, 2], [4, 1], [4, 0], [1, 0]], "score": 0, "color": "red" }, { "places": [[5, 1], [5, 0], [1, 1], [0, 1]], "score": 0, "color": "white" }] }]
const ex2_out: InputAction = [[1, 0], [0, 0]]
const ex20_in: DepthState = [1, { "players": [{ "color": "red", "score": 2, "places": [[0, 1], [0, 2], [0, 3]] }, { "color": "brown", "score": 1, "places": [[1, 1], [2, 2], [3, 3]] }, { "color": "black", "score": 4, "places": [[5, 3], [5, 2], [5, 1]] }], "board": [[0, 2, 5, 5], [3, 1, 0, 3], [0, 3, 1, 3], [3, 3, 0, 1], [3, 3, 3, 3], [0, 4, 4, 4]] }]
const ex20_out: InputAction = [[0, 3], [1, 3]]
const ex21_in: DepthState = [2, { "players": [{ "color": "red", "score": 2, "places": [[0, 1], [0, 2], [0, 3]] }, { "color": "brown", "score": 1, "places": [[1, 1], [2, 2], [3, 3]] }, { "color": "black", "score": 4, "places": [[5, 3], [5, 2], [5, 1]] }], "board": [[0, 2, 5, 5], [3, 1, 0, 3], [0, 3, 1, 3], [3, 3, 0, 1], [3, 3, 3, 3], [0, 4, 4, 4]] }]
const ex21_out: InputAction = [[0, 1], [1, 0]]
const ex22_in: DepthState = [2, { "players": [{ "color": "red", "score": 1, "places": [[0, 0], [0, 1], [0, 2], [0, 3]] }, { "color": "brown", "score": 2, "places": [[1, 0], [1, 1], [1, 2], [1, 3]] }], "board": [[1, 1, 1, 1], [2, 2, 2, 2], [0, 0, 0, 0]] }]
const ex22_out: InputAction = false
const ex23_in: DepthState = [2, { "players": [{ "color": "brown", "score": 1, "places": [[1, 1], [2, 2]] }, { "color": "red", "score": 2, "places": [[0, 1], [0, 2]] }, { "color": "white", "score": 3, "places": [[5, 3], [5, 2]] }, { "color": "black", "score": 4, "places": [[5, 1], [5, 0]] }], "board": [[0, 2, 2, 0], [5, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0], [5, 5, 0, 5], [4, 4, 3, 3]] }]
const ex23_out: InputAction = false
const ex24_in: DepthState = [2, { "players": [{ "color": "brown", "score": 1, "places": [[1, 1], [2, 3]] }, { "color": "red", "score": 2, "places": [[0, 1], [0, 2]] }, { "color": "white", "score": 3, "places": [[5, 3], [5, 2]] }, { "color": "black", "score": 4, "places": [[5, 1], [5, 0]] }], "board": [[0, 2, 2, 5], [0, 1, 0, 5], [0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0], [4, 4, 3, 3]] }]
const ex24_out: InputAction = [[2, 3], [0, 3]]
const ex25_in: DepthState = [1, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [1, 3]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 4]] }], "board": [[1, 1, 1, 0, 1], [1, 1, 1, 1, 1]] }]
const ex25_out: InputAction = [[1, 3], [0, 4]]
const ex26_in: DepthState = [1, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [1, 3]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 4]] }], "board": [[1, 1, 1, 0, 0], [1, 1, 1, 1, 1]] }]
const ex26_out: InputAction = false
const ex27_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 1], [0, 2], [1, 2], [0, 0]] }, { "color": "brown", "score": 0, "places": [[2, 2], [1, 1], [2, 0], [3, 0]] }], "board": [[1, 2, 5], [4, 1, 5], [1, 1, 1], [3, 3, 3]] }]
const ex27_out: InputAction = [[1, 2], [3, 2]]
const ex28_in: DepthState = [2, { "players": [{ "color": "black", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [1, 3]] }, { "color": "white", "score": 0, "places": [[1, 0], [1, 1], [1, 2], [1, 4]] }], "board": [[1, 1, 1, 0, 1], [1, 1, 1, 1, 1]] }]
const ex28_out: InputAction = [[1, 3], [0, 4]]
const ex29_in: DepthState = [2, { "players": [{ "color": "black", "score": 1, "places": [[0, 0], [0, 1], [0, 2], [1, 0]] }, { "color": "red", "score": 4, "places": [[1, 1], [3, 2], [2, 0], [2, 1]] }], "board": [[4, 2, 4], [1, 3, 0], [2, 4, 0], [0, 0, 4], [4, 0, 0], [2, 3, 4], [2, 4, 2], [3, 4, 1]] }]
const ex29_out: InputAction = false
const ex3_in: DepthState = [2, { "board": [[3, 2, 2], [2, 4, 0], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 0]], "players": [{ "places": [[4, 2], [4, 1], [4, 0], [1, 0]], "score": 0, "color": "red" }, { "places": [[5, 1], [5, 0], [1, 1], [0, 1]], "score": 0, "color": "white" }] }]
const ex3_out: InputAction = [[1, 0], [0, 0]]
const ex30_in: DepthState = [2, { "players": [{ "color": "black", "score": 1, "places": [[1, 2], [2, 1]] }, { "color": "red", "score": 4, "places": [[1, 1], [5, 1]] }, { "color": "white", "score": 8, "places": [[6, 0], [0, 0]] }, { "color": "brown", "score": 2, "places": [[4, 2], [7, 0]] }], "board": [[4, 0, 4], [0, 3, 2], [2, 4, 2], [2, 2, 1], [4, 0, 2], [2, 3, 4], [1, 4, 0], [3, 0, 1]] }]
const ex30_out: InputAction = [[2, 1], [4, 0]]
const ex31_in: DepthState = [1, { "players": [{ "color": "black", "score": 40, "places": [[0, 0], [2, 0], [3, 0], [3, 1]] }, { "color": "white", "score": 31, "places": [[0, 3], [1, 3], [2, 3], [3, 3]] }], "board": [[1, 1, 1, 1], [1, 0, 2, 1], [1, 1, 5, 1], [1, 1, 0, 1]] }]
const ex31_out: InputAction = [[0, 0], [1, 0]]
const ex32_in: DepthState = [2, { "players": [{ "color": "black", "score": 40, "places": [[0, 0], [2, 0], [3, 0], [3, 1]] }, { "color": "white", "score": 31, "places": [[0, 3], [1, 3], [2, 3], [3, 3]] }], "board": [[1, 1, 1, 1], [1, 0, 2, 1], [1, 1, 5, 1], [1, 1, 0, 1]] }]
const ex32_out: InputAction = [[3, 1], [2, 2]]
const ex33_in: DepthState = [1, { "players": [{ "color": "black", "score": 40, "places": [[1, 0], [1, 4], [2, 4], [3, 4]] }, { "color": "white", "score": 31, "places": [[0, 5], [1, 5], [2, 5], [3, 5]] }], "board": [[5, 1, 1, 1, 0, 1], [2, 0, 1, 0, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 1, 0, 1, 1]] }]
const ex33_out: InputAction = [[1, 0], [0, 0]]
const ex34_in: DepthState = [2, { "players": [{ "color": "black", "score": 40, "places": [[1, 0], [1, 4], [2, 4], [3, 4]] }, { "color": "white", "score": 31, "places": [[0, 5], [1, 5], [2, 5], [3, 5]] }], "board": [[5, 1, 1, 1, 0, 1], [2, 0, 1, 0, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 1, 0, 1, 1]] }]
const ex34_out: InputAction = [[1, 0], [0, 1]]
const ex35_in: DepthState = [2, { "players": [{ "color": "black", "score": 40, "places": [[0, 4], [1, 4], [2, 4], [3, 4]] }, { "color": "white", "score": 31, "places": [[0, 5], [1, 5], [2, 5], [3, 5]] }], "board": [[5, 1, 1, 1, 1, 1], [2, 0, 1, 0, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 1, 0, 1, 1]] }]
const ex35_out: InputAction = false
const ex36_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0], [4, 0], [0, 1]] }, { "color": "white", "score": 0, "places": [[1, 1], [2, 1], [3, 1], [4, 1]] }], "board": [[3, 3], [3, 3], [3, 3], [3, 3], [3, 3]] }]
const ex36_out: InputAction = [[0, 0], [1, 0]]
const ex37_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[3, 0], [2, 0], [4, 0], [0, 1]] }, { "color": "white", "score": 0, "places": [[1, 1], [2, 1], [3, 1], [4, 1]] }], "board": [[3, 3], [3, 3], [3, 3], [3, 3], [3, 3]] }]
const ex37_out: InputAction = [[0, 1], [1, 0]]
const ex38_in: DepthState = [2, { "players": [{ "places": [[0, 0], [2, 0], [4, 0]], "score": 0, "color": "red" }, { "places": [[1, 0], [3, 0], [5, 0]], "score": 0, "color": "white" }, { "places": [[5, 2], [5, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 4, 5], [1, 2, 1], [3, 5, 5], [2, 1], [1, 1, 3], [1, 4, 1], [1, 2], []] }]
const ex38_out: InputAction = false
const ex39_in: DepthState = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0], [3, 2]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0], [2, 2]], "score": 0, "color": "white" }], "board": [[1, 1, 1], [1, 1, 1], [3, 2, 4], [4, 2, 1], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }]
const ex39_out: InputAction = [[4, 0], [3, 0]]
const ex4_in: DepthState = [1, { "board": [[1, 3, 4, 2, 2, 4, 2, 1, 5, 5, 2, 4, 4, 3, 5, 4, 1, 3, 1, 1, 3, 2, 3, 5, 5]], "players": [{ "places": [[0, 6], [0, 4], [0, 2], [0, 0]], "score": 0, "color": "red" }, { "places": [[0, 7], [0, 5], [0, 3], [0, 1]], "score": 0, "color": "white" }] }]
const ex4_out: InputAction = false
const ex40_in: DepthState = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0], [3, 2]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0], [2, 2]], "score": 0, "color": "white" }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 0], [1, 1, 1], [1, 1]] }]
const ex40_out: InputAction = [[0, 0], [1, 0]]
const ex41_in: DepthState = [2, { "players": [{ "places": [[0, 5], [1, 0], [2, 5], [3, 0]], "score": 0, "color": "red" }, { "places": [[0, 0], [1, 5], [2, 0], [3, 5]], "score": 0, "color": "white" }], "board": [[1, 3, 2, 4, 3, 2], [4, 1, 2, 5, 3, 4], [1, 2, 3, 4, 5, 3], [2, 4, 5, 1, 3, 2]] }]
const ex41_out: InputAction = [[1, 0], [3, 1]]
const ex42_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [9, 0]] }, { "color": "black", "score": 0, "places": [[6, 0], [10, 0]] }, { "color": "brown", "score": 0, "places": [[7, 0], [11, 0]] }, { "color": "white", "score": 0, "places": [[8, 0], [12, 0]] }], "board": [[1], [0], [3], [0], [3], [0], [1], [1], [1], [1], [1], [1], [1]] }]
const ex42_out: InputAction = [[0, 0], [4, 0]]
const ex43_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[3, 0], [4, 1]] }, { "color": "black", "score": 0, "places": [[5, 0], [3, 1]] }, { "color": "brown", "score": 0, "places": [[0, 1], [1, 1]] }, { "color": "white", "score": 0, "places": [[2, 1], [5, 1]] }], "board": [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]] }]
const ex43_out: InputAction = [[3, 0], [1, 0]]
const ex44_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[3, 0], [4, 1]] }, { "color": "black", "score": 0, "places": [[5, 0], [3, 1]] }, { "color": "brown", "score": 0, "places": [[0, 1], [1, 1]] }, { "color": "white", "score": 0, "places": [[2, 1], [5, 1]] }], "board": [[0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [1, 1]] }]
const ex44_out: InputAction = false
const ex45_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [2, 0]] }, { "color": "black", "score": 0, "places": [[0, 1], [1, 1]] }, { "color": "brown", "score": 0, "places": [[2, 1], [3, 1]] }, { "color": "white", "score": 0, "places": [[4, 1], [5, 1]] }], "board": [[1, 1], [0, 1], [1, 1], [0, 1], [1, 1], [0, 1]] }]
const ex45_out: InputAction = [[2, 0], [4, 0]]
const ex46_in: DepthState = [2, { "players": [{ "color": "red", "score": 4, "places": [[2, 1], [0, 1], [1, 1], [1, 2]] }, { "color": "white", "score": 5, "places": [[0, 2], [3, 1], [4, 0], [2, 2]] }], "board": [[1, 2, 3], [0, 1, 2], [5, 2, 2], [4, 3, 5], [2, 1, 2]] }]
const ex46_out: InputAction = [[2, 1], [3, 0]]
const ex47_in: DepthState = [2, { "board": [[1, 0, 3, 4], [1, 0, 2, 0], [5, 5, 5, 5], [1, 2, 3, 4]], "players": [{ "color": "red", "score": 6, "places": [[1, 2], [0, 2], [0, 3], [3, 0]] }, { "color": "white", "score": 8, "places": [[2, 3], [0, 0], [1, 0], [2, 2]] }] }]
const ex47_out: InputAction = [[1, 2], [3, 2]]
const ex48_in: DepthState = [1, { "players": [{ "color": "red", "score": 3, "places": [[0, 0], [2, 0], [4, 0], [5, 0]] }, { "color": "black", "score": 5, "places": [[0, 1], [1, 0], [3, 0], [4, 1]] }], "board": [[3, 4], [4, 1], [4, 4], [1, 1], [2, 3], [1, 1]] }]
const ex48_out: InputAction = false
const ex49_in: DepthState = [2, { "players": [{ "places": [[0, 0], [1, 0], [2, 0], [0, 1]], "score": 0, "color": "red" }, { "places": [[2, 1], [1, 1], [2, 2], [1, 3]], "score": 0, "color": "white" }], "board": [[3, 1, 2, 1], [5, 2, 1, 3], [3, 1, 1, 4]] }]
const ex49_out: InputAction = false
const ex5_in: DepthState = [1, { "board": [[1], [0], [0], [1], [1], [1], [1], [1], [1], [1], [1]], "players": [{ "places": [[4, 0], [3, 0]], "score": 0, "color": "red" }, { "places": [[6, 0], [5, 0]], "score": 0, "color": "white" }, { "places": [[8, 0], [7, 0]], "score": 0, "color": "brown" }, { "places": [[10, 0], [9, 0]], "score": 0, "color": "black" }] }]
const ex5_out: InputAction = false
const ex50_in: DepthState = [1, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[3, 0], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[2, 1], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [0, 1, 4], [0, 2, 1], [1, 0, 2], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }]
const ex50_out: InputAction = false
const ex51_in: DepthState = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [4, 5, 0], [4, 5, 0], [1, 1, 4], [1, 3, 1], [1, 1, 1]] }]
const ex51_out: InputAction = [[4, 2], [2, 1]]
const ex52_in: DepthState = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0], [0, 0], [1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex52_out: InputAction = [[0, 0], [1, 0]]
const ex53_in: DepthState = [1, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }]
const ex53_out: InputAction = [[0, 0], [1, 0]]
const ex54_in: DepthState = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex54_out: InputAction = false
const ex55_in: DepthState = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }]
const ex55_out: InputAction = [[0, 0], [1, 0]]
const ex56_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [1, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[5, 0], [5, 2], [4, 3], [3, 4]] }], "board": [[1, 2, 4, 3, 2], [2, 0, 3, 2, 4], [2, 0, 1, 5, 1], [0, 1, 3, 2, 3], [1, 1, 2, 3, 5], [5, 5, 4, 3, 1]] }]
const ex56_out: InputAction = [[2, 0], [4, 0]]
const ex57_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [1, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[5, 0], [5, 2], [4, 3], [3, 4]] }], "board": [[1, 2, 4, 3, 2], [2, 0, 3, 2, 4], [2, 0, 1, 5, 1], [0, 1, 3, 2, 3], [0, 1, 2, 3, 5], [5, 5, 4, 3, 1]] }]
const ex57_out: InputAction = false
const ex58_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [1, 0], [2, 0]] }, { "color": "white", "score": 0, "places": [[5, 0], [5, 2], [4, 3], [3, 4]] }], "board": [[1, 2, 4, 3, 2], [2, 3, 3, 2, 4], [2, 0, 1, 5, 1], [0, 1, 3, 2, 3], [1, 1, 2, 3, 5], [5, 5, 4, 3, 1]] }]
const ex58_out: InputAction = [[0, 1], [1, 1]]
const ex59_in: DepthState = [1, { "board": [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 5]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }]
const ex59_out: InputAction = [[2, 0], [4, 0]]
const ex6_in: DepthState = [1, { "players": [{ "color": "black", "score": 0, "places": [[5, 2], [4, 0], [3, 2]] }, { "color": "brown", "score": 0, "places": [[0, 0], [6, 2], [6, 1]] }, { "color": "white", "score": 5, "places": [[3, 0], [0, 1], [1, 2]] }], "board": [[3, 1, 3], [5, 2, 2], [1, 4], [3, 2, 5], [1, 4, 1], [2, 2, 2], [5, 5, 1], [2, 3, 3]] }]
const ex6_out: InputAction = [[3, 2], [4, 2]]
const ex60_in: DepthState = [2, { "board": [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 5]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }]
const ex60_out: InputAction = [[2, 1], [6, 1]]
const ex61_in: DepthState = [1, { "board": [[1, 1], [1, 1], [1, 1], [1, 1], [0, 0], [1, 0], [0, 5]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }]
const ex61_out: InputAction = false
const ex62_in: DepthState = [2, { "board": [[1, 1], [1, 1], [3, 2], [1, 1], [1, 1], [1, 0], [0, 5]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }]
const ex62_out: InputAction = [[2, 1], [6, 1]]
const ex63_in: DepthState = [2, { "board": [[1, 1], [1, 1], [1, 1], [1, 1], [1, 5], [0, 0], [0, 0]], "players": [{ "color": "white", "score": 1, "places": [[0, 0], [0, 1], [2, 0], [2, 1]] }, { "color": "brown", "score": 1, "places": [[1, 0], [1, 1], [3, 0], [3, 1]] }] }]
const ex63_out: InputAction = [[2, 0], [4, 0]]
const ex64_in: DepthState = [1, { "players": [{ "color": "black", "score": 0, "places": [[2, 1], [4, 0], [4, 1], [5, 0]] }, { "color": "white", "score": 0, "places": [[2, 0], [5, 1], [6, 0], [6, 1]] }], "board": [[1, 1], [1, 1], [1, 1], [0, 0], [1, 1], [1, 1], [1, 1]] }]
const ex64_out: InputAction = [[2, 1], [0, 0]]
const ex65_in: DepthState = [2, { "players": [{ "color": "black", "score": 0, "places": [[2, 1], [4, 0], [4, 1], [5, 0]] }, { "color": "white", "score": 0, "places": [[2, 0], [5, 1], [6, 0], [6, 1]] }], "board": [[1, 1], [1, 0], [1, 1], [0, 0], [1, 1], [1, 1], [1, 1]] }]
const ex65_out: InputAction = [[2, 1], [1, 0]]
const ex66_in: DepthState = [2, { "players": [{ "color": "black", "score": 0, "places": [[2, 1], [4, 0], [4, 1], [5, 0]] }, { "color": "white", "score": 0, "places": [[2, 0], [5, 1], [6, 0], [6, 1]] }], "board": [[1, 0], [0, 0], [1, 1], [0, 0], [1, 1], [1, 1], [1, 1]] }]
const ex66_out: InputAction = false
const ex67_in: DepthState = [2, { "players": [{ "color": "black", "score": 0, "places": [[2, 1], [3, 0], [5, 0], [5, 1]] }, { "color": "white", "score": 0, "places": [[2, 0], [0, 0], [6, 0], [6, 1]] }], "board": [[1, 1], [1, 1], [1, 1], [1, 1], [0, 0], [1, 1], [1, 1]] }]
const ex67_out: InputAction = [[2, 1], [0, 1]]
const ex68_in: DepthState = [2, { "players": [{ "color": "black", "score": 0, "places": [[1, 1], [2, 0], [4, 0], [4, 1]] }, { "color": "white", "score": 0, "places": [[5, 0], [5, 1], [6, 0], [6, 1]] }], "board": [[2, 1], [1, 1], [1, 3], [0, 0], [1, 1], [1, 1], [1, 1]] }]
const ex68_out: InputAction = [[1, 1], [2, 1]]
const ex69_in: DepthState = [1, { "board": [[2, 5, 4, 0], [4, 1, 2, 0], [3, 3, 5, 5], [1, 5, 2, 1], [5, 4, 4, 5], [3, 4, 0, 5], [0, 2, 0, 2], [4, 3, 0, 3], [3, 4, 5, 2], [3, 0, 4, 5]], "players": [{ "color": "white", "score": 0, "places": [[3, 0], [5, 1]] }, { "color": "black", "score": 0, "places": [[8, 3], [8, 1]] }, { "color": "red", "score": 0, "places": [[8, 2], [6, 1]] }, { "color": "brown", "score": 0, "places": [[4, 3], [9, 3]] }] }]
const ex69_out: InputAction = [[5, 1], [1, 1]]
const ex7_in: DepthState = [1, { "players": [{ "color": "white", "score": 1, "places": [[3, 0], [0, 2], [2, 1], [5, 0]] }, { "color": "black", "score": 3, "places": [[4, 2], [4, 0], [2, 0], [1, 1]] }], "board": [[2, 2, 1], [3, 2, 5], [5, 4, 2], [3], [1, 1, 1], [2, 3, 5]] }]
const ex7_out: InputAction = [[2, 1], [0, 0]]
const ex70_in: DepthState = [1, { "board": [[1, 4, 1, 2], [3, 5, 5, 4], [4, 4, 4, 2], [0, 5, 2, 1], [5, 5, 4, 5], [5, 2, 1, 3], [1, 1, 4, 1], [4, 0, 2, 2], [4, 4, 4, 3], [3, 2, 3, 3]], "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 1], [0, 2]] }, { "color": "white", "score": 0, "places": [[0, 3], [1, 0], [1, 1]] }, { "color": "brown", "score": 0, "places": [[1, 2], [1, 3], [2, 0]] }] }]
const ex70_out: InputAction = [[0, 1], [2, 1]]
const ex71_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 1], [3, 2], [3, 0]] }, { "color": "black", "score": 0, "places": [[0, 2], [2, 2], [0, 1], [1, 2]] }], "board": [[1, 2, 3], [3, 3, 1], [5, 4, 5], [1, 0, 1]] }]
const ex71_out: InputAction = [[1, 1], [2, 1]]
const ex72_in: DepthState = [1, { "players": [{ "color": "red", "score": 2, "places": [[0, 1], [1, 0], [3, 2], [3, 0]] }, { "color": "black", "score": 0, "places": [[0, 2], [2, 2], [2, 1], [1, 2]] }], "board": [[1, 2, 3], [3, 0, 1], [5, 4, 5], [1, 0, 1]] }]
const ex72_out: InputAction = [[1, 0], [0, 0]]
const ex73_in: DepthState = [2, { "players": [{ "color": "red", "score": 2, "places": [[0, 1], [1, 0], [3, 2], [3, 0]] }, { "color": "black", "score": 0, "places": [[0, 2], [2, 2], [2, 1], [1, 2]] }], "board": [[1, 2, 3], [3, 0, 1], [5, 4, 5], [1, 0, 1]] }]
const ex73_out: InputAction = [[1, 0], [2, 0]]
const ex74_in: DepthState = [2, { "players": [{ "color": "black", "score": 0, "places": [[0, 2], [2, 2], [2, 1], [1, 2]] }, { "color": "red", "score": 2, "places": [[0, 1], [1, 0], [3, 2], [3, 0]] }], "board": [[1, 2, 3], [3, 0, 1], [5, 4, 5], [1, 0, 1]] }]
const ex74_out: InputAction = false
const ex75_in: DepthState = [2, { "players": [{ "color": "black", "score": 0, "places": [[7, 3], [6, 0]] }, { "color": "red", "score": 0, "places": [[0, 0], [4, 0]] }, { "color": "brown", "score": 0, "places": [[5, 0], [7, 1]] }, { "color": "white", "score": 0, "places": [[7, 0], [6, 1]] }], "board": [[1], [1], [0, 5], [0, 5], [1, 0, 1], [1, 0, 4], [1, 1, 0, 1], [1, 2, 0, 4]] }]
const ex75_out: InputAction = [[7, 3], [2, 1]]
const ex76_in: DepthState = [1, { "players": [{ "places": [[0, 0], [1, 1]], "score": 0, "color": "black" }, { "places": [[3, 1], [4, 2]], "score": 0, "color": "white" }, { "places": [[1, 2], [2, 2]], "score": 0, "color": "brown" }, { "places": [[0, 2], [3, 2]], "score": 0, "color": "red" }], "board": [[1, 0, 1], [3, 3, 3], [3, 0, 1], [1, 1, 1], [4, 0, 3]] }]
const ex76_out: InputAction = [[0, 0], [1, 0]]
const ex77_in: DepthState = [2, { "players": [{ "places": [[0, 0], [1, 1]], "score": 0, "color": "red" }, { "places": [[3, 1], [4, 2]], "score": 0, "color": "brown" }, { "places": [[1, 2], [2, 2]], "score": 0, "color": "white" }, { "places": [[0, 2], [3, 2]], "score": 0, "color": "black" }], "board": [[1, 0, 1], [3, 3, 3], [3, 0, 1], [1, 1, 1], [4, 0, 3]] }]
const ex77_out: InputAction = [[0, 0], [4, 0]]
const ex78_in: DepthState = [1, { "players": [{ "places": [[3, 1], [4, 2]], "score": 0, "color": "white" }, { "places": [[0, 0], [1, 1]], "score": 0, "color": "red" }, { "places": [[1, 2], [2, 2]], "score": 0, "color": "black" }, { "places": [[0, 2], [3, 2]], "score": 0, "color": "brown" }], "board": [[1, 0, 1], [0, 3, 3], [0, 0, 1], [1, 1, 1], [4, 0, 3]] }]
const ex78_out: InputAction = false
const ex79_in: DepthState = [2, { "players": [{ "color": "black", "score": 2, "places": [[1, 1], [3, 0], [3, 3]] }, { "color": "red", "score": 1, "places": [[3, 2], [0, 1], [0, 3]] }, { "color": "brown", "score": 4, "places": [[4, 2], [4, 3], [5, 2]] }], "board": [[0, 2, 3, 2], [3, 1, 0, 4], [0, 3, 1, 0], [3, 3, 2, 1], [3, 3, 4, 4], [0, 0, 4, 0]] }]
const ex79_out: InputAction = [[3, 0], [2, 1]]
const ex8_in: DepthState = [2, { "players": [{ "color": "black", "score": 0, "places": [[5, 2], [4, 0], [3, 2]] }, { "color": "brown", "score": 0, "places": [[0, 0], [6, 2], [6, 1]] }, { "color": "white", "score": 5, "places": [[3, 0], [0, 1], [1, 2]] }], "board": [[3, 1, 3], [5, 2, 2], [1, 4], [3, 2, 5], [1, 4, 1], [2, 2, 2], [5, 5, 1], [2, 3, 3]] }]
const ex8_out: InputAction = [[3, 2], [5, 1]]
const ex80_in: DepthState = [2, { "players": [{ "color": "white", "score": 0, "places": [[4, 1], [0, 0], [3, 2]] }, { "color": "red", "score": 0, "places": [[1, 0], [1, 2], [2, 0]] }, { "color": "brown", "score": 5, "places": [[2, 1], [3, 0], [2, 3]] }], "board": [[1, 2, 3, 2], [4, 0, 5, 4], [1, 1, 0, 2], [2, 1, 1, 0], [1, 1, 0, 1], [0, 2, 4, 1]] }]
const ex80_out: InputAction = [[3, 2], [4, 3]]
const ex81_in: DepthState = [2, { "players": [{ "color": "black", "score": 2, "places": [[0, 0], [1, 1], [0, 1], [2, 2]] }, { "color": "red", "score": 0, "places": [[3, 0], [2, 1], [1, 2], [3, 2]] }], "board": [[1, 2, 5], [2, 1, 4], [1, 3, 5], [2, 1, 1]] }]
const ex81_out: InputAction = [[0, 1], [1, 0]]
const ex82_in: DepthState = [1, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [0, 1], [1, 1]] }, { "color": "brown", "score": 0, "places": [[2, 0], [3, 0], [2, 1], [3, 1]] }], "board": [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex82_out: InputAction = [[1, 1], [0, 2]]
const ex83_in: DepthState = [2, { "players": [{ "color": "red", "score": 3, "places": [[0, 0], [1, 0], [0, 1], [1, 1]] }, { "color": "brown", "score": 5, "places": [[2, 0], [3, 0], [2, 1], [3, 1]] }], "board": [[1, 1, 2, 3], [1, 2, 0, 0], [1, 1, 1, 2], [1, 1, 3, 1]] }]
const ex83_out: InputAction = [[1, 1], [3, 2]]
const ex84_in: DepthState = [2, { "players": [{ "color": "red", "score": 3, "places": [[0, 0], [1, 0], [2, 0], [0, 1]] }, { "color": "brown", "score": 5, "places": [[3, 0], [1, 1], [1, 2], [3, 2]] }], "board": [[1, 1, 2], [1, 2, 1], [1, 0, 1], [1, 1, 3]] }]
const ex84_out: InputAction = false
const ex85_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [1, 0], [3, 2], [1, 1]] }, { "color": "brown", "score": 0, "places": [[2, 0], [3, 0], [2, 1], [3, 1]] }], "board": [[1, 5, 1], [1, 1, 4], [1, 1, 2], [1, 1, 1]] }]
const ex85_out: InputAction = [[3, 2], [1, 2]]
const ex86_in: DepthState = [2, { "players": [{ "color": "red", "score": 0, "places": [[0, 0], [0, 2], [1, 1], [2, 0]] }, { "color": "white", "score": 0, "places": [[0, 1], [1, 0], [1, 2], [2, 1]] }], "board": [[1, 2, 3], [3, 2, 1], [4, 5, 3], [2, 3, 4]] }]
const ex86_out: InputAction = [[0, 2], [2, 2]]
const ex87_in: DepthState = [1, { "players": [{ "color": "white", "score": 0, "places": [[0, 1], [1, 1]] }, { "color": "brown", "score": 0, "places": [[0, 0], [1, 0]] }, { "color": "red", "score": 0, "places": [[0, 2], [1, 2]] }, { "color": "black", "score": 0, "places": [[0, 3], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }]
const ex87_out: InputAction = [[0, 1], [2, 1]]
const ex88_in: DepthState = [2, { "players": [{ "color": "white", "score": 0, "places": [[0, 1], [1, 1]] }, { "color": "brown", "score": 0, "places": [[0, 0], [1, 0]] }, { "color": "red", "score": 0, "places": [[0, 2], [1, 2]] }, { "color": "black", "score": 0, "places": [[0, 3], [1, 3]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1]] }]
const ex88_out: InputAction = false
const ex89_in: DepthState = [1, { "players": [{ "color": "brown", "score": 0, "places": [[0, 0], [0, 2], [3, 3], [5, 1]] }, { "color": "white", "score": 0, "places": [[2, 0], [0, 3], [3, 1], [5, 0]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 3], [1, 1, 1, 1]] }]
const ex89_out: InputAction = [[0, 0], [1, 0]]
const ex9_in: DepthState = [2, { "players": [{ "color": "brown", "score": 0, "places": [[0, 0], [0, 2], [0, 3], [0, 4]] }, { "color": "white", "score": 0, "places": [[0, 1], [3, 2], [4, 1], [2, 2]] }], "board": [[2, 2, 3, 4, 1], [0], [0, 0, 5], [1, 1, 1, 2, 5], [5, 3, 4, 2, 1]] }]
const ex9_out: InputAction = false
const ex90_in: DepthState = [1, { "players": [{ "color": "brown", "score": 0, "places": [[0, 0], [0, 1], [0, 2], [0, 3]] }, { "color": "white", "score": 0, "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }], "board": [[1, 1, 1, 1], [2, 2, 4, 4], [0, 0, 0, 0], [0, 0, 0, 0], [4, 4, 2, 2], [1, 1, 1, 1]] }]
const ex90_out: InputAction = [[0, 0], [1, 0]]
const ex91_in: DepthState = [2, { "players": [{ "color": "brown", "score": 0, "places": [[0, 0], [0, 2], [3, 3], [4, 1]] }, { "color": "white", "score": 0, "places": [[2, 0], [0, 3], [3, 1], [5, 0]] }], "board": [[1, 0, 1, 1], [1, 2, 1, 1], [1, 0, 1, 2], [1, 1, 5, 1], [1, 1, 1, 0], [1, 1, 1, 4]] }]
const ex91_out: InputAction = [[0, 2], [2, 3]]
const ex92_in: DepthState = [2, { "players": [{ "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex92_out: InputAction = false
const ex93_in: DepthState = [2, { "players": [{ "places": [[4, 1], [4, 0], [0, 0]], "score": 0, "color": "red" }, { "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1]] }]
const ex93_out: InputAction = [[0, 0], [1, 0]]
const ex94_in: DepthState = [1, { "board": [[0, 0, 0, 0, 0], [1, 2, 0, 4, 0], [], [1], [1, 1, 1, 1]], "players": [{ "score": 0, "color": "red", "places": [[1, 0], [1, 1], [1, 3], [3, 0]] }, { "score": 0, "color": "brown", "places": [[4, 0], [4, 1], [4, 2], [4, 3]] }] }]
const ex94_out: InputAction = false
const ex95_in: DepthState = [2, { "players": [{ "places": [[5, 2], [5, 1], [5, 0]], "score": 0, "color": "white" }, { "places": [[4, 2], [4, 1], [4, 0]], "score": 0, "color": "black" }, { "places": [[6, 2], [6, 1], [6, 0]], "score": 0, "color": "brown" }], "board": [[1, 1, 1], [1, 1, 1], [0, 0, 0], [0, 0, 0], [1, 1, 1], [1, 1, 1], [1, 1, 1]] }]
const ex95_out: InputAction = false
const ex96_in: DepthState = [2, { "players": [{ "color": "red", "score": 1, "places": [[0, 1], [1, 1], [1, 0], [2, 3]] }, { "color": "black", "score": 0, "places": [[0, 0], [2, 0], [2, 1], [2, 2]] }], "board": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }]
const ex96_out: InputAction = [[1, 1], [0, 2]]
const ex97_in: DepthState = [2, { "players": [{ "color": "red", "score": 1, "places": [[0, 0], [0, 2], [0, 1], [2, 3]] }, { "color": "white", "score": 1, "places": [[2, 0], [1, 2], [2, 2], [1, 3]] }], "board": [[1, 2, 3, 4], [1, 0, 1, 1], [1, 2, 1, 5]] }]
const ex97_out: InputAction = [[2, 3], [0, 3]]
const ex98_in: DepthState = [2, { "players": [{ "color": "white", "score": 1, "places": [[1, 1], [1, 2], [2, 3], [1, 3]] }, { "color": "brown", "score": 0, "places": [[0, 0], [2, 0], [2, 1], [2, 2]] }], "board": [[1, 0, 4, 5], [2, 3, 4, 5], [2, 3, 5, 3], [3, 3, 3, 3]] }]
const ex98_out: InputAction = [[1, 2], [0, 2]]
const ex99_in: DepthState = [2, { "players": [{ "color": "black", "score": 1, "places": [[1, 1], [1, 2], [4, 4], [2, 4]] }, { "color": "white", "score": 1, "places": [[0, 0], [3, 2], [1, 3], [2, 3]] }], "board": [[1, 3, 4, 5, 3], [2, 3, 4, 5, 3], [2, 3, 0, 3, 3], [3, 3, 3, 3, 4], [2, 3, 5, 3, 3]] }]
const ex99_out: InputAction = [[1, 1], [0, 1]]

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
  it("ex5_in ->  ex5_out", () => {
    assert.deepEqual(xStrategy(ex5_in), ex5_out)
  })
  it("ex6_in ->  ex6_out", () => {
    assert.deepEqual(xStrategy(ex6_in), ex6_out)
  })
  it("ex7_in ->  ex7_out", () => {
    assert.deepEqual(xStrategy(ex7_in), ex7_out)
  })
  it("ex8_in ->  ex8_out", () => {
    assert.deepEqual(xStrategy(ex8_in), ex8_out)
  })
  it("ex9_in ->  ex9_out", () => {
    assert.deepEqual(xStrategy(ex9_in), ex9_out)
  })
  it("ex10_in ->  ex10_out", () => {
    assert.deepEqual(xStrategy(ex10_in), ex10_out)
  })
  it("ex11_in ->  ex11_out", () => {
    assert.deepEqual(xStrategy(ex11_in), ex11_out)
  })
  it("ex12_in ->  ex12_out", () => {
    assert.deepEqual(xStrategy(ex12_in), ex12_out)
  })
  it("ex13_in ->  ex13_out", () => {
    assert.deepEqual(xStrategy(ex13_in), ex13_out)
  })
  it("ex14_in ->  ex14_out", () => {
    assert.deepEqual(xStrategy(ex14_in), ex14_out)
  })
  it("ex15_in ->  ex15_out", () => {
    assert.deepEqual(xStrategy(ex15_in), ex15_out)
  })
  it("ex16_in ->  ex16_out", () => {
    assert.deepEqual(xStrategy(ex16_in), ex16_out)
  })
  it("ex17_in ->  ex17_out", () => {
    assert.deepEqual(xStrategy(ex17_in), ex17_out)
  })
  it("ex18_in ->  ex18_out", () => {
    assert.deepEqual(xStrategy(ex18_in), ex18_out)
  })
  it("ex19_in ->  ex19_out", () => {
    assert.deepEqual(xStrategy(ex19_in), ex19_out)
  })
  it("ex20_in ->  ex20_out", () => {
    assert.deepEqual(xStrategy(ex20_in), ex20_out)
  })
  it("ex21_in ->  ex21_out", () => {
    assert.deepEqual(xStrategy(ex21_in), ex21_out)
  })
  it("ex22_in ->  ex22_out", () => {
    assert.deepEqual(xStrategy(ex22_in), ex22_out)
  })
  it("ex23_in ->  ex23_out", () => {
    assert.deepEqual(xStrategy(ex23_in), ex23_out)
  })
  it("ex24_in ->  ex24_out", () => {
    assert.deepEqual(xStrategy(ex24_in), ex24_out)
  })
  it("ex25_in ->  ex25_out", () => {
    assert.deepEqual(xStrategy(ex25_in), ex25_out)
  })
  it("ex26_in ->  ex26_out", () => {
    assert.deepEqual(xStrategy(ex26_in), ex26_out)
  })
  it("ex27_in ->  ex27_out", () => {
    assert.deepEqual(xStrategy(ex27_in), ex27_out)
  })
  it("ex28_in ->  ex28_out", () => {
    assert.deepEqual(xStrategy(ex28_in), ex28_out)
  })
  it("ex29_in ->  ex29_out", () => {
    assert.deepEqual(xStrategy(ex29_in), ex29_out)
  })
  it("ex30_in ->  ex30_out", () => {
    assert.deepEqual(xStrategy(ex30_in), ex30_out)
  })
  it("ex31_in ->  ex31_out", () => {
    assert.deepEqual(xStrategy(ex31_in), ex31_out)
  })
  it("ex32_in ->  ex32_out", () => {
    assert.deepEqual(xStrategy(ex32_in), ex32_out)
  })
  it("ex33_in ->  ex33_out", () => {
    assert.deepEqual(xStrategy(ex33_in), ex33_out)
  })
  it("ex34_in ->  ex34_out", () => {
    assert.deepEqual(xStrategy(ex34_in), ex34_out)
  })
  it("ex35_in ->  ex35_out", () => {
    assert.deepEqual(xStrategy(ex35_in), ex35_out)
  })
  it("ex36_in ->  ex36_out", () => {
    assert.deepEqual(xStrategy(ex36_in), ex36_out)
  })
  it("ex37_in ->  ex37_out", () => {
    assert.deepEqual(xStrategy(ex37_in), ex37_out)
  })
  it("ex38_in ->  ex38_out", () => {
    assert.deepEqual(xStrategy(ex38_in), ex38_out)
  })
  it("ex39_in ->  ex39_out", () => {
    assert.deepEqual(xStrategy(ex39_in), ex39_out)
  })
  it("ex40_in ->  ex40_out", () => {
    assert.deepEqual(xStrategy(ex40_in), ex40_out)
  })
  it("ex41_in ->  ex41_out", () => {
    assert.deepEqual(xStrategy(ex41_in), ex41_out)
  })
  it("ex42_in ->  ex42_out", () => {
    assert.deepEqual(xStrategy(ex42_in), ex42_out)
  })
  it("ex43_in ->  ex43_out", () => {
    assert.deepEqual(xStrategy(ex43_in), ex43_out)
  })
  it("ex44_in ->  ex44_out", () => {
    assert.deepEqual(xStrategy(ex44_in), ex44_out)
  })
  it("ex45_in ->  ex45_out", () => {
    assert.deepEqual(xStrategy(ex45_in), ex45_out)
  })
  it("ex46_in ->  ex46_out", () => {
    assert.deepEqual(xStrategy(ex46_in), ex46_out)
  })
  it("ex47_in ->  ex47_out", () => {
    assert.deepEqual(xStrategy(ex47_in), ex47_out)
  })
  it("ex48_in ->  ex48_out", () => {
    assert.deepEqual(xStrategy(ex48_in), ex48_out)
  })
  it("ex49_in ->  ex49_out", () => {
    assert.deepEqual(xStrategy(ex49_in), ex49_out)
  })
  it("ex50_in ->  ex50_out", () => {
    assert.deepEqual(xStrategy(ex50_in), ex50_out)
  })
  it("ex51_in ->  ex51_out", () => {
    assert.deepEqual(xStrategy(ex51_in), ex51_out)
  })
  it("ex52_in ->  ex52_out", () => {
    assert.deepEqual(xStrategy(ex52_in), ex52_out)
  })
  it("ex53_in ->  ex53_out", () => {
    assert.deepEqual(xStrategy(ex53_in), ex53_out)
  })
  it("ex54_in ->  ex54_out", () => {
    assert.deepEqual(xStrategy(ex54_in), ex54_out)
  })
  it("ex55_in ->  ex55_out", () => {
    assert.deepEqual(xStrategy(ex55_in), ex55_out)
  })
  it("ex56_in ->  ex56_out", () => {
    assert.deepEqual(xStrategy(ex56_in), ex56_out)
  })
  it("ex57_in ->  ex57_out", () => {
    assert.deepEqual(xStrategy(ex57_in), ex57_out)
  })
  it("ex58_in ->  ex58_out", () => {
    assert.deepEqual(xStrategy(ex58_in), ex58_out)
  })
  it("ex59_in ->  ex59_out", () => {
    assert.deepEqual(xStrategy(ex59_in), ex59_out)
  })
  it("ex60_in ->  ex60_out", () => {
    assert.deepEqual(xStrategy(ex60_in), ex60_out)
  })
  it("ex61_in ->  ex61_out", () => {
    assert.deepEqual(xStrategy(ex61_in), ex61_out)
  })
  it("ex62_in ->  ex62_out", () => {
    assert.deepEqual(xStrategy(ex62_in), ex62_out)
  })
  it("ex63_in ->  ex63_out", () => {
    assert.deepEqual(xStrategy(ex63_in), ex63_out)
  })
  it("ex64_in ->  ex64_out", () => {
    assert.deepEqual(xStrategy(ex64_in), ex64_out)
  })
  it("ex65_in ->  ex65_out", () => {
    assert.deepEqual(xStrategy(ex65_in), ex65_out)
  })
  it("ex66_in ->  ex66_out", () => {
    assert.deepEqual(xStrategy(ex66_in), ex66_out)
  })
  it("ex67_in ->  ex67_out", () => {
    assert.deepEqual(xStrategy(ex67_in), ex67_out)
  })
  it("ex68_in ->  ex68_out", () => {
    assert.deepEqual(xStrategy(ex68_in), ex68_out)
  })
  it("ex69_in ->  ex69_out", () => {
    assert.deepEqual(xStrategy(ex69_in), ex69_out)
  })
  it("ex70_in ->  ex70_out", () => {
    assert.deepEqual(xStrategy(ex70_in), ex70_out)
  })
  it("ex71_in ->  ex71_out", () => {
    assert.deepEqual(xStrategy(ex71_in), ex71_out)
  })
  it("ex72_in ->  ex72_out", () => {
    assert.deepEqual(xStrategy(ex72_in), ex72_out)
  })
  it("ex73_in ->  ex73_out", () => {
    assert.deepEqual(xStrategy(ex73_in), ex73_out)
  })
  it("ex74_in ->  ex74_out", () => {
    assert.deepEqual(xStrategy(ex74_in), ex74_out)
  })
  it("ex75_in ->  ex75_out", () => {
    assert.deepEqual(xStrategy(ex75_in), ex75_out)
  })
  it("ex76_in ->  ex76_out", () => {
    assert.deepEqual(xStrategy(ex76_in), ex76_out)
  })
  it("ex77_in ->  ex77_out", () => {
    assert.deepEqual(xStrategy(ex77_in), ex77_out)
  })
  it("ex78_in ->  ex78_out", () => {
    assert.deepEqual(xStrategy(ex78_in), ex78_out)
  })
  it("ex79_in ->  ex79_out", () => {
    assert.deepEqual(xStrategy(ex79_in), ex79_out)
  })
  it("ex80_in ->  ex80_out", () => {
    assert.deepEqual(xStrategy(ex80_in), ex80_out)
  })
  it("ex81_in ->  ex81_out", () => {
    assert.deepEqual(xStrategy(ex81_in), ex81_out)
  })
  it("ex82_in ->  ex82_out", () => {
    assert.deepEqual(xStrategy(ex82_in), ex82_out)
  })
  it("ex83_in ->  ex83_out", () => {
    assert.deepEqual(xStrategy(ex83_in), ex83_out)
  })
  it("ex84_in ->  ex84_out", () => {
    assert.deepEqual(xStrategy(ex84_in), ex84_out)
  })
  it("ex85_in ->  ex85_out", () => {
    assert.deepEqual(xStrategy(ex85_in), ex85_out)
  })
  it("ex86_in ->  ex86_out", () => {
    assert.deepEqual(xStrategy(ex86_in), ex86_out)
  })
  it("ex87_in ->  ex87_out", () => {
    assert.deepEqual(xStrategy(ex87_in), ex87_out)
  })
  it("ex88_in ->  ex88_out", () => {
    assert.deepEqual(xStrategy(ex88_in), ex88_out)
  })
  it("ex89_in ->  ex89_out", () => {
    assert.deepEqual(xStrategy(ex89_in), ex89_out)
  })
  it("ex90_in ->  ex90_out", () => {
    assert.deepEqual(xStrategy(ex90_in), ex90_out)
  })
  it("ex91_in ->  ex91_out", () => {
    assert.deepEqual(xStrategy(ex91_in), ex91_out)
  })
  it("ex92_in ->  ex92_out", () => {
    assert.deepEqual(xStrategy(ex92_in), ex92_out)
  })
  it("ex93_in ->  ex93_out", () => {
    assert.deepEqual(xStrategy(ex93_in), ex93_out)
  })
  it("ex94_in ->  ex94_out", () => {
    assert.deepEqual(xStrategy(ex94_in), ex94_out)
  })
  it("ex95_in ->  ex95_out", () => {
    assert.deepEqual(xStrategy(ex95_in), ex95_out)
  })
  it("ex96_in ->  ex96_out", () => {
    assert.deepEqual(xStrategy(ex96_in), ex96_out)
  })
  it("ex97_in ->  ex97_out", () => {
    assert.deepEqual(xStrategy(ex97_in), ex97_out)
  })
  it("ex98_in ->  ex98_out", () => {
    assert.deepEqual(xStrategy(ex98_in), ex98_out)
  })
  it("ex99_in ->  ex99_out", () => {
    assert.deepEqual(xStrategy(ex99_in), ex99_out)
  })
  it("ex100_in ->  ex100_out", () => {
    assert.deepEqual(xStrategy(ex100_in), ex100_out)
  })
  it("ex101_in ->  ex101_out", () => {
    assert.deepEqual(xStrategy(ex101_in), ex101_out)
  })
  it("ex102_in ->  ex102_out", () => {
    assert.deepEqual(xStrategy(ex102_in), ex102_out)
  })
  it("ex103_in ->  ex103_out", () => {
    assert.deepEqual(xStrategy(ex103_in), ex103_out)
  })
  it("ex104_in ->  ex104_out", () => {
    assert.deepEqual(xStrategy(ex104_in), ex104_out)
  })
  it("ex105_in ->  ex105_out", () => {
    assert.deepEqual(xStrategy(ex105_in), ex105_out)
  })
  it("ex106_in ->  ex106_out", () => {
    assert.deepEqual(xStrategy(ex106_in), ex106_out)
  })
  it("ex107_in ->  ex107_out", () => {
    assert.deepEqual(xStrategy(ex107_in), ex107_out)
  })
  it("ex108_in ->  ex108_out", () => {
    assert.deepEqual(xStrategy(ex108_in), ex108_out)
  })
  it("ex109_in ->  ex109_out", () => {
    assert.deepEqual(xStrategy(ex109_in), ex109_out)
  })
  it("ex110_in ->  ex110_out", () => {
    assert.deepEqual(xStrategy(ex110_in), ex110_out)
  })
  it("ex111_in ->  ex111_out", () => {
    assert.deepEqual(xStrategy(ex111_in), ex111_out)
  })
  it("ex112_in ->  ex112_out", () => {
    assert.deepEqual(xStrategy(ex112_in), ex112_out)
  })
  it("ex113_in ->  ex113_out", () => {
    assert.deepEqual(xStrategy(ex113_in), ex113_out)
  })
  it("ex114_in ->  ex114_out", () => {
    assert.deepEqual(xStrategy(ex114_in), ex114_out)
  })
  it("ex115_in ->  ex115_out", () => {
    assert.deepEqual(xStrategy(ex115_in), ex115_out)
  })
  it("ex116_in ->  ex116_out", () => {
    assert.deepEqual(xStrategy(ex116_in), ex116_out)
  })
  it("ex117_in ->  ex117_out", () => {
    assert.deepEqual(xStrategy(ex117_in), ex117_out)
  })
  it("ex118_in ->  ex118_out", () => {
    assert.deepEqual(xStrategy(ex118_in), ex118_out)
  })
  it("ex119_in ->  ex119_out", () => {
    assert.deepEqual(xStrategy(ex119_in), ex119_out)
  })
  it("ex120_in ->  ex120_out", () => {
    assert.deepEqual(xStrategy(ex120_in), ex120_out)
  })
  it("ex121_in ->  ex121_out", () => {
    assert.deepEqual(xStrategy(ex121_in), ex121_out)
  })
  it("ex122_in ->  ex122_out", () => {
    assert.deepEqual(xStrategy(ex122_in), ex122_out)
  })
  it("ex123_in ->  ex123_out", () => {
    assert.deepEqual(xStrategy(ex123_in), ex123_out)
  })
  it("ex124_in ->  ex124_out", () => {
    assert.deepEqual(xStrategy(ex124_in), ex124_out)
  })
  it("ex125_in ->  ex125_out", () => {
    assert.deepEqual(xStrategy(ex125_in), ex125_out)
  })
  it("ex126_in ->  ex126_out", () => {
    assert.deepEqual(xStrategy(ex126_in), ex126_out)
  })
  it("ex127_in ->  ex127_out", () => {
    assert.deepEqual(xStrategy(ex127_in), ex127_out)
  })
  it("ex128_in ->  ex128_out", () => {
    assert.deepEqual(xStrategy(ex128_in), ex128_out)
  })
  it("ex129_in ->  ex129_out", () => {
    assert.deepEqual(xStrategy(ex129_in), ex129_out)
  })
  it("ex130_in ->  ex130_out", () => {
    assert.deepEqual(xStrategy(ex130_in), ex130_out)
  })
  it("ex131_in ->  ex131_out", () => {
    assert.deepEqual(xStrategy(ex131_in), ex131_out)
  })
  it("ex132_in ->  ex132_out", () => {
    assert.deepEqual(xStrategy(ex132_in), ex132_out)
  })
  it("ex133_in ->  ex133_out", () => {
    assert.deepEqual(xStrategy(ex133_in), ex133_out)
  })
  it("ex134_in ->  ex134_out", () => {
    assert.deepEqual(xStrategy(ex134_in), ex134_out)
  })
  it("ex135_in ->  ex135_out", () => {
    assert.deepEqual(xStrategy(ex135_in), ex135_out)
  })
  it("ex136_in ->  ex136_out", () => {
    assert.deepEqual(xStrategy(ex136_in), ex136_out)
  })
  it("ex137_in ->  ex137_out", () => {
    assert.deepEqual(xStrategy(ex137_in), ex137_out)
  })
  it("ex138_in ->  ex138_out", () => {
    assert.deepEqual(xStrategy(ex138_in), ex138_out)
  })
  it("ex139_in ->  ex139_out", () => {
    assert.deepEqual(xStrategy(ex139_in), ex139_out)
  })
  it("ex140_in ->  ex140_out", () => {
    assert.deepEqual(xStrategy(ex140_in), ex140_out)
  })
  it("ex141_in ->  ex141_out", () => {
    assert.deepEqual(xStrategy(ex141_in), ex141_out)
  })
  it("ex142_in ->  ex142_out", () => {
    assert.deepEqual(xStrategy(ex142_in), ex142_out)
  })
  it("ex143_in ->  ex143_out", () => {
    assert.deepEqual(xStrategy(ex143_in), ex143_out)
  })
  it("ex144_in ->  ex144_out", () => {
    assert.deepEqual(xStrategy(ex144_in), ex144_out)
  })
  it("ex145_in ->  ex145_out", () => {
    assert.deepEqual(xStrategy(ex145_in), ex145_out)
  })
  it("ex146_in ->  ex146_out", () => {
    assert.deepEqual(xStrategy(ex146_in), ex146_out)
  })
  it("ex147_in ->  ex147_out", () => {
    assert.deepEqual(xStrategy(ex147_in), ex147_out)
  })
  it("ex148_in ->  ex148_out", () => {
    assert.deepEqual(xStrategy(ex148_in), ex148_out)
  })
  it("ex149_in ->  ex149_out", () => {
    assert.deepEqual(xStrategy(ex149_in), ex149_out)
  })
  it("ex150_in ->  ex150_out", () => {
    assert.deepEqual(xStrategy(ex150_in), ex150_out)
  })
  it("ex151_in ->  ex151_out", () => {
    assert.deepEqual(xStrategy(ex151_in), ex151_out)
  })
  it("ex152_in ->  ex152_out", () => {
    assert.deepEqual(xStrategy(ex152_in), ex152_out)
  })
  it("ex153_in ->  ex153_out", () => {
    assert.deepEqual(xStrategy(ex153_in), ex153_out)
  })
  it("ex154_in ->  ex154_out", () => {
    assert.deepEqual(xStrategy(ex154_in), ex154_out)
  })
  it("ex155_in ->  ex155_out", () => {
    assert.deepEqual(xStrategy(ex155_in), ex155_out)
  })
  it("ex156_in ->  ex156_out", () => {
    assert.deepEqual(xStrategy(ex156_in), ex156_out)
  })
  it("ex157_in ->  ex157_out", () => {
    assert.deepEqual(xStrategy(ex157_in), ex157_out)
  })
  it("ex158_in ->  ex158_out", () => {
    assert.deepEqual(xStrategy(ex158_in), ex158_out)
  })
  it("ex159_in ->  ex159_out", () => {
    assert.deepEqual(xStrategy(ex159_in), ex159_out)
  })
  it("ex160_in ->  ex160_out", () => {
    assert.deepEqual(xStrategy(ex160_in), ex160_out)
  })
  it("ex161_in ->  ex161_out", () => {
    assert.deepEqual(xStrategy(ex161_in), ex161_out)
  })
  it("ex162_in ->  ex162_out", () => {
    assert.deepEqual(xStrategy(ex162_in), ex162_out)
  })
  it("ex163_in ->  ex163_out", () => {
    assert.deepEqual(xStrategy(ex163_in), ex163_out)
  })
  it("ex164_in ->  ex164_out", () => {
    assert.deepEqual(xStrategy(ex164_in), ex164_out)
  })
  it("ex165_in ->  ex165_out", () => {
    assert.deepEqual(xStrategy(ex165_in), ex165_out)
  })
  it("ex166_in ->  ex166_out", () => {
    assert.deepEqual(xStrategy(ex166_in), ex166_out)
  })
  it("ex167_in ->  ex167_out", () => {
    assert.deepEqual(xStrategy(ex167_in), ex167_out)
  })
  it("ex168_in ->  ex168_out", () => {
    assert.deepEqual(xStrategy(ex168_in), ex168_out)
  })
  it("ex169_in ->  ex169_out", () => {
    assert.deepEqual(xStrategy(ex169_in), ex169_out)
  })
  it("ex170_in ->  ex170_out", () => {
    assert.deepEqual(xStrategy(ex170_in), ex170_out)
  })
  it("ex171_in ->  ex171_out", () => {
    assert.deepEqual(xStrategy(ex171_in), ex171_out)
  })
  it("ex172_in ->  ex172_out", () => {
    assert.deepEqual(xStrategy(ex172_in), ex172_out)
  })
  it("ex173_in ->  ex173_out", () => {
    assert.deepEqual(xStrategy(ex173_in), ex173_out)
  })
  it("ex174_in ->  ex174_out", () => {
    assert.deepEqual(xStrategy(ex174_in), ex174_out)
  })
  it("ex175_in ->  ex175_out", () => {
    assert.deepEqual(xStrategy(ex175_in), ex175_out)
  })
  it("ex176_in ->  ex176_out", () => {
    assert.deepEqual(xStrategy(ex176_in), ex176_out)
  })
  it("ex177_in ->  ex177_out", () => {
    assert.deepEqual(xStrategy(ex177_in), ex177_out)
  })
  it("ex178_in ->  ex178_out", () => {
    assert.deepEqual(xStrategy(ex178_in), ex178_out)
  })
  it("ex179_in ->  ex179_out", () => {
    assert.deepEqual(xStrategy(ex179_in), ex179_out)
  })
  it("ex180_in ->  ex180_out", () => {
    assert.deepEqual(xStrategy(ex180_in), ex180_out)
  })
  it("ex181_in ->  ex181_out", () => {
    assert.deepEqual(xStrategy(ex181_in), ex181_out)
  })
  it("ex182_in ->  ex182_out", () => {
    assert.deepEqual(xStrategy(ex182_in), ex182_out)
  })
  it("ex183_in ->  ex183_out", () => {
    assert.deepEqual(xStrategy(ex183_in), ex183_out)
  })
  it("ex184_in ->  ex184_out", () => {
    assert.deepEqual(xStrategy(ex184_in), ex184_out)
  })
  it("ex185_in ->  ex185_out", () => {
    assert.deepEqual(xStrategy(ex185_in), ex185_out)
  })
  it("ex186_in ->  ex186_out", () => {
    assert.deepEqual(xStrategy(ex186_in), ex186_out)
  })
  it("ex187_in ->  ex187_out", () => {
    assert.deepEqual(xStrategy(ex187_in), ex187_out)
  })
  it("ex188_in ->  ex188_out", () => {
    assert.deepEqual(xStrategy(ex188_in), ex188_out)
  })
  it("ex189_in ->  ex189_out", () => {
    assert.deepEqual(xStrategy(ex189_in), ex189_out)
  })
  it("ex190_in ->  ex190_out", () => {
    assert.deepEqual(xStrategy(ex190_in), ex190_out)
  })
  it("ex191_in ->  ex191_out", () => {
    assert.deepEqual(xStrategy(ex191_in), ex191_out)
  })
  it("ex192_in ->  ex192_out", () => {
    assert.deepEqual(xStrategy(ex192_in), ex192_out)
  })
  it("ex193_in ->  ex193_out", () => {
    assert.deepEqual(xStrategy(ex193_in), ex193_out)
  })
  it("ex194_in ->  ex194_out", () => {
    assert.deepEqual(xStrategy(ex194_in), ex194_out)
  })
  it("ex195_in ->  ex195_out", () => {
    assert.deepEqual(xStrategy(ex195_in), ex195_out)
  })
  it("ex196_in ->  ex196_out", () => {
    assert.deepEqual(xStrategy(ex196_in), ex196_out)
  })

}
)