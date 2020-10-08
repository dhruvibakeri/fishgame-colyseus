`game-state.md`

### `GameState `
```{```

- **`board`**: a 2-dimensional array of `Tile`s
- **`nextMove`**: a `Player`
- **`players`**: an association list of `Player` and `Score`

```}```

**_Interpretation._** Any game state can be uniquely determined by the board configuration, the next player, and the score of each player.

---
### `Tile`
is one of
- **`BLANK_SPACE`**
- **`HOLE`**
- **`Fishes`**
- **`Player`**

where

- **`BLANK_SPACE`** is `0`
- **`HOLE`** is `-1`

**_Interpretation._** The blank space is a "lack of tile" on the hexagonal grid,
the hole appears when a tile has been explicitly lifted, a tile can either be a 
certain colored player or a certain number of fishes. 

---
### `Player`
is one of:

- **`RED_PLAYER`**
- **`BROWN_PLAYER`**
- **`BLACK_PLAYER`**
- **`WHITE_PLAYER`**

where 

- **`RED_PLAYER`** is "red"
- **`BROWN_PLAYER`** is "brown"
- **`BLACK_PLAYER`** is "black"
- **`WHITE_PLAYER`** is "white"

**_Interpretation._** Different player pieces are determined by their color.

---
### `Fishes`
is a **Positive Integer** .

**_Interpretation._** The number of fishes in a tile can range from 1 to some  positive integer n.

---
#### **Along with data definitions**
We provide:
- `recognizers` that will for all clauses of enumerations to distinguish each case
- `template` with each data definition that makes use of `recognizers`
