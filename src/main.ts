import { createApp } from 'vue'
import App from './App.vue'

//pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

//element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(pinia).mount('#app')
