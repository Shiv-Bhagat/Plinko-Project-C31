
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var divisions=[];
var plinkos=[];
var particle=[];
var divisionHeight=300;
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(240,795,width,10)
	/*
	division = new Division(5,793,10,300)
	division1 = new Division(85,793,10,300)
	division2 = new Division(165,793,10,300)
	division3 = new Division(245,793,10,300)
	division4 = new Division(325,793,10,300)
	division5 = new Division(405,793,10,300)
	division6 = new Division(475,793,10,300)
	*/
	for (var k = 0; k <=width; k = k + 80) 
	{ divisions.push(new Division(k, 700, 10, 300)); }
	for (var j = 75; j <=width; j=j+50) 
	{ plinkos.push(new Plinko(j,75,10)); }
	for (var j = 50; j <=width; j=j+50) 
	{ plinkos.push(new Plinko(j,175,10)); }
	for (var j = 25; j <=width; j=j+50) 
	{ plinkos.push(new Plinko(j,275,10)); }
	for (var j = 0; j <=width; j=j+50) 
	{ plinkos.push(new Plinko(j,375,10)); }


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(43, 237, 4);
  ground.display();
  /*
  division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  */
 for(i=0;i<divisions.length;i++){
	 divisions[i].display();
 }
for(i=0;i<plinkos.length;i++){
	plinkos[i].display();
}
if(frameCount%60==0){
particle.push(new Particle(random(100,480),10,7))
}
for(i=0;i<particle.length;i++){
	particle[i].display();
}
  //plinko.display();

  drawSprites();
 
}



