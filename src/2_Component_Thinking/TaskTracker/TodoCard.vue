<script setup>
import { ref } from 'vue'

const emit = defineEmits(['delete-task', 'update-task'])

const props = defineProps({
  id: Number,
  title: String,
  description: String,
  status: String,
  statuses: {
    type: Array,
    default: () => ['New', 'In Progress', 'Completed'],
  },
})

const isEditable = ref(false)

const todo = ref({
  id: props.id,
  title: props.title,
  description: props.description,
  status: props.status,
})

const saveTask = () => {
  emit('update-task', { ...todo.value })
  isEditable.value = false
}

const cancelEdit = () => {
  todo.value = {
    id: props.id,
    title: props.title,
    description: props.description,
    status: props.status,
  }
  isEditable.value = false
}
</script>

<template>
  <div
    :class="[
      'p-4 bg-white rounded-lg shadow-md mb-4',
      status === 'Completed'
        ? 'border-l-4 border-green-500'
        : status === 'In Progress'
          ? 'border-l-4 border-yellow-500'
          : 'border-l-4 border-blue-500',
    ]"
  >
    <div class="flex items-start justify-between">
      <h2 v-if="!isEditable" class="text-xl font-semibold mb-2">{{ todo.title }}</h2>
      <input
        v-else
        v-model="todo.title"
        class="text-xl font-semibold mb-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        class="text-sm text-yellow-500 font-bold hover:underline"
        @click="isEditable = !isEditable"
        v-show="!isEditable"
      >
        Edit
      </button>
    </div>
    <h4
      v-if="!isEditable"
      :class="[
        'mb-2 font-medium text-xs',
        status === 'Completed'
          ? 'text-green-600'
          : status === 'In Progress'
            ? 'text-yellow-600'
            : 'text-blue-600',
      ]"
    >
      {{ todo.status }}
    </h4>
    <select
      v-else
      v-model="todo.status"
      class="mb-2 font-medium text-xs border-b border-gray-300 focus:ring-2 focus:ring-blue-500"
    >
      <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
    </select>

    <p v-if="!isEditable" class="text-gray-700">{{ todo.description }}</p>
    <p v-else>
      <textarea
        v-model="todo.description"
        class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </p>
    <button
      v-show="isEditable"
      @click="saveTask"
      class="mt-4 px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
    >
      Save
    </button>
    <button
      v-show="isEditable"
      class="mt-4 px-3 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none ml-2"
      @click="cancelEdit"
    >
      Cancel
    </button>
    <button
      v-show="!isEditable"
      @click="emit('delete-task', props.id)"
      class="mt-4 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
    >
      Delete
    </button>
  </div>
</template>
