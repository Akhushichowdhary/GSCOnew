var car;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(30,200,20,30);
 speed = random(60,90);
 weight = random(400,1200);



 stand = createSprite(1300,200,50,50);
 

  
 
}

function draw() {
  background("black");  
  drawSprites();

car.velocityX = speed;





if(stand.x - car.x < (car.width + stand.width)/2){
  car.velocityX = 0;
  
  var deformation  = 0.5 * weight * speed * speed/22509;
    
  if(deformation >180)
  {
     car.shapeColor = "green";
     
  }
 
  if(deformation < 180 && deformation > 100)
  {
    car.shapeColor = "yellow";
    
  }

  if(deformation < 100)
  {
    car.shapeColor = "red";
    
}

}



}