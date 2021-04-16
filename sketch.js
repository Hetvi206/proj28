

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var ground;
var line1,line2,line3;
var ball;
var world;

function preload()
{
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	/*line1=new Dustbin(1100,520,20,100);
	line2=new Dustbin(1300,520,20,100);
    line3=new Dustbin(1200,550,200,20); */
	dustbin=new Dustbin(900,570);

//	ball=new Paper(200,450,40);
	ball = new Paper(200,450);

	ground = new Ground(width/2,670,width,20);

	 launcher = new Launcher(ball.body,{x:400, y:300});

	var render = Render.create({ 
		element: document.body,
		 engine: engine,
		  options: { 
			  width: 1600,
			   height: 700,
			    wireframes: false
			 } 
			});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
/*line1.display();
line2.display();
line3.display();*/
dustbin.display();
ball.display();
ground.display();
launcher.display();

 
}
function mouseDragged(){
    Matter.Body.setPosition( ball.body , { x:mouseX , y:mouseY } );
}

function mouseReleased(){
    launcher.fly();
}
