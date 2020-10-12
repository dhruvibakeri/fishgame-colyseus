# Game State and Game State Interface

## Internal Data Definition

**`Board`** = (`UsableSpace` | `UnusableSpace`)[][]

**`UsableSpace`** = { kind: `"usableSpace"`, occupiedBy: `Tile` | `false` }

**`UnusableSpace`** = { kind: `"unusableSpace"` }

**`Tile`** = { tileInfo: `TileInfo`, occupiedBy: `Fishes` | `Penguin` | `false` }

**`TileInfo`** = { size: `ℕ`, maxElements: `ℕ` }

**`Fishes`** = { kind: `"fishes"`, totalFishes: `ℤ+` }

**`Penguin`** = { kind: `"penguinn"`, color: `PenguinColor` }

**`PenguinColor`** = (`"red"` | `"brown"` | `"black"` | `"white"`)

## External Interface

A user of the interface does not know about the above Data Definition. 

**Predicates**, **Selectors**, **Constuctors** for all the data definitions above. 

TODO: Discuss with Dhruvi the interface functions we need to provide for `Board` 
TODO: Make sure the templates only use the interface functions. 
