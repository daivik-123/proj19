//creating variables for elements in the game
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

//crating score
var score =0;

function preload(){

//loading background image
backgroundImage = loadImage("background0.png");

//loading arrow and bow images
arrowImage = loadImage("arrow0.png");
bowImage = loadImage("bow0.png");
  
//loading balloon images
red_balloonImage = loadImage("red_balloon0.png");
green_balloonImage = loadImage("green_balloon0.png");
pink_balloonImage = loadImage("pink_balloon0.png");
blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
createCanvas(400, 400);
  
//creating background
scene = createSprite(0,0,400,400);
scene.addImage(backgroundImage);
scene.scale = 2.5
  
// creating bow to shoot arrow
bow = createSprite(380,220,20,50);
bow.addImage(bowImage); 
bow.scale = 1;
  
//creating score
score = 0;

//creating different balloon group and arrow group
redB= new Group();
greenB= new Group();
blueB= new Group();
pinkB= new Group();
arrowGroup= new Group();
   
}

function draw() {
background(0);
// moving ground
scene.velocityX = -3 
  
//creating infinite background
if (scene.x < 0){
scene.x = scene.width/2;
}

//moving bow
bow.y = World.mouseY
  
// release arrow when space key is pressed
if (keyDown("space")) {
createArrow();
}
  
//creating continous balloon
var select_balloon = Math.round(random(1,4));
  
if (World.frameCount % 100 == 0) {
if (select_balloon == 10) {
redBalloon();
} else if (select_balloon == 20) {
greenBalloon();
} else if (select_balloon == 30) {
blueBalloon();
} else {
pinkBalloon();
}
}
  
//destruction of arrow and balloons and addition of score
if (arrowGroup.isTouching(redB)) {
redB.destroyEach();
arrowGroup.destroyEach();
score=score+500;
}

 if (arrowGroup.isTouching(greenB)) {
greenB.destroyEach();
arrowGroup.destroyEach();
score=score+2000;
}

if (arrowGroup.isTouching(blueB)) {
blueB.destroyEach();
arrowGroup.destroyEach();
score=score+1500;
}

if (arrowGroup.isTouching(pinkB)) {
pinkB.destroyEach();
arrowGroup.destroyEach();
score=score+1000;
}

//creation of sprite
drawSprites();

//giving text and score
text("Score: "+ score, 300,50);
}

//red balloons functions
function redBalloon() {
var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
red.addImage(red_balloonImage);
red.velocityX = 3;
red.lifetime = 150;
red.scale = 0.1;
redB.add(red);
}

//blue balloons functions
function blueBalloon() {
var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
blue.addImage(blue_balloonImage);
blue.velocityX = 5;
blue.lifetime = 150;
blue.scale = 0.1;
blueB.add(blue);
}

//green balloons functions
function greenBalloon() {
var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
green.addImage(green_balloonImage);
green.velocityX = 6;
green.lifetime = 150;
green.scale = 0.1;
greenB.add(green);
}

//pink balloons functions
function pinkBalloon() {
var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
pink.addImage(pink_balloonImage);
pink.velocityX = 4;
pink.lifetime = 150;
pink.scale = 1
pinkB.add(pink);
}


//arrows functions and creation
 function createArrow() {
var arrow= createSprite(100, 100, 60, 10);
arrow.addImage(arrowImage);
arrow.x = 360;
arrow.y=bow.y;
arrow.velocityX = -4;
arrow.lifetime = 100;
arrow.scale = 0.3;
arrowGroup.add(arrow);   
}