//------------------------------------- DATA DEFINITION -----------------------------------------------------------

// GameTree = GameState | [GameState, () => GameTree[]]

//------------------------------------------------------------------------------------------------------------------

// GameState GameTree[] => (GameState , [ -> GameTree[]])[]
// creates a gameTreeStream
function gameTreeStream(state, subTrees) {
    const res = [state, () => subTrees]
    return res;
}

// Any -> Boolean
// checks if given element is a Gametree
function isGameTree(gameTree) {
    return (Array.isArray(gameTree)
        && typeof gameTree[1] === "function"
        && gameTree.length === 2
        && isGameState(gameTree[0]))
        || isGameState(gameTree);
}

// GameTree -> GameState
// gets the parent of the tree(current GameState)
function getStateFromTree(gameTree) {
    if (isGameState(gameTree)) {
        return gameTree;
    } else {
        return gameTree[0];
    }
}


// GameTree -> GameTree[]
// gets reachable states from the given GameTree
function getChildren(gameTree) {
    if (isGameState(gameTree)) {
        throw Error(`${gameTree} has no children!`)
    } else {
        return gameTree[1]();
    }
}

// GameState GameTree[] -> GameTree
// creates a GameTree
function addParent(gameState, subTrees) {
    return [gameState, () => subTrees];
}

// GameState -> GameTree[]
// gets all reachable states from the given GameState
function getValidSubStates(myGameState) {
    let res = []


    let allPenguinPos = getPenguinPositions(nextMoveFromGameState(myGameState), myGameState)

    console.log(allPenguinPos)

    allPenguinPos.forEach(p => {
        res = [...res, ...makeAllMovesForAPenguin(nextMoveFromGameState(myGameState), p, myGameState)]
    })

    return res;
}

// UUID Posn GameState -> GameTree[]
// gets reachable states for a particular penguin of the given player according to the given GameState
function makeAllMovesForAPenguin(UUID, fromPosn, gs) {
    let res = []

    let reachablePoints = getReachable(boardFromGameState(gs), fromPosn)

    reachablePoints.forEach(p => {
        moveState = makeMove(UUID, fromPosn, p, gs)
        res.push([moveState, () => { return getValidSubStates(moveState) }])

    })

    return res;
}

// GameState Action -> GameState | IllegalAction
// applies action on a given GameState only if it is legal

/*
An Action is one of PlayerAction | RefereeAction
    A PlayerAction is one of Move | PlacePenguin
        A Move is {kind: "move", player: UUID, posn: {from: Posn, to: Posn}}
        A PlacePenguin is {kind: "placePenguin", player: UUID, posn: Posn}
    A RefereeAction is one of MakeHole | PlaceFish
        A MakeHole is {kind: "makeHole", posn: Posn}
        A PlaceFish is a {kind: "placeFish", posn: Posn, totalFishes: 1-5 }
*/

function applyAction(action, gs) {


    if (isValidAction(action, gs)) {
        return takeAction(action, gs);
    }
    else {
        return {
            kind: "illegalAction", message: "The action ... is illegal because ..."
        }
    }
}

// Action GameState -> boolean
// checks if given action is valid
function isValidAction(action, gs) {
    let posn = action.posn
    let board = boardFromGameState(gs)
    switch (action.kind) {
        case "move":
            return canMove({row: posn.from[0], col: posn.from[1] }, {row: posn.to[0], col: posn.to[1] }, gs)
            break;
        case "placePenguin":
            return canPlacePenguin(board, posn[0], posn[1])
            break;
        case "makeHole":
            return canMakeHole(board, posn[0], posn[1])
            break;
        case "placeFish":
            return canPlaceFish(board, posn[0], posn[1], action.totalFishes)
            break;
        default:
        return false
    }
}

// Action GameState -> GameState
// applies action to given GameState
function takeAction(action, gs) {
    let posn = action.posn
    switch (action.kind) {
        case "move":
            return makeMove(action.player, {row: posn.from[0], col: posn.from[1] }, {row: posn.to[0], col: posn.to[1] }, gs)
            break;
        case "placePenguin":
            return placeAPenguin(action.player, posn, gs)
            break;
        case "makeHole":
            return makeAHole(posn, gs)
            break;
        case "placeFish":
            return placeNFish(action.totalFishes, posn, gs)
            break;
        default:
        return gs
    }
}

// applyToDirectlyReachable: GameState [GameState -> T] -> [GameState, T][]
// applies given function to all directly reachable states

function applyToDirectlyReachable(gs, func) {
    let directlyReachableStates = getValidSubStates(gs) 

    let res = []

    directlyReachableStates.forEach(s => {
        let currentState = getStateFromTree(s)
        res.push([currentState, func(currentState)])
    })

    return res;
}







