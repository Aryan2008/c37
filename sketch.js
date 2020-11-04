const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  //createSprite(400, 200, 50, 50);
  ball=Bodies.circle(200,200,20);
  World.add(world,ball);
  ground=new Ground(400,390,800,20);
  rect1=new Ground(300,330,20,200);
  rect2=new Ground(700,330,20,200);
  rect3=new Ground(380,330,80,200);
  rect4=new Ground(480,330,110,250);
  rect5=new Ground(580,330,80,250);
}

function draw() {
  background("red");  
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20)  
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  line(425,209,501,116);
  line(618,205,501,116)
  console.log(mouseX,mouseY);
  drawSprites();
}