import { assert } from 'chai';
import { cMove, cPlace } from './cstate';
import { str } from "./util";
import { place1, initplacingstate, placement1blackstate, place2, placement2brownstate, place3, placement3whitestate, place4, placement4redstate, place5, placement5blackstate, place6, placement6brownstate, place7, placement7whitestate, place8, placement8redstate, move1, playinginitstate, move1blackstate, move2, move2brownstate, move3, move3whitestate, move4, move4redstate, move5, move5blackstate, move6, move6brownstate, move7, move7whitestate, move8, move8redstate, move9, move9blackstate, move10, move10brownstate, move11, move11whitestate, move12, move12redskipstate, move13, move13blackstate, move14, move14brownstate, move15, move15whiteskipstate, move16, move16redskipstate, move17, move17blackstate, move18, move18brownstate, move19, move19whiteskipstate, move20, move20redskipstate, move21, move21blackstate, move22, move22brownstate, move23, move23whiteskipstate, move24, move24redskipstate, move25, move25blackstate, move26, move26brownstate, move27, move27whiteskipstate, move28, move28redskipstate, move29, move29blackskipstate, move30, move30brownskipstate, move31, move31whiteskipstate, move32, move32redskipstate, move33, move33blackstate } from './run';


describe("place tests", () => {
  it(`${str(place1)} on initialstate => placement1blackstate`, () => {
    assert.deepEqual(cPlace(place1, initplacingstate), placement1blackstate)
  })
  it(`${str(place2)} on placement1blackstate => placement2brownstate`, () => {
    assert.deepEqual(cPlace(place2, placement1blackstate), placement2brownstate)
  })
  it(`${str(place3)} on placement2brownstate => placement3whitestate`, () => {
    assert.deepEqual(cPlace(place3, placement2brownstate), placement3whitestate)
  })
  it(`${str(place4)} on placement3whitestate => placement4redstate`, () => {
    assert.deepEqual(cPlace(place4, placement3whitestate), placement4redstate)
  })
  it(`${str(place5)} on placement4redstate => placement5blackstate`, () => {
    assert.deepEqual(cPlace(place5, placement4redstate), placement5blackstate)
  })
  it(`${str(place6)} on placement5blackstate => placement6brownstate`, () => {
    assert.deepEqual(cPlace(place6, placement5blackstate), placement6brownstate)
  })
  it(`${str(place7)} on placement6brownstate => placement7whitestate`, () => {
    assert.deepEqual(cPlace(place7, placement6brownstate), placement7whitestate)
  })
  it(`${str(place8)} on placement7whitestate => placement8redstate`, () => {
    assert.deepEqual(cPlace(place8, placement7whitestate), placement8redstate)
  })
})

