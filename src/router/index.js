import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首頁',
      description: '我是李宇傑，這是面試作業的首頁'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/dynamicInput',
    name: 'dynamicInput',
    meta: {
      title: '輸入類型組件',
      description: '展示一個組件依照傳進去的type可以有input-text、input-radio、select三種類型'
    },
    component: () => import('../views/DynamicInput.vue')
  },
  {
    path: '/connectAPI',
    name: 'connectAPI',
    meta: {
      title: '串接api',
      description: '串接一組假資料並用table方式呈現'
    },
    component: () => import('../views/ConnectAPI.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    meta: {
      title: 'computed應用',
      description: '串接一組假資料並用table方式呈現'
    },
    component: () => import('../views/Computed.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//       document.title = to.meta.title
//   }
//   next();
// })
export default router
