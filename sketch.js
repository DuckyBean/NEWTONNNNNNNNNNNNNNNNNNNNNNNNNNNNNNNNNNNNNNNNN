
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(200,600,50);
	bobObject2 = new bob(300,600,50);
	bobObject3 = new bob(400,600,50);
	bobObject4 = new bob(500,600,50);
	bobObject5 = new bob(600,600,50);

	roofObject1 = new roof();

	rope1 = new rope(bobObject1,roofObject1);

	Engine.run(engine);
  
}


function draw() {
  ellipseMode(RADIUS);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject1.display();

  rope1.display();

  drawSprites();
 
}



