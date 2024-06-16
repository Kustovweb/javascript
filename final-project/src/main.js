import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createWebHistory, createRouter } from 'vue-router'
import './assets/style.sass'
import App from './App.vue'
import storeVuex from './store/index.js'
import routes from './router/index.js'

const store = createStore(storeVuex)
const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(store).use(router).mount('#app')

// const isAuth = true;

router.beforeEach((to, from, next) => {
    console.log(to, from);
    // if (isAuth && to.path === "/project") next('/project')
    next()
})