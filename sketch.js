let capture;
let graphics;

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  // 設定背景顏色
  background('#b5e2fa');
  
  // 啟用攝影機
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的攝影機畫面
  
  // 建立與攝影機影像相同大小的圖形
  graphics = createGraphics(capture.width, capture.height);
}

function draw() {
  // 繪製背景
  background('#b5e2fa');
  
  // 翻轉畫布以修正影像左右顛倒
  push();
  translate(width / 2, height / 2); // 將原點移到畫布中央
  scale(-1, 1); // 水平翻轉
  image(capture, -capture.width / 2, -capture.height / 2); // 繪製影像
  pop();
  
  // 更新 graphics 的內容
  graphics.background(0); // 設定背景為黑色
  for (let x = 0; x < graphics.width; x += 20) {
    for (let y = 0; y < graphics.height; y += 20) {
      let col = capture.get(x, y); // 從攝影機影像取得顏色
      graphics.fill(col);
      graphics.noStroke();
      graphics.ellipse(x + 10, y + 10, 15, 15); // 繪製圓形
    }
  }
  
  // 將 graphics 顯示在攝影機影像的上方
  image(graphics, (width - graphics.width) / 2, (height - graphics.height) / 2 - graphics.height / 2);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
