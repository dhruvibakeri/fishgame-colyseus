var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "#FF0000";

ctx.beginPath()
ctx.moveTo(0, size)
ctx.lineTo(size, 0)
ctx.lineTo(2 * size, 0)
ctx.lineTo(3 * size, size)
ctx.lineTo(2 * size, 2 * size)
ctx.lineTo(size, 2 * size)
ctx.lineTo(0, size)
ctx.closePath()
canvas.addEventListener("mousedown", function (event) {
    if (ctx.isPointInPath(event.offsetX, event.offsetY)) {
        window.close();
    }
});
ctx.stroke();