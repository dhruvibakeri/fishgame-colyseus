import { moveGameState, duplicateCBoard, getPenguinPositions, getPenguinPositionsForGameBoard, getAllPenguinPositionsForGameBoard, addFinalScore } from "../states/game-state/game-state-functions";
import { getReachable } from "../states/game-state/game-state-reachable";
import { Board, Fishes, GameState, Penguin, Player, Tile, UsableSpace } from "../states/game-state/game-state-data-definition";
import { BoardPosn } from "../utils/other-data-definitions";
import { GET_GameStateBoard, GET_GameStateKind, GET_GameStateNextToPlace, GET_GameStatePlayers, GET_OnTile, GET_OnUsableSpace, GET_PlayerColor, GET_totalFishes } from "../states/game-state/game-state-selectors";
import { PRED_isFishSpace, PRED_isGameState } from "../states/game-state/game-state-predicates";
import { MAKE_GameState, MAKE_GameStatePlacing, MAKE_HoleSpace, MAKE_PenguinSpace } from "../states/game-state/game-state-constructors";


//------------------------------------- DATA DEFINITION -----------------------------------------------------------


// GameTree = GameState | SubGameTree
// SubGameTree = [GameState, () => GameTree[]]

//--------------------------------------INTERPRETATION-------------------------------------------------------------
// Our GameTree is one of:
// - GameState
// - SubGameTree
// It would be just a GameState, when the game is over and there are no further valid trees that could be made.
// In the case it is a SubGameTree ([GameState, () => GameTree[]]), the GameState would be the current state, based off which the
// subsequent GameTrees would be created. 
// For the initial GameTree, the GameState would be a state where all penguins have been placed and no more can
// be added. 
// The second element in a SubGameTree is a list of lambdas that would return the child-GameTrees when asked to. 
// For the child-GameTrees, the GameState is one of the possible states that are directly reachable from
// the parent state. 
// In the event where the turn of the current player is SKIPPED, the directly reachable state would be a state where
// there is no change in the game board, but the list of Players has been updated to show the player who was next in
// line as the current player. 
//------------------------------------------------------------------------------------------------------------------

// An Action is one of 
//         A Move is {kind: "move", move : CMove}
//         A PlacePenguin is {kind: "place", player: CPenguin, posn: CPosn}
// INTERPRETATION. Represents the actions a player/referee can take. A player can move/place penguin. A referee can
// place a fish, make hole. [The PlayerActions are also executed by the Referee but are "requested" by the player]

//-------------------------------------------------------------------------------------------------------------------
// An IllegalAction is { kind: "illegalAction" }
//        It represents a situation where the desired action is an Illegal action - (invalid move / invalid placement)

//-------------------------------------------------------------------------------------------------------------------
// A BoardMove is one of
//      [BoardPosn, BoardPosn] : represents the [fromPosition, toPosition] of a move that a player would make
//      "SKIP" : represents the situation where the current player has no valid moves

//-------------------------------------------------------------------------------------------------------------------


export type BoardMove = [BoardPosn, BoardPosn] | "SKIP"

export type SubGameTree = [GameState, () => GameTree[]]

export type GameTree = GameState | SubGameTree;

export type Action = (MoveAction | PlaceAction)

export type MoveAction = { kind: "move", posn: BoardMove }

export type PlaceAction = { kind: "place", player: Player, posn: BoardPosn }

export type IllegalAction = { kind: "illegalAction" }


// GameTree -> GameState
// gets the parent of the tree(current GameState)
export function getStateFromTree(gameTree: GameTree): GameState {
  if (PRED_isGameState(gameTree)) {
    return gameTree as GameState;
  } else {
    return gameTree[0] as GameState;
  }
}


// GameTree -> GameTree[]
// gets reachable states from the given GameTree
export function getChildren(gameTree: GameTree): GameTree[] {
  if (PRED_isGameState(gameTree)) {
    throw Error(`${gameTree} has no children!`)
  } else {
    return (gameTree as SubGameTree)[1]();
  }
}


// GameState GameTree[] -> GameTree
// adds the given parent to the given subTrees
export function addParent(gameState: GameState, subTrees: GameTree[]): GameTree {
  return [gameState, () => subTrees];
}

// GameState -> GameTree
// create initial GameTree
export function createGameTree(gameState: GameState): GameTree {
  // getValidSubStates returns a list of game trees. 
  return [gameState, () => { return getValidSubStates(gameState) }]
}