describe("move tests", () => {
  it(`${str(move1)} on playinginitstate => move1blackstate`, () => {
    assert.deepEqual(cMove(playinginitstate, move1), move1blackstate)
  })
  it(`${str(move2)} on move1blackstate => move2brownstate`, () => {
    assert.deepEqual(cMove(move1blackstate, move2), move2brownstate)
  })
  it(`${str(move3)} on move2brownstate => move3whitestate`, () => {
    assert.deepEqual(cMove(move2brownstate, move3), move3whitestate)
  })
  it(`${str(move4)} on move3whitestate => move4redstate`, () => {
    assert.deepEqual(cMove(move3whitestate, move4), move4redstate)
  })
  it(`${str(move5)} on move4redstate => move5blackstate`, () => {
    assert.deepEqual(cMove(move4redstate, move5), move5blackstate)
  })
  it(`${str(move6)} on move5blackstate => move6brownstate`, () => {
    assert.deepEqual(cMove(move5blackstate, move6), move6brownstate)
  })
  it(`${str(move7)} on move6brownstate => move7whitestate`, () => {
    assert.deepEqual(cMove(move6brownstate, move7), move7whitestate)
  })
  it(`${str(move8)} on move7whitestate => move8redstate`, () => {
    assert.deepEqual(cMove(move7whitestate, move8), move8redstate)
  })
  it(`${str(move9)} on move8redstate => move9blackstate`, () => {
    assert.deepEqual(cMove(move8redstate, move9), move9blackstate)
  })
  it(`${str(move10)} on move9blackstate => move10brownstate`, () => {
    assert.deepEqual(cMove(move9blackstate, move10), move10brownstate)
  })
  it(`${str(move11)} on move10brownstate => move11whitestate`, () => {
    assert.deepEqual(cMove(move10brownstate, move11), move11whitestate)
  })
  it(`${str(move12)} on move11whitestate => move12redskipstate`, () => {
    assert.deepEqual(cMove(move11whitestate, move12), move12redskipstate)
  })
  it(`${str(move13)} on move12redskipstate => move13blackstate`, () => {
    assert.deepEqual(cMove(move12redskipstate, move13), move13blackstate)
  })
  it(`${str(move14)} on move13blackstate => move14brownstate`, () => {
    assert.deepEqual(cMove(move13blackstate, move14), move14brownstate)
  })
  it(`${str(move15)} on move14brownstate => move15whiteskipstate`, () => {
    assert.deepEqual(cMove(move14brownstate, move15), move15whiteskipstate)
  })
  it(`${str(move16)} on move15whiteskipstate => move16redskipstate`, () => {
    assert.deepEqual(cMove(move15whiteskipstate, move16), move16redskipstate)
  })
  it(`${str(move17)} on move16redskipstate => move17blackstate`, () => {
    assert.deepEqual(cMove(move16redskipstate, move17), move17blackstate)
  })
  it(`${str(move18)} on move17blackstate => move18brownstate`, () => {
    assert.deepEqual(cMove(move17blackstate, move18), move18brownstate)
  })
  it(`${str(move19)} on move18brownstate => move19whiteskipstate`, () => {
    assert.deepEqual(cMove(move18brownstate, move19), move19whiteskipstate)
  })
  it(`${str(move20)} on move19whiteskipstate => move20redskipstate`, () => {
    assert.deepEqual(cMove(move19whiteskipstate, move20), move20redskipstate)
  })
  it(`${str(move21)} on move20redskipstate => move21blackstate`, () => {
    assert.deepEqual(cMove(move20redskipstate, move21), move21blackstate)
  })
  it(`${str(move22)} on move21blackstate => move22brownstate`, () => {
    assert.deepEqual(cMove(move21blackstate, move22), move22brownstate)
  })
  it(`${str(move23)} on move22brownstate => move23whiteskipstate`, () => {
    assert.deepEqual(cMove(move22brownstate, move23), move23whiteskipstate)
  })
  it(`${str(move24)} on move23whiteskipstate => move24redskipstate`, () => {
    assert.deepEqual(cMove(move23whiteskipstate, move24), move24redskipstate)
  })
  it(`${str(move25)} on move24redskipstate => move25blackstate`, () => {
    assert.deepEqual(cMove(move24redskipstate, move25), move25blackstate)
  })
  it(`${str(move26)} on move25blackstate => move26brownstate`, () => {
    assert.deepEqual(cMove(move25blackstate, move26), move26brownstate)
  })
  it(`${str(move27)} on move26brownstate => move27whiteskipstate`, () => {
    assert.deepEqual(cMove(move26brownstate, move27), move27whiteskipstate)
  })
  it(`${str(move28)} on move27whiteskipstate => move28redskipstate`, () => {
    assert.deepEqual(cMove(move27whiteskipstate, move28), move28redskipstate)
  })
  it(`${str(move29)} on move28redskipstate => move29blackskipstate`, () => {
    assert.deepEqual(cMove(move28redskipstate, move29), move29blackskipstate)
  })
  it(`${str(move30)} on move29blackskipstate => move30brownskipstate`, () => {
    assert.deepEqual(cMove(move29blackskipstate, move30), move30brownskipstate)
  })
  it(`${str(move31)} on move30brownskipstate => move31whiteskipstate`, () => {
    assert.deepEqual(cMove(move30brownskipstate, move31), move31whiteskipstate)
  })
  it(`${str(move32)} on move31whiteskipstate => move32redskipstate`, () => {
    assert.deepEqual(cMove(move31whiteskipstate, move32), move32redskipstate)
  })
  it(`${str(move33)} on move32redskipstate => move33blackstate`, () => {
    assert.deepEqual(cMove(move32redskipstate, move33), move33blackstate)
  })
})