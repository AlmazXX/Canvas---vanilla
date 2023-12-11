const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const createDrawLine = () => {
  let lastPoint = null;

  return (ctx, currentPoint) => {
    const start = lastPoint || currentPoint;
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(start.x, start.y, 2.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000";
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(currentPoint.x, currentPoint.y);
    ctx.stroke();
    ctx.closePath();

    lastPoint = currentPoint;
  };
};

let drawLine = null;

canvas.addEventListener("mousedown", () => {
  drawLine = createDrawLine();
});

canvas.addEventListener("mousemove", (e) => {
  const point = { x: e.clientX, y: e.clientY };
  drawLine && drawLine(context, point);
});

canvas.addEventListener("mouseup", () => {
  drawLine = null;
});

canvas.addEventListener("mouseout", () => {
  drawLine = null;
});
