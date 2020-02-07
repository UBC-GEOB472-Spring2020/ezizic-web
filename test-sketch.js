function setup() {
        createCanvas(800, 300);
        background(900, 25, 100);

}
function draw() {
        // declaration of variables
        var x = mouseX;
        var y = mouseY;
        var size = 15;
        // circle
        fill(0, 34, 93, 100);
        noStroke(100);
        rect(x, y, size, size);
}
