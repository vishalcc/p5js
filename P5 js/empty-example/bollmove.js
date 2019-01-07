var can, x = 0, y = 0, z = 0,partlist=[],arr=[],width=300,height=300;

function setup() {
    can = createCanvas(300, 300);
    partlist.push(new particle(0));
    for(var i =0;i<5;i++){
        arr[i]=[];
        for(var j=0;j<5;j++){
            arr[i][j]=j;
        }
    }
    createP(str(arr));

}


function draw() {
        partlist[0].update();
        partlist[0].show();
        stroke(100);
        fill(200,100,200,100);
        rect(50,50,100,100);
        stroke(10);
        fill(20,10,20,100);
        rect(25,25,50,50);

}