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

var invisible_gr;

//Mobs:-
var jin_a, jin_a_Img;
var bomb_,bomb_1,bomb_2, bomb_Img;
var question_b, question_b_Img;
var jin_1;


function preload() {

//Story Sounds:-
storm_so = loadSound("/Sound/storm_s.mp3");

//Buttons:-
start_btn_Img = loadImage("/Buttons/e.png");


bg_home_Img = loadAnimation("/Home/_0.png","/Home/_1.png","/Home/_2.png","/Home/_3.png","/Home/_4.png","/Home/_5.png","/Home/_6.png","/Home/_7.png","/Home/_8.png","/Home/_9.png","/Home/_10.png","/Home/_11.png","/Home/_12.png");

storm_Img = loadAnimation("/Story/0.png ", "/Story/1.png","/Story/2.png", "/Story/3.png", "/Story/4.png", "/Story/5.png", "/Story/6.png", "/Story/7.png", "/Story/8.png", "/Story/9.png", "/Story/10.png", "/Story/11.png", "/Story/12.png", "/Story/13.png", "/Story/14.png", "/Story/15.png", "/Story/16.png", "/Story/17.png", "/Story/18.png", "/Story/19.png", "/Story/20.png", "/Story/21.png", "/Story/22.png", "/Story/23.png", "/Story/24.png", "/Story/25.png", "/Story/26.png", "/Story/27.png", "/Story/28.png", "/Story/29.png", "/Story/30.png", "/Story/31.png", "/Story/32.png", "/Story/33.png", "/Story/34.png", "/Story/35.png");
island_Img = loadAnimation("/Story/36.png", "/Story/37.png", "/Story/38.png", "/Story/39.png", "/Story/40.png", "/Story/41.png", "/Story/42.png", "/Story/43.png", "/Story/44.png", "/Story/45.png", "/Story/46.png", "/Story/47.png", "/Story/48.png", "/Story/49.png")

bricks_1_Img = loadImage("/level/Bricks.png");
jin_a_Img = loadAnimation("/Hero a/a_0.png","/Hero a/a_1.png","/Hero a/a_2.png","/Hero a/a_3.png","/Hero a/a_4.png","/Hero a/a_5.png","/Hero a/a_6.png","/Hero a/a_7.png","/Hero a/a_8.png","/Hero a/a_9.png",)

//l = loadAnimation("/Hero/Hero a_l/a_0.png","/Hero/Hero a_l/a_1.png","/Hero/Hero a_l/a_2.png","/Hero/Hero a_l/a_3.png","/Hero/Hero a_l/a_4.png","/Hero/Hero a_l/a_5.png","/Hero/Hero a_l/a_6.png","/Hero/Hero a_l/a_7.png","/Hero/Hero a_l/a_8.png","/Hero/Hero a_l/a_9.png")
bomb_Img = loadAnimation("/Bomb/1.png","/Bomb/2.png","/Bomb/3.png","/Bomb/4.png","/Bomb/5.png","/Bomb/6.png","/Bomb/7.png","/Bomb/8.png","/Bomb/9.png","/Bomb/10.png","/Bomb/11.png","/Bomb/12.png",)
question_b_Img = loadAnimation("/question box/0.png","/question box/1.png","/question box/2.png","/question box/3.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  start_btn = createSprite(displayWidth-30, displayHeight-743,0,0);
  start_btn.addImage("btn1", start_btn_Img);
  start_btn.scale = 0.4;

  bg_home = createSprite(displayWidth-690, displayHeight-430, 0, 0);
  bg_home.addAnimation("home",bg_home_Img);
  bg_home.scale = 2.75;

  bg_home.depth = start_btn.depth;
  start_btn.depth = start_btn.depth+1;

  jin_a = createSprite(displayWidth-1230,displayHeight-500,50,100);
  jin_a.scale = 0.7
  jin_a.addAnimation("h_a", jin_a_Img);
  jin_a.visible = false;

  invisible_gr = createSprite(displayHeight-100,displayHeight-135,2000,50);
  invisible_gr.visible = false;

}

function draw() {
  background(0);  
 
camera.position.x = displayWidth/2;
    if(mousePressedOver(start_btn)){
    
    startButton();
  }

  if(keyWentDown(UP_ARROW)&&jin_a.y>=450){
    jin_a.velocityY = -16;
    }

  if(keyWentDown(RIGHT_ARROW)){
  jin_a.velocityX = 10;
  }

  if(keyDown(LEFT_ARROW)){
  //jin_a.velocityX = -10;
  jin_a.changeAnimation(bomb_Img )
  }
 
  if(keyWentDown(DOWN_ARROW)){
  jin_a.velocityX = 0;
  }

    
  jin_a.velocityY = jin_a.velocityY + 0.8;

  

  jin_a.collide(invisible_gr)

  drawSprites();

  if(gameState === 0){
    strokeWeight(3)
    stroke("white")
    fill("black");
    textSize(50);
    
    text("The Lost Fortress", 500,40)
    }

  if(gameState === 1) {
    textFont("Georgia");
    fill("white")
    textSize(30)
    text("Hit the mistery box", displayWidth-1350,displayHeight-730)
  } 
}

function startButton(){

  gameState = 1;

  bg_home.destroy();
  start_btn.destroy();

  jin_a.visible = true;

  bomb_ = createSprite(displayWidth-600, displayHeight-200,0,0);
  bomb_.scale = 0.4
  bomb_.addAnimation("b_", bomb_Img);
  bomb_.velocityX = -1;

  bomb_1 = createSprite(displayWidth-500, displayHeight-200,0,0);
  bomb_1.scale = 0.4
  bomb_1.addAnimation("b_", bomb_Img);
  bomb_1.velocityX = -1;

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

 

  


storm_so.play();


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