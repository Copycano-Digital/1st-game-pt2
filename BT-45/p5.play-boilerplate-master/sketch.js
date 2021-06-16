var Crims;
var Dandi;
var Grass1;
var Grass2;
var Grass3;
var GrassGreen;
//var Gamestate;

var Landscape;

function setup() {
  createCanvas(800,450);

  GrassGreen = rgb(0, 200, 0);

  Crims = createSprite(300, 325, 50, 50);
  Crims.shapeColor = rgb(233,0,0);

  Dandi = createSprite(150, 125, 50, 50);
  Dandi.shapeColor = rgb(255,233,0);

  Grass1 = createSprite(300, 375, 150, 50);
  Grass1.shapeColor = GrassGreen;

  Grass2 = createSprite(575, 275, 200, 50);
  Grass2.shapeColor = GrassGreen;

  Grass3 = createSprite(200, 175, 250, 50);
  Grass3.shapeColor = GrassGreen;

  Landscape = [Grass1, Grass2, Grass3];
  //Gamestate = PLAY;

}

function draw() {
  background(150,170,255);  
  
  edges = createEdgeSprites();
  Crims.collide(edges[0]);
  Crims.collide(edges[1]);

  if((keyWentUp(LEFT_ARROW)) || (keyWentUp(RIGHT_ARROW))){
    Crims.velocityX = 0;
  }

  if((keyWentUp(UP_ARROW))){
    Crims.velocityY = 0;
  }

  if(keyWentDown(LEFT_ARROW)){
    Crims.velocityX = -7;
  }

  if(keyWentDown(RIGHT_ARROW)){
    Crims.velocityX = 7;
  }

  if((keyWentDown("space")) && ((Crims.collide(Grass1)) || (Crims.collide(Grass2)) || (Crims.collide(Grass3)))){
    Crims.velocityY = -15;
  }

  if(Crims.collide(Dandi)){
    Crims.velocityX = 0;
    Crims.velocityY = 0;

  }


  //Crims.collide(Grass1);
  //Crims.collide(Grass2);
  //Crims.collide(Grass3);

  for(var i = 0; i <= 2; i++ ){
    Crims.collide(Landscape[i])
  }

  Crims.velocityY = Crims.velocityY + 0.8
text(mouseX+ " , " + mouseY, mouseX, mouseY);
  drawSprites();
}