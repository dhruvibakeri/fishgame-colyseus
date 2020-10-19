function gameTreeStream(state, subTrees) {
    const res = [state, () => subTrees]
    return res;
  }
  
  function isGameTree(gameTree) {
    return (Array.isArray(gameTree)
      && typeof gameTree[1] === "function"
      && gameTree.length === 2
      && isGameState(gameTree[0]))
      || isGameState(gameTree);
  }
  
  function getStateFromTree(gameTree) {
    if (isGameState(gameTree)) {
      return gameTree;
    } else {
      return gameTree[0];
    }
  }
  
  
  function getChildren(gameTree) {
    if (isGameState(gameTree)) {
      throw Error(`${gameTree} has no children!`)
    } else {
      return gameTree[1]();
    }
  }
  
  function addParent(gameState, subTrees) {
    return [gameState, () => subTrees];
  }
  
  let players = [[1234, {color: "red", score: 0}], [2345, {color: "black", score: 0}],[3456, {color: "brown", score: 0}],[4567, {color: "white", score: 0}]];
  
  const board4  = [[ {kind: "usableSpace", occupiedBy: {tileInfo: {size: 75, maxElements: 5}, occupiedBy: {kind: "fishes", totalFishes: 1}}},
   {kind: "usableSpace", occupiedBy: {tileInfo: {size: 75, maxElements: 1}, occupiedBy: {kind: "penguin", color: "red"}}},
   {kind: "usableSpace", occupiedBy: {tileInfo: {size: 75, maxElements: 5}, occupiedBy: {kind: "fishes", totalFishes: 2}}},
   {kind: "usableSpace", occupiedBy: {tileInfo: {size: 75, maxElements: 1}, occupiedBy: {kind: "penguin", color: "brown"}}},
   {kind: "usableSpace", occupiedBy: {tileInfo: {size: 75, maxElements: 5}, occupiedBy: {kind: "fishes", totalFishes: 5}}},
   {kind: "usableSpace", occupiedBy: false}],
   
   [ {kind: "usableSpace", occupiedBy: {tileInfo: {size: 75, maxElements: 5}, occupiedBy: {kind: "fishes", totalFishes: 3}}},
   {kind: "usableSpace", occupiedBy: {tileInfo: {size: 75, maxElements: 1}, occupiedBy: {kind: "penguin", color: "white"}}},
   {kind: "usableSpace", occupiedBy: false},
   {kind: "usableSpace", occupiedBy: {tileInfo: {size: 75, maxElements: 5}, occupiedBy: {kind: "fishes", totalFishes: 1}}},
   {kind: "usableSpace", occupiedBy: {tileInfo: {size: 75, maxElements: 1}, occupiedBy: {kind: "penguin", color: "black"}}},
   {kind: "usableSpace", occupiedBy: {tileInfo: {size: 75, maxElements: 5}, occupiedBy: {kind: "fishes", totalFishes: 1}}}]
  ]
  
  
  let myGameState = {gameStage: "playing", board: board4, nextMove: 1234, players: players};
  
  let myGameTree = [myGameState, () => {
    return getValidSubStates(myGameState);
  }]
  
  
  function getValidSubStates(myGameState) {
    let res = []

    let allPenguinPos = getPenguinPositions(nextMoveFromGameState(myGameState), myGameState)

    console.log(allPenguinPos)

    allPenguinPos.forEach(p => {
        res = [...res, ...makeAllMovesForAPenguin(nextMoveFromGameState(myGameState), p, myGameState)]
    })

    return res;
}

  function makeAllMovesForAPenguin(UUID, fromPosn, gs) {
      let res = []

      let reachablePoints = getReachable(boardFromGameState(gs), fromPosn)

      reachablePoints.forEach(p => {
          moveState = makeMove(UUID, fromPosn, p, gs)
          res.push([moveState, () => {return getValidSubStates(moveState)}])
          
        })

      return res;
  }
  
  let myLevel1Children = getChildren(myGameTree)
  //console.log("valid states", getValidSubStates(myGameState))
  console.log("gameTree", myGameTree)
  console.log("level1", myLevel1Children)