function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

let x = 50, y = 50;
let speedX = 5, speedY = 5;

function draw() {
  let fill_color = {
    r: random(150, 255),
    g: random(150, 255),
    b: random(150, 255),
  };

  background(0);

  noStroke();
  ellipse(x, y, 100, 100);

  if (x > width - 50 || x < 50) {
    speedX = speedX * -1;
    fill(fill_color.r, fill_color.g, fill_color.b);
  }

  if (y > height - 50 || y < 50) {
    speedY = speedY * -1;
    fill(fill_color.r, fill_color.g, fill_color.b);
  }

  x += speedX;
  y += speedY;

  ellipse(random(50, width - 50), random(50, height - 50), 20, 20, 10);
}
