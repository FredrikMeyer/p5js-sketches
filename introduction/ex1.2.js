let randomCounts = [];
let total = 20;

function setup() {
    createCanvas(640, 240);
    for (let i = 0; i < total; i++) {
        randomCounts[i] = 0;
    }
}

function draw() {
    background(255);

    let index = floor(random(total));

    randomCounts[index]++;

    stroke(0);
    strokeWeight(2);
    fill(255);

    let w = width/randomCounts.length;

    for (var x = 0; x < randomCounts.length; x++) {
        rect(x*w, height-randomCounts[x], w-1, randomCounts[x]);
    }
    
}
