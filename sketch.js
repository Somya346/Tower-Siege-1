const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

var engine,world;
var stand2,stand3,stand1,polygon;
var ground,polygon_img,slingshot;
var block1, block2, block3, block4, block5, block6, block7,block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18;

function preload(){
    polygon_img=loadImage("polygon.png");

}
 function setup(){
     createCanvas(1200,400);
     engine = Engine.create();
     world=engine.world;
     
     block1= new block(330,235,30,40);
     block2= new block(360,235,30,40);
     block3= new block(390,235,30,40);
     block4= new block(420,235,30,40);
     block5= new block(450,235,30,40);
     block6= new block(360,195,30,40);
     block7= new block(390,195,30,40);
     block8= new block(420,195,30,40);
     block9= new block(390,155,30,40);
     block10= new block(930,235,30,40);
     block11 =new block(960,235,30,40);
     block12= new block(990,235,30,40);
     block13= new block(1020,235,30,40);
     block14= new block(1050,235,30,40);
     block15= new block(960,195,30,40);
     block16= new block(990,195,30,40);
     block17= new block(1020,195,30,40);
     block18= new block(990,155,30,40);


      this.polygon = Bodies.circle(50,200,20);
      World.add(world,this.polygon);

      slingshot = new Slinglaunch(this.polygon,{x:100,y:200});

      stand1 = new Ground(1000,380,100000,20);
      stand2 = new Ground(1000,250,200,15);
      stand3 =new Ground(400,350,200,15);
 }

 function draw(){
     background("yeloow");
     Engine.update(engine);
     
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();
      block13.display();
     block14.display();
     block15.display();
     block16.display();
     block17.display();
     block18.display();
     
     slingshot.display();
     stand1.display();
     stand2.display();
     stand3.display();

     imageMode(CENTER)
     image(polygon_img,polygon.position.x,polygon.position.y,40,40);



 }

 function keyPressed(){
     if(keyCode === 32){
     slingshot.attach(this.polygon);
     }
 }

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX , y:mouseY})
}
 function mouseReleased(){
     slingshot.fly();
 }

