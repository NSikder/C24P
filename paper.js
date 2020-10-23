class Paper {
    constructor(){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.body = Bodies.circle(75, 100, 50, options);
        this.radius = 50;
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        stroke("Yellow");
        fill(255,0,0);
        ellipse(pos.x,pos.y, this.radius, this.radius);
        pop();
    }
};