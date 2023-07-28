import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue')
  }
]
// 遍历获取 api 目录下所有的 js 文件（包括子目录）
const fileList = require.context('@/views', true, /(.js$)/)
const files = fileList.keys()
console.log(files, 'files')
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
