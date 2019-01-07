var but,x=100,y=100;
function setup() {
    var can= createCanvas(200,200);
    but =createButton("Click to restart it");
    but.keyPressed(a);
}
function a() {
    createP("ok");
}

function draw() {
    background(100);
    fill(255,0,150,100);
    x+=+random(-5,5);
    rect(x,y,25,25);
}