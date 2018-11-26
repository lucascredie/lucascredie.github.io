

// We will train the perceptron with one "Point" object at a time
let count = 0;
let allData = [];
allData = oranges.concat(apples);
training = shuffle(allData);

// =============================================================================
//              How many Are missclasified?
// =============================================================================

let ptron2 = new Perceptron(3, 0);
let training2 = shuffle(allData);
let initialOut = new Array(training2.length);
let missClassified = 0;
for (let i = 0; i < training2.length; i++) {
    initialOut[i] = ptron2.feedForward(training2[i].input);
    let correctOutput = training2[i].output;
    let estimatedOutput = initialOut[i];
    if(correctOutput !== estimatedOutput) {
        missClassified++;
    }
};

console.log(missClassified);
// =============================================================================
//              Program ex 1
// =============================================================================

// A Perceptron object
let ptron;
let LEARNING_RATE = 0.005;
// Coordinate space
let xmin = 0;
let ymin = 0;
let xmax = 4;
let ymax = 3;

// The function to describe a line
function f(x) {
  let y = -0.8 * x + 3;
  return y;
}

function setup() {
  createCanvas(400, 400);
    
  // The perceptron has 3 inputs -- x, y, and bias
  // Second value is "Learning Constant"
    ptron = new Perceptron(3, LEARNING_RATE); // Learning Constant is low just b/c it's fun to watch, this is not necessarily optimal

}

function draw() {

   
  background(255);

  // Draw the line from the function above
  strokeWeight(3);
  stroke(240);
  let x1 = map(xmin, xmin, xmax, 0, width);
  let y1 = map(f(xmin), ymin, ymax, height, 0);
  let x2 = map(xmax, xmin, xmax, 0, width);
  let y2 = map(f(xmax), ymin, ymax, height, 0);
  line(x1, y1, x2, y2);
    
  // Draw the line based on the current weights
  // Formula is weights[0]*x + weights[1]*y + weights[2] = 0
  stroke(81, 148, 255);
  strokeWeight(3);
  let weights = ptron.getWeights();
  x1 = xmin;
  y1 = (-weights[2] - weights[0] * x1) / weights[1];
  x2 = xmax;
  y2 = (-weights[2] - weights[0] * x2) / weights[1];

  x1 = map(x1, xmin, xmax, 0, width);
  y1 = map(y1, ymin, ymax, height, 0);
  x2 = map(x2, xmin, xmax, 0, width);
  y2 = map(y2, ymin, ymax, height, 0);
  line(x1, y1, x2, y2);


  // Train the Perceptron with one "training" point at a time
  ptron.train(training[count].input, training[count].output);
  count = (count + 1) % training.length;

//   count = 50;
  // Draw all the points based on what the Perceptron would "guess"
  // Does not use the "known" correct answer
  for (let i = 0; i < count; i++) {
    stroke(0);
    strokeWeight(2);
    fill(0);
    let guess = ptron.feedForward(training[i].input);
    if (guess > 0) {
        stroke(224, 128, 53);
        fill(255, 181, 33);
    } else {
        stroke(196, 47, 47);
        fill(255, 68, 68);
    }

    let x = map(training[i].input[0], xmin, xmax, 0, width);
    let y = map(training[i].input[1], ymin, ymax, height, 0);
    ellipse(x, y, 8, 8);

  }

  let weightOutput = document.getElementById("text").innerHTML = `W1: ${weights[0]} W2: ${weights[1]}`;

}
  
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

