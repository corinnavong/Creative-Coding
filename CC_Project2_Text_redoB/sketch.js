// This code was inspired by Luke Dubois's Creative Coding class and Allison Parrish's online Text and Type lesson for Creative Coding.

var sourceText = "momofuku milk bar cereal milk recipe 100 g (2 3/4 cups) cornflakes 825 g (3 3/4 cups) cold milk 30 g (2 tbs tightly packed) light brown sugar 1 g (1/4 tsp) kosher salt 1. heat the oven to 300°f. 2. spread the cornflakes on a parchment-lined sheet pan. bake for 15 minutes, until lightly toasted. cool completely. toasting the cornflakes before steeping them deepens the flavor of the milk. taste your cereal milk™ after you make it. if you want it a little sweeter, don’t be shy; add a little more brown sugar. if you want a more mellow cereal milk™, add a splash of fresh milk and a pinch of salt. 3. transfer the cooled cornflakes to a large pitcher. pour the milk into the pitcher and stir vigorously. let steep for 20 minutes at room temperature. 4. strain the mixture through a fine-mesh sieve, collecting the milk in a medium bowl. the milk will drain off quickly at first, then become thicker and starchy toward the end of the straining process. using the back of a ladle (or your hand), wring the milk out of the cornflakes, but do not force the mushy cornflakes through the sieve. 5. whisk the brown sugar and salt into the milk until fully dissolved. store in a clean pitcher or glass milk jug, refrigerated, for up to 1 week.";
var curIndex = 0;
function setup() {
  createCanvas(550, 550);
  frameRate(20);
}
function draw() {
  background(249, 228, 235);
  strokeWeight(30);
   if (mouseIsPressed) {
    stroke('#f47a9e');
  }
  else {
    noStroke();
  }
  fill('#fcfc8f');
  textSize(10 + (mouseX / width)*200);
  textAlign(CENTER, CENTER);
  text(
    sourceText.substring(curIndex, curIndex+1),
    width/2, height/2);
  curIndex++;
  if (curIndex > sourceText.length) {
    curIndex = 0;
  }
}