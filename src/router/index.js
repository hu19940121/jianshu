import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    component: () => import('@/views/user'),
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'Login',
        component: () => import('@/views/user/login'),
        meta: { title: '登陆' }
      },
      {
        path: '/user/register',
        name: 'Register',
        component: () => import('@/views/user/register'),
        meta: { title: '注册' }
      }
    ]
  },
  {
    path: '/publishArticle',
    component: () => import('@/views/publishArticle'),
    meta: { title: '发布文章' }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/index'),
        meta: { title: '首页' }
      },
      {
        path: '/articeDetail',
        name: 'ArticeDetail',
        component: () => import('@/views/articeDetail/index'),
        meta: { title: '文章详情' }
      }

    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404')
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
