import { getReachable } from "./board-reachable";
//------------------------------------- DATA DEFINITION -----------------------------------------------------------

import { CBoard, cMove, CPenguin, CPosn, CScore, CState, getPenguinPositions, GET_currentPlayer, GET__CBoardFromCState, GET__CScoresFromCState, PRED_isCState } from "./cstate";
import { placePenguinStrategy, placingstate } from "./penguin-placement-strategy";
import { playinginitstate } from "./run";

// GameTree = GameState | [GameState, () => GameTree[]]

//--------------------------------------INTERPRETATION-------------------------------------------------------------
// Our GameTree is one of:
// - GameState
// - [GameState, () => GameTree[]]
// It would be just a GameState, when the game is over and there are no further valid trees that could be made.
// In the case it is a [GameState, () => GameTree[]], the GameState would be the current state, based off which the
// subsequent GameTrees would be created. 
// For the initial GameTree, the GameState would be a state where all penguins have been placed and no more can
// be added. 
// The second element in a GameTree is a list of lambdas that would return the sub-GameTrees when asked to. 
// For the child-GameTrees, the GameState is one of the possible states that are directly reachable from
// the parent state. 
//------------------------------------------------------------------------------------------------------------------

// An Action is one of PlayerAction | RefereeAction
//     A PlayerAction is one of Move | PlacePenguin
//         A Move is {kind: "move", player: UUID, posn: {from: Posn, to: Posn}}
//         A PlacePenguin is {kind: "placePenguin", player: UUID, posn: Posn}
//     A RefereeAction is one of MakeHole | PlaceFish
//         A MakeHole is {kind: "makeHole", posn: Posn}
//         A PlaceFish is a {kind: "placeFish", posn: Posn, totalFishes: 1-5 }
// INTERPRETATION. Represents the actions a player/referee can take. A player can move/place penguin. A referee can
// place a fish, make hole. [The PlayerActions are also executed by the Referee but are "requested" by the player]


export type SubGameTree = [CState, () => GameTree[]]
export  type GameTree = CState | SubGameTree;



// GameTree -> GameState
// gets the parent of the tree(current GameState)
export function getStateFromTree(gameTree : GameTree) : CState {
    if (PRED_isCState(gameTree)) {
        return gameTree as CState;
    } else {
        return gameTree[0] as CState;
    }
}


// GameTree -> GameTree[]
// gets reachable states from the given GameTree
export function getChildren(gameTree : GameTree) : GameTree[] {
    if (PRED_isCState(gameTree)) {
        throw Error(`${gameTree} has no children!`)
    } else {
        return (gameTree as SubGameTree)[1]();
    }
}


// GameState GameTree[] -> GameTree
// adds the given parent to the given subTrees
export function addParent(gameState : CState, subTrees : GameTree[]) : GameTree {
    return [gameState, () => subTrees];
}

// GameState -> GameTree
// create initial GameTree
export function createGameTree(gameState : CState) : GameTree {
    // getValidSubStates returns a list of game trees. 
    return [gameState, () => { return getValidSubStates(gameState) }]
}

// applyToDirectlyReachable: GameState [GameState -> T] -> [GameState, T][]
// applies given function to all directly reachable states
export function applyToDirectlyReachable(gs : CState, func : any) {
    let directlyReachableStates = getValidSubStates(gs)

    let res = []

    directlyReachableStates.forEach(s => {
        let currentState = getStateFromTree(s)
        res.push([currentState, func(currentState)])
    })

    return res;
}





// - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - I N T E R N A L  - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - 


// GameState -> GameTree[]
// gets all reachable states from the given GameState
export function getValidSubStates(myGameState : CState) : GameTree[] {
    let res = []
    let allPenguinPos = getPenguinPositions(GET_currentPlayer(GET__CScoresFromCState(myGameState)), myGameState)

    allPenguinPos.forEach(p => {
        res = [...res, ...makeAllMovesForAPenguin(GET_currentPlayer(GET__CScoresFromCState(myGameState)), p, myGameState)]
    })

    return res;
}

// UUID Posn GameState -> GameTree[]
// gets reachable states for a particular penguin of the given player according to the given GameState
export function makeAllMovesForAPenguin(penguin : CPenguin, fromPosn : CPosn, gs : CState) : GameTree[] {
    let res = []

    let reachablePoints = getReachable(GET__CBoardFromCState(gs), fromPosn)

    reachablePoints.forEach(p => {
        let moveState = cMove(gs, [fromPosn, p])
        res.push([moveState, () => { return getValidSubStates(moveState) }])

    })

    return res;
}




