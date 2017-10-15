var totalPoints = 5;
var vertexArray = [];
var lastRoll = 0;
var lastX;
var lastY;

var chunk = 2000;

function setup() {
  createCanvas(windowWidth, windowWidth);
  background(0);
  rectMode(CENTER);
  ellipseMode(CENTER);

  for (var i = 0; i <= totalPoints; i++) {
    append(vertexArray, new drawVertex(16, i, totalPoints));
  }


  lastX = vertexArray[0].x;
  lastY = vertexArray[0].y;

}

function draw() {
  translate(width / 2, height / 2);

  for (var i = 0; i <= totalPoints; i++) {
    vertexArray[i].display();
  }

  //Draw the points between the vertexes
  for (var i = 0; i < chunk; i++) {
    randomPoint();

  }

}

function randomPoint() {

  var rollDice = floor(random(totalPoints));

  this.x = (lastX + vertexArray[lastRoll].x) / 2;
  this.y = (lastY + vertexArray[lastRoll].y) / 2;

  if (frameCount % 240 <= 120) {
    stroke(100, 255, 0, 100);
  } else {
    stroke(50, 0, 255, 100);
  }
  
  point(this.x, this.y);
  lastRoll = rollDice;
  lastX = this.x;
  lastY = this.y;

}

function drawVertex(r, currentPoint, totalPoints) {

  var theta = ((Math.PI * 2) / totalPoints);
  var angle = (theta * currentPoint);

  this.pivotX = (Math.sin(angle));
  this.pivotY = (Math.cos(angle));

  this.x = width / 2 * this.pivotX;
  this.y = height / 2 * this.pivotY;

  this.display = function() {
    noFill();
    stroke(255);
    ellipse(this.x, this.y, r, r);
  }

}