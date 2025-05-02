# 20250502上課筆記

---
## 第一條指令

產生一個全螢幕的畫布，背景顏色為b5e2fa
擷取攝影機的影像，正常的顯示在視窗的中間
影像畫面寬高為視窗大小的80%
請把程式碼寫在sketch.js內

### 說明：
1. createCanvas(windowWidth, windowHeight)：建立全螢幕畫布。
2. background('#b5e2fa')：設定背景顏色為 b5e2fa。
3. createCapture(VIDEO)：啟用攝影機。
4. capture.size(windowWidth * 0.8, windowHeight * 0.8)：將攝影機影像大小設為視窗的 80%。
5. image(capture, x, y)：將攝影機影像繪製在畫布中央。
6. windowResized：確保視窗大小改變時，畫布會自動調整。


---

### 產生的程式碼

```javascript=
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

```

---

## 第二條指令

攝影機顯示的畫面左右顛倒，請調整

### 說明：
1.push() 和 pop()：確保翻轉操作只影響攝影機影像，不影響其他畫布內容。
2.translate(width / 2, height / 2)：將畫布的原點移到中央，方便翻轉影像。
3.scale(-1, 1)：水平翻轉畫布，修正影像左右顛倒的問題。
4.image(capture, -capture.width / 2, -capture.height / 2)：翻轉後正確繪製影像。


### 產生的程式碼

```javascript=
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
```
