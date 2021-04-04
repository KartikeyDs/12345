var gameState = 0;
//Home page
var bg_home, bg_home_Img;
var start_btn, start_btn_Img;
//Story
var storm_, storm_Img;
var island_, island_Img;
//Story objetcs
var ob_1;
var ob_2;
//Story(Storm) Sound effect
var storm_so
//Timer 
var timer = 0;

//Game objects:-
var bricks_1, bricks_1_Img;
var bricks_2;
var bricks_3;
var bricks_4;
var bricks_5;
var bricks_6;
var bricks_7;
var bricks_8;
var bricks_9;
var bricks_10;
var bricks_11;
var bricks_12;
var bricks_13;
var bricks_14;
var bricks_15;
var bricks_16;
var bricks_17;
var bricks_18;
var bricks_19;
var bricks_20;
var bricks_21;
var bricks_22;
var bricks_23;
var bricks_24;
var bricks_25;
var invisobj;
var invisible_gr;

var spikes,spikes2, spikes3,spikes4, spikes_Img;
var question_b, question_b_Img;
var lava, lava_Img;
var brick_1,brick_Img;
var brick_2;
var brick_3;

//Mobs:-
var jin_a, jin_a_Img;
var bomb_,bomb_1,bomb_2, bomb_Img;
var mob_,mob_1, mob_Img;
var jin_l,l;
var jin_d, d;

//Backgrounds:-
var bg,bg_Img;
var bg2,bg3,bg4,bg5,bg6,bg7,bg8, bg2_Img;


