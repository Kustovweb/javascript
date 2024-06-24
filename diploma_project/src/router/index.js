import PageBookmarks from '@/pages/PageBookmarks.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PageMain from '@/pages/PageMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/PageBookmarks', component: PageBookmarks
    },
    {
      path: '/PageMain', component: PageMain
    },
  ]
})

export default router
