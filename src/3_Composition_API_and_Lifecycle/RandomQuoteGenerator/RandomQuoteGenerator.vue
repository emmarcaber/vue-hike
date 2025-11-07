<script setup>
import { ref, onMounted } from 'vue'
import { useFetch } from '@/composables/useFetch'

const API_URL = 'https://dummyjson.com/quotes/random'
const { data, error, isLoading, fetchData } = useFetch(API_URL)

const quote = ref('')

const generateNewQuote = async () => {
  await fetchData()
  if (data.value) {
    quote.value = `"${data.value.quote}" - ${data.value.author}`
  }
}

onMounted(() => {
  generateNewQuote()
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-4xl font-bold mt-6 mb-12 text-center">Random Quote Generator</h1>
    <div class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <blockquote v-if="isLoading" class="text-gray-400">Fetching a random quote...</blockquote>

      <blockquote v-else-if="error" class="text-red-500">⚠️ {{ error }}</blockquote>

      <blockquote class="italic text-gray-700 mb-4">
        {{ quote }}
      </blockquote>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        @click="generateNewQuote"
      >
        New Quote
      </button>
    </div>
  </div>
</template>

<style scoped>
blockquote {
  transition: opacity 0.4s ease;
}
</style>
