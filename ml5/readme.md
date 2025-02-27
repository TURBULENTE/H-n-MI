## **Image Classification**

An Example…

https://storage.googleapis.com/tfjs-examples/webcam-transfer-learning/dist/index.html

We're gonna use
https://teachablemachine.withgoogle.com/ 
to train our model



Happy sad example:


Train two classes with teachable machine : Happy/Sad

```jsx
let classifier;
let video;
let label = "waiting...";

function preload() {
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/5uLU1FeW1/",
    { flipped: true }
  );
}

function gotResults(results) {
  console.log(results);
  label = results[0].label;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  classifier.classifyStart(video, gotResults);
}

function draw() {
  background(220);

   textSize(128);
    textAlign(CENTER, CENTER);

  if (label == "happy") {
       text("😃", 300, 300);
  }
  
   if (label == "sad") {
       text("😩", 300, 300);
  }
}

```

Now  including time: 


```jsx
let classifier;
let video;
let label = "waiting...";

function preload() {
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/kdE76UIq9/",
    { flipped: true }
  );
}

function gotResults(results) {
  console.log(results);
  label = results[0].label;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  classifier.classifyStart(video, gotResults);
  prevTime=millis();
    x=20;
  y=height/2;
  
}

function draw() {
  textSize(30);
  actualTime=millis();
  
   if( (actualTime-prevTime) >= 1000 ){
    print("1 second!");
    prevTime=actualTime;
    
    x=x+30;
     
     }

     if (label == "happy") {
       text("😁", x, y);
     }
       
     if (label == "sad") {
       text("😩", x, y);
     }
}

```