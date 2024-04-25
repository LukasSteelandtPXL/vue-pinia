import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BootstrapView from '../views/BootstrapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bs',
      name: 'bootstrap',
      component: BootstrapView
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/CounterView.vue') //lazy loading
    }
  ]
})

export default router
