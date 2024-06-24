import '@/index.css'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from '@/App.vue'
import router from '@/router'
import storeVuex from '@/store/index.js'
const app = createApp(App)
const store = createStore(storeVuex)
app.use(router)
app.use(store)
app.mount('#app')
