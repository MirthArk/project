var fixedRect,movingRect;
var gameObject1;
var gameObject2, gameObject3;
var gameObject4, gameObject5
var gameObject6, gameObject7

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(250,375,100,70);
  fixedRect.shapeColor= "red";
  fixedRect.debug = true;

  
  fixedRect = createSprite(400,375,100,70);
  fixedRect.shapeColor= "pink";
  fixedRect.debug = true;

  fixedRect = createSprite(550,375,100,70);
  fixedRect.shapeColor= "green";
  fixedRect.debug = true;

  fixedRect = createSprite(690,375,100,70);
  fixedRect.shapeColor= "lightblue";
  fixedRect.debug = true;

  movingRect= createSprite(600,375,70,30);
  movingRect.shapeColor= "grey";
  movingRect.debug= true;

  gameObject1=createSprite(300,190,47,89);
  gameObject1.shapeColor="red";
  gameObject1.debug= true

  gameObject2=createSprite(100,300,30,30)
  gameObject2.shapeColor="pink"
  gameObject2.debug= true
  gameObject2.velocityX=4

  gameObject3=createSprite(600,300,100,100)
  gameObject3.shapeColor="white"
  gameObject3.debug= true
  gameObject3.velocityX=-4

}

function draw() {
  background("orange");  

  movingRect.x= mouseX;
  movingRect.y= mouseY;

  bounceOff(gameObject2, gameObject3)
  // console.log(movingRect.x-fixedRect.x);
  // console.log(movingRect.width/2+fixedRect.width/2);

  // function call -- calling the function
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  } else {
    movingRect.shapeColor="lightblue";
    fixedRect.shapeColor="lightblue";
  }
  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor="blue";
    gameObject1.shapeColor="blue";
  }else{
    movingRect.shapeColor="green";
    gameObject1.shapeColor="green";
  }
  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor="blue";
    gameObject3.shapeColor="blue";
  }else{
    movingRect.shapeColor="green";
    gameObject3.shapeColor="green";
  }
 



  drawSprites();
}

