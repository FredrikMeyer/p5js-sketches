


function setup() {
    createCanvas(300, 300);
    background(255);
}

function draw() {
    let xLoc = randomGaussian();

    
    const sd = 60;
    const mean = width/2;


    xLoc = (xLoc * sd) + mean;

    fill(0, 10);
    noStroke();
    ellipse(xLoc, height/2, 16, 16);
}
