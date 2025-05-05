<script setup>
defineProps({
  item:Object,
})
</script>

<template>
  <div class="col-6 my-2">
    <div
      class="card mb-3 rounded-4 card-style" style="height:100%"
    >
      <div class="row g-0">
        <!-- 左側圖片 -->
        <div class="col-5 img-style">
          <img
            :src="item.image"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <!-- 右側說明欄 -->
        <div class="col-7 text-start">
          <div class="card-body">
            <a class="card-title">{{ item.name }}</a>
            <p class="card-text">⭐{{ item.star }}</p>
            <p class="card-text">${{ item.price }}</p>
            <p>{{ item.discountPrice }}</p>
            <p>{{ item.deliveryDate }}</p>
            <a href="#">{{ item.moreInfo }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.card {
    padding: 0;
    margin: 0;
    overflow: hidden;
    flex-direction: row;
}

.img-style{
  padding: 20px;
  background: #F7F7F7;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: cover;
}

.img-style img{
  mix-blend-mode: multiply;
}
</style>
