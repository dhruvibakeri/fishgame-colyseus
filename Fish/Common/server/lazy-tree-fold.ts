/**
 * Refining the folding algorithm on lazy trees of numbers
 */


type GameStateN = number;
type GameTree = GameStateN | [GameStateN, () => GameTree[]];

function isGameState(anything: any): anything is GameStateN {
  return typeof anything === "number" && anything % 1 === 0;
}

function foldOnTree<T>(
  f: (gs: GameStateN, gtrees: GameTree[]) => T,
  g: (gs: GameStateN, resArr: T[]) => T,
  b: T,
  gameTree: GameTree
): T {
  if (!Array.isArray(gameTree)) {
    return b;
  } else {
    let gs: GameStateN = gameTree[0];
    let subFunc: () => GameTree[] = gameTree[1]
    let res: T[] = subFunc().map(tree => foldOnTree(f, g, b, tree));
    return g(gs, res);
  }
}

/**
 * Generalizing the types. 
 */

type LazyTree<X> = X | [X, () => LazyTree<X>[]]


function foldLazyTrees<X, T>(
  f: (gs: X, gtrees: LazyTree<X>[]) => T,
  g: (gs: X, resArr: T[]) => T,
  b: T,
  trees: LazyTree<X>
): T {
  return Array.isArray(trees) ? b : g(trees[0], trees[1]().map((tree: X) => foldLazyTrees(f, g, b, tree)))
}