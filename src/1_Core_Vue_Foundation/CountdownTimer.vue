<script setup>
import { ref, watch, watchEffect, onMounted, onUnmounted } from 'vue'

const initialTime = 15 // 15 seconds
const timeLeft = ref(initialTime)
const isDangerZone = ref(false)
const timerStatus = ref('running')
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

// watchEffect automatically tracks dependencies and updates
const stopDangerZoneEffect = watchEffect(() => {
  // Automatically updates when timeLeft changes
  isDangerZone.value = timeLeft.value <= 10 && timeLeft.value > 0

  if (timeLeft.value === 0) {
    timerStatus.value = 'completed'
  } else if (timeLeft.value <= 10) {
    timerStatus.value = 'warning'
  } else {
    timerStatus.value = 'running'
  }

  console.log(`Timer Status: ${timerStatus.value}, Time: ${timeLeft.value}s`)
})

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearInterval(timer)
  stopAutoReset()
  stopDangerZoneEffect()
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
    }, 3000) // Reset after 3 seconds
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
    <h1 class="text-5xl font-bold">Countdown Timer</h1>

    <!-- Timer Display with Dynamic Styling based on watchEffect -->
    <div
      :class="[
        'text-6xl font-bold transition-all duration-300',
        isDangerZone ? 'text-red-600 animate-pulse' : 'text-gray-800',
        timeLeft === 0 ? 'text-green-600' : '',
      ]"
    >
      {{ formatTime(timeLeft) }}
    </div>

    <!-- Status Badge (updated by watchEffect) -->
    <div
      :class="[
        'px-6 py-2 rounded-full text-sm font-semibold uppercase transition-all',
        timerStatus === 'running' ? 'bg-blue-100 text-blue-800' : '',
        timerStatus === 'warning' ? 'bg-red-100 text-red-800' : '',
        timerStatus === 'completed' ? 'bg-green-100 text-green-800' : '',
      ]"
    >
      {{ timerStatus }}
    </div>

    <button
      @click="reset"
      class="px-4 py-2 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600"
    >
      Reset
    </button>

    <!-- Info about watchEffect -->
    <div class="mt-8 p-4 bg-blue-50 rounded-lg max-w-md text-sm">
      <h3 class="font-bold mb-2">🔍 watchEffect in Action:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>
          Automatically tracks <code class="bg-blue-100 px-1 rounded">timeLeft</code> dependency
        </li>
        <li>Updates <code class="bg-blue-100 px-1 rounded">isDangerZone</code> when time ≤ 10s</li>
        <li>Changes <code class="bg-blue-100 px-1 rounded">timerStatus</code> reactively</li>
        <li>Check console for logs showing automatic tracking</li>
      </ul>
    </div>
  </div>
</template>
