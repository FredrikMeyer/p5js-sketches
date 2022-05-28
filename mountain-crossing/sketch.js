const HEIGHT = 700.;
const WIDTH = 700.;

const groundHeight = HEIGHT/2;
const mountainHeight = HEIGHT/4;
const mountainWidth = 0.8;
const groundWidth = 1-mountainWidth;

const walkers = [];

function setup() {
    createCanvas(HEIGHT, WIDTH);
    background(0);
    stroke(255);

    for (var i = 0; i < 10; i++) {
        walkers.push(Mover(randomSpeed(4), WIDTH * random()));
    }
}

function randomSpeed(mean) {
    return random() + mean - 0.5;
}

function draw() {
    background(0);
    drawMountain();

    for (var i = 0; i < walkers.length; i++) {
        let x = walkers[i].positionX();
        let y = heightAboveGround(x);
        noFill();
        ellipse(x, y, 10, 10);

//        line(WIDTH/2, 0, x, y);

        walkers[i].step();
    }

    if (frameCount > 500) {
        console.log("Reached max frame count");
        noLoop();
    }
}

function drawMountain() {
    line(0, groundHeight, groundWidth*WIDTH, groundHeight);
    line(groundWidth*WIDTH, groundHeight, WIDTH/2, mountainHeight);
    line(WIDTH/2, mountainHeight, mountainWidth*WIDTH, groundHeight);
    line(mountainWidth*WIDTH, groundHeight, WIDTH, groundHeight);
}

function Mover(speed, startPos, id, prevMover, nextMover) {
    let posX = startPos;
    
    function step() {
        if (posX < groundWidth * WIDTH) {
            posX += speed+2;
        }
        else if (posX < WIDTH/2) {
            posX += speed;
        }
        else if (posX < mountainWidth * WIDTH) {
            posX += speed + 1;
        }
        else if (posX < WIDTH){
            posX += speed + 2;
        } else {
            posX = 0;
        }
    }

    // Assume input array does not contain self.

    // Ide: ha referanse til naboer (går dette an i JS??)
    // Gå så gjennom `movers`, og sjekk at ingen har havnet mellom
    // self og naboene.

    // (for å initiere med naboer kan vi bruke en ordnet ...)
    // Hm! Tror det er best å bare ha referanse til neste Walker.
    // Så slipper vi duplisering.
    function computeNeighbours(movers) {
        let before;
        let after;

        befors = movers.filter(m => !isAfter(m));
        afters = movers.filter(m => isAfter(m));
    }

    function isAfter(otherMover) {
        return posX < otherMover.positionX();
    }

    function positionX() {
        return posX;
    }
    
    return {
        step,
        positionX,
        id
    };
}

function heightAboveGround(posX) {
    if (posX < groundWidth * WIDTH) {
        return groundHeight;
    }
    else if (posX < WIDTH/2) {
        let relX = (posX - (groundWidth * WIDTH))/(WIDTH/2 - (groundWidth * WIDTH));
        return  groundHeight - relX * mountainHeight;
    }
    else if (posX < mountainWidth * WIDTH) {
        let relX = (posX - (mountainWidth * WIDTH))/(WIDTH/2 - mountainWidth*WIDTH);
        return groundHeight - relX * mountainHeight;
    }
    else {
        return groundHeight;
    }   
}
