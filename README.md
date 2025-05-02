# 20250502上課筆記

---
## 第一條指令

產生一個全螢幕的畫布，背景顏色為b5e2fa
擷取攝影機的影像，正常的顯示在視窗的中間
影像畫面寬高為視窗大小的80%
請把程式碼寫在sketch.js內

說明：
1. createCanvas(windowWidth, windowHeight)：建立全螢幕畫布。
2. background('#b5e2fa')：設定背景顏色為 b5e2fa。
3. createCapture(VIDEO)：啟用攝影機。
4. capture.size(windowWidth * 0.8, windowHeight * 0.8)：將攝影機影像大小設為視窗的 80%。
5. image(capture, x, y)：將攝影機影像繪製在畫布中央。
6. windowResized：確保視窗大小改變時，畫布會自動調整。
