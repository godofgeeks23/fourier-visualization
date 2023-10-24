
let time = 0;
let wave = [];
let path = [];

let slider;

function setup() {
  createCanvas(1000, 600);
  slider = createSlider(1, 50, 5);
}

function draw() {
  background(0);
  translate(width/2 - 300, height/2);

  let x = 0;
  let y = 0;

  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = 75 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    ellipse(x, y, 5);
  }
  wave.unshift(y);


  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.025;


  if (wave.length > 600) {
    wave.pop();
  }
}
