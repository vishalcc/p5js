var can, x = 0, y = 0, z = 0,arr=[];

function setup() {
    can = createCanvas(500, 500);
    can.position(300,300);
    for(var i=0;i<10;i++){
        arr[i]=[];
        for(var j=0;j<10;j++){
            x=i*50;
            y=j*50;
            arr[i][j]=int(random(0,255));
            stroke(10);
            fill(color(arr[i][j]));

            rect(x, y, 50, 50);
            var p=createP(str(arr[i][j]));
            p.position(320+x,300+y);
        }
    }
    createElement("h1","The Gray code are given given above...").position(350,800);
}

function draw() {
}