<script setup>
defineProps({
  person: {
    type: Object,
    required: true
  }
})

defineEmits(['card-clicked'])
</script>

<template>
  <div
    class="col-3 px-2 mb-4"
    @click="$emit('card-clicked', person)"
  >
    <div class="bg-white shadow person-card">
      <div class="flex">
        <!-- 人物圖片 -->
        <div class="overflow-hidden">
          <img
            :src="person.image"
            class=""
            alt="avatar"
          />
        </div>
        <!-- 個人資訊 -->
        <div class="p-4 text-sm text-left">
          <h2 class="text-lg font-semibold">{{ person.name }}</h2>
          <p class="text-gray-600">性別：{{ person.gender }}</p>
          <p class="text-gray-600">興趣：{{ person.interests.join('、') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
div img{
    width: 100%;
    height: 295px;
    object-fit: cover;
}

.person-card:hover{
    scale: 1.01;
}

.person-card :first-child:hover{
    background-color: #d2f0ee;
}
</style>