function preload() {

//Story Sounds:-
storm_so = loadSound("/Sound/storm_s.mp3");

//Buttons:-
start_btn_Img = loadImage("/Buttons/e.png");

//Backgrounds:-
bg_Img = loadImage("/Backgrounds/b1.png");
bg2_Img = loadImage("/Backgrounds/b2.JPG ")

//Images:-
bricks_1_Img = loadImage("/level/Bricks.png");
spikes_Img = loadImage("/level/Spikes.png");
lava_Img = loadImage("/level/Lava.png")
brick_Img = loadImage("/level/Brick.png");
d = loadImage("/Hero g/h_0.png");

//Animations:-

bg_home_Img = loadAnimation("/Home/_0.png","/Home/_1.png","/Home/_2.png","/Home/_3.png","/Home/_4.png","/Home/_5.png","/Home/_6.png","/Home/_7.png","/Home/_8.png","/Home/_9.png","/Home/_10.png","/Home/_11.png","/Home/_12.png");
storm_Img = loadAnimation("/Story/0.png ", "/Story/1.png","/Story/2.png", "/Story/3.png", "/Story/4.png", "/Story/5.png", "/Story/6.png", "/Story/7.png", "/Story/8.png", "/Story/9.png", "/Story/10.png", "/Story/11.png", "/Story/12.png", "/Story/13.png", "/Story/14.png", "/Story/15.png", "/Story/16.png", "/Story/17.png", "/Story/18.png", "/Story/19.png", "/Story/20.png", "/Story/21.png", "/Story/22.png", "/Story/23.png", "/Story/24.png", "/Story/25.png", "/Story/26.png", "/Story/27.png", "/Story/28.png", "/Story/29.png", "/Story/30.png", "/Story/31.png", "/Story/32.png", "/Story/33.png", "/Story/34.png", "/Story/35.png");
island_Img = loadAnimation("/Story/36.png", "/Story/37.png", "/Story/38.png", "/Story/39.png", "/Story/40.png", "/Story/41.png", "/Story/42.png", "/Story/43.png", "/Story/44.png", "/Story/45.png", "/Story/46.png", "/Story/47.png", "/Story/48.png", "/Story/49.png")
jin_a_Img = loadAnimation("/Hero a/a_0.png","/Hero a/a_1.png","/Hero a/a_2.png","/Hero a/a_3.png","/Hero a/a_4.png","/Hero a/a_5.png","/Hero a/a_6.png","/Hero a/a_7.png","/Hero a/a_8.png","/Hero a/a_9.png",)
l = loadAnimation("/Hero a_l/a_0.png","/Hero a_l/a_1.png","/Hero a_l/a_2.png","/Hero a_l/a_3.png","/Hero a_l/a_4.png","/Hero a_l/a_5.png","/Hero a_l/a_6.png","/Hero a_l/a_7.png","/Hero a_l/a_8.png","/Hero a_l/a_9.png")
bomb_Img = loadAnimation("/Bomb/1.png","/Bomb/2.png","/Bomb/3.png","/Bomb/4.png","/Bomb/5.png","/Bomb/6.png","/Bomb/7.png","/Bomb/8.png","/Bomb/9.png","/Bomb/10.png","/Bomb/11.png","/Bomb/12.png",)
question_b_Img = loadAnimation("/question box/q_0.png","/question box/q_1.png","/question box/q_2.png","/question box/q_3.png")
mob_Img = loadAnimation("/Mob/1.png","/Mob/2.png","/Mob/3.png","/Mob/4.png","/Mob/5.png","/Mob/6.png","/Mob/7.png","/Mob/8.png",)

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg5 = createSprite(displayWidth+2700, displayHeight-420);
  bg5.addImage("bg2_",bg2_Img);
  bg5.visible = false;

  bg4 = createSprite(displayWidth+1500, displayHeight-420);
  bg4.addImage("bg2_",bg2_Img);
  bg4.visible = false;

  bg3 = createSprite(displayWidth+300, displayHeight-420);
  bg3.addImage("bg2_",bg2_Img);
  bg3.visible = false;

  bg2 = createSprite(displayWidth-930, displayHeight-420);
  bg2.addImage("bg2_",bg2_Img);
  bg2.visible = false;

  start_btn = createSprite(displayWidth-750, displayHeight-743,0,0);
  start_btn.addImage("btn1", start_btn_Img);
  start_btn.scale = 0.4;

  bg_home = createSprite(displayWidth-1400, displayHeight-430, 0, 0);
  bg_home.addAnimation("home",bg_home_Img);
  bg_home.scale = 2.75;

  bg_home.depth = start_btn.depth;
  start_btn.depth = start_btn.depth+1;

  jin_d = createSprite(displayWidth-1400,displayHeight-500,50,40)
  jin_d.scale = 0.7
  jin_d.addImage("l", d);
  jin_d.visible = false;
  jin_d.debug = true;
  jin_d.setCollider("circle", 0,0,170);

  jin_l = createSprite(displayWidth-1400,displayHeight-500,50,40)
  jin_l.scale = 0.7
  jin_l.addAnimation("l", l);
  jin_l.visible = false;
  jin_l.setCollider("circle", 0,0,150);

  jin_a = createSprite(displayWidth-1400,displayHeight-500,50,40);
  jin_a.scale = 0.7;
  jin_a.addAnimation("j_a", jin_a_Img);
  jin_a.visible = false;
 // jin_a.debug = true;
  jin_a.setCollider("circle", 0,0,150);

  brick_1 = createSprite(displayWidth+1252, displayHeight-280,100,100);
  brick_1.scale = 0.15
  brick_1.addImage("b", brick_Img)
  //brick_1.debug = true;
  brick_1.setCollider("rectangle",0,0,500,500);
  brick_1.visible = false;

  brick_2 = createSprite(displayWidth+1452, displayHeight-170,100,100);
  brick_2.scale = 0.15
  brick_2.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_2.setCollider("rectangle",0,0,500,500);
  brick_2.visible = false;

  invisible_gr = createSprite(displayHeight-100,displayHeight-135,100000,50);
  invisible_gr.visible = false;

}

