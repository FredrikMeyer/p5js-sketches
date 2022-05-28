let walker;


function setup() {
    createCanvas(500, 500);
    background(255);
    walker = new Walker();
    
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
        var choice = floor(random(2));

        let stepSize = randomGaussian(0,10);
        
        if (choice === 0) {
            this.x = this.x + stepSize;
        } else {
            this.y = this.y + stepSize;
        }

        this.x = constrain(this.x, 0, width-1);
        this.y = constrain(this.y, 0, height-1);
     
    }
}
