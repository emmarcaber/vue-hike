<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { isAuthenticated, logout } = useAuth()

function handleLogout() {
  logout()
  router.push('/')
}
</script>

<template>
  <nav class="bg-gray-800 text-white p-4 flex gap-6 justify-center items-center">
    <template v-if="isAuthenticated">
      <RouterLink :to="'/home'" class="hover:text-yellow-400">Home</RouterLink>
      <RouterLink to="/about" class="hover:text-yellow-400">About</RouterLink>
      <RouterLink to="/dashboard" class="hover:text-yellow-400">Dashboard</RouterLink>
      <RouterLink to="/blog" class="hover:text-yellow-400">Blog</RouterLink>
      <button @click="handleLogout" class="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
        Logout
      </button>
    </template>
  </nav>

  <main class="p-6">
    <RouterView></RouterView>
  </main>
</template>
