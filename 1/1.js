let angle = 0;
let spheres = [];
let boxSize = 200;


function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('p5-canvas');

  // スフィアの位置をランダムに初期化
  for (let i = 0; i < 15; i++) {
    spheres.push({
      x: random(-boxSize / 2, boxSize / 2),
      y: random(-boxSize / 2, boxSize / 2),
      z: random(-boxSize / 2, boxSize / 2)
    });
  }
}

function draw() {

  background(255);
  
  // 平行投影を設定
  ortho(-width / 2, width / 2, -height / 2, height / 2, 0, 500);

  // 回転するボックス
  push();
  rotateX(-sin(angle));
  rotateY(angle);
  angle += 0.004;
  
  // ワイヤーフレームの太さを設定
  strokeWeight(1);
  stroke(0); // ワイヤーフレームの色を黒に設定
  noFill();
  
  // ワイヤーフレームのキューブを描画
  drawBox(boxSize, 10, boxSize);
  pop();

  // ランダムに配置されたスフィアを描画
  for (let i = 0; i < spheres.length; i++) {
    push();
    translate(spheres[i].x, spheres[i].y, spheres[i].z);
    fill(0); // 黒色で塗りつぶす
    noStroke(); // スフィアの輪郭を非表示
    sphere(1.5); // スフィアのサイズを5に設定
    pop();

    // スフィアの位置を更新
    spheres[i].y += 1;
    if (spheres[i].y > boxSize / 2) {
      spheres[i].y = -boxSize / 2;
    }
  }
}

function drawBox(w, h, d) {
  beginShape(LINES);
  // Top
  vertex(-w / 2, -h / 2, -d / 2);
  vertex(w / 2, -h / 2, -d / 2);

  vertex(w / 2, -h / 2, -d / 2);
  vertex(w / 2, -h / 2, d / 2);

  vertex(w / 2, -h / 2, d / 2);
  vertex(-w / 2, -h / 2, d / 2);

  vertex(-w / 2, -h / 2, d / 2);
  vertex(-w / 2, -h / 2, -d / 2);

  endShape();
}
