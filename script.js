/* VARIABLES */

let startButton, skipButton
let bg1, bg2, bg3, bg4, bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15;
let screen=0;
let hope;
let ball;
let floor1,floor2,floor3,floor4,floor5,floor6,floor7,floor8,floor9,floor10;
let mc;
let starCollect=0;
let gate2;
let star1,star2;
let enemy1;
let star, stars;

/* PRELOAD LOADS FILES */
function preload(){
  //Load enter screen 
  bg1=loadImage("assets/Welcome to Escape.png");
  bg2=loadImage("assets/adventure.png");
  hope=loadImage("assets/hope.png")
  //mc=loadImage("")
  bg3=loadImage('assets/follow.png')
  bg4=loadImage('assets/pits.png')
  bg5=loadImage("assets/Gates.png")
  bg6=loadImage("assets/stars.png")
  bg7=loadImage("assets/1.png")
  bg8=loadImage("assets/nothing.png")
  bg9=loadImage("assets/fly.png")
  bg10=loadImage("assets/gatesag.png")
  bg11=loadImage("assets/fog.png")
  bg12=loadImage("assets/out.png")
  bg13=loadImage("assets/13.png")
  bg14=loadImage("assets/14.png")
  bg15=loadImage("assets/end.png")
  star=loadImage("assets/star.png")
  stars=loadImage("assets/star.png")

  //animation
  mc=new Sprite(0,0,15,30);
  mc.addAni('idle','assets/idle.png',{width:32,height:32,frames:4})
  mc.addAni('run','assets/run.png',{width:32,height:32,frames:6});
  mc.addAni('jump','assets/jump.png',{width:32,height:32,frames:8});
  //mc.debug=true
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
  bg5.resize(400,400)
  bg6.resize(400,400)
  bg7.resize(400,400)
  bg8.resize(400,400)
  bg9.resize(400,400)
  bg10.resize(400,400)
  bg11.resize(400,400)
  bg12.resize(400,400)
  bg13.resize(400,400)
  bg14.resize(400,400)
  bg15.resize(400,400)
  star.resize(20,20)
  stars.resize(20,20)


  //Create SPrites
  ball=new Sprite(hope,340,220);
  ball.visible=false;
  ball.collider="k";
  mc.collider="d"
  mc.visible=false;
  mc.restitution = 0;  // No bounce
  mc.rotationLock = true;

  //Create stars
  star1= new Sprite(star,200,340,20);
  star2= new Sprite(stars,290,300,20);
  star1.visible=false;
  star2.visible=false;

  //Create floors
  floor1= new Sprite(200,400,400,60)
  floor1.collider='k'
  floor1.visible=false;
  floor2=new Sprite(-75,-380,150,60)
  floor2.visible=false;
  floor2.collide='k'
  floor3=new Sprite(-300,-380,200,60)
  floor3.visible=false;
  floor3.collide='k'
  floor1.restitution = 0;  // Usually also set to zero
  floor2.restitution = 0;  // Usually also set to zero
  floor3.restitution = 0;  // Usually also set to zero
  floor1.rotationLock = true;
  floor2.rotationLock = true;
  floor3.rotationLock = true;
  floor4 = new Sprite(-200,-400,125,60)
  floor5 = new Sprite(-200,-400,175,60)
  floor6 = new Sprite(-200,-400,25,100)
  floor4.restitution = 0;  // Usually also set to zero
  floor6.restitution = 0;  // Usually also set to zero
  floor5.restitution = 0;  // Usually also set to zero
  floor4.rotationLock = true;
  floor5.rotationLock = true;
  floor6.rotationLock = true;
  floor4.collider='k'
  floor5.collider='k'  
  floor6.collider='k'
  floor1.color='brown';
  floor2.color='brown';
  floor3.color='brown';
  floor4.color='brown';
  floor5.color='brown';
  floor6.color='brown';
  floor7 = new Sprite(-200,-400,75,250)
  floor7.restitution = 0;  // Usually also set to zero
  floor7.rotationLock = true;
  floor7.collider='k'
  floor7.color='brown';
  floor8 = new Sprite(-200,-400,20,300)
  floor8.restitution = 0;  // Usually also set to zero
  floor8.rotationLock = true;
  floor8.collider='k'
  floor8.color='brown';
  floor9 = new Sprite(-200,-400,50,20)
  floor9.restitution = 0;  // Usually also set to zero
  floor9.rotationLock = true;
  floor9.collider='k'
  floor9.color='white';
  floor10 = new Sprite(-200,-400,300,20)
  floor10.restitution = 0;  // Usually also set to zero
  floor10.rotationLock = true;
  floor10.collider='k'
  floor10.color='white';

  //Create gates
  gate2=new Sprite(-100,-100,40,300);
  gate2.visible=true;
  gate2.collider="k";
  gate2.text="2 stars"

  //create enemy
  //enemy1= new Sprite(-43,-90,60)
}

