var fixedRect, movingRect;
var g1 , g2 , g3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  g1 = createSprite(100,100,50,50);
  g1.shapeColor = "blue";
  g2 = createSprite(50,100,50,100);
  g2.shapeColor = "red";
  g3 = createSprite(300,200,200,300);
  g3.shapeColor = "orange";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,g2))
 {
   g2.shapeColor = "yellow";
     movingRect.shapeColor = "yellow";
     g1.shapeColor = "pink"
     g3.shapeColor = "pink"
     fixedRect.shapeColor = "pink"
 }
 else{
  g2.shapeColor = "red";
  movingRect.shapeColor = "red";
 }
  drawSprites();
}

function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
  {
    return true;
  }
  else 
  {
    return false;
  }

}