# `4 — The Game Tree`

**Due** Friday, 23 October 2020, 02:00am

**Delivery** Place the product of this week’s project steps into your repo as follows:

- for the Programming Task, place `game-tree.PP` into `Common/`
- place `player-interface.PP` into `Common/`;
- place `player-interface.PP` into `Common/`;
- for the Testing task, place `xstate` and `Tests/` into a repo directory named `4`

You may create `Other/` directories in both `4` and `Fish`

**Programming Task** Design and implement a game tree data representation, including the following operations. A game tree represents an entire game, starting from some state. For each state it connects to all legal successor states. Each transition corresponds to a legal action of the player whose turn it is in this state.

The game representation should come with these pieces of functionality:

- creating a complete tree for a state to which players will not add any more penguins;
- a query facility that for a given tree node and action `A` either signals that A is illegal or returns the state that would result from taking action A;
- a query facility that for a given tree node `S` and function applies this function to all states directly reachable from `S`.

The phrase “piece of functionality” may not directly translate into “function” or “method” in your chosen language.

**Pedagogy** Software systems often deal with large data structures that do not fit into memory all at once. A complete game tree for Fish is an example. It is large, too large to create all at once. Your data structure should therefore use laziness, generators, and similar features to generate more of the tree as needed. So this aspect of the project illustrates the idea of an active window “scanning” over a large data structure.

**Design Task** The player components must communicate with the referee. This communication involves both function/method calls and orderings of those, i.e., a protocol. Since outsiders will program to this interface, it must be spelled out precisely and in detail.

> The player will also communicate with the tournament manager. See `Fish.Com, a Plan`. You do not need to address this aspect.

Write two documents: (1) the API for a player component in your chosen language and (2) the protocol for this API. The first document (player-interface.PP) should be a module in your language enriched with the usual descriptions (interpretations, purpose statements). The second document (player-protocol.md) may use the usual mix of English, terms from your language, and UML sequence diagrams (if desired).

**Testing Task** Create a test harness named `xstate` The harness consumes its JSON input from STDIN and produces its results to STDOUT. Create three tests and place them in the specified folder.

The tests are formulated as pairs of files: `<n>-in.json`, the input, and `<n>-out.json`, the expected result, for an integer `<n>` greater or equal to `1`.

Its inputs are objects with two fields:

_State_ is { "players" : _Player*_, "board" : _Board_ }

_Player*_ is [_Player_, ..., _Player_] 

INTERPRETATION The array lists all players and specifies the order in which they take turns.

_Player_ is { "color" : _Color_, "score" : Natural, "places" : [_Position_, ..., _Position_] }

INTERPRETATION The color identifies a player's penguins on the board, the score represents how many fish the player has collected so far, and the last field shows where the player's penguins are located.

CONSTRAINT All penguins must occupy distinct tiles on the board.

**Well-formed and Valid** You may assume that all inputs for your test harnesses will be well-formed JSON and valid according to the homework descriptions.

Its expected output is the effect of a silly player strategy of taking a turn That is, it is the State that results from moving the first player’s first penguin one step either North, NorthEast, SouthEast, South, SoutheWest, or Northwest (in this order) from its current position—if possible. Otherwise the expected output is False. The order in which a JSON array specifies a player's penguin positions remains the same.

**Purpose** This integration test ensures that your game state representation suffices to express complete turns. You may wish to tackle it before you solve the programming task.

**Pedagogy** While the integration test harness of `3 — The Game State` might have looked simplistic because it is probing simple components, this one integrates non-trivial components in an interesting way.
