<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import HistoryCard from "./HistoryCard.vue";


defineProps({
  records:{
    type:Array,
    required: true
  }
});

</script>

<template>
  <div class="row flex flex-wrap" >
    <h2>歷史紀錄</h2>
      <HistoryCard
        v-for="record in records" 
        :key="record.name"
        :record="record"
        >
      </HistoryCard>
  </div>
</template>
