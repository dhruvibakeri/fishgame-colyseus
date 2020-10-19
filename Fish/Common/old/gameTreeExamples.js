let players = [[1234, { color: "red", score: 0 }], [2345, { color: "black", score: 0 }], [3456, { color: "brown", score: 0 }], [4567, { color: "white", score: 0 }]];

const board4 = [[{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } },
{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "red" } } },
{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 2 } } },
{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "brown" } } },
{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 5 } } },
{ kind: "usableSpace", occupiedBy: false }],

[{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 3 } } },
{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "white" } } },
{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 3 } } },
{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "penguin", color: "red" } } },
{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 1 }, occupiedBy: { kind: "penguin", color: "black" } } },
{ kind: "usableSpace", occupiedBy: { tileInfo: { size: 75, maxElements: 5 }, occupiedBy: { kind: "fishes", totalFishes: 1 } } }]
]


let myGameState = { gameStage: "playing", board: board4, nextMove: 1234, players: players };


//ASSIGNMENT REQUIREMENTS:

// creating a complete tree for a state to which players will not add any more penguins;
let myGameTree = [myGameState, () => {
    return getValidSubStates(myGameState);
}]
let myLevel1Children = getChildren(myGameTree)
console.log("gameTree", myGameTree)
console.log("level1", myLevel1Children)

// a query facility that for a given state and action A either signals that A is illegal 
// or returns the state that would result from taking action A;

let validMoveAction = {kind: "move", player: 1234, posn: {from: [0,1], to: [0,0]}}
let invalidMoveAction = {kind: "move", player: 1234, posn: {from: [0,1], to: [1,1]}}
let validPlaceAction = {kind: "placePenguin", player: 2345, posn: [0,0]}
let invalidPlaceAction = {kind: "placePenguin", player: 2345, posn: [0,1]}
let validHoleAction = {kind: "makeHole", posn: [0,0]}
let invalidHoleAction = {kind: "makeHole", posn: [0,1]}
let validFishAction =  {kind: "placeFish", posn: [0,0], totalFishes: 4 }
let invalidFishAction =  {kind: "placeFish", posn: [0,1], totalFishes: 4 }

let stateAfterValidMoveAction = applyAction(validMoveAction, myGameState)
console.log("valid move", stateAfterValidMoveAction)

let stateAfterInvalidMoveAction = applyAction(invalidMoveAction, myGameState)
console.log("invalid move", stateAfterInvalidMoveAction)

let stateAfterValidPlaceAction = applyAction(validPlaceAction, myGameState)
console.log("valid place", stateAfterValidPlaceAction)

let stateAfterInvalidPlaceAction = applyAction(invalidPlaceAction, myGameState)
console.log("invalid place", stateAfterInvalidPlaceAction)

let stateAfterValidHoleAction = applyAction(validHoleAction, myGameState)
console.log("valid hole", stateAfterValidHoleAction)

let stateAfterInvalidHoleAction = applyAction(invalidHoleAction, myGameState)
console.log("invalid hole", stateAfterInvalidHoleAction)

let stateAfterValidFishAction = applyAction(validFishAction, myGameState)
console.log("valid fish", stateAfterValidFishAction)

let stateAfterInvalidFishAction = applyAction(invalidFishAction, myGameState)
console.log("invalid fish", stateAfterInvalidFishAction)

// For a game state and function, applies the function to all states directly reachable from the game state.

// check if game is still on
console.log(applyToDirectlyReachable(myGameState, isGameOn))




