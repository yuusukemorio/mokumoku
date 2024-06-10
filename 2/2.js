function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  fill(255);

  // デザインを描画
  let rectWidth = 30;
  let rectHeight = 80;
  let gap = 40;
  let cornerRadius = 20; // 角の丸みの半径

  push();
  translate(width / 2, height / 2);
  rotate(PI / 6);
  
  for (let i = -3; i <= 3; i++) {
    rect(i * (rectWidth + gap), -rectHeight / 2, rectWidth, rectHeight, cornerRadius);
  }
  
  pop();
}

function draw() {
  // 描画はsetup内で完了しているため、drawは空のままにします
}
