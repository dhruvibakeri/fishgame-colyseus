// configures board specifications
function getBoardSpecs(board) {
 

    /*board = noOfFish(board, 1, 2, 5)
    board = noOfFish(board, 1, 1, 4)
    board = noOfFish(board, 0, 2, 2)
    board = noOfFish(board, 0, 1, 5)
    //board = noOfFish(board, 1, 3, 3)
    board = makeHole(board, 1, 3)
    board = placePenguin(board, 0, 0, 'black')
    board = placePenguin(board, 1, 0, 'red')
    board = placePenguin(board, 0, 3, 'brown')
    board = placePenguin(board, 1, 5, 'white')
    board = addBoardHolesMinFish(board, 3, [[1, 1], [1, 4]])*/
}

// Board Number Number -> Board
// creates a hole in the board (no tile)
function makeHole(board, row, col) {
    if (isUsableSpace(getSpaceFromBoard(board, row, col))) {

        board[row][col] = makeUsableSpace(false);
    }
    return board;
}

// Board Number Number, Number -> Board
// places n amount of fish on board[x][y]
function noOfFish(board, row, col, n) {


    let val = getSpaceFromBoard(board, row, col)

    if (isUsableSpace(val) && isTile(spaceIsOccupiedBy(val)) && isFishes(tileIsOccupiedBy(spaceIsOccupiedBy(val)))
        && n <= maxElementsFromTileInfo(tileInfoFromTile(spaceIsOccupiedBy(val)))) {

        board[row][col] = makeUsableSpace(makeGameTile(makeTileInfo(DEFAULT_SIZE, 5), makeFishes(n)));
    }
    return board;
}

// Board Number Number, String -> Board
// places penguin of given color on board[x][y]
function placePenguin(board, row, col, color) {

    let val = getSpaceFromBoard(board, row, col)

    if (isUsableSpace(val) && isTile(spaceIsOccupiedBy(val)) && !isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(val))) ) {

        board[row][col] = makeUsableSpace(makeGameTile(makeTileInfo(DEFAULT_SIZE, 1), makePenguin(color)));

    }
    return board;
}

//ASSUMPTIONS: 
// -> Total positions - hposns is >= fishes
// -> fishes is a natural number
// creates holes in board at given positions
// and adds specified min-number of 1-fish tiles
function addBoardHolesMinFish(board, fishes, hposns) {

    // changes value of tile to represent a hole
    for (let hposn = 0; hposn < hposns.length; hposn++) {
        let [bcol, brow] = [hposns[hposn][1], hposns[hposn][0]]
        makeHole(board, brow, bcol)
    }

    // add 1-fish tiles only if board
    // does not meet min requirement

    if (!hasMinFish(board, fishes)) {

        // gets list of changeable points
        changeablePoints = getChangablePoints(board)

        // shuffles array containing changeable points
        const shuffled = [...changeablePoints].sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled to meet requirements
        // of min 1-fish tiles
        let selected = shuffled.slice(0, fishes - countOneFishTiles(board));

        for (let i = 0; i < selected.length; i++) {

            srow = selected[i][0]
            scol = selected[i][1]

            board[srow][scol] = makeUsableSpace(makeGameTile(makeTileInfo(DEFAULT_SIZE, 5), makeFishes(1)));
        }
    }

    return board;
}

// checks whether board has min no of 1-fish tiles
function hasMinFish(board, fishes) {
    return countOneFishTiles(board) >= fishes;
}

// counts the number of 1-fish tiles
function countOneFishTiles(board) {
    fcount = 0;
    for (let i = 0; i < totalRowsInBoard(board); i++) {
        for (let j = 0; j < totalColsInBoard(board); j++) {
            val = getSpaceFromBoard(board, i, j)
            if (isUsableSpace(val) && isTile(spaceIsOccupiedBy(val)) &&
                isFishes(tileIsOccupiedBy(spaceIsOccupiedBy(val)))) {

                if (totalFishesFromFishes(tileIsOccupiedBy(spaceIsOccupiedBy(val))) === 1) {

                    fcount = fcount + 1;
                }
            }
        }
    }
    return fcount;
}

// Board -> BoardPosn[]
// retrieves board positions of all changeable tiles
function getChangablePoints(board) {
    let res = []
    for (let row = 0; row < totalRowsInBoard(board); row++) {
        for (let col = 0; col < totalColsInBoard(board); col++) {

            if (isChangeableState(getSpaceFromBoard(board, row, col))) {
                res.push([row, col])
            }
        }
    }
    return res;
}

// checks whether given value is a changeable tile
// a Changeable tile is one of:
// - PlayerColor
// - Positive integer > 1
// (we do not have to change 1)
function isChangeableState(p) {
    return isUsableSpace(p) && isTile(spaceIsOccupiedBy(p)) && isFishes(tileIsOccupiedBy(spaceIsOccupiedBy(p)))
        && totalFishesFromFishes(tileIsOccupiedBy(spaceIsOccupiedBy(p))) > 1;

}
