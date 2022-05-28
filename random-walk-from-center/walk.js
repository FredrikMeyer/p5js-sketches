let walkers = [];

function setup() {
    createCanvas(700, 700);
    background(0);


    for (var i = 0; i < 100; i++) {
        walkers.push(new Walker(350, 350))
    }
}


function draw() {
    for (var i = 0; i < walkers.length; i++) {
        walkers[i].update();
        walkers[i].render();
    }
}


class Walker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    render() {
        stroke(255, 100);
        point(this.x,this.y);
    }

    update() {
        this.x += (Math.random()-0.5)*30;
        this.y += (Math.random()-0.5)*20;
    }
}
