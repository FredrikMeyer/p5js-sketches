function setup() {
    createCanvas(500, 300);
    background(255);
    stroke(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
}

function draw() {
    push();
    translate(-50, 0);

//   ruler();
//   firstImage();
//    secondImage();
//    thirdImage();
//    fourthImage();
        fifthImage();
    pop();
    noLoop();
}


function firstImage() {
    node(200, 100, 20);
}

function secondImage() {
    line(200, 100, 150, 150);
    node(200, 100, 6);
    node(150, 150, 20);
}

function thirdImage() {
    line(200, 100, 150, 150);
    line(200, 100, 250, 150);
    node(200, 100, 6);
    node(150, 150, 20);
    node(250, 150, 18);
}

function fourthImage() {
    line(200, 100, 250, 150);
    line(250, 150, 200, 200);
    line(250, 150, 300, 200);
    
    node(200, 100, 1);
    node(250, 150, 6);
    node(200, 200, 20);
    node(300, 200, 18);

    line(300, 150, 350, 150);
    line(350, 150, 330, 160);
    line(350, 150, 330, 140);

    push();
    translate(300, 0);
    line(200, 100, 150, 150);
    line(150, 150, 100, 200);
    line(150, 150, 200, 200);
    
    node(200, 100, 1);
    node(150, 150, 6);
    node(100, 200, 20);
    node(200, 200, 18);
    pop();
}

function fifthImage() {
    line(200, 100, 150, 150);
    line(150, 150, 100, 200);
    line(150, 150, 200, 200);
    line(200, 100, 250, 150);
    
    node(200, 100, 1);
    node(150, 150, 6);
    node(250, 150, 4);
    node(100, 200, 20);
    node(200, 200, 18);

}


function node(x, y, t) {
    ellipse(x, y, 40, 40);
    text(t, x, y);
}

function ruler() {
    line(0, 10, width, 10);
    line(10, 0, 10,height);
    const N = 10;

    const w = width/N;
   
  
    for (let i = 1; i <= N; i++) {
        line(10 + w * i , 0, 10 + w * i, 20);
        line(0,10 + w * i , 20, 10 + w * i);
    }
}
