class Stone{
 constructor(x,y,r){
     this.stone=loadImage("stone.png")
     var options={
         restitution:0.8
     }
 this.x=x;
 this.y=y
 this.r=r
 this.body=Bodies.circle(x,y,r,options)
 World.add(world,this.body)
 }
 show(){
     var pos=this.body.position
     push()
     translate(pos.x,pos.y)
     imageMode(CENTER)
     image(this.stone,0,0,this.r,this.r)
     pop()
     

 }
}