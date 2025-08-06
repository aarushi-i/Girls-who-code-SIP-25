/* VARIABLES */

let startButton;
let bg1;
let skipButton;
let screen=0;
let bg2;
let hope;
let ball;
let floor1;

/* PRELOAD LOADS FILES */
function preload(){
  //Load enter screen 
  bg1=loadImage("assets/Welcome to Escape.png");
  bg2=loadImage("assets/Welcome to Escape(1).png");
  hope=loadImage("assets/Untitled design.png")
  //mc=loadImage("")
  bg3.loadImage('assets/Welcome to Escape(2).png')
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
  hope.resize(20,20);
  bg3.resize(400,400)

  //Create SPrites
  ball=new Sprite(hope,340,220);
  ball.visible=false
  mc=new Sprite(50,250,20,40);
  mc.visible=false

  //Create floor1
  floor1= new Sprite(200,340,200,30)

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
    showScreen1()
  }

  if (kb.pressing('left')){
    mc.vel.x=-2
  } else if (kb.pressing('right')){
    mc.vel.x=2
  } else{
    mc.vel.x=0
  }

  if mc.x<25{
    mc.x=25
  }

  if (screen==1) and (mc.x>=380){
    screen=2;
    showScreen2();
    mc.x=50;
  }else if (screen==2) and (mc.x>=380){
  screen=3;
  showScreen3();
  mc.x=50;
  }
  
  if (screen==1) or (screen==2){
    if (skipButton.mouse.presses()){
      gameScreen1()
    }
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
  //Add floor
  floor.color='brown';
  flood.collider='k';
  //Add sprites
  hope.visible=true;
  mc.visible=true;
  //Add text
  fill('white')
  text("Use the arrow keys to get to the other side",200,130);
}

function showScreen2(){
  image(bg3,0,0);
  startButton.pos={x:-100, y:-100};
  // Add skip button
  skipButton.w=100;
  skipButton.h=50;
  skipButton.collider="k";
  skipButton.color="#0c6b68ff";
  skipButton.text="Skip Instructions";
  //Add floor
  floor.color='brown';
  flood.collider='k';
  //Add sprites
  ball.visible=true;
  mc.visible=true;
  //Make hopw move
  ball.vel.x=2
  if (ball.x>380){
    ball.x=380
    ball.vel.x=0
  }
}

function gameScreen1(){
  
}