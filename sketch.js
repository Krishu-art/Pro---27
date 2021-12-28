const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, roof;
var constraintedRoof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	constraintedRoof = new Roof(300,400,400,20);

	roof = new Roof(400,height,800,20);

	bobObject1 = new Bob(400,600,40);
	bobObject2 = new Bob(350,600,40);
	bobObject3 = new Bob(370,600,40);
	bobObject4 = new Bob(450,550,40);
	bobObject5 = new Bob(200,550,40);

    var options = {
        bodyA: bobObject1.body,
        bodyB: constraintedRoof.body,
        stiffness: 0.04,
        lenght: 10
    }
  var chain1 = Constraint.create(options);
  World.add(world, chain1);

  var options = {
	bodyA: bobObject2.body,
	bodyB: constraintedRoof.body,
	stiffness: 0.04,
	lenght: 5
}
 var chain2 = Constraint.create(options);
 World.add(world, chain2);

 var options = {
	bodyA: bobObject3.body,
	bodyB: constraintedRoof.body,
	stiffness: 0.04,
	lenght: 5
}
var chain3 = Constraint.create(options);
World.add(world, chain3);

var options = {
	bodyA: bobObject4.body,
	bodyB: constraintedRoof.body,
	stiffness: 0.04,
	lenght: 10
}
var chain4 = Constraint.create(options);
World.add(world, chain4);

var options = {
	bodyA: bobObject5.body,
	bodyB: constraintedRoof.body,
	stiffness: 0.04,
	lenght: 10
}
var chain5 = Constraint.create(options);
World.add(world, chain5);


	Engine.run(engine);

}
 

function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  roof.display();
  constraintedRoof.display();
  
   drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-300,y:-100});
	}
  }


