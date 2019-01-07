var can,x,y=0,interval,but;
//here we use set interval
function setup() {
    can=createCanvas(200,200);
    interval=setInterval(timeits,500);
    x=createElement("h1","countdown");
    but=createButton("button 1");
    but.mousePressed(abc);
}
function timeits() {
    x.html(y);
    y++;
}
function abc() {
    if(y !==0){
        x.html(str(0));
        y=0;
        clearInterval(interval);
    }
    else {
        interval=setInterval(timeits,500);
        x.html(str(y));
        y=0;
    }
}
function draw() {
    background(0);
    fill(255,255,0);
    rect(100,100,50,50);
}