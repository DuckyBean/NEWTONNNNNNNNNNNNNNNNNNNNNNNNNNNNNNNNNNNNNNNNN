class roof {
    constructor(){
        var options = {
            isStatic: true
        }

        this.roofBody = Bodies.rectangle(100,100,600,60,options);
        World.add(world,this.roofBody);
    }

    display(){
        fill("grey")
        rect(this.roofBody.position.x,this.roofBody.position.y,600,60)
    }
}