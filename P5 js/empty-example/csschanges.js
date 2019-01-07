var x,y,z,but;
function setup() {

    but=createButton("click to change paragraph color");
    z=createP("I m paragraph");
    but.mouseOut(clicks);
    but.mouseOver(clicks);
}
function clicks() {
    x=color(random(0,255),random(0,255),random(0,255));
    z.style("background-color",x);
    z.style("padding","52px");
}

function draw() {

}