const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var maxDrops=100;
var drops = []
function preload(){
    
}

function setup(){
createCanvas(500,625)

engine = Engine.create();
world =engine.world;

if(frameCount%100 ===0){
for(var i=0;i<maxDrops;i++){
    drops.push(new Drops(random(0,500),random(0,625)))
}
}
}

function draw(){
    Engine.update(engine)

    background('black');

    //to display the rain drops
    for(var i=0;i<maxDrops;i++){
drops[i].display();
drops[i].updateY();
    }
}   

