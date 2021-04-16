class Dustbin{
    constructor(x, y, width, height) {
      var options = {
        'isStatic':true
         /* 'restitution':0.8,
          'friction':0.3,
          'density':1.0*/
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos2 =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos2.x, pos2.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 150, 200);
      pop();
    }
  };