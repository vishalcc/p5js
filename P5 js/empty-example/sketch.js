var x=50,y=50;
function setup() {
  // put setup code here
    var b=createCanvas(200,200);

}

function draw() {
  // put drawing code here
    background(0);
    fill(255,250,0);
    rect(x,y,50,50);
    x+=random(-5,5);
    y+=random(-5,5);

}