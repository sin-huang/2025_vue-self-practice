<script setup>
// 先匯入會用到的方法們
import { ref, onMounted } from "vue";
import axios from "axios";

// const records = ref([]) <--這句不該加在這!!
defineProps(['records']);

// 將「時間戳」依當地語言格式化為「當地習慣之時間表達式」
const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};

// 這段造成 HistoryList.vue 掛載時會再次自己打 API，導致它無視 App.vue 傳進來的 records，也不會 reactive 更新。
// 當元件被掛載到畫面上時(執行....) 就去打API取得歷史紀錄相關資料 並從response物件中取出值賦值(塞)給records.value
// onMounted(async ()=>{
//     // 使用 axios 向後端發送 GET 請求
//     // 向本機的 /history API 要求歷史紀錄資料
//     // res 是回傳的整個 HTTP 回應物件，通常你會從中取出 res.data
//     const res = await axios.get('http://localhost:3000/history');
//     // 把後端回傳的資料塞進records中 view(畫面)就會更新
//     records.value = res.data;
// })
</script>

<template>
  <div>
    <h2>歷史紀錄</h2>
    <ul>
      <li v-for="record in records" :key="record._id">
        {{ record.action }} - {{ formatDate(record.timestamp) }};
      </li>
    </ul>
  </div>
</template>
