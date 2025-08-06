/* VARIABLES */

let startButton;
let bg1;
let skipButton;
let screen=0;
let bg2;
let hope;
let ball;
let floor1;
let bg3;
let mc;
let bg4;
let floor2;
let floor3;

/* PRELOAD LOADS FILES */
function preload(){
  //Load enter screen 
  bg1=loadImage("assets/Welcome to Escape.png");
  bg2=loadImage("assets/adventure.png");
  hope=loadImage("assets/hope.png")
  //mc=loadImage("")
  bg3=loadImage('assets/follow.png')
  bg4=loadImage('assets/pits.png')
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);

  //Create Buttons
  startButton=new Sprite(205,325);
  skipButton = new Sprite(-350,-380);
  skipButton.rotationLock=true

  //Resizes
  bg1.resize(400,400);
  bg2.resize(400,400);
  hope.resize(50,50);
  bg3.resize(400,400)
  bg4.resize(400,400)

  //Create SPrites
  ball=new Sprite(hope,340,220);
  ball.visible=false;
  ball.collider="k";
  mc=new Sprite(50,360,20,40);
  mc.collider="d"
  mc.visible=false;
  mc.restitution = 0;  // No bounce
  mc.rotationLock = true;

  //Create floor1
  floor1= new Sprite(200,400,400,60)
  floor1.collider='k'
  floor1.visible=false;
  floor2=new Sprite(-75,-380,150,60)
  floor2.visible=false;
  floor2.collide='d'
  floor3=new Sprite(-300,-380,200,60)
  floor3.visible=false;
  floor3.collide='d'
  floor1.restitution = 0;  // Usually also set to zero
  floor2.restitution = 0;  // Usually also set to zero
  floor3.restitution = 0;  // Usually also set to zero
  floor1.rotationLock = true;
  floor2.rotationLock = true;
  floor3.rotationLock = true;

}

/* DRAW LOOP REPEATS */
function draw() {
  clear()
  mc.vel.y += 0.5
  if (screen==0){
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
}
  //Shows bgs and text 4 screens
  if (screen==1){
    image(bg2,0,0);
    floor1.visible=true;
    textSize=15;
    fill('white')
    text("Use the arrow keys\nto get to\nthe other side",295,110);
  } else if (screen==2){
    image(bg3,0,0);
    floor1.visible=true;
  } else if (screen==3){
    image(bg4,0,0)
    //Add floor
    floor1.visible=false;
    floor1.pos={x:-100, y:-100}
    floor2.pos={x:75, y:400}
    floor2.visible=true;
    floor2.color='brown';
    floor2.collider='k';
    floor3.visible=true;
    floor3.pos={x:300, y:400}
    floor3.color='brown';
    floor3.collider='k';
  }

  //Control mc
  if (kb.pressing('left')){
    mc.vel.x=-2
  } else if (kb.pressing('right')){
    mc.vel.x=2
  } else if(kb.pressing('up')){
    mc.vel.y=-2
  } else{
    mc.vel.x=0
  }

  //keep mc on screen
  if (mc.x<25){
    mc.x=25
  } else if (mc.y>400 && mc.x<400){
    mc.x=50
    mc.y=360
  }

  if (screen==1 && mc.x>=380){
    screen=2;
    showScreen2();
    mc.x=50;
  }else if (screen==2 && mc.x>=380){
  screen=3;
  showScreen3();
  mc.x=50;
  } else if (screen==3 && mc.x>=380){
    showScreen4()
    screen=4;
  }
  
  if (screen==1 || screen==2){
    if (skipButton.mouse.presses()){
      gameScreen1()
    }
  }
  
}

/* FUNCTIONS */
function showScreen1(){
  startButton.pos={x:-100, y:-100};
  //Add floor
  floor1.visible=true;
  floor1.color='brown';
  floor1.collider='k';
  // Add skip button
  skipButton.x=340
  skipButton.y=40
  skipButton.w=100;
  skipButton.h=35;
  skipButton.collider="k";
  skipButton.color="#0c6b68ff";
  skipButton.text="Skip Instructions";
  //Add sprites
  ball.visible=true;
  mc.visible=true;

}

function showScreen2(){
  startButton.pos={x:-100, y:-100};
  //Add floor
  floor1.color='brown';
  floor1.collider='k';
  //Add sprites
  // Add skip button
  skipButton.x=340
  skipButton.y=40
  skipButton.w=100;
  skipButton.h=35;
  skipButton.collider="k";
  skipButton.color="#0c6b68ff";
  skipButton.text="Skip Instructions";
  ball.visible=true;
  mc.visible=true;
  //Make hopw move
  ball.x=20
  ball.vel.x=2
  if (ball.x>380){
    ball.x=380
    ball.vel.x=0
  }
}

function showScreen3(){
  startButton.pos={x:-100, y:-100};
  // Add skip button
  skipButton.x=340
  skipButton.y=40
  skipButton.w=100;
  skipButton.h=20;
  skipButton.collider="k";
  skipButton.color="#0c6b68ff";
  skipButton.text="Skip Instructions";
  //Add sprites
  ball.visible=true;
  mc.visible=true;
}

function showScreen4(){
  startButton.pos={x:-100, y:-100};
  // Add skip button
  skipButton.x=340
  skipButton.y=40
  skipButton.w=100;
  skipButton.h=20;
  skipButton.collider="k";
  skipButton.color="#0c6b68ff";
  skipButton.text="Skip Instructions";
  //Add sprites
  ball.visible=true;
  mc.visible=true;

function gameScreen1(){
  background(0);
  fill('white');
  textSize(20);
  text("Level 3 coming soon!", 100, 200);
}