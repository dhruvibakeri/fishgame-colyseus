# `Fish.com, a Plan`

**Goal**

The development of a Fish tournament system rests on two assumptions. First, our company will run the server software on its isolated machines (these could be rented or owned). Second, the participants (our customers) will run their own "AI" players, which run on the participants’ remote computers. Our company will also inject "house players" to even the odds. Additionally, our company will add visualization components so that it can broadcast the tournaments and earn advertisement dollars.

**Software Components**

The software needs three principal components: the game logic, the communication layer, and (when it reaches a certain size) a database.

> This course ignores the database components to reduce the prerequisites and make it a one-semester project.

The description of Fish suggests the following software components:

A _player-referee interface_ (protocol) to which the creators of external players program. The player interface must spell out all phases of Fish: how to place their avatars on the initial board; how to take turns; and how/whether to receive information about the end of a game and tournament. Given the goal, this must come be formulated in both logical and communication terms.

A _player_ implementation to validate the interface.

A _referee_ supervises an individual game after being handed a number of players. The referee sets up a board and interacts with the players according to the interface protocol. It removes a player—really its penguins—that fails or cheats. When the game is over, it reports the outcome of the game and the failing and cheating players; during the game it may need to inform [game observers](https://en.wikipedia.org/wiki/Observer_pattern) of on-going actions.

For dealing with an entire tournament of games, we will need to build a _tournament manager_ that runs rounds of games. The tournament manager signs up players for tournaments, allocates players to games, creates referees to run games, and collects tournament statistics. It also informs a tournament observer of on-going actions.

Finally, the game logic calls for data representations of _tiles_, _avatars_, and _boards_ plus a component that can check the rules, on behalf of both the referee (does the player’s action satisfy the rules?) and the players (which actions is the player component legally allowed to perform?).

The player interface and these game pieces make up the common ontology that players and referees use to communicate. The communication between a tournament manager and players rests on a simple exchange of texts.

Beyond the game logic, the system will also need components for dealing with remote-player communications. These components will be based on the logical interfaces.

**Building It**

Our build plan consists of three phases, each ending in a product that illustrates the basics of our eventual product. The first two phases concern the logic, the last one with communication.

The goal of the first phase is to build a complete game implementation, including game observers and possibly GUI-based players. This phase will thus implement the core of the system, including "house players."

The actual work will proceed in a bottom-up fashion as follows:

- the basic game pieces: tiles, avatars, and the board;
- a rule checker, needed by both players and referees;
- the player interface and basic implementations; and
- the referee.

Once we have a player interface, we could ask some early adopters to write an implementation in our language.

The goal of the second phase is to construct the tournament management system, still in our chosen language. At this point, the company can demo the entire product on a computer (or several using remote-windowing systems). Constructing this complete system in one language should allow us to debug the logic layer in a systematic manner, without interference from bugs in the communication layer.

The goal of the third and final phase is to break up this monolithic prototype so that we can connect the manager to "house players" as well as remote players (constructed in any language). For this step, we will use the remote proxy pattern to "splice" in communication components and separate players from managerial software. We will then be able to build a sign-up server that accepts remote-player connections, collects them for a certain period, and then hands this collection—sorted according to age, meaning in reverse order of signing up—to the tournament manager.

At this point, we can demonstrate this system to our investors as the alpha release of our product.
