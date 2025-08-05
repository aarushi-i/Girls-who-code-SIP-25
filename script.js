/* VARIABLES */

let startButton;
let bg1;

/* PRELOAD LOADS FILES */
function preload(){
  //Load enter screen 
  bg1=loadImage("assets/Welcome to Escape.png");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);

  //Create start Button
  startButton=new Sprite(205,325);

}

/* DRAW LOOP REPEATS */
function draw() {
  //Display start button
  startButton.w=100;
  startButton.h=50;
  startButton.collider="k";
  startButton.color="#0c6b68ff";
  startButton.text="Press to Start";
  image(bg1,0,0)
}

/* FUNCTIONS */
function startScreen{
  background("pink");
  enterButton.pos={x:-100, y:-100};
  fill('white');
  text("We all know the story...",width/2,height/2 -100);
  // Add Next button
  NextButton.pos={x:width/2,y:height/2 + 100};
  NextButton.w=100;
  NextButton.h=50;
  NextButton.collider="k";
  NextButton.color="blue";
  NextButton.text="Next";
}