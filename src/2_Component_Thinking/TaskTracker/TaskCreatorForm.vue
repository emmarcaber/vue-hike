<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-task'])
const props = defineProps({
  statuses: {
    type: Array,
    default: () => ['New', 'In Progress', 'Completed'],
  },
})

const task = ref({
  title: '',
  description: '',
  status: '',
})

const addTask = () => {
  if (!task.value.title || !task.value.description || !task.value.status) return
  emit('add-task', { ...task.value })
  task.value.title = ''
  task.value.description = ''
  task.value.status = ''
}
</script>

<template>
  <div class="flex flex-col space-y-4 p-4 bg-white rounded-lg shadow-md max-w-xl mx-auto">
    <input
      v-model="task.title"
      type="text"
      placeholder="Task Title"
      class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      v-model="task.description"
      type="text"
      placeholder="Task Description"
      class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <select
      v-model="task.status"
      class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="" disabled>Select Status</option>
      <option v-for="status in props.statuses" :key="status" :value="status">{{ status }}</option>
    </select>
    <button
      @click="addTask"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Add Task
    </button>
  </div>
</template>
