# -- MILESTONE 2 ---

- add tests for game-state functions
- restructure the files 
- add what I added to fix milestone 6 edge case
- rename data type for GameTree | SubTree

Code Inspection 60/90
------------------------------

+10 self-evaluation

-10 presence of code that's irrelevant to the game board

-10 no interpretation of the data/type definition for a tile representation

-10 no interpretation of the data/type definition for a board/coordinates representation

+5 no signature for remove-tile functionality
+5 no purpose statement for remove-tile functionality
+5 no unit tests for remove-tile functionality
+5 code clarity of remove-tile functionality

+5 no signature for reachable-positions functionality
+5 no purpose statement for reachable-positions functionality
+5 no unit tests for reachable-positions functionality
+5 code clarity of reachable-positions functionality
+10 sub-tasks of reachable-positions functionality are factored-out
 (e.g. tracing reachable positions in one direction, finding a neighbor in one direction)

Design Inspection 4/20
------------------------------

-3 no "interface" specification that connects game-state to players and referees

-5 construction of an intermediate game-state is not accounted for in the interface

-3 state of players is not accounted for location of penguins

-5 order of player turns is not accounted for

Misc Comments
------------------------------
1) Try having a seperate js files for a common functionality. The code seems too lengthy

# -- MILESTONE 3 ---

------------------------------------------------------------
Code Inspection 46/60
------------------------------------------------------------


Game state interpretation missing:
-2 current player turn
-2 player order
-2 relationship between players and penguins is not clear

-8 insufficient purpose statement for functionality to create game states


------------------------------------------------------------
Design Inspection 15/30
------------------------------------------------------------

-10 insufficient description of functionality concerning rule checking using this data structure
- isValidMove: "valid" is not defined, relative to current game state and player turn. Can a player's move be applied to a game state when it's not their turn?
- No mention of how referee would use this method for rule checking

-5 insufficient description of functionality concerning using this data structure to plan
- how can the players use possibilities() to  plan a move?


------------------------------------------------------------
Misc Comments
------------------------------------------------------------

Game state interpretation
- Don't repeat information from other files (ex. Board). Give just the interpretation needed to explain what the data is used for here in this game state.
- Related: if Board and State both use Tile, for example, then define Tile in one place and reference that definition from everywhere else, rather than repeating the Tile def in multiple files.

state.js
- This file has a lot of methods that don't seem directly related to the game state (i.e. predicate helpers section). Predicates for other data types should be with those data definitions.

File organization lacks structure. It is not immediately clear that state.js and game-state-functions.js are closely related. Use directories to organize code and tests separately from library files like mocha.js and chai.js, and css files. Consider your successor developers.

unit tests
The board constants and other long constant definitions make the unit test file difficult to read and navigate. Can you reuse constants across tests? Use setup methods to separate the constants from the actual unit test logic?

# -- MILESTONE 4 ---

------------------------------------------------------------
Refactoring 25/30
------------------------------------------------------------
-5 insufficient interpretation of the game state
  (what is the order of players and how they take turns)

------------------------------------------------------------
Code Inspection 35/85 + Extra 0/10
------------------------------------------------------------

-15 misdirected issue in self-evaluation
  why are all the data definitions written together in state.js? Also please don't point to Readme's in self eval.
  for the data representation of the board and state, you were expected to point in board.PP and state.PP file.
  (more on this below)
 
-20 it is unclear if the game tree node can represent all three kinds of nodes:
 game-is-over, current-player-is-stuck, and current-player-can-move;
 only current-player-can-move is obvious

-10 signature/purpose statement does not explain the first query functionality clearly
 (i.e. the second bullet point in the programming task)
 this is also a misdirection. The functionality asks for the state that would result from taking action A for a given Tree Node
 You have pointed to getStateFromTree() which doesn't take any action.
 
-5 only one unit test for the first query functionality


+0 no extra points for a lazy ("caching") scheme of the game tree generation

------------------------------------------------------------
Design Inspection 17/20
------------------------------------------------------------
-0 specifies movement / placement functions that take coordinates as input.
    (The player interface should include functions that return positions, which the referee will call to
    get the placements/moves the player wants to make.)

-0 insufficient description of the player's API wrt to a referee
 (there should be a way to start game, end game)

-3 the description of the protocol does not mention that placing and taking turns
 are often-used functionalities, unlike starting and ending a game

------------------------------------------------------------
Misc Comments
------------------------------------------------------------
The player is going to tell the referee how to move the player's penguin, not the other way around.
So, in the player's interface, place/move should return position/coordinates (in whatever form) as a result,
and they should not be taken as an argument.

where is the implementation for getPenguinPositions() ?

# -- MILESTONE 5 ---

--------------------------------------------------------------------------------------------------------------------------
Reaction to Prior Feedback 10/20
--------------------------------------------------------------------------------------------------------------------------

-10 data definition/interpretation of the game tree doesn't mention how "skip" transitions are dealt with
 (the reader of your code should be able to understand this without inspecting the code that generates child trees)

-------------------------------------------------------------------------------------------------------------------------
Code Inspection 12/80
-------------------------------------------------------------------------------------------------------------------------
(*Graded at 60% due to incomplete self-eval)
-10 self eval incomplete

PLACEMENT
-10 choosing placement: purpose statement of placePenguinStrategy don't specify the placement strategy and isn't clear if mutated.If mutated, doesn't specify side effects

MOVEMENT
-10 choosing turn action: purpose statement and/or data definition/interpretation in best-action.ts don't explain what the result means
 (should explain what the pair of positions refers to -- e.g. which is `from`, which is `to`, what happens when the current player does not have valid moves)

UNIT TESTS
-10 no negative unit test for the placement strategy (placement fails)
-20 no unit tests for the moving strategy (testing different depth)

------------------------------------------------------------
Design Inspection 12/30
------------------------------------------------------------

-10 the document does not specify how to initialize a referee
   (how will the tournament manager create a referee? does the referee run it immediately on construction?
      do you expect some start/run-game method to be called?)

-8 the document mentions that the referee runs the game according to the age of players, but the document doesn't specify how that order is determined
   (are players given in order? does the referee ask players for their age? does the provided player-info already contain information about the age?)

-----------------------------------------------------------------------------------------------------------------------------
Misc Comments
------------------------------------------------------------------------------------------------------------------------------
- file structure in readme should be updated to focus on relevant components; libraries and helper components need not be included. No harm in including them as long as the readme is clear and concise. Maybe a directory structure diagram would be a better way to represent.
