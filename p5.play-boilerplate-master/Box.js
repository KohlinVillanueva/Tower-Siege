class Box{
    constructor(x,y){
        this.x = x;
        this.y = y;
        var options = {
            restitution:0.8,
            friction: 0.9,
            density: 1.0,
        }
        this.body = Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle*50
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,50,50)
        pop()
    }
}