// GameState Action -> GameState | IllegalAction
// applies action on a given GameState only if it is legal
export function applyAction(action: Action, gs: GameState): GameState | IllegalAction {
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
export function applyToDirectlyReachable(gs: GameState, func: (state: GameState) => any): [GameState, any][] {
  let directlyReachableStates = getValidSubStates(gs)

  let res: [GameState, any][] = []

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
export function getValidSubStatesForGameBoard(myGameState: GameState): GameTree[] {
  let res: GameTree[] = []
  let allPenguinPos: BoardPosn[] = getPenguinPositionsForGameBoard(GET_GameStateNextToPlace(myGameState), myGameState)
  
  // checks for GAME OVER and returns a state
  if(isGameOver(myGameState)) {
    let endGameState = addFinalScore(myGameState)
    res = [...res, endGameState]
  }
  else {
  allPenguinPos.forEach(p => {
    res = [...res, ...makeAllMovesForAPenguin(p, myGameState)]
  })
  }

  return res;
}

// GameState -> GameTree[]
// gets all reachable states from the given GameState
export function getValidSubStates(myGameState: GameState): GameTree[] {
  let res: GameTree[] = []
  let allPenguinPos: BoardPosn[] = getPenguinPositions(GET_GameStateNextToPlace(myGameState), myGameState)


  allPenguinPos.forEach(p => {
    res = [...res, ...makeAllMovesForAPenguin(p, myGameState)]
  })

  return res;
}

// BoardPosn GameState -> GameTree[]
// gets reachable states for a particular penguin of the given player according to the given GameState
export function makeAllMovesForAPenguin(fromPosn: BoardPosn, gs: GameState): GameTree[] {
  let res: GameTree[] = []

  let reachablePoints: BoardPosn[] = getReachable(GET_GameStateBoard(gs), fromPosn)

  reachablePoints.sort(function(a, b) {
    return a.row == b.row ? a.col - b.col : a.row - b.row;
  });

  // accounts for SKIPS
  if (reachablePoints.length == 0) {
    let skipState = moveGameState(gs, "SKIP")
    res.push([skipState, () => { return getValidSubStates(skipState) }])
  }
  else {
    reachablePoints.forEach(p => {
      let moveState = moveGameState(gs, [fromPosn, p])
      res.push([moveState, () => { return getValidSubStates(moveState) }])

    })
  }

  return res;
}

// Action GameState -> boolean
// checks if given action is valid
export function isValidAction(action: Action, gs: GameState): boolean {

  let board = GET_GameStateBoard(gs)
  switch (action.kind) {
    case "move":
      let posn: BoardMove = action.posn as [BoardPosn, BoardPosn]
      return isValidMove(posn[0], posn[1], board)
    case "place":
      let posn_place: BoardPosn = action.posn as BoardPosn
      return PRED_isFishSpace(board[posn_place.row][posn_place.col])
    default:
      return false 
  }
}
 
// Action GameState -> GameState
// applies action to given GameState
export function takeAction(action: Action, gs: GameState): GameState {
  const gameBoard : Board = GET_GameStateBoard(gs)
  let new_board: Board = duplicateCBoard(gameBoard)
  switch (action.kind) {
    case "move":
      return moveGameState(gs, action.posn)
    case "place":
      let noOfFish = GET_totalFishes(GET_OnTile(GET_OnUsableSpace(gameBoard[action.posn.row][action.posn.col] as UsableSpace) as Tile) as Fishes)
      new_board[action.posn.row][action.posn.col] = MAKE_PenguinSpace(GET_PlayerColor(action.player), noOfFish)
      return MAKE_GameState(MAKE_GameStatePlacing(GET_GameStateKind(gs), new_board, GET_GameStateNextToPlace(gs), GET_GameStatePlayers(gs)))
    default:
      return gs
  }
}

// GameState -> boolean
// Checks whehter the game is over according to the 
// given gameState
function isGameOver(state : GameState) : boolean {
  const allPenguinPosns : BoardPosn[] = getAllPenguinPositionsForGameBoard(state)
  const board : Board = GET_GameStateBoard(state)
  let allToPoints : BoardPosn[] = []
  for(let i = 0; i < allPenguinPosns.length; i++) {
    let reachablePoints : BoardPosn[] = getReachable( board, allPenguinPosns[i])
    allToPoints = [...allToPoints, ...reachablePoints]
  }
  return allToPoints.length === 0
}

// checks if given move is a valid move
// TODO: fix the signatures for this.
function isValidMove(from: BoardPosn, to: BoardPosn, board: Board) {
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

