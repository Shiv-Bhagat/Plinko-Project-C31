class Plinko{
    constructor(x,y,r){
        
        this.body=Bodies.circle(x,y,r,{isStatic:true})
        World.add(world,this.body)
        this.r=r;

    }
    display(){
        push ();
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)

        fill ("white")
        ellipseMode(CENTER)
        ellipse(0,0,this.r*2,this.r*2)
        pop ();
        
        
        
    }
}