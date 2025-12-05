import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/4_Routing_and_Navigation/views/AboutView.vue'
import UserView from '@/4_Routing_and_Navigation/views/UserView.vue'
import DashboardView from '@/4_Routing_and_Navigation/views/DashboardView.vue'
import BlogView from '@/4_Routing_and_Navigation/views/BlogView.vue'
import LoginView from '@/4_Routing_and_Navigation/views/LoginView.vue'
import HomeView from '@/4_Routing_and_Navigation/views/HomeView.vue'
import { useAuth } from '@/composables/useAuth'

const routes = [
  { path: '/', name: 'index', component: LoginView },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView, meta: { requiresAuth: true } },
  { path: '/user/:id', name: 'user', component: UserView, props: true },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth()

  if (to.meta.requiresAuth && !isAuthenticated.value) {
    alert('Access denied! Please login first.')
    next('/')
  } else {
    next()
  }
})

export default router
