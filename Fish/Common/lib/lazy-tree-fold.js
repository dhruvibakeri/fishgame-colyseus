/**
 * Refining the folding algorithm on lazy trees of numbers
 */
function isGameState(anything) {
    return typeof anything === "number" && anything % 1 === 0;
}
function foldOnTree(f, g, b, gameTree) {
    if (!Array.isArray(gameTree)) {
        return b;
    }
    else {
        let gs = gameTree[0];
        let subFunc = gameTree[1];
        let res = subFunc().map(tree => foldOnTree(f, g, b, tree));
        return g(gs, res);
    }
}
function foldLazyTrees(f, g, b, trees) {
    return Array.isArray(trees) ? b : g(trees[0], trees[1]().map((tree) => foldLazyTrees(f, g, b, tree)));
}
