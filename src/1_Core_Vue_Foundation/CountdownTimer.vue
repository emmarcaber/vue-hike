<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const initialTime = 30 // 30 seconds
const timeLeft = ref(initialTime)
let timer = null

const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      clearInterval(timer)
    }
  }, 1000)
}

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')
  const secs = (seconds % 60).toString().padStart(2, '0')
  return `${mins}:${secs}`
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearInterval(timer)
  stopAutoReset()
})

const reset = () => {
  clearInterval(timer)
  timeLeft.value = initialTime
  startTimer()
}

const stopAutoReset = watch(timeLeft, (newVal) => {
  if (newVal === 0) {
    setTimeout(() => {
      reset()
    }, 1000) // Reset after 1 second
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
    <h1 class="text-5xl font-bold">Countdown Timer</h1>
    <p class="text-lg">Time Left: {{ formatTime(timeLeft) }}</p>
    <button
      @click="reset"
      class="px-4 py-2 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600"
    >
      Reset
    </button>
  </div>
</template>
