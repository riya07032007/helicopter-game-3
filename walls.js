class Wall{
   constructor(x,y,width,height) {
   var wall_options={
      isStatic:true

   }

   this.wall= Bodies.rectangle(x,y,width,height,wall_options)
   this.width=width
   this.height=height
   World.add(world,this.wall)
}


display(){
   fill("red")
rectMode(CENTER);
rect(this.wall.position.x,this.wall.position.y,this.width,this.height)
   }
}