# Memorandum

**DATE**: Thursday, 15th October

**FROM**: Atharva Shukla, Dhruvi Bakeri

**Subject**: GameTrees Data Definition.

---

## Data Definition

We represent the tree of possible states after a move as:

**GameTree**: `GameTree = [GameState, GameTree[]]`

Interpretation: One GameState leads to 0 or more sub-game-trees due to 0 or more valid moves possible from any position.

However, for Fish, the **starting point** (The position of the board when all players have placed their penguins on their initial positions) are multiple (unlike chess which only has one starting position)

So we introduce an additional wrapper:

**GameTrees**: `GameTrees = GameTree[]`

A `GameTrees` represents all possible starting positions and their corresponding `GameTree`.

## Interface

The following interface can be used for planning:

```js
isValidMove(move, gameTree): boolean
```

`move` is a (likely curried) function from `GameState -> GameState`. The isValidMove tells the players if the move is valid on the given gameTree

```js
makeMove(move, gameTree): GameTree
```

Same as above, except there is an extra assumption that `move` is valid on the gameState of the given game tree, so it returns the resultant game tree instead of `true`.

```js
possibilities(gameTree): [actions, GameTree][]
```

Returns an association list of functions from `GameState -> GameState` (moves) and the resultant `GameTree` if the move is made.

---