/* DRAW LOOP REPEATS */
function draw() {
  mc.collider='d'
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
  //Shows bgs and text 4 intro screens
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
  } else if (screen==4){
    image(bg5,0,0)
    text("Stars Collected:"+starCollect, 20, 20)
  }
  

  //Control mc
  if (kb.pressing('left')){
    mc.vel.x=-2
    mc.changeAni('run');
    mc.mirror.x=true
  } else if (kb.pressing('right')){
    mc.changeAni('run');
    mc.mirror.x=false
    mc.vel.x=2
  } else if(kb.pressing('up')){
    mc.changeAni('jump');
    mc.vel.y=-2
  } else{
    mc.changeAni('idle');
    mc.vel.x=0
  }

  //keep mc on screen
  if (mc.x<25){
    mc.x=25
  } else if (screen==16 && mc.y>400){
    mc.x=25
    mc.y=0
  }else if (mc.y>400 && mc.x<400){
    mc.x=50
    mc.y=0
  }  else if (mc.y<0){
    mc.x=0
  }



  //Change screens
  if (screen==1 && mc.x>=380){
    screen=2;
    showScreen2();
    mc.x=50;
  }else if (screen==2 && mc.x>=380){
  screen=3;
  starCollect=0
  showScreen3();
  mc.x=50;
  } else if (screen==3 && mc.x>=380){
    showScreen4()
    starCollect=0
    screen=4;
    mc.x=50;
  } else if (screen==4 && mc.x>=380){
    screen=10;
    starCollect=0
    gameScreen1()
    mc.x=50;
  } else if (screen==10 && mc.x>=380){
    screen=11;
    starCollect=0
    gameScreen2()
    mc.x=50;
  } else if (screen==11 && mc.x>=380){
    screen=12;
    starCollect=0
    gameScreen3()
    mc.x=50;
  } else if (screen==12 && mc.x>=380){
    screen=13;
    starCollect=0
    gameScreen4()
    mc.x=50;
  } else if (screen==13 && mc.x>=380){
    screen=14
    starCollect=0
    gameScreen5()
    mc.x=50; 
  } else if (screen==14 && mc.x>=380){
    screen=15
    starCollect=0
    gameScreen6()
    mc.x=50;
  } else if (screen==15 && mc.x>=380){
    screen=16
    starCollect=0
    gameScreen7()
    mc.x=50;
    mc.y=0
  } else if (screen==18 && mc.x>=380){
    screen=19
    end()
  }
  

  //Skip instructions
  if (screen==1 || screen==2 || screen==3 || screen==4 ){
    if (skipButton.mouse.presses()){
      screen=10
      gameScreen1()
      mc.x=50;
    }
  }

  //Collect stars
  if (screen==4 && mc.collides(star1)){
    star1.visible=false;
    star1.pos={x:-100, y:-100}
    starCollect+=1
  } else if (screen==4 && mc.collides(star2)){
      star2.visible=false;
      star2.pos={x:-100, y:-100}
      starCollect+=1
  } else if (screen==13 && mc.collides(star1)){
    star1.visible=false;
    star1.pos={x:-100, y:-100}
    starCollect+=1
  } else if (screen==13 && mc.collides(star2)){
      star2.visible=false;
      star2.pos={x:-100, y:-100}
      starCollect+=1
  } else if (screen==15 && mc.collides(star1)){
    star1.visible=false;
    star1.pos={x:-100, y:-100}
    starCollect+=1
  } else if (screen==15 && mc.collides(star2)){
      star2.visible=false;
      star2.pos={x:-100, y:-100}
      starCollect+=1
  }

  //gates
  if (screen==4 && starCollect==2){
    gate2.visible=false;
    gate2.pos={x:-100, y:-100}
    starCollect=0
  } else if (screen==13 && starCollect==2){
    gate2.visible=false;
    gate2.pos={x:-100, y:-100}
    starCollect=0
  } else if (screen==15 && starCollect==2){
    gate2.visible=false;
    gate2.pos={x:-100, y:-100}
    starCollect=0
  }

  //bg for game screens
  if (screen==10){
    image(bg7,0,0)
  } else if (screen==11){
    image(bg8,0,0)
  } else if (screen==12){
    image(bg9,0,0)
  } else if (screen==13){
    image(bg10,0,0)
    text("Stars Collected:"+starCollect, 280, 50)
  } else if (screen==14){
    image(bg11,0,0)
  } else if (screen==15){
    image(bg12,0,0)
    text("Stars Collected:"+starCollect, 180, 200)
  } else if (screen==16){
    image(bg13,0,0)
    if (mc.collides(floor10)){
      screen=18
    }
  } else if (screen==18){
    image(bg14,0,0)
    floor10.color="white"
  } else if (screen==19){
    image(bg15,0,0)
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
  // Add skip button
  skipButton.x=340
  skipButton.y=30
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
  // Add skip button
  skipButton.x=340
  skipButton.y=100
  skipButton.w=100;
  skipButton.h=35;
  skipButton.collider="k";
  skipButton.color="#0c6b68ff";
  skipButton.text="Skip Instructions";
  //Add sprites
  ball.visible=true;
  mc.visible=true;
  //Gate 
  gate2.visible=true;
  gate2.pos={x:380, y:360};
  gate2.collider="k";
  star1.pos={x:200, y:200}
  star2.pos={x:300,y:340}
  star1.visible=true;
  star2.visible=true;
  star1.speed=0
  star2.speed=0
  star1.collider='k';
  star2.collider='k';
  //floor
  floor1.visible=true;
  floor1.collider='k'
  floor1.pos={x:200, y:400}
  floor2.visible=false;
  floor2.pos={x:-75, y:-380}
  floor3.visible=false;
  floor3.pos={x:-300, y:-380}
}


