import PageMain from '@/pages/PageMain.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/PageBookmarks', component: () => import('@/pages/PageBookmarks.vue')
    },
    {
      path: '/PageMain', component: PageMain
    },
  ]
})

export default router
