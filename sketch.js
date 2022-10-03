const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var bottom_wall;
var left_wall;
var right_wall;
var top_wall;

var ball;

var button_1, button_2;

var push_button;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  bottom_wall =new Ground(200,390,400,20,"blue");
  top_wall = new Ground(200,10,400,20,"red");
  left_wall = new Ground(10,200,20,400,"orange")
  right_wall = new Ground(390,200,20,400,"pink")


  ball = Bodies.circle(200,20,30)
  World.add(world,ball)

  button_1 = createImg("up.png")
  button_1.size(50,50)
  button_1.position(50,50)
  button_1.mouseClicked(vForce)

  button_2 = createImg("right.png")
  button_2.size(50,50)
  button_2.position(300,50)
  button_2.mouseClicked(hForce)

  push_button = createImg("push.png")
  push_button.size(50,50)
  push_button.position(200,50)
  push_button.mouseClicked(force)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  bottom_wall.show();
  top_wall.show();
  left_wall.show();
  right_wall.show();

  ellipse(ball.position.x,ball.position.y,30)
  Engine.update(engine);
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
} 

function keyPressed(){
  console.log("keypressed ")
  if(keyCode == UP_ARROW){
    console.log("up")
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
  }
}