function draw() {
  background(0);  
 console.log(jin_a.x)
  camera.position.x=jin_a.x
  camera.position.y=displayHeight/2.4

    if(mousePressedOver(start_btn)){
    
    startButton();
  }

  if(keyWentDown("UP_ARROW")&&jin_a.y>=450){
    
    jin_a.velocityY = -16;
    jin_l.velocityY = -16
    
    }

  if(keyWentDown("RIGHT_ARROW")){
    jin_a.visible = true;
    jin_a.velocityX = 10;
    jin_l.velocityX = 10;
    jin_l.visible = false;
    jin_d.visible = false;
  }

  if(keyWentDown("LEFT_ARROW")){
    camera.position.x=jin_a.x
    camera.position.y=displayHeight/2.4
    jin_a.velocityX = -10;
   
    jin_l.visible = true;
    jin_a.visible = false;
    jin_d.visible = false;
  }
 
  if(keyWentDown("DOWN_ARROW")){
    jin_a.visible = false;
    jin_l.velocityX = 0;
    jin_a.velocityX = 0;
    jin_l.visible = false;
    camera.position.x=jin_a.x
    camera.position.y=displayHeight/2.4
    jin_d.visible = true;

  }

  if(keyWentDown("LEFT_ARROW")&&keyWentDown("UP_ARROW")){
  jin_l.visible = true;
  jin_a.visible = false;
  jin_d.visible = false;
  }

  if(keyWentDown("RIGHT_ARROW")&&keyWentDown("UP_ARROW")){
    jin_a.visible = true;
    jin_l.visible = false;
    jin_d.visible = false;
    }

  jin_l.velocityY = jin_l.velocityY + 0.8;
  jin_a.velocityY = jin_a.velocityY + 0.8;
  jin_d.velocityY = jin_d.velocityY + 0.8;
  
  jin_d.collide(brick_1);
  jin_d.collide(brick_2);
  jin_d.collide(invisible_gr);

  jin_a.collide(brick_1);
  jin_a.collide(brick_2);
  jin_a.collide(invisible_gr);

  jin_l.collide(brick_1);
  jin_l.collide(brick_2);
  jin_l.collide(invisible_gr);

  jin_l.x = jin_a.x;
  jin_l.y = jin_a.y;
  jin_d.x = jin_a.x;
  jin_d.y = jin_a.y;

  drawSprites();

  if(gameState === 0){
    strokeWeight(3)
    stroke("white")
    fill("black");
    textSize(50);
    
    text("The Lost Fortress", displayWidth-1580,displayHeight-730)
    }

  if(gameState === 1) {
    textFont("Georgia");
    fill("white")
    textSize(30)
    text("Hit the mistery box", displayWidth-1500,displayHeight-730)
  } 
}

