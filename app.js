// 1、先在外面定義好RoomCard
const RoomCard = {
  props: ['room'],
  template: `
    <div class="border p-3">
      <h5>{{ room.chinName }}</h5>
      <p>{{ room.engName }}</p>
    </div>
  `,
};

const RoomList = {
  props:['chunkedRooms'],
  components:{
    RoomCard,
  },
  template:`
    <div class="container py-5 text-center">
      <div class="row" v-for="(chunk, index) in chunkedRooms" :key="index">
        <div class="col-6 mb-4" v-for="room in chunk" :key="room.chinName">
            <room-card :room="room"></room-card>
        </div>
      </div>
    </div>`
};
// 2、再寫createApp
Vue.createApp({
  data() {
    return {
      rooms: [
        {
          chinName: "豪華雙人房",
          engName: "Luxury Double Room",
          price: 3000,
          available: 3,
          cover: null,
          discount: 0.8,
          equipment: {
            wifi: false,
            bathhub: true,
            breakfast: true,
          },
        },
        {
          chinName: "海景三人房",
          engName: "Sea View Triple Room",
          price: 6000,
          available: 2,
          cover: null,
          discount: 0.95,
          equipment: {
            wifi: false,
            bathhub: true,
            breakfast: true,
          },
        },
        {
          chinName: "經濟雙人房",
          engName: "Economy Double Room",
          price: 3500,
          available: 5,
          cover: null,
          discount: 0.75,
          equipment: {
            wifi: false,
            bathhub: true,
            breakfast: true,
          },
        },
        {
          chinName: "溫泉雙人房",
          engName: "Hot Spring Double Room",
          price: 4000,
          available: 2,
          cover: null,
          discount: 0.9,
          equipment: {
            wifi: false,
            bathhub: true,
            breakfast: true,
          },
        },
        {
          chinName: "豪華四人房",
          engName: "Luxary Four Room",
          price: 8000,
          available: 1,
          cover: null,
          discount: 0.75,
          equipment: {
            wifi: false,
            bathhub: true,
            breakfast: true,
          },
        },
        {
          chinName: "總統套房",
          engName: "President Suite",
          price: 10000,
          available: 1,
          cover: null,
          discount: 0.95,
          equipment: {
            wifi: true,
            bathhub: true,
            breakfast: true,
          },
        },
        {
          chinName: "商務單人房",
          engName: "Business One Room",
          price: 1500,
          available: 10,
          cover: null,
          discount: 0.75,
          equipment: {
            wifi: false,
            bathhub: true,
            breakfast: true,
          },
        },
        {
          chinName: "典雅景觀房",
          engName: "Elegant Landscpae Room",
          price: 6500,
          available: 3,
          cover: null,
          discount: 0.7,
          equipment: {
            wifi: false,
            bathhub: true,
            breakfast: true,
          },
        },
      ],
    };
  },
  computed: {
    chunkedRooms() {
      const chunkSize = 2;
      const chunks = [];
      for (let i = 0; i < this.rooms.length; i += chunkSize) {
        chunks.push(this.rooms.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  components: {
    RoomCard,
    RoomList,
  },
}).mount("#app");
