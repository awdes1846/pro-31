class Drops{
    constructor(x,y){
    var options ={friction : 0.01}
    
    this.droplets=Bodies.circle(x,y,2.5,options)
    this.radius = 5
    World.add(world,this.droplets)

    }

   updateY(){
     //when the droplet crosses 625  
     if(this.droplets.position.y>625){
         Matter.Body.setPosition(this.droplets,{x:random(0,500),y:0})
     }
   }

  display(){
      //color , shape
    fill('blue')
    ellipseMode(CENTER)

    ellipse(this.droplets.position.x,this.droplets.position.y,this.radius,this.radius)

  }

}