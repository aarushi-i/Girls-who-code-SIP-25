/* VARIABLES */

let startButton;
let bg1;
let skipButton;
let screen=0;
let bg2;

/* PRELOAD LOADS FILES */
function preload(){
  //Load enter screen 
  bg1=loadImage("assets/Welcome to Escape.png");
  bg2=loadImage("assets/Welcome to Escape(1).png");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);

  //Create Buttons
  startButton=new Sprite(205,325);
  skipButton = new Sprite(350,380);

  //Resizes
  bg1.resize(400,400);
  bg2.resize(400,400);

}

/* DRAW LOOP REPEATS */
function draw() {
  //Display start button
  startButton.w=100;
  startButton.h=50;
  startButton.collider="k";
  startButton.color="#0c6b68ff";
  startButton.text="Press to Start";
  image(bg1,0,0);

  // Check start button
  if (startButton.mouse.presses()){
    screen=1;
    
  }
  
}

/* FUNCTIONS */
function showScreen1(){
  image(bg2,0,0);
  startButton.pos={x:-100, y:-100};
  // Add skip button
  skipButton.w=100;
  skipButton.h=50;
  skipButton.collider="k";
  skipButton.color="#0c6b68ff";
  skipButton.text="Skip Instructions";
}