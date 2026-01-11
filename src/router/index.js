import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/auth/loginView.vue'
import AppLayout from '@/components/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginView
    },
    {
      path: '/registro',
      component: () => import('@/views/auth/registerView.vue')
    },
    {
      path: '/app',
      component: AppLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard/dashboardView.vue')
        },
        {
          path: 'productos',
          name: 'productos',
          component: () => import('@/views/dashboard/ProductosView.vue')
        }
      ]
    }
  ],
})

export default router
