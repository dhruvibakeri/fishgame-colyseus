
type GameState = number;

function isGameState(anything: any): anything is GameState {
  return typeof anything === "number" && anything % 1 === 0;
}

type GameTree = GameState | [GameState, () => GameTree[]];


function gameTreeStream(state: GameState, subTrees: GameTree) {
  const res: (number | (() => GameTree))[] = [state, () => subTrees]
  return res;
}

function isGameTree(gameTree: GameTree) {
  return (Array.isArray(gameTree)
    && typeof gameTree[1] === "function"
    && gameTree.length === 2
    && isGameState(gameTree[0]))
    || isGameState(gameTree);
}

function getStateFromTree(gameTree: GameTree): GameState {
  if (isGameState(gameTree)) {
    return gameTree;
  } else {
    return gameTree[0];
  }
}


function getChildren(gameTree: GameTree): GameTree[] {
  if (isGameState(gameTree)) {
    throw Error(`${gameTree} has no children!`)
  } else {
    return gameTree[1]();
  }
}

function addParent(gameState: GameState, subTrees: GameTree[]): GameTree {
  return [gameState, () => subTrees];
}


let myGameState: GameState = 1;

let myGameTree: GameTree = [myGameState, () => {
  return getValidSubStates(myGameState);
}]


function getValidSubStates(gameState: GameState): GameTree[] {
  return [[1, () => getValidSubStates(1)], 1, 1, [1, () => getValidSubStates(1)]];
}

let myLevel1Children = getChildren(myGameTree)
// let myLevel2Children = myLevel1Children