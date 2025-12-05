<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { login: authLogin } = useAuth()

function login() {
  authLogin()
  router.push('/dashboard')
}
</script>

<template>
  <div class="text-center p-6">
    <h1 class="text-3xl mb-4 font-bold">🔐 Login</h1>
    <button @click="login" class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white">
      Log In
    </button>
  </div>
</template>
