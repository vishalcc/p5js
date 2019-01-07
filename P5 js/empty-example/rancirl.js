var list=[],n=0,x,y,radius;
function setup() {
    var c=createCanvas(500,500);
    c.position(200,200);
    for(var i=0;i<30;i++){
        n=0;
        x=random(0,500);
        y=random(0,500);
        radius=random(0,150);
        for(var i=0;i<list.length;i++){
            if(radius+list[i].z>sqrt(((x-list[i].x)*(x-list[i].x))+((y-list[i].y)*(y-list[i].y)))){
                n=1;
                break;
            }
        }
        createP(str(n));
        if(n===0) {
            fill(255, 0, 150, 100);
            ellipse(x, y, radius, radius);
            list.push(createVector(x, y, radius));
        }
    }

}
function draw() {
}