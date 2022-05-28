let walker;

function setup() {
    createCanvas(640, 360);
    walker = new Walker();
    background(255);
}

function draw() {
    walker.step();
    walker.render();
}

class Walker {
    constructor() {
        this.x = width/2;
        this.y = height/2;
    }

    render() {
        stroke(0);
        point(this.x, this.y);
    }

    step() {
        var choice = random(4);
        if (choice > 0 && choice < 1.5) {
            this.x++;
        } else if (choice >= 1.5 && choice < 2) {
            this.x--;
        } else if (choice >= 2 && choice < 3.5) {
            this.y++;
        } else {
            this.y--;
        }

        this.x = constrain(this.x, 0, width-1);
        this.y = constrain(this.y, 0, height-1);
     
    }
}
