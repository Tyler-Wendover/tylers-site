import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue')
    },   
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/aboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/projectsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contactView.vue')
    }
  ]
})

export default router