function gameScreen1(){
  //setup
  skipButton.pos={x:-350, y:-380};
  floor1.visible=false;
  floor1.pos={x:-100, y:-100}
  floor2.collider='k'
  floor2.visible=true;
  floor2.pos={x:75, y:400}
  floor3.collider='k'
  floor3.visible=true;
  floor3.pos={x:300, y:400}
  ball.speed=0
  ball.pos={x:350, y:200}
  gate2.visible=false;
  gate2.pos={x:-100, y:-100}
  star1.visible=false;
  star1.pos={x:-100, y:-100}
  star2.visible=false;
  star2.pos={x:-100, y:-100}
}

function gameScreen2(){
  //setup
  skipButton.pos={x:-350, y:-380};
  floor1.visible=false;
  floor1.pos={x:-100, y:-100}
  floor2.visible=false;
  floor2.pos={x:-10075, y:-400}
  floor3.visible=false;
  floor3.pos={x:-300, y:-400}
  ball.speed=0
  ball.pos={x:350, y:200}
  floor4.pos={x:75,y:400}
  floor5.pos={x:370,y:400}
  floor6.pos={x:200,y:400}
}

function gameScreen3(){
  //setup
  ball.speed=0
  ball.pos={x:350, y:300}
  floor4.pos={x:50,y:400}
  floor5.pos={x:-370,y:-400}
  floor6.pos={x:200,y:400}
  floor7.pos={x:350,y:400}
}

function gameScreen4(){
  //setup
  ball.speed=0
  ball.pos={x:300, y:150}
  floor4.pos={x:50,y:400}
  floor5.pos={x:-370,y:-400}
  floor6.pos={x:-200,y:-400}
  floor7.pos={x:350,y:450}
  gate2.pos={x:380,y:300}
  gate2.visible=true;
  gate2.collider="k";
  star1.visible=true
  star1.pos={x:150,y:100}
  star2.visible=true
  star2.pos={x:350,y:300}
  star1.speed=0
  star2.speed=0
  star1.collider='k';
  star2.collider='k';
}

function gameScreen5(){
  //setup
  skipButton.pos={x:-350, y:-380};
  floor1.visible=false;
  floor1.pos={x:-100, y:-100}
  floor3.collider='k'
  floor3.visible=true;
  floor3.pos={x:300, y:400}
  ball.speed=0
  ball.pos={x:350, y:200}
  gate2.visible=false;
  gate2.pos={x:-100, y:-100}
  star1.visible=false;
  star1.pos={x:-100, y:-100}
  star2.visible=false;
  star2.pos={x:-100, y:-100}
  floor5.pos={x:-200,y:-400}
  floor6.pos={x:-200,y:-400}
  floor7.pos={x:-200,y:-400}
}

function gameScreen6(){
  //setup
  floor3.collider='k'
  floor3.visible=true;
  floor3.pos={x:350, y:400}
  ball.speed=0
  ball.pos={x:350, y:200}
  floor8.pos={x:200,y:400}
  star1.visible=true
  star2.visible=true
  gate2.visible=true;
  gate2.collider="k";
  star1.collider='k';
  star2.collider='k';
  gate2.pos={x:380,y:300}
  star1.pos={x:200,y:200}
  star2.pos={x:350,y:300}
  star1.speed=0  
  star2.speed=0
}

function gameScreen7(){
  //setup
  floor1.pos={x:-100, y:-100}
  floor2.pos={x:-10075, y:-400}
  floor3.pos={x:-300, y:-400}
  floor4.pos={x:-200,y:-400}
  floor5.pos={x:-200,y:-400}
  floor6.pos={x:-200,y:-400}
  floor7.pos={x:-200,y:-400}
  floor8.pos={x:-200,y:-400}
  floor9.pos={x:50,y:150}
  floor10.color=("#3e3c5e")
  floor10.pos={x:350,y:400}
  ball.speed=0
  ball.pos={x:350, y:200}
  gate2.visible=false;
  gate2.pos={x:-100, y:-100}
  star1.visible=false;
  star1.pos={x:-100, y:-100}
  star2.visible=false;
  star2.pos={x:-100, y:-100}
}

function end(){
  mc.visible=false
  ball.visible=false
  floor10.visible=false
  floor9.visible=false
}

