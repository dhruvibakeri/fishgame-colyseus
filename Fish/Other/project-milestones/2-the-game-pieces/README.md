# `2 - The Game Pieces`

**Due** Thursday, 08 October 2020, 11:59:59pm

**Delivery** Use the `Fish` directory in your repository ...

- for the Programming Task, place all files in a new `Common/` directory within `Fish`
- for the Design Task, place `game-state.md` in `Planning/`

Keep in mind our `Fish.Com, a Plan` when you work on these milestones.

**Programming Task** Your programming task is to design and implement data representations of tiles and boards plus visual representations of fish and penguins.

The tile representation should define a visual representationn that fixes the size of the tiles and maximum number of fish that can be displayed on a tile. Your tiles should accomodate at least five fish images. The only required piece of functionality retieves the number off fish displayed on a tile.

The board representation should come with the following pieces of functionality:

- creating a board that has holes in specific places and is set up with a minimum number of 1-fish tiles;
- creating a board that has the same number of fish on every tile and has no holes;
- determining the positions reachable via straight lines from a given position;
- removing a tile from a board; and
- rendering the tiles graphically.

If your programming language supports pictures as values—like say BSL and ISL in Fundamentals I —- your method or function may return such a picture. Otherwise it consumes a window and adds it to a window.

If you conjecture that other pieces of functionality will be useful in the future, you may add them.

**Design Task** Both players and referees will need to access and manipulate game states, for example, for rule checking or for strategic planning. An implementation of Fish clearly demands a data representation for game states.

Describe a data representation for game states. Such descriptions typically mix English and references to the data sub-language of your chosen programming language. Add a description of an external interface; this may look like the wish lists from Fundamentals I and II. Distinguish the two parts clearly.

The memo should not exceed two pages, Less is more.
