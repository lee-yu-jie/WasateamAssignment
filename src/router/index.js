import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/dynamicInput',
    name: 'dynamicInput',
    component: () => import('../views/DynamicInput.vue')
  },
  {
    path: '/connectAPI',
    name: 'connectAPI',
    component: () => import('../views/ConnectAPI.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
