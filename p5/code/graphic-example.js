var mic;
var time=0;
var lin = 50;


function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();

    background(255);
}

function draw() {


  var vol = mic.getLevel();
  var circlesize = map(vol, 0, 0.5, 5, 200);
  ellipse(time, lin, circlesize, circlesize);
  time = time+5;
  
  if(time == 400){
    lin = lin +50;
    time = 0;
  }
  
}