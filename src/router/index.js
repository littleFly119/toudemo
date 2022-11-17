import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'layout',
    redirect: 'home',
    component: () => import('@/views/layout'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: 'wenda',
        name: 'wenda',
        component: () => import('@/views/wenda')
      }
    ]

  },
  {
    path: '/shoucang',
    name: 'shouCang',
    component: () => import('@/views/my/shouCang')
  },
  {
    path: '/lishi',
    name: 'liShi',
    component: () => import('@/views/my/liShi')
  },
  {
    path: '/editUserInfo',
    name: 'editUserInfo',
    component: () => import('@/views/my/editUserInfo')
  },
  {
    path: '/littleZhi',
    name: 'littleZhi',
    component: () => import('@/views/my/littleZhi')
  },
  {
    path: '/messageNotice',
    name: 'messageNotice',
    component: () => import('@/views/my/messageNotice')
  }
]

const router = new VueRouter({
  routes
})

export default router
