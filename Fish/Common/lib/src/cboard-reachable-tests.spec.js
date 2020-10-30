"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cboard_reachable_1 = require("./cboard-reachable");
const cstate_1 = require("./cstate");
const run_1 = require("./run");
const cboard_reachable_2 = require("./cboard-reachable");
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /   3    \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/   3    \_____/   1    \______/    4    \_____/   1    \______/    4    \_____/   4    \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \      /   1   \      /   2    \       /   3   \      /   4    \       /   3   \      /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /   4    \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   |   3   |   2   |   1   |   5   |   4   |   2   |   1   |   3   |   4   |   1   |   4   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   |   2   |   3   |   3   |   5   |   4   |   1   |   3   |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx|   4   |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
//
// [ ROW, COL] -> FALSE | [ROW, COL]
// 
describe("cboard reachable tests", () => {
    it("5x6 board: north of [0, 1] is [0, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([0, 1]), [0, 0]); });
    it("5x6 board: north of [2, 1] is [2, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([2, 1]), [2, 0]); });
    it("5x6 board: north of [4, 1] is [4, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([4, 1]), [4, 0]); });
    it("5x6 board: north of [6, 1] is [6, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([6, 1]), [6, 0]); });
    it("5x6 board: north of [8, 1] is [8, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([8, 1]), [8, 0]); });
    it("5x6 board: north of [10, 1] is [10, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([10, 1]), [10, 0]); });
    it("5x6 board: north of [1, 1] is [1, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([1, 1]), [1, 0]); });
    it("5x6 board: north of [3, 1] is [3, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([3, 1]), [3, 0]); });
    it("5x6 board: north of [5, 1] is [5, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([5, 1]), [5, 0]); });
    it("5x6 board: north of [7, 1] is [7, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([7, 1]), [7, 0]); });
    it("5x6 board: north of [9, 1] is [9, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([9, 1]), [9, 0]); });
    it("5x6 board: north of [11, 1] is [11, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([11, 1]), [11, 0]); });
    it("5x6 board: north of [0, 2] is [0, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([0, 2]), [0, 1]); });
    it("5x6 board: north of [2, 2] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([2, 2]), [2, 1]); });
    it("5x6 board: north of [4, 2] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([4, 2]), [4, 1]); });
    it("5x6 board: north of [6, 2] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([6, 2]), [6, 1]); });
    it("5x6 board: north of [8, 2] is [8, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([8, 2]), [8, 1]); });
    it("5x6 board: north of [10, 2] is [10, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([10, 2]), [10, 1]); });
    it("5x6 board: south of [0, 0] is [0, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([0, 0]), [0, 1]); });
    it("5x6 board: south of [2, 0] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([2, 0]), [2, 1]); });
    it("5x6 board: south of [4, 0] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([4, 0]), [4, 1]); });
    it("5x6 board: south of [6, 0] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([6, 0]), [6, 1]); });
    it("5x6 board: south of [8, 0] is [8, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([8, 0]), [8, 1]); });
    it("5x6 board: south of [10, 0] is [10, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([10, 0]), [10, 1]); });
    it("5x6 board: south of [1, 0] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([1, 0]), [1, 1]); });
    it("5x6 board: south of [3, 0] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([3, 0]), [3, 1]); });
    it("5x6 board: south of [5, 0] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([5, 0]), [5, 1]); });
    it("5x6 board: south of [7, 0] is [7, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([7, 0]), [7, 1]); });
    it("5x6 board: south of [9, 0] is [9, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([9, 0]), [9, 1]); });
    it("5x6 board: south of [11, 0] is [11, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([11, 0]), [11, 1]); });
    it("5x6 board: south of [0, 1] is [0, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([0, 1]), [0, 2]); });
    it("5x6 board: south of [2, 1] is [2, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([2, 1]), [2, 2]); });
    it("5x6 board: south of [4, 1] is [4, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([4, 1]), [4, 2]); });
    it("5x6 board: south of [6, 1] is [6, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([6, 1]), [6, 2]); });
    it("5x6 board: south of [8, 1] is [8, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([8, 1]), [8, 2]); });
    it("5x6 board: south of [10, 1] is [10, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([10, 1]), [10, 2]); });
    it("5x6 board: northeast of [1, 0] is [2, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([1, 0]), [2, 0]); });
    it("5x6 board: northeast of [3, 0] is [4, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([3, 0]), [4, 0]); });
    it("5x6 board: northeast of [5, 0] is [6, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([5, 0]), [6, 0]); });
    it("5x6 board: northeast of [7, 0] is [8, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([7, 0]), [8, 0]); });
    it("5x6 board: northeast of [9, 0] is [10, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([9, 0]), [10, 0]); });
    it("5x6 board: northeast of [0, 1] is [1, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([0, 1]), [1, 0]); });
    it("5x6 board: northeast of [2, 1] is [3, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([2, 1]), [3, 0]); });
    it("5x6 board: northeast of [4, 1] is [5, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([4, 1]), [5, 0]); });
    it("5x6 board: northeast of [6, 1] is [7, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([6, 1]), [7, 0]); });
    it("5x6 board: northeast of [8, 1] is [9, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([8, 1]), [9, 0]); });
    it("5x6 board: northeast of [10, 1] is [11, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([10, 1]), [11, 0]); });
    it("5x6 board: northeast of [1, 1] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([1, 1]), [2, 1]); });
    it("5x6 board: northeast of [3, 1] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([3, 1]), [4, 1]); });
    it("5x6 board: northeast of [5, 1] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([5, 1]), [6, 1]); });
    it("5x6 board: northeast of [7, 1] is [8, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([7, 1]), [8, 1]); });
    it("5x6 board: northeast of [9, 1] is [10, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([9, 1]), [10, 1]); });
    it("5x6 board: northeast of [0, 2] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([0, 2]), [1, 1]); });
    it("5x6 board: northeast of [2, 2] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([2, 2]), [3, 1]); });
    it("5x6 board: northeast of [4, 2] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([4, 2]), [5, 1]); });
    it("5x6 board: northeast of [6, 2] is [7, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([6, 2]), [7, 1]); });
    it("5x6 board: northeast of [8, 2] is [9, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([8, 2]), [9, 1]); });
    it("5x6 board: northeast of [10, 2] is [11, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([10, 2]), [11, 1]); });
    it("5x6 board: northwest of [1, 0] is [0, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([1, 0]), [0, 0]); });
    it("5x6 board: northwest of [3, 0] is [2, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([3, 0]), [2, 0]); });
    it("5x6 board: northwest of [5, 0] is [4, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([5, 0]), [4, 0]); });
    it("5x6 board: northwest of [7, 0] is [6, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([7, 0]), [6, 0]); });
    it("5x6 board: northwest of [9, 0] is [8, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([9, 0]), [8, 0]); });
    it("5x6 board: northwest of [11, 0] is [10, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([11, 0]), [10, 0]); });
    it("5x6 board: northwest of [2, 1] is [1, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([2, 1]), [1, 0]); });
    it("5x6 board: northwest of [4, 1] is [3, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([4, 1]), [3, 0]); });
    it("5x6 board: northwest of [6, 1] is [5, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([6, 1]), [5, 0]); });
    it("5x6 board: northwest of [8, 1] is [7, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([8, 1]), [7, 0]); });
    it("5x6 board: northwest of [10, 1] is [9, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([10, 1]), [9, 0]); });
    it("5x6 board: northwest of [1, 1] is [0, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([1, 1]), [0, 1]); });
    it("5x6 board: northwest of [3, 1] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([3, 1]), [2, 1]); });
    it("5x6 board: northwest of [5, 1] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([5, 1]), [4, 1]); });
    it("5x6 board: northwest of [7, 1] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([7, 1]), [6, 1]); });
    it("5x6 board: northwest of [9, 1] is [8, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([9, 1]), [8, 1]); });
    it("5x6 board: northwest of [11, 1] is [10, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([11, 1]), [10, 1]); });
    it("5x6 board: northwest of [2, 2] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([2, 2]), [1, 1]); });
    it("5x6 board: northwest of [4, 2] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([4, 2]), [3, 1]); });
    it("5x6 board: northwest of [6, 2] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([6, 2]), [5, 1]); });
    it("5x6 board: northwest of [8, 2] is [7, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([8, 2]), [7, 1]); });
    it("5x6 board: northwest of [10, 2] is [9, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([10, 2]), [9, 1]); });
    it("5x6 board: southwest of [2, 0] is [1, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([2, 0]), [1, 0]); });
    it("5x6 board: southwest of [4, 0] is [3, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([4, 0]), [3, 0]); });
    it("5x6 board: southwest of [6, 0] is [5, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([6, 0]), [5, 0]); });
    it("5x6 board: southwest of [8, 0] is [7, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([8, 0]), [7, 0]); });
    it("5x6 board: southwest of [10, 0] is [9, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([10, 0]), [9, 0]); });
    it("5x6 board: southwest of [1, 0] is [0, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([1, 0]), [0, 1]); });
    it("5x6 board: southwest of [3, 0] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([3, 0]), [2, 1]); });
    it("5x6 board: southwest of [5, 0] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([5, 0]), [4, 1]); });
    it("5x6 board: southwest of [7, 0] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([7, 0]), [6, 1]); });
    it("5x6 board: southwest of [9, 0] is [8, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([9, 0]), [8, 1]); });
    it("5x6 board: southwest of [11, 0] is [10, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([11, 0]), [10, 1]); });
    it("5x6 board: southwest of [2, 1] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([2, 1]), [1, 1]); });
    it("5x6 board: southwest of [4, 1] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([4, 1]), [3, 1]); });
    it("5x6 board: southwest of [6, 1] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([6, 1]), [5, 1]); });
    it("5x6 board: southwest of [8, 1] is [7, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([8, 1]), [7, 1]); });
    it("5x6 board: southwest of [10, 1] is [9, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([10, 1]), [9, 1]); });
    it("5x6 board: southwest of [1, 1] is [0, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([1, 1]), [0, 2]); });
    it("5x6 board: southwest of [3, 1] is [2, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([3, 1]), [2, 2]); });
    it("5x6 board: southwest of [5, 1] is [4, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([5, 1]), [4, 2]); });
    it("5x6 board: southwest of [7, 1] is [6, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([7, 1]), [6, 2]); });
    it("5x6 board: southwest of [9, 1] is [8, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([9, 1]), [8, 2]); });
    it("5x6 board: southwest of [11, 1] is [10, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([11, 1]), [10, 2]); });
    it("5x6 board: southeast of [0, 0] is [1, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([0, 0]), [1, 0]); });
    it("5x6 board: southeast of [2, 0] is [3, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([2, 0]), [3, 0]); });
    it("5x6 board: southeast of [4, 0] is [5, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([4, 0]), [5, 0]); });
    it("5x6 board: southeast of [6, 0] is [7, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([6, 0]), [7, 0]); });
    it("5x6 board: southeast of [8, 0] is [9, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([8, 0]), [9, 0]); });
    it("5x6 board: southeast of [10, 0] is [11, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([10, 0]), [11, 0]); });
    it("5x6 board: southeast of [1, 0] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([1, 0]), [2, 1]); });
    it("5x6 board: southeast of [3, 0] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([3, 0]), [4, 1]); });
    it("5x6 board: southeast of [5, 0] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([5, 0]), [6, 1]); });
    it("5x6 board: southeast of [7, 0] is [8, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([7, 0]), [8, 1]); });
    it("5x6 board: southeast of [9, 0] is [10, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([9, 0]), [10, 1]); });
    it("5x6 board: southeast of [0, 1] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([0, 1]), [1, 1]); });
    it("5x6 board: southeast of [2, 1] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([2, 1]), [3, 1]); });
    it("5x6 board: southeast of [4, 1] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([4, 1]), [5, 1]); });
    it("5x6 board: southeast of [6, 1] is [7, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([6, 1]), [7, 1]); });
    it("5x6 board: southeast of [8, 1] is [9, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([8, 1]), [9, 1]); });
    it("5x6 board: southeast of [10, 1] is [11, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([10, 1]), [11, 1]); });
    it("5x6 board: southeast of [1, 1] is [2, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([1, 1]), [2, 2]); });
    it("5x6 board: southeast of [3, 1] is [4, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([3, 1]), [4, 2]); });
    it("5x6 board: southeast of [5, 1] is [6, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([5, 1]), [6, 2]); });
    it("5x6 board: southeast of [7, 1] is [8, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([7, 1]), [8, 2]); });
    it("5x6 board: southeast of [9, 1] is [10, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([9, 1]), [10, 2]); });
});
describe("6 by 4 board", () => {
    it("north of [0, 1] is [0, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([0, 1]), [0, 0]); });
    it("north of [0, 2] is [0, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([0, 2]), [0, 1]); });
    it("north of [1, 1] is [1, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([1, 1]), [1, 0]); });
    it("north of [1, 2] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([1, 2]), [1, 1]); });
    it("north of [2, 1] is [2, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([2, 1]), [2, 0]); });
    it("north of [2, 2] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([2, 2]), [2, 1]); });
    it("north of [3, 1] is [3, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([3, 1]), [3, 0]); });
    it("north of [3, 2] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([3, 2]), [3, 1]); });
    it("north of [4, 1] is [4, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([4, 1]), [4, 0]); });
    it("north of [4, 2] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([4, 2]), [4, 1]); });
    it("north of [5, 1] is [5, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([5, 1]), [5, 0]); });
    it("north of [5, 2] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([5, 2]), [5, 1]); });
    it("north of [6, 1] is [6, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([6, 1]), [6, 0]); });
    it("north of [6, 2] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([6, 2]), [6, 1]); });
    it("north of [7, 1] is [7, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([7, 1]), [7, 0]); });
    it("north of [7, 2] is [7, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.north([7, 2]), [7, 1]); });
    it("northeast of [0, 1] is [1, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([0, 1]), [1, 0]); });
    it("northeast of [0, 2] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([0, 2]), [1, 1]); });
    it("northeast of [1, 0] is [2, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([1, 0]), [2, 0]); });
    it("northeast of [1, 1] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([1, 1]), [2, 1]); });
    it("northeast of [1, 2] is [2, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([1, 2]), [2, 2]); });
    it("northeast of [2, 1] is [3, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([2, 1]), [3, 0]); });
    it("northeast of [2, 2] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([2, 2]), [3, 1]); });
    it("northeast of [3, 0] is [4, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([3, 0]), [4, 0]); });
    it("northeast of [3, 1] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([3, 1]), [4, 1]); });
    it("northeast of [3, 2] is [4, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([3, 2]), [4, 2]); });
    it("northeast of [4, 1] is [5, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([4, 1]), [5, 0]); });
    it("northeast of [4, 2] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([4, 2]), [5, 1]); });
    it("northeast of [5, 0] is [6, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([5, 0]), [6, 0]); });
    it("northeast of [5, 1] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([5, 1]), [6, 1]); });
    it("northeast of [5, 2] is [6, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([5, 2]), [6, 2]); });
    it("northeast of [6, 1] is [7, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([6, 1]), [7, 0]); });
    it("northeast of [6, 2] is [7, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northeast([6, 2]), [7, 1]); });
    it("southeast of [0, 0] is [1, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([0, 0]), [1, 0]); });
    it("southeast of [0, 1] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([0, 1]), [1, 1]); });
    it("southeast of [0, 2] is [1, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([0, 2]), [1, 2]); });
    it("southeast of [1, 0] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([1, 0]), [2, 1]); });
    it("southeast of [1, 1] is [2, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([1, 1]), [2, 2]); });
    it("southeast of [2, 0] is [3, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([2, 0]), [3, 0]); });
    it("southeast of [2, 1] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([2, 1]), [3, 1]); });
    it("southeast of [2, 2] is [3, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([2, 2]), [3, 2]); });
    it("southeast of [3, 0] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([3, 0]), [4, 1]); });
    it("southeast of [3, 1] is [4, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([3, 1]), [4, 2]); });
    it("southeast of [4, 0] is [5, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([4, 0]), [5, 0]); });
    it("southeast of [4, 1] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([4, 1]), [5, 1]); });
    it("southeast of [4, 2] is [5, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([4, 2]), [5, 2]); });
    it("southeast of [5, 0] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([5, 0]), [6, 1]); });
    it("southeast of [5, 1] is [6, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([5, 1]), [6, 2]); });
    it("southeast of [6, 0] is [7, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([6, 0]), [7, 0]); });
    it("southeast of [6, 1] is [7, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([6, 1]), [7, 1]); });
    it("southeast of [6, 2] is [7, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southeast([6, 2]), [7, 2]); });
    it("south of [0, 0] is [0, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([0, 0]), [0, 1]); });
    it("south of [0, 1] is [0, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([0, 1]), [0, 2]); });
    it("south of [1, 0] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([1, 0]), [1, 1]); });
    it("south of [1, 1] is [1, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([1, 1]), [1, 2]); });
    it("south of [2, 0] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([2, 0]), [2, 1]); });
    it("south of [2, 1] is [2, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([2, 1]), [2, 2]); });
    it("south of [3, 0] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([3, 0]), [3, 1]); });
    it("south of [3, 1] is [3, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([3, 1]), [3, 2]); });
    it("south of [4, 0] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([4, 0]), [4, 1]); });
    it("south of [4, 1] is [4, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([4, 1]), [4, 2]); });
    it("south of [5, 0] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([5, 0]), [5, 1]); });
    it("south of [5, 1] is [5, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([5, 1]), [5, 2]); });
    it("south of [6, 0] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([6, 0]), [6, 1]); });
    it("south of [6, 1] is [6, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([6, 1]), [6, 2]); });
    it("south of [7, 0] is [7, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([7, 0]), [7, 1]); });
    it("south of [7, 1] is [7, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.south([7, 1]), [7, 2]); });
    it("southwest of [1, 0] is [0, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([1, 0]), [0, 1]); });
    it("southwest of [1, 1] is [0, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([1, 1]), [0, 2]); });
    it("southwest of [2, 0] is [1, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([2, 0]), [1, 0]); });
    it("southwest of [2, 1] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([2, 1]), [1, 1]); });
    it("southwest of [2, 2] is [1, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([2, 2]), [1, 2]); });
    it("southwest of [3, 0] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([3, 0]), [2, 1]); });
    it("southwest of [3, 1] is [2, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([3, 1]), [2, 2]); });
    it("southwest of [4, 0] is [3, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([4, 0]), [3, 0]); });
    it("southwest of [4, 1] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([4, 1]), [3, 1]); });
    it("southwest of [4, 2] is [3, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([4, 2]), [3, 2]); });
    it("southwest of [5, 0] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([5, 0]), [4, 1]); });
    it("southwest of [5, 1] is [4, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([5, 1]), [4, 2]); });
    it("southwest of [6, 0] is [5, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([6, 0]), [5, 0]); });
    it("southwest of [6, 1] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([6, 1]), [5, 1]); });
    it("southwest of [6, 2] is [5, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([6, 2]), [5, 2]); });
    it("southwest of [7, 0] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([7, 0]), [6, 1]); });
    it("southwest of [7, 1] is [6, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.southwest([7, 1]), [6, 2]); });
    it("northwest of [1, 0] is [0, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([1, 0]), [0, 0]); });
    it("northwest of [1, 1] is [0, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([1, 1]), [0, 1]); });
    it("northwest of [1, 2] is [0, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([1, 2]), [0, 2]); });
    it("northwest of [2, 1] is [1, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([2, 1]), [1, 0]); });
    it("northwest of [2, 2] is [1, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([2, 2]), [1, 1]); });
    it("northwest of [3, 0] is [2, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([3, 0]), [2, 0]); });
    it("northwest of [3, 1] is [2, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([3, 1]), [2, 1]); });
    it("northwest of [3, 2] is [2, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([3, 2]), [2, 2]); });
    it("northwest of [4, 1] is [3, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([4, 1]), [3, 0]); });
    it("northwest of [4, 2] is [3, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([4, 2]), [3, 1]); });
    it("northwest of [5, 0] is [4, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([5, 0]), [4, 0]); });
    it("northwest of [5, 1] is [4, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([5, 1]), [4, 1]); });
    it("northwest of [5, 2] is [4, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([5, 2]), [4, 2]); });
    it("northwest of [6, 1] is [5, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([6, 1]), [5, 0]); });
    it("northwest of [6, 2] is [5, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([6, 2]), [5, 1]); });
    it("northwest of [7, 0] is [6, 0]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([7, 0]), [6, 0]); });
    it("northwest of [7, 1] is [6, 1]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([7, 1]), [6, 1]); });
    it("northwest of [7, 2] is [6, 2]", () => { chai_1.assert.deepEqual(cboard_reachable_1.northwest([7, 2]), [6, 2]); });
    console.log("RES!");
    console.log(cboard_reachable_2.getReachable(cstate_1.GET__CBoardFromCState(run_1.placement1blackstate), { row: 2, col: 2 }));
});
// it("5x6 board: north of [0, 0] is false", () => { assert.deepEqual(north([0, 0]), false) })
// it("5x6 board: north of [2, 0] is false", () => { assert.deepEqual(north([2, 0]), false) })
// it("5x6 board: north of [4, 0] is false", () => { assert.deepEqual(north([4, 0]), false) })
// it("5x6 board: north of [6, 0] is false", () => { assert.deepEqual(north([6, 0]), false) })
// it("5x6 board: north of [8, 0] is false", () => { assert.deepEqual(north([8, 0]), false) })
// it("5x6 board: north of [10, 0] is false", () => { assert.deepEqual(north([10, 0]), false) })
// it("5x6 board: north of [1, 0] is false", () => { assert.deepEqual(north([1, 0]), false) })
// it("5x6 board: north of [3, 0] is false", () => { assert.deepEqual(north([3, 0]), false) })
// it("5x6 board: north of [5, 0] is false", () => { assert.deepEqual(north([5, 0]), false) })
// it("5x6 board: north of [7, 0] is false", () => { assert.deepEqual(north([7, 0]), false) })
// it("5x6 board: north of [9, 0] is false", () => { assert.deepEqual(north([9, 0]), false) })
// it("5x6 board: north of [11, 0] is false", () => { assert.deepEqual(north([11, 0]), false) })
// it("5x6 board: south of [1, 1] is false", () => { assert.deepEqual(south([1, 1]), false) })
// it("5x6 board: south of [3, 1] is false", () => { assert.deepEqual(south([3, 1]), false) })
// it("5x6 board: south of [5, 1] is false", () => { assert.deepEqual(south([5, 1]), false) })
// it("5x6 board: south of [7, 1] is false", () => { assert.deepEqual(south([7, 1]), false) })
// it("5x6 board: south of [9, 1] is false", () => { assert.deepEqual(south([9, 1]), false) })
// it("5x6 board: south of [11, 1] is false", () => { assert.deepEqual(south([11, 1]), false) })
// it("5x6 board: south of [0, 2] is false", () => { assert.deepEqual(south([0, 2]), false) })
// it("5x6 board: south of [2, 2] is false", () => { assert.deepEqual(south([2, 2]), false) })
// it("5x6 board: south of [4, 2] is false", () => { assert.deepEqual(south([4, 2]), false) })
// it("5x6 board: south of [6, 2] is false", () => { assert.deepEqual(south([6, 2]), false) })
// it("5x6 board: south of [8, 2] is false", () => { assert.deepEqual(south([8, 2]), false) })
// it("5x6 board: south of [10, 2] is false", () => { assert.deepEqual(south([10, 2]), false) })
// it("5x6 board: northeast of [0, 0] is false", () => { assert.deepEqual(northeast([0, 0]), false) })
// it("5x6 board: northeast of [2, 0] is false", () => { assert.deepEqual(northeast([2, 0]), false) })
// it("5x6 board: northeast of [4, 0] is false", () => { assert.deepEqual(northeast([4, 0]), false) })
// it("5x6 board: northeast of [6, 0] is false", () => { assert.deepEqual(northeast([6, 0]), false) })
// it("5x6 board: northeast of [8, 0] is false", () => { assert.deepEqual(northeast([8, 0]), false) })
// it("5x6 board: northeast of [10, 0] is false", () => { assert.deepEqual(northeast([10, 0]), false) })
// it("5x6 board: northeast of [11, 0] is false", () => { assert.deepEqual(northeast([11, 0]), false) })
// it("5x6 board: northeast of [11, 1] is false", () => { assert.deepEqual(northeast([11, 1]), false) })
// it("5x6 board: northwest of [0, 0] is false", () => { assert.deepEqual(northwest([0, 0]), false) })
// it("5x6 board: northwest of [2, 0] is false", () => { assert.deepEqual(northwest([2, 0]), false) })
// it("5x6 board: northwest of [4, 0] is false", () => { assert.deepEqual(northwest([4, 0]), false) })
// it("5x6 board: northwest of [6, 0] is false", () => { assert.deepEqual(northwest([6, 0]), false) })
// it("5x6 board: northwest of [8, 0] is false", () => { assert.deepEqual(northwest([8, 0]), false) })
// it("5x6 board: northwest of [10, 0] is false", () => { assert.deepEqual(northwest([10, 0]), false) })
// it("5x6 board: northwest of [0, 1] is false", () => { assert.deepEqual(northwest([0, 1]), false) })
// it("5x6 board: northwest of [0, 2] is false", () => { assert.deepEqual(northwest([0, 2]), false) })
// it("5x6 board: southwest of [0, 0] is false", () => { assert.deepEqual(southwest([0, 0]), false) })
// it("5x6 board: southwest of [0, 1] is false", () => { assert.deepEqual(southwest([0, 1]), false) })
// it("5x6 board: southwest of [0, 2] is false", () => { assert.deepEqual(southwest([0, 2]), false) })
// it("5x6 board: southwest of [2, 2] is false", () => { assert.deepEqual(southwest([2, 2]), false) })
// it("5x6 board: southwest of [4, 2] is false", () => { assert.deepEqual(southwest([4, 2]), false) })
// it("5x6 board: southwest of [6, 2] is false", () => { assert.deepEqual(southwest([6, 2]), false) })
// it("5x6 board: southwest of [8, 2] is false", () => { assert.deepEqual(southwest([8, 2]), false) })
// it("5x6 board: southwest of [10, 2] is false", () => { assert.deepEqual(southwest([10, 2]), false) })
// it("5x6 board: southeast of [11, 0] is false", () => { assert.deepEqual(southeast([11, 0]), false) })
// it("5x6 board: southeast of [11, 1] is false", () => { assert.deepEqual(southeast([11, 1]), false) })
// it("5x6 board: southeast of [0, 2] is false", () => { assert.deepEqual(southeast([0, 2]), false) })
// it("5x6 board: southeast of [2, 2] is false", () => { assert.deepEqual(southeast([2, 2]), false) })
// it("5x6 board: southeast of [4, 2] is false", () => { assert.deepEqual(southeast([4, 2]), false) })
// it("5x6 board: southeast of [6, 2] is false", () => { assert.deepEqual(southeast([6, 2]), false) })
// it("5x6 board: southeast of [8, 2] is false", () => { assert.deepEqual(southeast([8, 2]), false) })
// it("5x6 board: southeast of [10, 2] is false", () => { assert.deepEqual(southeast([10, 2]), false) })
// it("north of [0, 0] is false", () => { assert.deepEqual(north([0, 0]), false) })
// it("north of [1, 0] is false", () => { assert.deepEqual(north([1, 0]), false) })
// it("north of [2, 0] is false", () => { assert.deepEqual(north([2, 0]), false) })
// it("north of [3, 0] is false", () => { assert.deepEqual(north([3, 0]), false) })
// it("north of [4, 0] is false", () => { assert.deepEqual(north([4, 0]), false) })
// it("north of [5, 0] is false", () => { assert.deepEqual(north([5, 0]), false) })
// it("north of [6, 0] is false", () => { assert.deepEqual(north([6, 0]), false) })
// it("north of [7, 0] is false", () => { assert.deepEqual(north([7, 0]), false) })
// it("northeast of [0, 0] is false", () => { assert.deepEqual(northeast([0, 0]), false) })
// it("northeast of [2, 0] is false", () => { assert.deepEqual(northeast([2, 0]), false) })
// it("northeast of [4, 0] is false", () => { assert.deepEqual(northeast([4, 0]), false) })
// it("northeast of [6, 0] is false", () => { assert.deepEqual(northeast([6, 0]), false) })
// it("northeast of [7, 0] is false", () => { assert.deepEqual(northeast([7, 0]), false) })
// it("northeast of [7, 1] is false", () => { assert.deepEqual(northeast([7, 1]), false) })
// it("northeast of [7, 2] is false", () => { assert.deepEqual(northeast([7, 2]), false) })
// it("southeast of [1, 2] is false", () => { assert.deepEqual(southeast([1, 2]), false) })
// it("southeast of [3, 2] is false", () => { assert.deepEqual(southeast([3, 2]), false) })
// it("southeast of [5, 2] is false", () => { assert.deepEqual(southeast([5, 2]), false) })
// it("southeast of [7, 0] is false", () => { assert.deepEqual(southeast([7, 0]), false) })
// it("southeast of [7, 1] is false", () => { assert.deepEqual(southeast([7, 1]), false) })
// it("southeast of [7, 2] is false", () => { assert.deepEqual(southeast([7, 2]), false) })
// it("south of [0, 2] is false", () => { assert.deepEqual(south([0, 2]), false) })
// it("south of [1, 2] is false", () => { assert.deepEqual(south([1, 2]), false) })
// it("south of [2, 2] is false", () => { assert.deepEqual(south([2, 2]), false) })
// it("south of [3, 2] is false", () => { assert.deepEqual(south([3, 2]), false) })
// it("south of [4, 2] is false", () => { assert.deepEqual(south([4, 2]), false) })
// it("south of [5, 2] is false", () => { assert.deepEqual(south([5, 2]), false) })
// it("south of [6, 2] is false", () => { assert.deepEqual(south([6, 2]), false) })
// it("south of [7, 2] is false", () => { assert.deepEqual(south([7, 2]), false) })
// it("southwest of [0, 0] is false", () => { assert.deepEqual(southwest([0, 0]), false) })
// it("southwest of [0, 1] is false", () => { assert.deepEqual(southwest([0, 1]), false) })
// it("southwest of [0, 2] is false", () => { assert.deepEqual(southwest([0, 2]), false) })
// it("southwest of [1, 2] is false", () => { assert.deepEqual(southwest([1, 2]), false) })
// it("southwest of [3, 2] is false", () => { assert.deepEqual(southwest([3, 2]), false) })
// it("southwest of [5, 2] is false", () => { assert.deepEqual(southwest([5, 2]), false) })
// it("southwest of [7, 2] is false", () => { assert.deepEqual(southwest([7, 2]), false) })
// it("northwest of [0, 0] is false", () => { assert.deepEqual(northwest([0, 0]), false) })
// it("northwest of [0, 1] is false", () => { assert.deepEqual(northwest([0, 1]), false) })
// it("northwest of [0, 2] is false", () => { assert.deepEqual(northwest([0, 2]), false) })
// it("northwest of [2, 0] is false", () => { assert.deepEqual(northwest([2, 0]), false) })
// it("northwest of [4, 0] is false", () => { assert.deepEqual(northwest([4, 0]), false) })
// it("northwest of [6, 0] is false", () => { assert.deepEqual(northwest([6, 0]), false) })
