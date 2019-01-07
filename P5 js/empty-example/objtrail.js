var can,p,height=200,part=[];
function setup() {
    can=createCanvas(400,400);
    can.position(200,200);
     //setInterval(abc,1000);
    var b=createButton("click tto add");
    b.mousePressed(abc);
}
function abc() {
    part.push(new Particle(100,100));
}

function draw() {
    background(100);
    for(var i=0;i<part.length;i++) {
        part[i].update();
        part[i].show();
    }

}