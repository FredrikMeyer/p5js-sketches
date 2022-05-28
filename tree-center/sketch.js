function setup() {
    createCanvas(900, 900);
    background(0);
//    colorMode(HSB);

  //    stroke(255, 100);
    noStroke();
    fill(255, 100);
}

let r = 0;

function draw() {
    background(0);

    let T = tree(0.1*width, 0.1*height, 3, 6);
    T.render();
    
    noLoop();
}

function tree(x, y, numBranches, depth, prevx, prevy) {
    var branches = [];

    if (depth > 0) {
        for (var i = 0; i < numBranches; i++) {
            var leafLength = depth*((100-30)/6) + 30;
            var childX = x + 2*leafLength * random();
            var childY = y + 2*leafLength * random();
            var t = tree(childX, childY, numBranches, depth - 1, x, y);
            branches.push(t);
        }
    }

    function render() {
        for (var i = 0; i < branches.length; i++) {
            branches[i].render();
        }
        
        if ((prevx !== undefined) && (prevy !== undefined)) {
            stroke(100, 150, constrain(70 + 10*depth, 0, 255), 34*depth+205);
            line(x,y, prevx, prevy);
            noStroke();
        }
    }

   
    return {
        render
    };
}