function startButton(){

  gameState = 1;

  bg_home.destroy();
  start_btn.destroy();

  bg2.visible = true;
  bg3.visible = true;
  bg4.visible = true;
  bg5.visible = true;
  jin_a.visible = true;
  brick_1.visible = true;
  brick_2.visible = true;

  bomb_ = createSprite(displayWidth-600, displayHeight-200,0,0);
  bomb_.scale = 0.4
  bomb_.addAnimation("b_", bomb_Img);
  bomb_.velocityX = -1;

  bomb_1 = createSprite(displayWidth-500, displayHeight-200,0,0);
  bomb_1.scale = 0.4
  bomb_1.addAnimation("b_", bomb_Img);
  bomb_1.velocityX = -1;

  bomb_2 = createSprite(displayWidth+3000, displayHeight-200,0,0);
  bomb_2.scale = 0.4
  bomb_2.addAnimation("b_", bomb_Img);
  bomb_2.velocityX = -1;

  question_b = createSprite(displayWidth-400, displayHeight-500,0,0);
  question_b.scale = 0.27
  question_b.addAnimation("q_b", question_b_Img);


  bricks_1 = createSprite(displayWidth-1260, displayHeight-124,0,0);
  bricks_1.scale = 0.3;
  bricks_1.addImage("b_1_",bricks_1_Img);

  bricks_2 = createSprite(displayWidth-1050, displayHeight-124,0,0);
  bricks_2.scale = 0.3;
  bricks_2.addImage("b_2_",bricks_1_Img);

  bricks_3 = createSprite(displayWidth-840, displayHeight-124,0,0);
  bricks_3.scale = 0.3;
  bricks_3.addImage("b_3_",bricks_1_Img); 

  bricks_4 = createSprite(displayWidth-630, displayHeight-124,0,0);
  bricks_4.scale = 0.3;
  bricks_4.addImage("b_3_",bricks_1_Img); 

  bricks_5 = createSprite(displayWidth-420, displayHeight-124,0,0);
  bricks_5.scale = 0.3;
  bricks_5.addImage("b_3_",bricks_1_Img); 

  bricks_6 = createSprite(displayWidth-210, displayHeight-124,0,0);
  bricks_6.scale = 0.3;
  bricks_6.addImage("b_3_",bricks_1_Img); 

  bricks_7 = createSprite(displayWidth-0, displayHeight-124,0,0);
  bricks_7.scale = 0.3;
  bricks_7.addImage("b_3_",bricks_1_Img); 

  bricks_8 = createSprite(displayWidth+435, displayHeight-124,0,0);
  bricks_8.scale = 0.3;
  bricks_8.addImage("b_3_",bricks_1_Img); 

  bricks_9 = createSprite(displayWidth-1470, displayHeight-124,0,0);
  bricks_9.scale = 0.3;
  bricks_9.addImage("b_3_",bricks_1_Img);

  bricks_10 = createSprite(displayWidth+645, displayHeight-124,0,0);
  bricks_10.scale = 0.3;
  bricks_10.addImage("b_3_",bricks_1_Img);

  bricks_11 = createSprite(displayWidth+755, displayHeight-124,0,0);
  bricks_11.scale = 0.3;
  bricks_11.addImage("b_3_",bricks_1_Img);

  bricks_12 = createSprite(displayWidth+895, displayHeight-124,0,0);
  bricks_12.scale = 0.3;
  bricks_12.addImage("b_3_",bricks_1_Img);

  bricks_13 = createSprite(displayWidth+1900, displayHeight-124,0,0);
  bricks_13.scale = 0.3;
  bricks_13.addImage("b_3_",bricks_1_Img);

  bricks_14 = createSprite(displayWidth+2110, displayHeight-124,0,0);
  bricks_14.scale = 0.3;
  bricks_14.addImage("b_3_",bricks_1_Img);

  bricks_15 = createSprite(displayWidth+2320, displayHeight-124,0,0);
  bricks_15.scale = 0.3;
  bricks_15.addImage("b_3_",bricks_1_Img);

  bricks_16 = createSprite(displayWidth+2430, displayHeight-124,0,0);
  bricks_16.scale = 0.3;
  bricks_16.addImage("b_3_",bricks_1_Img);

  bricks_17 = createSprite(displayWidth+2640, displayHeight-124,0,0);
  bricks_17.scale = 0.3;
  bricks_17.addImage("b_3_",bricks_1_Img);

  bricks_18 = createSprite(displayWidth+2850, displayHeight-124,0,0);
  bricks_18.scale = 0.3;
  bricks_18.addImage("b_3_",bricks_1_Img);

  bg = createSprite(displayWidth-1838, displayHeight-420);
  bg.scale = 1.5;
  bg.addImage("bg_1", bg_Img);

  spikes = createSprite(displayWidth+165, displayHeight-180,20,20);
  spikes.scale = 1;
  spikes.addImage("s_", spikes_Img);

  spikes2 = createSprite(displayWidth+1750, displayHeight-148,20,20);
  spikes2.scale = 1;
  spikes2.addImage("s_", spikes_Img);

  spikes2 = createSprite(displayWidth+275,displayHeight-180,30,30)
  spikes2.scale = 1;
  spikes2.addImage("s_", spikes_Img);

  mob_ = createSprite(displayWidth+930, displayHeight-200);
  mob_.scale = 0.5
  mob_.addAnimation("m", mob_Img);
  mob_.velocityX = -2;

  mob_1 = createSprite(displayWidth+3050, displayHeight-200);
  mob_1.scale = 0.5
  mob_1.addAnimation("m", mob_Img);
  mob_1.velocityX = -2;
  
  lava = createSprite(displayWidth+1352, displayHeight-80);
  lava.addImage("l", lava_Img);

  


//storm_so.play();


/*
ob_1 = createSprite(0, 50,0,0);
ob_1.velocityX = +9.5;
//ob_1.visible = false;

ob_2 = createSprite(1365, 500,2,1000)
//ob_2.visible = false;

storm_ = createSprite(displayWidth-670, displayHeight-440, 10,10);
storm_.scale = 2.3
storm_.addAnimation("st_", storm_Img);

if(ob_1.isTouching(ob_2)){
  storm_.destroy();
  }


 */
}

function keyPressed(){

}
