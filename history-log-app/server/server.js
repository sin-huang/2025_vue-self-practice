// 匯入等下會用到的模組(我們剛剛已經用npm i下載這些模組到這個專案資料夾了)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 初始化express 建立一個express應用實例
const app = express();
// 啟用所有router的CORS功能 允許前端瀏覽器跨網域發送請求
app.use(cors());
app.use(express.json());

// connect mongoDB
mongoose.connect("mongodb://localhost:27017/history_db");

// define the architecture of the history
const HistorySchema = new mongoose.Schema({
  action: String,
  timestamp: { type: Date, default: Date.now },
});

const History = mongoose.model("History", HistorySchema);

app.post("/history", async (req, res) => {
  const record = new History(req.body);
  await record.save();
  // ???
  res.json(record);
});

app.get("/history", async (req, res) => {
  const records = await History.find().sort({ timestamp: -1 });
  res.json(records);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
