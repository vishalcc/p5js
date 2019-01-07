var x=0,b,count=0;
function setup() {
    var canvas=createCanvas(200,200);
    canvas.position(200,200);
    b=createButton("Click me!!");
    b.mousePressed(abc);
}
function draw() {
    background(100);
    fill(255,0,0);
    stroke(200);
    line(x,0,x,200);
    x=x+3;
    if(x>200){
        x=0;
    }
}