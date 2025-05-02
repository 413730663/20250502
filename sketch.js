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
  
  // 將攝影機影像顯示在畫布中央
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
