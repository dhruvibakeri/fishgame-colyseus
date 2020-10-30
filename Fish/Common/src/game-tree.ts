import { getReachable } from "./board-reachable";
//------------------------------------- DATA DEFINITION -----------------------------------------------------------

import { CBoard, CMove, cMove, CPenguin, CPosn, CScore, CState, duplicateCBoard, getPenguinPositions, getPenguinPositionsForGameBoard, GET_currentPlayerFromCScores, GET__CBoardFromCState, GET__CScoresFromCState, GET__CStageFromCState, PRED_isCSpaceACFish, PRED_isCState } from "./cstate";
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
//         A Move is {kind: "move", move : CMove}
//         A PlacePenguin is {kind: "place", player: CPenguin, posn: CPosn}
//     A RefereeAction is one of MakeHole | PlaceFish
//         A MakeHole is {kind: "hole", posn: CPosn}
//         A PlaceFish is a {kind: "placeFish", posn: CPosn, totalFishes: 1-5 }
// INTERPRETATION. Represents the actions a player/referee can take. A player can move/place penguin. A referee can
// place a fish, make hole. [The PlayerActions are also executed by the Referee but are "requested" by the player]


export type SubGameTree = [CState, () => GameTree[]]
export type GameTree = CState | SubGameTree;

export type Action = (MoveAction | PlaceAction | HoleAction | FishAction)

export type MoveAction = { kind: "move", posn: CMove }

export type PlaceAction = { kind: "place", player: CPenguin, posn: CPosn }

export type HoleAction = { kind: "hole", posn: CPosn }

export type FishAction = { kind: "placeFish", posn: CPosn, totalFishes: number }

export type IllegalAction = { kind: "illegalAction" }


// GameTree -> GameState
// gets the parent of the tree(current GameState)
export function getStateFromTree(gameTree: GameTree): CState {
    if (PRED_isCState(gameTree)) {
        return gameTree as CState;
    } else {
        return gameTree[0] as CState;
    }
}


// GameTree -> GameTree[]
// gets reachable states from the given GameTree
export function getChildren(gameTree: GameTree): GameTree[] {
    if (PRED_isCState(gameTree)) {
        throw Error(`${gameTree} has no children!`)
    } else {
        return (gameTree as SubGameTree)[1]();
    }
}


// GameState GameTree[] -> GameTree
// adds the given parent to the given subTrees
export function addParent(gameState: CState, subTrees: GameTree[]): GameTree {
    return [gameState, () => subTrees];
}

// GameState -> GameTree
// create initial GameTree
export function createGameTree(gameState: CState): GameTree {
    // getValidSubStates returns a list of game trees. 
    return [gameState, () => { return getValidSubStates(gameState) }]
}

// GameState Action -> GameState | IllegalAction
// applies action on a given GameState only if it is legal
export function applyAction(action: Action, gs: CState): CState | IllegalAction {
    if (isValidAction(action, gs)) {
        return takeAction(action, gs);
    }
    else {
        return {
            kind: "illegalAction"
        }
    }
}

// applyToDirectlyReachable: GameState [GameState -> T] -> [GameState, T][]
// applies given function to all directly reachable states
export function applyToDirectlyReachable(gs: CState, func: (state: CState) => any): [CState, any][] {
    let directlyReachableStates = getValidSubStates(gs)

    let res: [CState, any][] = []

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
export function getValidSubStatesForGameBoard(myGameState: CState): GameTree[] {
    let res: GameTree[] = []
    let allPenguinPos: CPosn[] = getPenguinPositionsForGameBoard(GET_currentPlayerFromCScores(GET__CScoresFromCState(myGameState)), myGameState)

    allPenguinPos.forEach(p => {
        res = [...res, ...makeAllMovesForAPenguin(GET_currentPlayerFromCScores(GET__CScoresFromCState(myGameState)), p, myGameState)]
    })

    return res;
}

// GameState -> GameTree[]
// gets all reachable states from the given GameState
export function getValidSubStates(myGameState: CState): GameTree[] {
    let res: GameTree[] = []
    let allPenguinPos: CPosn[] = getPenguinPositions(GET_currentPlayerFromCScores(GET__CScoresFromCState(myGameState)), myGameState)

    allPenguinPos.forEach(p => {
        res = [...res, ...makeAllMovesForAPenguin(GET_currentPlayerFromCScores(GET__CScoresFromCState(myGameState)), p, myGameState)]
    })

    return res;
}

// UUID Posn GameState -> GameTree[]
// gets reachable states for a particular penguin of the given player according to the given GameState
export function makeAllMovesForAPenguin(penguin: CPenguin, fromPosn: CPosn, gs: CState): GameTree[] {
    let res: GameTree[] = []

    let reachablePoints: CPosn[] = getReachable(GET__CBoardFromCState(gs), fromPosn)

    reachablePoints.forEach(p => {
        let moveState = cMove(gs, [fromPosn, p])
        res.push([moveState, () => { return getValidSubStates(moveState) }])

    })

    return res;
}

// Action GameState -> boolean
// checks if given action is valid
export function isValidAction(action: Action, gs: CState) {

    let board = GET__CBoardFromCState(gs)
    switch (action.kind) {
        case "move":
            let posn: CMove = action.posn as [CPosn, CPosn]
            return isValidMove(posn[0], posn[1], board)
        case "place":
            let posn_place: CPosn = action.posn as [number, number]
            return PRED_isCSpaceACFish(board[posn_place[0]][posn_place[1]])
        case "hole":
            let posn_hole: CPosn = action.posn as [number, number]
            return PRED_isCSpaceACFish(board[posn_hole[0]][posn_hole[1]])
        case "placeFish":
            let posn_fish: CPosn = action.posn as [number, number]
            return PRED_isCSpaceACFish(board[posn_fish[0]][posn_fish[1]])
        default:
            return false
    }
}

// Action GameState -> GameState
// applies action to given GameState
export function takeAction(action: Action, gs: CState): CState {
    let new_board: CBoard = duplicateCBoard(GET__CBoardFromCState(gs))
    switch (action.kind) {
        case "move":
            return cMove(gs, action.posn)
            break;
        case "place":
            new_board[action.posn[0]][action.posn[1]] = action.player
            return [GET__CStageFromCState(gs), new_board, GET__CScoresFromCState(gs)]
            break;
        case "hole":
            new_board[action.posn[0]][action.posn[1]] = "hole"
            return [GET__CStageFromCState(gs), new_board, GET__CScoresFromCState(gs)]
            break;
        case "placeFish":
            new_board[action.posn[0]][action.posn[1]] = action.totalFishes
            return [GET__CStageFromCState(gs), new_board, GET__CScoresFromCState(gs)]
            break;
        default:
            return gs
    }
}

// checks if given move is a valid move
function isValidMove(from: CPosn, to: CPosn, board: CBoard) {
    let reachablePoints = getReachable(board, from)

    return isInArray(reachablePoints, to)
}

// checks if given item is in given list
function isInArray(list: any[], item: any): boolean {
    for (let i = 0; i < list.length; i++) {
        if (JSON.stringify(item) === JSON.stringify(list[i])) {
            return true
        }
    }
    return false
}




