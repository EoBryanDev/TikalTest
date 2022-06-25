//import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Index from './components/Index/Index'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'IndexPage',
      component: Index
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
    })

export default router
