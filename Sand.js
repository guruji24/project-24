class Sand {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y,5,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("black");
      fill("blue");
      circle(0, 0,5);
      pop();
    }
  };