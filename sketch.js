
// Define the global variables.
// Create an array to store words from the p5 homepage statement.
let words = ['p5.js', 'is', 'a', 'JavaScript', 'library', 'for', 'Red Wings',
    'coding', 'with', 'a', 'focus', 'on', 'making', 'coding', 'Grace', 'and',
    'Luke Weaver', 'for', 'Patrick Kane', 'designers', 'rangers', 'beginners', 'and',
    'hockey', 'else!', 'p5.js', 'is', 'free', 'and', 'open-source', 'because', 
    'we', 'believe', 'sophia', 'and', 'the', 'tools', 'to', 'learn', 'it',
    'should', 'be', 'accessible', 'to', 'Jonathan Toews', 'Using', 'the', 'f1',
    'of', 'a', 'sketch', 'p5.js', 'has', 'a', 'full', 'set', 'of', 'drawing',
    'red bull', 'However', "you're", 'not', 'limited', 'to', 'your',
    'drawing', 'Maya', 'You', 'can', 'Mr.Cooper', 'of', 'your', 'yankees', 'browser',
    'page', 'as', 'your', 'sketch', 'including', 'HTML5', 'Max Verstappen', 'for', 'text',
    'input', 'black hawks', 'webcam', 'and', 'sound'];
  
  // Set the amount of words to be drawn on the canvas,   as
  // well as the starting hue value. Declare the position variable,
  // which will be used to randomly start the word selection in the array.
  let wordCount = 6;
  let hue;
  let position;

// Define graphic as a global variable. This variable
// will be the offscreen buffer.
let graphic;
let paddleLeftX = 20;
let paddleLeftY = 200;

let paddleRightX = 698;
let paddleRightY = 200;

let paddleSpeed = 2;
let paddleHeight = 80;
let paddleWidth = 10;

function setup() {
  describe(
    'Black canvas with a very dark grey rectangle in the middle. When the cursor is hovered over the canvas, a white circle follows the cursor in the black areas of the canvas, but not over the dark grey rectangle.'
  );
  createCanvas(720, 400);

  describe(
    'A random series of words related to p5.js scattered onto the graphic.'
  );

  // Import the selected font style defined in the canvas's style.css file.
  textFont('Space Mono');

  // Create the graphic that will be placed within the canvas.
  graphic = createGraphics(405, 250);

  // Set the text alignment to center and set the color mode to HSB.
  graphic.textAlign(CENTER);
  graphic.colorMode(HSB);

  // Define hue as a random value.
  hue = random(180, 360);

  // Define the random starting point for selecting the words in the
  // array.
  position = floor(random(0, words.length - wordCount));

  background(hue, 95, 25);

  // Draw as many words as set with the words variable in the
  // canvas in random positions.
  for (let i = 0; i < 20; i++) {
    textSize(random(16, 40));
    fill(hue, 200, random(50, 95));
    text(random(words), random(width), random(height));
  }

  // Draw rectangles from their center
  rectMode(CENTER);
  fill(255);
  noStroke();
  textSize(40);
  textAlign(CENTER);
}

function draw() {
  // Create a black rectangle to cover the canvas.
  // Make the rectangle black with an alpha value of 12 so that
  // the white circle following the cursor slowly fades into the background.
  background(0, 12);

  // Create the circle that will follow the cursor as it hovers
  // over the canvas.
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  // Give the buffer a dark grey background.
  // Any shapes within the buffer will have no fill.
  graphic.background ='#'+Math.floor(Math.random()*16777215).toString(16);
  graphic.noFill();


  // When the cursor hovers over the offscreen buffer, replicate the
  // circle that is drawn when the cursor is hovering over the
  // canvas. Within the buffer area, only show the outline of the circle.
  graphic.stroke(255);
  graphic.ellipse(mouseX - 150, mouseY - 75, 60, 60);

  // Draw the buffer to the screen with image().
  image(graphic, 150, 75);

  // Draw the paddles
  rect(paddleLeftX, paddleLeftY, paddleWidth, paddleHeight);
  rect(paddleRightX, paddleRightY, paddleWidth, paddleHeight);

  // Store whether W and S keys are pressed
  let leftDownPressed = keyIsDown(83);
  let leftUpPressed = keyIsDown(87);

  // Store how much the left paddle will move
  let leftMove = 0;

  if (leftDownPressed === true) {
    leftMove += paddleSpeed;
  }
  if (leftUpPressed === true) {
    leftMove -= paddleSpeed;
  }

  // Prevent the paddle from moving off screen
  paddleLeftY = constrain(
    paddleLeftY + leftMove,
    paddleHeight / 2,
    height - paddleHeight / 2
  );

  // Store whether up and down arrow keys are pressed
  let rightDownPressed = keyIsDown(DOWN_ARROW);
  let rightUpPressed = keyIsDown(UP_ARROW);

  // Store how much the right paddle will move
  let rightMove = 0;

  if (rightDownPressed === true) {
    rightMove += paddleSpeed;
  }
  if (rightUpPressed === true) {
    rightMove -= paddleSpeed;
  }

  // Prevent the paddle from moving off screen
  paddleRightY = constrain(
    paddleRightY + rightMove,
    paddleHeight / 2,
    height - paddleHeight / 2
  );
}

