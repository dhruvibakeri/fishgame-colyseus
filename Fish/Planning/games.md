# Memorandum

**DATE**: Thursday, 15th October

**FROM**: Atharva Shukla, Dhruvi Bakeri

**Subject**: Game State data definition.

---

We represent the tree of possible states after a move as:

**GameTree**: `GameTree = [GameState, GameTree[]]`

Interpretation: One GameState leads to 0 or more sub-game-trees due to 0 or more valid moves possible from any position. 

However, for Fish, the **starting point** (The position of the board when all players have placed their penguins on their initial positions) are multiple (unlike chess which only has one starting position)

So we introduce an additional wrapper:

**GameTrees**: `GameTrees = GameTree[]`

A `GameTrees` represents all possible starting positions and their corresponding `GameTree`.

---
