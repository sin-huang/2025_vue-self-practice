<script setup>
import { onMounted, ref } from "vue";
import HistotryList from "./components/HIstoryList.vue";
import PersonCard from "./components/PersonCard.vue";
import axios from "axios";

const records = ref([]);
const peoples = ref([
  { image: "https://i.pinimg.com/736x/74/02/1a/74021ad49c1e97f49628490c4f42a8bd.jpg", name: "Alice", gender: "女", interests: ["旅行", "閱讀"] },
  { image: "https://i.pinimg.com/736x/21/21/a7/2121a71a95b6d1e9efcbb4e98b990ee6.jpg",name: "Bob", gender: "男", interests: ["電影", "健身"] },
  { image: "https://i.pinimg.com/736x/6b/a1/3e/6ba13e7b1d7478ee9f0d7d986220cf18.jpg",name: "Charlie", gender: "男", interests: ["音樂", "程式設計"] },
  { image: "https://i.pinimg.com/736x/81/29/fa/8129fa5eccfb75cb057ac8f5435d5890.jpg",name: "Diana", gender: "女", interests: ["繪畫", "烹飪"] },
  { image: "https://i.pinimg.com/736x/d2/33/f1/d233f18397b323d8c1c7a87cc9a0948f.jpg",name: "Eve", gender: "女", interests: ["跳舞", "攝影"] },
  { image: "https://i.pinimg.com/736x/a7/d5/74/a7d57498e93ea3d23612d43300d22630.jpg",name: "Frank", gender: "男", interests: ["運動", "遊戲"] },
  { image: "https://i.pinimg.com/736x/04/fe/32/04fe3255d59159736dc24e18223fe829.jpg",name: "Grace", gender: "女", interests: ["寫作", "園藝"] },
  { image: "https://i.pinimg.com/736x/e6/ce/59/e6ce598243864f8f286c23c2067b830b.jpg",name: "Hank", gender: "男", interests: ["閱讀", "電影"] },
  { image: "https://i.pinimg.com/736x/29/db/2a/29db2a366a1b8730ab047db50fd441d4.jpg",name: "Ivy", gender: "女", interests: ["音樂", "舞蹈"] },
  { image: "https://i.pinimg.com/736x/46/7b/04/467b04834f337500b61342fa27562c86.jpg",name: "Jack", gender: "男", interests: ["程式設計", "繪圖"] },
  { image: "https://i.pinimg.com/736x/ac/ae/be/acaebe336f1fc8adc9d9307dad039b96.jpg",name: "Karen", gender: "女", interests: ["旅行", "攝影"] },
  { image: "https://i.pinimg.com/736x/39/ad/7b/39ad7bc0b4849d0d4331ea0fa4bc4314.jpg",name: "Leo", gender: "男", interests: ["烹飪", "電影"] },
  { image: "https://i.pinimg.com/736x/70/68/e6/7068e6bfceaab4b17027f608615f4ff8.jpg",name: "Mona", gender: "女", interests: ["園藝", "閱讀"] },
  { image: "https://i.pinimg.com/736x/f9/ca/3e/f9ca3e271a45a6c35623f0751b27b96b.jpg",name: "Nick", gender: "男", interests: ["健身", "電玩"] },
  { image: "https://i.pinimg.com/originals/67/46/bd/6746bd28f2c3db65dffc2f8961d5e4ca.gif",name: "Olivia", gender: "女", interests: ["音樂", "寫作"] },
  { image: "https://i.pinimg.com/originals/3e/29/a5/3e29a579b5eb6c4ecbbdfa46bfe7d9a0.gif",name: "Paul", gender: "男", interests: ["跑步", "攝影"] },
  { image: "https://i.pinimg.com/736x/a1/8a/10/a18a106fbc97ff3acaf1463287a29985.jpg",name: "Queen", gender: "女", interests: ["美術", "設計"] },
  { image: "https://i.pinimg.com/736x/92/36/2e/92362e6aff54b688bc08b2ebf1997cf2.jpg",name: "Ryan", gender: "男", interests: ["閱讀", "動畫"] },
  { image: "https://i.pinimg.com/736x/8e/69/12/8e6912b4890b0123d5b369044dab46d0.jpg",name: "Sara", gender: "女", interests: ["旅行", "日記"] },
  { image: "https://i.pinimg.com/736x/b9/9d/30/b99d304511f4c02b52ab2d82387c4362.jpg",name: "Tom", gender: "男", interests: ["編程", "健身"] },
]);

// 新增本次點擊的人物
const recordClick = async (newPerson) => {
  const action = `瀏覽過 ${newPerson.name}（${
    newPerson.gender
  }）的頁面，興趣是：${newPerson.interests.join("、")}`;
  const res = await axios.post("http://localhost:3000/history", {
    action,
    timestamp: new Date(),
  });
  records.value.unshift(res.data);
};

// 抓取歷史紀錄
const loadHistory = async () => {
  const res = await axios.get("http://localhost:3000/history");
  records.value = res.data;
};

const clearHistory = async () => {
  await axios.delete("http://localhost:3000/history");
  records.value = [];
};

// 首次載入資料
onMounted(() => {
  loadHistory();
});
</script>

<template>
  <button
    class="mb-4 px-4 py-2 bg-red-500 rounded hover:bg-red-600"
    @click="clearHistory"
  >
    點我清除所有歷史紀錄
  </button>
  <h3 class="font-bold mb-6">人物列表</h3>
  <div class="row flex flex-wrap">
    <PersonCard
      v-for="(person, index) in peoples"
      :key="index"
      :person="person"
      @card-clicked="recordClick"
    >
    </PersonCard>
  </div>
  <histotry-list :records="records"></histotry-list>
</template>
