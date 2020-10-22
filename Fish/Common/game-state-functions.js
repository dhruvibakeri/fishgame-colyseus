
// [GameState][]
// Contains all the gameStates 
let all_game_states = []

//UUID GameState -> [GameState, PlayerColor]
// Adds an unused color as the oldest player to the gs

function createState(UUID, gameState) {

    const res = makeGameState(gameStageFromGameState(gameState),
        boardFromGameState(gameState),
        nextMoveFromGameState(gameState),
        makePlayers([...playersFromGameState(gameState),
        [UUID, makePlayerInfo(getUnusedColor(gameState), 0)]]));

    all_game_states.push(res)


    return [res, getPenguinColorFromUUID(UUID, playersFromGameState(res))];

}


// UUID Posn GameState -> GameState
// place a penguin on a valid tile 

function placeAPenguin(UUID, posn, gs) {



    const res = makeGameState(makeGameStage("placing"),
        makeBoardWithSpecs(boardFromGameState(gs), noOfFish, placePenguin, makeHole, [
            ["penguin", [
                [[posn[0], posn[1]], getPenguinColorFromUUID(UUID, playersFromGameState(gs))]
            ]]]),
        nextMoveFromGameState(gs), playersFromGameState(gs))

    all_game_states.push(res)


    return res;

}

//  Posn GameState -> GameState
// make a hole on a valid tile 

function makeAHole(posn, gs) {



    const res = makeGameState(gameStageFromGameState(gs),
        makeBoardWithSpecs(boardFromGameState(gs), noOfFish, placePenguin, makeHole, [
            ["hole", [
                [posn[0],posn[1]]
            ]]]),
        nextMoveFromGameState(gs), playersFromGameState(gs))

    all_game_states.push(res)


    return res;

}

//  Number Posn GameState -> GameState
// place N fish on a valid tile 

function placeNFish(n, posn, gs) {

    const res = makeGameState(gameStageFromGameState(gs),
        makeBoardWithSpecs(boardFromGameState(gs), noOfFish, placePenguin, makeHole, [
            ["fish", [
                [[posn[0], posn[1]], n]
            ]]]),
        nextMoveFromGameState(gs), playersFromGameState(gs))

    all_game_states.push(res)


    return res;

}



// UUID Players -> PenguinColor
// gets the penguin color attached to the given UUID
function getPenguinColorFromUUID(UUID, players) {


    let player = getPenguinFromID(UUID, players)

    return penguinColorFromPlayer(player[1])
}



// UUID Players -> [UUID, PlayerInfo]
// gets the player data attached to the given UUID
function getPenguinFromID(UUID, players) {

    let player = []

    for (let i = 0; i < players.length; i++) {
        if (players[i][0] == UUID) {
            player = players[i]
        }
    }

    return player;


}

// UUID fromPosn toPosn GameState -> GameState
// move an existing avatar from one spot to another on behalf of the player;

function makeMove(UUID, fromPosn, toPosn, gs) {


    if (canMove(fromPosn, toPosn, gs)) {
        const res = makeGameState("playing", makeBoardWithSpecs(boardFromGameState(gs), noOfFish, placePenguin, makeHole, [
            ["penguin", [
                [[toPosn.row, toPosn.col], getPenguinColorFromUUID(UUID, playersFromGameState(gs))]
            ]],
            ["hole", [
                [fromPosn.row, fromPosn.col]
            ]]
        ]),
            getNextPlayer(UUID, gs),

            playersFromGameState(gs))

        all_game_states.push(res)

        return res;
    }

}


// UUID fromPosn toPosn GameState -> Boolean
// determine whether any player can move an avatar

function canMove(fromPosn, toPosn, gs) {

    let reachablePoints = getReachable(boardFromGameState(gs), fromPosn)
    const reachableStrings = reachablePoints.map(JSON.stringify)
    return reachableStrings.includes(JSON.stringify(toPosn))
}

// UUID GameState -> NextMove
// gets the NextMove of the gameState
function getNextPlayer(currentPlayer, gs) {
    if (isGameOn(gs)) {

        return getNextUUID(currentPlayer, gs)

    }
    else {
        return false;
    }
}

function getPlayerPosn(UUID, gs) {

    return getPenguinPositions(UUID, gs)

}

// UUID GameState -> UUID
// gets the id of the player whose turn is next
// ASSUMPTION: game is not over
function getNextUUID(currentPlayer, gs) {

    players = playersFromGameState(gs)


    for (let i = 0; i < players.length; i++) {

        if (players[i][0] == currentPlayer) {

            if (i < players.length - 1) {

                if (penguinHasMoves(players[i + 1][0], gs)) {
                    return players[i + 1][0];
                }
                else {
                    return getNextUUID(players[i + 1][0], gs)
                }
            }
        
            else {

                if (penguinHasMoves(players[0][0], gs)) {
                    return players[0][0];
                    
                }
                else {
                    return getNextUUID(players[0][0], gs)
                }
                
            }
        }
    }
}

// UUID GameState -> Boolean
// checks if given user has moves left
function penguinHasMoves(UUID, gs) {

    const penguinPosns = getPenguinPositions(UUID, gs)

    allReachablePoints = []

    penguinPosns.forEach(p => {
        allReachablePoints.push(getReachable(boardFromGameState(gs), p))
    })


    return allReachablePoints[0].length > 0

}

// UUID GameState -> [{ row: x, col: y }][]
// gets the current positions of a given player's penguins
function getPenguinPositions(UUID, gs) {

    let posns = []

    const color = getPenguinColorFromUUID(UUID, playersFromGameState(gs))

    for (let i = 0; i < boardFromGameState(gs).length; i++) {
        for (let j = 0; j < boardFromGameState(gs)[0].length; j++) {
            if (isUsableSpace(boardFromGameState(gs)[i][j]) && isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(boardFromGameState(gs)[i][j])))) {
                if (penguinColorFromPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(boardFromGameState(gs)[i][j]))) === color) {
                    posns.push({ row: i, col: j })
                }
            }
        }
    }

    return posns;
}

// GameState -> Boolean
// checks if given gameState has valid moves left
function isGameOn(gs) {

    const penguinPosns = getAllPenguinPositions(gs)

    allReachablePoints = []

    penguinPosns.forEach(p => {
        allReachablePoints.push(getReachable(boardFromGameState(gs), p))
    })

    return allReachablePoints.length > 1 || allReachablePoints[0].length > 1

}

// GameState -> [{ row: x, col: y }][]
// gets positions for all the players' penguins'
function getAllPenguinPositions(gs) {

    let posns = []

    for (let i = 0; i < boardFromGameState(gs).length; i++) {
        for (let j = 0; j < boardFromGameState(gs)[0].length; j++) {
            if (isUsableSpace(boardFromGameState(gs)[i][j]) && isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(boardFromGameState(gs)[i][j])))) {

                posns.push({ row: i, col: j })

            }
        }
    }

    return posns;
}




// GameState -> PenguinColor
// returns a PenguinColor that has not yet been assigned to any player
function getUnusedColor(gameState) {

    let availableColors = ["red", "black", "brown", "white"]

    for (let i = 0; i < playersFromGameState(gameState).length; i++) {
        let ci = availableColors.indexOf(playersFromGameState(gameState)[i][1].color)
        availableColors.splice(ci, 1)
    }

    const res = availableColors[Math.floor(Math.random(availableColors.length))]


    return makePenguinColor(res);
}





