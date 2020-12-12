const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(220,100,80,30);
  box2 = new Box(200,200,30,80);
  ground1 = new Ground(200,350,400,10)
}

function draw() {
  background(0);  
  Engine.update(engine);
  
 

  box1.display();
  box2.display();
  ground1.display();
}