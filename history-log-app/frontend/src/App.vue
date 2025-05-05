<script setup>
import { onMounted, ref } from 'vue'
import ActionBtn from './components/ActionBtn.vue'
import HistotryList from './components/HIstoryList.vue'
import axios from 'axios'

const records = ref([]) 

// 抓取歷史紀錄
const loadHistory = async () => {
  const res = await axios.get('http://localhost:3000/history')
  records.value = res.data
};

// newRecord到底裝了什麼
// const addRecord = (newRecord) =>{
//   records.value.unshift(newRecord)
// }

const addRecord = (newRecord) => {
  console.log("收到來自 ActionBtn 的新紀錄 👇")
  console.log(newRecord)
  records.value.unshift(newRecord)
}

// 首次載入資料
onMounted(()=>{
  loadHistory()
})

</script>

<template>
  <action-btn @record-added="addRecord"></action-btn>
  <!-- 因為我點新增後 for迴圈不會重跑 當然沒長出來囉 -->
  <histotry-list :records="records"></histotry-list>
</template>
