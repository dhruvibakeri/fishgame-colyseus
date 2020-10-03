# Fish


**Features of the game board:**

1. Each cell is a Hexagon
2. The hexagons are _not_ regular -- they're stretched horizontally
3. Each hexagon is flat topped not pointy topped
4. Layout: Odd columns are shoved down
5. Two columns count as one

**How we account for each feature**

1. We use a library that implements Amit's [hexagonal grids](https://www.redblobgames.com/grids/hexagons/) to make hex grids. 
2. Usually the library would make a regular hexagon, we can stretch the individual hexagons by "setting size to Point(15, 25) and Point(25, 15)" (see [this](https://www.redblobgames.com/grids/hexagons/implementation.html#layout-examples))
3. The `Orientation` specifies whether each hex tile is "flat topped" or "pointy topped". The `Orientation` is a part of the `Layout`. 
4. The `Layout` specifies whether even/odd rows/columns are shoved down. 
5. The board specification of the project specifies this. The conversion from `BoardDimensions` to the `Board` takes it into account.

**Data Definitions**


A **`Board`** is a 2 dimensional array of `Tile`s

```
type Board = (Tile | false)[][]
```
Interpretation.

- `Tile` is a standard game tile defined below.
- `false` is the lack of a tile (so nothing is rendered for it) -- it is present because: [Important:] _Boards with odd number of rows have tiles on the odd-th column on the last row missing in the 2d-array representation_. 

Examples:

**An example Board**:

```
exampleBoard1 = 
[
 [ 0, 5,     3, "black", 2, 2      ],
 [ 0, "red", 1, 2,       2, "brown"],
 [ 4, false, 4, false,   0, false  ]
]
```

A **`Tile`** is one of: `0` | `PositiveInteger` | `PenguinColor`

Examples

```
blankTile = 0
oneFishTile = 1
twoFishTile = 2
threeFishTile = 3
fourFishTile = 4
fiveFishTile = 5
redPenguinTile = "red"
whitePenguinTile = "white"
brownPenguinTile = "brown"
blackPenguinTile = "black"
```

Interpretation. 

- `PenguinColor` is the color of the penguin placed on a given tile.
- `0` is when there are 0 fishe on the tile -- it's blank.
- `PositiveInteger` is the number of fishes on the tile.


A **`PenguinColor`** is one of: `"red"` | `"white"` | `"brown"` | `"black"`

Interpretation. Represents the color of a given penguin on the board. 

Examples: 

```
penguinColorRed = "red"
penguinColorWhite = "white"
penguinColorBrown = "brown"
penguinColorBlack = "black"
``` 

A **`HexSize`** is a `PositiveInteger`

Interpretation. HexSize is a number s such that `s * 2` is the height of a hex, and `s * 3` is the width of a hex.
The horizontal lines are of length `s` and the slanting lines are of length `sqrt(s)`.

**Interface to be implemented**

- `BoardDimension -> Board`: The dimension of the game board (See a `4 x 3` board on [_Fish - Overview_](https://www.ccs.neu.edu/home/matthias/4500-f20/fish.html)) to the actual `Board` datastructure defined above. 
- `Boardimension PositiveInteger -> void`: Draws a given Board onto the Canvas with hexagon of the given size.
- `BoardDimension, HexSize -> CanvasDimension`: Given a board dimension and size of each hexagon.


