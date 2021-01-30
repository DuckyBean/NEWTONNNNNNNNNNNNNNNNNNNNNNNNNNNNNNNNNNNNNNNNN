class bob {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.bob = Bodies.circle(x,y,r,options)
        World.add(world,this.bob);
    }

    display(){
        var angle = this.bob.angle;
        push();
        rotate(angle);
        translate(this.bob.position.x,this.bob.position.y);
        fill("turquoise");
        ellipseMode(RADIUS);
        ellipse(0,0,50/2);
        pop();
    }
}