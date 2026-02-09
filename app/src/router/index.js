import BuildClick from '@/views/BuildClick.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Clicky',
      component: BuildClick,
    }
  ],
})

export default router
