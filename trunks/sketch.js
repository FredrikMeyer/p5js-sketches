let numLevels = 3;
let maxLevels  = 4;
let maxChildren = 3;

let trunk;

function setup() {
    createCanvas(750, 800);
    background(255);
    noFill();
    smooth();
    newTree();
}

function newTree() {
    trunk = new Branch(1, 0, width/4, 50);
    trunk.drawMe();
}

function draw() {
//    background(255);
    //trunk.updateMe(width/2, height/2);
//    trunk.drawMe();
}


class Branch {
    constructor(level, index, ex, why) {
        this.children = [];
        this.level = level;
        this.index = index;
        this.updateMe(ex, why);

        if (level <= maxLevels) {
            for (var i  = 0; i  < maxChildren; i ++) {
                this.children.push(new Branch(level + 1, index, this.endx, this.endy));
            }
        }
    }

    updateMe(ex, why) {
        this.x = ex;
        this.y = why;
        this.endx  = this.x + (this.level * 100*random() - 50);
        this.endy = this.y + 50 + (this.level * random()*50);

        for (var i = 0; i < this.children.length; i++) {
            this.children[i].updateMe();
        }
    }

    drawMe() {
        strokeWeight(maxLevels - this.level + 2);
        line(this.x, this.y, this.endx, this.endy);
        ellipse(this.x, this.y, 5, 5);
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].drawMe();
        }
    }
}
