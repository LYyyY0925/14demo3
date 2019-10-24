import Vue from 'vue'
import VueRouter from 'vue-router'
import sex from '../views/sex.vue'
import hobby from '../views/hobby.vue'
import zwjs from '../views/zwjs.vue'
import jianjie from '../views/jianjie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sex',
    component: sex
  },
  {
    path: '/hobby',
    name: 'hobby',
    component: hobby
  },
  {
    path: '/zwjs',
    name: 'zwjs',
    component: zwjs
  },
  {
    path: '/jianjie',
    name: 'jianjie',
    component: jianjie
  }
]

const router = new VueRouter({
  routes
})

export default router
