const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;
var leftWall, rightWall;
var jointPoint;
var jointLink;

var stones = [];

var bkImg;
var wood;
var stoneImg;
var axe;
var zombie;
function preload(){
  bkImg=loadImage("background.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height - 10, width * 2, 20);
  leftWall = new Base(100, height - 300, 200, height / 2 + 100);
  rightWall = new Base(width - 100, height - 300, 200, height / 2 + 100);

  bridge = new Bridge(30, { x: 50, y: height / 2 - 140 });
  jointPoint = new Base(width - 250, height / 2 - 100, 40, 20);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  axe = createImg("axe.png")
  axe.position(width-200,height/2.4)
  axe.size(60,60)
  axe.mouseClicked(handleButtonPress);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 60,60);
    stones.push(stone);
  }
}

function draw() {
  background(bkImg);

  Engine.update(engine);
  
  //ground.show();
  bridge.show();
  //leftWall.show();
  //rightWall.show();

  for (var stone of stones) {
    stone.show();
  }
}

function handleButtonPress(){
  jointLink.detach()
  setTimeout(()=>{
    bridge.break();
  },1500)
}