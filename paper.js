class Paper{
    constructor(x,y,r){
        var option={
         isStatic:false,
         restitution:0.4,
         friction:0.5,
         density:1.2,
        }
        this.x = x;
        this.y=y;
        this.r=r;
       this.image=loadImage("paper.png") 
        this.body=Bodies.circle(this.x,this.y,this.r/2,option);
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate (pos.x,pos.y);
        imageMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        image(this.image,0,0,this.r, this.r);
        pop()
    }
}