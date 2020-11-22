class Particle{
    constructor(x,y,r){
        
        this.body=Bodies.circle(x,y,r,{isStatic:false})

        World.add(world,this.body)
        this.r=r;

    }
    display(){
        push ();
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)


        fill (random(0,255),random(0,255),random(0,255))
        ellipseMode(CENTER)
        ellipse(0,0,this.r*2,this.r*2)
        pop ();
        
        
        
    }
}