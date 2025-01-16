# 房價預測比較分析系統

這是一個使用 React 和 Recharts 建立的房價預測分析系統，可以視覺化呈現實際房價與預測房價的比較。

## 功能特點

- 房價趨勢視覺化
- 縣市和社區篩選功能
- 實際房價與預測房價的比較
- 詳細數據表格展示
- 平均誤差率計算
- 響應式設計

## 技術架構

- React 18
- Vite
- Recharts
- Tailwind CSS
- shadcn/ui 元件庫

## 安裝步驟

1. 克隆專案
```bash
git clone [your-repository-url]
cd price-analysis
```

2. 安裝依賴
```bash
npm install
```

3. 安裝必要的套件
```bash
npm install recharts @radix-ui/react-icons @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate lodash
npm install -D tailwindcss postcss autoprefixer
```

4. 初始化 Tailwind CSS
```bash
npx tailwindcss init -p
```

## 開發環境啟動

```bash
npm run dev
```

開啟瀏覽器訪問 `http://localhost:5173`

## 專案結構

```
src/
├── components/
│   └── ui/
│       ├── card.jsx      # Card 元件
│   └── PriceComparisonChart.jsx  # 主要的圖表元件
├── App.jsx              # 主應用程式
├── main.jsx            # 入口文件
└── index.css           # 全局樣式
```

## 資料格式

系統接受以下格式的資料：

```javascript
{
  county: "縣市名稱",
  time: "YYYYMM",
  complex_name: "社區名稱",
  RHP: 實際房價(數值),
  yhat: 預測房價(數值)
}
```

## 使用說明

1. 選擇縣市：使用下拉選單選擇特定縣市
2. 選擇社區：選擇特定社區進行分析
3. 查看圖表：可以看到實際房價和預測房價的趨勢比較
4. 查看詳細數據：在表格中可以看到詳細的數據和誤差率

## 注意事項

- 數據需要包含完整的時間序列以確保圖表的連續性
- 建議使用現代瀏覽器以獲得最佳體驗
- 響應式設計支援各種螢幕尺寸

## License

MIT License

## 貢獻指南

1. Fork 專案
2. 創建特性分支
3. 提交變更
4. 推送到分支
5. 創建 Pull Request
