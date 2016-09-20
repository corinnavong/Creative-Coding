var x = 0;
var y = 0;

var r = 246;
var g = 215;
var b = 233;

var redincrementer = 600;
var greenincrementer = 700;

function setup() {
  createCanvas(800, 600);
  background(255); // Background color is (255) white.
}

function draw() {
  // Characteristics of ellipse.
   var c = color(246, 215, 223); // Defining variable color 'c'(pink).
  fill(c); // Filling rectangle with color 'c'(pink).
  stroke(255); // Outline of ellipse is white.
  ellipse(mouseX, mouseY, 55, 55); // Ellipse shape.
  
  var counter = 0;
  
  // Fill up the whole screen every time:
  for(r = 0;r<width;r=r+redincrementer)
  {
    for(g = 0;g<height;g=g+greenincrementer)
    {
      // Characteristics of squares that are filling up page.
      fill(180, 214, 237); // Color of squares (inside).
      stroke(255) // Outline of square.
      rectMode(CORNER);
      x = min(random(width), random(width)); // lesser of the two
      y = min(random(height), random(height)); // lesser of the two
      rect(x, y, 20, 20); // Square size.
      counter = counter + 1;
    }
  }
  

}
 function mousePressed() {
  clear();
}
