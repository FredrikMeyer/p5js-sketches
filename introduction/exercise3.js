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
        var choice = random();
        if (choice < 0.5) {
            this.randomDirection();
        } else {
            this.mouseDirection();
        }
    }

    randomDirection() {
        var choice = random(4);
        if (choice > 0 && choice < 1) {
            this.x++;
        } else if (choice >= 1 && choice < 2) {
            this.x--;
        } else if (choice >= 2 && choice < 3) {
            this.y++;
        } else {
            this.y--;
        }

        this.x = constrain(this.x, 0, width-1);
        this.y = constrain(this.y, 0, height-1);
    }

    mouseDirection() {
        let xDir = mouseX > this.x ? 1 : -1;
        let yDir = mouseY > this.y ? 1 : -1;

        this.x = this.x + xDir;
        this.y = this.y + yDir;

        this.x = constrain(this.x, 0, width-1);
        this.y = constrain(this.y, 0, width-1);
    }
}
