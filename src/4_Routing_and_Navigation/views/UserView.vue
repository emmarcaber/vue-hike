<script setup>
import { useRouter } from 'vue-router'
defineProps(['id'])

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="p-6 text-center">
    <h1 class="text-3xl font-bold mb-2">👤 User Profile</h1>
    <p>
      User ID: <span class="font-mono">{{ id }}</span>
    </p>

    <button
      @click="goHome"
      class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
    >
      Go Home (Programmatic Navigation)
    </button>
  </div>
</template>
