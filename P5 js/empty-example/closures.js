var j,k,p1,p2,can,v1;
function setup() {
    can=createCanvas(200,200);
    can.position(100,100);
    p1=createP("Start1");
    p2=createP("Start2");
    b(p1,500);
    b(p2,1000);
}
function b(a,wait) {
    var i=0;
    setInterval(tim,wait);
    function tim() {
    a.html(i);
    i++;
}

}


function draw() {
    background(100);

}