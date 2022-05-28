function setup() {
    createCanvas(900, 900);
    colorMode(HSB);
    background(0);
}


let counter = 0;
function draw() {
    const points = generatePoints(100);
    stroke(255, 0.2);
    line(points[points.length-1][0],points[points.length-1][1], points[0][0], points[0][1]);
    for (var i = 1; i < points.length; i++) {
        stroke(counter % 360, 50, 100, 0.2 );
        line(points[i][0],points[i][1], points[i-1][0], points[i-1][1]);
    }

    counter += 1;
    if (counter > 100) {
        noLoop();
    }
   
}

function generatePoints(n) {
    const CX = width/2.;
    const CY = height/2.;

    const points = [];
    
    for (let i = 0; i < n; i++) {
        let nudge = Math.random()-0.5;
        let r = 200 + 500*(Math.random()-0.5);
        let x = CX + r*Math.cos(2*PI*(i+nudge)/n);
        let y = CY + r*Math.sin(2*PI*(i+nudge)/n);
        points.push([x,y]);
//        ellipse(x, y, 1, 1);
    }

    return points;
}


class Point {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
    }

    
}
