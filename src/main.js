
import { createApp } from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import { createWebHashHistory, createRouter } from "vue-router";
// const Tarot = '@/components/Tarot.vue'
const Tarot = () => import('@/components/Tarot.vue')
const Descricao = () => import('@/components/Descricao.vue')
const Quiz = () => import('@/components/Quiz.vue')
// const Home = () => import('../views/home/Home.vue')
// const Descricao = '@/components/Descricao.vue'

const routes = [
  { path: '/', component: Tarot },
  { path: '/descricao', component: Descricao },
  { path: '/quiz', component: Quiz },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


import './assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


createApp(App).use(router).mount('#app')

