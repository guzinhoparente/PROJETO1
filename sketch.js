function setup() {
  createCanvas(1000, 800);
  background("#000000");
}

function draw() {
  fill ("#FF5722");
  stroke ("#FF1100")
  if (mouseIsPressed)
  circle(mouseX, mouseY,50);
}
