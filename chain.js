class Chain {
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA, 
            bodyB: bodyB
        }
        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        strokeWeight (3) ;
    line (this.rope.bodyA.position.x, this.rope.bodyA.position.y,this.rope.bodyB.position.x, this.rope.bodyB.position.y)    
    }
}