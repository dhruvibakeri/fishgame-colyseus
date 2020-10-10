# Notes on the Math involved in our Hexagon Tesselation

GOAL: make a resizable tesselation using our non-regular hexagon. 

**Construction of our semi-regular hexagon**

Assuming that a number `size` is given, we draw a hexagon such that the width of the hexagon = `3 * size` pixels and the height of the hexagon = `2 * size` pixels. The hexagons are "flat topped" rather than "pointy topped" i.e. they have verticies sticking out on either sides (wel call this a _side-vertex_) and sit on a flat base. 

Our hexagon can be fully characterized by the following 3 points:

1. A perpendicular dropped from a side-vertex to the line extending from the base is of length `size`. The same holds for vertical distance from the side-vertex to the y-value of the top-base.
2. The horizontal distance from the side-vertex to a perpendicular dropped from the nearest non-side vertex is equal to `size`.
3. The length of the top and the bottom bases is also `size`.

The three points above imply that the total width of the hexagon in `size * 3` and the total height of the hexagon is `size * 2.` They also imply that the inscribed rectangle (made by connecting all non-side vertices) has the height `size * 2` and the width `size`. We can also conclude that the length of the line segment from a side-vertex any of its nearest non-side vertex is `sqrt(2) * size`.

_Next_: Figure out what exact points make up such a hexagon;

**How to specify the corners of each hexagon to be drawn on a canvas?**

Assuming that the base is sitting on the x-axis and one side-vertex is touching the y-axis, we can specify the points describing the hexagon as the following (going clockwise from the side vertex touching the y-axis): 
```
(0, size), (size, 2 * size), (2 * size, 2 * size), (3 * size, size), (2 * size, 0), (size, 0).
```
This was for a cartesian plane, for a game canvas, the x-axis runs on the top edge of the screen (from the top left corner increasing to the right) and the y-axis runs on the left edge of the screen (from the top left corner increasing downwards). Here are the points if the hexagon's top base is touching the x-axis and one side-vertex is touching the y-axis (going clockwise starting with the vertex that's touching the y-axis):

```
(0, size), (size, 0), (2 * size, 0), (3 * size, size), (2 * size, 2 * size), (size, 2 * size)
```

We can add an x and a y offset to all the x and y coordinates to move the hexagons around. Different hexagons simply have different x and y offsets. Note that the offset point i.e. `(xOffset, yOffset)` is outside the hexagon. For the Canvas version, the offset point is `size` distance aboove the side-vertex on the left. 

_Next_: How are the hexagonal grids specified?

**How do the `row` and `col` values specify a grid?**

In our system of specifying the grid, one unit of `col` value signifies two physical columns on the grid. In short, the even columns and the odd columns (to their right) make up one `col` according to our coordinate system. As for the rows, one `row` unit only translates into one row on the board. So hexagons on the offsetted (odd) columns belong to a distint row v/s columns on the even rows. 

_Next_: Convert our hexagon grid to a internal data representation. 

**How to convert a hexagonal grid (Information) to a 2-dimensional array (Data)?**

There are multiple kinds of hexagonal tesselations possible. In our version, the individual hexagons a flat-topped, and the grid has every odd-th column (assuming zero indexing) offset downward. Assume that every odd column is shoved down. Now, if we shove all odd-th column back up again by `size` length, we have a rectangular representation with **holes on on odd-th columns on the last row of the grids that have odd number of total rows**.

**Mapping board coordinates to a 2d-array**

1. The total rows are doubled
2. For the case discussed above, the blanks are labelled

**Mapping the 2d-array to a list of hexagon corner sets**

Appropriate x and y offsets are added to each corner set.
