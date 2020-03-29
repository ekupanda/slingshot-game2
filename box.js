class box {
  constructor(x,y) {
    var options = {
        'restitution':0.3,
        'friction':2.0,
        'density':0.3
    }
    this.body = Bodies.rectangle(x, y, 25, 25, options);
    this.width = 25;
    this.height = 25;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    strokeWeight(4);
    stroke("green"); 
    rect(0, 0, this.width, this.height);
    pop();
  }
};
