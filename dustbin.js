class Dustbin{
    constructor(x,y){
        var options = {
            isStatic: true
        } 
        this.x=x
        this.y=y
        this.width=200
        this.height=213
        this.thickness=20
        this.angle=0

        this.image=loadImage("dustbin.green.png")
        this.bottom=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);

        this.left=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options);
        Matter.Body.setAngle(this.left,this.angle)

        this.right=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options);
        Matter.Body.setAngle(this.right,-1*this.angle)

        World.add(world,this.bottom)
        World.add(world,this.left)
        World.add(world,this.right)

    }
    
    display(){
    var posb=this.bottom.position;
     var posl=this.left.position;
     var posr=this.right.position;
     
     //left
     push();
     translate (posl.x,posl.y);
     rectMode(CENTER);
     angleMode(RADIANS);
     fill(255);
     rotate (this.angle);
     //rect(0,0,this.thickness,this.height);
     pop ();


     //right
     push();
     translate (posr.x,posr.y);
     rectMode(CENTER);
     angleMode(RADIANS);
     fill(255);
     rotate(-1*this.angle);
     //rect(0,0,this.thickness,this.height);
     pop();

     //bottom
     push();
     translate (posb.x,posb.y);
     rectMode(CENTER);
     angleMode(RADIANS);
     fill(255);
    
     image(this.image,0,this.width,this.thicknesst);
     pop();
    }

}