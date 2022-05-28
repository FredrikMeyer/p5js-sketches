function setup() {
    createCanvas(700, 700);
    background(0);
}

function draw() {
    background(0);
    drawGrid(10);
}

function drawGrid(size) {
    stroke(255);
    let squareWidth = width/size;
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            line(squareWidth * (i+1), 0, squareWidth*(i+1), height);
            line(0, squareWidth * (j+1), width, squareWidth * (j+1));
        }
    }
}


function Grid(m, n) {
    let M = [];
    for (var i = 0; i < m; i++) {
        M[i] = [];
        for (var j = 0; j < n; j++) {
            M[i][j] = 0;
        }
    }

    return {
        M
    };
}


function transition(gridBefore) {
    
}

function createGrid(m, n) {
    this.width = m;
    this.height = n;

   
    let M = [];
    for (var i = 0; i < m; i++) {
        M[i] = [];
        for (var j = 0; j < n; j++) {
            M[i][j] = 0;
        }
    }
    return M;
}
