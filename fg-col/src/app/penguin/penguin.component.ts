import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-penguin',
  templateUrl: './penguin.component.html',
  styleUrls: ['./penguin.component.css']
})
export class PenguinComponent implements OnInit {

  penguinSize = 50;
  penguinSpec = generatePenguinSpecObject("brown", this.penguinSize, { x: 50, y: 100 });

  constructor() { }

  ngOnInit(): void {
  }
}


// imagine the penguin's face is a size x size pixels 
// square. We need to place 2 eyes (circles) and 1 nose (triangle)
// so we divide the face (square) into an 8 by 8 grid, and place
// the eyes and nose in relation to the face grid.
function generatePenguinSpecObject(
  color: string,
  size: number,
  offset: { x: number, y: number }
) {
  const gridSize = size / 8;
  const eyeSize = gridSize * 2;
  return {
    x: offset.x,
    y: offset.y,
    penguinSkinColor: colorToSVGFillStyle(color),
    penguinSize: size,
    cornerRounding: gridSize,
    leftEye: {
      center: { x: eyeSize + offset.x, y: eyeSize + offset.y },
      radius: gridSize,
      color: colorToSVGFillStyle("goldenrod")
    },
    rightEye: {
      center: { x: (size - eyeSize) + offset.x, y: eyeSize + offset.y },
      radius: gridSize,
      color: colorToSVGFillStyle("goldenrod")
    },
    nose: {
      corners: cornersToString({
        l: { x: gridSize * 3 + offset.x, y: gridSize * 4 + offset.y },
        r: { x: gridSize * 5 + offset.x, y: gridSize * 4 + offset.y },
        b: { x: gridSize * 4 + offset.x, y: gridSize * 6 + offset.y }
      }),
      color: colorToSVGFillStyle("goldenrod")
    }
  }
}

// converts a color to a string that goes into svg tag. 
// "red" -> "fill: red; "
const colorToSVGFillStyle = (color: string) =>
  `fill:${color} ;`

// converts the nose corners to an svg-compatible string
const cornersToString = ({ l, r, b }: {
  l: { x: number, y: number },
  r: { x: number, y: number },
  b: { x: number, y: number },
}) => `${l.x},${l.y} ${r.x},${r.y} ${b.x},${b.y};`
