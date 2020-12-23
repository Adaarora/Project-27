
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobDiameter = 50;

	bobObject1 = new Bob(200, 600, bobDiameter);
	bobObject2 = new Bob(300, 600, bobDiameter);
	bobObject3 = new Bob(400, 600, bobDiameter);
	bobObject4 = new Bob(500, 600, bobDiameter);
	bobObject5 = new Bob(600, 600, bobDiameter);

	roof = new Roof(200, 100, 1200, 20);

	rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter, 10);
	rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter, 10);
	rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter, 10);
	rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter, 10);
	rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter, 10);



	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("grey");

	drawSprites();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}





