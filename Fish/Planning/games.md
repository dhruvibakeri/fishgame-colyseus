# Memorandum

**DATE**: Thursday, 15th October

**FROM**: Atharva Shukla, Dhruvi Bakeri

**Subject**: Game State data definition.

---

**Starting point**: The position of the board when all players have placed their penguins on their initial positions.

**GameTree**: `GameTree = [GameState, GameTree[]]`

---

Design Task

Both referees and (well-behaved) players will need to check whether an action is legal according to the rules of Fish. A well-chosen data representation will enable two different mechanisms to check rules and to plan a player’s next move (based on some look-ahead).

Describe a data representation for representing entire games. Roughly speaking, a game is a tree of all potential moves in any state reachable from a given starting point. Assume that the starting point is a state in which all players have placed all their available penguins. Both the referee and the players can use this structure to check the validity of actions or plan ahead.

Such descriptions typically mix english and references to the data sub-language of your chosen programming language. Add a description of an external interface; this may look like the wish lists from Fundamentals I and II. Distinguish the two parts clearly.

The memo must not exceed two pages. Less is more.
