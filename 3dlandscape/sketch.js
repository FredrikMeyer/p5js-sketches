
// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/IKB1hWWedMk

var cols, rows;
var scl = 20;
// var w = windowWidth;
var h = 500;

var flying = 0;

var terrain;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cols = windowWidth * 1.5 / scl;
    rows = h/ scl;

    terrain = [];
    for (var x = 0; x < cols; x++) {
        terrain[x] = [];
    }
}

function draw() {

    flying -= 0.1;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
            xoff += 0.2;
        }
        yoff += 0.2;
    }


    background(50);
    translate(0, 50);
    rotateX(-PI/3);
    translate(-windowWidth*.75, -h/2);

    for (var y = 0; y < rows-1; y++) {

        beginShape(TRIANGLE_STRIP);
        fill(255);
        stroke(0);
        for (var x = 0; x < cols; x++) {

            push();
            translate(x*scl, y*scl, terrain[x][y]);
            vertex(x*scl, y*scl, terrain[x][y]);
            vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
            pop();


        }
        endShape();

    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

