import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/post/:id',
    name: 'post-edit',
    meta: {layout: 'main'},
    component: () => import('@/views/PostsEdit.vue')
  },
  {
    path: '/post',
    name: 'post-add',
    meta: {layout: 'main'},
    component: () => import('@/views/PostsAdd.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {layout: 'empty'},
    component: () => import('@/views/Logout.vue')
  },
  {
    path: '',
    name: 'posts',
    meta: {layout: 'main'},
    component: Posts
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
