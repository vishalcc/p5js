var slider,par,x=0,y,but,can,inp,para;

function setup() {
    can=createCanvas(200,200);
    can.position(200,200);
    par=createP("Hello i m paragraph");
    par.mouseOver(abc);
    inp=createInput("0");
    inp.input(chang);
}
function chang() {
    par.html(inp.value());
}
function abc() {
    par.html("i m change y mouse over");
    x+=5;
}

function draw() {
    background(100,100);
    fill(255,0,100);
    ellipse(100,100,50,100);
}