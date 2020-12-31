const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var ground;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 
  
  engine = Engine.create();
  world = engine.world;
//ground
  ground = new Ground(500,380,300,10)

//first floor
  block1 = new Box(500,350,10,10)
  block2 = new Box(450,350,10,10)
  block3 = new Box(400,350,10,10)
  block4 = new Box(550,350,10,10)
  block5 = new Box(600,350,10,10)
//second floor
  block6 = new Box(475,300,10,10)
  block7 = new Box(525,300,10,10)
  block8 = new Box(425,300,10,10)
  block9 = new Box(575,300,10,10)
//third floor
  block10 = new Box(500,250,10,10)
  block11 = new Box(550,250,10,10)
  block12 = new Box(450,250,10,10)
//fourth floor
  block13 = new Box(525,200,10,10)
  block14 = new Box(475,200,10,10)
//final floor
  block15 = new Box(500,150,10,10)

  cube = new Cube(200,300,25,25,PI/20)

  slingshot = new SlingShot(cube.body,{x:200,y:300})
  
}

function draw() {
  background("skyblue"); 
  Engine.update(engine) 
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  cube.display();

  slingshot.display();


  
}
function mouseDragged(){
  Matter.Body.setPosition(cube.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(cube.body)
  }
}