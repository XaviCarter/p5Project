function setup() {
    var canvas = createCanvas(1600, 1200);
    canvas.parent("p5container");
    
}

function draw() {
    background(0);

    //outline
    fill('#F9F108');
    rect(0, 0, 50, 1200);

    fill('#F9F108');
    rect(1550, 0, 50, 1200);

    fill('#F9F108');
    rect(0, 0, 1600, 50);

    fill('#F9F108');
    rect(0, 1150, 1600, 50);
    
    //radiation symbol
    fill('#F9F108');
    ellipse(800, 600, 200);

    fill(0, 0, 0);
    ellipse(800,600, 30);
    
    fill('FFFFFF');
    rect(200, 200, 100, 100, 55, 55, 0, 55)
}