/*createState : UUID GameState -> [GameState, PlayerColor]
Adds an unused color as the oldest player to the gs
creating a state for a certain number of players;

placePenguin : UUID Posn GameState -> GameState 
Note: If the output gs is the same as the input gs, then kick the player with the UUID out.
place an avatar on behalf of a player;

makeMove : UUID fromPosn toPosn GameState -> GameState
move an existing avatar from one spot to another on behalf of the player;

canMove : UUID fromPosn toPosn GameState -> Boolean
determine whether any player can move an avatar; and

renderState : GameState -> void
rendering the state graphically.*/


//UUID GameState -> [GameState, PlayerColor]
// Adds an unused color as the oldest player to the gs

function createState(UUID, gameState) {


    const res = makeGameState(gameStageFromGameState(gameState),
        boardFromGameState(gameState),
        nextMoveFromGameState(gameState),
        makePlayers([...playersFromGameState(gameState),
        [UUID, makePlayerInfo(getUnusedColor(gameState), 0)]]));


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

    for (let i = 0 ; i < players.length; i++) {
        if(players[i][0] == UUID) {
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
            ]]]),
            false,
            playersFromGameState(gs))

        return res;
    }

}


// UUID fromPosn toPosn GameState -> Boolean
// determine whether any player can move an avatar

function canMove(fromPosn, toPosn, gs) {

    let reachablePoints = getReachable(boardFromGameState(gs), fromPosn)
    return reachablePoints.includes(toPosn)
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

// GameState -> void
// rendering the state graphically

function renderState(gs) {
    setCanvasConfig();
    const dimensions = RectToHex(totalColsInBoard(boardFromGameState(gs)), totalRowsInBoard(boardFromGameState(gs)), boardFromGameState(gs))
    const [dRows, dCols] = [dimensions.row, dimensions.col]
    const [canvasWidth, canvasHeight] = [...backgDimensions(dRows, dCols, DEFAULT_SIZE)]
    setCanvasDimension(canvasWidth, canvasHeight);
    allHexes(boardFromGameState(gs));

}

// rendering
renderState(makeGameState("playing", dimensionToBoard(4, 3), false, []))

// converts rect dimensions to hex dimensions
function RectToHex(col, row, board) {
    return { col: col / 2, row: isUnusableSpace(board[board.length - 1][1]) ? (row * 2) - 1 : row * 2 };
}



