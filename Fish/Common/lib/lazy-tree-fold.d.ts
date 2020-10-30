/**
 * Refining the folding algorithm on lazy trees of numbers
 */
declare type GameState = number;
declare type GameTree = GameState | [GameState, () => GameTree[]];
declare function isGameState(anything: any): anything is GameState;
declare function foldOnTree<T>(f: (gs: GameState, gtrees: GameTree[]) => T, g: (gs: GameState, resArr: T[]) => T, b: T, gameTree: GameTree): T;
/**
 * Generalizing the types.
 */
declare type LazyTree<X> = X | [X, () => LazyTree<X>[]];
declare function foldLazyTrees<X, T>(f: (gs: X, gtrees: LazyTree<X>[]) => T, g: (gs: X, resArr: T[]) => T, b: T, trees: LazyTree<X>): T;
