class Chein{
constructor(bodyA,bodyB){
    var option={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10,


    }
   this.chein=Constraint.create(option);
   World.add(world,this.chein); 
}
display(){
    strokeWeight(4);
    line(this.chein.bodyA.position.x,this.chein.bodyA.position.y,this.chein.bodyB.position.x,this.chein.bodyB.position.y);
}

}