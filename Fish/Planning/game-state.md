
# MEMORANDUM

**DATE**: Thursday, 8th October

**FROM**: Atharva Shukla, Dhruvi Bakeri

**Subject**: Game State data definition

---

```
GameState = { board: Board, next_move: PlayerColor | false, players: PlayerScores }
```
GameState represents the state of the game, it has the board, whose move it is next and the scores of all players.


``` 
Board is Tile[]
```
Board is the board representation it is a 2 dimensional array of tiles.


```
PlayerScores = [PlayerColor, ℕ][]
```
PlayerScores is an association list of player color and their score which is a Natural number

 
```
 Tile = { kind: "blank_space", tile_info: TileInfo }
      | { kind: "hole", tile_info: TileInfo }
      | { kind: "fishes", tile_info: TileInfo, fishes: ℤ+ }
      | { kind: "player", tile_info: TileInfo, player: PlayerColor }
```
Tile is either a blank space (because transforming a hex grid onto a 2d array leaves some blank spaces) or a tile with a certain number of fishes on it or a tile with a player on it or (when the player eats the fish) a hole. Note that a tile also keeps track of the its size and number of fishes it can accomodate.

```
TileInfo = { size: ℕ, max_fishes: ℕ and >= 5 }
```
TileInfo is is the size of the tile and the maximum number of fishes the tile can accomodate.

```
PlayerColor = "red" | "brown" | "black" | "white"
```
PlayerColor is the color of a player and is one of 4 specified colors. 

