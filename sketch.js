
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

	bobDiameter = 40;

	bobObject1 = new Bob(400 - bobDiameter * 2, height / 4 + 500, bobDiameter);
	bobObject2 = new Bob(400 - bobDiameter, height / 4 + 500, bobDiameter);
	bobObject3 = new Bob(400, height / 4 + 500, bobDiameter);
	bobObject4 = new Bob(400 + bobDiameter, height / 4 + 500, bobDiameter);
	bobObject5 = new Bob(400 + bobDiameter * 2, height / 4 + 500, bobDiameter);

	roof = new Roof(width / 2, height / 4, 1200, 20);


	rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter * 2, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter * 1, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, bobDiameter * 1, 0);
	rope5 = new Rope(bobObject5.body, roof.body, bobDiameter * 2, 0);



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

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, { x: 80, y: -80 });

	}
}



