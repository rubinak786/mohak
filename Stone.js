class Stone{
    constructor(x,y,radius){
        var options={
            isStatic : false,
            restituiton : 0,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius
        World.add(world,this.body);
        this.image = loadImage("sprites/stone.png");
    }
    display(){
        var pos=this.body.position;		

        push()
        translate(pos.x, pos.y);
        noStroke();
        fill(255,190,255)
        imageMode(CENTER)
        image(this.image,0,0,20,20);
        pop()
    }
}