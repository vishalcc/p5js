
var particle=function (x) {
    this.x=x;
    this.y=random(100,300);
    this.m=random(1,5);
    this.update=function () {
        this.y=this.y+this.m;
        if(this.y>height){
            this.y=height;
            this.m=-this.m;
        }
        if(this.y<0){
            this.y=0;
            this.m=-this.m;
        }
        this.x=this.x+2;
    };
    this.show=function () {
    background(100);
    fill(255, 0, 150, 100);
    ellipse(this.x, this.y, 25, 25);
    }
};