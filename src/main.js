import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from "unhead"

const head = createHead()
createApp(App).use(router).mount('#app')
