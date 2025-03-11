/*// Noise tends to look smoother with coordinates that are very close together
// These values will be multiplied by the x and y coordinates to make the
// resulting values very close together
let xScale = 0.015;
let yScale = 0.02;

let gapSlider;
let gap;
let offsetSlider;
let offset;

function setup() {
  createCanvas(400, 400);

  // Set up the sliders
  gapSlider = createSlider(2, width / 10, width / 20);
  gapSlider.changed(dotGrid);
  gapSlider.mouseMoved(checkChanged);
  offsetSlider = createSlider(0, 1000, 0);
  offsetSlider.mouseMoved(checkChanged);

  // Draw the grid
  dotGrid();
}

// When the mouse is moved over a slider
// Draw the dot grid if something has changed
function checkChanged() {
  if (gap !== gapSlider.value()) {
    dotGrid();
  }
  if (offset !== offsetSlider.value()) {
    dotGrid();
  }
}

function dotGrid() {
  background(255);
  noStroke();
  fill(0);

  // Get the current gap and offset values from the sliders
  gap = gapSlider.value();
  offset = offsetSlider.value();

  // Loop through x and y coordinates, at increments set by gap
  for (let x = gap / 2; x < width; x += gap) {
    for (let y = gap / 2; y < height; y += gap) {
      // Calculate noise value using scaled and offset coordinates
      let noiseValue = noise((x + offset) * xScale, (y + offset) * yScale);

      // Since noiseValue will be 0-1, multiply it by gap to set diameter to
      // between 0 and the size of the gap between circles
      let diameter = noiseValue * gap;
      circle(x, y, diameter);
    }
  }
}

// Define the global variables.
// Create an array to store words from the p5 homepage statement.
let words = ['p5.js', 'is', 'a', 'JavaScript', 'library', 'for', 'creative',
    'coding', 'with', 'a', 'focus', 'on', 'making', 'coding', 'accessible', 'and',
    'inclusive', 'for', 'artists', 'designers', 'educators', 'beginners', 'and',
    'anyone', 'else!', 'p5.js', 'is', 'free', 'and', 'open-source', 'because', 
    'we', 'believe', 'software', 'and', 'the', 'tools', 'to', 'learn', 'it',
    'should', 'be', 'accessible', 'to', 'everyone', 'Using', 'the', 'metaphor',
    'of', 'a', 'sketch', 'p5.js', 'has', 'a', 'full', 'set', 'of', 'drawing',
    'functionality', 'However', "you're", 'not', 'limited', 'to', 'your',
    'drawing', 'canvas', 'You', 'can', 'think', 'of', 'your', 'whole', 'browser',
    'page', 'as', 'your', 'sketch', 'including', 'HTML5', 'objects', 'for', 'text',
    'input', 'video', 'webcam', 'and', 'sound'];
  
  // Set the amount of words to be drawn on the canvas,   as
  // well as the starting hue value. Declare the position variable,
  // which will be used to randomly start the word selection in the array.
  let wordCount = 15;
  let hue;
  let position;
  
  function setup() {
    describe(
      'A random series of words related to p5.js scattered onto the canvas.'
    );
  
    // Import the selected font style defined in the canvas's style.css file.
    textFont('Space Mono');
  
    createCanvas(300, 300);
  
    // Set the text alignment to center and set the color mode to HSB.
    textAlign(CENTER);
    colorMode(HSB);
  
    // Define hue as a random value.
    hue = random(180, 360);
  
    // Define the random starting point for selecting the words in the
    // array.
    position = floor(random(0, words.length - wordCount));
  
    background(hue, 95, 25);
  
    // Draw as many words as set with the words variable in the
    // canvas in random positions.
    for (let i = 0; i < 20; i++) {
      textSize(random(16, 48));
      fill(hue, 200, random(50, 95));
      text(random(words), random(width), random(height));
    }
  }

btnSave.addEventListener("click", setup) 

function setup() {
    let cnv = createCanvas(100, 100);
  
    background(255);
  

    // Save the canvas to 'myCanvas.jpg'.
    saveCanvas(cnv, 'myCanvas', 'jpg');
  
    describe('A white square.');
  }
*/

/*let paddleLeftX = 20;
let paddleLeftY = 200;

let paddleRightX = 380;
let paddleRightY = 200;

let paddleSpeed = 2;
let paddleHeight = 80;
let paddleWidth = 10;

function setup() {
  createCanvas(400, 400);

  // Draw rectangles from their center
  rectMode(CENTER);
  fill(255);
  noStroke();
  textSize(40);
  textAlign(CENTER);
}

function draw() {
  background(0);

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
*/ 





// Define graphic as a global variable. This variable
// will be the offscreen buffer.
let graphic;
let paddleLeftX = 20;
let paddleLeftY = 200;

let paddleRightX = 380;
let paddleRightY = 200;

let paddleSpeed = 2;
let paddleHeight = 80;
let paddleWidth = 10;

function setup() {
  describe(
    'Black canvas with a very dark grey rectangle in the middle. When the cursor is hovered over the canvas, a white circle follows the cursor in the black areas of the canvas, but not over the dark grey rectangle.'
  );
  createCanvas(720, 400);

  // Create the graphic that will be placed within the canvas.
  graphic = createGraphics(405, 250);

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
  graphic.background(51);
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


