// Number Number Number -> void
// places all hexes on the canvas 
// according to their specs
function allHexes(board) { 
    
    const size = DEFAULT_SIZE

    // gets all hex configurations
    let hexes = boardPosns(size, board)

    //  gets the board specifications
    //  ex: min no. if 1-fish tiles
    //  creates a hole where specified
    //  places player on tile
    getBoardSpecs(board)

    //console.log("hexes:",hexes)
    //console.log("board:" , board[0][1])

    // goes through each hex is hexes and
    // adds relevent graphics for that hex tile
    hexes.forEach(hex => {
        // gets value of hex tile at that positon
        //console.log("hex", hex)
        boardPosnVal = getSpaceFromBoard(board, [hex[0].row], [hex[0].col]);

        // coordinates for the image to be added
        imagePosnX = hex[1][0].x;
        imagePosnY = hex[1][0].y;

        // checks whether cur hex is a hole 
        if (isUsableSpace(boardPosnVal)) {
            if (isTile(spaceIsOccupiedBy(boardPosnVal))) {
                let fishPosUp = 0;
                let fishPosDown = (size / 5);
                // adds hex to canvas
                canvas.add(new fabric.Polygon(hex[1], genHexConfig(hex[1], ICE_TILE_COLOR, true)));


                // checks whether given tile is not occupied by a penguin
                if (isFishes(tileIsOccupiedBy(spaceIsOccupiedBy(boardPosnVal)))) {
                    let fishPos = 0;
                    // adds fish on the cur hex
                    for (let i = 0; i < totalFishesFromFishes(tileIsOccupiedBy(spaceIsOccupiedBy(boardPosnVal))); i++) {
                        (i % 2 == 0) ?
                            addIcon(imagePosnX + size, imagePosnY + fishPosUp, 'fish-image', size) :
                            addIcon(imagePosnX + size, imagePosnY - fishPosDown, 'fish-image', size)

                        fishPosUp += (size / 5);
                        fishPosDown += (size / 5);
                    }
                } else if (isPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(boardPosnVal)))) {
                    // if not fish or hole,  add player penguin
                    addIcon(imagePosnX + size, imagePosnY - size, penguinColorFromPenguin(tileIsOccupiedBy(spaceIsOccupiedBy(boardPosnVal))), size)
                }
            }

            else if (isFalse(spaceIsOccupiedBy(boardPosnVal))) {
                canvas.add(new fabric.Polygon(hex[1], genHexConfig(hex[1]), false, false));
            }
        }
    });
}

// Number Number -> [{x: Number, y: Number}[], [Number, Number]][]
// retreives all hex tile formations for the board
// each formation consists of the tile's co-ordinates
// on the fabric canvas and its board position.
function boardPosns(size, board) {
    let hexes = []

    for (let row = 0; row < totalRowsInBoard(board); ++row) {
        let fst = row * 2
        let snd = fst + 1;
        for (let col = 0; col < totalColsInBoard(board); ++col) {
            // col comes first since col represents the 
            // x-coordinate on the fabric canvas
            let xOffset = (size * 2) * col
            if (col % 2 === 0) {
                let yOffset = size * fst
                hexes.push(makeHex(size, xOffset, yOffset, row, col))
            } else {
                if (board[row][col].kind === "usableSpace") {
                    let yOffset = size * snd
                    hexes.push(makeHex(size, xOffset, yOffset, row, col))
                }
            }
        }
    }
    return hexes;
}


/**
 * 6 posns corresponding to the vertices of the given board posn
 * with at the (xOffset, yOffset) position at top left corner. 
 * @param {Natural} size 
 * @param {Natural} xOffset 
 * @param {Natural} yOffset 
 * @param {Natural} row
 * @param {Natural} col
 * @returns The pair of 2 things: 
 * LHS: The 2d-array Board position.
 * RHS: The corresponding Hex's corners in terms of canvas px position.
 */
function makeHex(size, xOffset, yOffset, row, col) {
    return [
        { col: col, row, row }, [
            { x: 0 + xOffset, y: size + yOffset },
            { x: size + xOffset, y: 0 + yOffset },
            { x: 2 * size + xOffset, y: 0 + yOffset },
            { x: 3 * size + xOffset, y: size + yOffset },
            { x: 2 * size + xOffset, y: 2 * size + yOffset },
            { x: size + xOffset, y: 2 * size + yOffset }
        ]]
}

// retreives fish/penguin image from index.html
// according to the id specified then
// adds it onto the canvas at the given 
// coordinates
function addIcon(imageX, imageY, image_id, size) {
    let imgElement = document.getElementById(image_id);
    let imgInstanceP = new fabric.Image(imgElement, genImageConfig(imageX, imageY));
    smallImgP = imgInstanceP.scale(size / 275);
    canvas.add(smallImgP);

}