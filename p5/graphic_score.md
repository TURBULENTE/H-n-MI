Morton Feldman’s Projection 1


Listen the microphone…

```jsx
function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
	}

function draw() {
  var vol = mic.getLevel();
	console.log(vol);
}

```

Graphic  example

```jsx
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
```

- Library for sound:

https://github.com/processing/p5.js-sound

- A collection of p5.sound sketches that demonstrate the new p5 sound library.

Collection by [thomasjohnmartinez](https://editor.p5js.org/thomasjohnmartinez/sketches)

https://editor.p5js.org/thomasjohnmartinez/collections/Dp0zGclVL

**ml.js: Sound classifier simple example**

```jsx

let classifier;

// Array containing the 18 words of SpeechCommands18w
let words = [
  "yes",
  "no",
];

// Variable for displaying the results on the canvas
let predictedWord = "";

function preload() {
  // Options for the SpeechCommands18w model, the default probabilityThreshold is 0
  let options = { probabilityThreshold: 0.9 };
  // Load SpeechCommands18w sound classifier model
  classifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(400, 400);
  // Classify the sound from microphone in real time
  classifier.classifyStart(gotResult);
}

function draw() {
  background(250);

  // Once the model outputs results start displaying the predicted word on the canvas
  if (predictedWord == "yes") {
    ellipse(200, 200 , 300, 300);
  }

  if (predictedWord == "no") {
    ellipse(200, 200 , 20, 20);
  }

}

// A function to run when we get any errors and the results
function gotResult(results) {
  // The results are in an array ordered by confidence
  console.log(results);
  // Load the first label to the text variable displayed on the canvas
  predictedWord = results[0].label;
}

```