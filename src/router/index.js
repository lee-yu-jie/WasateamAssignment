import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首頁'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/dynamicInput',
    name: 'dynamicInput',
    meta: {
      title: '輸入類型組件'
    },
    component: () => import('../views/DynamicInput.vue')
  },
  {
    path: '/connectAPI',
    name: 'connectAPI',
    meta: {
      title: '串接api'
    },
    component: () => import('../views/ConnectAPI.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next();
})
export default router
