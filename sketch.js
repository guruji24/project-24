
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,ground,stone1,rubber1;
var sand1,sand2,sand3,sand4,sand5,sand6;
var iron1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer1 = new Hammer(400,300,100,30);
	ground = new Ground(400,690);
	stone1 = new Stone(500,300,30,30,PI/2);
	rubber1 = new Rubber(400,300);
	sand1 = new Sand(100,300);
	sand2 = new Sand(300,300);
	sand3 = new Sand(500,300);
	sand4 = new Sand(700,300);
	sand5 = new Sand(200,300);
	sand6 = new Sand(400,300);
	iron1 = new Iron(200,300);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
  hammer1.display();
  ground.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron1.display();
}



