# New Graphics

This directory contains the the rendering functionality for the game using the following state:

```
State
  stage: "placing" | "playing"
  board: 2d array of numbers
  players: array of Player

Player
  color: string
  score: number
  places: array of Posn
  status: "online" | "kicked"
  (optional) name: string
  (optional) depth: number
```

We use the fabric library for rendering the state above.


CHANGES:

- Instead of iteratively rendering each hexagon in the grid, 
  we functionally generate the set of "hexagon corners" of the whole 
  grid. We then map each of those to a hex in the grid.
