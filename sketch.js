var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(isTouching(movingRect,fixedRect)){
  movingRect.visible=false;
  fixedRect.visible=false;
}else{
  movingRect.visible=true;
  fixedRect.visible=true;
}



  drawSprites();
}
