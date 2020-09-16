
var fixedRect, movingRect;

function setup() {

  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = 'green';
  fixedRect.debug = true;

  movingRect = createSprite(700,260,60,50);
  movingRect.shapeColor = 'blue';
  movingRect.debug = true;
  
}

function draw() {

  background(33,34,35);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

   console.log(fixedRect.x - movingRect.x)
   console.log(movingRect.x - fixedRect.x)
   console.log(fixedRect.width/2 + movingRect.width/2)
  // console.log(fixedRect.y - movingRect.y)
  // console.log(movingRect.y - fixedRect.y)
  // console.log(fixedRect.height/2 + movingRect.height/2)

  if ( fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2
    && movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2) {

      fixedRect.shapeColor = 'red';
      movingRect.shapeColor = 'red';

  } else {
      fixedRect.shapeColor = 'green';
      movingRect.shapeColor = 'green';
  }

  drawSprites();
}