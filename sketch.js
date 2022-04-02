var forest,forestImage;
var lion,lionImage;
var hunter,hunterImage;
var startback,startbackImage
var starticon,starticonImage;
var START=3
var PLAY=2
var PLAYING=1
var END=0
var gameState=START
var bubble,bubbleImage

function preload(){
  forestImage=loadImage("forestlong.jpg");
  lionImage=loadImage("lion.gif");
  hunterImage=loadImage("hunter.png")
  bubbleImage=loadImage("bubble.png")
  startbackImage=loadImage("startback.jpg")
  starticonImage=loadImage("startbutton.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  back=createSprite(700,200);
  back.addImage(forestImage);
  back.scale=1

  starticon=createSprite(1000,200)
  starticon.addImage(starticonImage)
  starticon.scale=0.5

  startback=createSprite(500,200)
  startback.addImage(startbackImage)
  startback.scale=1

 
  
}
function draw() {
  background(255,255,255);

if(gameState===START){
  textSize(30)
  fill("white")
  text("PRESS SPACE TO START",800,100)
}
  if(keyDown(32)){
    gameState=PLAY
    console.log(2)
  }

  if(gameState===PLAY){
    starticon.destroy()
    startback.destroy()

    textSize(30)
  fill("white")
  text("Ha,ha,ha!!I am going to kill you.",250,80)

  textSize(30)
  fill("white")
  text("Oh no!I have to run.",450,80)

    lion=createSprite(400,285,20);
  lion.addImage(lionImage);
  lion.scale=0.4

  hunter=createSprite(150,265,20);
  hunter.addImage(hunterImage)
  hunter.scale=0.18

  bubble=createSprite(250,80)
  bubble.addImage(bubbleImage)
  bubble.scale=0.3
  }
  if(gameState===PLAYING){
    back.velocityX=-1;
    if(back.x<650){
      back.x=back.width/2
    }
  }

  drawSprites();
  textSize(30)
  fill("white")
  text("PRESS SPACE TO START",900,50)

}
