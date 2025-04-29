<script>
export default{
    props: ['item'],
}
</script>

<template>
  <div class="col-4 mb-2" v-for="item in items" :key="item.name">
    <div
      class="card mb-3 p-3 rounded-4 w-100"
      style="height: calc(100% - 32px)"
    >
      <div class="row g-0">
        <!-- 左側圖片 -->
        <div class="col-md-4">
          <img
            :src="item.image"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <!-- 右側說明欄 -->
        <div class="col-md-8">
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

<style></style>
