"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getPathInDirection1 = exports.getPathsNeighbours = exports.getReachableNeighbours = void 0;
var cstate_1 = require("../src/cstate");
var util_1 = require("../src/util");
var game_tree_1 = require("../src/game-tree");
var board_reachable_1 = require("../src/board-reachable");
var readline = require("readline");
//  -> 
// Compiles all the lines from
// STDIN and sends to `xjson`
function main() {
    var lines = [];
    var readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.on('line', function (l) { return lines.push(l); });
    readLine.on('close', function () {
        console.log(JSON.stringify(getFinalResult(parseJSON(lines))));
    });
}
// put the lines together, parse, and compute the reachable states
function parseJSON(lines) {
    return JSON.parse(lines.join("\n"));
}
// gets the final result
function getFinalResult(moveQuery) {
    return getOutputResult(moveQuery.state, moveQuery.from, moveQuery.to);
}
// longer version for final result
function getOutputResult(state, from, to) {
    var paddedInputBoard = padHoles(state.board);
    var ourBoardNoPenguin = inputBoardToIntermediateBoard(paddedInputBoard);
    var ourBoardWPenguin = addPenguinToBoard(ourBoardNoPenguin, state.players);
    var movedState = makeFirstMove(["playing", ourBoardWPenguin, getOurPlayers(state.players)], convertInputPosnToOurPosn(from[0], from[1]), convertInputPosnToOurPosn(to[0], to[1]));
    var ourMoves = getPossibleMoves(movedState, convertInputPosnToOurPosn(to[0], to[1]));
    if (ourMoves === false) {
        return false;
    }
    else {
        var fromOurPosn = ourMoves[0], toOurPosn = ourMoves[1];
        return [convertOurPosnToResultPosn(fromOurPosn[0], fromOurPosn[1]), convertOurPosnToResultPosn(toOurPosn[0], toOurPosn[1])];
    }
}
// converts given players to CScores
function getOurPlayers(players) {
    var ourPlayers = [];
    for (var i = 0; i < players.length; i++) {
        ourPlayers.push([players[i].color, players[i].score]);
    }
    return ourPlayers;
}
// makes the given move
function makeFirstMove(state, from, to) {
    return cstate_1.cMove(state, [from, to]);
}
// gets the next valid moves by creating gametrees
function getNextMoves(state) {
    return game_tree_1.getValidSubStates(state);
}
// gets result action in our Posn representation or false if no actions exist
function getPossibleMoves(movedState, pToPosn) {
    var board = cstate_1.GET__CBoardFromCState(movedState);
    var neighbourPosns = getReachableNeighbours(cstate_1.GET__CBoardFromCState(movedState), pToPosn);
    var penguinPossibleMoves = [];
    var possibleStates = getNextMoves(movedState);
    var penguinFromPos = [];
    var movedBoard = cstate_1.GET__CBoardFromCState(movedState);
    // adds penguins from positions in penguinFromPos in order that would be preferred if there
    // is a tie. We just pick the first posn in the list.
    for (var i = 0; i < movedBoard.length; i++) {
        // goes through all even colums (even rows in game board representation)
        for (var j = 0; j < movedBoard[i].length; j = j + 2) {
            if ((movedBoard[i][j] === cstate_1.GET__CPenguinFromCScore(cstate_1.GET__CScoresFromCState(movedState)[0]))) {
                penguinFromPos.push([i, j]);
            }
        }
        // goes through all odd colums (odd rows in game board representation)
        for (var k = 1; k < movedBoard[i].length; k = k + 2) {
            if ((movedBoard[i][k] === cstate_1.GET__CPenguinFromCScore(cstate_1.GET__CScoresFromCState(movedState)[0]))) {
                penguinFromPos.push([i, k]);
            }
        }
    }
    // gets possible move posns for the next penguin from our gameTrees
    for (var i = 0; i < possibleStates.length; i++) {
        var stateBoard = cstate_1.GET__CBoardFromCState(possibleStates[i][0]);
        for (var j = 0; j < stateBoard.length; j++) {
            for (var k = 0; k < stateBoard[j].length; k++) {
                if (stateBoard[j][k] === cstate_1.GET__CPenguinFromCScore(cstate_1.GET__CScoresFromCState(movedState)[0])) {
                    penguinPossibleMoves.push([j, k]);
                }
            }
        }
    }
    // returns the to posn for the next penguin if it is a neighbouring position
    // from the first penguin
    for (var l = 0; l < penguinPossibleMoves.length; l++) {
        if (isInArray(neighbourPosns, penguinPossibleMoves[l])) {
            return getCMove(penguinFromPos, penguinPossibleMoves[l], movedBoard);
        }
    }
    // returns false if no valid action exists
    return false;
}
// gets the from position for the peguin.
// have to access it seperately from the board since we dont explicitly keep track of moves
// in our GameTree 
function getCMove(fromPosns, toPosn, board) {
    for (var i = 0; i < fromPosns.length; i++) {
        if (isValidMove(fromPosns[i], toPosn, board)) {
            return [fromPosns[i], toPosn];
        }
    }
    return false;
}
// checks if given move is a valid move
function isValidMove(from, to, board) {
    var reachablePoints = board_reachable_1.getReachable(board, from);
    return isInArray(reachablePoints, to);
}
// checks if given item is in given list
function isInArray(list, item) {
    for (var i = 0; i < list.length; i++) {
        if (JSON.stringify(item) === JSON.stringify(list[i])) {
            return true;
        }
    }
    return false;
}
// gets board positions of reachable neighbours
function getReachableNeighbours(board, boardPosn) {
    var paths = getPathsNeighbours(board, boardPosn);
    return __spreadArrays(paths.north, paths.northEast, paths.southEast, paths.south, paths.southWest, paths.northWest);
}
exports.getReachableNeighbours = getReachableNeighbours;
// Board BoardPosn -> Paths
// gets a `Path` object from `booardPosn` in `baord`.
function getPathsNeighbours(board, boardCoord) {
    return {
        "north": getPathInDirection1(board, boardCoord, board_reachable_1.getNeighborNorth),
        "south": getPathInDirection1(board, boardCoord, board_reachable_1.getNeighborSouth),
        "northWest": getPathInDirection1(board, boardCoord, board_reachable_1.getNeighborNorthWest),
        "northEast": getPathInDirection1(board, boardCoord, board_reachable_1.getNeighborNorthEast),
        "southWest": getPathInDirection1(board, boardCoord, board_reachable_1.getNeighborSouthWest),
        "southEast": getPathInDirection1(board, boardCoord, board_reachable_1.getNeighborSouthEast)
    };
}
exports.getPathsNeighbours = getPathsNeighbours;
// BoardPosn [BoardPosn -> BoardPosn] -> BoardPosn[]
// longest path in a direction that getNeighborInDirection
// generates the neighbors for.
function getPathInDirection1(board, posn, getNeighborInDirection) {
    var res = [];
    var next = getNeighborInDirection(posn);
    // TERMINATION ARGUMENT: 
    // getNeighborInDirection: Number Number -> BoardPosn
    // will eventually hit the edge of the board or
    // water or another player (which are unreachable).
    if (!board_reachable_1.isNeighborUnreachable(board, next)) {
        res.push(next);
    }
    return res;
}
exports.getPathInDirection1 = getPathInDirection1;
// converts input posn to our posn representation
function convertInputPosnToOurPosn(r, c) {
    if (r % 2 == 0) {
        return [r / 2, c + c];
    }
    else {
        return [(r - 1) / 2, c + c + 1];
    }
}
// converts our posn representation to output posn
function convertOurPosnToResultPosn(r, c) {
    if (c % 2 == 0) {
        return [(r * 2), c / 2];
    }
    else {
        return [(r * 2) + 1, (c - 1) / 2];
    }
}
// adds penguin to a board with just fish/holes
function addPenguinToBoard(board, players) {
    for (var i = 0; i < players.length; i++) {
        for (var j = 0; j < players[i].places.length; j++) {
            var ourPosn = convertInputPosnToOurPosn(players[i].places[j][0], players[i].places[j][1]);
            board[ourPosn[0]][ourPosn[1]] = players[i].color;
        }
    }
    return board;
}
// gets the longest row of given board
function getLongestRowLength(board) {
    var max_length = 0;
    for (var i = 0; i < board.length; i++) {
        if (max_length < board[i].length) {
            max_length = board[i].length;
        }
    }
    return max_length;
}
// gets a list of holes that need to be added to the input board
function getHoles(maxLength, givenLength) {
    var res = [];
    for (var i = 0; i < maxLength - givenLength; i++) {
        res.push(0);
    }
    return res;
}
// pads the rows of input board with hole to make all row lengths equal
function padHoles(board) {
    var board_copy = cstate_1.duplicateCBoard(board);
    var maxBoardLength = getLongestRowLength(board_copy);
    for (var i = 0; i < board_copy.length; i++) {
        if (board_copy[i].length < maxBoardLength) {
            board_copy[i] = __spreadArrays(board_copy[i], (getHoles(maxBoardLength, board_copy[i].length)));
        }
    }
    return board_copy;
}
// InputBoard -> IntermediateBoard
// Translate the input board to intermediate board. 
function inputBoardToIntermediateBoard(inputBoard) {
    var totalRows = inputBoard.length;
    if (util_1.isEven(totalRows)) {
        return evenInputBoardToIntermediateBoard(inputBoard);
    }
    else {
        return oddInputBoardToIntermediateBoard(inputBoard);
    }
}
// InputBoard -> IntermediateBoard
// convert an InputBoard with even rows to a IntermediateBoard
function evenInputBoardToIntermediateBoard(inputBoard) {
    var resBoard = [];
    for (var i = 0; i < inputBoard.length / 2; i++) {
        var j = i;
        if (j != 0) {
            j = j * 2;
        }
        var thisRow = inputBoard[j];
        var nextRow = inputBoard[j + 1];
        var interleavedRow = interleaveRows(thisRow, nextRow);
        resBoard.push(interleavedRow);
    }
    return resBoard;
}
// InputBoard -> IntermediateBoard
// convert an InputBoard with odd rows to a IntermediateBoard
function oddInputBoardToIntermediateBoard(inputBoard) {
    var resBoard = [];
    for (var i = 0; i < (inputBoard.length - 1) / 2; i++) {
        var j = i;
        if (j != 0) {
            j = j * 2;
        }
        var thisRow = inputBoard[j];
        var nextRow = inputBoard[j + 1];
        var interleavedRow = interleaveRows(thisRow, nextRow);
        resBoard.push(interleavedRow);
    }
    var lastRow = inputBoard[inputBoard.length - 1];
    resBoard.push(interleaveRows(lastRow, new Array(lastRow.length).fill("unusable")));
    return resBoard;
}
// [Array-of X] [Array-of X] -> [Array-of X]
// Interleaves l1 and l2
// ASSUMPTION: l1.length === l2.length
// Examples for interleave:
// [], [] -> []
// [1, 2], [3, 4] -> [1, 3, 2, 4]
// [1, 2, 3], [4, 0, 5] -> [1, 4, 2, 0, 3, 5]
function interleaveRows(l1, l2) {
    console.assert(l1.length === l2.length);
    var interLeaved = [];
    for (var i = 0; i < l1.length; i++) {
        interLeaved.push(makeCSpace(l1[i]));
        interLeaved.push(makeCSpace(l2[i]));
    }
    return interLeaved;
}
function makeCSpace(space) {
    if (space == 0) {
        return "hole";
    }
    else {
        return space;
    }
}
main();
/*console.log(getFinalResult({"state" : {"board": [[1,2,4],[1,3,5],[1,1,4]], "players": [{"color": "black", "places" : [[2,0]], "score": 0}, {"color": "white", "places" : [[0,1], [2,1]], "score": 0},
{"color": "red", "places" : [[0,2]], "score": 0}]}, "from": [2,0], "to": [0,0]}))

console.log(getFinalResult({"state" : {"board": [[0,1,5,1,1],[2,4,3,2,1],[1,3,1,0,1],[1,2,1,1,0]], "players": [{"color": "black", "places" : [[3,0]], "score": 0}, {"color": "white", "places" : [[0,1], [0,3],[3,2]], "score": 0},
{"color": "red", "places" : [[1,4]], "score": 0}]}, "from": [3,0], "to": [1,1]}))

console.log(getFinalResult({"state" : {"board": [[0,1,5,1,1],[2,4,3,2,1],[1,0,1,0,1],[1,2,1,1,0]], "players": [{"color": "black", "places" : [[3,0]], "score": 0}, {"color": "white", "places" : [[0,1], [0,3],[3,2]], "score": 0},
{"color": "red", "places" : [[1,4]], "score": 0}]}, "from": [3,0], "to": [1,1]}))

console.log(getFinalResult({"state" : {"board": [[0,1,5,1,1],[2,4,3,2,1],[1,0,1,0,1],[1,2,1,1,0]], "players": [{"color": "black", "places" : [[3,0]], "score": 0}, {"color": "red", "places" : [[1,4]], "score": 0},
{"color": "white", "places" : [[0,1], [0,3],[3,2]], "score": 0}]}, "from": [3,0], "to": [1,1]}))

//------ PADDED
console.log("padded")

console.log(getFinalResult({"state" : {"board": [[1,2,4],[1,3,5],[1,1]], "players": [{"color": "black", "places" : [[2,0]], "score": 0}, {"color": "white", "places" : [[0,1], [2,1]], "score": 0},
{"color": "red", "places" : [[0,2]], "score": 0}]}, "from": [2,0], "to": [0,0]}))

console.log(getFinalResult({"state" : {"board": [[0,1,5,1,1],[2,4,3,2,1],[1,3,1,0,1],[1,2,1]], "players": [{"color": "black", "places" : [[3,0]], "score": 0}, {"color": "white", "places" : [[0,1], [0,3],[3,2]], "score": 0},
{"color": "red", "places" : [[1,4]], "score": 0}]}, "from": [3,0], "to": [1,1]}))

console.log(getFinalResult({"state" : {"board": [[0,1,5,1,1],[2,4,3,2,1],[1,0,1,0,1],[1,2,1,1]], "players": [{"color": "black", "places" : [[3,0]], "score": 0}, {"color": "white", "places" : [[0,1], [0,3],[3,2]], "score": 0},
{"color": "red", "places" : [[1,4]], "score": 0}]}, "from": [3,0], "to": [1,1]}))

console.log(getFinalResult({"state" : {"board": [[0,1,5,1,1],[2,4,3,2,1],[1,0,1,0,1],[1,2,1]], "players": [{"color": "black", "places" : [[3,0]], "score": 0}, {"color": "red", "places" : [[1,4]], "score": 0},
{"color": "white", "places" : [[0,1], [0,3],[3,2]], "score": 0}]}, "from": [3,0], "to": [1,1]}))*/
