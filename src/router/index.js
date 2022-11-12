import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import community from '@/views/community.vue'
import Market from '@/views/Market.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component:()=>import('@/views/About.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: community
  },
  {
    path: '/Market',
    name: 'Market',
    component: Market
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
