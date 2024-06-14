import './assets/main.css'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import storeVuex from './store/index.js'
const store = createStore(storeVuex)
createApp(App).use(store).mount('#app')


