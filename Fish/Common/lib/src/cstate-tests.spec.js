"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cstate_1 = require("./cstate");
const util_1 = require("./util");
const run_1 = require("./run");
describe("place tests", () => {
    it(`${util_1.str(run_1.place1)} on initialstate => placement1blackstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cPlace(run_1.place1, run_1.initplacingstate), run_1.placement1blackstate);
    });
    it(`${util_1.str(run_1.place2)} on placement1blackstate => placement2brownstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cPlace(run_1.place2, run_1.placement1blackstate), run_1.placement2brownstate);
    });
    it(`${util_1.str(run_1.place3)} on placement2brownstate => placement3whitestate`, () => {
        chai_1.assert.deepEqual(cstate_1.cPlace(run_1.place3, run_1.placement2brownstate), run_1.placement3whitestate);
    });
    it(`${util_1.str(run_1.place4)} on placement3whitestate => placement4redstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cPlace(run_1.place4, run_1.placement3whitestate), run_1.placement4redstate);
    });
    it(`${util_1.str(run_1.place5)} on placement4redstate => placement5blackstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cPlace(run_1.place5, run_1.placement4redstate), run_1.placement5blackstate);
    });
    it(`${util_1.str(run_1.place6)} on placement5blackstate => placement6brownstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cPlace(run_1.place6, run_1.placement5blackstate), run_1.placement6brownstate);
    });
    it(`${util_1.str(run_1.place7)} on placement6brownstate => placement7whitestate`, () => {
        chai_1.assert.deepEqual(cstate_1.cPlace(run_1.place7, run_1.placement6brownstate), run_1.placement7whitestate);
    });
    it(`${util_1.str(run_1.place8)} on placement7whitestate => placement8redstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cPlace(run_1.place8, run_1.placement7whitestate), run_1.placement8redstate);
    });
});
describe("move tests", () => {
    it(`${util_1.str(run_1.move1)} on playinginitstate => move1blackstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.playinginitstate, run_1.move1), run_1.move1blackstate);
    });
    it(`${util_1.str(run_1.move2)} on move1blackstate => move2brownstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move1blackstate, run_1.move2), run_1.move2brownstate);
    });
    it(`${util_1.str(run_1.move3)} on move2brownstate => move3whitestate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move2brownstate, run_1.move3), run_1.move3whitestate);
    });
    it(`${util_1.str(run_1.move4)} on move3whitestate => move4redstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move3whitestate, run_1.move4), run_1.move4redstate);
    });
    it(`${util_1.str(run_1.move5)} on move4redstate => move5blackstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move4redstate, run_1.move5), run_1.move5blackstate);
    });
    it(`${util_1.str(run_1.move6)} on move5blackstate => move6brownstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move5blackstate, run_1.move6), run_1.move6brownstate);
    });
    it(`${util_1.str(run_1.move7)} on move6brownstate => move7whitestate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move6brownstate, run_1.move7), run_1.move7whitestate);
    });
    it(`${util_1.str(run_1.move8)} on move7whitestate => move8redstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move7whitestate, run_1.move8), run_1.move8redstate);
    });
    it(`${util_1.str(run_1.move9)} on move8redstate => move9blackstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move8redstate, run_1.move9), run_1.move9blackstate);
    });
    it(`${util_1.str(run_1.move10)} on move9blackstate => move10brownstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move9blackstate, run_1.move10), run_1.move10brownstate);
    });
    it(`${util_1.str(run_1.move11)} on move10brownstate => move11whitestate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move10brownstate, run_1.move11), run_1.move11whitestate);
    });
    it(`${util_1.str(run_1.move12)} on move11whitestate => move12redskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move11whitestate, run_1.move12), run_1.move12redskipstate);
    });
    it(`${util_1.str(run_1.move13)} on move12redskipstate => move13blackstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move12redskipstate, run_1.move13), run_1.move13blackstate);
    });
    it(`${util_1.str(run_1.move14)} on move13blackstate => move14brownstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move13blackstate, run_1.move14), run_1.move14brownstate);
    });
    it(`${util_1.str(run_1.move15)} on move14brownstate => move15whiteskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move14brownstate, run_1.move15), run_1.move15whiteskipstate);
    });
    it(`${util_1.str(run_1.move16)} on move15whiteskipstate => move16redskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move15whiteskipstate, run_1.move16), run_1.move16redskipstate);
    });
    it(`${util_1.str(run_1.move17)} on move16redskipstate => move17blackstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move16redskipstate, run_1.move17), run_1.move17blackstate);
    });
    it(`${util_1.str(run_1.move18)} on move17blackstate => move18brownstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move17blackstate, run_1.move18), run_1.move18brownstate);
    });
    it(`${util_1.str(run_1.move19)} on move18brownstate => move19whiteskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move18brownstate, run_1.move19), run_1.move19whiteskipstate);
    });
    it(`${util_1.str(run_1.move20)} on move19whiteskipstate => move20redskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move19whiteskipstate, run_1.move20), run_1.move20redskipstate);
    });
    it(`${util_1.str(run_1.move21)} on move20redskipstate => move21blackstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move20redskipstate, run_1.move21), run_1.move21blackstate);
    });
    it(`${util_1.str(run_1.move22)} on move21blackstate => move22brownstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move21blackstate, run_1.move22), run_1.move22brownstate);
    });
    it(`${util_1.str(run_1.move23)} on move22brownstate => move23whiteskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move22brownstate, run_1.move23), run_1.move23whiteskipstate);
    });
    it(`${util_1.str(run_1.move24)} on move23whiteskipstate => move24redskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move23whiteskipstate, run_1.move24), run_1.move24redskipstate);
    });
    it(`${util_1.str(run_1.move25)} on move24redskipstate => move25blackstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move24redskipstate, run_1.move25), run_1.move25blackstate);
    });
    it(`${util_1.str(run_1.move26)} on move25blackstate => move26brownstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move25blackstate, run_1.move26), run_1.move26brownstate);
    });
    it(`${util_1.str(run_1.move27)} on move26brownstate => move27whiteskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move26brownstate, run_1.move27), run_1.move27whiteskipstate);
    });
    it(`${util_1.str(run_1.move28)} on move27whiteskipstate => move28redskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move27whiteskipstate, run_1.move28), run_1.move28redskipstate);
    });
    it(`${util_1.str(run_1.move29)} on move28redskipstate => move29blackskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move28redskipstate, run_1.move29), run_1.move29blackskipstate);
    });
    it(`${util_1.str(run_1.move30)} on move29blackskipstate => move30brownskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move29blackskipstate, run_1.move30), run_1.move30brownskipstate);
    });
    it(`${util_1.str(run_1.move31)} on move30brownskipstate => move31whiteskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move30brownskipstate, run_1.move31), run_1.move31whiteskipstate);
    });
    it(`${util_1.str(run_1.move32)} on move31whiteskipstate => move32redskipstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move31whiteskipstate, run_1.move32), run_1.move32redskipstate);
    });
    it(`${util_1.str(run_1.move33)} on move32redskipstate => move33blackstate`, () => {
        chai_1.assert.deepEqual(cstate_1.cMove(run_1.move32redskipstate, run_1.move33), run_1.move33blackstate);
    });
});
