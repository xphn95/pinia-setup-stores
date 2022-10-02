import '@unocss/reset/eric-meyer.css'
import '~/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// import 'uno.css'

createApp(App).use(createPinia()).mount('#app')
