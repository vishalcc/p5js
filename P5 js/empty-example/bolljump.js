var y=50,down=0,downlen=50,can,slide=0;
function setup() {
    can=createCanvas(200,200);
    can.position(200,200);
    down=createElement("h1","i m h1");
    slide=createSlider(0,50,20);
    slide.input(abc);
}
function abc() {
    down.style("background-color","green");
    down.style("font-size",str(slide.value())+"px");

}

function draw() {
    background(100);
    fill(255,255,0);
    ellipse(50,y,25,25);

}
