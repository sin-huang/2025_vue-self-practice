// 匯入CSS決定整體佈局

// 使用vue提供的CreateApp方法(要使用就要匯入)
import { createApp } from "vue"
// 使用pinia提供的CreatePinia方法(要使用就要匯入)
import { createPinia } from "pinia"
import App from "./App.vue"

// 建立一個vue實例 方便等下調用
const app = createApp(App)

// app有提供use()方法
app.use(createPinia())

// 掛載到HTML中id叫做app的標籤
app.mount("#app")