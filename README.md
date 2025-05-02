# 20250502上課筆記

---

![image](https://hackmd.io/_uploads/ByVc3nblee.png)

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

---

## 第三條指令

利用createGraphics指令，產生一個與video視訊畫面
一樣的寬高一樣的大小內容，該圖片顯示在視訊畫面的上方

### 說明：
1.createGraphics(capture.width, capture.height)：建立一個與攝影機影像相同大小的圖形。
2.graphics.background(255, 0, 0)：設定圖形的背景顏色為紅色（可根據需求修改）。
3.image(graphics, x, y)：將圖形繪製在攝影機影像的上方。
4.位置調整：圖形的位置設置為攝影機影像的正上方，透過計算 y 座標進行調整。


### 產生的程式碼

```javascript=
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
  graphics.background(255, 0, 0); // 設定圖形背景為紅色（可自行調整）
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
  
  // 將圖形顯示在攝影機影像的上方
  image(graphics, (width - graphics.width) / 2, (height - graphics.height) / 2 - graphics.height / 2);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}

```

---

## 第四條指令

把graphics的背景顏色為黑色
graphics在寬與高切成每隔20為一個單位
在每個單位內產生一個寬高為15的圓
圓的顏色採用capture相對位置的顏色

### 說明：
graphics.background(0)：將 graphics 的背景設為黑色。
for 迴圈：將 graphics 的寬與高切成每隔 20 為一個單位。
capture.get(x, y)：從攝影機影像的相對位置取得顏色。
graphics.ellipse(x + 10, y + 10, 15, 15)：在每個單位內繪製寬高為 15 的圓形，圓形的顏色來自攝影機影像的相對位置。
image(graphics, x, y)：將 graphics 繪製在攝影機影像的上方。


```javascript=
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
```

---

## 第五條指令

graphics要放在畫面中間，大小為視窗的80%

### 修改重點：
1.縮放 graphics：
2.使用 image(graphics, x, y, width, height)，將 graphics 縮放為視窗的 80%。
3.計算縮放後的寬高：scaledWidth = windowWidth * 0.8 和 scaledHeight = windowHeight * 0.8。
4.置中 graphics：
5.計算置中位置：(width - scaledWidth) / 2 和 (height - scaledHeight) / 2。

### 產生的程式碼
```javascript=
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
  
  // 將 graphics 顯示在畫面中央，並縮放為視窗的 80%
  let scaledWidth = windowWidth * 0.8;
  let scaledHeight = windowHeight * 0.8;
  image(graphics, (width - scaledWidth) / 2, (height - scaledHeight) / 2, scaledWidth, scaledHeight);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
```

---

## 第六條指令

graphics攝影機顯示畫面左右顛倒，請修正

### 修正重點：
1.graphics.push() 和 graphics.pop()：確保翻轉操作只影響 graphics 的內容，不影響其他畫布內容。
2.graphics.translate(graphics.width / 2, graphics.height / 2)：將 graphics 的原點移到中央，方便進行翻轉。
3.graphics.scale(-1, 1)：水平翻轉 graphics 的內容。
4.graphics.translate(-graphics.width / 2, -graphics.height / 2)：翻轉後還原原點位置，確保繪製內容正確。


### 產生的程式碼
```javascript=
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
  graphics.push();
  graphics.translate(graphics.width / 2, graphics.height / 2); // 將原點移到 graphics 中央
  graphics.scale(-1, 1); // 水平翻轉
  graphics.translate(-graphics.width / 2, -graphics.height / 2); // 還原原點位置
  for (let x = 0; x < graphics.width; x += 20) {
    for (let y = 0; y < graphics.height; y += 20) {
      let col = capture.get(x, y); // 從攝影機影像取得顏色
      graphics.fill(col);
      graphics.noStroke();
      graphics.ellipse(x + 10, y + 10, 15, 15); // 繪製圓形
    }
  }
  graphics.pop();
  
  // 將 graphics 顯示在畫面中央，並縮放為視窗的 80%
  let scaledWidth = windowWidth * 0.8;
  let scaledHeight = windowHeight * 0.8;
  image(graphics, (width - scaledWidth) / 2, (height - scaledHeight) / 2, scaledWidth, scaledHeight);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}

```

---

## 第七條指令



### 修改重點：
1.方框繪製：使用 graphics.rect(x, y, 18, 18) 繪製寬高為 18 的方框。
2.方框的顏色來自 capture.get(x, y)。
3.圓形繪製：使用 graphics.ellipse(x + 9, y + 9, 5, 5) 在方框中央繪製直徑為 5 的黑色圓。
4.圓形的顏色固定為黑色。
5.保留其他功能：graphics 的內容仍然會顯示在畫面中央，並縮放為視窗的 80%。


```javascript=
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
      graphics.rect(x, y, 18, 18); // 繪製方框
      
      // 在方框中間繪製黑色圓
      graphics.fill(0);
      graphics.ellipse(x + 9, y + 9, 5, 5); // 圓的直徑為 5，置於方框中央
    }
  }
  
  // 將 graphics 顯示在畫面中央，並縮放為視窗的 80%
  let scaledWidth = windowWidth * 0.8;
  let scaledHeight = windowHeight * 0.8;
  image(graphics, (width - scaledWidth) / 2, (height - scaledHeight) / 2, scaledWidth, scaledHeight);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
```
