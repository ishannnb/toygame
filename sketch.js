let balls = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}

function mouseClicked() {
  let newBall = new Ball(mouseX, mouseY, random(10, 30), color(random(255), random(255), random(255)));
  balls.push(newBall);
}

class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, 5);
  }
  
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.xSpeed *= -1;
    }
    
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.ySpeed *= -1;
    }
  }
  
  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }
}
