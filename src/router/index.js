import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../views/Overview.vue'
import Browse from '../views/Browse.vue'
import Download from '../views/Download.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AnnotationAnalysis from '../views/AnnotationAnalysis.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'overview',
    component: Overview
  },
  {
    path: '/browse',
    name: 'browse',
    component: Browse
  },
  {
    path: '/download',
    name: 'download',
    component: Download
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/aa',
    name: 'aa',
    component: AnnotationAnalysis
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
]

const router = new VueRouter({
  routes
})

export default router
