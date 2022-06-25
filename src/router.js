//import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import Home from './components/Home/Home.vue'
import Login from './components/Login/Login'

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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
    })

export default router
