<script setup>
import { useTheme } from '@/composables/useTheme'
import { onMounted, onUnmounted, onUpdated } from 'vue'

const { theme, toggleTheme } = useTheme()

onMounted(() => console.log(`Current theme is: ${theme.value}`))
onUpdated(() => console.log(`Theme changed to: ${theme.value}`))
onUnmounted(() => console.log('ThemeToggler component unmounted'))
</script>

<template>
  <div
    class="min-h-screen p-6"
    :class="theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'"
  >
    <h1 class="text-4xl font-bold mt-6 mb-12 text-center">Theme Toggler</h1>
    <div
      class="max-w-xl mx-auto p-6 rounded-lg shadow-md"
      :class="theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'"
    >
      <p class="mb-4">
        Current Theme: <strong>{{ theme.charAt(0).toUpperCase() + theme.slice(1) }}</strong>
      </p>
      <button
        class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        @click="toggleTheme"
      >
        Toggle Theme
      </button>
    </div>
  </div>
</template>
