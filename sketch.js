var ship, gameState, enemyship, score, laser, enemyShipGroup, lives;
var ship_img, enemyship_img, laser_img, background_img;
function preload() {
  ship_img = loadImage("sprites/ship.png");
  enemyship_img = loadImage("sprites/enemyship.png");
  laser_img = loadImage("sprites/laser.png");
  background_img = loadImage("sprites/background.jpg");
}

function setup() {
  createCanvas(800,800);
  gameState = "play";
  ship = createSprite(400,400,50,50);
  ship.addImage("ship",ship_img);
  ship.scale = 1.25;
  enemyShipGroup = createGroup();
  score = 0;
  lives = 3;
  console.log(lives);
  //background_img
}

function draw() {
  background(background_img);
  if (keyDown(LEFT_ARROW)) {
    ship.x -= 5;
  } 
  if(keyDown(RIGHT_ARROW)) {
    ship.x += 5;
  }
  if (keyWentDown(UP_ARROW)) {
    laser = createSprite(ship.x,ship.y - 50,10,50);
    laser.addImage("laser", laser_img);
    laser.velocityY = -5;
    laser.scale = 0.5;
    laser.lifetime = 100;
    
  }
  enemyCreate();
  /*if (frameCount%60 === 0 && gameState === "play") {
    enemyship = createSprite(random(50,750),0,20,20)
    enemyship.addImage("enemy",enemyship_img);
    enemyship.velocityY = 8;
    enemyship.lifetime = 100;
    //enemyShipGroup.add(enemyship);
  }*/
  /*if(isTouching(enemyship,laser)) {
    enemyship.destroy();
    console.log("working");
    score=+200;
  }*/


  if(lives === 0){
    background(0);
    textSize(20);
    text("Game Over",width/2, height/2);
    text("score: " + score, width/2, (height/2) + 20);
    gameState = "end";
  }
  //console.log(enemyShipGroup);

  //console.log(ship);
  if (gameState === "play" && enemyShipGroup.isTouching(ship)) {
    lives -= 1;
    console.log(lives);
  }
  if(lives > 0){
    drawSprites();
  }
  
}

/* function isTouching(object1,object2){ 
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2 
    && object2.y - object2.y < object2.height/2 + object1.height/2)
     { return true; } else { 
       return false; } 
      } */

function enemyCreate(){
  if (frameCount%60 === 0 && gameState === "play") {
    enemyship = createSprite(random(50,750),0,20,20)
    enemyship.addImage("enemy",enemyship_img);
    enemyship.velocityY = 8;
    enemyship.lifetime = 100;
    enemyShipGroup.add(enemyship);
  }
}