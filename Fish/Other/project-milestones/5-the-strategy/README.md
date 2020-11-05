# `5 — The Strategy`

**Due** Thursday, 29 October 2020, 11:59:59pm

**Delivery** Place the product of this week’s project steps into your repo as follows:

- for the Programming Task, place `strategy.PP` into a new folder: `Player/`;
- for the Design Task, place `referee.md` in `Planning/`
- for the Testing Task, place `xtree` and `Tests/` into a repo-level directory named `5`

You may create `Other/` directories in both `5` and `Fish`.

**Programming Task** For this assignment, you are to implement a strategy component that takes care of two decisions:

- penguin placements

It places a penguin in the next available free spot followning a zig zag pattern that starts at the top left corner. That is, the search goes from left to right in each row and moves down to the next row when one is filled up.

This piece of functionality may assume that the referee will set up a game board that is large enough to accommodate all the penguins of all the players.

- a choice of action for the player whose turn it is

It picks the action that realizes the best gain after looking ahead N > 0 turns for this player in the game tree for the current state.

The best gain after N turns is the highest score a player can make after playing the specified number of turns—assuming that all opponents pick one of the moves that minimizes the player’s gain.

> Julia B. suggests that the name "minimal maxium" is backwards for the specified algorithm, so I have struck it. The specification stands, however. — Wikipedia has a lengthy [entry on minimax and maximin optimizations](https://en.wikipedia.org/wiki/Minimax). It should not be necessary to read this article but it provides some background and examples for those interested in the idea.

**Tie Breaker** If several different actions can realize the same gain, the strategy moves the penguin that has the lowest row number for the place from which the penguin is moved and, within this row, the lowest column number. In case this still leaves the algorithm with more than one choice, the process is repeated for the target field to which the penguins will move. Why is this process guaranteed to stop with a single action?

**Design Task** A referee manages a game of Fish for some set of players. The software component sets up the game, runs the rounds, and shuts down the game. It is the tournament administrator that sets up referees and players for games. [See Fish.Com, a Plan](https://felleisen.org/matthias/4500-f20/plan.html).

Create a design document for the referee component, including its API. It should come with sufficient detail so that a sub-contractor in the far-away land of Codemanistan could implement it for you. In the meantime, you might be charged to implement a tournament manager.

Two pages should suffice. Less is more.

**Testing Task** Create a test harness named `xtree` The harness consumes its JSON input from `STDIN` and produces its results to `STDOUT`. Create three tests and place them in the specified folder.

The tests are formulated as pairs of files: `<n>-in.json`, the input, and `<n>-out.json`, the expected result, for an integer `<n>` greater or equal to `1`.

Its inputs are objects with three fields:

_Move-Response-Query_ is { "state" : _State_, "from" : _Position_, "to" : _Position_ }

INTERPRETATION The object describes the current state and the move that the currently active player picked. CONSTRAINT The object is invalid, if the specified move is illegal in the given state.

**Well-formed and Valid** You may assume that all inputs for your test harnesses will be well-formed JSON and valid according to the homework descriptions.

Its expected output is the action that the next player can take to get a penguin to a place that neighbors the one that the first player just conquered:

Action is either false or [ _Position_, _Position_ ]

INTERPRETATION The array describes the opponent's move from the first position to the second; if the desired kind of move isn't possible, the harness delivers false.

The tie breaking needs a refinement for cases when two distinct penguins can move to the same spot:

if more than one position satisfies the "closeness" condition, a tie breaker algorithm picks by the top-most row of the "from" position, the left-most column of the "from" position, the top-most row of the "to" position, and the left-most column of the "to" position---in exactly this order.

Like in [4 — The Game Tree](https://felleisen.org/matthias/4500-f20/4.html), the neighboring tiles are searched in the following order: North, NorthEast, SouthEast, South, SouthWest, and NorthWest.

Can you use the query functionality from [4 — The Game Tree](https://felleisen.org/matthias/4500-f20/4.html) to implement this evaluation of the game tree?

**Pedagogy** Building harnesses for integration tests doesn’t slow you down—it actually accelerates your progress because the goals are always compatible with the current task and lay its foundation. Work thru the integration testing task before tackling the programming task.
