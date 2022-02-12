class Boat{
    constructor(x, y, w, h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        var propiedades={
            isStatic:true
        }
        this.boatimg=loadImage("assets/boat.png");
        this.body=Bodies.rectangle(x, y, w, h, propiedades);
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.boatimg, 0, this.body.position.y, this.w, this.h);
        pop();
    }
}