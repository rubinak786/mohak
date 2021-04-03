
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var boy,tree,mango1,
mango2,mango3,boyImage,ground,stone,string,treeImage

function preload(){
	boyImage = loadImage("sprites/boy.png");
	treeImage = loadImage("sprites/tree.png")
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400,690);
	stone = new Stone(70,575,20)
	string = new String(stone.body,{x:50,y:575});
	mango1 = new Mango(650,430,20);
	mango2 = new Mango(700,410,20);
	mango3 = new Mango(540,470,20);

	Engine.run(engine);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	  Render.run(render);
  
}


function draw() {
	background(225);
	imageMode(CENTER);
  image(boyImage,100,635,150,200);
  image(treeImage,630,500,250,400);
 
	rectMode(CENTER);
	ground.display();
	stone.display();
	string.display();
	mango1.display();	
	mango2.display();
	mango3.display();
	
detectcollision(stone,mango1);
detectcollision(stone,mango2);
detectcollision(stone,mango3);


	
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	string.fly();
}
function detectcollision(lstone,lmango){
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.radius + lstone.radius){
        Matter.Body.setStatic(lmango.body,false);
    }
}


