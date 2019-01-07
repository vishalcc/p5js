var pos;
function Particle(x,y) {
    this.x=x;
    this.y=y;this.down=0;
    this.yspeed=0;
    this.hist=[];
    this.update=function () {
        this.x+=random(-15,15);
        this.y+=random(-15,15);
        this.hist.push(createVector(this.x,this.y));
        if(this.hist.length>25){
            this.hist.splice(0,1);
        }

    };
    this.show=function () {
        fill(255,255,0);
        ellipse(this.x,this.y,25,25);
        for(var i=0;i<this.hist.length;i++){
            fill(random(0,255));
            pos=this.hist[i];
            ellipse(pos.x,pos.y,i,i);
        }
    }
}