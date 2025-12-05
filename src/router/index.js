import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/4_Routing_and_Navigation/views/HomeView.vue'
import AboutView from '@/4_Routing_and_Navigation/views/AboutView.vue'
import UserView from '@/4_Routing_and_Navigation/views/UserView.vue'
import DashboardView from '@/4_Routing_and_Navigation/views/DashboardView.vue'
import { isAuthenticated } from '@/auth'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/user/:id', name: 'user', component: UserView, props: true },
  { path: '/dashboard', name: 'dashboard', component: DashboardView, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    alert('You must log in first!')
    next('/')
  } else {
    next()
  }
})

export default router
