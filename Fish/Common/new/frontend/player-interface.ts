import { Board, BoardPosn, GameState, isGameState, PenguinColor, UUID } from './state'
import { } from './state';

type ClientPlayer = {
  id: UUID,
  score: Number,
  Penguincolor: PenguinColor,
  penguinPosns: BoardPosn[]
}

// Interpretation. 
// id: The unique ID
// ...

// TODO:  [Important]
// Change the old game state to remove UUID 
// Because other players should not be able to 
// look at this. 




// A synchronization of states happens when ANY player does:
// `place` or `move`. 
// If any player's `place` or `move` results in something bad:
// You get a new game state with the bad player removed.
// If the `place` or `move` are valid, the new game state is updated
// with that `place` or `move` executed. 

// Sends a message to the referee that tells it where to place the 
// player’s penguin. If It sends at the wrong time, player is kicked out.
function place(posnToPlace: BoardPosn): Promise<GameState> {
  return;
}


// Sends a message to the referee that tells it where to move the 
// player’s penguin. If It sends at the wrong time, player is kicked out.
function move(posnToPlace: BoardPosn): Promise<GameState> {
  return;
}

// UTILITY functions:
// - what valid moves do i have
// - what does the tree look like for each of them

type Move = [BoardPosn, BoardPosn];

function getValidPenguinMoves(gameState: GameState): Move[] {
  return [];
}

function getValidPenguinPlacements(gameState: GameState): BoardPosn[] {
  return [];
}

function isValidPenguinMoves(gameState: GameState): boolean {
  return false;
}

function isValidPenguinPlacements(gameState: GameState): boolean {
  return false;
}

// checks if it is the client player’s turn in this game state.
function isMyTurn(gameState: GameState, player: ClientPlayer): boolean {
  // STUB
  return true;
}

// (foldr (lambda (v l) (cons (add1 v) l)) '() '(1 2 3 4))

// ; [X Y] [X Y -> Y] Y [List-of X] -> Y
// ; applies f from right to left to each item in lx and b
// ; (foldr f b (list x-1 ... x-n)) == (f x-1 ... (f x-n b))
// (define (foldr f b lx) ...)

// For tree:

// ; [X Y] [X Y -> Y] Y [Tree-of X] -> Y

function foldOnList(f, b, lx) {
  if (lx.length === 0) {
    return b;
  } else {
    const [head, ...rest] = lx;
    return f(head, foldOnList(f, b, rest))
  }
}

// TODO:
// try with an example.
// [1, [() () () ]]...
function foldOnTree(
  f, // GameState, GameTree[] -> T
  g, // GameState, T[] -> T
  b, // T
  gameTree // GameTree
) {
  if (isGameState(gameTree)) {
    return b; // T
  } else {
    const [
      getCurrentState, // GameState
      ...getSubTrees   // GameTree[]
    ] = gameTree;

    let res = [] // T[]
    for (let i = 0; i < getSubTrees.length; i++) {
      res.push(foldOnTree(f, g, b, getSubTrees[i]));
    }

    // res : T[]
    // b : T
    // f: GameSate, GameTree[] -> T
    return g(f, res);
  }
}

// f: GameState GameTree -> X
// f: GameState[] GameTree -> X
//     ^
//     |
//  rep


// 