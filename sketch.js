let capture;

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  // 設定背景顏色
  background('#b5e2fa');
  
  // 啟用攝影機
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的攝影機畫面
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
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
