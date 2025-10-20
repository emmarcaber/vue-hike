<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  if (count.value <= 0) return
  count.value--
}

const reset = () => {
  count.value = 0
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
    <h1 class="text-5xl font-bold">Counter App</h1>
    <p class="text-xl">Count: {{ count }}</p>
    <div class="flex space-x-4">
      <button
        @click="increment"
        class="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
      >
        Increment
      </button>
      <button
        @click="decrement"
        class="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600"
      >
        Decrement
      </button>
      <button
        @click="reset"
        class="px-4 py-2 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600"
      >
        Reset
      </button>
    </div>
  </div>
</template>
