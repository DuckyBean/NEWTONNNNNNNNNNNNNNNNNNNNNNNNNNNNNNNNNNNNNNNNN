class rope{


    constructor(bodyA, bodyB){
        

        var options = {
            bodyA: bodyA.body,
            bodyB: bodyB.body,
            length: 10,
            stiffness: 0.04
        }
        this.ropething = Matter.Constraint.create(options);
        
        // this.bodyA = bodyA;
        // this.bodyB = bodyB;
    }   
    
    
    display(){

        var pointA = this.ropething.bodyA.position;

        var pointB = this.ropething.bodyB.position;
        fill("grey");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}