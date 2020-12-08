
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var START=1;
this.gamestate=1;
var END = 0 ; 

// function preload()
// {
	
// }

function setup() {
  rectMode(CENTER);
  createCanvas(1350, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    if(gamestate === START){
    this.paper = new Paper(50,200,30); 
    this.ground = new Ground(675,450,1350,20);
    this.db1 = new dustBin(1100,420,165,20);
    this.db2 = new dustBin(1015,340,20,170);
    this.db3 = new dustBin(1175,340,20,170);
    this.dbpic = new dustBin2(200,200);
    }
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  this.ground.display();
  this.paper.display();  
  this.db1.display();
  this.db2.display();
  this.db3.display();
  this.dbpic.display();
 //console.log(this.paper.body.position.y);
  reset();
  drawSprites(); 
}

function keyPressed (){
  if(this.paper.body.position.y > 400){
    if( keyCode === UP_ARROW ){
     Matter.Body.applyForce(this.paper.body,this.paper.body.position,{x:220,y:-200})
    }
  }  
  gamestate=END;
  }

function reset (){
 if( gamestate=== END && keyDown("space") ){
 this.paper.body.position.x=50;
 this.paper.body.position.y=200;
 this.paper.body.radius=30;
 }
}



