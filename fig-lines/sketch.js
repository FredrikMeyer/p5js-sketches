function setup() {
    createCanvas(700, 700);
    background(0);
    stroke(255);
}

let a = 0;
function draw() {
    background(0);

    let target = circlePoint(300, a);
    
    myTriangle( target);

    a  += 0.01;

    noLoop();
}

function myTriangle(target) {
    stroke(255);

    const r1 = 0;
    const r2 = 2 * PI /3 ;
    const r3 = 4 * PI / 3;

    const r = 200;
    const P1 = circlePoint(200, r1);
    const P2 = circlePoint(200, r2);
    const P3 = circlePoint(200, r3);


    line(P1.x, P1.y, P2.x, P2.y);
    line(P2.x, P2.y, P3.x, P3.y);
    line(P3.x, P3.y, P1.x, P1.y);

    linesToPoint(P1, P2, target);
    linesToPoint(P2, P3, target);
    linesToPoint(P3, P1, target);
}

function linesToPoint(point1, point2, target) {
    const xWidth = point2.x - point1.x;
    const yWidth = point2.y - point1.y;

    const numLines = 30;
    for (var i = 0; i <= numLines - 1; i++) {
        let t = i / (numLines - 1);
        let fromX = point1.x * t + (1 - t) * point2.x;
        let fromY = point1.y * t + (1 - t) * point2.y;

        line(fromX, fromY, target.x, target.y);
    }
}



function circlePoint(radius, angle) {
    const x = width/2 + radius * Math.cos(angle);
    const y = height/2 + radius * Math.sin(angle);

    return {x: x, y: y};
}
