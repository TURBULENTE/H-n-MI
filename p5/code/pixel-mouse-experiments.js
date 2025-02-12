let img;
let i;
let j;
let c;
let m = 5;

function preload() {
  img = loadImage("perfil_low.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // image(img, 0, 0);
  img.resize(windowWidth, 0);
  //noStroke();
  img.loadPixels(); // this gives the color of every pixel(r,g,b,a)
}

function draw() {
  clear();

  let mx = floor(map(mouseX, 0, width, 10, 70)); // maps mouseX value to element size
  let my = floor(map(mouseY, 0, width, 20, 70)); // maps mouseX value to element size
  
  for (i = 0; i < img.width; i += my) {
    for (j = 0; j < img.height; j += mx) {
      c = img.get(i, j);
      fill(c);
      triangle(i, j, i+mx, j, i, j+my); //
      ellipse(i, j, my, mx)
      rect(i, j, mx, my)
    }
  }
}
