<script setup>
import axios from "axios";
import { defineEmits } from "vue";

const emit = defineEmits(['record-added'])

const recordAction = async (action) => {
  const res = await axios.post("http://localhost:3000/history", { action });
  // 通知App.vue(父層)刷新歷史紀錄 並將新紀錄直接emit出去
  console.log(res.data)
  emit('record-added', res.data)
};
</script>

<template>
  <button @click="recordAction('使用者點擊了按鈕')">點我新增紀錄</button>
</template>
