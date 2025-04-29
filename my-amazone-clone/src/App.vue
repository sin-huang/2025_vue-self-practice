<script>
import ProductCard from "./components/ProductCard.vue";
// 要匯出別人才可以引入這個App.vue元件
export default{
    components:{ ProductCard },
    data() {
    return {
      // 用陣列裝各種商品
      items: [
        {
          name: "Amazon Basics 256 GB Ultra Fast USB 3.1 High Capacity Flash Drive for Data Transfer and Storage, Black",
          star: 4.6,
          price: 19,
          discount: 0.8,
          discountPrice: null,
          deliveryDate: "Delivery Thu, May 8 to Taiwan",
          moreInfo: "Add to cart",
          image:"https://m.media-amazon.com/images/I/611LbnyTYNL._AC_UY218_.jpg"
        },
        {
          name: "UnionSine 750GB 2.5 Ultra Slim Portable External Hard Drive HDD-USB 3.0 for PC, Mac, Laptop, PS4, Xbox one,Xbox 360-HD-2510(Black)",
          star: 4.4,
          price: 33,
          discount: 0.85,
          discountPrice: null,
          deliveryDate: "Delivery May 9 - 20 to Taiwan",
          moreInfo: "See options",
          image:"https://m.media-amazon.com/images/I/91mlqrT75WL._AC_UY218_.jpg"
        },
        {
            name: "WD 5TB Elements Portable External Hard Drive for Windows",
            star: 4.6,
            price: 127,
            discount: 0.9,
            discountPrice: null,
            deliveryDate: "delivery Thu, May 8 to Taiwan",
            moreInfo: "Add to cart",
            image:"https://m.media-amazon.com/images/I/7172nw99CvL._AC_UY218_.jpg"
        },
        {
            name: "Seagate Portable 2TB External Hard Drive HDD",
            star: 4.3,
            price: 69,
            discount: 0.8,
            discountPrice: null,
            deliveryDate: "delivery Thu, May 12 to Taiwan",
            moreInfo: "Add to cart",
            image:"https://m.media-amazon.com/images/I/81NOfMae3wL._AC_UY218_.jpg"
        },
        {
            name: "SSK 1TB SSD External Hard Drive, Portable SSD Up to 550MB/s Fast Solid State Drives",
            star: 4.4,
            price: 65,
            discount: 0.9,
            discountPrice: null,
            deliveryDate: "delivery Thu, May 15 to Taiwan",
            moreInfo: "See options",
            image:"https://m.media-amazon.com/images/I/61CP3e58SIL._AC_UL320_.jpg"
        },
        {
            name: "LaCie Rugged Mini 2TB External Hard Drive Portable HDD",
            star: 3.9,
            price: 88,
            discount: 0.75,
            discountPrice: null,
            deliveryDate: "delivery Fri, April 30 to Taiwan",
            moreInfo: "See options",
            image:"https://m.media-amazon.com/images/I/81h+P-kLOnL._AC_UY218_.jpg"
        },
        {
            name: "Seagate BarraCuda 8TB Internal Hard Drive HDD – 3.5 Inch Sata 6 Gb/s 5400 RPM 256MB Cache for Computer Desktop PC (ST8000DMZ04/004)",
            star: 4.1,
            price: 132,
            discount: 0.75,
            discountPrice: null,
            deliveryDate: " delivery May 25 - Jun 4 to Taiwan",
            moreInfo: "Add to cart",
            image:"https://m.media-amazon.com/images/I/71dpms8gexL._AC_UY218_.jpg"
        },
        {
            name: "Toshiba Canvio Basics 2TB Portable External Hard Drive USB",
            star: 4.5,
            price: 67,
            discount: 0.95,
            discountPrice: null,
            deliveryDate: " delivery May 13 - Jun 4 to Taiwan",
            moreInfo: "Add to cart",
            image:"https://m.media-amazon.com/images/I/716rLc3XwyL._AC_UY218_.jpg"
        },
      ],
    };
  },
  methods: {},
  computed: {
    chunkedItems(){
        const chunkSize = 2;
        const chunks = [];
        for(let i=0;i<this.items.length;i+=chunkSize){
            chunks.push(this.items.slice(i,i+chunkSize));
        }
        return chunks;
    }
  },
  mounted(){
    this.items.forEach((item) => {
        item.discountPrice = (item.price * item.discount).toFixed(2);
    });
  }
}

</script>
<!-- App.vue呼叫ProductCard時，傳進來的item出錯 -->
<template>
      <div class="custom-container container mx-6 py-5">
        <div class="row custom-row" v-for="(chunk, index) in chunkedItems" :key="index">
            <product-card v-for="item in chunk" :key="item.name" :item="item"></product-card>
        </div>
      </div>
</template>

<style>
</style>