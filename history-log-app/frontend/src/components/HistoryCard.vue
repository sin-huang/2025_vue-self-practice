<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps({
    record:{
        type: Object,
        required: true
    }
})

const formatDate = computed(() => {
    const date = new Date(props.record.timestamp)
    return date.toLocaleString()
})
</script>

<template>
  <div class="col-3 px-4 pt-3 m-1 border" style="background-color: #ecebe4; width: calc( 25% - 10px);">
    <p class="text-gray-800 font-medium mb-1">{{ record.action }}</p>
    <p class="text-sm text-gray-500">{{ formatDate }}</p>
  </div>
</template>