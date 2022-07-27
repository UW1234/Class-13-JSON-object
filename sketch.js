var ball = {
x:200,
y:200,
r: 10,
color: ["blue","green","red","orange"]
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(random(ball.color))
  circle(ball.x, ball.y, ball.r);
  ball.x = ball.x+1
}
