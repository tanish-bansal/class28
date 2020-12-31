
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,stone,tree,launch,distance
function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create(); 
	world = engine.world;
	Engine.run(engine);
  //Create the Bodies Here.
  mango1=new mango(1100,100,30,30);
  mango2=new mango(1170,130,30,30);
	mango3=new mango(1010,140,30,30);
	mango4=new mango(1000,70,30,30);
	mango5=new mango(1100,70,30,30);
	mango6=new mango(1000,230,30,30);
	mango7=new mango(900,230,40,30);
	mango8=new mango(1140,150,40,30);
	mango9=new mango(1100,230,40,30);
	mango10=new mango(1200,200,40,30);
	mango11=new mango(1120,50,40,40);
	mango12=new mango(900,160,40,40);
boy=new Boy (200,340,200,300);

  stone=new Stone (125,256,40,40);
  launch=new Launcher(stone.body,{x:125,y:260})
	tree=new Tree(1050,340,450,600)
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  drawSprites();
  text(mouseX+":"+mouseY,mouseX,mouseY);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
 
  boy.display();
  stone.display();
  launch.display();

  detectollision(stone,mango1);
  detectollision(stone,mango6);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
  

 }
function mouseDragged()
{
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
  launch.fly();
   
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:125, y:243}) 
	  launch.attach(stone.body);
	}
  }
  function detectollision(stone,mango){
    /*var collision = Matter.SAT.collides(stone,mango1);
    if(collision.collided){
      console.log("collided");
      Matter.Body.setStatic(mango1,false);	
    }*/

     mangoBodyPosition=mango.body.position
     stoneBodyPosition=stone.body.position
    
     distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mango.x, mango.y)
    
    //console.log(distance)
   // console.log(lmango.r+lstone.r)
      if(distance<=mango.r+stone.r)
      {
        Matter.Body.setStatic(mango.body,false);
        //console.log(distance);
              }
  
  }
    